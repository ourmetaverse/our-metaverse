"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[343],{61430:function(We,ne,j){j.d(ne,{ConfigCtrl:function(){return H},zv:function(){return w},uA:function(){return ye},ExplorerCtrl:function(){return Fe},jb:function(){return ze},OptionsCtrl:function(){return P},AV:function(){return ce},ThemeCtrl:function(){return Ze},ToastCtrl:function(){return qe}});var A=j(861),x=j(27424),me=j(18698);const N=Symbol(),re=Symbol(),F="a",z="w";let he=(e,t)=>new Proxy(e,t);const se=Object.getPrototypeOf,oe=new WeakMap,ae=e=>e&&(oe.has(e)?oe.get(e):se(e)===Object.prototype||se(e)===Array.prototype),X=e=>typeof e=="object"&&e!==null,Pe=e=>{if(Array.isArray(e))return Array.from(e);const t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(n=>{n.configurable=!0}),Object.create(se(e),t)},ie=e=>e[re]||e,je=(e,t,n,r)=>{if(!ae(e))return e;let l=r&&r.get(e);if(!l){const u=ie(e);l=(b=>Object.values(Object.getOwnPropertyDescriptors(b)).some(s=>!s.configurable&&!s.writable))(u)?[u,Pe(u)]:[u],r==null||r.set(e,l)}const[o,a]=l;let i=n&&n.get(o);return i&&i[1].f===!!a||(i=((u,b)=>{const s={f:b};let h=!1;const g=(p,v)=>{if(!h){let O=s[F].get(u);if(O||(O={},s[F].set(u,O)),p===z)O[z]=!0;else{let L=O[p];L||(L=new Set,O[p]=L),L.add(v)}}},m={get:(p,v)=>v===re?u:(g("k",v),je(Reflect.get(p,v),s[F],s.c,s.t)),has:(p,v)=>v===N?(h=!0,s[F].delete(u),!0):(g("h",v),Reflect.has(p,v)),getOwnPropertyDescriptor:(p,v)=>(g("o",v),Reflect.getOwnPropertyDescriptor(p,v)),ownKeys:p=>(g(z),Reflect.ownKeys(p))};return b&&(m.set=m.deleteProperty=()=>!1),[m,s]})(o,!!a),i[1].p=he(a||o,i[0]),n&&n.set(o,i)),i[1][F]=t,i[1].c=n,i[1].t=r,i[1].p},Ae=(e,t,n,r)=>{if(Object.is(e,t))return!1;if(!X(e)||!X(t))return!0;const l=n.get(ie(e));if(!l)return!0;if(r){const a=r.get(e);if(a&&a.n===t)return a.g;r.set(e,{n:t,g:!1})}let o=null;try{for(const a of l.h||[])if(o=Reflect.has(e,a)!==Reflect.has(t,a),o)return o;if(l[z]===!0){if(o=((a,i)=>{const u=Reflect.ownKeys(a),b=Reflect.ownKeys(i);return u.length!==b.length||u.some((s,h)=>s!==b[h])})(e,t),o)return o}else for(const a of l.o||[])if(o=!!Reflect.getOwnPropertyDescriptor(e,a)!=!!Reflect.getOwnPropertyDescriptor(t,a),o)return o;for(const a of l.k||[])if(o=Ae(e[a],t[a],n,r),o)return o;return o===null&&(o=!0),o}finally{r&&r.set(e,{n:t,g:o})}},nt=e=>!!ae(e)&&N in e,De=e=>ae(e)&&e[re]||null,ve=(e,t=!0)=>{oe.set(e,t)},rt=(e,t,n)=>{const r=[],l=new WeakSet,o=(a,i)=>{if(l.has(a))return;X(a)&&l.add(a);const u=X(a)&&t.get(ie(a));if(u){var b,s;if((b=u.h)==null||b.forEach(g=>{const m=`:has(${String(g)})`;r.push(i?[...i,m]:[m])}),u[z]===!0){const g=":ownKeys";r.push(i?[...i,g]:[g])}else{var h;(h=u.o)==null||h.forEach(g=>{const m=`:hasOwn(${String(g)})`;r.push(i?[...i,m]:[m])})}(s=u.k)==null||s.forEach(g=>{n&&!("value"in(Object.getOwnPropertyDescriptor(a,g)||{}))||o(a[g],i?[...i,g]:[g])})}else i&&r.push(i)};return o(e),r},st=e=>{he=e};var le=function(t){return me(t)==="object"&&t!==null},M=new WeakMap,J=new WeakSet,Se=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Object.is,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(s,h){return new Proxy(s,h)},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:function(s){return le(s)&&!J.has(s)&&(Array.isArray(s)||!(Symbol.iterator in s))&&!(s instanceof WeakMap)&&!(s instanceof WeakSet)&&!(s instanceof Error)&&!(s instanceof Number)&&!(s instanceof Date)&&!(s instanceof String)&&!(s instanceof RegExp)&&!(s instanceof ArrayBuffer)},l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:function(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:throw s}},o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:new WeakMap,a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:function(s,h){var g=arguments.length>2&&arguments[2]!==void 0?arguments[2]:l,m=o.get(s);if((m==null?void 0:m[0])===h)return m[1];var p=Array.isArray(s)?[]:Object.create(Object.getPrototypeOf(s));return ve(p,!0),o.set(s,[h,p]),Reflect.ownKeys(s).forEach(function(v){if(!Object.getOwnPropertyDescriptor(p,v)){var O=Reflect.get(s,v),L={value:O,enumerable:!0,configurable:!0};if(J.has(O))ve(O,!1);else if(O instanceof Promise)delete L.value,L.get=function(){return g(O)};else if(M.has(O)){var E=M.get(O),q=x(E,2),ee=q[0],ge=q[1];L.value=a(ee,ge(),g)}Object.defineProperty(p,v,L)}}),Object.preventExtensions(p)},i=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new WeakMap,u=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[1,1],b=arguments.length>8&&arguments[8]!==void 0?arguments[8]:function(s){if(!le(s))throw new Error("object required");var h=i.get(s);if(h)return h;var g=u[0],m=new Set,p=function(d){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:++u[0];g!==f&&(g=f,m.forEach(function(c){return c(d,f)}))},v=u[1],O=function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:++u[1];return v!==d&&!m.size&&(v=d,E.forEach(function(f){var c=x(f,1),I=c[0],U=I[1](d);U>g&&(g=U)})),g},L=function(d){return function(f,c){var I=A(f);I[1]=[d].concat(A(I[1])),p(I,c)}},E=new Map,q=function(d,f){if(E.has(d))throw new Error("prop listener already exists");if(m.size){var c=f[3](L(d));E.set(d,[f,c])}else E.set(d,[f])},ee=function(d){var f,c=E.get(d);c&&(E.delete(d),(f=c[1])==null||f.call(c))},ge=function(d){m.add(d),m.size===1&&E.forEach(function(c,I){var U=x(c,2),k=U[0],T=U[1];if(T)throw new Error("remove already exists");var K=k[3](L(I));E.set(I,[k,K])});var f=function(){m.delete(d),m.size===0&&E.forEach(function(I,U){var k=x(I,2),T=k[0],K=k[1];K&&(K(),E.set(U,[T]))})};return f},pe=Array.isArray(s)?[]:Object.create(Object.getPrototypeOf(s)),et={deleteProperty:function(d,f){var c=Reflect.get(d,f);ee(f);var I=Reflect.deleteProperty(d,f);return I&&p(["delete",[f],c]),I},set:function(d,f,c,I){var U=Reflect.has(d,f),k=Reflect.get(d,f,I);if(U&&(t(k,c)||i.has(c)&&t(k,i.get(c))))return!0;ee(f),le(c)&&(c=De(c)||c);var T=c;if(c instanceof Promise)c.then(function(Q){c.status="fulfilled",c.value=Q,p(["resolve",[f],Q])}).catch(function(Q){c.status="rejected",c.reason=Q,p(["reject",[f],Q])});else{!M.has(c)&&r(c)&&(T=b(c));var K=!J.has(T)&&M.get(T);K&&q(f,K)}return Reflect.set(d,f,T,I),p(["set",[f],c,k]),!0}},te=n(pe,et);i.set(s,te);var tt=[pe,O,a,ge];return M.set(te,tt),Reflect.ownKeys(s).forEach(function(W){var d=Object.getOwnPropertyDescriptor(s,W);"value"in d&&(te[W]=s[W],delete d.value,delete d.writable),Object.defineProperty(pe,W,d)}),te};return[b,M,J,t,n,r,l,o,a,i,u]},Me=Se(),Ue=x(Me,1),ke=Ue[0];function R(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ke(e)}function ot(e){var t=M.get(e);return t==null?void 0:t[1]()}function _(e,t,n){var r=M.get(e);r||console.warn("Please use proxy object");var l,o=[],a=r[3],i=!1,u=function(h){if(o.push(h),n){t(o.splice(0));return}l||(l=Promise.resolve().then(function(){l=void 0,i&&t(o.splice(0))}))},b=a(u);return i=!0,function(){i=!1,b()}}function xe(e,t){var n=M.get(e);n||console.warn("Please use proxy object");var r=x(n,3),l=r[0],o=r[1],a=r[2];return a(l,o(),t)}function at(e){return J.add(e),e}var it=null;const y=R({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),ce={state:y,subscribe(e){return _(y,()=>e(y))},push(e,t){e!==y.view&&(y.view=e,t&&(y.data=t),y.history.push(e))},reset(e){y.view=e,y.history=[e]},replace(e){y.history.length>1&&(y.history[y.history.length-1]=e,y.view=e)},goBack(){if(y.history.length>1){y.history.pop();const[e]=y.history.slice(-1);y.view=e}},setData(e){y.data=e}},w={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return w.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return w.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,n){if(w.isHttpUrl(e))return this.formatUniversalUrl(e,t,n);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,n);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},formatUniversalUrl(e,t,n){if(!w.isHttpUrl(e))return this.formatNativeUrl(e,t,n);let r=e;r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,n);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(w.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(w.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(w.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(w.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=ce.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},Re=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),C=R({enabled:Re,userSessionId:"",events:[],connectedWalletId:void 0}),ye={state:C,subscribe(e){return _(C.events,()=>e(xe(C.events[C.events.length-1])))},initialize(){C.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(C.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){C.connectedWalletId=e},click(e){if(C.enabled){const t={type:"CLICK",name:e.name,userSessionId:C.userSessionId,timestamp:Date.now(),data:e};C.events.push(t)}},track(e){if(C.enabled){const t={type:"TRACK",name:e.name,userSessionId:C.userSessionId,timestamp:Date.now(),data:e};C.events.push(t)}},view(e){if(C.enabled){const t={type:"VIEW",name:e.name,userSessionId:C.userSessionId,timestamp:Date.now(),data:e};C.events.push(t)}}},D=R({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),P={state:D,subscribe(e){return _(D,()=>e(D))},setChains(e){D.chains=e},setWalletConnectUri(e){D.walletConnectUri=e},setIsCustomDesktop(e){D.isCustomDesktop=e},setIsCustomMobile(e){D.isCustomMobile=e},setIsDataLoaded(e){D.isDataLoaded=e},setIsUiLoaded(e){D.isUiLoaded=e},setIsAuth(e){D.isAuth=e}},Y=R({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),H={state:Y,subscribe(e){return _(Y,()=>e(Y))},setConfig(e){var t,n;ye.initialize(),P.setChains(e.chains),P.setIsAuth(!!e.enableAuthMode),P.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),P.setIsCustomDesktop(!!((n=e.desktopWallets)!=null&&n.length)),w.setModalVersionInStorage(),Object.assign(Y,e)}};var Te=Object.defineProperty,be=Object.getOwnPropertySymbols,Ne=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,we=(e,t,n)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ve=(e,t)=>{for(var n in t||(t={}))Ne.call(t,n)&&we(e,n,t[n]);if(be)for(var n of be(t))_e.call(t,n)&&we(e,n,t[n]);return e};const ue="https://explorer-api.walletconnect.com",de="wcm",fe="js-2.6.2";async function Z(e,t){const n=Ve({sdkType:de,sdkVersion:fe},t),r=new URL(e,ue);return r.searchParams.append("projectId",H.state.projectId),Object.entries(n).forEach(([l,o])=>{o&&r.searchParams.append(l,String(o))}),(await fetch(r)).json()}const V={async getDesktopListings(e){return Z("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return Z("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return Z("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return Z("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${ue}/w3m/v1/getWalletImage/${e}?projectId=${H.state.projectId}&sdkType=${de}&sdkVersion=${fe}`},getAssetImageUrl(e){return`${ue}/w3m/v1/getAssetImage/${e}?projectId=${H.state.projectId}&sdkType=${de}&sdkVersion=${fe}`}};var $e=Object.defineProperty,Ce=Object.getOwnPropertySymbols,Ke=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable,Oe=(e,t,n)=>t in e?$e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Be=(e,t)=>{for(var n in t||(t={}))Ke.call(t,n)&&Oe(e,n,t[n]);if(Ce)for(var n of Ce(t))He.call(t,n)&&Oe(e,n,t[n]);return e};const Ie=w.isMobile(),S=R({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),Fe={state:S,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=H.state;if(e==="NONE"||t==="ALL"&&!e)return S.recomendedWallets;if(w.isArray(e)){const n={recommendedIds:e.join(",")},{listings:r}=await V.getAllListings(n),l=Object.values(r);l.sort((o,a)=>{const i=e.indexOf(o.id),u=e.indexOf(a.id);return i-u}),S.recomendedWallets=l}else{const{chains:n,isAuth:r}=P.state,l=n==null?void 0:n.join(","),o=w.isArray(t),a={page:1,sdks:r?"auth_v1":void 0,entries:w.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:o?t.join(","):void 0},{listings:i}=Ie?await V.getMobileListings(a):await V.getDesktopListings(a);S.recomendedWallets=Object.values(i)}return S.recomendedWallets},async getWallets(e){const t=Be({},e),{explorerRecommendedWalletIds:n,explorerExcludedWalletIds:r}=H.state,{recomendedWallets:l}=S;if(r==="ALL")return S.wallets;l.length?t.excludedIds=l.map(h=>h.id).join(","):w.isArray(n)&&(t.excludedIds=n.join(",")),w.isArray(r)&&(t.excludedIds=[t.excludedIds,r].filter(Boolean).join(",")),P.state.isAuth&&(t.sdks="auth_v1");const{page:o,search:a}=e,{listings:i,total:u}=Ie?await V.getMobileListings(t):await V.getDesktopListings(t),b=Object.values(i),s=a?"search":"wallets";return S[s]={listings:[...S[s].listings,...b],total:u,page:o??1},{listings:b,total:u}},getWalletImageUrl(e){return V.getWalletImageUrl(e)},getAssetImageUrl(e){return V.getAssetImageUrl(e)},resetSearch(){S.search={listings:[],total:0,page:1}}},B=R({open:!1}),ze={state:B,subscribe(e){return _(B,()=>e(B))},async open(e){return new Promise(t=>{const{isUiLoaded:n,isDataLoaded:r}=P.state;if(w.removeWalletConnectDeepLink(),P.setWalletConnectUri(e==null?void 0:e.uri),P.setChains(e==null?void 0:e.chains),ce.reset("ConnectWallet"),n&&r)B.open=!0,t();else{const l=setInterval(()=>{const o=P.state;o.isUiLoaded&&o.isDataLoaded&&(clearInterval(l),B.open=!0,t())},200)}})},close(){B.open=!1}};var Je=Object.defineProperty,Le=Object.getOwnPropertySymbols,Ge=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,Ee=(e,t,n)=>t in e?Je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xe=(e,t)=>{for(var n in t||(t={}))Ge.call(t,n)&&Ee(e,n,t[n]);if(Le)for(var n of Le(t))Qe.call(t,n)&&Ee(e,n,t[n]);return e};function Ye(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const G=R({themeMode:Ye()?"dark":"light"}),Ze={state:G,subscribe(e){return _(G,()=>e(G))},setThemeConfig(e){const{themeMode:t,themeVariables:n}=e;t&&(G.themeMode=t),n&&(G.themeVariables=Xe({},n))}},$=R({open:!1,message:"",variant:"success"}),qe={state:$,subscribe(e){return _($,()=>e($))},openToast(e,t){$.open=!0,$.message=e,$.variant=t},closeToast(){$.open=!1}}},59343:function(We,ne,j){j.d(ne,{WalletConnectModal:function(){return x}});var A=j(61430);class x{constructor(N){this.openModal=A.jb.open,this.closeModal=A.jb.close,this.subscribeModal=A.jb.subscribe,this.setTheme=A.ThemeCtrl.setThemeConfig,A.ThemeCtrl.setThemeConfig(N),A.ConfigCtrl.setConfig(N),this.initUi()}async initUi(){if(typeof window<"u"){await j.e(391).then(j.bind(j,41391));const N=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",N),A.OptionsCtrl.setIsUiLoaded(!0)}}}}}]);