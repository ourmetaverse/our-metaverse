import React, { useRef } from 'react';
import { css } from '@emotion/css';
import IntroBanner from '@/components/IntroBanner';
import BenefitBanner from '@/components/BenefitBanner';
import RoadMap from '@/components/RoadMap';
import StarCanvas from '@/components/StarCanvas';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';

const throttle = function (fn: Function, interval: number) {
  let last = Date.now();
  return function () {
    let current = Date.now();
    let args = [].slice.call(arguments, 0);
    if (current - last >= interval) {
      fn.apply(null, args);
      last = current;
    }
  };
};

export default () => {
  const carouselRef = useRef<CarouselRef>(null);
  const currentIndex = useRef(1);
  const isChanging = useRef(false);

  const handleWheel = (e: React.WheelEvent) => {
    const deltaY = e.nativeEvent?.deltaY;
    if (isChanging.current) return;
    if (deltaY < 0) {
      if (currentIndex.current > 1) {
        currentIndex.current -= 1;
        isChanging.current = true;
        carouselRef.current?.prev();
      }
    } else {
      if (currentIndex.current < 3) {
        currentIndex.current += 1;
        isChanging.current = true;
        carouselRef.current?.next();
      }
    }
  };

  const newHandleWhell = throttle(handleWheel, 100);

  const handleChange = () => {
    // When using the trackpad to scroll, a slight swipe will prolong the execution for a period of time,
    // the processing logic of the wheel event will be triggered many times.
    // Therefore, a timer is used to delay the execution of the next event
    const timer = setTimeout(() => {
      isChanging.current = false;
      clearTimeout(timer);
    }, 1000);
  };

  return (
    <div
      onWheel={newHandleWhell}
      className={css(`
        width: 1440px;
        height: 100vh;
        overflow: hidden;
        margin: 0 auto;
      `)}
    >
      <StarCanvas
        numStars={1000}
        FPS={60}
        minSize={3}
        maxSize={8}
        shape="cross star"
      >
        <Carousel
          dotPosition="right"
          dots={false}
          ref={carouselRef}
          afterChange={handleChange}
        >
          <IntroBanner />
          <BenefitBanner />
          <RoadMap />
        </Carousel>
      </StarCanvas>
    </div>
  );
};
