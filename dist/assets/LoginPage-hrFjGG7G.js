import{e as v,f as d,u as p,j as s,L as y,g as P,b as S,h as _,r as f,a as B,i as k,k as I,l as r,I as E,F as g,T as F,B as N,A as V,m as A,n as q,d as R,H as $}from"./index-DtHtMXPn.js";const H="_container_mwx7e_1",U="_form_mwx7e_16",Z="_heading_mwx7e_30",m={container:H,form:U,heading:Z},T={PL:{heading:"Zaloguj się na swój profil",email:"Adres e-mail",password:"Hasło",button:"Zaloguj się"},EN:{heading:"Log in to your profile",email:"E-mail address",password:"Password",button:"Login"}},G=v().shape({email:d().email("Invalid email format").required("Required field"),password:d().required("Required field")}),Y="_btn_trf37_1",z={btn:Y},D={PL:{text:"Zapomniałeś hasła?"},EN:{text:"Forgot password?"}};function J(){const{language:a}=p(),n=D[a];return s.jsx(y,{to:"/restore-password",className:z.btn,children:n.text})}function K(){const{language:a}=p(),n=T[a],{setIsLoading:t}=P(),{setIsLogin:h}=S(),{setShowConsent:x,resetConsent:w}=_(),[l,j]=f.useState(!1),b=B(),e=k({initialValues:{email:"",password:""},validationSchema:G,onSubmit:i=>{const{email:L,password:C}=i,c=I.get("CookieConsent");if(!c||c!=="true"){w(),x(!0),r.info("Please accept cookies before logging in.");return}(async()=>{try{t(!0),await A(L,C),console.log("Login successful!"),r.info("Login successful!"),h(!0),b("/")}catch(o){if(typeof o=="object"&&o!==null&&"response"in o&&typeof o.response=="object"&&o.response!==null&&"status"in o.response&&"data"in o.response){const u=o;u.response.status===401?r.error(u.response.data.message):r.error("An error occurred during login.")}}finally{t(!1)}})(),e.resetForm()}});return s.jsxs(E,{children:[s.jsxs("form",{className:m.form,onSubmit:e.handleSubmit,children:[s.jsx("h2",{className:m.heading,children:n.heading}),s.jsx(g,{error:{condition:!!(e.touched.email&&e.errors.email),message:String(e.errors.email)},label:n.email,id:"login-email",children:s.jsx("input",{type:"text",name:"email",id:"login-email",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.email})}),s.jsx(g,{label:n.password,id:"login-password",error:{condition:!!(e.touched.password&&e.errors.password),message:String(e.errors.password)},children:s.jsxs(s.Fragment,{children:[s.jsx("input",{type:l?"text":"password",name:"password",id:"login-password",onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.password}),s.jsx(F,{password:e.values.password,isVisible:l,toggleVisibility:()=>j(i=>!i)})]})}),s.jsx(J,{}),s.jsx(N,{type:"submit",content:n.button,onClick:()=>{}})]}),s.jsx(V,{type:"register"})]})}function M(){return s.jsx(q,{children:s.jsx(K,{})})}function W(){const a=R();return f.useEffect(()=>{const t=new URLSearchParams(a.search).get("verified");t==="true"?r.info("Your account has been successfully verified. Please log in."):t==="false"&&r.error("Account verification failed. Please try again or contact support.")},[a]),s.jsxs("div",{children:[s.jsx($,{children:s.jsx("title",{children:"Login"})}),s.jsx(M,{})]})}export{W as default};