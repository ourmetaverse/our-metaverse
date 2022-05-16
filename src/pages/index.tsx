import { css } from '@emotion/css';
import IntroBanner from '@/components/IntroBanner';
import BenefitBanner from '@/components/BenefitBanner';
import RoadMap from '@/components/RoadMap';
import StarCanvas from '@/components/StarCanvas';
import { useResponsive } from 'ahooks';
import ReactFullpage from '@fullpage/react-fullpage';
import { maxWidth } from '@/utils/css';

export default () => {
  const { pc } = useResponsive();
  return (
    <StarCanvas
      numStars={pc ? 500 : 100}
      FPS={30}
      minSize={3}
      maxSize={8}
      shape="cross star"
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
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className="section">
                  <IntroBanner />
                </div>
                <div className="section">
                  <BenefitBanner />
                </div>
                <div className="section">
                  <RoadMap />
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </StarCanvas>
  );
};
