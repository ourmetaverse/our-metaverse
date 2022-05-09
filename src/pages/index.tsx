import { css } from '@emotion/css';
import IntroBanner from '@/components/IntroBanner';
import MintBanner from '@/components/MintBanner';
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
        <MintBanner />
        <RoadMap />
      </div>
    </div>
  );
};
