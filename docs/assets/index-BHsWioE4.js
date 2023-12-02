var Ot=Object.defineProperty;var At=(i,e,t)=>e in i?Ot(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var _=(i,e,t)=>(At(i,typeof e!="symbol"?e+"":e,t),t);import{g as Je,R as k,j as u,s as w,b as j,c as le,n as Oe,r as N,_ as K,a as zt}from"./index-FooJLITI.js";var Qe={exports:{}},$t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Dt=$t,Ft=Dt;function et(){}function tt(){}tt.resetWarningCache=et;var _t=function(){function i(s,n,r,o,l,a){if(a!==Ft){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}i.isRequired=i;function e(){return i}var t={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:e,element:i,elementType:i,instanceOf:e,node:i,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:tt,resetWarningCache:et};return t.PropTypes=t,t};Qe.exports=_t();var Gt=Qe.exports;const R=Je(Gt),Vt="/assets/ltc-Wcpis-y-.svg",Nt="/assets/mohw-vdyfCiDj.svg";var it={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(i){(function(){var e={}.hasOwnProperty;function t(){for(var s=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var o=typeof r;if(o==="string"||o==="number")s.push(r);else if(Array.isArray(r)){if(r.length){var l=t.apply(null,r);l&&s.push(l)}}else if(o==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){s.push(r.toString());continue}for(var a in r)e.call(r,a)&&r[a]&&s.push(a)}}}return s.join(" ")}i.exports?(t.default=t,i.exports=t):window.classNames=t})()})(it);var Rt=it.exports;const Bt=Je(Rt);class Ae extends k.PureComponent{constructor(e){super(e),this.state={}}render(){const{type:e}=this.props,t=Bt(this.props.className,"ltcif",`ltcif-${e}`);return u.jsx("i",{className:t})}}_(Ae,"propTypes",{className:R.string,type:R.string.isRequired});const Ht="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20y='17'%20width='24'%20height='2'%20rx='1'%20fill='%23008088'/%3e%3crect%20y='11'%20width='24'%20height='2'%20rx='1'%20fill='%23008088'/%3e%3crect%20y='5'%20width='24'%20height='2'%20rx='1'%20fill='%23008088'/%3e%3crect%20x='19'%20y='5'%20width='5'%20height='2'%20rx='1'%20fill='%23EC6C00'/%3e%3crect%20x='16'%20y='5'%20width='2'%20height='2'%20rx='1'%20fill='%23EC6C00'/%3e%3c/svg%3e",Wt=w.div`
  padding: 1.142rem;
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  display: none;
  background: none;
  font-size: 1.714rem;
  color: #008088;

  @media (max-width: ${j.medium}) {
    display: block;
  }
`,Yt="data:image/svg+xml,%3csvg%20width='34'%20height='2'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='34'%20height='2'%20rx='1'%20fill='%23CADEDF'/%3e%3crect%20x='26'%20width='8'%20height='2'%20rx='1'%20fill='%23EC6C00'/%3e%3crect%20x='21'%20width='3'%20height='2'%20rx='1'%20fill='%23EC6C00'/%3e%3c/svg%3e",de=w.div`
  padding: 0 1.5rem;
  position: relative;
  flex-shrink: 0;
  text-align: center;
  cursor: pointer;

  label {
    position: relative;
    white-space: nowrap;
  }

  &:hover, &:active {
    color: #EC6C00;
  }

  &:not(:first-child) {
    border-width: 0 0 0 1px;
    border-color: #E4E4E4;
    border-style: solid;

    @media (max-width: ${j.medium}) {
      border-width: 1px 0 0;
    }
  }

  @media (min-width: ${j.medium}) {
    &:hover label::after {
      content: '';
      margin: auto;
      height: 2px;
      position: absolute;
      right: 0;
      bottom: -0.25rem;
      left: 0;
      display: block;
      background-image: url(${Yt});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`,qt=w.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1;
  list-style: none;

  @media (max-width: ${j.medium}) {
    display: block;
    font-size: 1.714rem;
    line-height: 3;
  }
`,Xt=w.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${j.medium}) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: ${i=>i.open?"flex":"none"};
    background-color: #FFFFFF;
  }
`,Ut=w.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  background: none;
  border: 0;

  @media (max-width: ${j.medium}) {
    display: flex;
  }
`,Zt=w.div`
  flex-grow: 1;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  user-select: none;
`;class Kt extends k.Component{constructor(t){super(t);_(this,"show",()=>{this.setState({isOpen:!0})});_(this,"hide",()=>{this.setState({isOpen:!1})});_(this,"toggle",()=>{const{isOpen:t}=this.state;this.setState({isOpen:!t})});_(this,"scrollTop",()=>{window.scrollTo({top:0,behavior:"smooth"}),this.hide()});_(this,"scrollTo",t=>{const s=document.getElementById(t);s&&(s.scrollIntoView({behavior:"smooth"}),this.hide())});this.state={isOpen:!1}}render(){const{isOpen:t}=this.state;return u.jsxs(Zt,{children:[u.jsx(Ut,{onClick:this.toggle,children:u.jsx("img",{src:Ht})}),u.jsxs(Xt,{open:t,children:[u.jsx(Wt,{onClick:this.hide,children:u.jsx(Ae,{type:"close"})}),u.jsxs(qt,{children:[u.jsx(de,{onClick:this.scrollTop.bind(this),children:u.jsx("label",{children:"首頁"})}),u.jsx(de,{onClick:this.scrollTo.bind(this,"OnSiteCare"),children:u.jsx("label",{children:"照顧現場"})}),u.jsx(de,{onClick:this.scrollTo.bind(this,"LongTermCare"),children:u.jsx("label",{children:"一看就懂長照2.0"})}),u.jsx(de,{onClick:this.scrollTo.bind(this,"LongTermCareMap"),children:u.jsx("label",{children:"長照地圖"})})]})]})]})}}const Jt=w.header`
  width: 100%;
  height: 4.5rem;
  padding: 1rem 2.5rem;
  display: flex;
  align-items: center;
  background-color: #FFFFFF;

  @media (max-width: ${j.medium}) {
    height: 3.858rem;
    padding: 0.857rem 1rem;
  }
`,Qt=w.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-size: 1.2rem;
  color: white;
  white-space: nowrap;
  gap: 1.5rem;

  @media (max-width: ${j.medium}) {
    gap: 1.142rem;
  }
`,ei=w.img`
  height: 100%;
`,ti=w.img`
  height: 86.667%;
`;class st extends k.Component{constructor(e){super(e),this.state={}}render(){const{props:e}=this;return u.jsxs(Jt,{className:e.className,children:[u.jsxs(Qt,{children:[u.jsx(ei,{src:Vt}),u.jsx(ti,{src:Nt})]}),u.jsx(Kt,{})]})}}_(st,"propTypes",{className:R.string});const ii=w.main`
  width: 100%;
`,rt=i=>u.jsx(ii,{children:i.children});rt.propTypes={children:R.any};const si=w.div`
  padding: 1.071rem;
  text-align: center;
  border-top: 1px solid #CADEDF;
  line-height: 1.5;
  font-size: 0.928rem;
  color: #707070;
`,ri=w.a`
  text-decoration: underline;
`;class ni extends k.Component{constructor(e){super(e),this.state={}}render(){return u.jsxs(si,{id:"Footer",children:[u.jsx("div",{children:"Copyright © 2023 天下數位發展部及整合傳播部企劃製作"}),u.jsx("div",{children:"All rights reserved. 版權所有，禁止擅自轉貼節錄"}),u.jsx("div",{children:u.jsx(ri,{children:"隱私權政策"})})]})}}const ai=w.div`
  width: 100%;
`,oi=w(st)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`,nt=i=>u.jsxs(ai,{children:[u.jsx(oi,{}),u.jsx(rt,{children:i.children}),u.jsx(ni,{})]});nt.propTypes={children:R.any};const li="data:image/svg+xml,%3csvg%20width='42'%20height='85'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%202v78L2%2057.296'%20stroke='%23fff'%20stroke-width='3'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M20%202v8'%20stroke='%23EC6C00'%20stroke-width='3'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M33.197%206.355c.176%200%20.332-.027.469-.082a.915.915%200%200%200%20.375-.275%202.27%202.27%200%200%200%20.328-.562c.11-.239.22-.543.334-.915.125-.406.264-.78.416-1.125.156-.34.336-.636.54-.89.206-.254.443-.451.708-.592.27-.14.58-.21.932-.21.348%200%20.664.071.949.216.285.148.531.357.738.627.211.273.373.596.487.967.117.37.175.78.175%201.23%200%20.633-.117%201.178-.351%201.635-.234.46-.549.814-.944%201.06-.394.25-.83.375-1.306.375V6.355c.281%200%20.53-.06.744-.181.219-.117.39-.297.516-.54.125-.238.187-.54.187-.907%200-.348-.053-.637-.158-.868a1.156%201.156%200%200%200-.428-.515%201.119%201.119%200%200%200-.61-.17.885.885%200%200%200-.439.111c-.129.074-.25.188-.363.34-.11.152-.213.344-.31.574-.098.23-.192.502-.282.815-.14.472-.297.884-.469%201.236-.167.352-.359.645-.574.879-.214.234-.459.41-.732.527-.27.117-.576.176-.92.176-.36%200-.684-.072-.973-.217a2.1%202.1%200%200%201-.732-.62%202.973%202.973%200%200%201-.463-.962%204.538%204.538%200%200%201-.158-1.242c0-.41.055-.814.164-1.213.11-.394.275-.754.498-1.078.226-.324.508-.582.844-.773.34-.192.736-.288%201.19-.288V2.91c-.278%200-.514.047-.71.14a1.307%201.307%200%200%200-.48.405%201.817%201.817%200%200%200-.27.598c-.059.23-.088.476-.088.738%200%20.344.05.63.147.861.097.235.234.41.41.528.176.117.379.175.61.175Zm-1.19%205.827c0%20.23.046.438.136.621.093.188.222.338.386.451.164.117.354.182.569.194v1.33a1.981%201.981%200%200%201-1.12-.364%202.521%202.521%200%200%201-.802-.931%202.805%202.805%200%200%201-.293-1.283c0-.485.082-.907.246-1.266.168-.36.398-.658.691-.896.293-.239.631-.418%201.014-.54a4.183%204.183%200%200%201%201.23-.175h.206c.437%200%20.847.058%201.23.175.387.122.727.301%201.02.54.292.238.521.537.685.896.168.36.252.78.252%201.26%200%20.508-.102.953-.305%201.336a2.25%202.25%200%200%201-.837.902c-.356.223-.77.338-1.243.346v-1.33c.235-.012.446-.07.633-.176.192-.102.344-.246.457-.434.113-.183.17-.404.17-.662%200-.285-.059-.521-.176-.709a1.182%201.182%200%200%200-.468-.44%202.287%202.287%200%200%200-.663-.228%204.318%204.318%200%200%200-.755-.064h-.206c-.261%200-.515.021-.761.064a2.168%202.168%200%200%200-.662.223c-.192.11-.346.258-.463.445-.113.188-.17.426-.17.715Zm4.126%205.698H31v-1.412h6.34v1.347l-1.207.065Zm1.248%201.94-1.313-.013a3.679%203.679%200%200%200%20.047-.574%201.78%201.78%200%200%200-.105-.639%201.204%201.204%200%200%200-.75-.744%202.045%202.045%200%200%200-.604-.117l-.023-.322c.398%200%20.767.039%201.107.117.34.078.639.195.897.352.258.16.459.36.603.597.145.242.217.522.217.838%200%20.086-.008.178-.023.276a1.177%201.177%200%200%201-.053.228ZM34.1%2020.881h.134c.457%200%20.881.066%201.272.2.394.132.736.323%201.025.573.293.254.52.563.68.926.164.367.246.782.246%201.242%200%20.465-.082.88-.246%201.243-.16.367-.387.677-.68.931-.289.254-.63.448-1.025.58-.39.133-.815.2-1.272.2H34.1c-.457%200-.881-.067-1.272-.2a3.043%203.043%200%200%201-1.025-.58%202.689%202.689%200%200%201-.68-.925%203.036%203.036%200%200%201-.24-1.237c0-.465.08-.88.24-1.248.164-.363.39-.672.68-.926a3.045%203.045%200%200%201%201.025-.58c.39-.133.815-.199%201.272-.199Zm.134%201.412H34.1c-.285%200-.555.03-.809.088-.254.059-.476.15-.668.275a1.361%201.361%200%200%200-.451.48c-.11.196-.164.429-.164.698%200%20.262.054.488.164.68.11.195.26.355.451.48.192.125.414.217.668.276.254.062.524.093.809.093h.134c.282%200%20.547-.03.797-.093.254-.059.479-.153.674-.282.195-.125.348-.285.457-.48.113-.191.17-.42.17-.686%200-.265-.057-.496-.17-.691a1.36%201.36%200%200%200-.457-.475%202.125%202.125%200%200%200-.674-.275%203.483%203.483%200%200%200-.797-.088ZM40%2030.072h-9v-1.418h9v1.418Zm0%203.659h-9v-1.419h9v1.419Z'%20fill='%23fff'/%3e%3c/svg%3e",di=le`
  0% { transform: translateY(0); }
  25% { transform: translateY(-7%); }
  50% { transform: translateY(0%); }
  75% { transform: translateY(7%); }
  100% { transform: translateY(0); }
`,ci=w.button`
  padding: 0;
  border: 0;
  background: none;
  animation-name: ${di};
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  &:hover {
    animation-play-state: paused;
  }
`;class ui extends k.Component{constructor(t){super(t);_(this,"onClick",()=>{document.getElementById("Preface").scrollIntoView({behavior:"smooth"})});this.state={}}render(){return u.jsx(ci,{onClick:this.onClick,children:u.jsx("img",{src:li})})}}const pi=w.div`
  position: absolute;
  left: 15.2777%;
  bottom: 5rem;

  @media (max-width: ${j.medium}) {
    display: none;
  }
`,Be="/assets/background-5MjzkJEr.jpg",fi=w.section`
  height: 56.25rem;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${Be});
  overflow: hidden;

  @media (max-width: ${j.medium}) {
    height: 46.643rem;
    background-color: lightgray;
    background-image: linear-gradient(
      0deg,
      #EFF8F9 0%,
      rgba(242, 249, 250, 0.85) 21.89%,
      rgba(255, 255, 255, 0.00) 57.94%),
      url(${Be});
    background-position-x: 31.75%;
    background-position-y: center;
  }
`,mi=le`
  0% { transform: translateY(0); }
  30% { transform: translateY(-3%); }
  50% { transform: translateY(0); }
  100% { transform: translateY(0); }
`,hi=w.div`
  width: 37.125rem;
  margin: 0 7rem 0 0;
  position: absolute;
  top: 14rem;
  right: 0;
  animation-name: ${mi};
  animation-duration: 1.2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: ${j.medium}) {
    width: auto;
    margin: 0;
    top: auto;
    right: 1.7142rem;
    bottom: 4.571rem;
    left: 1.7142rem;
  }
`,gi="/assets/title-desktop-rA7KWAn_.svg",vi="/assets/title-mobile-ROfVH60J.svg",wi=w.div`
  padding-top: 37.373%;
  background-image: url(${gi});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media (max-width: ${j.medium}) {
    padding-top: 51.376%;
    background-image: url(${vi});
  }
`;class xi extends k.PureComponent{constructor(e){super(e),this.state={}}render(){return u.jsxs(fi,{children:[u.jsx(hi,{children:u.jsx(wi,{})}),u.jsx(pi,{children:u.jsx(ui,{})})]})}}const Si="/assets/avatar-target-gvSC-VFa.jpg",bi="/assets/avatar-flow-4Vr0492w.jpg",Ti="/assets/avatar-content-zVmMObt6.jpg",yi="data:image/svg+xml,%3csvg%20width='434'%20height='38'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M432%202H151l22%2028-69-28H2'%20stroke='%23CADEDF'%20stroke-width='4'%20stroke-linecap='round'/%3e%3cpath%20d='M416%202h16M398%202h7'%20stroke='%23EC6C00'%20stroke-width='4'%20stroke-linecap='round'/%3e%3c/svg%3e",Ei="data:image/svg+xml,%3csvg%20width='19'%20height='1'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23EC6C00'%20d='M0%201V0h11v1zM15%201V0h4v1z'/%3e%3c/svg%3e",Ci=w.div`
  font-family: Lato;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1;
  color: #008088;
  letter-spacing: 0.286rem;
  user-select: none;
`,Pi=w.div`
  height: 1px;
  margin-top: 0.5rem;
  background-image: url(${Ei});
  background-position: top left;
  background-repeat: no-repeat;
  writing-mode: inherit;

  @media (min-width: ${j.medium}) {
    margin-top: 0.5714rem;
  }
`,ze=i=>{const{className:e}=i;return u.jsxs(Ci,{className:e,children:[i.children,u.jsx(Pi,{})]})};ze.propTypes={children:R.any,className:R.string};const at=w.div`
  width: 100%;
  max-width: 65.375rem;
  margin: auto;

  @media (max-width: ${j.medium}) {
    max-width: initial;
  }
`,Mi=w(at)`
  padding: 0 1rem 0 5.766rem;

  @media (max-width: ${j.medium}) {
    padding: 0 1.742rem;
  }
