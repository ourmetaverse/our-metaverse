"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[486],{3584:function(P,s,e){var d=e(59400),t=e.n(d),c=e(67294),l=e(90018),E=e(4998),v=e(85893),i,u=function(o){var m=o.width,h=m===void 0?180:m,a=o.primary,p=o.left;return(0,v.jsx)("div",{className:(0,l.iv)(i||(i=t()([`
        width: `,`px;
        background: url(`,`)
          no-repeat;
        height: 20px;
        margin: 0 `,`;
        margin-top: 16px;
        margin-bottom: 32px;
        `,` {
          margin-bottom: 32px;
        }
      `])),h,a?"/blueprimaryline.png":"/blueline.png",p?"":"auto",E.ai)})};s.Z=u},33766:function(P,s,e){var d=e(42122),t=e.n(d),c=e(59400),l=e.n(c),E=e(67294),v=e(17788),i=e(90018),u=e(4998),r=e(85893),o,m=function(a){return(0,r.jsx)(v.Z,t()({footer:null,className:(0,i.iv)(o||(o=l()([`
        top: 20%;
        .ant-modal-close {
          right: -46px;
          top: -46px;
          `,` {
            right: 0;
          }
        }
        .ant-modal-body {
          border: 2px solid #1443ff;
          border-radius: 10px;
        }
        .ant-modal-close-x {
          width: 40px;
          height: 40px;
          line-height: 40px;
          border-radius: 50%;
          border: 1px solid #979797;
          color: #979797;
          &:hover {
            color: #1443ff;
            border: 1px solid #1443ff;
          }
        }
      `])),u.ai)},a))};s.Z=m},38901:function(P,s,e){e.r(s);var d=e(59400),t=e.n(d),c=e(27424),l=e.n(c),E=e(3584),v=e(33766),i=e(40964),u=e(4998),r=e(90018),o=e(57434),m=e(37356),h=e(75081),a=e(67294),p=e(12304),n=e(85893),f,x,j,C,A,I,B;s.default=function(){var R=(0,p.useIntl)(),D=R.formatMessage,T=(0,p.useModel)("user"),M=T.contract,g=T.address,U=(0,a.useState)(!1),L=l()(U,2),y=L[0],b=L[1],k=(0,a.useState)(!1),W=l()(k,2),N=W[0],S=W[1];(0,a.useEffect)(function(){M&&g&&M.balanceOf(g).then(function(_){S(Number(_)>0)}).catch(function(_){var O;o.ZP.error(((O=_.data)===null||O===void 0?void 0:O.message)||_.message)})},[M,g]);var K=[{title:D({id:"jike"}),icon:"/jike.png",hoverIcon:"/jike-hover.png",link:"https://m.okjike.com/users/9B1FBD80-B109-4AAA-AD5C-568142A67D5C"},{title:"Twitter",icon:"/twitter.png",hoverIcon:"/twitter-hover.png",link:"https://twitter.com/OurMetaverseDAO"},{title:"OpenSea",icon:"/opensea.png",hoverIcon:"/opensea-hover.png",link:"https://opensea.io/collection/our-metaverse"},{title:"Blog",icon:"/blog.png",hoverIcon:"/blog-hover.png",link:"https://mirror.xyz/our-metaverse.eth"}];return(0,n.jsxs)("div",{className:(0,r.iv)(f||(f=t()([`
        background: linear-gradient(#000, `,`);
        padding: 150px 16px;
      `])),u.lr),children:[K.map(function(_){return(0,n.jsx)("link",{rel:"prefetch",href:_.hoverIcon},_.hoverIcon)}),(0,n.jsx)("div",{className:(0,r.iv)(x||(x=t()([`
          font-size: 40px;
          text-align: center;
          `,` {
            font-size: 24px;
          }
        `])),u.ai),children:D({id:"community_title"})}),(0,n.jsx)(E.Z,{}),(0,n.jsx)("div",{children:K.map(function(_){return(0,n.jsx)("a",{target:"_blank",href:_.link||"#",className:(0,r.iv)(j||(j=t()([`
                color: #fff;
                opacity: 0.8;
                display: block;
                max-width: 900px;
                margin: 24px auto;
                background-color: rgba(0, 0, 0, 0.5);
                height: 87px;
                line-height: 87px;
                opacity: 0.8;
                &:hover {
                  color: #fff;
                  opacity: 1;
                }
              `]))),onClick:function(F){if(!_.link)F.preventDefault();else return;_.isWeChat&&b(!0)},children:(0,n.jsxs)("div",{className:(0,r.iv)(C||(C=t()([`
                  display: flex;
                  justify-content: center;
                  .ourm-iconimg {
                    background-image: url(`,`);
                    width: 60px;
                    height: 60px;
                    margin-top: 13px;
                  }
                  &:hover {
                    .ourm-iconimg {
                      background-image: url(`,`);
                    }
                  }
                `])),_.icon,_.hoverIcon),children:[(0,n.jsx)("div",{className:(0,r.iv)(A||(A=t()([`
                    display: inline-block;
                    margin-right: 34px;
                    font-size: 50px;
                  `]))),children:(0,n.jsx)("div",{className:"ourm-iconimg"})}),(0,n.jsx)("div",{className:(0,r.iv)(I||(I=t()([`
                    display: inline-block;
                    font-size: 24px;
                    width: 130px;
                  `]))),children:_.title})]})},_.title)})}),(0,n.jsx)(v.Z,{visible:y,onCancel:function(){b(!1)},children:(0,n.jsx)("div",{className:(0,r.iv)(B||(B=t()([`
            text-align: center;
          `]))),children:N?(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:["\u52A0\u597D\u53CB\u8BF7\u5907\u6CE8\u5165\u7FA4\u53E3\u4EE4\uFF1A",(0,n.jsx)("strong",{children:"\u6211\u4EEC\u90FD\u662F\u661F\u661F\u7684\u5B69\u5B50"})]}),(0,n.jsx)(m.Z,{src:i.SH,placeholder:(0,n.jsx)(h.Z,{})})]}):D({id:"wechat_tip"})})})]})}}}]);
