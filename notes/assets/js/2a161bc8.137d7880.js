"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[7467],{3616:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(5893),r=t(1151);const i={},l="TDD",c={id:"common/tdd",title:"TDD",description:"Test Driven Development \u2014 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u041f\u041e, \u043f\u0440\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u0439",source:"@site/notes/common/tdd.md",sourceDirName:"common",slug:"/common/tdd",permalink:"/notes/common/tdd",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"Semantic Versioning",permalink:"/notes/common/semver"},next:{title:"C++",permalink:"/notes/cpp/"}},o={},d=[{value:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0442\u0435\u0441\u0442\u043e\u0432",id:"test-writing-rules",level:2},{value:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430",id:"test-structure",level:4},{value:"\u041c\u0435\u0442\u043e\u0434\u0438\u0447\u043a\u0430 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438",id:"how-to-write-a-feature",level:2}];function h(n){const e={del:"del",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"tdd",children:"TDD"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)("dfn",{children:"Test Driven Development"})," \u2014 \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u041f\u041e, \u043f\u0440\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u0439\n\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u043f\u0438\u0448\u0443\u0442 \u0442\u0435\u0441\u0442\u044b ",(0,s.jsx)(e.strong,{children:"\u0434\u043e"})," \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0441\u0430\u043c\u043e\u0433\u043e \u043a\u043e\u0434\u0430."]}),"\n",(0,s.jsx)(e.p,{children:"\u0422\u0430\u043a\u043e\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u0438\u043b\u0438\u0439, \u043d\u043e \u0432 \u0434\u043e\u043b\u0433\u043e\u0441\u0440\u043e\u0447\u043d\u043e\u0439 \u043f\u0435\u0440\u0441\u043f\u0435\u043a\u0442\u0438\u0432\u0435\n\u043e\u043a\u0443\u043f\u0430\u0435\u0442\u0441\u044f \u0437\u0430 \u0441\u0447\u0435\u0442 \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043d\u0430 \u043e\u0442\u043b\u0430\u0434\u043a\u0443 \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443."}),"\n",(0,s.jsx)(e.p,{children:"\u041f\u0440\u043e\u0446\u0435\u0441\u0441 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043e\u0431\u044b\u0447\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u0442\u0440\u0451\u0445 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0445 \u0448\u0430\u0433\u043e\u0432:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u041d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u043d\u0435 \u043f\u0440\u043e\u0445\u043e\u0434\u044f\u0442."}),"\n",(0,s.jsx)(e.li,{children:"\u041d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0430\u0431\u043e\u0447\u0435\u0433\u043e \u043a\u043e\u0434\u0430, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0433\u043e \u0434\u043b\u044f \u043f\u0440\u043e\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0442\u0435\u0441\u0442\u043e\u0432."}),"\n",(0,s.jsx)(e.li,{children:"\u0420\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433 \u043a\u043e\u0434\u0430 \u0434\u043b\u044f \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u0435\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430."}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"test-writing-rules",children:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0442\u0435\u0441\u0442\u043e\u0432"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u041a\u0430\u0436\u0434\u044b\u0439 \u0442\u0435\u0441\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u0443 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c:\n\u044d\u0442\u043e \u043e\u0431\u043b\u0435\u0433\u0447\u0430\u0435\u0442 \u0438\u0437\u043e\u043b\u044f\u0446\u0438\u044e \u043e\u0448\u0438\u0431\u043e\u043a."}),"\n",(0,s.jsx)(e.li,{children:"\u0422\u0435\u0441\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u043e\u043a\u0440\u044b\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0435, \u0442\u0430\u043a \u0438 \u043d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u044b\u0435 \u0441\u043b\u0443\u0447\u0430\u0438; \u0442.\u0435. \u0434\u043e\u043b\u0436\u043d\u043e\n\u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0442\u044c\u0441\u044f \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u043a\u0430\u043a \u0434\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0445, \u0442\u0430\u043a \u0438 \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0445 \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n",(0,s.jsx)(e.li,{children:"\u0422\u0435\u0441\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u043c\u0438 \u0434\u0440\u0443\u0433 \u043e\u0442 \u0434\u0440\u0443\u0433\u0430, \u0447\u0442\u043e\u0431\u044b \u043e\u0434\u0438\u043d \u0442\u0435\u0441\u0442 \u043d\u0435 \u0432\u043b\u0438\u044f\u043b\n\u043d\u0430 \u0434\u0440\u0443\u0433\u043e\u0439."}),"\n",(0,s.jsx)(e.li,{children:"\u0422\u0435\u0441\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0438\u0437\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438: \u043e\u043d\u0438 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 \u0432\u043d\u0435\u0448\u043d\u0438\u0445 \u0441\u0438\u0441\u0442\u0435\u043c\n\u0438\u043b\u0438 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f."}),"\n",(0,s.jsx)(e.li,{children:"\u0422\u0435\u0441\u0442\u044b \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u043e\u0432\u043e\u0446\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u0432\u044b\u0437\u043e\u0432\u044b API, \u0432\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e\n\u0434\u043b\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0438 (stubs) \u0438 \u043c\u043e\u043a\u0438 (mocks)."}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"test-structure",children:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430"}),"\n",(0,s.jsx)(e.p,{children:'\u0422\u0435\u0441\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 "AAA":'}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Arrange"}),": \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u043b\u043e\u0432\u0438\u0439"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Act"}),": \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u043c\u043e\u0433\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Assert"}),": \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043e\u0436\u0438\u0434\u0430\u0435\u043c\u043e\u0433\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"how-to-write-a-feature",children:"\u041c\u0435\u0442\u043e\u0434\u0438\u0447\u043a\u0430 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u0423\u0442\u043e\u0447\u043d\u0438\u0442\u044c \u0422\u0417 ",(0,s.jsx)(e.del,{children:"\u043d\u0435\u0447\u0451\u0442\u043a\u0438\u0439 \u0422\u0417 \u2014 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0425\u0417"}),"."]}),"\n",(0,s.jsx)(e.li,{children:"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0442\u0435\u0441\u0442\u044b \u0434\u043b\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438."}),"\n",(0,s.jsxs)(e.li,{children:["\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0442\u0435\u0441\u0442\u044b \u043d\u0430 \u043e\u0445\u0432\u0430\u0442 ",(0,s.jsx)(e.strong,{children:"\u0432\u0441\u0435\u0445"})," \u0441\u043b\u0443\u0447\u0430\u0435\u0432."]}),"\n",(0,s.jsx)(e.li,{children:"\u0421\u043b\u043e\u0432\u0430\u043c\u0438 \u043e\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0440\u0438\u043d\u0446\u0438\u043f, \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0437\u0430\u0434\u0430\u0447\u0430 \u0431\u0443\u0434\u0435\u0442 \u0440\u0435\u0448\u0430\u0442\u044c\u0441\u044f."}),"\n",(0,s.jsx)(e.li,{children:"\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u0438\u0442\u044c \u043a \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u0438."}),"\n"]})]})}function x(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>l});var s=t(7294);const r={},i=s.createContext(r);function l(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);