`,Ii=w.div`
  position: relative;
`,ji=w.h1`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.3;
  color: #333333;
  letter-spacing: 0.5px;

  @media (max-width: ${j.medium}) {
    font-size: 2.285rem;
    letter-spacing: 0.457px;
  }
`,Li=w.h2`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.3;
  color: #008088;
  letter-spacing: 0.5px;

  @media (max-width: ${j.medium}) {
    font-size: 2.285rem;
    letter-spacing: 0.457px;
  }
`,ki=w(ze)`
  padding-top: 1.1428rem;
  letter-spacing: 0.2625rem;

  @media (min-width: ${j.medium}) {
    padding-top: 0;
    position: absolute;
    left: -1.5rem;
    top: 0.5625rem;
    transform: rotate(90deg);
    transform-origin: top left;
  }
`;class ve extends k.Component{constructor(e){super(e),this.state={}}render(){const{title:e,slogan:t,subHeading:s}=this.props;return u.jsx(Mi,{children:u.jsxs(Ii,{children:[u.jsx(ji,{children:e}),u.jsx(Li,{children:t}),u.jsx(ki,{children:s})]})})}}_(ve,"propTypes",{title:R.string,slogan:R.string,subHeading:R.string});const Oi="data:image/svg+xml,%3csvg%20width='163'%20height='162'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='81.5'%20cy='81'%20r='80'%20stroke='%23008088'%20stroke-width='2'/%3e%3cpath%20d='M125.664%2013.883a79.522%2079.522%200%200%201%2017.654%2015.598'%20stroke='%23EC6C00'%20stroke-width='3'/%3e%3c/svg%3e",Ai=le`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,zi=w.div`
  padding-top: 100%;
  position: relative;
  background-color: #FFFFFF;
`,$i=w.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url(${Oi});
  background-repeat: no-repeat;
  background-size: contain;
  animation-name: ${Ai};
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`,Di=w.img`
  width: 90%;
  margin: auto;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
`;class ot extends k.Component{constructor(e){super(e),this.state={}}render(){const{src:e}=this.props;return u.jsxs(zi,{children:[u.jsx($i,{}),u.jsx(Di,{src:e})]})}}_(ot,"propTypes",{src:R.string});const Fi=w.div`
  max-width: 21.375rem;
  width: 100%;

  @media (max-width: ${j.medium}) {
    max-width: 23.3571rem;
  }
`,_i=w.div`
  width: 13.125rem;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
`,Gi=w.div`
  margin-top: 1rem;
  font-size: 1.26rem;
  font-weight: 700;
  line-height: 1.4;
  color: #008088;
  letter-spacing: 0.125rem; 
`,Vi=w.div`
`;class ue extends k.Component{constructor(e){super(e),this.state={}}render(){const{avatar:e,title:t}=this.props;return u.jsxs(Fi,{children:[u.jsx(_i,{children:u.jsx(ot,{src:e})}),u.jsx(Gi,{children:t}),u.jsx(Vi,{children:this.props.children})]})}}_(ue,"propTypes",{title:R.string,avatar:R.string,children:R.any});const Ni="data:image/svg+xml,%3csvg%20width='34'%20height='32'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'%3e%3cpath%20d='M1.75%2020.25h29l-11.352-9'%20stroke='%23008088'/%3e%3cpath%20d='M1.75%2020.25h4'%20stroke='%23EC6C00'/%3e%3c/g%3e%3c/svg%3e",Ri="data:image/svg+xml,%3csvg%20width='34'%20height='32'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.75%2020.25h29l-11.352-9'%20stroke='%23fff'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M1.75%2020.25h4'%20stroke='%23CADEDF'%20stroke-width='2'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3c/svg%3e",$e=w.div`
  width: 3.2em;
  height: 3.2em;
  position: absolute;
  border-radius: 50%;
`,lt=w($e)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${Ni});
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  top: 0;
  right: 0;
  z-index: 3;
`,Bi=w($e)`
  top: 0;
  right: 0;
  z-index: 1;
  background-color: #CADEDF;
`,dt=w($e)`
  top: 0;
  left: 0;
  z-index: 2;
  background-color: #EC6C00;
  transition: left 0.5s;
  transform: translateX(-100%);
`,Hi=w.span`
  padding: 0 3.7em 0 1.6em;
  position: absolute;
  left: 0;
  right: 0;
  white-space: nowrap;
  overflow: hidden;
  z-index: 3;
`,Wi=w.button`
  padding: 0;
  position: relative;
  border: 0;
  border-radius: 10em;
  background-color: #008088;
  color: #FFFFFF;
  font-size: 1.25rem;
  line-height: 3.2;
  overflow: hidden;

  * {
    pointer-events: none;
  }

  @media (max-width: ${j.medium}) {
    font-size: 1.1428rem;
  }

  &:hover {
    ${dt} {
      left: 100%;
    }
  }

  &:active {
    ${lt} {
      background-image: url(${Ri});
    }
  }
`;class fe extends k.Component{constructor(e){super(e),this.state={}}render(){const{className:e,title:t}=this.props;return u.jsxs(Wi,{className:e,onClick:this.props.onClick,children:[u.jsx(Bi,{}),u.jsx(dt,{}),u.jsx(lt,{}),u.jsx("span",{children:" "}),u.jsx(Hi,{children:t})]})}}_(fe,"propTypes",{className:R.string,title:R.string,onClick:R.func}),_(fe,"defaultProps",{});const Yi="data:image/svg+xml,%3csvg%20width='1271'%20height='1271'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20opacity='.2'%20cx='635.5'%20cy='635.5'%20r='635.5'%20fill='%23CADEDF'/%3e%3c/svg%3e",ct=Oe`
  background-image: url(${Yi});
  background-size: contain;
  background-repeat: no-repeat;
`,ut=Oe`
  ${ct}
  background-size: 1271px auto;
`,qi=Oe`
  ${ct}
  background-size: 339% auto;
`,Xi=w.section`
  padding-top: 7.5rem;

  @media (max-width: ${j.medium}) {
    padding-top: 4rem;
  }
`,Ui=w.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  
  @media (max-width: ${j.medium}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`,we=w.div`
  display: flex;
  justify-content: center;

  &:nth-child(2) {
    margin-top: -2.5rem;
  }

  @media (max-width: ${j.medium}) {
    padding: 0 3rem;

    &:first-child {
      ${qi}
      background-position: center 4.5rem;
    }

    &:nth-child(2) {
      margin-top: 0;
    }

    &:not(:first-child) {
      padding-top: 1.7857rem;
      background-color: rgba(202, 222, 223, 0.2);
    }
  }
`,He=w.div`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.7;
  text-align: justify;
  letter-spacing: 0.035rem;
`,Zi=w.ul`
  margin-top: 0.25rem;
  list-style: none;
`,xe=w.li`
  padding-left: 1.25rem;
  font-size: 0.875rem;
  text-indent: -0.57rem;
  line-height: 1.4;

  &:not(:first-child) {
    margin-top: 0.3125rem;
  }
`,Se=w(Ae)`
  margin-right: 0.25rem;
  color: #008088;
  transform: scale(1.2);
`,Ki=w.div`
  ${ut}
  background-position: center 2rem;

  @media (max-width: ${j.medium}) {
    background: none;
  }
`,Ji=w.div`
  max-width: 53.125rem;
  margin: auto;
  margin-top: 4.625rem;
  padding: 0 3rem;

  @media (max-width: ${j.medium}) {
    margin-top: 2.42857rem;
    padding: 0;
  }
`,Qi=w.div`
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${j.medium}) {
    padding-top: 3.5714rem;
    justify-content: center;
    background-color: rgba(202, 222, 223, 0.2);
  }
`,es=w.div`
  margin-right: 5rem;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${j.medium}) {
    display: none;
  }
`,ts=w.div`
  flex-shrink: 0;
`,is=w.img`
  transform: translateY(100%);
`,ss=w(fe)`
  min-width: 20.625rem;

  @media (max-width: ${j.medium}) {
    min-width: 19.214rem;
  }
`,rs=w.span`
  color: #008088;
  font-weight: 700;
`;class ns extends k.Component{constructor(e){super(e),this.state={}}render(){return u.jsxs(Xi,{id:"LongTermCare",children:[u.jsx(ve,{title:"5分鐘一看就懂",slogan:"長照2.0",subHeading:"LTCS KNOWLEDGE"}),u.jsx(Ki,{children:u.jsxs(Ji,{children:[u.jsxs(Ui,{children:[u.jsx(we,{children:u.jsx(ue,{title:"服務對象",avatar:Si,children:u.jsx(He,{children:"經各縣市長期照顧管理中心評估，符合長照需要等級2級以上者，並符合下列之一，65歲以上老人、55歲以上原住民、50歲以上失智症者、失能身心障礙者。"})})}),u.jsx(we,{children:u.jsx(ue,{title:"申請流程",avatar:bi,children:u.jsxs(Zi,{children:[u.jsxs(xe,{children:[u.jsx(Se,{type:"number-1"}),u.jsx("span",{children:"直接撥打"}),u.jsx(rs,{children:"長照專線1966"})]}),u.jsxs(xe,{children:[u.jsx(Se,{type:"number-2"}),u.jsx("span",{children:"聯絡當地長期照顧管理中心"})]}),u.jsxs(xe,{children:[u.jsx(Se,{type:"number-3"}),u.jsx("span",{children:"住院期間聯絡出院準備銜接長照服務小組或是線上申請"})]})]})})}),u.jsx(we,{children:u.jsx(ue,{title:"服務內容",avatar:Ti,children:u.jsx(He,{children:"依據個案管理員擬訂照顧計畫，提供照顧及專業服務、交通接送、輔具及居家無障礙環境改善與喘息服務，四大類給付。"})})})]}),u.jsxs(Qi,{children:[u.jsx(es,{children:u.jsx(is,{src:yi})}),u.jsx(ts,{children:u.jsx(ss,{title:"了解更多長照2.0"})})]})]})})]})}}const as="/assets/border-desktop-RlFsLooD.png",os="/assets/border-mobile-gkbelk3-.png",ls="data:image/svg+xml,%3csvg%20width='192'%20height='117'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='1.5'%20width='102'%20height='37'%20rx='8.5'%20fill='%23fff'%20stroke='%23CADEDF'%20stroke-width='3'/%3e%3crect%20x='22'%20y='49.5'%20width='168'%20height='37'%20rx='8.5'%20fill='%23fff'%20stroke='%23CADEDF'%20stroke-width='3'/%3e%3crect%20x='115'%20y='1.5'%20width='56'%20height='37'%20rx='8.5'%20fill='%23fff'%20stroke='%23CADEDF'%20stroke-width='3'/%3e%3cpath%20d='m84.5%2019%204%204%204-4M154.5%2019l4%204%204-4'%20stroke='%23CADEDF'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e",ds="/assets/step1-pointer-2Zia1ue6.svg",cs=le`
  0% { transform: translateX(0) }
  100% { transform: translateX(-250%) }
`,us=w.div`
  width: 12rem;
  margin: auto;
`,ps=w.div`
  padding-top: 61.2565%;
  position: relative;
  background-image: url(${ls});
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
`,fs=w.img`
  width: 24%;
  position: absolute;
  right: 0;
  bottom: 0;
  animation-name: ${cs};
  animation-iteration-count: infinite;
  animation-duration: 2s;
`;class ms extends k.Component{constructor(e){super(e),this.state={}}render(){return u.jsx(us,{...this.props,children:u.jsx(ps,{children:u.jsx(fs,{src:ds})})})}}const De=w.div`
  &:first-child {
    margin-top: -19%;
  }

  &:last-child {
    margin-top: 25%;
  }
`,pt=w.img`
  margin: auto;
  display: block;
`,Fe=w.label`
  margin-top: 1rem;
  display: block;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.4;
  color: #EC6C00;
  letter-spacing: 0.0875rem;
