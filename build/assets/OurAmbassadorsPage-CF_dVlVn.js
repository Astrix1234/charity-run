import{u as t,j as s,H as c}from"./index-DtHtMXPn.js";import{H as l}from"./HandwrittenLine-CM5s2fHk.js";import{I as m}from"./ItemSquare-B2ikOgPz.js";import{T as d}from"./TrippleArrowDown-UkFQEsYT.js";import"./NumberCircle-DTa4WMKI.js";const h="_header_z9fw4_1",_="_heading_z9fw4_16",g="_heading__sub_z9fw4_29",p="_heading__main_z9fw4_39",u="_line_z9fw4_50",a={header:h,heading:_,heading__sub:g,heading__main:p,line:u},j={PL:{sub:"Poznaj ambasadorów",main:"HEMATOBIEGU"},EN:{sub:"Meet the ambassadors of",main:"HEMATORUN"}};function x(){const{language:o}=t(),e=j[o];return s.jsxs("div",{className:a.header,children:[s.jsxs("h2",{className:a.heading,children:[s.jsx("span",{className:a.heading__sub,children:e.sub}),s.jsx("span",{className:a.heading__main,children:e.main})]}),s.jsx("div",{className:a.line,children:s.jsx(l,{})})]})}const b="_list_10ic3_1",w={list:b};function f({list:o}){const{language:e}=t();return s.jsx("ul",{className:w.list,children:o.map((n,r)=>s.jsx(m,{contentType:{type:"image",src:n.photo,alt:`${n.name} photo`},heading:`/${n.name} 
${n.role[e==="PL"?"pl":"eng"]}`,pos:r+1},r))})}const N="_container_ekzs7_1",k="_heading_ekzs7_12",z="_arrow_ekzs7_28",i={container:N,heading:k,arrow:z},A=[{name:"Jan Kowalski",role:{pl:"Polski Sportowiec",eng:"Polish Athlete"},photo:"./images/ambassadors/ambassador-1.jpeg"},{name:"Jan Nowacki",role:{pl:"Polski Sportowiec",eng:"Polish Athlete"},photo:"./images/ambassadors/ambassador-2.jpeg"},{name:"Anna Nowak",role:{pl:"Lekarz",eng:"Doctor"},photo:"./images/ambassadors/ambassador-3.jpeg"},{name:"Grażyna Kowalska",role:{pl:"Lekarz",eng:"Doctor"},photo:"./images/ambassadors/ambassador-4.jpeg"}];function L(){return s.jsxs("section",{className:i.container,children:[s.jsxs("div",{className:i.heading,children:[s.jsx(x,{}),s.jsx("div",{className:i.arrow,children:s.jsx(d,{})})]}),s.jsx(f,{list:A})]})}function T(){return s.jsxs(s.Fragment,{children:[s.jsx(c,{children:s.jsx("title",{children:"Our Ambassadors"})}),s.jsx(L,{})]})}export{T as default};