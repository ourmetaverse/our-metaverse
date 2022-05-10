import ourmetaverse from '@/docs/our-metaverse.md';
import enourmetaverse from '@/docs/en/our-metaverse.md';
import Markdown from '@/components/Markdown';
import ReadBanner from '@/components/ReadBanner';
import RoleBanner from '@/components/RoleBanner';
import { css } from '@emotion/css';
import { maxWidth } from '@/utils/css';

export default () => {
  return (
    <div>
      <ReadBanner />
      <RoleBanner />
      <div
        className={css`
          max-width: ${maxWidth};
          margin: 0 auto;
        `}
      >
        <Markdown zh={ourmetaverse} en={enourmetaverse}></Markdown>
      </div>
    </div>
  );
};
