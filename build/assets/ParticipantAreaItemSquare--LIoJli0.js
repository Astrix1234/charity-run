import{v as e,j as i}from"./index-DtHtMXPn.js";import{N as s,D as o}from"./NumberCircle-DTa4WMKI.js";const a=e.div`
  position: relative;
  border-radius: 1.8rem;
  background-color: var(--beige);
  padding: 3% 5%;
  aspect-ratio: 1/1;
  height: 100%;
  width: 100%;
  max-width: 474px;
  min-width: 380px;
  background-color: var(--beige);

  .circle {
    padding-bottom: 7%;
  }
  .dots {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    & svg {
      width: 100%;
      height: 100%;
    }
  }
`,n=({pos:t,children:r})=>i.jsxs(a,{children:[i.jsx("div",{className:"circle",children:i.jsx(s,{number:t})}),i.jsx("div",{className:"dots",children:i.jsx(o,{})}),r]});export{n as P};
