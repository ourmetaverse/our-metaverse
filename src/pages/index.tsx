import { css } from '@emotion/css';
import IntroBanner from '@/components/IntroBanner';
import BenefitBanner from '@/components/BenefitBanner';
import RoadMap from '@/components/RoadMap';

export default () => {
  return (
    <div>
      <IntroBanner />
      <div
        className={css(`
          max-width: 840px;
          margin: 0 auto 5% auto;
          strong {
            color: blue;
          }
        `)}
      >
        <BenefitBanner />
        <RoadMap />
      </div>
    </div>
  );
};
