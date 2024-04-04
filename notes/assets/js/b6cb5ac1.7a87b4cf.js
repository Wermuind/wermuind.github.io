"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[676],{4642:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var s=t(5893),r=t(1151);const i={},c="\u0420\u0430\u0431\u043e\u0442\u0430 \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438",o={id:"code/ts/strings",title:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438",description:"",source:"@site/notes/code/ts/strings.md",sourceDirName:"code/ts",slug:"/code/ts/strings",permalink:"/notes/code/ts/strings",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430",permalink:"/notes/code/ts/set"},next:{title:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0446\u0432\u0435\u0442\u043e\u043c",permalink:"/notes/code/ts/colors"}},u={},a=[];function d(n){const e={code:"code",h1:"h1",pre:"pre",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u0440\u0430\u0431\u043e\u0442\u0430-\u0441\u043e-\u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438",children:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"/** \u0420\u0430\u0437\u0434\u0435\u043b\u044f\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 \u043f\u043e \u043f\u0435\u0440\u0432\u043e\u043c\u0443 \u0432\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044e \u0438\u0441\u043a\u043e\u043c\u043e\u0439 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0438.\n * @example\n * splitByFirstOccurrence('1, 2, 3', ', ') => ['1', '2, 3']\n * */\nfunction splitByFirstOccurrence(input: string, search: string): [string, string] {\n  const index = input.indexOf(search);\n  if (index === -1) return [input, ''];\n  return [input.substring(0, index), input.substring(index + search.length)];\n}\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"/** \u0420\u0430\u0437\u0434\u0435\u043b\u044f\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 \u043f\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u043c\u0443 \u0432\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u044e \u0438\u0441\u043a\u043e\u043c\u043e\u0439 \u043f\u043e\u0434\u0441\u0442\u0440\u043e\u043a\u0438.\n * @example\n * splitByLastOccurrence('1, 2, 3', ', ') => ['1, 2', '3']\n * */\nfunction splitByLastOccurrence(input: string, search: string): [string, string] {\n  const index = input.lastIndexOf(search);\n  if (index === -1) return ['', input];\n  return [input.substring(0, index), input.substring(index + search.length)];\n}\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"/** \u0420\u0430\u0437\u0434\u0435\u043b\u044f\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0443 \u043f\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c\u0443 \u0438\u043d\u0434\u0435\u043a\u0441\u0443.\n * @example\n * splitByIndex('1234', 2) => ['12', '34']\n * splitByIndex('1234', 0)  => ['', '1234']\n * */\nfunction splitByIndex(input: string, index: number): [string, string] {\n  return [input.substring(0, index), input.substring(index)];\n}\n"})})]})}function l(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>c});var s=t(7294);const r={},i=s.createContext(r);function c(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);