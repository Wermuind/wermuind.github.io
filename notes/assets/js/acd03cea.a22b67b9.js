"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[7941],{6833:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=r(5893),s=r(1151);const i={},l="\u041b\u0435\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u043d\u0430\u043b\u0438\u0437",o={id:"compiler/lexer/index",title:"\u041b\u0435\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u043d\u0430\u043b\u0438\u0437",description:"\u041d\u041a\u0410 \u2014 \u043d\u0435\u0434\u0435\u0442\u0435\u0440\u043c\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0439 \u0430\u0432\u0442\u043e\u043c\u0430\u0442",source:"@site/notes/compiler/lexer/index.md",sourceDirName:"compiler/lexer",slug:"/compiler/lexer/",permalink:"/notes/compiler/lexer/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"\u041a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u044b",permalink:"/notes/compiler/"},next:{title:"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439",permalink:"/notes/compiler/lexer/regex-transform"}},c={},a=[{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0414\u041a\u0410 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f:",id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0434\u043a\u0430-\u043d\u0430-\u043e\u0441\u043d\u043e\u0432\u0435-\u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e-\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f",level:4},{value:"\u041f\u0440\u043e\u0446\u0435\u0441\u0441 \u0442\u043e\u043a\u0435\u043d\u0438\u0437\u0430\u0446\u0438\u0438",id:"\u043f\u0440\u043e\u0446\u0435\u0441\u0441-\u0442\u043e\u043a\u0435\u043d\u0438\u0437\u0430\u0446\u0438\u0438",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u043b\u0435\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439-\u0430\u043d\u0430\u043b\u0438\u0437",children:"\u041b\u0435\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u043d\u0430\u043b\u0438\u0437"}),"\n",(0,t.jsxs)(n.p,{children:["\u041d\u041a\u0410 \u2014 \u043d\u0435\u0434\u0435\u0442\u0435\u0440\u043c\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0439 \u0430\u0432\u0442\u043e\u043c\u0430\u0442",(0,t.jsx)("br",{}),"\n\u0414\u041a\u0410 \u2014 \u0434\u0435\u0442\u0435\u0440\u043c\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0439 \u0430\u0432\u0442\u043e\u043c\u0430\u0442"]}),"\n",(0,t.jsx)(n.p,{children:"\u0421\u043f\u043e\u0441\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043b\u0435\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440\u0430 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0432 \u041d\u041a\u0410, \u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u041d\u041a\u0410"}),"\n",(0,t.jsx)(n.li,{children:"\u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0432 \u041d\u041a\u0410, \u0437\u0430\u0442\u0435\u043c \u041d\u041a\u0410 \u0432 \u0414\u041a\u0410"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/notes/compiler/lexer/regex-to-dfa",children:"\u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e \u0432 \u0414\u041a\u0410"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u041a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u043c \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u0439 \u043a \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438\n\u0440\u0430\u0431\u043e\u0442\u044b \u0438\u043b\u0438 \u0437\u0430\u0442\u0440\u0430\u0442 \u043f\u043e \u043f\u0430\u043c\u044f\u0442\u0438. \u0414\u043b\u044f \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u043c\u0435\u0440\u043e\u0432 \u0414\u041a\u0410 \u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f\n\u043e\u0447\u0435\u043d\u044c \u0431\u043e\u043b\u044c\u0448\u043e\u0439, \u043d\u043e \u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u041d\u041a\u0410 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u0435\u0435."}),"\n",(0,t.jsx)(n.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-\u0434\u043a\u0430-\u043d\u0430-\u043e\u0441\u043d\u043e\u0432\u0435-\u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e-\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f",children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0414\u041a\u0410 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"BlockComment\n  : '/*' .*? '*/'\n  ;\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Comment regex DFA",src:r(5069).Z+""})}),"\n",(0,t.jsx)(n.h3,{id:"\u043f\u0440\u043e\u0446\u0435\u0441\u0441-\u0442\u043e\u043a\u0435\u043d\u0438\u0437\u0430\u0446\u0438\u0438",children:"\u041f\u0440\u043e\u0446\u0435\u0441\u0441 \u0442\u043e\u043a\u0435\u043d\u0438\u0437\u0430\u0446\u0438\u0438"}),"\n",(0,t.jsx)(n.p,{children:"\u0414\u043b\u044f \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u0438, \u043f\u043e\u043c\u0438\u043c\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u043e\u0432 \u0414\u041a\u0410 \u0438 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f,\n\u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u0430 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u0440\u043e \u043a\u0430\u0436\u0434\u043e\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0449\u0435\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435.\n\u041a\u0430\u0436\u0434\u043e\u0435 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0449\u0435\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043a\u043e\u043c\u0443-\u043b\u0438\u0431\u043e \u0442\u0438\u043f\u0443 \u0442\u043e\u043a\u0435\u043d\u0430.\n\u041f\u0440\u0438 \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u0435 \u043a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442 \u043e\u0442\u0434\u0430\u0451\u0442\u0441\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u0443, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439\n\u0433\u0440\u0430\u043c\u043c\u0430\u0442\u0438\u043a\u0435 \u0431\u044b\u043b\u043e \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u043e \u043f\u0435\u0440\u0432\u044b\u043c."}),"\n",(0,t.jsx)(n.p,{children:"\u041b\u0435\u043a\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u043d\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440 \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u044b\u0442\u0430\u0435\u0442\u0441\u044f \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u043b\u0435\u043a\u0441\u0435\u043c\u0443 \u043d\u0430\u0438\u0431\u043e\u043b\u044c\u0448\u0435\u0439 \u0434\u043b\u0438\u043d\u044b.\n\u041f\u0440\u0438 \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0430\u0446\u0438\u0438 \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0439 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 \u0441\u0442\u0435\u043a\u0435. \u0414\u041a\u0410 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f, \u043f\u043e\u043a\u0430 \u043e\u043d\n\u043d\u0435 \u043f\u0435\u0440\u0435\u0439\u0434\u0451\u0442 \u0432 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043a\u0438. \u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0441\u0442\u0435\u043a \u043e\u0442\u043c\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0434\u043e \u0442\u0435\u0445 \u043f\u043e\u0440,\n\u043f\u043e\u043a\u0430 \u043d\u0435 \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u0442\u0441\u044f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0449\u0435\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435. \u0414\u043b\u0438\u043d\u0430 \u043b\u0435\u043a\u0441\u0435\u043c\u044b \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0432\u043d\u0430 \u0442\u0435\u043a\u0443\u0449\u0435\u043c\u0443\n\u0440\u0430\u0437\u043c\u0435\u0440\u0443 \u0441\u0442\u0435\u043a\u0430."})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5069:(e,n,r)=>{r.d(n,{Z:()=>t});const t=r.p+"assets/images/comment-regex-dfa-14388eb735f39b6964e8938f178ea264.svg"},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>l});var t=r(7294);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);