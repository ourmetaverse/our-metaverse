import { Row } from 'antd';
import { useIntl } from 'umi';
import { css } from '@emotion/css';
import { maxWidth, mobile } from '@/utils/css';
import BlueLine from '@/components/BlueLine';

interface StepProps {
  name: string;
  current: number;
  index: number;
  title: string;
  desc: string;
}

const ColorConfig = {
  Finished: {
    circle: ['#2D78FF', '#1443FF'],
    line: ['rgba(19,31,74,0)', 'rgba(24,60,170,0.53) 20%', 'rgba(28,85,255,1)'],
    block: ['#1443FF', '#000E47'],
  },
  Progress: {
    circle: ['#5596E1', '#17BBE2'],
    line: ['rgba(19,31,74,0)', 'rgba(24,60,170,0.53) 20%', 'rgba(0,170,229,1)'],
    block: ['#001F9B', '#3FDAFF'],
  },
  Waiting: {
    circle: ['#BEBEBE', '#242424'],
    line: ['rgba(82,91,125,0)', 'rgba(65,70,87,0.5) 20%', 'rgba(49,49,49,1)'],
    block: ['#BEBEBE', '#242424'],
  },
};

const Step = (props: StepProps) => {
  const { formatMessage } = useIntl();
  const { name, title, desc, current, index } = props;
  const status =
    current === index ? 'Progress' : index < current ? 'Finished' : 'Waiting';
  return (
    <div
      className={css(`
        flex:1;
        display:flex;
        flex-direction:column;
        align-items:center;
        position:relative;
      `)}
    >
      <div
        className={css(`
          font-size:20px;
          letter-spacing:0.06px;
          line-height:28px;
          font-family: 苹方-简;
          ${mobile} {
            margin-top: 32px;
            margin-bottom: 8px;
          }
        `)}
      >
        {name}
      </div>
      {status === 'Progress' && (
        <div
          className={css(`
          position:absolute;
          top: 40px;
          width: 69px;
          height: 18px;
          border-radius:18px;
          background: linear-gradient(to bottom right, #2863A8,#3366B8);
          font-size:10px;
          letter-spacing:0.03px;
          line-height:14px;
          display:flex;
          justify-content:center;
          align-items:center;
          ${mobile} {
            display:none;
          }
        `)}
        >
          {formatMessage({ id: 'index_roadmap_in_progress' })}
        </div>
      )}
      <div
        className={css(`
          width:100%;
          margin:45px 0 30px 0;
          display:flex;
          justify-content:center;
          position:relative;
          &:after{
            content:'';
            display:${index === 1 ? 'none' : 'inline-block'};
            width:calc(100% - 50px);
            height:5px;
            border-radius:2.5px;
            background: linear-gradient(to right, ${
              ColorConfig[status].line[0]
            },${ColorConfig[status].line[1]}, ${ColorConfig[status].line[2]});
            position:absolute;
            top:10px;
            right:calc(50% + 20px);
          }
          ${mobile} {
            display:none;
          }
        `)}
      >
        <div
          className={css(`
          width:25px;
          height: 25px;
          background: linear-gradient(to bottom right, ${ColorConfig[status].circle[0]}, ${ColorConfig[status].circle[1]});
          border-radius:50%;
          ${mobile} {
            display:none;
          }
        `)}
        ></div>
      </div>
      <div
        className={css`
          width: 180px;
          background: linear-gradient(
            to bottom right,
            ${ColorConfig[status].block[0]},
            ${ColorConfig[status].block[1]}
          );
          border-radius: 12px;
          text-align: center;
          padding-top: 8px;
          height: 126px;
        `}
      >
        <div
          className={css`
            font-size: 16px;
            letter-spacing: 0.05px;
            line-height: 30px;
          `}
        >
          {title}
        </div>
        <div
          className={css`
            margin: 0 8px;
            font-size: 14px;
            opacity: 0.8;
          `}
        >
          {desc}
        </div>
      </div>
    </div>
  );
};

export default () => {
  const { formatMessage } = useIntl();
  const StepContent = [
    {
      name: formatMessage({ id: 'index_roadmap_step_one' }),
      title: formatMessage({ id: 'index_roadmap_step_one_1' }),
      desc: formatMessage({ id: 'index_roadmap_step_one_2' }),
    },
    {
      name: formatMessage({ id: 'index_roadmap_step_two' }),
      title: formatMessage({ id: 'index_roadmap_step_two_1' }),
      desc: formatMessage({ id: 'index_roadmap_step_two_2' }),
    },
    {
      name: formatMessage({ id: 'index_roadmap_step_three' }),
      title: formatMessage({ id: 'index_roadmap_step_three_1' }),
      desc: formatMessage({ id: 'index_roadmap_step_three_2' }),
    },
    {
      name: formatMessage({ id: 'index_roadmap_step_four' }),
      title: formatMessage({ id: 'index_roadmap_step_four_1' }),
      desc: formatMessage({ id: 'index_roadmap_step_four_2' }),
    },
    {
      name: formatMessage({ id: 'index_roadmap_step_five' }),
      title: formatMessage({ id: 'index_roadmap_step_five_1' }),
      desc: formatMessage({ id: 'index_roadmap_step_five_2' }),
    },
  ];
  return (
    <div
      className={css(`
        height: 100vh;
        background: transparent;
        background-size: 100% 100%;
        padding-top: 87px;
        background: linear-gradient(190deg, #0A1855, #000000, #060F35, #041352);
        ${mobile} {
          background: none;
          height: auto;
          padding-top: 32px;
          padding-bottom: 32px;
        }
      `)}
    >
      <div
        className={css`
          background-image: url(/roadmapbgstar.png);
          height: 100%;
          ${mobile} {
            background: none;
            height: auto;
          }
        `}
      >
        <div
          className={css`
            max-width: ${maxWidth};
            margin: 0 auto;
          `}
        >
          <Row
            className={css(`
              display:flex;
              flex-direction:column;
              justify-content:center;
              align-items:center;
            `)}
          >
            <div
              className={css(`
              font-size:40px;
              letter-spacing:0.13px;
              line-height:60px;
              font-family: 苹方-简;
              margin-bottom: 10px;
              font-weight:bold;
              margin-top:80px;
              ${mobile} {
                margin-top: 24px;
              }
            `)}
            >
              {formatMessage({ id: 'index_roadmap_title' })}
            </div>
            <BlueLine />
          </Row>
          <Row
            className={css(`
          height: 456px;
          margin: 24px 0;
          background: linear-gradient(to right bottom, #041A60, #020B32);
          border: 1px solid;
          border-image: linear-gradient(to bottom, rgb(53, 122, 255), rgba(0, 209, 255, 0.17)) 1;
          ${mobile} {
            flex-direction:column;
            margin: 0;
            background-image: none;
            height: auto;
            border: none;
          }
        `)}
          >
            <div
              className={css(`
            display:flex;
            flex-direction:row;
            justify-content:space-around;
            width:100%;
            margin: 100px 50px;
            ${mobile} {
              flex-direction:column;
              margin: 0;
            }
          `)}
            >
              {StepContent.map((item, index) => {
                return (
                  <Step
                    current={3}
                    index={index + 1}
                    name={item.name}
                    title={item.title}
                    desc={item.desc}
                    key={item.name}
                  ></Step>
                );
              })}
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
};
