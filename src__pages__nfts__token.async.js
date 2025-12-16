(self.webpackChunk=self.webpackChunk||[]).push([[79],{71542:function(Oe,C,e){"use strict";e.r(C),e.d(C,{default:function(){return ue}});var w=e(59400),d=e.n(w),q=e(17061),T=e.n(q),_=e(17156),ee=e.n(_),te=e(27424),f=e.n(te),m=e(67294),u=e(90018),t=e(85893),N,ne=function(a){var l=a.type;return(0,t.jsxs)("div",{className:(0,u.iv)(N||(N=d()([`
        display: inline-block;
        height: 60px;
        width: 60px;
        .ourm-icon-image-hover {
          display: none;
        }
        .ourm-icon-image {
          display: block;
        }
        &:hover {
          .ourm-icon-image {
            display: none;
          }
          .ourm-icon-image-hover {
            display: block;
          }
        }
      `]))),children:[(0,t.jsx)("img",{className:"ourm-icon-image",src:"/".concat(l,".png"),alt:""}),(0,t.jsx)("img",{className:"ourm-icon-image-hover",src:"/".concat(l,"-hover.png"),alt:""})]})},ae=ne,v=e(40964),O=e(4998),re=e(17909),se=e(91478),P=e(56518),o=e(57434),ie=e(37356),B=e(42075),I=e(45093),R=e(78205),$=e(38289),oe=e(87192),le=e(35553),ce=e(38018),y=e(12304),de=e(11238),G,E,A,F,M,L,S=P.Z.Option,W={ipfs:{reg:/^\w{46}(\/.*)?$/,placeholder:"CID like QmP1vMSaw3rG2coQaBfgqBhax1t8qyyng1Z91cjcH8MvBc"},ethereum:{reg:/^0x[0-9a-fA-F]{40}$/,placeholder:"Address like 0xEcd0D12E21805803f70de03B72B1C162dB0898d9"},custom:{reg:/^.{1, 128}$/,placeholder:"Custom text length less then 128"}},ue=function(H){var a=H.token,l=(0,ce.parse)(location.search).token;a===void 0&&l!==void 0&&typeof l=="string"&&(a=parseInt(l));var ve=(0,re.F)(),p=ve.pc,me=(0,m.useState)(0),D=f()(me,2),z=D[0],he=D[1],ge=(0,m.useState)([]),J=f()(ge,2),Q=J[0],fe=J[1],pe=(0,m.useState)(""),k=f()(pe,2),h=k[0],xe=k[1],x=(0,y.useModel)("user"),g=x.contract,je=x.ConnectTip,U=x.address,Z=x.contractWithSigner,ye=(0,y.useIntl)(),s=ye.formatMessage,Se=(0,m.useState)(),X=f()(Se,2),b=X[0],K=X[1],Ze=(0,m.useState)("ethereum"),V=f()(Ze,2),j=V[0],Ce=V[1],Te=(0,se.Z)(ee()(T()().mark(function r(){var n,i,Y;return T()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(!(a===void 0||p)){c.next=2;break}return c.abrupt("return","");case 2:return c.next=4,(0,de.ZP)("https://api-our-metaverse.vercel.app/api/images",{params:{start:a,len:1}});case 4:return n=c.sent,i=n.images,Y=i===void 0?[]:i,c.abrupt("return",Y[0]);case 8:case"end":return c.stop()}},r)})),{onError:function(n){o.ZP.error(n.message)},refreshDeps:[a]}),Ne=Te.data;return(0,m.useEffect)(function(){p&&l&&y.history.push("/nfts?token=".concat(l)),g&&(g.getRewardBalanceWithToken(a).then(function(r){he(Number(r))}).catch(function(r){var n;o.ZP.error(((n=r.data)===null||n===void 0?void 0:n.message)||r.message)}),g.ownerOf(a).then(function(r){K(r)}).catch(function(r){K(s({id:"not_mint_yet"}))}),g.getGrantsWithToken(a).then(fe).catch(function(r){var n;o.ZP.error(((n=r.data)===null||n===void 0?void 0:n.message)||r.message)}))},[g,a,p]),!g||!Z?(0,t.jsx)("div",{className:(0,u.iv)(G||(G=d()([`
          `,` {
            margin: 16px;
            margin-top: 100px;
          }
        `])),O.ai),children:(0,t.jsx)(je,{})}):a&&a>=v.ei?(0,t.jsx)("div",{children:s({id:"empty_token_tip"},{token:a})}):(0,t.jsxs)("div",{className:(0,u.iv)(E||(E=d()([`
        `,` {
          padding: 120px 16px;
        }
      `])),O.ai),children:[(0,t.jsx)("div",{className:(0,u.iv)(A||(A=d()([`
          font-size: 24px;
          opacity: 0.5;
          margin-top: -10px;
        `]))),children:"OurMetaverse"}),(0,t.jsxs)("div",{className:(0,u.iv)(F||(F=d()([`
          font-size: 50px;
          color: white;
        `]))),children:["# ",a]}),p?null:(0,t.jsx)(ie.Z,{className:(0,u.iv)(M||(M=d()([`
            width: 100%;
          `]))),src:Ne||"/blindbox2.gif"}),(0,t.jsx)(B.Z,{className:(0,u.iv)(L||(L=d()([`
          margin-bottom: 12px;
        `]))),children:(0,t.jsx)("a",{target:"_blank",title:"OpenSea",href:"https://opensea.io/assets/0xecd0d12e21805803f70de03b72b1c162db0898d9/".concat(a),children:(0,t.jsx)(ae,{type:"opensea"})})}),(0,t.jsx)(B.Z,{children:z>0&&U===b?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(I.ZP,{onClick:function(){Z.receiveRewardBalanceWithToken(a).then(function(){o.ZP.success(s({id:"withdraw_succeed"}))}).catch(function(n){var i;o.ZP.error(((i=n.data)===null||i===void 0?void 0:i.message)||n.message)})},children:[s({id:"available_reward"}),"\uFF1A",z/v.yg," ETH"," ",s({id:"withdraw_now"})]})}):null}),(0,t.jsx)(R.Z,{header:(0,t.jsx)("div",{children:s({id:"grant_list"})}),footer:U===b?(0,t.jsxs)($.Z.Group,{compact:!0,children:[(0,t.jsx)($.Z,{placeholder:W[j].placeholder,addonBefore:(0,t.jsxs)(P.Z,{onChange:Ce,value:j,className:"select-before",children:[(0,t.jsx)(S,{value:"ethereum",children:"Ethereum"}),(0,t.jsx)(S,{value:"ipfs",children:"ipfs://"}),(0,t.jsx)(S,{value:"custom",children:"Custom"})]}),style:{width:"calc(100% - 67px)"},value:h,onChange:function(n){xe(n.target.value)}}),(0,t.jsx)(I.ZP,{type:"primary",onClick:function(){if(!h){o.ZP.error(s({id:"grant_required"}));return}if(!W[j].reg.test(h)){o.ZP.error(s({id:"grant_validate"}));return}if(h.length>v.JH){o.ZP.error(s({id:"grant_limit"},{grantLimitLength:v.JH}));return}var n=v.$g;a===0?n=v.E:a===1&&(n=v.XL);var i=le.fi(String(Q.length*n));Z.grant(a,j==="ipfs"?"ipfs://".concat(h):h,{value:i})},children:s({id:"add_grant"})})]}):null,bordered:!0,dataSource:Q,renderItem:function(n){return(0,t.jsxs)(R.Z.Item,{children:[(0,t.jsx)(oe.Z.Text,{mark:!0,children:"[GRANT]"})," ",n]})}})]})}},24654:function(){}}]);
