import{v as x,u as w,j as n,L as p,g as ie,s as $,w as De,x as Me,y as oe,z as Oe,C as Te,R as f,r as u,D as Be,d as Fe,b as Ue,H as $e,E as He}from"./index-DtHtMXPn.js";import{T as Ke}from"./TrippleArrowDown-UkFQEsYT.js";import{H as Ze}from"./HandwrittenLine-CM5s2fHk.js";import{M as We}from"./MiniTripleOrangeWave-DQQre2Er.js";import{I as N}from"./IconFoot-_5IsIITQ.js";import{P as z}from"./ParticipantAreaItemSquare--LIoJli0.js";import"./NumberCircle-DTa4WMKI.js";const qe=x.div`
  background: url('images/cut-background.png') no-repeat;
  background-size: 100% 15%;

  .container {
    max-width: 1440px;
    padding-inline: 80px;
    margin-inline: auto;

    #heading {
      padding-top: 80px;
    }

    #participantMain,
    #my-data,
    #run-info,
    #before-run {
      padding-top: 150px;
    }

    a,
    .map {
      transition: color 400ms;
    }

    a:hover,
    .map:hover {
      color: var(--orange);
    }
  }
`,Ve=x.div`
  display: grid;
  justify-items: center;
  gap: 2rem;

  h1 {
    text-align: center;
    font-size: 5.625rem;
    font-weight: 800;
  }

  h2 {
    font-size: 4.1875rem;
    font-weight: 400;
    padding-bottom: 0;
  }
`,Ye={PL:{hematorun:"HEMATOBIEG",participantArea:"strefa uczestnika"},EN:{hematorun:"HEMATORUN",participantArea:"participant area"}},Ge=()=>{const{language:t}=w(),e=Ye[t];return n.jsxs(Ve,{as:"section",id:"heading",children:[n.jsx("h1",{children:e.hematorun}),n.jsxs("div",{className:"participantArea",children:[n.jsx("h2",{children:e.participantArea}),n.jsx(Ze,{})]}),n.jsx(Ke,{})]})},Je=x.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
  position: relative;

  & > *,
  .image {
    min-width: 510px;
    max-width: 50%;
  }

  @media screen and (max-width: 1310px) {
    & > * {
      min-width: 80%;
      text-align: center;
    }
  }

  .photo {
    margin-bottom: 3rem;
    display: grid;
    place-content: center;
    text-align: right;
    gap: 1rem;
  }

  .imgContainer {
    width: 100%;
    height: 100%;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .addPhoto {
    display: flex;
    justify-content: right;
    align-items: center;
  }

  input[type='file'] {
    display: none;
  }

  label {
    transition: color 400ms;
  }

  label:hover {
    cursor: pointer;
    color: var(--orange);
  }
`,Qe={PL:{addPhoto:"Edytuj swoje zdjęcie",alt:"Zdjęcie profile"},EN:{addPhoto:"Edit your photo",alt:"Profile photo"}},Xe=x.div`
  width: calc(100% + 80px);
  background-color: #ceeaeb;
  border-radius: 2rem;
  text-align: right;
  position: relative;
  right: 0px;
  padding: 5rem;

  h1,
  h2 {
    padding-bottom: 5rem;
    font-weight: 500;
  }

  h1 {
    font-size: 3.125rem;
  }

  h2 {
    font-size: 2.4375rem;
  }

  p {
    padding-bottom: 2.5rem;
    font-size: 1.25rem;
    font-weight: 600;
  }
`,_e={PL:{myProfile:"/Mój profil",navigation:"/nawigacja",myData:"Moje dane",myResult:"Moje wyniki",timetable:"Rozkład jazdy",getReady:"Przygotuj się",logout:"Wyloguj"},EN:{myProfile:"/My profile",navigation:"/navigation",myData:"My data",myResult:"My results",timetable:"Timetable",getReady:"Get ready",logout:"Logout"}},et=()=>{const{language:t}=w(),e=_e[t];return n.jsxs(Xe,{children:[n.jsx("h1",{children:e.myProfile}),n.jsx("h2",{children:e.navigation}),n.jsx("p",{children:n.jsxs(p,{to:"/participant-area/#my-data",children:[e.myData," /01"]})}),n.jsx("p",{children:n.jsxs(p,{to:"/participant-area/#my-data",children:[e.myResult," /02"]})}),n.jsx("p",{children:n.jsxs(p,{to:"/participant-area/#run-info",children:[e.timetable," /03"]})}),n.jsx("p",{children:n.jsxs(p,{to:"/participant-area/#before-run",children:[e.getReady," /04"]})}),n.jsx("p",{children:n.jsxs(p,{to:"#",children:[e.logout," /05"]})})]})},tt=()=>n.jsx("svg",{width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M21.947 7.1018L17.7583 2.91212C17.619 2.77279 17.4536 2.66227 17.2716 2.58687C17.0896 2.51147 16.8945 2.47266 16.6975 2.47266C16.5005 2.47266 16.3054 2.51147 16.1234 2.58687C15.9414 2.66227 15.776 2.77279 15.6367 2.91212L4.07641 14.4734C3.93652 14.6121 3.82561 14.7774 3.75013 14.9594C3.67464 15.1414 3.6361 15.3366 3.63673 15.5337V19.7234C3.63673 20.1212 3.79476 20.5027 4.07607 20.784C4.35737 21.0653 4.7389 21.2234 5.13673 21.2234H9.32641C9.52347 21.224 9.71868 21.1854 9.90071 21.11C10.0827 21.0345 10.2479 20.9236 10.3867 20.7837L21.947 9.22337C22.0864 9.08407 22.1969 8.9187 22.2723 8.73669C22.3477 8.55468 22.3865 8.3596 22.3865 8.16259C22.3865 7.96557 22.3477 7.77049 22.2723 7.58848C22.1969 7.40647 22.0864 7.2411 21.947 7.1018ZM5.44704 15.2234L13.9174 6.75305L15.4811 8.31774L7.01173 16.7871L5.44704 15.2234ZM5.13673 17.0337L7.82641 19.7234H5.13673V17.0337ZM9.63673 19.4131L8.07204 17.8484L16.5424 9.37805L18.1061 10.9427L9.63673 19.4131Z",fill:"#2E2530"})}),nt=()=>{const{language:t}=w(),e=Qe[t],{setIsLoading:a}=ie(),{setUserData:r,userData:i}=$(),o=async s=>{if(s.target.files&&s.target.files[0])try{a(!0);const l=await Me(s.target.files[0]);if(l){console.log("Avatar uploaded:",l);const d=await oe();console.log("Response:",d),d&&r(d)}}catch(l){console.error("Error updating user avatar:",l)}finally{a(!1)}};return n.jsxs(Je,{as:"section",id:"participantMain",children:[n.jsxs("div",{className:"photo",children:[n.jsx("div",{className:"imgContainer",children:n.jsx("img",{className:"image",src:i!=null&&i.avatarURL?`${De}users/avatar/${i.avatarURL}`:"images/running_man.png",alt:e.alt})}),n.jsxs("div",{className:"addPhoto",children:[n.jsx(tt,{}),n.jsxs("div",{className:"upload",children:[n.jsx("label",{htmlFor:"file-upload",children:e.addPhoto}),n.jsx("input",{id:"file-upload",type:"file",onChange:o})]})]})]}),n.jsx(et,{})]})},at=x.div`
  padding-right: 2rem;
  overflow-wrap: break-word;

  p:nth-child(2n + 1) {
    color: black;
    padding-bottom: 1rem;
  }

  p:nth-child(2n) {
    font-weight: 800;
  }
`,rt={PL:{myData:"Moje dane:",nameSurname:"Imię i nazwisko:",phoneNumber:"Numer telefonu:",emailAddress:"Adres e-mail:",tShirt:"Rozmiar koszulki:"},EN:{myData:"My data:",nameSurname:"Name and surname:",phoneNumber:"Phone number:",emailAddress:"E-mail address:",tShirt:"T-shirt size:"}},se=Oe(t=>({participantUserData:null,setParticipantUserData:e=>t(()=>({participantUserData:e}))})),it=()=>{const{language:t}=w(),e=rt[t],{userData:a}=$(),{participantUserData:r}=se();return n.jsxs(at,{children:[n.jsx("h1",{children:e.myData}),n.jsxs("div",{children:[n.jsxs("div",{children:[n.jsxs("p",{children:["01/ ",e.nameSurname]}),a&&n.jsxs("p",{children:[a.name," ",a.surname]})]}),n.jsxs("div",{children:[n.jsxs("p",{children:["02/ ",e.emailAddress]}),a&&n.jsx("p",{children:a.email})]}),n.jsxs("div",{children:[n.jsxs("p",{children:["03/ ",e.phoneNumber]}),r&&r.length>0&&n.jsx("p",{children:r[0].phone})]}),n.jsxs("div",{children:[n.jsxs("p",{children:["04/ ",e.tShirt]}),r&&r.length>0&&n.jsx("p",{children:r[0].shirt})]}),n.jsx(p,{to:"/new-password",children:"edit password"})]})]})},ot=x.div`
  border-left: 2px solid black;
  text-align: right;
  padding-left: 2rem;

  @media screen and (max-width: 1310px) {
    border-top: 2px solid black;
    border-left: 0;
    padding-top: 4rem;
    text-align: center;
  }

  h2,
  h3 {
    font-weight: 500;
    padding-bottom: 2.5rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.75rem;
  }
`,st={PL:{myResults:"Moje wyniki:",edition:"Edycja 1",hematorun:"Hematobieg",city:"Łódź",result:"Mój wynik: dostępny po biegu"},EN:{myResults:"My results:",edition:"Edition 1",hematorun:"Hematorun",city:"Lodz",result:"My result: available after run"}},lt=()=>{const{language:t}=w(),e=st[t];return n.jsxs(ot,{children:[n.jsx("h1",{children:e.myResults}),n.jsxs("div",{children:[n.jsxs("h2",{children:["/ ",e.edition]}),n.jsxs("p",{children:[e.hematorun," ",n.jsx("br",{}),e.city,n.jsx("br",{}),"10.05.2024"]}),n.jsxs("h3",{children:["/ ",e.result]}),n.jsx(We,{})]})]})},ct=x.div`
  display: flex;

  & > * {
    min-width: 50%;
  }

  @media screen and (max-width: 1310px) {
    flex-wrap: wrap;
    gap: 4rem;
    text-align: center;
    justify-content: center;

    & > * {
      max-width: 80%;
    }
  }

  h1 {
    font-size: 3.125rem;
    font-weight: 500;
    margin-bottom: 5rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 600;
    padding-bottom: 2.5rem;
  }
`,dt=()=>n.jsxs(ct,{as:"section",id:"my-data",children:[n.jsx(it,{}),n.jsx(lt,{})]}),ut=x.div`
  margin-inline: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  position: relative;

  padding-bottom: 5rem;

  h1,
  p {
    position: relative;
    z-index: 1;
    font-weight: 600;
    padding-left: 3rem;
    padding-right: 2rem;
  }
  h1 {
    font-size: 2.5rem;
    padding-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    padding-bottom: 1rem;
  }

  a,
  .map {
    text-decoration-line: underline;
  }

  .map {
    max-width: 100%;
    cursor: pointer;
  }

  .modal {
    width: 100vw;
    min-height: 100%;
  }

  .foots {
    position: absolute;
    z-index: -4;
  }

  .foot0 {
    rotate: -90deg;
    left: -4%;
    top: 68%;
  }

  .foot1 {
    rotate: -100deg;
    left: 0;
    top: 60%;
  }

  .foot2 {
    rotate: -90deg;
    right: 2%;
    top: 18%;
  }

  .foot3 {
    rotate: -100deg;
    right: 0;
    top: 10%;
  }
`,mt={PL:{train:"/Weź udział w treningu",trainLinks:"Przydatne linki:",trainPlans:"Plany treningowe",trainStart:"Trening przed startem",diet:"/Zadbaj o zdrową dietę",dietLinks:"Przydatne linki:",dietEat:"Co zjeść przed biegiem",dietRunner:"Dieta biegacza",hydration:"/Pamiętaj o nawodnieniu",hydrationRun:"Bieganie a nawodnienie",hydrationAdvice:"Nie zapomnij zabrać ze sobą na bieg butelki wody :)",run:"/Zapoznaj się z trasą biegu",runRoute:"Kliknij tutaj i sprawdź trasę"},EN:{train:"Participate in training",trainLinks:"Useful links:",trainPlans:"Training plans",trainStart:"Training before the race",diet:"Take care of a healthy diet",dietLinks:"Useful links:",dietEat:"What to eat before running",dietRunner:"Runner's diet",hydration:"Remember to stay hydrated",hydrationRun:"Running and hydration",hydrationAdvice:"Don't forget to bring a water bottle with you for the run :)",run:"Familiarize yourself with the race route",runRoute:"Click here to check the route"}};var le={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function a(){for(var o="",s=0;s<arguments.length;s++){var l=arguments[s];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return a.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var s="";for(var l in o)e.call(o,l)&&o[l]&&(s=i(s,l));return s}function i(o,s){return s?o?o+" "+s:o+s:o}t.exports?(a.default=a,t.exports=a):window.classNames=a})()})(le);var ft=le.exports;const P=Te(ft);function pt(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}else return Array.from(t)}var H=!1;if(typeof window<"u"){var re={get passive(){H=!0}};window.addEventListener("testPassive",null,re),window.removeEventListener("testPassive",null,re)}var ce=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),y=[],D=!1,de=-1,S=void 0,k=void 0,ue=function(e){return y.some(function(a){return!!(a.options.allowTouchMove&&a.options.allowTouchMove(e))})},M=function(e){var a=e||window.event;return ue(a.target)||a.touches.length>1?!0:(a.preventDefault&&a.preventDefault(),!1)},ht=function(e){if(k===void 0){var a=!!e&&e.reserveScrollBarGap===!0,r=window.innerWidth-document.documentElement.clientWidth;a&&r>0&&(k=document.body.style.paddingRight,document.body.style.paddingRight=r+"px")}S===void 0&&(S=document.body.style.overflow,document.body.style.overflow="hidden")},vt=function(){k!==void 0&&(document.body.style.paddingRight=k,k=void 0),S!==void 0&&(document.body.style.overflow=S,S=void 0)},gt=function(e){return e?e.scrollHeight-e.scrollTop<=e.clientHeight:!1},yt=function(e,a){var r=e.targetTouches[0].clientY-de;return ue(e.target)?!1:a&&a.scrollTop===0&&r>0||gt(a)&&r<0?M(e):(e.stopPropagation(),!0)},xt=function(e,a){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!y.some(function(i){return i.targetElement===e})){var r={targetElement:e,options:a||{}};y=[].concat(pt(y),[r]),ce?(e.ontouchstart=function(i){i.targetTouches.length===1&&(de=i.targetTouches[0].clientY)},e.ontouchmove=function(i){i.targetTouches.length===1&&yt(i,e)},D||(document.addEventListener("touchmove",M,H?{passive:!1}:void 0),D=!0)):ht(a)}},bt=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}y=y.filter(function(a){return a.targetElement!==e}),ce?(e.ontouchstart=null,e.ontouchmove=null,D&&y.length===0&&(document.removeEventListener("touchmove",M,H?{passive:!1}:void 0),D=!1)):y.length||vt()};function jt(t=null){let[e,a]=f.useState(t);const{current:r}=f.useRef({current:e});return Object.defineProperty(r,"current",{get:()=>e,set:i=>{Object.is(e,i)||(e=i,a(i))}}),r}function wt(t,e={isStateful:!0}){const a=jt(null),r=u.useRef(null),i=e.isStateful?a:r;return f.useEffect(()=>{!t||(typeof t=="function"?t(i.current):t.current=i.current)}),i}function O(){return O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},O.apply(this,arguments)}var Et=function(e){var a=e.classes,r=e.classNames,i=e.styles,o=e.id,s=e.closeIcon,l=e.onClick;return f.createElement("button",{id:o,className:P(a.closeButton,r==null?void 0:r.closeButton),style:i==null?void 0:i.closeButton,onClick:l,"data-testid":"close-button"},s||f.createElement("svg",{className:r==null?void 0:r.closeIcon,style:i==null?void 0:i.closeIcon,width:28,height:28,viewBox:"0 0 36 36","data-testid":"close-icon"},f.createElement("path",{d:"M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"})))},I=typeof window<"u",me=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'];function At(t){return t.offsetParent===null||getComputedStyle(t).visibility==="hidden"}function Ct(t,e){for(var a=0;a<t.length;a++)if(t[a].checked&&t[a].form===e)return t[a]}function Pt(t){if(t.tagName!=="INPUT"||t.type!=="radio"||!t.name)return!0;var e=t.form||t.ownerDocument,a=e.querySelectorAll('input[type="radio"][name="'+t.name+'"]'),r=Ct(a,t.form);return r===t||r===void 0&&a[0]===t}function fe(t){for(var e=document.activeElement,a=t.querySelectorAll(me.join(",")),r=[],i=0;i<a.length;i++){var o=a[i];(e===o||!o.disabled&&kt(o)>-1&&!At(o)&&Pt(o))&&r.push(o)}return r}function St(t,e){if(!(!t||t.key!=="Tab")){if(!e||!e.contains)return process,!1;if(!e.contains(t.target))return!1;var a=fe(e),r=a[0],i=a[a.length-1];return t.shiftKey&&t.target===r?(i.focus(),t.preventDefault(),!0):!t.shiftKey&&t.target===i?(r.focus(),t.preventDefault(),!0):!1}}function kt(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?Rt(t)?0:t.tabIndex:e}function Rt(t){return t.getAttribute("contentEditable")}var Lt=function(e){var a=e.container,r=e.initialFocusRef,i=u.useRef();return u.useEffect(function(){var o=function(c){a!=null&&a.current&&St(c,a.current)};if(I&&document.addEventListener("keydown",o),I&&(a!=null&&a.current)){var s=function(){me.findIndex(function(c){var E;return(E=document.activeElement)==null?void 0:E.matches(c)})!==-1&&(i.current=document.activeElement)};if(r)s(),requestAnimationFrame(function(){var d;(d=r.current)==null||d.focus()});else{var l=fe(a.current);l[0]&&(s(),l[0].focus())}}return function(){if(I){var d;document.removeEventListener("keydown",o),(d=i.current)==null||d.focus()}}},[a,r]),null},j=[],U={add:function(e){j.push(e)},remove:function(e){j=j.filter(function(a){return a!==e})},isTopModal:function(e){return!!j.length&&j[j.length-1]===e}};function Nt(t,e){u.useEffect(function(){return e&&U.add(t),function(){U.remove(t)}},[e,t])}var zt=function(e,a,r,i,o){var s=u.useRef(null);u.useEffect(function(){return a&&e.current&&i&&(s.current=e.current,xt(e.current,{reserveScrollBarGap:o})),function(){s.current&&(bt(s.current),s.current=null)}},[a,r,e,i,o])},h={root:"react-responsive-modal-root",overlay:"react-responsive-modal-overlay",overlayAnimationIn:"react-responsive-modal-overlay-in",overlayAnimationOut:"react-responsive-modal-overlay-out",modalContainer:"react-responsive-modal-container",modalContainerCenter:"react-responsive-modal-containerCenter",modal:"react-responsive-modal-modal",modalAnimationIn:"react-responsive-modal-modal-in",modalAnimationOut:"react-responsive-modal-modal-out",closeButton:"react-responsive-modal-closeButton"},It=f.forwardRef(function(t,e){var a,r,i,o,s=t.open,l=t.center,d=t.blockScroll,c=d===void 0?!0:d,E=t.closeOnEsc,pe=E===void 0?!0:E,K=t.closeOnOverlayClick,he=K===void 0?!0:K,T=t.container,Z=t.showCloseIcon,ve=Z===void 0?!0:Z,ge=t.closeIconId,ye=t.closeIcon,W=t.focusTrapped,xe=W===void 0?!0:W,q=t.initialFocusRef,be=q===void 0?void 0:q,V=t.animationDuration,Y=V===void 0?300:V,m=t.classNames,v=t.styles,G=t.role,je=G===void 0?"dialog":G,we=t.ariaDescribedby,Ee=t.ariaLabelledby,Ae=t.containerId,Ce=t.modalId,B=t.onClose,J=t.onEscKeyDown,Q=t.onOverlayClick,X=t.onAnimationEnd,Pe=t.children,Se=t.reserveScrollBarGap,_=wt(e),R=u.useRef(null),b=u.useRef(null),g=u.useRef(null);g.current===null&&I&&(g.current=document.createElement("div"));var ee=u.useState(!1),A=ee[0],te=ee[1];Nt(R,s),zt(R,s,A,c,Se);var ke=function(){g.current&&!T&&!document.body.contains(g.current)&&document.body.appendChild(g.current),document.addEventListener("keydown",ne)},Re=function(){g.current&&!T&&document.body.contains(g.current)&&document.body.removeChild(g.current),document.removeEventListener("keydown",ne)},ne=function(L){L.keyCode!==27||!U.isTopModal(R)||(J==null||J(L),pe&&B())};u.useEffect(function(){return function(){A&&Re()}},[A]),u.useEffect(function(){s&&!A&&(te(!0),ke())},[s]);var Le=function(L){if(b.current===null&&(b.current=!0),!b.current){b.current=null;return}Q==null||Q(L),he&&B(),b.current=null},F=function(){b.current=!1},Ne=function(){s||te(!1),X==null||X()},ae=T||g.current,ze=s?(a=m==null?void 0:m.overlayAnimationIn)!=null?a:h.overlayAnimationIn:(r=m==null?void 0:m.overlayAnimationOut)!=null?r:h.overlayAnimationOut,Ie=s?(i=m==null?void 0:m.modalAnimationIn)!=null?i:h.modalAnimationIn:(o=m==null?void 0:m.modalAnimationOut)!=null?o:h.modalAnimationOut;return A&&ae?Be.createPortal(f.createElement("div",{className:P(h.root,m==null?void 0:m.root),style:v==null?void 0:v.root,"data-testid":"root"},f.createElement("div",{className:P(h.overlay,m==null?void 0:m.overlay),"data-testid":"overlay","aria-hidden":!0,style:O({animation:ze+" "+Y+"ms"},v==null?void 0:v.overlay)}),f.createElement("div",{ref:R,id:Ae,className:P(h.modalContainer,l&&h.modalContainerCenter,m==null?void 0:m.modalContainer),style:v==null?void 0:v.modalContainer,"data-testid":"modal-container",onClick:Le},f.createElement("div",{ref:_,className:P(h.modal,m==null?void 0:m.modal),style:O({animation:Ie+" "+Y+"ms"},v==null?void 0:v.modal),onMouseDown:F,onMouseUp:F,onClick:F,onAnimationEnd:Ne,id:Ce,role:je,"aria-modal":"true","aria-labelledby":Ee,"aria-describedby":we,"data-testid":"modal",tabIndex:-1},xe&&f.createElement(Lt,{container:_,initialFocusRef:be}),Pe,ve&&f.createElement(Et,{classes:h,classNames:m,styles:v,closeIcon:ye,onClick:B,id:ge})))),ae):null});const Dt=()=>{const{language:t}=w(),e=mt[t],[a,r]=u.useState(!1),i=()=>r(!0),o=()=>r(!1);return n.jsxs(ut,{as:"section",id:"before-run",children:[n.jsx(z,{pos:1,children:n.jsxs(n.Fragment,{children:[n.jsx("h1",{children:e.train}),n.jsx("p",{children:e.trainLinks}),n.jsx("p",{children:n.jsx(p,{target:"_blank",rel:"noopener",to:"https://bieganie.pl/plany-treningowe/",children:e.trainPlans})}),n.jsx("p",{children:n.jsx(p,{target:"_blank",rel:"noopener",to:"https://www.bing.com/videos/riverview/relatedvideo?q=trening+przed+biegiem&mid=A4EB706D1C9A1824C597A4EB706D1C9A1824C597&FORM=VIRE",children:e.trainStart})})]})}),n.jsx(z,{pos:2,children:n.jsxs(n.Fragment,{children:[n.jsx("h1",{children:e.diet}),n.jsx("p",{children:e.dietLinks}),n.jsx("p",{children:n.jsx(p,{target:"_blank",rel:"noopener",to:"https://dietetycy.org.pl/co-jesc-przed-biegiem/",children:e.dietEat})}),n.jsx("p",{children:n.jsx(p,{target:"_blank",rel:"noopener",to:"https://dietetykanienazarty.pl/b/dieta-biegacza-co-zjesc-przed-biegiem",children:e.dietRunner})})]})}),n.jsx(z,{pos:3,children:n.jsxs(n.Fragment,{children:[n.jsx("h1",{children:e.hydration}),n.jsx("p",{children:n.jsx(p,{target:"_blank",rel:"noopener",to:"https://world.nessi-sport.com/bieganie-a-nawodnienie-picie-przed-w-trakcie-i-po-treningu",children:e.hydrationRun})}),n.jsx("p",{children:e.hydrationAdvice})]})}),n.jsx(z,{pos:4,children:n.jsxs(n.Fragment,{children:[n.jsx("h1",{children:e.run}),n.jsx("p",{className:"map",onClick:i,children:e.runRoute}),n.jsx(It,{open:a,onClose:o,classNames:{modal:"customModal"},center:!0,children:n.jsx("img",{className:"modal",src:"/charity-run/images/hematoRunRoute.webp",about:"run route full size"})})]})}),n.jsx("div",{className:"foots foot0",children:n.jsx(N,{})}),n.jsx("div",{className:"foots foot1",children:n.jsx(N,{})}),n.jsx("div",{className:"foots foot2",children:n.jsx(N,{})}),n.jsx("div",{className:"foots foot3",children:n.jsx(N,{})})]})},Mt=()=>n.jsx(qe,{children:n.jsxs("div",{className:"container",children:[n.jsx(Ge,{}),n.jsx(nt,{}),n.jsx(dt,{}),n.jsx("div",{id:"run-info",children:n.jsx("img",{src:"images/timetable.png"})}),n.jsx(Dt,{})]})});function Kt(){const{hash:t}=Fe(),{setIsLoading:e}=ie(),{setIsLogin:a}=Ue(),{setUserData:r,userData:i}=$(),{setParticipantUserData:o}=se(),[s,l]=u.useState(!1);return u.useEffect(()=>{if(t){const d=t.replace("#",""),c=document.getElementById(d);c&&c.scrollIntoView({behavior:"smooth"})}},[t]),u.useEffect(()=>{(async()=>{try{e(!0);const c=await oe();console.log("Response:",c),c&&(a(!0),r(c))}catch(c){console.error("Error checking login:",c)}finally{e(!1)}})()},[]),u.useEffect(()=>{i&&!s&&(async()=>{try{e(!0);const c=await He();console.log("Response:",c),console.log("ok"),c&&(o(c),l(!0))}catch(c){console.error("Error checking participation:",c)}finally{e(!1)}})()},[i]),u.useEffect(()=>{console.log("Participant data:",i)},[i]),n.jsxs("div",{children:[n.jsx($e,{children:n.jsx("title",{children:"Participant Area"})}),n.jsx(Mt,{})]})}export{Kt as default};
