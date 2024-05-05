"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[5628],{4096:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>j,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var s=r(5893),t=r(1151);const c={},l="\u041e\u0431\u044a\u0435\u043a\u0442\u044b \u0432 JS",i={id:"js/object",title:"\u041e\u0431\u044a\u0435\u043a\u0442\u044b \u0432 JS",description:"\u041e\u0431\u044a\u0435\u043a\u0442 \u0432 JavaScript \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0435\u0439 \u043a\u0430\u043a \u043d\u0430\u0431\u043e\u0440 \u0441\u0432\u043e\u0439\u0441\u0442\u0432.",source:"@site/notes/js/object.md",sourceDirName:"js",slug:"/js/object",permalink:"/notes/js/object",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"JavaScript",permalink:"/notes/js/"},next:{title:"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u044b JavaScript",permalink:"/notes/js/standards"}},o={},a=[{value:"Data property",id:"data-property",level:3},{value:"Accessor property",id:"accessor-property",level:3},{value:"\u041a\u043b\u044e\u0447\u0438",id:"key",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"\u043f\u0440\u0438\u043c\u0435\u0440",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u043e\u0431\u044a\u0435\u043a\u0442\u044b-\u0432-js",children:"\u041e\u0431\u044a\u0435\u043a\u0442\u044b \u0432 JS"}),"\n",(0,s.jsxs)(n.p,{children:["\u041e\u0431\u044a\u0435\u043a\u0442 \u0432 JavaScript \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f ",(0,s.jsx)(n.a,{href:"https://262.ecma-international.org/#sec-object-type",children:"\u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0435\u0439"})," \u043a\u0430\u043a \u043d\u0430\u0431\u043e\u0440 ",(0,s.jsx)(n.strong,{children:"\u0441\u0432\u043e\u0439\u0441\u0442\u0432"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"\u041a\u0430\u0436\u0434\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u043e\u0434\u043d\u043e\u043c\u0443 \u0438\u0437 \u0434\u0432\u0443\u0445 \u0442\u0438\u043f\u043e\u0432:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"data property"})," (\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0434\u0430\u043d\u043d\u044b\u0445)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"accessor property"})," (\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430)"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"data-property",children:"Data property"}),"\n",(0,s.jsx)(n.p,{children:"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u0432\u044f\u0437\u044b\u0432\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0430 \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u0438 \u043d\u0430\u0431\u043e\u0440\u043e\u043c \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0445\n\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"value"})," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 (",(0,s.jsx)(n.em,{children:"ECMAScript value"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"writable"})," \u2014 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0442\u0440\u0438\u0431\u0443\u0442, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e false; \u0435\u0441\u043b\u0438 false, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\n\u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"enumerable"}),' \u2014 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0442\u0440\u0438\u0431\u0443\u0442, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e false; \u0435\u0441\u043b\u0438 true,\n\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u043c\u043e\u0436\u0435\u0442 \u0443\u0447\u0430\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0432 \u0438\u0442\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u043e\u043c "for-in"']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"configurable"})," \u2014 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0442\u0440\u0438\u0431\u0443\u0442, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e false; \u0435\u0441\u043b\u0438 false, \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e\n\u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u0434\u0430\u043b\u0435\u043d\u043e, \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0435\u0433\u043e \u0442\u0438\u043f (data \u0438 accessor), \u043d\u0435\u043b\u044c\u0437\u044f\n\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0438\u043a\u0430\u043a\u0438\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b, \u043a\u0440\u043e\u043c\u0435 ",(0,s.jsx)(n.code,{children:"value"})," \u0438 \u0432\u044b\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f ",(0,s.jsx)(n.code,{children:"writable"})," \u0432 false"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"accessor-property",children:"Accessor property"}),"\n",(0,s.jsxs)(n.p,{children:["\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0441\u0432\u044f\u0437\u044b\u0432\u0430\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0430 \u0441 \u043e\u0434\u043d\u043e\u0439 \u0438\u043b\u0438 \u0434\u0432\u0443\u043c\u044f ",(0,s.jsx)(n.em,{children:"\u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0430"}),"\n\u0438 \u043d\u0430\u0431\u043e\u0440\u043e\u043c \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"get"})," \u2014 \u0444\u0443\u043d\u043a\u0446\u0438\u044f, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0430\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0430"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"set"})," \u2014 \u0444\u0443\u043d\u043a\u0446\u0438\u044f, \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c\u0430\u044f \u043f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u043f\u0440\u0438\u0441\u0432\u043e\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0443"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"enumerable"})," \u2014 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e data property"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"configurable"})," \u2014 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e data property"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"key",children:"\u041a\u043b\u044e\u0447\u0438"}),"\n",(0,s.jsx)(n.p,{children:"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043b\u044e\u0447\u0435\u0439. \u041a\u043b\u044e\u0447\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u0430\n\u043a \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430\u043c \u0438 \u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u041a\u043b\u044e\u0447 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"})," (property key) \u2014 ",(0,s.jsx)(n.code,{children:"String"})," \u0438\u043b\u0438 ",(0,s.jsx)(n.code,{children:"Symbol"}),".",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:"\u0418\u043c\u044f \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430"})," (property name) \u2014 \u043a\u043b\u044e\u0447, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u0426\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441"})," \u2014 \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0439 \u043a\u043b\u044e\u0447 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f\n\u043a\u0430\u043d\u043e\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u043e\u0439 \u0438 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043d\u0435\u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u043e.",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.strong,{children:"\u0418\u043d\u0434\u0435\u043a\u0441 \u043c\u0430\u0441\u0441\u0438\u0432\u0430"})," \u2014 \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441, \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f\n\u0432 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435 \u043e\u0442 0 \u0434\u043e 2",(0,s.jsx)("sup",{children:"32"})," - 1."]}),"\n",(0,s.jsx)(n.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440",children:"\u041f\u0440\u0438\u043c\u0435\u0440"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const point = {x: 0, y: 1};\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"{\n  x: {value: 0, writable: true, enumerable: true, configurable: true},\n  y: {value: 1, writable: true, enumerable: true, configurable: true},\n}\n"})})]})}function j(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>l});var s=r(7294);const t={},c=s.createContext(t);function l(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);