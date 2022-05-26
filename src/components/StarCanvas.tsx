import { ReactElement, useEffect, useRef } from 'react';
import Star, { Shape } from '@/utils/Star';
import { css } from '@emotion/css';
import { useSize } from 'ahooks';

interface Prop {
  numStars?: number;
  FPS?: number;
  minSize?: number;
  maxSize?: number;
  shape?: Shape;
  children?: ReactElement;
  background?: string;
  visible?: boolean;
  zIndex?: number;
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
  const visible = props.visible;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctx = useRef<CanvasRenderingContext2D | null>(null);
  const numStars = visible ? props.numStars || 100 : 0;
  const FPS = props.FPS || 50;
  const minSize = props.minSize || 1;
  const maxSize = props.maxSize || 3;
  const background = props.background || '#000000';

  const size = useSize(document.querySelector('body'));

  useEffect(() => {
    if (size === undefined) {
      return;
    }
    const { width, height } = size;
    canvasRef.current?.setAttribute('width', width.toString());
    canvasRef.current?.setAttribute('height', height.toString());
    ctx.current = canvasRef.current?.getContext('2d') || null;
    const stars = generateStars(
      numStars,
      width,
      height,
      minSize,
      maxSize,
      props?.shape,
    );
    const animate = () => {
      if (ctx.current && visible) {
        ctx.current.clearRect(0, 0, width, height);
        for (let i = 0; i < stars.length; i++) {
          stars[i].draw(ctx.current);
        }
      }
    };
    const timer = setInterval(animate, 1000 / FPS);
    return () => {
      clearInterval(timer);
    };
  }, [
    size,
    canvasRef,
    generateStars,
    numStars,
    FPS,
    minSize,
    maxSize,
    visible,
  ]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={css(`
          z-index: ${props.zIndex === undefined ? -1 : props.zIndex};
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: auto;
          background:${background};
        `)}
      ></canvas>
      {props?.children}
    </>
  );
};

export default StarCanvas;
