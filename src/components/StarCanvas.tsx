import { ReactElement, useCallback, useEffect, useRef } from 'react';
import Star, { Shape } from '@/utils/Star';
import { css } from '@emotion/css';

interface Prop {
  numStars?: number;
  FPS?: number;
  minSize?: number;
  maxSize?: number;
  shape?: Shape;
  children?: ReactElement;
}

const generateStars = (
  numStars: number,
  screenW: number,
  screenH: number,
  minSize: number,
  maxSize: number,
  shape?: Shape,
) => {
  let stars = [];
  for (let i = 0; i < numStars; i++) {
    let x = Math.round(Math.random() * screenW);
    let y = Math.round(Math.random() * screenH);
    let length = minSize + Math.random() * (maxSize - minSize);
    let opacity = Math.random();
    let star = new Star(x, y, length, opacity, screenW, screenH, shape);
    stars.push(star);
  }
  return stars;
};

const StarCanvas = (props: Prop) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);
  const numStars = props.numStars || 2000;
  const FPS = props.FPS || 50;
  const minSize = props.minSize || 1;
  const maxSize = props.maxSize || 3;

  const initCanvasSize = useCallback(() => {
    const screenW =
      window.innerWidth ||
      document.body.clientWidth ||
      document.documentElement.clientWidth;
    const screenH =
      window.innerHeight ||
      document.body.clientHeight ||
      document.documentElement.clientHeight;
    canvasRef.current?.setAttribute('width', screenW.toString());
    canvasRef.current?.setAttribute('height', screenH.toString());
    ctx.current = canvasRef.current?.getContext('2d') || null;
    return {
      screenW,
      screenH,
    };
  }, [canvasRef]);

  useEffect(() => {
    const { screenW, screenH } = initCanvasSize();
    const stars = generateStars(
      numStars,
      screenW,
      screenH,
      minSize,
      maxSize,
      props?.shape,
    );
    const animate = () => {
      if (ctx.current) {
        ctx.current.clearRect(0, 0, screenW, screenH);
        for (let i = 0; i < stars.length; i++) {
          stars[i].draw(ctx.current);
        }
      }
    };
    const timer = setInterval(animate, 1000 / FPS);
    return () => {
      clearInterval(timer);
    };
  }, [initCanvasSize, generateStars, numStars, FPS, minSize, maxSize]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={css(`
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color:#000;
        `)}
      ></canvas>
      {props?.children}
    </>
  );
};

export default StarCanvas;
