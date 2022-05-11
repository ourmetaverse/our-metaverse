import React from 'react';
// https://react-slick.neostack.com/docs/example/center-mode
import Slider from 'react-slick';
import { maxWidth } from '@/utils/css';
import { css } from '@emotion/css';
import { primaryColor } from '@/utils/css';

interface Props {}

const Component: React.FC<Props> = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    initialSlide: 3,
    centerPadding: '50px',
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
      <h2
        className={css`
          font-size: 40px;
          text-align: center;
          margin-top: 110px;
        `}
      >
        小说主要角色
      </h2>
      <div
        className={css`
          width: 120px;
          background-color: ${primaryColor};
          height: 11px;
          margin: 0 auto;
          margin-bottom: 64px;
        `}
      ></div>
      <Slider
        {...settings}
        className={css`
          height: 400px;
          .ourm-role {
            img {
              border-radius: 10px;
              width: 270px;
              height: 270px;
              box-shadow: 0 2px 30px #fff;
              margin-top: 65px;
              margin-left: 85px;
            }
          }
          .slick-center {
            .ourm-role {
              img {
                width: 340px;
                height: 340px;
                margin-top: 30px;
                margin-left: 45px;
              }
            }
          }
          .slick-prev {
            margin-left: -30px;
          }
          .slick-next {
            margin-right: -30px;
          }
          .slick-arrow {
            margin-top: -18px;
          }
          .slick-prev:before {
          }
          .slick-next:before {
          }
          .slick-next:before,
          .slick-prev:before {
            font-size: 60px;
            opacity: 0.3;
          }
        `}
      >
        <div className="ourm-role">
          <img src="/peter.png" alt="peter" />
        </div>
        <div className="ourm-role">
          <img src="/alita.png" alt="peter" />
        </div>
        <div className="ourm-role">
          <img src="/hiro.png" alt="peter" />
        </div>
        <div className="ourm-role">
          <img src="/leader.png" alt="peter" />
        </div>
        <div className="ourm-role">
          <img src="/xuanwu.png" alt="peter" />
        </div>
        <div className="ourm-role">
          <img src="/girl.png" alt="peter" />
        </div>
        <div className="ourm-role">
          <img src="/wangqiang.png" alt="peter" />
        </div>
      </Slider>
    </div>
  );
};

export default Component;
