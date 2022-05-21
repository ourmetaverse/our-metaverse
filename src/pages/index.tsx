import { css } from '@emotion/css';
import IntroBanner from '@/components/IntroBanner';
import BenefitBanner from '@/components/BenefitBanner';
import RoadMap from '@/components/RoadMap';
import StarCanvas from '@/components/StarCanvas';
import { useResponsive } from 'ahooks';
// @ts-ignore
import ReactFullpage from '@fullpage/react-fullpage';
import { maxWidth } from '@/utils/css';

export default () => {
  const { pc } = useResponsive();
  const content = (
    <>
      <div className="section">
        <IntroBanner />
      </div>
      <div className="section">
        <BenefitBanner />
      </div>
      <div className="section">
        <RoadMap />
      </div>
    </>
  );
  if (!pc) {
    return (
      <StarCanvas
        numStars={100}
        FPS={30}
        minSize={3}
        maxSize={8}
        shape="cross star"
      >
        <div
          className={css`
            position: relative;
          `}
        >
          {content}
        </div>
      </StarCanvas>
    );
  }
  return (
    <StarCanvas
      numStars={500}
      FPS={30}
      minSize={3}
      maxSize={8}
      shape="cross star"
      background="linear-gradient(to right bottom, #000000, #060F35, #142E9D, #041352)"
    >
      <div
        className={css`
          max-width: ${maxWidth};
          margin: 0 auto;
        `}
      >
        <ReactFullpage
          // license for opensource GPLv3 license
          licenseKey="ourm-metaverse"
          scrollingSpeed={500} /* Options here */
          render={() => {
            return <ReactFullpage.Wrapper>{content}</ReactFullpage.Wrapper>;
          }}
        />
      </div>
    </StarCanvas>
  );
};
