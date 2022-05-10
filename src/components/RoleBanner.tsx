import React from 'react';
// https://react-slick.neostack.com/docs/example/center-mode
import Slider from 'react-slick';
import { maxWidth } from '@/utils/css';
import { css } from '@emotion/css';

interface Props {}

const Component: React.FC<Props> = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div
      className={css`
        max-width: ${maxWidth};
        margin: 0 auto;
      `}
    >
      <h2>小说主要角色</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Component;
