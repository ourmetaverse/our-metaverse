import React from 'react';
// https://react-slick.neostack.com/docs/example/center-mode
import Slider from 'react-slick';
import { maxWidth, mobile, desktop } from '@/utils/css';
import { css } from '@emotion/css';
import BlueLine from '@/components/BlueLine';
import { roles } from '@/constants';
import { useResponsive } from 'ahooks';
import { useIntl, getLocale } from 'umi';

interface Props {}

const Component: React.FC<Props> = () => {
  const { formatMessage } = useIntl();
  const isCN = getLocale() === 'zh-CN';
  const { pc } = useResponsive();
  const settings = {
    className: 'center',
    centerMode: pc,
    infinite: true,
    initialSlide: 3,
    centerPadding: '50px',
    slidesToShow: pc ? 3 : 1,
    speed: 500,
    focusOnSelect: true,
  };
  return (
    <div
      className={css`
        height: 900px;
        padding-top: 110px;
        background-image: url(/rolebgimg.png);
        ${mobile} {
          width: 100%;
          overflow: hidden;
        }
      `}
    >
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
          `}
        >
          {formatMessage({ id: 'read_role_title' })}
        </h2>
        <BlueLine />
        <Slider
          {...settings}
          className={css`
            height: 600px;
            .ourm-role {
              img {
                border-radius: 15px;
                width: 270px;
                height: 270px;
                box-shadow: 0 2px 30px #fff;
                margin-top: 65px;
                margin-left: 85px;
              }
              .ourm-role-detail {
                display: none;
                text-align: center;
              }

              ${mobile} {
                img {
                  margin: 65px auto;
                }
                .ourm-role-detail {
                  display: block;
                  .ourm-role-name {
                    font-size: 30px;
                    margin-top: 50px;
                  }
                  .ourm-role-desc {
                    opacity: 0.4;
                    font-size: 20px;
                    padding: 0 8px;
                  }
                }
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
              .ourm-role-detail {
                display: block;
                .ourm-role-name {
                  font-size: 30px;
                  margin-top: 50px;
                }
                .ourm-role-desc {
                  opacity: 0.4;
                  font-size: 20px;
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
              margin-top: -118px;
              opacity: 0.8;
              &:hover {
                opacity: 1;
              }
            }
            .slick-next:before,
            .slick-prev:before {
              font-size: 60px;
              opacity: 0.3;
              ${mobile} {
                display: none;
              }
            }
          `}
        >
          {roles.map((item) => {
            return (
              <div className="ourm-role">
                <img src={item.img} alt={item.name} />
                <div className="ourm-role-detail">
                  <div className="ourm-role-name">
                    {isCN ? item.name : item.nameEN}
                  </div>
                  <div className="ourm-role-desc">
                    {isCN ? item.desc : item.descEN}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Component;
