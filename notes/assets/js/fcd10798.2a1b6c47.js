"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[7729],{2543:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var c=s(5893),l=s(1151);const t={},i="CLI",r={id:"common/cli",title:"CLI",description:"Command Line Interface (\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438) \u2014 \u0441\u043f\u043e\u0441\u043e\u0431",source:"@site/notes/common/cli.md",sourceDirName:"common",slug:"/common/cli",permalink:"/notes/common/cli",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"\u041e\u0431\u0449\u0435\u0435",permalink:"/notes/category/\u043e\u0431\u0449\u0435\u0435"},next:{title:"Semantic Versioning",permalink:"/notes/common/semver"}},o={},a=[{value:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430",id:"structure",level:2},{value:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f",id:"conventions",level:3},{value:"\u041f\u043e\u0434\u043a\u043e\u043c\u0430\u043d\u0434\u044b:",id:"subcommand",level:4},{value:"\u0412\u0438\u0434\u044b \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432:",id:"arguments",level:4},{value:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432:",id:"argument-values",level:4},{value:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",id:"documenting",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"cli",children:"CLI"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)("dfn",{children:"Command Line Interface"})," (\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438) \u2014 \u0441\u043f\u043e\u0441\u043e\u0431\n\u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043e\u0439 \u043f\u0443\u0442\u0451\u043c \u0432\u0432\u043e\u0434\u0430 \u0441\u0442\u0440\u043e\u043a \u0442\u0435\u043a\u0441\u0442\u0430, \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u043c\u044b\u0445 ",(0,c.jsx)(n.em,{children:"\u043a\u043e\u043c\u0430\u043d\u0434\u0430\u043c\u0438"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["\u041a\u043e\u043c\u0430\u043d\u0434\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u0438\u043d\u0442\u0435\u043f\u0440\u0435\u0442\u0430\u0442\u043e\u0440\u043e\u043c \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 (\u0447\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0442\u0435\u0440\u043c\u0438\u043d\n",(0,c.jsx)(n.em,{children:"\u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0430"}),", shell); \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, bash \u0438 zsh \u0434\u043b\u044f Linux \u0438\u043b\u0438 PowerShell \u0434\u043b\u044f Windows."]}),"\n",(0,c.jsx)(n.p,{children:"\u0417\u043d\u0430\u043d\u0438\u0435 CLI \u043f\u043e\u043b\u0435\u0437\u043d\u043e \u0434\u043b\u044f \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0441\u043a\u0440\u0438\u043f\u0442\u043e\u0432: \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b, \u0438\u043c\u0435\u044e\u0449\u0438\u0435 CLI, \u043e\u0431\u044b\u0447\u043d\u043e \u043b\u0435\u0433\u043a\u043e\n\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0438\u0440\u0443\u044e\u0442\u0441\u044f, \u0447\u0435\u0433\u043e \u043d\u0435\u043b\u044c\u0437\u044f \u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0440\u043e \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441."}),"\n",(0,c.jsx)(n.h2,{id:"structure",children:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430"}),"\n",(0,c.jsxs)(n.p,{children:["\u0421\u0442\u0440\u043e\u043a\u0430 \u0432\u0432\u043e\u0434\u0430 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0438\u0437 \u0441\u0435\u0431\u044f ",(0,c.jsx)(n.em,{children:"\u043a\u043e\u043c\u0430\u043d\u0434\u0443"})," \u0438 \u0441\u043f\u0438\u0441\u043e\u043a \u0435\u0451 ",(0,c.jsx)(n.em,{children:"\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432"}),".\n\u041f\u0435\u0440\u0432\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439, \u0441\u043a\u0440\u0438\u043f\u0442\u043e\u043c \u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u043c \u0444\u0430\u0439\u043b\u043e\u043c."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"\u250c\u25001\u2500\u2510 \u250c2\u2500\u2510            # 1. command\nchmod a=rw data.json  # 2. argument\n\u2502     \u2514\u2500\u2500\u2500\u2500\u25003\u2500\u2500\u2500\u2500\u2500\u2500\u2518  # 3. arguments\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u25004\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518  # 4. command line\n"})}),"\n",(0,c.jsx)(n.h3,{id:"conventions",children:"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f"}),"\n",(0,c.jsx)(n.p,{children:"\u0415\u0434\u0438\u043d\u043e\u0433\u043e \u0438 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u0434\u043b\u044f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.\n\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0432 \u0432\u0438\u0434\u0435 \u043e\u0431\u044b\u0447\u043d\u043e\u0433\u043e \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0441\u0442\u0440\u043e\u043a \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438\n\u043c\u043e\u0433\u0443\u0442 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u044d\u0442\u0438 \u0441\u0442\u0440\u043e\u043a\u0438 \u043a\u0430\u043a \u043f\u043e\u0441\u0447\u0438\u0442\u0430\u044e\u0442 \u043d\u0443\u0436\u043d\u044b\u043c."}),"\n",(0,c.jsx)(n.p,{children:"\u0422\u0435\u043c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442 \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0430\u0434\u0430\u044e\u0442 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0440\u0430\u043c\u043a\u0438 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f\n\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0438 \u0447\u0430\u0441\u0442\u043e \u0441\u043e\u0431\u043b\u044e\u0434\u0430\u044e\u0442\u0441\u044f, \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0435\u0441\u043b\u0438 CLI \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0448\u0438\u0440\u043e\u043a\u0438\u0439\n\u0441\u043f\u0435\u043a\u0442\u0440 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439."}),"\n",(0,c.jsx)(n.h4,{id:"subcommand",children:"\u041f\u043e\u0434\u043a\u043e\u043c\u0430\u043d\u0434\u044b:"}),"\n",(0,c.jsxs)(n.p,{children:["\u0427\u0430\u0441\u0442\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0438 \u0442\u043e\u0433\u0434\u0430 \u043f\u0435\u0440\u0432\u044b\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b\n\u043f\u043e\u043d\u0438\u043c\u0430\u044e\u0442\u0441\u044f \u043a\u0430\u043a ",(0,c.jsx)(n.em,{children:"\u043f\u043e\u0434\u043a\u043e\u043c\u0430\u043d\u0434\u0430"}),". \u0415\u0441\u043b\u0438 \u043f\u043e\u0434\u043a\u043e\u043c\u0430\u043d\u0434 \u043c\u043d\u043e\u0433\u043e, \u0438\u0445 \u043c\u043e\u0436\u043d\u043e \u0440\u0430\u0437\u0431\u0438\u0442\u044c \u043f\u043e \u0433\u0440\u0443\u043f\u043f\u0430\u043c."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"git log                # subcommand\ngitea admin user list  # command groups\n"})}),"\n",(0,c.jsx)(n.h4,{id:"arguments",children:"\u0412\u0438\u0434\u044b \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432:"}),"\n",(0,c.jsxs)(n.p,{children:['\u041e\u0431\u044b\u0447\u043d\u043e \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0435\u0439 \u043d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u043a\u0430\u043a\u043e\u0435-\u0442\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\n\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 (\u0432\u043c\u0435\u0441\u0442\u043e \u0442\u0435\u0440\u043c\u0438\u043d\u0430 "\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442" \u043c\u043e\u0436\u043d\u043e \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u0442\u044c \u0442\u0435\u0440\u043c\u0438\u043d "\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440").\n\u041f\u043e\u0434 \u0441\u043b\u043e\u0432\u043e\u043c ',(0,c.jsx)(n.em,{children:'"\u043e\u043f\u0446\u0438\u044f"'})," (option) \u043e\u0431\u044b\u0447\u043d\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442."]}),"\n",(0,c.jsxs)(n.p,{children:["\u041f\u043e\u0434 \u0441\u043b\u043e\u0432\u043e\u043c ",(0,c.jsx)(n.em,{children:'"\u0444\u043b\u0430\u0433"'})," (flag) \u043e\u0431\u044b\u0447\u043d\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u0442\u0441\u044f \u043e\u043f\u0446\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043d\u0435 \u0438\u043c\u0435\u0435\u0442\n\u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u043e\u043d\u0430 \u043f\u0440\u043e\u0441\u0442\u043e \u0435\u0441\u0442\u044c \u0438\u043b\u0438 \u043d\u0435\u0442. \u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\n\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0442\u0438\u043f: \u0435\u0441\u043b\u0438 \u0444\u043b\u0430\u0433 \u0443\u043a\u0430\u0437\u0430\u043d, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 true, \u0438\u043d\u0430\u0447\u0435 false."]}),"\n",(0,c.jsxs)(n.p,{children:["\u0414\u043b\u044f \u043e\u043f\u0446\u0438\u0439 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u043e\u043d\u044f\u0442\u0438\u0435 \u043f\u043e\u0440\u044f\u0434\u043a\u0430, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u0445 \u0438\u043c\u0435\u043d\u0430.\n\u0427\u0430\u0441\u0442\u043e \u0434\u043b\u044f \u043e\u043f\u0446\u0438\u0438 \u0432\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043e\u0434\u043d\u043e\u0431\u0443\u043a\u0432\u0435\u043d\u043d\u043e\u0435 \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0435. \u0414\u043b\u044f \u0441\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u0438\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f\n\u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",(0,c.jsx)(n.code,{children:"-"}),", \u0430 \u0434\u043b\u044f \u0434\u043b\u0438\u043d\u043d\u044b\u0445 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0439 ",(0,c.jsx)(n.code,{children:"--"}),"."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-text",children:"-h, --help\n-v, --version\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u0424\u043b\u0430\u0433\u0438 \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c: \u0437\u0430\u043f\u0438\u0441\u044c \u0432\u0438\u0434\u0430 ",(0,c.jsx)(n.code,{children:"-abc"})," \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u0430 ",(0,c.jsx)(n.code,{children:"-a -b -c"}),"."]}),"\n",(0,c.jsx)(n.h4,{id:"argument-values",children:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432:"}),"\n",(0,c.jsx)(n.p,{children:"\u0414\u043b\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u044b \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f, \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\n\u0432\u044b\u0441\u0442\u0443\u043f\u0430\u0435\u0442 \u0441\u0430\u043c \u0442\u043e\u043a\u0435\u043d. \u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u043e\u043f\u0446\u0438\u0439, \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432\n\u0438\u043c\u0435\u0435\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435."}),"\n",(0,c.jsxs)(n.p,{children:["\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043e\u043f\u0446\u0438\u0438 \u0432\u044b\u0441\u0442\u0443\u043f\u0430\u0435\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0442\u043e\u043a\u0435\u043d. \u0422\u0430\u043a\u0436\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0432\u0438\u0434\u0430\n",(0,c.jsx)(n.code,{children:"key=value"}),": \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u0442\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u0437\u043d\u0430\u043a\u043e\u043c \u0440\u0430\u0432\u043d\u043e."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"command -o value\ncommand --option value\ncommand --option=value\n"})}),"\n",(0,c.jsx)(n.h2,{id:"documenting",children:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"}),"\n",(0,c.jsx)(n.p,{children:"TODO."}),"\n",(0,c.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u0441\u0442\u0440\u043e\u043a\u0430 \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 80 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0442\u0438 \u043d\u0430 \u043d\u043e\u0432\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443 (\u0434\u043e\u0431\u0430\u0432\u0438\u0432 ",(0,c.jsx)(n.code,{children:"\\"}),");\n\u043f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0434\u0435\u043b\u0430\u0442\u044c \u043e\u0442\u0441\u0442\u0443\u043f \u043d\u0430 \u0447\u0435\u0442\u044b\u0440\u0435 \u043f\u0440\u043e\u0431\u0435\u043b\u0430."]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.p,{children:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438:"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://developers.google.com/style/code-syntax",children:"https://developers.google.com/style/code-syntax"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://betterdev.blog/command-line-arguments-anatomy-explained/",children:"https://betterdev.blog/command-line-arguments-anatomy-explained/"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"https://unix.stackexchange.com/questions/285575/whats-the-difference-between-a-flag-an-option-and-an-argument",children:"https://unix.stackexchange.com/questions/285575/whats-the-difference-between-a-flag-an-option-and-an-argument"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>i});var c=s(7294);const l={},t=c.createContext(l);function i(e){const n=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),c.createElement(t.Provider,{value:n},e.children)}}}]);