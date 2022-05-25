// 参考 https://emotion.sh/docs/media-queries
export const mobile = `@media (max-width: 767px)`;
export const desktop = `@media (min-width: 768px)`;
export const primaryColor = '#1443FF';
export const maxWidth = '1440px';
export const navHeight = '87px';
export const fontColor = `
  background: linear-gradient(to right, #0f22ff, #b5bbff);
  background-clip: text;
  color: transparent;
`;

// 鼠标发光 hover 效果，备用
// &::after {
//   background: #fff;
//   content: "";
//   height: 155px;
//   left: -75px;
//   opacity: .2;
//   position: absolute;
//   top: -50px;
//   transform: rotate(35deg);
//   width: 50px;
//   z-index: 1;
// }
// &:hover {
//   ::after {
//     left: 120%;
//     transition: all 1500ms cubic-bezier(0.19, 1, 0.22, 1);
//   }
// }
