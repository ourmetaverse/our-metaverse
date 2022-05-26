// @ts-ignore
import ReactFullpage from '@/utils/fullpage';
import { css } from '@emotion/css';
import IntroBanner from '@/components/IntroBanner';
import BenefitBanner from '@/components/BenefitBanner';
import RoadMap from '@/components/RoadMap';
import StarCanvas from '@/components/StarCanvas';
import PFPShow from '@/components/PFPShow';
import Members from '@/components/Members';
import { useResponsive } from 'ahooks';

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
        <PFPShow />
      </div>
      <div className="section">
        <RoadMap />
      </div>
      <div className="section">
        <Members />
      </div>
    </>
  );
  if (!pc) {
    return (
      <StarCanvas
        numStars={60}
        FPS={30}
        minSize={3}
        maxSize={8}
        shape="cross star"
        zIndex={0}
        visible
        background="linear-gradient(190deg, #041352, #060F35, #142E9D 40%, #000000)"
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
    <div
      className={css`
        margin: 0 auto;
      `}
    >
      <ReactFullpage
        // license for opensource GPLv3 license
        licenseKey="ourm-metaverse"
        scrollOverflow
        scrollingSpeed={500} /* Options here */
        render={() => {
          return <ReactFullpage.Wrapper>{content}</ReactFullpage.Wrapper>;
        }}
      />
    </div>
  );
};
