import { css } from '@emotion/css';
import { useModel } from 'umi';
import ConnectWallet from '@/components/ConnectWallet';
import IntroBanner from '@/components/IntroBanner';
import MintBanner from '@/components/MintBanner';
import RoadMap from '@/components/RoadMap';

export default () => {
  const { started, StartLoading } = useModel('balance');
  const { contract } = useModel('user');
  if (!contract) {
    return <ConnectWallet />;
  }

  if (!started) {
    return <StartLoading started={started} />;
  }

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
