import { Anchor, Typography } from 'antd';
import enwhitepaper from '@/docs/en/whitepaper.md';
import whitepaper from '@/docs/whitepaper.md';
import enpreface from '@/docs/en/preface.md';
import preface from '@/docs/preface.md';
import Markdown from '@/components/Markdown';
import { css } from '@emotion/css';

const { Link } = Anchor;
const { Title } = Typography;

export default () => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
      `}
    >
      <Anchor
        className={css`
          width: 240px;
        `}
      >
        <Link href="#dream" title="项目愿景" />
        <Link href="#timeline" title="时间线" />
        <Link href="#roles" title="人物介绍" />
        <Link href="#risk" title="风险提示" />
        <Link href="#whitepaper" title="白皮书" />
      </Anchor>
      <div>
        <a href="#dream">
          <Title id="dream" level={2}>
            项目愿景
          </Title>
        </a>
        <Markdown zh={preface} en={enpreface} />
        <a href="#timeline">
          <Title id="timeline" level={2}>
            时间线
          </Title>
        </a>
        <ul>
          <li>
            2028
            年，中国登月项目取得进展，人类再度登陆月球，新一轮的太空竞赛开启。
          </li>
          <li>
            2029
            年，人类登陆火星，启动火星移民。小部分人类开始移居火星移民基地。
          </li>
          <li>
            2032
            年，爆发第三次世界大战，地球进入辐射时代。人类出现大规模死亡，前往火星基地的船票一票难求。
          </li>
          <li>
            2049
            年，脑机接口突破，火星移民率先进入元宇宙时代。人类的创造力出现爆发，催生了人类科技文化复兴。同年，星环DAO成立。
          </li>
          <li>2057 年，基础物理学出现关键突破，人类开启了太空改造时代。</li>
          <li>2058 年，火星移民局开启金星改造计划和重返地球计划。</li>
          <li>
            2060
            年，地球爆发自由运动，由地球原住民组成的革命军和火星移民局爆发战争。
          </li>
          <li>
            2078
            年，星环DAO成功实验超光速跃迁引擎，重返地球计划终止，火星移民局开启星际探索时代。
          </li>
          <li>
            2080
            年，金星完成改造，第一批金星移民开启。同时，金星太空电梯建造启动。同年，“真实世界”元宇宙开启。
          </li>
          <li>2082 年，星环DAO成功发现了第一颗太阳系外宜居行星。</li>
          <li>2112 年，金星开始建设超铁系统，用于支撑大量增长的人口需求。</li>
          <li>
            2121
            年，星环DAO成功发现了第四颗宜居行星“晨昏线”，加上金星和地球，“真实世界”元宇宙中对应也一共有6颗行星。
          </li>
          <li>2122 年，玄武逃离栖息地，加入革命军。</li>
        </ul>
        <a href="#roles">
          <Title id="roles" level={2}>
            人物介绍
          </Title>
        </a>
        <div>
          <ul>
            <li>玄武，一个精炼的小伙子，坚毅并有探索精神。</li>
            <li>弘：一个喜欢把弄武士刀的搞笑胖子。</li>
            <li>阿丽塔：一个喜欢东亚文化的西方人，灵动的妹纸。</li>
            <li>发卡女孩：温雅的神秘东方面孔女子。</li>
            <li>汪强：冷静做事果断的革命军人。</li>
            <li>彼得：一个原俄罗斯人的名字，鲁莽的革命军人。</li>
            <li>首领：年迈的革命军女领导者，一个有故事的古代人。</li>
          </ul>
        </div>
        <a href="#risk">
          <Title id="risk" level={2}>
            风险提示
          </Title>
        </a>
        <div>
          # 风险提示 **在参与该项目前请仔细阅读该文档，了解相关风险。** 1.
          无论是基础 NFT 还是特殊
          NFT，一旦售出不提供退换。本人写作水平一般，铸造的 NFT
          可能无法售出，甚至也可能价值归零。购买普通权益更多的是代表购买《我们的元宇宙》的二次创作授权，请勿恶意炒作，让真正想要基于它二次创作的人拥有。当真正需要二次创作授权时才售出是我的期待，这样才能让更多创作者随时可以加入进来。
          2.
          本人只是业余的科幻作家，《我们的元宇宙·开端》更多是创作了一个世界观，里面包含了很多不完整的信息，目的也是为了给二次创作留下空间，另外文中会包含很多有关区块链、元宇宙和
          Web3 的内容，对于普通读者来说可能并不友好。 3. 对于 NFT
          对应的图片艺术品，当前因为还没有找到合作的艺术家，所以创作还未开始。开图日期和内容没有任何保证，请君谨慎。
          4. 这是一个个人发起的项目，完全是处于自己对 Web3
          和科幻的热爱，希望能够在实现自己梦想的同时能够为 Web3
          和科幻贡献一点点力量。个人能力有限，也没有机构参与营销，无法保证拥有该
          NFT 的朋友获取收益，请大家谨慎参与。 5.
          项目中涉及到的关于著作权的各种声明和约定仅仅依靠智能合约和 Web3
          世界的契约精神保证，考虑到不同国家和地区的法律差异以及当前数字版权的不完善，加上我本人的著作权相关知识的匮乏，所以也可能给该项目的后续正常运作带来一定的风险。
          除了以上风险外，《我们的元宇宙·开端》小说中的内容是对未来的幻想和某种设定，不是预测，也不代表作者的观点，请勿作为投资建议。文中角色的观点和行为只是为了故事效果，不代表作者本人观点。尤其是小说中的一些调侃，更多是一种致敬以及从角色角度上的设定，请勿对号入座。作者本人是技术乐观主义者，希望这个项目能为
          Web3 的发展做出一点小小的贡献。
          下面是《我们的元宇宙》的创世作品《我们的元宇宙·开端》，祝大家阅读愉快。你也可以在
          [Mirror](https://mirror.xyz/our-metaverse.eth/_RtrXQwpgDByGhhVeatlcdYbBelpCvbqGCQxuaYa8Jk)
          上阅读。
        </div>
        <a href="#whitepaper">
          <Title id="whitepaper" level={2}>
            白皮书
          </Title>
        </a>
        <Markdown zh={whitepaper} en={enwhitepaper} />
      </div>
    </div>
  );
};