`,_e=w.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.6;
  color: #333333;
  letter-spacing: 0.1rem;
`,Ge=le`
  0% { transform: scale(1); }
  20% { transform: scale(1.1); }
  40% { transform: scale(1); }
  60% { transform: scale(1); }
  80% { transform: scale(1); }
  100% { transform: scale(1); }
`,hs=w(ms)`
  animation-name: ${Ge};
  animation-duration: 6s;
  animation-iteration-count: infinite;
`;class ft extends k.Component{constructor(e){super(e),this.state={}}render(){return u.jsxs(De,{children:[u.jsx(hs,{}),u.jsx(Fe,{children:"TIPS 1"}),u.jsx(_e,{children:"透過左上角篩選功能，找到適合的服務機構"})]})}}const gs="data:image/svg+xml,%3csvg%20width='130'%20height='130'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='65'%20cy='65'%20r='63.5'%20fill='%23fff'%20stroke='%23CADEDF'%20stroke-width='3'%20stroke-dasharray='6%206'/%3e%3cellipse%20cx='65.5'%20cy='80.5'%20rx='9.5'%20ry='1.5'%20fill='%23CADEDF'/%3e%3cpath%20d='M65%2049c-7.18%200-13%205.655-13%2012.63%200%205.42%207.846%2014.083%2011.347%2017.678a2.32%202.32%200%200%200%203.306%200C70.154%2075.713%2078%2067.05%2078%2061.631%2078%2054.655%2072.18%2049%2065%2049Zm0%2015.662c-2.333%200-4.225-1.838-4.225-4.105%200-2.267%201.892-4.105%204.225-4.105%202.333%200%204.225%201.838%204.225%204.105%200%202.267-1.892%204.105-4.225%204.105Z'%20fill='%23008088'/%3e%3c/svg%3e",vs=w(pt)`
  animation-name: ${Ge};
  animation-delay: 1s;
  animation-duration: 6s;
  animation-iteration-count: infinite;
`;class mt extends k.Component{constructor(e){super(e),this.state={}}render(){return u.jsxs(De,{children:[u.jsx(vs,{src:gs}),u.jsx(Fe,{children:"TIPS 2"}),u.jsx(_e,{children:"直接點擊地圖，定位篩選出範圍內的相關服務機構"})]})}}const ws="data:image/svg+xml,%3csvg%20width='206'%20height='111'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='2'%20y='1.5'%20width='202'%20height='78'%20rx='8.5'%20fill='%23fff'%20stroke='%23CADEDF'%20stroke-width='3'/%3e%3crect%20x='33'%20y='87.5'%20width='155'%20height='7'%20rx='3.5'%20fill='%23fff'%20stroke='%23CADEDF'%20stroke-width='3'/%3e%3crect%20x='9'%20y='102.5'%20width='59'%20height='7'%20rx='3.5'%20fill='%23fff'%20stroke='%23CADEDF'%20stroke-width='3'/%3e%3cpath%20d='M35.645%2043.386h-1.382L31.5%2062.718l8.29-4.143%207.599%203.37%207.599-3.37%208.29%204.143-2.764-19.332h-1.381'%20stroke='%23CADEDF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M56.825%2040.431c0%206.808-9.436%2016.294-9.436%2016.294s-9.45-9.445-9.437-16.294c0-5.206%204.228-9.431%209.437-9.431%205.208%200%209.436%204.225%209.436%209.431Z'%20stroke='%23CADEDF'%20stroke-width='2'%20stroke-miterlimit='10'/%3e%3cpath%20d='M51.672%2040.113c0%202.361-1.92%204.28-4.283%204.28a4.286%204.286%200%200%201-4.283-4.28c0-2.36%201.92-4.28%204.283-4.28a4.285%204.285%200%200%201%204.283%204.28Z'%20stroke='%23CADEDF'%20stroke-width='2'%20stroke-miterlimit='10'/%3e%3cpath%20d='M101.742%2041.371s-.094.111-.142.174c-.458.537-.237%201.326.079%202.194.979%202.73%203.695%205.444%206.127%206.738.805.426%201.673.489%202.194%200%20.063-.048.111-.11.174-.158.521-.474%201.31-.836%202.037-.537.442.19.837.38%201.484.632.932.378%201.595%201.34%201.453%202.24-.174%201.042-.79%202.13-1.106%202.699-.363.663-1.421.868-2.526.536-8.874-2.667-12.947-8.08-15.395-15.701-.347-1.089-.19-2.146.458-2.54.553-.332%201.469-1.137%202.653-1.184.931-.032%201.768.363%202.321%201.404.237.426.363.916.568%201.357.316.726.458%201.008%200%201.545l-.379.601Z'%20stroke='%23008088'%20stroke-width='2'%20stroke-miterlimit='10'/%3e%3cpath%20d='m95.41%2061.754-8.904%202.54%202.542-8.9a18.011%2018.011%200%200%201-2.542-9.247c0-10.02%208.131-18.147%2018.157-18.147%2010.027%200%2018.158%208.127%2018.158%2018.147%200%2010.02-8.131%2018.147-18.158%2018.147a18.04%2018.04%200%200%201-9.252-2.54Z'%20stroke='%23008088'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M173.493%2036v17.454a2.502%202.502%200%200%201-2.495%202.493h-22.454a2.502%202.502%200%200%201-2.495-2.493V36'%20stroke='%23CADEDF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='m173.493%2036-12.25%2010.148a2.49%202.49%200%200%201-2.931%200L146.062%2036h27.444-.013ZM146.049%2036h27.444'%20stroke='%23CADEDF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M2%2010a8.5%208.5%200%200%201%208.5-8.5h185A8.5%208.5%200%200%201%20204%2010v3.5H2V10Z'%20fill='%23fff'%20stroke='%23CADEDF'%20stroke-width='3'/%3e%3c/svg%3e",xs=w(pt)`
  animation-name: ${Ge};
  animation-delay: 2s;
  animation-duration: 6s;
  animation-iteration-count: infinite;
`;class ht extends k.Component{constructor(e){super(e),this.state={}}render(){return u.jsxs(De,{children:[u.jsx(xs,{src:ws}),u.jsx(Fe,{children:"TIPS 3"}),u.jsx(_e,{children:"點選下方篩選列表，觀看更詳細的聯絡資訊"})]})}}const Ss=w.div`
  max-width: 52.5rem;
  padding: 5.715%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 9%;
`;class bs extends k.Component{constructor(e){super(e),this.state={}}render(){return u.jsxs(Ss,{children:[u.jsx(ft,{}),u.jsx(mt,{}),u.jsx(ht,{})]})}}function We(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function Ve(i,e){i===void 0&&(i={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{typeof i[t]>"u"?i[t]=e[t]:We(e[t])&&We(i[t])&&Object.keys(e[t]).length>0&&Ve(i[t],e[t])})}const gt={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function X(){const i=typeof document<"u"?document:{};return Ve(i,gt),i}const Ts={document:gt,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function Y(){const i=typeof window<"u"?window:{};return Ve(i,Ts),i}function ys(i){return i===void 0&&(i=""),i.trim().split(" ").filter(e=>!!e.trim())}function Es(i){const e=i;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function Ie(i,e){return e===void 0&&(e=0),setTimeout(i,e)}function me(){return Date.now()}function Cs(i){const e=Y();let t;return e.getComputedStyle&&(t=e.getComputedStyle(i,null)),!t&&i.currentStyle&&(t=i.currentStyle),t||(t=i.style),t}function Ps(i,e){e===void 0&&(e="x");const t=Y();let s,n,r;const o=Cs(i);return t.WebKitCSSMatrix?(n=o.transform||o.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(l=>l.replace(",",".")).join(", ")),r=new t.WebKitCSSMatrix(n==="none"?"":n)):(r=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=r.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?n=r.m41:s.length===16?n=parseFloat(s[12]):n=parseFloat(s[4])),e==="y"&&(t.WebKitCSSMatrix?n=r.m42:s.length===16?n=parseFloat(s[13]):n=parseFloat(s[5])),n||0}function ce(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function Ms(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function W(){const i=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const s=t<0||arguments.length<=t?void 0:arguments[t];if(s!=null&&!Ms(s)){const n=Object.keys(Object(s)).filter(r=>e.indexOf(r)<0);for(let r=0,o=n.length;r<o;r+=1){const l=n[r],a=Object.getOwnPropertyDescriptor(s,l);a!==void 0&&a.enumerable&&(ce(i[l])&&ce(s[l])?s[l].__swiper__?i[l]=s[l]:W(i[l],s[l]):!ce(i[l])&&ce(s[l])?(i[l]={},s[l].__swiper__?i[l]=s[l]:W(i[l],s[l])):i[l]=s[l])}}}return i}function re(i,e,t){i.style.setProperty(e,t)}function vt(i){let{swiper:e,targetPosition:t,side:s}=i;const n=Y(),r=-e.translate;let o=null,l;const a=e.params.speed;e.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(e.cssModeFrameID);const c=t>r?"next":"prev",d=(h,g)=>c==="next"&&h>=g||c==="prev"&&h<=g,p=()=>{l=new Date().getTime(),o===null&&(o=l);const h=Math.max(Math.min((l-o)/a,1),0),g=.5-Math.cos(h*Math.PI)/2;let m=r+g*(t-r);if(d(m,t)&&(m=t),e.wrapperEl.scrollTo({[s]:m}),d(m,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[s]:m})}),n.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=n.requestAnimationFrame(p)};p()}function wt(i){return i.querySelector(".swiper-slide-transform")||i.shadowRoot&&i.shadowRoot.querySelector(".swiper-slide-transform")||i}function q(i,e){return e===void 0&&(e=""),[...i.children].filter(t=>t.matches(e))}function he(i){try{console.warn(i);return}catch{}}function oe(i,e){e===void 0&&(e=[]);const t=document.createElement(i);return t.classList.add(...Array.isArray(e)?e:ys(e)),t}function Is(i,e){const t=[];for(;i.previousElementSibling;){const s=i.previousElementSibling;e?s.matches(e)&&t.push(s):t.push(s),i=s}return t}function js(i,e){const t=[];for(;i.nextElementSibling;){const s=i.nextElementSibling;e?s.matches(e)&&t.push(s):t.push(s),i=s}return t}function Q(i,e){return Y().getComputedStyle(i,null).getPropertyValue(e)}function Ye(i){let e=i,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function Ls(i,e){const t=[];let s=i.parentElement;for(;s;)e?s.matches(e)&&t.push(s):t.push(s),s=s.parentElement;return t}function ks(i,e){function t(s){s.target===i&&(e.call(i,s),i.removeEventListener("transitionend",t))}e&&i.addEventListener("transitionend",t)}function qe(i,e,t){const s=Y();return t?i[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom")):i.offsetWidth}function Os(i){let{swiper:e,extendParams:t,on:s,emit:n}=i;t({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let r;const o=X();e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};const l=o.createElement("div");function a(m,v){const x=e.params.virtual;if(x.cache&&e.virtual.cache[v])return e.virtual.cache[v];let f;return x.renderSlide?(f=x.renderSlide.call(e,m,v),typeof f=="string"&&(l.innerHTML=f,f=l.children[0])):e.isElement?f=oe("swiper-slide"):f=oe("div",e.params.slideClass),f.setAttribute("data-swiper-slide-index",v),x.renderSlide||(f.innerHTML=m),x.cache&&(e.virtual.cache[v]=f),f}function c(m){const{slidesPerView:v,slidesPerGroup:x,centeredSlides:f,loop:T}=e.params,{addSlidesBefore:S,addSlidesAfter:y}=e.params.virtual,{from:E,to:L,slides:D,slidesGrid:O,offset:M}=e.virtual;e.params.cssMode||e.updateActiveIndex();const b=e.activeIndex||0;let P;e.rtlTranslate?P="right":P=e.isHorizontal()?"left":"top";let I,C;f?(I=Math.floor(v/2)+x+y,C=Math.floor(v/2)+x+S):(I=v+(x-1)+y,C=(T?v:x)+S);let $=b-C,G=b+I;T||($=Math.max($,0),G=Math.min(G,D.length-1));let B=(e.slidesGrid[$]||0)-(e.slidesGrid[0]||0);T&&b>=C?($-=C,f||(B+=e.slidesGrid[0])):T&&b<C&&($=-C,f&&(B+=e.slidesGrid[0])),Object.assign(e.virtual,{from:$,to:G,offset:B,slidesGrid:e.slidesGrid,slidesBefore:C,slidesAfter:I});function J(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),n("virtualUpdate")}if(E===$&&L===G&&!m){e.slidesGrid!==O&&B!==M&&e.slides.forEach(A=>{A.style[P]=`${B-Math.abs(e.cssOverflowAdjustment())}px`}),e.updateProgress(),n("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:B,from:$,to:G,slides:function(){const H=[];for(let ee=$;ee<=G;ee+=1)H.push(D[ee]);return H}()}),e.params.virtual.renderExternalUpdate?J():n("virtualUpdate");return}const z=[],F=[],V=A=>{let H=A;return A<0?H=D.length+A:H>=D.length&&(H=H-D.length),H};if(m)e.slides.filter(A=>A.matches(`.${e.params.slideClass}, swiper-slide`)).forEach(A=>{A.remove()});else for(let A=E;A<=L;A+=1)if(A<$||A>G){const H=V(A);e.slides.filter(ee=>ee.matches(`.${e.params.slideClass}[data-swiper-slide-index="${H}"], swiper-slide[data-swiper-slide-index="${H}"]`)).forEach(ee=>{ee.remove()})}const U=T?-D.length:0,ie=T?D.length*2:D.length;for(let A=U;A<ie;A+=1)if(A>=$&&A<=G){const H=V(A);typeof L>"u"||m?F.push(H):(A>L&&F.push(H),A<E&&z.push(H))}if(F.forEach(A=>{e.slidesEl.append(a(D[A],A))}),T)for(let A=z.length-1;A>=0;A-=1){const H=z[A];e.slidesEl.prepend(a(D[H],H))}else z.sort((A,H)=>H-A),z.forEach(A=>{e.slidesEl.prepend(a(D[A],A))});q(e.slidesEl,".swiper-slide, swiper-slide").forEach(A=>{A.style[P]=`${B-Math.abs(e.cssOverflowAdjustment())}px`}),J()}function d(m){if(typeof m=="object"&&"length"in m)for(let v=0;v<m.length;v+=1)m[v]&&e.virtual.slides.push(m[v]);else e.virtual.slides.push(m);c(!0)}function p(m){const v=e.activeIndex;let x=v+1,f=1;if(Array.isArray(m)){for(let T=0;T<m.length;T+=1)m[T]&&e.virtual.slides.unshift(m[T]);x=v+m.length,f=m.length}else e.virtual.slides.unshift(m);if(e.params.virtual.cache){const T=e.virtual.cache,S={};Object.keys(T).forEach(y=>{const E=T[y],L=E.getAttribute("data-swiper-slide-index");L&&E.setAttribute("data-swiper-slide-index",parseInt(L,10)+f),S[parseInt(y,10)+f]=E}),e.virtual.cache=S}c(!0),e.slideTo(x,0)}function h(m){if(typeof m>"u"||m===null)return;let v=e.activeIndex;if(Array.isArray(m))for(let x=m.length-1;x>=0;x-=1)e.params.virtual.cache&&(delete e.virtual.cache[m[x]],Object.keys(e.virtual.cache).forEach(f=>{f>m&&(e.virtual.cache[f-1]=e.virtual.cache[f],e.virtual.cache[f-1].setAttribute("data-swiper-slide-index",f-1),delete e.virtual.cache[f])})),e.virtual.slides.splice(m[x],1),m[x]<v&&(v-=1),v=Math.max(v,0);else e.params.virtual.cache&&(delete e.virtual.cache[m],Object.keys(e.virtual.cache).forEach(x=>{x>m&&(e.virtual.cache[x-1]=e.virtual.cache[x],e.virtual.cache[x-1].setAttribute("data-swiper-slide-index",x-1),delete e.virtual.cache[x])})),e.virtual.slides.splice(m,1),m<v&&(v-=1),v=Math.max(v,0);c(!0),e.slideTo(v,0)}function g(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),c(!0),e.slideTo(0,0)}s("beforeInit",()=>{if(!e.params.virtual.enabled)return;let m;if(typeof e.passedParams.virtual.slides>"u"){const v=[...e.slidesEl.children].filter(x=>x.matches(`.${e.params.slideClass}, swiper-slide`));v&&v.length&&(e.virtual.slides=[...v],m=!0,v.forEach((x,f)=>{x.setAttribute("data-swiper-slide-index",f),e.virtual.cache[f]=x,x.remove()}))}m||(e.virtual.slides=e.params.virtual.slides),e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,c()}),s("setTranslate",()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(r),r=setTimeout(()=>{c()},100)):c())}),s("init update resize",()=>{e.params.virtual.enabled&&e.params.cssMode&&re(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:d,prependSlide:p,removeSlide:h,removeAllSlides:g,update:c})}function xt(i){let{swiper:e,extendParams:t,on:s,emit:n,params:r}=i;e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,l,a=r&&r.autoplay?r.autoplay.delay:3e3,c=r&&r.autoplay?r.autoplay.delay:3e3,d,p=new Date().getTime(),h,g,m,v,x,f,T;function S(z){!e||e.destroyed||!e.wrapperEl||z.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",S),!T&&b())}const y=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?h=!0:h&&(c=d,h=!1);const z=e.autoplay.paused?d:p+c-new Date().getTime();e.autoplay.timeLeft=z,n("autoplayTimeLeft",z,z/a),l=requestAnimationFrame(()=>{y()})},E=()=>{let z;return e.virtual&&e.params.virtual.enabled?z=e.slides.filter(V=>V.classList.contains("swiper-slide-active"))[0]:z=e.slides[e.activeIndex],z?parseInt(z.getAttribute("data-swiper-autoplay"),10):void 0},L=z=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(l),y();let F=typeof z>"u"?e.params.autoplay.delay:z;a=e.params.autoplay.delay,c=e.params.autoplay.delay;const V=E();!Number.isNaN(V)&&V>0&&typeof z>"u"&&(F=V,a=V,c=V),d=F;const U=e.params.speed,ie=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(U,!0,!0),n("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,U,!0,!0),n("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(U,!0,!0),n("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,U,!0,!0),n("autoplay")),e.params.cssMode&&(p=new Date().getTime(),requestAnimationFrame(()=>{L()})))};return F>0?(clearTimeout(o),o=setTimeout(()=>{ie()},F)):requestAnimationFrame(()=>{ie()}),F},D=()=>{p=new Date().getTime(),e.autoplay.running=!0,L(),n("autoplayStart")},O=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(l),n("autoplayStop")},M=(z,F)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),z||(f=!0);const V=()=>{n("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",S):b()};if(e.autoplay.paused=!0,F){x&&(d=e.params.autoplay.delay),x=!1,V();return}d=(d||e.params.autoplay.delay)-(new Date().getTime()-p),!(e.isEnd&&d<0&&!e.params.loop)&&(d<0&&(d=0),V())},b=()=>{e.isEnd&&d<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(p=new Date().getTime(),f?(f=!1,L(d)):L(),e.autoplay.paused=!1,n("autoplayResume"))},P=()=>{if(e.destroyed||!e.autoplay.running)return;const z=X();z.visibilityState==="hidden"&&(f=!0,M(!0)),z.visibilityState==="visible"&&b()},I=z=>{z.pointerType==="mouse"&&(f=!0,T=!0,!(e.animating||e.autoplay.paused)&&M(!0))},C=z=>{z.pointerType==="mouse"&&(T=!1,e.autoplay.paused&&b())},$=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",I),e.el.addEventListener("pointerleave",C))},G=()=>{e.el.removeEventListener("pointerenter",I),e.el.removeEventListener("pointerleave",C)},B=()=>{X().addEventListener("visibilitychange",P)},J=()=>{X().removeEventListener("visibilitychange",P)};s("init",()=>{e.params.autoplay.enabled&&($(),B(),D())}),s("destroy",()=>{G(),J(),e.autoplay.running&&O()}),s("_freeModeStaticRelease",()=>{(m||f)&&b()}),s("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?O():M(!0,!0)}),s("beforeTransitionStart",(z,F,V)=>{e.destroyed||!e.autoplay.running||(V||!e.params.autoplay.disableOnInteraction?M(!0,!0):O())}),s("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){O();return}g=!0,m=!1,f=!1,v=setTimeout(()=>{f=!0,m=!0,M(!0)},200)}}),s("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!g)){if(clearTimeout(v),clearTimeout(o),e.params.autoplay.disableOnInteraction){m=!1,g=!1;return}m&&e.params.cssMode&&b(),m=!1,g=!1}}),s("slideChange",()=>{e.destroyed||!e.autoplay.running||(x=!0)}),Object.assign(e.autoplay,{start:D,stop:O,pause:M,resume:b})}function As(i){const{effect:e,swiper:t,on:s,setTranslate:n,setTransition:r,overwriteParams:o,perspective:l,recreateShadows:a,getEffectParams:c}=i;s("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),l&&l()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const p=o?o():{};Object.assign(t.params,p),Object.assign(t.originalParams,p)}),s("setTranslate",()=>{t.params.effect===e&&n()}),s("setTransition",(p,h)=>{t.params.effect===e&&r(h)}),s("transitionEnd",()=>{if(t.params.effect===e&&a){if(!c||!c().slideShadows)return;t.slides.forEach(p=>{p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(h=>h.remove())}),a()}});let d;s("virtualUpdate",()=>{t.params.effect===e&&(t.slides.length||(d=!0),requestAnimationFrame(()=>{d&&t.slides&&t.slides.length&&(n(),d=!1)}))})}function zs(i,e){const t=wt(e);return t!==e&&(t.style.backfaceVisibility="hidden",t.style["-webkit-backface-visibility"]="hidden"),t}function $s(i){let{swiper:e,duration:t,transformElements:s,allSlides:n}=i;const{activeIndex:r}=e,o=l=>l.parentElement?l.parentElement:e.slides.filter(c=>c.shadowRoot&&c.shadowRoot===l.parentNode)[0];if(e.params.virtualTranslate&&t!==0){let l=!1,a;n?a=s:a=s.filter(c=>{const d=c.classList.contains("swiper-slide-transform")?o(c):c;return e.getSlideIndex(d)===r}),a.forEach(c=>{ks(c,()=>{if(l||!e||e.destroyed)return;l=!0,e.animating=!1;const d=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(d)})})}}function Ds(i){let{swiper:e,extendParams:t,on:s}=i;t({fadeEffect:{crossFade:!1}}),As({effect:"fade",swiper:e,on:s,setTranslate:()=>{const{slides:o}=e,l=e.params.fadeEffect;for(let a=0;a<o.length;a+=1){const c=e.slides[a];let p=-c.swiperSlideOffset;e.params.virtualTranslate||(p-=e.translate);let h=0;e.isHorizontal()||(h=p,p=0);const g=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(c.progress),0):1+Math.min(Math.max(c.progress,-1),0),m=zs(l,c);m.style.opacity=g,m.style.transform=`translate3d(${p}px, ${h}px, 0px)`}},setTransition:o=>{const l=e.slides.map(a=>wt(a));l.forEach(a=>{a.style.transitionDuration=`${o}ms`}),$s({swiper:e,duration:o,transformElements:l,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}let be;function Fs(){const i=Y(),e=X();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&e instanceof i.DocumentTouch)}}function St(){return be||(be=Fs()),be}let Te;function _s(i){let{userAgent:e}=i===void 0?{}:i;const t=St(),s=Y(),n=s.navigator.platform,r=e||s.navigator.userAgent,o={ios:!1,android:!1},l=s.screen.width,a=s.screen.height,c=r.match(/(Android);?[\s\/]+([\d.]+)?/);let d=r.match(/(iPad).*OS\s([\d_]+)/);const p=r.match(/(iPod)(.*OS\s([\d_]+))?/),h=!d&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),g=n==="Win32";let m=n==="MacIntel";const v=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&m&&t.touch&&v.indexOf(`${l}x${a}`)>=0&&(d=r.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),m=!1),c&&!g&&(o.os="android",o.android=!0),(d||h||p)&&(o.os="ios",o.ios=!0),o}function Gs(i){return i===void 0&&(i={}),Te||(Te=_s(i)),Te}let ye;function Vs(){const i=Y();let e=!1;function t(){const s=i.navigator.userAgent.toLowerCase();return s.indexOf("safari")>=0&&s.indexOf("chrome")<0&&s.indexOf("android")<0}if(t()){const s=String(i.navigator.userAgent);if(s.includes("Version/")){const[n,r]=s.split("Version/")[1].split(" ")[0].split(".").map(o=>Number(o));e=n<16||n===16&&r<2}}return{isSafari:e||t(),needPerspectiveFix:e,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent)}}function Ns(){return ye||(ye=Vs()),ye}function Rs(i){let{swiper:e,on:t,emit:s}=i;const n=Y();let r=null,o=null;const l=()=>{!e||e.destroyed||!e.initialized||(s("beforeResize"),s("resize"))},a=()=>{!e||e.destroyed||!e.initialized||(r=new ResizeObserver(p=>{o=n.requestAnimationFrame(()=>{const{width:h,height:g}=e;let m=h,v=g;p.forEach(x=>{let{contentBoxSize:f,contentRect:T,target:S}=x;S&&S!==e.el||(m=T?T.width:(f[0]||f).inlineSize,v=T?T.height:(f[0]||f).blockSize)}),(m!==h||v!==g)&&l()})}),r.observe(e.el))},c=()=>{o&&n.cancelAnimationFrame(o),r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null)},d=()=>{!e||e.destroyed||!e.initialized||s("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof n.ResizeObserver<"u"){a();return}n.addEventListener("resize",l),n.addEventListener("orientationchange",d)}),t("destroy",()=>{c(),n.removeEventListener("resize",l),n.removeEventListener("orientationchange",d)})}function Bs(i){let{swiper:e,extendParams:t,on:s,emit:n}=i;const r=[],o=Y(),l=function(d,p){p===void 0&&(p={});const h=o.MutationObserver||o.WebkitMutationObserver,g=new h(m=>{if(e.__preventObserver__)return;if(m.length===1){n("observerUpdate",m[0]);return}const v=function(){n("observerUpdate",m[0])};o.requestAnimationFrame?o.requestAnimationFrame(v):o.setTimeout(v,0)});g.observe(d,{attributes:typeof p.attributes>"u"?!0:p.attributes,childList:typeof p.childList>"u"?!0:p.childList,characterData:typeof p.characterData>"u"?!0:p.characterData}),r.push(g)},a=()=>{if(e.params.observer){if(e.params.observeParents){const d=Ls(e.hostEl);for(let p=0;p<d.length;p+=1)l(d[p])}l(e.hostEl,{childList:e.params.observeSlideChildren}),l(e.wrapperEl,{attributes:!1})}},c=()=>{r.forEach(d=>{d.disconnect()}),r.splice(0,r.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",a),s("destroy",c)}var Hs={on(i,e,t){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;const n=t?"unshift":"push";return i.split(" ").forEach(r=>{s.eventsListeners[r]||(s.eventsListeners[r]=[]),s.eventsListeners[r][n](e)}),s},once(i,e,t){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;function n(){s.off(i,n),n.__emitterProxy&&delete n.__emitterProxy;for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];e.apply(s,o)}return n.__emitterProxy=e,s.on(i,n,t)},onAny(i,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof i!="function")return t;const s=e?"unshift":"push";return t.eventsAnyListeners.indexOf(i)<0&&t.eventsAnyListeners[s](i),t},offAny(i){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(i);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(i,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||i.split(" ").forEach(s=>{typeof e>"u"?t.eventsListeners[s]=[]:t.eventsListeners[s]&&t.eventsListeners[s].forEach((n,r)=>{(n===e||n.__emitterProxy&&n.__emitterProxy===e)&&t.eventsListeners[s].splice(r,1)})}),t},emit(){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsListeners)return i;let e,t,s;for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return typeof r[0]=="string"||Array.isArray(r[0])?(e=r[0],t=r.slice(1,r.length),s=i):(e=r[0].events,t=r[0].data,s=r[0].context||i),t.unshift(s),(Array.isArray(e)?e:e.split(" ")).forEach(a=>{i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(c=>{c.apply(s,[a,...t])}),i.eventsListeners&&i.eventsListeners[a]&&i.eventsListeners[a].forEach(c=>{c.apply(s,t)})}),i}};function Ws(){const i=this;let e,t;const s=i.el;typeof i.params.width<"u"&&i.params.width!==null?e=i.params.width:e=s.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?t=i.params.height:t=s.clientHeight,!(e===0&&i.isHorizontal()||t===0&&i.isVertical())&&(e=e-parseInt(Q(s,"padding-left")||0,10)-parseInt(Q(s,"padding-right")||0,10),t=t-parseInt(Q(s,"padding-top")||0,10)-parseInt(Q(s,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(i,{width:e,height:t,size:i.isHorizontal()?e:t}))}function Ys(){const i=this;function e(b,P){return parseFloat(b.getPropertyValue(i.getDirectionLabel(P))||0)}const t=i.params,{wrapperEl:s,slidesEl:n,size:r,rtlTranslate:o,wrongRTL:l}=i,a=i.virtual&&t.virtual.enabled,c=a?i.virtual.slides.length:i.slides.length,d=q(n,`.${i.params.slideClass}, swiper-slide`),p=a?i.virtual.slides.length:d.length;let h=[];const g=[],m=[];let v=t.slidesOffsetBefore;typeof v=="function"&&(v=t.slidesOffsetBefore.call(i));let x=t.slidesOffsetAfter;typeof x=="function"&&(x=t.slidesOffsetAfter.call(i));const f=i.snapGrid.length,T=i.slidesGrid.length;let S=t.spaceBetween,y=-v,E=0,L=0;if(typeof r>"u")return;typeof S=="string"&&S.indexOf("%")>=0?S=parseFloat(S.replace("%",""))/100*r:typeof S=="string"&&(S=parseFloat(S)),i.virtualSize=-S,d.forEach(b=>{o?b.style.marginLeft="":b.style.marginRight="",b.style.marginBottom="",b.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(re(s,"--swiper-centered-offset-before",""),re(s,"--swiper-centered-offset-after",""));const D=t.grid&&t.grid.rows>1&&i.grid;D?i.grid.initSlides(d):i.grid&&i.grid.unsetSlides();let O;const M=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(b=>typeof t.breakpoints[b].slidesPerView<"u").length>0;for(let b=0;b<p;b+=1){O=0;let P;if(d[b]&&(P=d[b]),D&&i.grid.updateSlide(b,P,d),!(d[b]&&Q(P,"display")==="none")){if(t.slidesPerView==="auto"){M&&(d[b].style[i.getDirectionLabel("width")]="");const I=getComputedStyle(P),C=P.style.transform,$=P.style.webkitTransform;if(C&&(P.style.transform="none"),$&&(P.style.webkitTransform="none"),t.roundLengths)O=i.isHorizontal()?qe(P,"width",!0):qe(P,"height",!0);else{const G=e(I,"width"),B=e(I,"padding-left"),J=e(I,"padding-right"),z=e(I,"margin-left"),F=e(I,"margin-right"),V=I.getPropertyValue("box-sizing");if(V&&V==="border-box")O=G+z+F;else{const{clientWidth:U,offsetWidth:ie}=P;O=G+B+J+z+F+(ie-U)}}C&&(P.style.transform=C),$&&(P.style.webkitTransform=$),t.roundLengths&&(O=Math.floor(O))}else O=(r-(t.slidesPerView-1)*S)/t.slidesPerView,t.roundLengths&&(O=Math.floor(O)),d[b]&&(d[b].style[i.getDirectionLabel("width")]=`${O}px`);d[b]&&(d[b].swiperSlideSize=O),m.push(O),t.centeredSlides?(y=y+O/2+E/2+S,E===0&&b!==0&&(y=y-r/2-S),b===0&&(y=y-r/2-S),Math.abs(y)<1/1e3&&(y=0),t.roundLengths&&(y=Math.floor(y)),L%t.slidesPerGroup===0&&h.push(y),g.push(y)):(t.roundLengths&&(y=Math.floor(y)),(L-Math.min(i.params.slidesPerGroupSkip,L))%i.params.slidesPerGroup===0&&h.push(y),g.push(y),y=y+O+S),i.virtualSize+=O+S,E=O,L+=1}}if(i.virtualSize=Math.max(i.virtualSize,r)+x,o&&l&&(t.effect==="slide"||t.effect==="coverflow")&&(s.style.width=`${i.virtualSize+S}px`),t.setWrapperSize&&(s.style[i.getDirectionLabel("width")]=`${i.virtualSize+S}px`),D&&i.grid.updateWrapperSize(O,h),!t.centeredSlides){const b=[];for(let P=0;P<h.length;P+=1){let I=h[P];t.roundLengths&&(I=Math.floor(I)),h[P]<=i.virtualSize-r&&b.push(I)}h=b,Math.floor(i.virtualSize-r)-Math.floor(h[h.length-1])>1&&h.push(i.virtualSize-r)}if(a&&t.loop){const b=m[0]+S;if(t.slidesPerGroup>1){const P=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/t.slidesPerGroup),I=b*t.slidesPerGroup;for(let C=0;C<P;C+=1)h.push(h[h.length-1]+I)}for(let P=0;P<i.virtual.slidesBefore+i.virtual.slidesAfter;P+=1)t.slidesPerGroup===1&&h.push(h[h.length-1]+b),g.push(g[g.length-1]+b),i.virtualSize+=b}if(h.length===0&&(h=[0]),S!==0){const b=i.isHorizontal()&&o?"marginLeft":i.getDirectionLabel("marginRight");d.filter((P,I)=>!t.cssMode||t.loop?!0:I!==d.length-1).forEach(P=>{P.style[b]=`${S}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let b=0;m.forEach(I=>{b+=I+(S||0)}),b-=S;const P=b-r;h=h.map(I=>I<=0?-v:I>P?P+x:I)}if(t.centerInsufficientSlides){let b=0;if(m.forEach(P=>{b+=P+(S||0)}),b-=S,b<r){const P=(r-b)/2;h.forEach((I,C)=>{h[C]=I-P}),g.forEach((I,C)=>{g[C]=I+P})}}if(Object.assign(i,{slides:d,snapGrid:h,slidesGrid:g,slidesSizesGrid:m}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){re(s,"--swiper-centered-offset-before",`${-h[0]}px`),re(s,"--swiper-centered-offset-after",`${i.size/2-m[m.length-1]/2}px`);const b=-i.snapGrid[0],P=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(I=>I+b),i.slidesGrid=i.slidesGrid.map(I=>I+P)}if(p!==c&&i.emit("slidesLengthChange"),h.length!==f&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),g.length!==T&&i.emit("slidesGridLengthChange"),t.watchSlidesProgress&&i.updateSlidesOffset(),i.emit("slidesUpdated"),!a&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const b=`${t.containerModifierClass}backface-hidden`,P=i.el.classList.contains(b);p<=t.maxBackfaceHiddenSlides?P||i.el.classList.add(b):P&&i.el.classList.remove(b)}}function qs(i){const e=this,t=[],s=e.virtual&&e.params.virtual.enabled;let n=0,r;typeof i=="number"?e.setTransition(i):i===!0&&e.setTransition(e.params.speed);const o=l=>s?e.slides[e.getSlideIndexByData(l)]:e.slides[l];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(l=>{t.push(l)});else for(r=0;r<Math.ceil(e.params.slidesPerView);r+=1){const l=e.activeIndex+r;if(l>e.slides.length&&!s)break;t.push(o(l))}else t.push(o(e.activeIndex));for(r=0;r<t.length;r+=1)if(typeof t[r]<"u"){const l=t[r].offsetHeight;n=l>n?l:n}(n||n===0)&&(e.wrapperEl.style.height=`${n}px`)}function Xs(){const i=this,e=i.slides,t=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let s=0;s<e.length;s+=1)e[s].swiperSlideOffset=(i.isHorizontal()?e[s].offsetLeft:e[s].offsetTop)-t-i.cssOverflowAdjustment()}function Us(i){i===void 0&&(i=this&&this.translate||0);const e=this,t=e.params,{slides:s,rtlTranslate:n,snapGrid:r}=e;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-i;n&&(o=i),s.forEach(a=>{a.classList.remove(t.slideVisibleClass,t.slideFullyVisibleClass)}),e.visibleSlidesIndexes=[],e.visibleSlides=[];let l=t.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*e.size:typeof l=="string"&&(l=parseFloat(l));for(let a=0;a<s.length;a+=1){const c=s[a];let d=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(d-=s[0].swiperSlideOffset);const p=(o+(t.centeredSlides?e.minTranslate():0)-d)/(c.swiperSlideSize+l),h=(o-r[0]+(t.centeredSlides?e.minTranslate():0)-d)/(c.swiperSlideSize+l),g=-(o-d),m=g+e.slidesSizesGrid[a],v=g>=0&&g<=e.size-e.slidesSizesGrid[a];(g>=0&&g<e.size-1||m>1&&m<=e.size||g<=0&&m>=e.size)&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(a),s[a].classList.add(t.slideVisibleClass)),v&&s[a].classList.add(t.slideFullyVisibleClass),c.progress=n?-p:p,c.originalProgress=n?-h:h}}function Zs(i){const e=this;if(typeof i>"u"){const d=e.rtlTranslate?-1:1;i=e&&e.translate&&e.translate*d||0}const t=e.params,s=e.maxTranslate()-e.minTranslate();let{progress:n,isBeginning:r,isEnd:o,progressLoop:l}=e;const a=r,c=o;if(s===0)n=0,r=!0,o=!0;else{n=(i-e.minTranslate())/s;const d=Math.abs(i-e.minTranslate())<1,p=Math.abs(i-e.maxTranslate())<1;r=d||n<=0,o=p||n>=1,d&&(n=0),p&&(n=1)}if(t.loop){const d=e.getSlideIndexByData(0),p=e.getSlideIndexByData(e.slides.length-1),h=e.slidesGrid[d],g=e.slidesGrid[p],m=e.slidesGrid[e.slidesGrid.length-1],v=Math.abs(i);v>=h?l=(v-h)/m:l=(v+m-g)/m,l>1&&(l-=1)}Object.assign(e,{progress:n,progressLoop:l,isBeginning:r,isEnd:o}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(i),r&&!a&&e.emit("reachBeginning toEdge"),o&&!c&&e.emit("reachEnd toEdge"),(a&&!r||c&&!o)&&e.emit("fromEdge"),e.emit("progress",n)}function Ks(){const i=this,{slides:e,params:t,slidesEl:s,activeIndex:n}=i,r=i.virtual&&t.virtual.enabled,o=i.grid&&t.grid&&t.grid.rows>1,l=p=>q(s,`.${t.slideClass}${p}, swiper-slide${p}`)[0];e.forEach(p=>{p.classList.remove(t.slideActiveClass,t.slideNextClass,t.slidePrevClass)});let a,c,d;if(r)if(t.loop){let p=n-i.virtual.slidesBefore;p<0&&(p=i.virtual.slides.length+p),p>=i.virtual.slides.length&&(p-=i.virtual.slides.length),a=l(`[data-swiper-slide-index="${p}"]`)}else a=l(`[data-swiper-slide-index="${n}"]`);else o?(a=e.filter(p=>p.column===n)[0],d=e.filter(p=>p.column===n+1)[0],c=e.filter(p=>p.column===n-1)[0]):a=e[n];a&&(a.classList.add(t.slideActiveClass),o?(d&&d.classList.add(t.slideNextClass),c&&c.classList.add(t.slidePrevClass)):(d=js(a,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!d&&(d=e[0]),d&&d.classList.add(t.slideNextClass),c=Is(a,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]),c&&c.classList.add(t.slidePrevClass))),i.emitSlidesClasses()}const pe=(i,e)=>{if(!i||i.destroyed||!i.params)return;const t=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,s=e.closest(t());if(s){let n=s.querySelector(`.${i.params.lazyPreloaderClass}`);!n&&i.isElement&&(s.shadowRoot?n=s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{s.shadowRoot&&(n=s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),n&&n.remove())})),n&&n.remove()}},Ee=(i,e)=>{if(!i.slides[e])return;const t=i.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},je=i=>{if(!i||i.destroyed||!i.params)return;let e=i.params.lazyPreloadPrevNext;const t=i.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const s=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),n=i.activeIndex;if(i.params.grid&&i.params.grid.rows>1){const o=n,l=[o-e];l.push(...Array.from({length:e}).map((a,c)=>o+s+c)),i.slides.forEach((a,c)=>{l.includes(a.column)&&Ee(i,c)});return}const r=n+s-1;if(i.params.rewind||i.params.loop)for(let o=n-e;o<=r+e;o+=1){const l=(o%t+t)%t;(l<n||l>r)&&Ee(i,l)}else for(let o=Math.max(n-e,0);o<=Math.min(r+e,t-1);o+=1)o!==n&&(o>r||o<n)&&Ee(i,o)};function Js(i){const{slidesGrid:e,params:t}=i,s=i.rtlTranslate?i.translate:-i.translate;let n;for(let r=0;r<e.length;r+=1)typeof e[r+1]<"u"?s>=e[r]&&s<e[r+1]-(e[r+1]-e[r])/2?n=r:s>=e[r]&&s<e[r+1]&&(n=r+1):s>=e[r]&&(n=r);return t.normalizeSlideIndex&&(n<0||typeof n>"u")&&(n=0),n}function Qs(i){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:s,params:n,activeIndex:r,realIndex:o,snapIndex:l}=e;let a=i,c;const d=g=>{let m=g-e.virtual.slidesBefore;return m<0&&(m=e.virtual.slides.length+m),m>=e.virtual.slides.length&&(m-=e.virtual.slides.length),m};if(typeof a>"u"&&(a=Js(e)),s.indexOf(t)>=0)c=s.indexOf(t);else{const g=Math.min(n.slidesPerGroupSkip,a);c=g+Math.floor((a-g)/n.slidesPerGroup)}if(c>=s.length&&(c=s.length-1),a===r&&!e.params.loop){c!==l&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(a===r&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=d(a);return}const p=e.grid&&n.grid&&n.grid.rows>1;let h;if(e.virtual&&n.virtual.enabled&&n.loop)h=d(a);else if(p){const g=e.slides.filter(v=>v.column===a)[0];let m=parseInt(g.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(e.slides.indexOf(g),0)),h=Math.floor(m/n.grid.rows)}else if(e.slides[a]){const g=e.slides[a].getAttribute("data-swiper-slide-index");g?h=parseInt(g,10):h=a}else h=a;Object.assign(e,{previousSnapIndex:l,snapIndex:c,previousRealIndex:o,realIndex:h,previousIndex:r,activeIndex:a}),e.initialized&&je(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==h&&e.emit("realIndexChange"),e.emit("slideChange"))}function er(i,e){const t=this,s=t.params;let n=i.closest(`.${s.slideClass}, swiper-slide`);!n&&t.isElement&&e&&e.length>1&&e.includes(i)&&[...e.slice(e.indexOf(i)+1,e.length)].forEach(l=>{!n&&l.matches&&l.matches(`.${s.slideClass}, swiper-slide`)&&(n=l)});let r=!1,o;if(n){for(let l=0;l<t.slides.length;l+=1)if(t.slides[l]===n){r=!0,o=l;break}}if(n&&r)t.clickedSlide=n,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=o;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}s.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var tr={updateSize:Ws,updateSlides:Ys,updateAutoHeight:qs,updateSlidesOffset:Xs,updateSlidesProgress:Us,updateProgress:Zs,updateSlidesClasses:Ks,updateActiveIndex:Qs,updateClickedSlide:er};function ir(i){i===void 0&&(i=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:s,translate:n,wrapperEl:r}=e;if(t.virtualTranslate)return s?-n:n;if(t.cssMode)return n;let o=Ps(r,i);return o+=e.cssOverflowAdjustment(),s&&(o=-o),o||0}function sr(i,e){const t=this,{rtlTranslate:s,params:n,wrapperEl:r,progress:o}=t;let l=0,a=0;const c=0;t.isHorizontal()?l=s?-i:i:a=i,n.roundLengths&&(l=Math.floor(l),a=Math.floor(a)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?l:a,n.cssMode?r[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-l:-a:n.virtualTranslate||(t.isHorizontal()?l-=t.cssOverflowAdjustment():a-=t.cssOverflowAdjustment(),r.style.transform=`translate3d(${l}px, ${a}px, ${c}px)`);let d;const p=t.maxTranslate()-t.minTranslate();p===0?d=0:d=(i-t.minTranslate())/p,d!==o&&t.updateProgress(i),t.emit("setTranslate",t.translate,e)}function rr(){return-this.snapGrid[0]}function nr(){return-this.snapGrid[this.snapGrid.length-1]}function ar(i,e,t,s,n){i===void 0&&(i=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),s===void 0&&(s=!0);const r=this,{params:o,wrapperEl:l}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const a=r.minTranslate(),c=r.maxTranslate();let d;if(s&&i>a?d=a:s&&i<c?d=c:d=i,r.updateProgress(d),o.cssMode){const p=r.isHorizontal();if(e===0)l[p?"scrollLeft":"scrollTop"]=-d;else{if(!r.support.smoothScroll)return vt({swiper:r,targetPosition:-d,side:p?"left":"top"}),!0;l.scrollTo({[p?"left":"top"]:-d,behavior:"smooth"})}return!0}return e===0?(r.setTransition(0),r.setTranslate(d),t&&(r.emit("beforeTransitionStart",e,n),r.emit("transitionEnd"))):(r.setTransition(e),r.setTranslate(d),t&&(r.emit("beforeTransitionStart",e,n),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(h){!r||r.destroyed||h.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,t&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var or={getTranslate:ir,setTranslate:sr,minTranslate:rr,maxTranslate:nr,translateTo:ar};function lr(i,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${i}ms`,t.wrapperEl.style.transitionDelay=i===0?"0ms":""),t.emit("setTransition",i,e)}function bt(i){let{swiper:e,runCallbacks:t,direction:s,step:n}=i;const{activeIndex:r,previousIndex:o}=e;let l=s;if(l||(r>o?l="next":r<o?l="prev":l="reset"),e.emit(`transition${n}`),t&&r!==o){if(l==="reset"){e.emit(`slideResetTransition${n}`);return}e.emit(`slideChangeTransition${n}`),l==="next"?e.emit(`slideNextTransition${n}`):e.emit(`slidePrevTransition${n}`)}}function dr(i,e){i===void 0&&(i=!0);const t=this,{params:s}=t;s.cssMode||(s.autoHeight&&t.updateAutoHeight(),bt({swiper:t,runCallbacks:i,direction:e,step:"Start"}))}function cr(i,e){i===void 0&&(i=!0);const t=this,{params:s}=t;t.animating=!1,!s.cssMode&&(t.setTransition(0),bt({swiper:t,runCallbacks:i,direction:e,step:"End"}))}var ur={setTransition:lr,transitionStart:dr,transitionEnd:cr};function pr(i,e,t,s,n){i===void 0&&(i=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),typeof i=="string"&&(i=parseInt(i,10));const r=this;let o=i;o<0&&(o=0);const{params:l,snapGrid:a,slidesGrid:c,previousIndex:d,activeIndex:p,rtlTranslate:h,wrapperEl:g,enabled:m}=r;if(r.animating&&l.preventInteractionOnTransition||!m&&!s&&!n)return!1;const v=Math.min(r.params.slidesPerGroupSkip,o);let x=v+Math.floor((o-v)/r.params.slidesPerGroup);x>=a.length&&(x=a.length-1);const f=-a[x];if(l.normalizeSlideIndex)for(let S=0;S<c.length;S+=1){const y=-Math.floor(f*100),E=Math.floor(c[S]*100),L=Math.floor(c[S+1]*100);typeof c[S+1]<"u"?y>=E&&y<L-(L-E)/2?o=S:y>=E&&y<L&&(o=S+1):y>=E&&(o=S)}if(r.initialized&&o!==p&&(!r.allowSlideNext&&(h?f>r.translate&&f>r.minTranslate():f<r.translate&&f<r.minTranslate())||!r.allowSlidePrev&&f>r.translate&&f>r.maxTranslate()&&(p||0)!==o))return!1;o!==(d||0)&&t&&r.emit("beforeSlideChangeStart"),r.updateProgress(f);let T;if(o>p?T="next":o<p?T="prev":T="reset",h&&-f===r.translate||!h&&f===r.translate)return r.updateActiveIndex(o),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),l.effect!=="slide"&&r.setTranslate(f),T!=="reset"&&(r.transitionStart(t,T),r.transitionEnd(t,T)),!1;if(l.cssMode){const S=r.isHorizontal(),y=h?f:-f;if(e===0){const E=r.virtual&&r.params.virtual.enabled;E&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),E&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{g[S?"scrollLeft":"scrollTop"]=y})):g[S?"scrollLeft":"scrollTop"]=y,E&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1})}else{if(!r.support.smoothScroll)return vt({swiper:r,targetPosition:y,side:S?"left":"top"}),!0;g.scrollTo({[S?"left":"top"]:y,behavior:"smooth"})}return!0}return r.setTransition(e),r.setTranslate(f),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",e,s),r.transitionStart(t,T),e===0?r.transitionEnd(t,T):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(y){!r||r.destroyed||y.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(t,T))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function fr(i,e,t,s){i===void 0&&(i=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),typeof i=="string"&&(i=parseInt(i,10));const n=this,r=n.grid&&n.params.grid&&n.params.grid.rows>1;let o=i;if(n.params.loop)if(n.virtual&&n.params.virtual.enabled)o=o+n.virtual.slidesBefore;else{let l;if(r){const h=o*n.params.grid.rows;l=n.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===h)[0].column}else l=n.getSlideIndexByData(o);const a=r?Math.ceil(n.slides.length/n.params.grid.rows):n.slides.length,{centeredSlides:c}=n.params;let d=n.params.slidesPerView;d==="auto"?d=n.slidesPerViewDynamic():(d=Math.ceil(parseFloat(n.params.slidesPerView,10)),c&&d%2===0&&(d=d+1));let p=a-l<d;if(c&&(p=p||l<Math.ceil(d/2)),p){const h=c?l<n.activeIndex?"prev":"next":l-n.activeIndex-1<n.params.slidesPerView?"next":"prev";n.loopFix({direction:h,slideTo:!0,activeSlideIndex:h==="next"?l+1:l-a+1,slideRealIndex:h==="next"?n.realIndex:void 0})}if(r){const h=o*n.params.grid.rows;o=n.slides.filter(g=>g.getAttribute("data-swiper-slide-index")*1===h)[0].column}else o=n.getSlideIndexByData(o)}return requestAnimationFrame(()=>{n.slideTo(o,e,t,s)}),n}function mr(i,e,t){i===void 0&&(i=this.params.speed),e===void 0&&(e=!0);const s=this,{enabled:n,params:r,animating:o}=s;if(!n)return s;let l=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(l=Math.max(s.slidesPerViewDynamic("current",!0),1));const a=s.activeIndex<r.slidesPerGroupSkip?1:l,c=s.virtual&&r.virtual.enabled;if(r.loop){if(o&&!c&&r.loopPreventsSliding)return!1;if(s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft,s.activeIndex===s.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{s.slideTo(s.activeIndex+a,i,e,t)}),!0}return r.rewind&&s.isEnd?s.slideTo(0,i,e,t):s.slideTo(s.activeIndex+a,i,e,t)}function hr(i,e,t){i===void 0&&(i=this.params.speed),e===void 0&&(e=!0);const s=this,{params:n,snapGrid:r,slidesGrid:o,rtlTranslate:l,enabled:a,animating:c}=s;if(!a)return s;const d=s.virtual&&n.virtual.enabled;if(n.loop){if(c&&!d&&n.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}const p=l?s.translate:-s.translate;function h(f){return f<0?-Math.floor(Math.abs(f)):Math.floor(f)}const g=h(p),m=r.map(f=>h(f));let v=r[m.indexOf(g)-1];if(typeof v>"u"&&n.cssMode){let f;r.forEach((T,S)=>{g>=T&&(f=S)}),typeof f<"u"&&(v=r[f>0?f-1:f])}let x=0;if(typeof v<"u"&&(x=o.indexOf(v),x<0&&(x=s.activeIndex-1),n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(x=x-s.slidesPerViewDynamic("previous",!0)+1,x=Math.max(x,0))),n.rewind&&s.isBeginning){const f=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(f,i,e,t)}else if(n.loop&&s.activeIndex===0&&n.cssMode)return requestAnimationFrame(()=>{s.slideTo(x,i,e,t)}),!0;return s.slideTo(x,i,e,t)}function gr(i,e,t){i===void 0&&(i=this.params.speed),e===void 0&&(e=!0);const s=this;return s.slideTo(s.activeIndex,i,e,t)}function vr(i,e,t,s){i===void 0&&(i=this.params.speed),e===void 0&&(e=!0),s===void 0&&(s=.5);const n=this;let r=n.activeIndex;const o=Math.min(n.params.slidesPerGroupSkip,r),l=o+Math.floor((r-o)/n.params.slidesPerGroup),a=n.rtlTranslate?n.translate:-n.translate;if(a>=n.snapGrid[l]){const c=n.snapGrid[l],d=n.snapGrid[l+1];a-c>(d-c)*s&&(r+=n.params.slidesPerGroup)}else{const c=n.snapGrid[l-1],d=n.snapGrid[l];a-c<=(d-c)*s&&(r-=n.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,n.slidesGrid.length-1),n.slideTo(r,i,e,t)}function wr(){const i=this,{params:e,slidesEl:t}=i,s=e.slidesPerView==="auto"?i.slidesPerViewDynamic():e.slidesPerView;let n=i.clickedIndex,r;const o=i.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(i.animating)return;r=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?n<i.loopedSlides-s/2||n>i.slides.length-i.loopedSlides+s/2?(i.loopFix(),n=i.getSlideIndex(q(t,`${o}[data-swiper-slide-index="${r}"]`)[0]),Ie(()=>{i.slideTo(n)})):i.slideTo(n):n>i.slides.length-s?(i.loopFix(),n=i.getSlideIndex(q(t,`${o}[data-swiper-slide-index="${r}"]`)[0]),Ie(()=>{i.slideTo(n)})):i.slideTo(n)}else i.slideTo(n)}var xr={slideTo:pr,slideToLoop:fr,slideNext:mr,slidePrev:hr,slideReset:gr,slideToClosest:vr,slideToClickedSlide:wr};function Sr(i){const e=this,{params:t,slidesEl:s}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;const n=()=>{q(s,`.${t.slideClass}, swiper-slide`).forEach((p,h)=>{p.setAttribute("data-swiper-slide-index",h)})},r=e.grid&&t.grid&&t.grid.rows>1,o=t.slidesPerGroup*(r?t.grid.rows:1),l=e.slides.length%o!==0,a=r&&e.slides.length%t.grid.rows!==0,c=d=>{for(let p=0;p<d;p+=1){const h=e.isElement?oe("swiper-slide",[t.slideBlankClass]):oe("div",[t.slideClass,t.slideBlankClass]);e.slidesEl.append(h)}};if(l){if(t.loopAddBlankSlides){const d=o-e.slides.length%o;c(d),e.recalcSlides(),e.updateSlides()}else he("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else if(a){if(t.loopAddBlankSlides){const d=t.grid.rows-e.slides.length%t.grid.rows;c(d),e.recalcSlides(),e.updateSlides()}else he("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else n();e.loopFix({slideRealIndex:i,direction:t.centeredSlides?void 0:"next"})}function br(i){let{slideRealIndex:e,slideTo:t=!0,direction:s,setTranslate:n,activeSlideIndex:r,byController:o,byMousewheel:l}=i===void 0?{}:i;const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:p,slidesEl:h,params:g}=a,{centeredSlides:m}=g;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&g.virtual.enabled){t&&(!g.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):g.centeredSlides&&a.snapIndex<g.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=d,a.allowSlideNext=p,a.emit("loopFix");return}let v=g.slidesPerView;v==="auto"?v=a.slidesPerViewDynamic():(v=Math.ceil(parseFloat(g.slidesPerView,10)),m&&v%2===0&&(v=v+1));const x=g.slidesPerGroupAuto?v:g.slidesPerGroup;let f=x;f%x!==0&&(f+=x-f%x),f+=g.loopAdditionalSlides,a.loopedSlides=f;const T=a.grid&&g.grid&&g.grid.rows>1;c.length<v+f?he("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):T&&g.grid.fill==="row"&&he("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const S=[],y=[];let E=a.activeIndex;typeof r>"u"?r=a.getSlideIndex(c.filter(C=>C.classList.contains(g.slideActiveClass))[0]):E=r;const L=s==="next"||!s,D=s==="prev"||!s;let O=0,M=0;const b=T?Math.ceil(c.length/g.grid.rows):c.length,I=(T?c[r].column:r)+(m&&typeof n>"u"?-v/2+.5:0);if(I<f){O=Math.max(f-I,x);for(let C=0;C<f-I;C+=1){const $=C-Math.floor(C/b)*b;if(T){const G=b-$-1;for(let B=c.length-1;B>=0;B-=1)c[B].column===G&&S.push(B)}else S.push(b-$-1)}}else if(I+v>b-f){M=Math.max(I-(b-f*2),x);for(let C=0;C<M;C+=1){const $=C-Math.floor(C/b)*b;T?c.forEach((G,B)=>{G.column===$&&y.push(B)}):y.push($)}}if(a.__preventObserver__=!0,requestAnimationFrame(()=>{a.__preventObserver__=!1}),D&&S.forEach(C=>{c[C].swiperLoopMoveDOM=!0,h.prepend(c[C]),c[C].swiperLoopMoveDOM=!1}),L&&y.forEach(C=>{c[C].swiperLoopMoveDOM=!0,h.append(c[C]),c[C].swiperLoopMoveDOM=!1}),a.recalcSlides(),g.slidesPerView==="auto"?a.updateSlides():T&&(S.length>0&&D||y.length>0&&L)&&a.slides.forEach((C,$)=>{a.grid.updateSlide($,C,a.slides)}),g.watchSlidesProgress&&a.updateSlidesOffset(),t){if(S.length>0&&D){if(typeof e>"u"){const C=a.slidesGrid[E],G=a.slidesGrid[E+O]-C;l?a.setTranslate(a.translate-G):(a.slideTo(E+O,0,!1,!0),n&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-G,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-G))}else if(n){const C=T?S.length/g.grid.rows:S.length;a.slideTo(a.activeIndex+C,0,!1,!0),a.touchEventsData.currentTranslate=a.translate}}else if(y.length>0&&L)if(typeof e>"u"){const C=a.slidesGrid[E],G=a.slidesGrid[E-M]-C;l?a.setTranslate(a.translate-G):(a.slideTo(E-M,0,!1,!0),n&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-G,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-G))}else{const C=T?y.length/g.grid.rows:y.length;a.slideTo(a.activeIndex-C,0,!1,!0)}}if(a.allowSlidePrev=d,a.allowSlideNext=p,a.controller&&a.controller.control&&!o){const C={slideRealIndex:e,direction:s,setTranslate:n,activeSlideIndex:r,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach($=>{!$.destroyed&&$.params.loop&&$.loopFix({...C,slideTo:$.params.slidesPerView===g.slidesPerView?t:!1})}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix({...C,slideTo:a.controller.control.params.slidesPerView===g.slidesPerView?t:!1})}a.emit("loopFix")}function Tr(){const i=this,{params:e,slidesEl:t}=i;if(!e.loop||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const s=[];i.slides.forEach(n=>{const r=typeof n.swiperSlideIndex>"u"?n.getAttribute("data-swiper-slide-index")*1:n.swiperSlideIndex;s[r]=n}),i.slides.forEach(n=>{n.removeAttribute("data-swiper-slide-index")}),s.forEach(n=>{t.append(n)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}var yr={loopCreate:Sr,loopFix:br,loopDestroy:Tr};function Er(i){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=i?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function Cr(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}var Pr={setGrabCursor:Er,unsetGrabCursor:Cr};function Mr(i,e){e===void 0&&(e=this);function t(s){if(!s||s===X()||s===Y())return null;s.assignedSlot&&(s=s.assignedSlot);const n=s.closest(i);return!n&&!s.getRootNode?null:n||t(s.getRootNode().host)}return t(e)}function Xe(i,e,t){const s=Y(),{params:n}=i,r=n.edgeSwipeDetection,o=n.edgeSwipeThreshold;return r&&(t<=o||t>=s.innerWidth-o)?r==="prevent"?(e.preventDefault(),!0):!1:!0}function Ir(i){const e=this,t=X();let s=i;s.originalEvent&&(s=s.originalEvent);const n=e.touchEventsData;if(s.type==="pointerdown"){if(n.pointerId!==null&&n.pointerId!==s.pointerId)return;n.pointerId=s.pointerId}else s.type==="touchstart"&&s.targetTouches.length===1&&(n.touchId=s.targetTouches[0].identifier);if(s.type==="touchstart"){Xe(e,s,s.targetTouches[0].pageX);return}const{params:r,touches:o,enabled:l}=e;if(!l||!r.simulateTouch&&s.pointerType==="mouse"||e.animating&&r.preventInteractionOnTransition)return;!e.animating&&r.cssMode&&r.loop&&e.loopFix();let a=s.target;if(r.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(a)||"which"in s&&s.which===3||"button"in s&&s.button>0||n.isTouched&&n.isMoved)return;const c=!!r.noSwipingClass&&r.noSwipingClass!=="",d=s.composedPath?s.composedPath():s.path;c&&s.target&&s.target.shadowRoot&&d&&(a=d[0]);const p=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,h=!!(s.target&&s.target.shadowRoot);if(r.noSwiping&&(h?Mr(p,a):a.closest(p))){e.allowClick=!0;return}if(r.swipeHandler&&!a.closest(r.swipeHandler))return;o.currentX=s.pageX,o.currentY=s.pageY;const g=o.currentX,m=o.currentY;if(!Xe(e,s,g))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=m,n.touchStartTime=me(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,r.threshold>0&&(n.allowThresholdMove=!1);let v=!0;a.matches(n.focusableElements)&&(v=!1,a.nodeName==="SELECT"&&(n.isTouched=!1)),t.activeElement&&t.activeElement.matches(n.focusableElements)&&t.activeElement!==a&&t.activeElement.blur();const x=v&&e.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||x)&&!a.isContentEditable&&s.preventDefault(),r.freeMode&&r.freeMode.enabled&&e.freeMode&&e.animating&&!r.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",s)}function jr(i){const e=X(),t=this,s=t.touchEventsData,{params:n,touches:r,rtlTranslate:o,enabled:l}=t;if(!l||!n.simulateTouch&&i.pointerType==="mouse")return;let a=i;if(a.originalEvent&&(a=a.originalEvent),a.type==="pointermove"&&(s.touchId!==null||a.pointerId!==s.pointerId))return;let c;if(a.type==="touchmove"){if(c=[...a.changedTouches].filter(L=>L.identifier===s.touchId)[0],!c||c.identifier!==s.touchId)return}else c=a;if(!s.isTouched){s.startMoving&&s.isScrolling&&t.emit("touchMoveOpposite",a);return}const d=c.pageX,p=c.pageY;if(a.preventedByNestedSwiper){r.startX=d,r.startY=p;return}if(!t.allowTouchMove){a.target.matches(s.focusableElements)||(t.allowClick=!1),s.isTouched&&(Object.assign(r,{startX:d,startY:p,currentX:d,currentY:p}),s.touchStartTime=me());return}if(n.touchReleaseOnEdges&&!n.loop){if(t.isVertical()){if(p<r.startY&&t.translate<=t.maxTranslate()||p>r.startY&&t.translate>=t.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else if(d<r.startX&&t.translate<=t.maxTranslate()||d>r.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&a.target===e.activeElement&&a.target.matches(s.focusableElements)){s.isMoved=!0,t.allowClick=!1;return}s.allowTouchCallbacks&&t.emit("touchMove",a),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=d,r.currentY=p;const h=r.currentX-r.startX,g=r.currentY-r.startY;if(t.params.threshold&&Math.sqrt(h**2+g**2)<t.params.threshold)return;if(typeof s.isScrolling>"u"){let L;t.isHorizontal()&&r.currentY===r.startY||t.isVertical()&&r.currentX===r.startX?s.isScrolling=!1:h*h+g*g>=25&&(L=Math.atan2(Math.abs(g),Math.abs(h))*180/Math.PI,s.isScrolling=t.isHorizontal()?L>n.touchAngle:90-L>n.touchAngle)}if(s.isScrolling&&t.emit("touchMoveOpposite",a),typeof s.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(s.startMoving=!0),s.isScrolling){s.isTouched=!1;return}if(!s.startMoving)return;t.allowClick=!1,!n.cssMode&&a.cancelable&&a.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&a.stopPropagation();let m=t.isHorizontal()?h:g,v=t.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;n.oneWayMovement&&(m=Math.abs(m)*(o?1:-1),v=Math.abs(v)*(o?1:-1)),r.diff=m,m*=n.touchRatio,o&&(m=-m,v=-v);const x=t.touchesDirection;t.swipeDirection=m>0?"prev":"next",t.touchesDirection=v>0?"prev":"next";const f=t.params.loop&&!n.cssMode,T=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!s.isMoved){if(f&&T&&t.loopFix({direction:t.swipeDirection}),s.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const L=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});t.wrapperEl.dispatchEvent(L)}s.allowMomentumBounce=!1,n.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",a)}let S;if(new Date().getTime(),s.isMoved&&s.allowThresholdMove&&x!==t.touchesDirection&&f&&T&&Math.abs(m)>=1){Object.assign(r,{startX:d,startY:p,currentX:d,currentY:p,startTranslate:s.currentTranslate}),s.loopSwapReset=!0,s.startTranslate=s.currentTranslate;return}t.emit("sliderMove",a),s.isMoved=!0,s.currentTranslate=m+s.startTranslate;let y=!0,E=n.resistanceRatio;if(n.touchReleaseOnEdges&&(E=0),m>0?(f&&T&&!S&&s.allowThresholdMove&&s.currentTranslate>(n.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>t.minTranslate()&&(y=!1,n.resistance&&(s.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+s.startTranslate+m)**E))):m<0&&(f&&T&&!S&&s.allowThresholdMove&&s.currentTranslate<(n.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]:t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(n.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(n.slidesPerView,10)))}),s.currentTranslate<t.maxTranslate()&&(y=!1,n.resistance&&(s.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-s.startTranslate-m)**E))),y&&(a.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(s.currentTranslate=s.startTranslate),n.threshold>0)if(Math.abs(m)>n.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,s.currentTranslate=s.startTranslate,r.diff=t.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{s.currentTranslate=s.startTranslate;return}!n.followFinger||n.cssMode||((n.freeMode&&n.freeMode.enabled&&t.freeMode||n.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),n.freeMode&&n.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(s.currentTranslate),t.setTranslate(s.currentTranslate))}function Lr(i){const e=this,t=e.touchEventsData;let s=i;s.originalEvent&&(s=s.originalEvent);let n;if(s.type==="touchend"||s.type==="touchcancel"){if(n=[...s.changedTouches].filter(E=>E.identifier===t.touchId)[0],!n||n.identifier!==t.touchId)return}else{if(t.touchId!==null||s.pointerId!==t.pointerId)return;n=s}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(s.type)&&!(["pointercancel","contextmenu"].includes(s.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:o,touches:l,rtlTranslate:a,slidesGrid:c,enabled:d}=e;if(!d||!o.simulateTouch&&s.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",s),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&o.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}o.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const p=me(),h=p-t.touchStartTime;if(e.allowClick){const E=s.path||s.composedPath&&s.composedPath();e.updateClickedSlide(E&&E[0]||s.target,E),e.emit("tap click",s),h<300&&p-t.lastClickTime<300&&e.emit("doubleTap doubleClick",s)}if(t.lastClickTime=me(),Ie(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||l.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let g;if(o.followFinger?g=a?e.translate:-e.translate:g=-t.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:g});return}const m=g>=-e.maxTranslate()&&!e.params.loop;let v=0,x=e.slidesSizesGrid[0];for(let E=0;E<c.length;E+=E<o.slidesPerGroupSkip?1:o.slidesPerGroup){const L=E<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[E+L]<"u"?(m||g>=c[E]&&g<c[E+L])&&(v=E,x=c[E+L]-c[E]):(m||g>=c[E])&&(v=E,x=c[c.length-1]-c[c.length-2])}let f=null,T=null;o.rewind&&(e.isBeginning?T=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(f=0));const S=(g-c[v])/x,y=v<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(h>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(S>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?f:v+y):e.slideTo(v)),e.swipeDirection==="prev"&&(S>1-o.longSwipesRatio?e.slideTo(v+y):T!==null&&S<0&&Math.abs(S)>o.longSwipesRatio?e.slideTo(T):e.slideTo(v))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(s.target===e.navigation.nextEl||s.target===e.navigation.prevEl)?s.target===e.navigation.nextEl?e.slideTo(v+y):e.slideTo(v):(e.swipeDirection==="next"&&e.slideTo(f!==null?f:v+y),e.swipeDirection==="prev"&&e.slideTo(T!==null?T:v))}}function Ue(){const i=this,{params:e,el:t}=i;if(t&&t.offsetWidth===0)return;e.breakpoints&&i.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:n,snapGrid:r}=i,o=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const l=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!l?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!o?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=n,i.allowSlideNext=s,i.params.watchOverflow&&r!==i.snapGrid&&i.checkOverflow()}function kr(i){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&i.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function Or(){const i=this,{wrapperEl:e,rtlTranslate:t,enabled:s}=i;if(!s)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-e.scrollLeft:i.translate=-e.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let n;const r=i.maxTranslate()-i.minTranslate();r===0?n=0:n=(i.translate-i.minTranslate())/r,n!==i.progress&&i.updateProgress(t?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function Ar(i){const e=this;pe(e,i.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function zr(){const i=this;i.documentTouchHandlerProceeded||(i.documentTouchHandlerProceeded=!0,i.params.touchReleaseOnEdges&&(i.el.style.touchAction="auto"))}const Tt=(i,e)=>{const t=X(),{params:s,el:n,wrapperEl:r,device:o}=i,l=!!s.nested,a=e==="on"?"addEventListener":"removeEventListener",c=e;t[a]("touchstart",i.onDocumentTouchStart,{passive:!1,capture:l}),n[a]("touchstart",i.onTouchStart,{passive:!1}),n[a]("pointerdown",i.onTouchStart,{passive:!1}),t[a]("touchmove",i.onTouchMove,{passive:!1,capture:l}),t[a]("pointermove",i.onTouchMove,{passive:!1,capture:l}),t[a]("touchend",i.onTouchEnd,{passive:!0}),t[a]("pointerup",i.onTouchEnd,{passive:!0}),t[a]("pointercancel",i.onTouchEnd,{passive:!0}),t[a]("touchcancel",i.onTouchEnd,{passive:!0}),t[a]("pointerout",i.onTouchEnd,{passive:!0}),t[a]("pointerleave",i.onTouchEnd,{passive:!0}),t[a]("contextmenu",i.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&n[a]("click",i.onClick,!0),s.cssMode&&r[a]("scroll",i.onScroll),s.updateOnWindowResize?i[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Ue,!0):i[c]("observerUpdate",Ue,!0),n[a]("load",i.onLoad,{capture:!0})};function $r(){const i=this,{params:e}=i;i.onTouchStart=Ir.bind(i),i.onTouchMove=jr.bind(i),i.onTouchEnd=Lr.bind(i),i.onDocumentTouchStart=zr.bind(i),e.cssMode&&(i.onScroll=Or.bind(i)),i.onClick=kr.bind(i),i.onLoad=Ar.bind(i),Tt(i,"on")}function Dr(){Tt(this,"off")}var Fr={attachEvents:$r,detachEvents:Dr};const Ze=(i,e)=>i.grid&&e.grid&&e.grid.rows>1;function _r(){const i=this,{realIndex:e,initialized:t,params:s,el:n}=i,r=s.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const o=i.getBreakpoint(r,i.params.breakpointsBase,i.el);if(!o||i.currentBreakpoint===o)return;const a=(o in r?r[o]:void 0)||i.originalParams,c=Ze(i,s),d=Ze(i,a),p=s.enabled;c&&!d?(n.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),i.emitContainerClasses()):!c&&d&&(n.classList.add(`${s.containerModifierClass}grid`),(a.grid.fill&&a.grid.fill==="column"||!a.grid.fill&&s.grid.fill==="column")&&n.classList.add(`${s.containerModifierClass}grid-column`),i.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(f=>{if(typeof a[f]>"u")return;const T=s[f]&&s[f].enabled,S=a[f]&&a[f].enabled;T&&!S&&i[f].disable(),!T&&S&&i[f].enable()});const h=a.direction&&a.direction!==s.direction,g=s.loop&&(a.slidesPerView!==s.slidesPerView||h),m=s.loop;h&&t&&i.changeDirection(),W(i.params,a);const v=i.params.enabled,x=i.params.loop;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),p&&!v?i.disable():!p&&v&&i.enable(),i.currentBreakpoint=o,i.emit("_beforeBreakpoint",a),t&&(g?(i.loopDestroy(),i.loopCreate(e),i.updateSlides()):!m&&x?(i.loopCreate(e),i.updateSlides()):m&&!x&&i.loopDestroy()),i.emit("breakpoint",a)}function Gr(i,e,t){if(e===void 0&&(e="window"),!i||e==="container"&&!t)return;let s=!1;const n=Y(),r=e==="window"?n.innerHeight:t.clientHeight,o=Object.keys(i).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const a=parseFloat(l.substr(1));return{value:r*a,point:l}}return{value:l,point:l}});o.sort((l,a)=>parseInt(l.value,10)-parseInt(a.value,10));for(let l=0;l<o.length;l+=1){const{point:a,value:c}=o[l];e==="window"?n.matchMedia(`(min-width: ${c}px)`).matches&&(s=a):c<=t.clientWidth&&(s=a)}return s||"max"}var Vr={setBreakpoint:_r,getBreakpoint:Gr};function Nr(i,e){const t=[];return i.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(n=>{s[n]&&t.push(e+n)}):typeof s=="string"&&t.push(e+s)}),t}function Rr(){const i=this,{classNames:e,params:t,rtl:s,el:n,device:r}=i,o=Nr(["initialized",t.direction,{"free-mode":i.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:s},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...o),n.classList.add(...e),i.emitContainerClasses()}function Br(){const i=this,{el:e,classNames:t}=i;e.classList.remove(...t),i.emitContainerClasses()}var Hr={addClasses:Rr,removeClasses:Br};function Wr(){const i=this,{isLocked:e,params:t}=i,{slidesOffsetBefore:s}=t;if(s){const n=i.slides.length-1,r=i.slidesGrid[n]+i.slidesSizesGrid[n]+s*2;i.isLocked=i.size>r}else i.isLocked=i.snapGrid.length===1;t.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),t.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),e&&e!==i.isLocked&&(i.isEnd=!1),e!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}var Yr={checkOverflow:Wr},Le={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function qr(i,e){return function(s){s===void 0&&(s={});const n=Object.keys(s)[0],r=s[n];if(typeof r!="object"||r===null){W(e,s);return}if(i[n]===!0&&(i[n]={enabled:!0}),n==="navigation"&&i[n]&&i[n].enabled&&!i[n].prevEl&&!i[n].nextEl&&(i[n].auto=!0),["pagination","scrollbar"].indexOf(n)>=0&&i[n]&&i[n].enabled&&!i[n].el&&(i[n].auto=!0),!(n in i&&"enabled"in r)){W(e,s);return}typeof i[n]=="object"&&!("enabled"in i[n])&&(i[n].enabled=!0),i[n]||(i[n]={enabled:!1}),W(e,s)}}const Ce={eventsEmitter:Hs,update:tr,translate:or,transition:ur,slide:xr,loop:yr,grabCursor:Pr,events:Fr,breakpoints:Vr,checkOverflow:Yr,classes:Hr},Pe={};let Ne=class Z{constructor(){let e,t;for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];n.length===1&&n[0].constructor&&Object.prototype.toString.call(n[0]).slice(8,-1)==="Object"?t=n[0]:[e,t]=n,t||(t={}),t=W({},t),e&&!t.el&&(t.el=e);const o=X();if(t.el&&typeof t.el=="string"&&o.querySelectorAll(t.el).length>1){const d=[];return o.querySelectorAll(t.el).forEach(p=>{const h=W({},t,{el:p});d.push(new Z(h))}),d}const l=this;l.__swiper__=!0,l.support=St(),l.device=Gs({userAgent:t.userAgent}),l.browser=Ns(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],t.modules&&Array.isArray(t.modules)&&l.modules.push(...t.modules);const a={};l.modules.forEach(d=>{d({params:t,swiper:l,extendParams:qr(t,a),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const c=W({},Le,a);return l.params=W({},c,Pe,t),l.originalParams=W({},l.params),l.passedParams=W({},t),l.params&&l.params.on&&Object.keys(l.params.on).forEach(d=>{l.on(d,l.params.on[d])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:s}=this,n=q(t,`.${s.slideClass}, swiper-slide`),r=Ye(n[0]);return Ye(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:s}=e;e.slides=q(t,`.${s.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const n=s.minTranslate(),o=(s.maxTranslate()-n)*e+n;s.translateTo(o,typeof t>"u"?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(s=>{const n=e.getSlideClasses(s);t.push({slideEl:s,classNames:n}),e.emit("_slideClass",s,n)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const s=this,{params:n,slides:r,slidesGrid:o,slidesSizesGrid:l,size:a,activeIndex:c}=s;let d=1;if(typeof n.slidesPerView=="number")return n.slidesPerView;if(n.centeredSlides){let p=r[c]?r[c].swiperSlideSize:0,h;for(let g=c+1;g<r.length;g+=1)r[g]&&!h&&(p+=r[g].swiperSlideSize,d+=1,p>a&&(h=!0));for(let g=c-1;g>=0;g-=1)r[g]&&!h&&(p+=r[g].swiperSlideSize,d+=1,p>a&&(h=!0))}else if(e==="current")for(let p=c+1;p<r.length;p+=1)(t?o[p]+l[p]-o[c]<a:o[p]-o[c]<a)&&(d+=1);else for(let p=c-1;p>=0;p-=1)o[c]-o[p]<a&&(d+=1);return d}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;s.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&pe(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function n(){const o=e.rtlTranslate?e.translate*-1:e.translate,l=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(l),e.updateActiveIndex(),e.updateSlidesClasses()}let r;if(s.freeMode&&s.freeMode.enabled&&!s.cssMode)n(),s.autoHeight&&e.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&e.isEnd&&!s.centeredSlides){const o=e.virtual&&s.virtual.enabled?e.virtual.slides:e.slides;r=e.slideTo(o.length-1,0,!1,!0)}else r=e.slideTo(e.activeIndex,0,!1,!0);r||n()}s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const s=this,n=s.params.direction;return e||(e=n==="horizontal"?"vertical":"horizontal"),e===n||e!=="horizontal"&&e!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${n}`),s.el.classList.add(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.forEach(r=>{e==="vertical"?r.style.width="":r.style.height=""}),s.emit("changeDirection"),t&&s.update()),s}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let s=e||t.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=t,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName==="SWIPER-CONTAINER"&&(t.isElement=!0);const n=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(n()):q(s,n())[0];return!o&&t.params.createElements&&(o=oe("div",t.params.wrapperClass),s.append(o),q(s,`.${t.params.slideClass}`).forEach(l=>{o.append(l)})),Object.assign(t,{el:s,wrapperEl:o,slidesEl:t.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:o,hostEl:t.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||Q(s,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||Q(s,"direction")==="rtl"),wrongRTL:Q(o,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const n=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach(r=>{r.complete?pe(t,r):r.addEventListener("load",o=>{pe(t,o.target)})}),je(t),t.initialized=!0,je(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const s=this,{params:n,el:r,wrapperEl:o,slides:l}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),n.loop&&s.loopDestroy(),t&&(s.removeClasses(),r.removeAttribute("style"),o.removeAttribute("style"),l&&l.length&&l.forEach(a=>{a.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),a.removeAttribute("style"),a.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(a=>{s.off(a)}),e!==!1&&(s.el.swiper=null,Es(s)),s.destroyed=!0),null}static extendDefaults(e){W(Pe,e)}static get extendedDefaults(){return Pe}static get defaults(){return Le}static installModule(e){Z.prototype.__modules__||(Z.prototype.__modules__=[]);const t=Z.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>Z.installModule(t)),Z):(Z.installModule(e),Z)}};Object.keys(Ce).forEach(i=>{Object.keys(Ce[i]).forEach(e=>{Ne.prototype[e]=Ce[i][e]})});Ne.use([Rs,Bs]);const yt=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function te(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"&&!i.__swiper__}function se(i,e){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(s=>t.indexOf(s)<0).forEach(s=>{typeof i[s]>"u"?i[s]=e[s]:te(e[s])&&te(i[s])&&Object.keys(e[s]).length>0?e[s].__swiper__?i[s]=e[s]:se(i[s],e[s]):i[s]=e[s]})}function Et(i){return i===void 0&&(i={}),i.navigation&&typeof i.navigation.nextEl>"u"&&typeof i.navigation.prevEl>"u"}function Ct(i){return i===void 0&&(i={}),i.pagination&&typeof i.pagination.el>"u"}function Pt(i){return i===void 0&&(i={}),i.scrollbar&&typeof i.scrollbar.el>"u"}function Mt(i){i===void 0&&(i="");const e=i.split(" ").map(s=>s.trim()).filter(s=>!!s),t=[];return e.forEach(s=>{t.indexOf(s)<0&&t.push(s)}),t.join(" ")}function Xr(i){return i===void 0&&(i=""),i?i.includes("swiper-wrapper")?i:`swiper-wrapper ${i}`:"swiper-wrapper"}function Ur(i){let{swiper:e,slides:t,passedParams:s,changedParams:n,nextEl:r,prevEl:o,scrollbarEl:l,paginationEl:a}=i;const c=n.filter(M=>M!=="children"&&M!=="direction"&&M!=="wrapperClass"),{params:d,pagination:p,navigation:h,scrollbar:g,virtual:m,thumbs:v}=e;let x,f,T,S,y,E,L,D;n.includes("thumbs")&&s.thumbs&&s.thumbs.swiper&&d.thumbs&&!d.thumbs.swiper&&(x=!0),n.includes("controller")&&s.controller&&s.controller.control&&d.controller&&!d.controller.control&&(f=!0),n.includes("pagination")&&s.pagination&&(s.pagination.el||a)&&(d.pagination||d.pagination===!1)&&p&&!p.el&&(T=!0),n.includes("scrollbar")&&s.scrollbar&&(s.scrollbar.el||l)&&(d.scrollbar||d.scrollbar===!1)&&g&&!g.el&&(S=!0),n.includes("navigation")&&s.navigation&&(s.navigation.prevEl||o)&&(s.navigation.nextEl||r)&&(d.navigation||d.navigation===!1)&&h&&!h.prevEl&&!h.nextEl&&(y=!0);const O=M=>{e[M]&&(e[M].destroy(),M==="navigation"?(e.isElement&&(e[M].prevEl.remove(),e[M].nextEl.remove()),d[M].prevEl=void 0,d[M].nextEl=void 0,e[M].prevEl=void 0,e[M].nextEl=void 0):(e.isElement&&e[M].el.remove(),d[M].el=void 0,e[M].el=void 0))};n.includes("loop")&&e.isElement&&(d.loop&&!s.loop?E=!0:!d.loop&&s.loop?L=!0:D=!0),c.forEach(M=>{if(te(d[M])&&te(s[M]))Object.assign(d[M],s[M]),(M==="navigation"||M==="pagination"||M==="scrollbar")&&"enabled"in s[M]&&!s[M].enabled&&O(M);else{const b=s[M];(b===!0||b===!1)&&(M==="navigation"||M==="pagination"||M==="scrollbar")?b===!1&&O(M):d[M]=s[M]}}),c.includes("controller")&&!f&&e.controller&&e.controller.control&&d.controller&&d.controller.control&&(e.controller.control=d.controller.control),n.includes("children")&&t&&m&&d.virtual.enabled?(m.slides=t,m.update(!0)):n.includes("virtual")&&m&&d.virtual.enabled&&(t&&(m.slides=t),m.update(!0)),n.includes("children")&&t&&d.loop&&(D=!0),x&&v.init()&&v.update(!0),f&&(e.controller.control=d.controller.control),T&&(e.isElement&&(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-pagination"),a.part.add("pagination"),e.el.appendChild(a)),a&&(d.pagination.el=a),p.init(),p.render(),p.update()),S&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-scrollbar"),l.part.add("scrollbar"),e.el.appendChild(l)),l&&(d.scrollbar.el=l),g.init(),g.updateSize(),g.setTranslate()),y&&(e.isElement&&((!r||typeof r=="string")&&(r=document.createElement("div"),r.classList.add("swiper-button-next"),r.innerHTML=e.hostEl.constructor.nextButtonSvg,r.part.add("button-next"),e.el.appendChild(r)),(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-button-prev"),o.innerHTML=e.hostEl.constructor.prevButtonSvg,o.part.add("button-prev"),e.el.appendChild(o))),r&&(d.navigation.nextEl=r),o&&(d.navigation.prevEl=o),h.init(),h.update()),n.includes("allowSlideNext")&&(e.allowSlideNext=s.allowSlideNext),n.includes("allowSlidePrev")&&(e.allowSlidePrev=s.allowSlidePrev),n.includes("direction")&&e.changeDirection(s.direction,!1),(E||D)&&e.loopDestroy(),(L||D)&&e.loopCreate(),e.update()}function Zr(i,e){i===void 0&&(i={}),e===void 0&&(e=!0);const t={on:{}},s={},n={};se(t,Le),t._emitClasses=!0,t.init=!1;const r={},o=yt.map(a=>a.replace(/_/,"")),l=Object.assign({},i);return Object.keys(l).forEach(a=>{typeof i[a]>"u"||(o.indexOf(a)>=0?te(i[a])?(t[a]={},n[a]={},se(t[a],i[a]),se(n[a],i[a])):(t[a]=i[a],n[a]=i[a]):a.search(/on[A-Z]/)===0&&typeof i[a]=="function"?e?s[`${a[2].toLowerCase()}${a.substr(3)}`]=i[a]:t.on[`${a[2].toLowerCase()}${a.substr(3)}`]=i[a]:r[a]=i[a])}),["navigation","pagination","scrollbar"].forEach(a=>{t[a]===!0&&(t[a]={}),t[a]===!1&&delete t[a]}),{params:t,passedParams:n,rest:r,events:s}}function Kr(i,e){let{el:t,nextEl:s,prevEl:n,paginationEl:r,scrollbarEl:o,swiper:l}=i;Et(e)&&s&&n&&(l.params.navigation.nextEl=s,l.originalParams.navigation.nextEl=s,l.params.navigation.prevEl=n,l.originalParams.navigation.prevEl=n),Ct(e)&&r&&(l.params.pagination.el=r,l.originalParams.pagination.el=r),Pt(e)&&o&&(l.params.scrollbar.el=o,l.originalParams.scrollbar.el=o),l.init(t)}function Jr(i,e,t,s,n){const r=[];if(!e)return r;const o=a=>{r.indexOf(a)<0&&r.push(a)};if(t&&s){const a=s.map(n),c=t.map(n);a.join("")!==c.join("")&&o("children"),s.length!==t.length&&o("children")}return yt.filter(a=>a[0]==="_").map(a=>a.replace(/_/,"")).forEach(a=>{if(a in i&&a in e)if(te(i[a])&&te(e[a])){const c=Object.keys(i[a]),d=Object.keys(e[a]);c.length!==d.length?o(a):(c.forEach(p=>{i[a][p]!==e[a][p]&&o(a)}),d.forEach(p=>{i[a][p]!==e[a][p]&&o(a)}))}else i[a]!==e[a]&&o(a)}),r}const Qr=i=>{!i||i.destroyed||!i.params.virtual||i.params.virtual&&!i.params.virtual.enabled||(i.updateSlides(),i.updateProgress(),i.updateSlidesClasses(),i.parallax&&i.params.parallax&&i.params.parallax.enabled&&i.parallax.setTranslate())};function ge(){return ge=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},ge.apply(this,arguments)}function It(i){return i.type&&i.type.displayName&&i.type.displayName.includes("SwiperSlide")}function jt(i){const e=[];return k.Children.toArray(i).forEach(t=>{It(t)?e.push(t):t.props&&t.props.children&&jt(t.props.children).forEach(s=>e.push(s))}),e}function en(i){const e=[],t={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return k.Children.toArray(i).forEach(s=>{if(It(s))e.push(s);else if(s.props&&s.props.slot&&t[s.props.slot])t[s.props.slot].push(s);else if(s.props&&s.props.children){const n=jt(s.props.children);n.length>0?n.forEach(r=>e.push(r)):t["container-end"].push(s)}else t["container-end"].push(s)}),{slides:e,slots:t}}function tn(i,e,t){if(!t)return null;const s=d=>{let p=d;return d<0?p=e.length+d:p>=e.length&&(p=p-e.length),p},n=i.isHorizontal()?{[i.rtlTranslate?"right":"left"]:`${t.offset}px`}:{top:`${t.offset}px`},{from:r,to:o}=t,l=i.params.loop?-e.length:0,a=i.params.loop?e.length*2:e.length,c=[];for(let d=l;d<a;d+=1)d>=r&&d<=o&&c.push(e[s(d)]);return c.map((d,p)=>k.cloneElement(d,{swiper:i,style:n,key:`slide-${p}`}))}function ne(i,e){return typeof window>"u"?N.useEffect(i,e):N.useLayoutEffect(i,e)}const Ke=N.createContext(null),sn=N.createContext(null),Re=N.forwardRef(function(i,e){let{className:t,tag:s="div",wrapperTag:n="div",children:r,onSwiper:o,...l}=i===void 0?{}:i,a=!1;const[c,d]=N.useState("swiper"),[p,h]=N.useState(null),[g,m]=N.useState(!1),v=N.useRef(!1),x=N.useRef(null),f=N.useRef(null),T=N.useRef(null),S=N.useRef(null),y=N.useRef(null),E=N.useRef(null),L=N.useRef(null),D=N.useRef(null),{params:O,passedParams:M,rest:b,events:P}=Zr(l),{slides:I,slots:C}=en(r),$=()=>{m(!g)};Object.assign(O.on,{_containerClasses(F,V){d(V)}});const G=()=>{Object.assign(O.on,P),a=!0;const F={...O};if(delete F.wrapperClass,f.current=new Ne(F),f.current.virtual&&f.current.params.virtual.enabled){f.current.virtual.slides=I;const V={cache:!1,slides:I,renderExternal:h,renderExternalUpdate:!1};se(f.current.params.virtual,V),se(f.current.originalParams.virtual,V)}};x.current||G(),f.current&&f.current.on("_beforeBreakpoint",$);const B=()=>{a||!P||!f.current||Object.keys(P).forEach(F=>{f.current.on(F,P[F])})},J=()=>{!P||!f.current||Object.keys(P).forEach(F=>{f.current.off(F,P[F])})};N.useEffect(()=>()=>{f.current&&f.current.off("_beforeBreakpoint",$)}),N.useEffect(()=>{!v.current&&f.current&&(f.current.emitSlidesClasses(),v.current=!0)}),ne(()=>{if(e&&(e.current=x.current),!!x.current)return f.current.destroyed&&G(),Kr({el:x.current,nextEl:y.current,prevEl:E.current,paginationEl:L.current,scrollbarEl:D.current,swiper:f.current},O),o&&o(f.current),()=>{f.current&&!f.current.destroyed&&f.current.destroy(!0,!1)}},[]),ne(()=>{B();const F=Jr(M,T.current,I,S.current,V=>V.key);return T.current=M,S.current=I,F.length&&f.current&&!f.current.destroyed&&Ur({swiper:f.current,slides:I,passedParams:M,changedParams:F,nextEl:y.current,prevEl:E.current,scrollbarEl:D.current,paginationEl:L.current}),()=>{J()}}),ne(()=>{Qr(f.current)},[p]);function z(){return O.virtual?tn(f.current,I,p):I.map((F,V)=>k.cloneElement(F,{swiper:f.current,swiperSlideIndex:V}))}return k.createElement(s,ge({ref:x,className:Mt(`${c}${t?` ${t}`:""}`)},b),k.createElement(sn.Provider,{value:f.current},C["container-start"],k.createElement(n,{className:Xr(O.wrapperClass)},C["wrapper-start"],z(),C["wrapper-end"]),Et(O)&&k.createElement(k.Fragment,null,k.createElement("div",{ref:E,className:"swiper-button-prev"}),k.createElement("div",{ref:y,className:"swiper-button-next"})),Pt(O)&&k.createElement("div",{ref:D,className:"swiper-scrollbar"}),Ct(O)&&k.createElement("div",{ref:L,className:"swiper-pagination"}),C["container-end"]))});Re.displayName="Swiper";const ae=N.forwardRef(function(i,e){let{tag:t="div",children:s,className:n="",swiper:r,zoom:o,lazy:l,virtualIndex:a,swiperSlideIndex:c,...d}=i===void 0?{}:i;const p=N.useRef(null),[h,g]=N.useState("swiper-slide"),[m,v]=N.useState(!1);function x(y,E,L){E===p.current&&g(L)}ne(()=>{if(typeof c<"u"&&(p.current.swiperSlideIndex=c),e&&(e.current=p.current),!(!p.current||!r)){if(r.destroyed){h!=="swiper-slide"&&g("swiper-slide");return}return r.on("_slideClass",x),()=>{r&&r.off("_slideClass",x)}}}),ne(()=>{r&&p.current&&!r.destroyed&&g(r.getSlideClasses(p.current))},[r]);const f={isActive:h.indexOf("swiper-slide-active")>=0,isVisible:h.indexOf("swiper-slide-visible")>=0,isPrev:h.indexOf("swiper-slide-prev")>=0,isNext:h.indexOf("swiper-slide-next")>=0},T=()=>typeof s=="function"?s(f):s,S=()=>{v(!0)};return k.createElement(t,ge({ref:p,className:Mt(`${h}${n?` ${n}`:""}`),"data-swiper-slide-index":a,onLoad:S},d),o&&k.createElement(Ke.Provider,{value:f},k.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof o=="number"?o:void 0},T(),l&&!m&&k.createElement("div",{className:"swiper-lazy-preloader"}))),!o&&k.createElement(Ke.Provider,{value:f},T(),l&&!m&&k.createElement("div",{className:"swiper-lazy-preloader"})))});ae.displayName="SwiperSlide";const rn=w.div`
  width: 16.4285rem;
  margin: auto;
`;class nn extends k.Component{constructor(e){super(e),this.state={}}render(){return u.jsx(rn,{children:u.jsxs(Re,{modules:[xt,Ds,Os],autoplay:!0,effect:"fade",lazy:"true",loop:!0,fadeEffect:{crossFade:!0},children:[u.jsx(ae,{children:u.jsx(ft,{})}),u.jsx(ae,{children:u.jsx(mt,{})}),u.jsx(ae,{children:u.jsx(ht,{})})]})})}}const an=w.section`
  ${ut}

  padding-top: 7.5rem;
  background-position: center -27rem;

  @media (max-width: ${j.medium}) {
    padding-top: 4rem;
    background-image: none;
    background-color: rgba(202, 222, 223, 0.2);
  }
`,on=w.div`
  margin: 2rem 2.5rem 2rem;

  @media (max-width: ${j.medium}) {
    margin: 1.7142rem 0 2rem;
  }
`,ln=w.div`
  position: relative;
  padding-top: 58.8235%;
  background-image: url(${as});
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: ${j.medium}) {
    padding-top: 160%;
    background-image: url(${os});
  }
`,dn=w.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,cn=w.div`
`,un=w.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${j.medium}) {
    margin-top: 4rem;
  }
`,pn=w(fe)`
  min-width: 20.625rem;

  @media (max-width: ${j.medium}) {
    min-width: 19.214rem;
  }
`;class Lt extends k.Component{constructor(t){super(t);_(this,"gotoFinder",()=>{const t="https://ltcpap.mohw.gov.tw/public/index.html";window.open(t,"_blank")});_(this,"rednerCards",()=>{const{system:t}=this.props;return K.get(t,"isMobile",!1)?u.jsx(nn,{}):u.jsx(bs,{})});this.state={}}render(){return u.jsxs(an,{id:"LongTermCareMap",children:[u.jsx(ve,{title:"長照地圖",slogan:"厝邊好朋友",subHeading:"LTCS MAP"}),u.jsx(on,{children:u.jsx(ln,{children:u.jsx(dn,{children:u.jsxs(cn,{children:[this.rednerCards(),u.jsx(un,{children:u.jsx(pn,{title:"尋找附近的長照服務",onClick:this.gotoFinder})})]})})})})]})}}_(Lt,"propTypes",{system:R.object});const fn=i=>({system:i.system}),mn=zt(fn,null,null,{forwardRef:!0})(Lt),hn="data:image/svg+xml,%3csvg%20width='67'%20height='64'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.5%2040.5h58l-22.704-18'%20stroke='%23fff'%20stroke-width='4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3cpath%20d='M2.5%2040.5h8'%20stroke='%23EC6C00'%20stroke-width='4'%20stroke-miterlimit='10'%20stroke-linecap='round'/%3e%3c/svg%3e",gn="data:image/svg+xml,%3csvg%20width='215'%20height='21'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M215%201H71.404L83%2018%2040.864%201.72H0'%20stroke='%23CADEDF'%20stroke-width='2'/%3e%3c/svg%3e",vn="/assets/slide1-RbKF25NN.jpg",wn="/assets/slide2-ZECCq0Uw.jpg",xn="/assets/slide3-4GkLR3YG.jpg",Sn=[{id:"slide-1",title:`面對照顧壓力大？張曼娟：
記得提醒自己，這一切都會過去的`,subtitle:"各位照顧者又要展開新的一年，每天闖關又常感到孤單的日子。",source:vn,url:"https://www.cw.com.tw/article/5125049"},{id:"slide-2",title:`小六生可能已是照顧者
日本小學生與失智者共開店`,subtitle:"當我們擔心學童與失智者接觸的安危，日本小學已納入課程...",source:wn,url:"https://www.cw.com.tw/article/5124631"},{id:"slide-3",title:`不想活得又老又窮
避開50歲最後悔的5個財務決定`,subtitle:"「早知道會活那麼久，當初就……」",source:xn,url:"https://www.cw.com.tw/article/5123858"}],bn=w.div`
  display: flex;
  align-items: center;
`,kt=w.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;

  &:not(:first-child) {
    margin-left: 12px;
  }
`,Tn=w(kt)`
  background-color: #EC6C00;
`,yn=w(kt)`
  border: 1px solid #CADEDF;
`;var Me;let En=(Me=class extends k.Component{constructor(t){super(t);_(this,"renderDot",(t,s)=>{const{current:n}=this.props,o=s===n?Tn:yn;return u.jsx(o,{},`pagination-${t.id}`)});this.state={}}render(){const{className:t,dataset:s}=this.props;return u.jsx(bn,{className:t,children:s.map(this.renderDot)})}},_(Me,"propTypes",{current:R.number,dataset:R.array,className:R.string}),Me);const Cn=w.div`
  padding-top: 64.321%;
  position: relative;
  cursor: pointer;
  pointer-events: ${i=>{const{status:e}=i;return e==="action"?"auto":"none"}};
`,Pn=w.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;class ke extends k.Component{constructor(t){super(t);_(this,"onClick",()=>{const{dataset:t}=this.props,s=K.get(t,"url");K.isEmpty(s)||window.open(s,"_blank")});_(this,"detectImageStyle",()=>{const{dataset:t}=this.props;return{backgroundImage:`url(${K.get(t,"source")})`}});_(this,"detectStatus",()=>{const{isCurrent:t}=this.props;return t?"action":"stay"});this.state={}}render(){const t=this.detectImageStyle(),s=this.detectStatus();return u.jsx(Cn,{status:s,onClick:this.onClick,children:u.jsx(Pn,{style:t})})}}_(ke,"propTypes",{dataset:R.object.isRequired,isCurrent:R.bool}),_(ke,"defaultProps",{isCurrent:!1});const Mn=w.div`
  margin-top: 2.125rem;
  margin-left: 2.5rem;
  position: relative;
  border-top-left-radius: 2rem;
  overflow: hidden;

  @media (max-width: ${j.medium}) {
    margin-top: 1.714rem;
    margin-left: 1.714rem;
    padding-bottom: 1.8rem;
  }

  .swiper-slide {
    width: 70%;

    @media (max-width: ${j.medium}) {
      width: 92%;
    }
  }
`,In=w.div`
  position: relative;
`,jn=w.div`
  height: 13.2rem;
  pointer-events: none;

  @media (min-width: ${j.medium}) {
    height: auto;
    margin-left: 12.857%;
    margin-bottom: 4.286%;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 11;
  }
`,Ln=w.div`
  color: #FFFFFF;
  white-space: pre-line;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: ${j.medium}) {
    color: #222222;
    text-shadow: none;
  }
`,kn=w.p`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.4;

  @media (max-width: ${j.medium}) {
    margin-top: 1rem;
    font-size: 1.428rem;
  }
`,On=w.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.1rem;
`,An=w.img`
  margin-top: 1.5rem;

  @media (max-width: ${j.medium}) {
    margin-top: 1rem;
  }
`,zn=w(En)`
  margin-top: 2.5rem;

  @media (max-width: ${j.medium}) {
    margin-top: 1.1428rem;
  }
`,$n=w.button`
  width: 4rem;
  padding: 0;
  position: absolute;
  top: 50%;
  right: calc(30% - 5rem);
  z-index: 12;
  border: 0;
  background: none;
  transform: translate(2.5rem, -50%);

  @media (max-width: ${j.medium}) {
    width: 2.2857rem;
    right: calc(8% + 1.2rem);
    transform: translate(0.6rem, -50%);
  }
`;class Dn extends k.Component{constructor(t){super(t);_(this,"isCurrent",t=>{const{swiper:s}=this,n=K.get(s,"realIndex",0);return t===n});_(this,"onSwiper",t=>{this.swiper=t});_(this,"onSlideChange",t=>{const s=K.get(t,"realIndex",0);this.setState({current:s})});_(this,"onSlideClick",t=>{K.isEmpty(t)||window.open(t,"_blank")});_(this,"onNextClick",()=>{const{swiper:t}=this;t.slideNext()});_(this,"renderSlide",(t,s)=>{const{id:n}=t,r=this.isCurrent(s);return u.jsx(ae,{children:u.jsx(ke,{dataset:t,isCurrent:r})},n)});_(this,"renderContent",()=>{const{current:t,dataset:s}=this.state,n=s[t],r=K.get(n,"title"),o=K.get(n,"subtitle");return u.jsxs(Ln,{children:[u.jsx(kn,{children:r}),u.jsx(On,{children:o}),u.jsx(An,{src:gn})]})});this.swiper=null,this.state={dataset:Sn,current:0}}render(){const{current:t,dataset:s}=this.state;return u.jsxs(Mn,{children:[u.jsxs(In,{children:[u.jsx(Re,{modules:[xt],autoplay:!0,lazy:"true",loop:!0,slidesPerView:"auto",onSwiper:this.onSwiper,onSlideChange:this.onSlideChange,children:s.map(this.renderSlide)}),u.jsx($n,{onClick:this.onNextClick,children:u.jsx("img",{src:hn})})]}),u.jsxs(jn,{children:[this.renderContent(),u.jsx(zn,{current:t,dataset:s})]})]})}}const Fn=w.section`
  padding-top: 7.5rem;

  @media (max-width: ${j.medium}) {
    padding-top: 4rem;
  }
`;class _n extends k.Component{constructor(e){super(e),this.state={}}render(){return u.jsxs(Fn,{id:"OnSiteCare",children:[u.jsx(ve,{title:"照顧現場",slogan:"預見安心變老",subHeading:"LTCS LIVE"}),u.jsx(Dn,{})]})}}const Gn="/assets/image-EQPRrIEr.png",Vn="data:image/svg+xml,%3csvg%20width='215'%20height='2'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='215'%20height='2'%20rx='1'%20fill='%23CADEDF'/%3e%3crect%20x='195'%20width='20'%20height='2'%20rx='1'%20fill='%23EC6C00'/%3e%3crect%20x='182'%20width='7'%20height='2'%20rx='1'%20fill='%23EC6C00'/%3e%3c/svg%3e",Nn=w(at)`
  padding: 7.5rem 2.5rem 1.75rem;
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media (max-width: ${j.medium}) {
    padding: 4rem 1.714rem;
  }
`,Rn=w.div`
  margin-right: 8.125rem;
  line-height: 1.4;
  flex-grow: 1;

  @media (max-width: ${j.medium}) {
    display: none;
  }
`,Bn=w.div`
  width: 26.875rem;
  margin: 3rem 0 0;
  padding-bottom: 5rem;
  position: relative;
  flex-shrink: 0;

  @media (max-width: ${j.medium}) {
    margin: 0;
    width: 100%;
    padding-bottom: 2.857rem;
  }
`,Hn=w.img`
  width: 25.375rem;
  max-width: 100%;
`,Wn=w.div`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.4;
  color: #008088;

  @media (max-width: ${j.medium}) {
    font-size: 1.714rem;
  }
`,Yn=w(ze)`
  position: absolute;
  top: -0.7rem;
  left: -2rem;
  font-weight: 300;
  transform: rotate(90deg);
  transform-origin: top left;

  @media (max-width: ${j.medium}) {
    margin-top: 1.1428rem;
    position: static;
    transform: unset;
  }
`,qn=w.div`
  margin-top: 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.9;
  letter-spacing: 0.1rem;

  @media (max-width: ${j.medium}) {
    margin-top: 1.1428rem;
  }
`,Xn=w.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;class Un extends k.Component{constructor(e){super(e),this.state={}}render(){return u.jsxs(Nn,{id:"Preface",children:[u.jsx(Rn,{"data-aos":"fade-right","data-aos-easing":"ease-in-out","data-aos-duration":"400",children:u.jsx(Hn,{src:Gn})}),u.jsxs(Bn,{"data-aos":"fade-left","data-aos-easing":"ease-in-out","data-aos-duration":"400",children:[u.jsxs(Wn,{children:[u.jsx("span",{children:"長照2.0，"}),u.jsx("br",{}),u.jsx("span",{children:"讓照顧的路上有專業相挺"})]}),u.jsx(Yn,{children:"LONG TERM CARE SERVICES"}),u.jsxs(qn,{children:[u.jsx("p",{children:"台灣走向超高齡社會，速度比想像中還要快又急，隨著人口老化加速，未來需要照顧年長父母的青壯人口，只會增加，不會減少。"}),u.jsx("p",{children:"老年人壽命的延長，也表示照顧的時間會愈來愈長；甚至是在自己退休之後，仍須持續照顧長輩。"}),u.jsx("p",{children:"「上有高堂，下有嗷嗷待哺」，三明治世代所面臨的困境，才是最需要協助的一群人。"}),u.jsx("br",{}),u.jsx("p",{children:"面對長照，經濟協助外，對「照顧者」提供專業協助更是關鍵！"})]}),u.jsx(Xn,{src:Vn})]})]})}}class Qn extends k.Component{constructor(e){super(e),this.state={}}render(){return u.jsxs(nt,{children:[u.jsx(xi,{}),u.jsx(Un,{}),u.jsx(_n,{}),u.jsx(ns,{}),u.jsx(mn,{})]})}}export{Qn as default};
