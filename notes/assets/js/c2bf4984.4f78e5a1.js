"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[7135],{5710:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>a});var i=s(5893),l=s(1151);const c={},d="C++ Style Guide",t={id:"cpp/cpp-style-guide",title:"C++ Style Guide",description:"\u041d\u0430 \u0434\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u044b \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u043f\u043e \u0441\u0442\u0438\u043b\u044e \u043a\u043e\u0434\u0430 C++, \u0432\u043a\u043b\u044e\u0447\u0430\u044f",source:"@site/notes/cpp/cpp-style-guide.md",sourceDirName:"cpp",slug:"/cpp/cpp-style-guide",permalink:"/notes/cpp/cpp-style-guide",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"main",previous:{title:"optional",permalink:"/notes/cpp/std/optional"},next:{title:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438",permalink:"/notes/cpp/libraries"}},r={},a=[{value:"\u0413\u043b\u0430\u0432\u043d\u044b\u0439 \u043f\u0440\u0438\u043d\u0446\u0438\u043f:",id:"\u0433\u043b\u0430\u0432\u043d\u044b\u0439-\u043f\u0440\u0438\u043d\u0446\u0438\u043f",level:4},{value:"EditorConfig",id:"editorconfig",level:3},{value:"\u0418\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435",level:3},{value:"\u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u0434\u0430",id:"\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435-\u043a\u043e\u0434\u0430",level:3},{value:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435",id:"\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435",level:3},{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",level:3},{value:"\u0422\u0438\u043f\u044b",id:"\u0442\u0438\u043f\u044b",level:3},{value:"\u041f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f",id:"\u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f",level:3},{value:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",id:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",level:3},{value:"\u041a\u043b\u0430\u0441\u0441\u044b",id:"\u043a\u043b\u0430\u0441\u0441\u044b",level:3},{value:"\u041f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0451\u043d",id:"\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430-\u0438\u043c\u0451\u043d",level:3},{value:"if-else \u0438 switch",id:"if-else-\u0438-switch",level:3},{value:"\u0418\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f",id:"\u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f",level:3},{value:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438",id:"\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438",level:3},{value:"\u041f\u0440\u0435\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440",id:"\u043f\u0440\u0435\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"c-style-guide",children:"C++ Style Guide"}),"\n",(0,i.jsx)(n.p,{children:"\u041d\u0430 \u0434\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u044b \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u043f\u043e \u0441\u0442\u0438\u043b\u044e \u043a\u043e\u0434\u0430 C++, \u0432\u043a\u043b\u044e\u0447\u0430\u044f\n\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438 \u043f\u043e \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0435, \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e, \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f\u043c \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u0434\u0440\u0443\u0433\u043e\u0435.\n\u041f\u043e\u0434\u0440\u0430\u0437\u0443\u043c\u0435\u0432\u0430\u0435\u0441\u044f, \u0447\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442 C++20 \u0438\u043b\u0438 \u0432\u044b\u0448\u0435."}),"\n",(0,i.jsxs)(n.p,{children:["\u041c\u043d\u043e\u0433\u043e\u0435 \u0438\u0437 \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0433\u043e \u043d\u0438\u0436\u0435 \u0437\u0430\u0438\u043c\u0441\u0442\u0432\u043e\u0432\u0430\u043d\u043d\u043e \u0438\u0437 ",(0,i.jsx)(n.a,{href:"https://google.github.io/styleguide/cppguide.html",children:"Google C++ Style Guide"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"\u0433\u043b\u0430\u0432\u043d\u044b\u0439-\u043f\u0440\u0438\u043d\u0446\u0438\u043f",children:"\u0413\u043b\u0430\u0432\u043d\u044b\u0439 \u043f\u0440\u0438\u043d\u0446\u0438\u043f:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u041a\u043e\u0434 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d \u043d\u0430 \u0447\u0438\u0442\u0430\u0431\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c.",(0,i.jsx)("br",{}),"\n\u041d\u0430 \u0447\u0442\u0435\u043d\u0438\u0435 \u043a\u043e\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0442\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u0438, \u0447\u0435\u043c \u043d\u0430 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"editorconfig",children:"EditorConfig"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:"charset = utf-8\nend_of_line = lf\nindent_size = 2\nindent_style = space\ninsert_final_newline = true\ntrim_trailing_whitespace = true\nmax_line_length = 100\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435",children:"\u0418\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Item"}),(0,i.jsx)(n.th,{children:"Style"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"directory & file"}),(0,i.jsx)(n.td,{children:"dash-case"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"variable & field"}),(0,i.jsx)(n.td,{children:"lowerCamelCase"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"function"}),(0,i.jsx)(n.td,{children:"lowerCamelCase"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type & enum"}),(0,i.jsx)(n.td,{children:"UpperCamelCase"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"struct & class"}),(0,i.jsx)(n.td,{children:"UpperCamelCase"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"class method"}),(0,i.jsx)(n.td,{children:"lowerCamelCase"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"namespace"}),(0,i.jsx)(n.td,{children:"snake_case (prefer single word)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"macro"}),(0,i.jsx)(n.td,{children:"ALL_CAPS"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u0447\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432: ",(0,i.jsx)(n.code,{children:".hpp"}),(0,i.jsx)("br",{}),"\n\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u043e\u0432 \u0441 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0435\u0439: ",(0,i.jsx)(n.code,{children:".cpp"})]}),"\n",(0,i.jsx)(n.h3,{id:"\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435-\u043a\u043e\u0434\u0430",children:"\u0420\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u0434\u0430"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u0437\u0430\u0449\u0438\u0442\u0430 \u043e\u0442 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0433\u043e \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0447\u0435\u0440\u0435\u0437 include guard (",(0,i.jsx)(n.code,{children:"#pragma once"})," \u043d\u0435\u0436\u0435\u043b\u0430\u0442\u0435\u043b\u0435\u043d)"]}),"\n",(0,i.jsx)(n.li,{children:"\u0432\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u043d\u0435\u043f\u043e\u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0432 \u0444\u0430\u0439\u043b\u0435"}),"\n",(0,i.jsxs)(n.li,{children:["\u0432 ",(0,i.jsx)(n.code,{children:"#include"})," \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f UNIX \u043f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c\u044b (",(0,i.jsx)(n.code,{children:"."}),", ",(0,i.jsx)(n.code,{children:".."}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435",children:"\u041f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435"}),"\n",(0,i.jsx)(n.p,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0441 \u043f\u0440\u0438\u0441\u0432\u0430\u0438\u0432\u0430\u043d\u0438\u0435\u043c. \u041a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440 \u0432\u0441\u0435\u0433\u0434\u0430 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u0443\u0435\u0442\n\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435, \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 C++17 \u044d\u0442\u043e \u0437\u0430\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u043e \u0432 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0435."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"auto idx = 1;\nauto width = 1.0f;\nauto success = true;\n\nauto point = Point{0, 0}; // copy elision\nauto& pointRef = point;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u041f\u0440\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441,\n\u0442\u0430\u043a \u0438 \u0443\u043d\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 (",(0,i.jsx)(n.em,{children:"uniform initialization"}),")."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"auto v1 = std::vector<int>{255, 0};  // 255 and 0\nauto v2 = std::vector<int>(255, 0);  // 255 copies of 0\nconst auto m = std::map<int, char>({{1, 'a'}, {2, 'b'}});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043b\u044e\u0447\u0435\u0432\u043e\u0435 \u0441\u043b\u043e\u0432\u043e ",(0,i.jsx)(n.code,{children:"auto"})," \u043f\u0440\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438, \u0435\u0441\u043b\u0438 \u0442\u0438\u043f \u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e\n\u043e\u0447\u0435\u0432\u0438\u0434\u0435\u043d."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"auto pair = std::make_pair(success, result);\nSomeType someValue = x.get();\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 \u043b\u0438\u0442\u0435\u0440\u0430\u043b\u044b, \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'#include <string>\n\nauto fn() -> void {\n  using namespace std::string_literals;\n  auto str = "example"s;\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u0438",children:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438"}),"\n",(0,i.jsxs)(n.p,{children:["\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441\u043d\u0430\u044f \u0437\u0430\u043f\u0438\u0441\u044c \u0442\u0438\u043f\u0430 (",(0,i.jsx)(n.em,{children:"trailing return type"}),").",(0,i.jsx)("br",{}),"\n\u0418\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435: \u0442\u0438\u043f \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430 ",(0,i.jsx)(n.code,{children:"void"})," (\u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u044b)."]}),"\n",(0,i.jsx)(n.p,{children:"\u041d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b, \u0435\u0441\u043b\u0438 \u044d\u0442\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'void printHello() {\n  std::cout << "Hello" << std::endl;\n}\n\nauto originPoint() noexcept -> const Point {\n  return Point{0, 0};\n}\n\ninline auto mean(float x, float y, float z) -> float {\n  return (x + y + z) / 3;\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u0442\u0438\u043f\u044b",children:"\u0422\u0438\u043f\u044b"}),"\n",(0,i.jsxs)(n.p,{children:["\u0418\u0437 \u0432\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0445 \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e ",(0,i.jsx)(n.code,{children:"int"}),".\n\u0415\u0441\u043b\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0442\u0438\u043f \u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u043c\u0435\u0440\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0442\u0438\u043f\u044b, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0435\n\u0432 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u043c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a\u0435 ",(0,i.jsx)(n.code,{children:"<cstdint>"}),", \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,i.jsx)(n.code,{children:"int64_t"}),".\n\u0415\u0441\u043b\u0438 \u044d\u0442\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0431\u0435\u0437\u0437\u043d\u0430\u043a\u043e\u0432\u044b\u0435 \u0442\u0438\u043f\u044b."]}),"\n",(0,i.jsxs)(n.p,{children:["\u041d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,i.jsx)(n.code,{children:"typedef"}),", \u0432\u043c\u0435\u0441\u0442\u043e \u043d\u0435\u0433\u043e \u0435\u0441\u0442\u044c ",(0,i.jsx)(n.code,{children:"using"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"using f32 = float;\nusing f64 = double;\n\nusing MyMap = std::map<int, int>;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f",children:"\u041f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f"}),"\n",(0,i.jsxs)(n.p,{children:["\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e ",(0,i.jsx)(n.code,{children:"enum class"}),". \u0415\u0441\u043b\u0438 \u043d\u0443\u0436\u043d\u043e \u0443\u0431\u0440\u0430\u0442\u044c scope, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\n",(0,i.jsx)(n.code,{children:"using enum"})," (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 \u0432 switch). \u0422\u0438\u043f \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0432\u0441\u0435\u0433\u043e\n\u043a\u0440\u043e\u043c\u0435 ",(0,i.jsx)(n.code,{children:"int"}),". \u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440\u044b \u0437\u0430\u0434\u0430\u043d\u044b \u043b\u0438\u0431\u043e \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439, \u043b\u0438\u0431\u043e \u043d\u0438 \u0434\u043b\u044f \u043a\u0430\u043a\u0438\u0445."]}),"\n",(0,i.jsxs)(n.p,{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u0432 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u043c \u0447\u0438\u0441\u043b\u0435; \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440,\n",(0,i.jsx)(n.code,{children:"Color"})," \u0432\u043c\u0435\u0441\u0442\u043e ",(0,i.jsx)(n.code,{children:"Colors"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"enum class Day {\n  Monday, Tuesday, Wednesday, Thursday, Friday,\n  Saturday, Sunday,\n};\n\nenum class Bracket : char {\n  CurlyOpen = '{',\n  CurlyClose = '}',\n  SquareOpen = '[',\n  SquareClose = ']',\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b",children:"\u0421\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b"}),"\n",(0,i.jsx)(n.p,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0442\u0438\u043f\u043e\u0432, \u0443 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 (\u043f\u043e \u0437\u0430\u0434\u0443\u043c\u043a\u0435) \u0432\u0441\u0435 \u043f\u043e\u043b\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0435\n\u0438 \u043d\u0435\u0442 \u043c\u0435\u0442\u043e\u0434\u043e\u0432."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Designated initializers"})," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f, \u043a\u043e\u0433\u0434\u0430 \u043f\u043e\u043b\u044f \u043d\u0435\u043e\u0447\u0435\u0432\u0438\u0434\u043d\u044b."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"struct Point {\n  float x;\n  float y;\n};\nstruct Rectangle {\n  float width;\n  float height;\n};\n\nauto p = Point{0, 1};\nauto rect = Rectangle{.width = 1.0f, .height = 2.5f};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u043a\u043b\u0430\u0441\u0441\u044b",children:"\u041a\u043b\u0430\u0441\u0441\u044b"}),"\n",(0,i.jsxs)(n.p,{children:["\u041f\u043e\u0440\u044f\u0434\u043e\u043a \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u043e\u0432 \u0434\u043e\u0441\u0442\u0443\u043f\u0430: ",(0,i.jsx)(n.code,{children:"public"}),",  ",(0,i.jsx)(n.code,{children:"protected"}),", ",(0,i.jsx)(n.code,{children:"private"}),".\n\u041c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043f\u0438\u0448\u0443\u0442\u0441\u044f \u0431\u0435\u0437 \u043e\u0442\u0441\u0442\u0443\u043f\u0430, \u043c\u0435\u0436\u0434\u0443 \u0441\u0435\u043a\u0446\u0438\u044f\u043c\u0438 \u043f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430."]}),"\n",(0,i.jsxs)(n.p,{children:["\u0412 \u043d\u0430\u0447\u0430\u043b\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0442 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u044b \u0438 \u0434\u0435\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440.\n\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u043e\u043a\u0430\u043d\u0447\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043d\u0430 ",(0,i.jsx)(n.code,{children:"_"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"\u041d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c implicit \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u044b.\n\u041f\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u043d\u0430\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"class Square {\npublic:\n  Square();\n  ~Square();\n\n  inline auto area() -> double {\n    return a_ * a_;\n  }\n\nprivate:\n  double a_;\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u0424\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0442\u043e\u0440\u043e\u0432 \u043f\u043e\u043b\u0435\u0439 \u0432 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440\u0435 \u043a\u043b\u0430\u0441\u0441\u0430:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"// when everything fits on one line\nClass::Class() : field1(), field2() {\n  doSomething();\n}\n\n// if it doesn't fit, move it to a new line with indent\nClass::Class(Type1 param1, Type2 param2)\n  : field1(param1), field2(param2) {\n  doSomething();\n}\n\n// when the list spans multiple lines, use alignment\nClass::Class(Type1 param1, Type2 param2)\n  : field1(param1),\n    field2(param2) {\n  doSomething();\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430-\u0438\u043c\u0451\u043d",children:"\u041f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0451\u043d"}),"\n",(0,i.jsx)(n.p,{children:"\u041d\u0435 \u0432\u044b\u0434\u0435\u043b\u044f\u044e\u0442\u0441\u044f \u043e\u0442\u0441\u0442\u0443\u043f\u0430\u043c\u0438 (\u0432 \u0442.\u0447. \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435), \u043e\u0442\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0443\u0441\u0442\u044b\u043c\u0438 \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438.\n\u0414\u043b\u044f \u0437\u0430\u043a\u0440\u044b\u0432\u0430\u044e\u0449\u0435\u0439 \u0441\u043a\u043e\u0431\u043a\u0438 \u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044f \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043e \u0442\u043e\u043c, \u043a\u0430\u043a\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e\n\u0438\u043c\u0451\u043d \u043e\u043d\u0430 \u0437\u0430\u043a\u0440\u044b\u0432\u0430\u0435\u0442."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"namespace math::geometry {\n\nclass Square {...};\n\n} // namespace math::geometry\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u0418\u043c\u044f \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438\u043c\u0435\u043d \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f \u043e\u0431\u044b\u0447\u043d\u043e \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c\n\u043f\u0440\u043e\u0435\u043a\u0442\u0430."}),"\n",(0,i.jsx)(n.h3,{id:"if-else-\u0438-switch",children:"if-else \u0438 switch"}),"\n",(0,i.jsx)(n.p,{children:"\u041d\u0435 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442\u044c else \u043d\u0430 \u043d\u043e\u0432\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443 \u043a\u0440\u043e\u043c\u0435 \u0441\u043b\u0443\u0447\u0430\u0435\u0432 \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u0442\u0435\u043b\u043e\u043c if."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"if (x < 0) {\n  // do something\n} else if (x == 0) {\n  // do something\n} else {\n  // do something\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u0424\u0438\u0433\u0443\u0440\u043d\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 case.\n\u0415\u0441\u043b\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0441\u043b\u0443\u0447\u0430\u044f \u0438\u043c\u0435\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u0442\u0435\u043b\u043e, \u043e\u0442\u0434\u0435\u043b\u044f\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u043e\u0439."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"enum class MouseEventType { MouseDown, MouseUp, MouseMove };\n\nswitch (eventType) {\n  using enum MouseEventType;\n\n  case MouseDown: {\n    state.canMove = true;\n    break;\n  }\n  case MouseUp: {\n    state.canMove = false;\n    break;\n  }\n  default: {}\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f",children:"\u0418\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f"}),"\n",(0,i.jsxs)(n.p,{children:["\u0416\u0435\u043b\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f. ",(0,i.jsx)(n.code,{children:"catch"})," \u0441 \u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u043a\u043e\u0433\u0434\u0430\ntry \u0438\u043c\u0435\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u0442\u0435\u043b\u043e \u0438\u043b\u0438 \u043e\u0442\u043b\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439.\n\u0412 \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u0443\u0441\u0442\u043e\u0433\u043e \u0442\u0435\u043b\u0430 \u0434\u043b\u044f ",(0,i.jsx)(n.code,{children:"catch"})," \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043f\u043e\u0447\u0435\u043c\u0443 \u044d\u0442\u043e \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'try {\n  doSomethingUnstable();\n} catch {\n  // an explanation of why an empty body is ok\n}\n\ntry {\n  doSomethingUnstable();\n}\ncatch (const Exception& e) {\n  std::cout << "Exception" << std::endl;\n}\ncatch (const AnotherException& e) {\n  std::cout << "AnotherException" << std::endl;\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u0412\u044b\u0432\u043e\u0434 \u043e\u0448\u0438\u0431\u043e\u043a \u0432 \u043a\u043e\u043d\u0441\u043e\u043b\u044c: \u0441 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0431\u0443\u043a\u0432\u044b, \u0431\u0435\u0437 \u0442\u043e\u0447\u043a\u0438 \u043d\u0430 \u043a\u043e\u043d\u0446\u0435."}),"\n",(0,i.jsx)(n.h3,{id:"\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438",children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"}),"\n",(0,i.jsxs)(n.p,{children:["\u041d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c \u044f\u0437\u044b\u043a\u0435. \u0414\u043b\u044f doc-\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432: ",(0,i.jsx)(n.code,{children:"/**  */"}),", \u0431\u0435\u0437 Markdown.\n\u0414\u043b\u044f \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 \u043f\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438: ",(0,i.jsx)(n.code,{children:"// ..."}),", \u043e\u0442\u0434\u0435\u043b\u044f\u044f 2 \u043f\u0440\u043e\u0431\u0435\u043b\u0430\u043c\u0438.\n\u041c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0441\u043b\u043e\u0432\u0430 ",(0,i.jsx)(n.code,{children:"TODO"})," \u0438 ",(0,i.jsx)(n.code,{children:"FIXME"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"/**\n * Check if is possible to construct a triangle from three points.\n * Time complexity: O(1)\n * */\nauto isTriangle(Point& a, Point& b, Point& c) -> bool {\n  // checking by area\n  return (a.x - b.x) * (a.y - c.y) - (a.x - c.x) * (a.y - b.y) != 0;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u043f\u0440\u0435\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440",children:"\u041f\u0440\u0435\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440"}),"\n",(0,i.jsx)(n.p,{children:"\u041d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u0435\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440, \u0435\u0441\u043b\u0438 \u044d\u0442\u043e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e."}),"\n",(0,i.jsx)(n.p,{children:"\u0420\u0435\u0448\u0435\u0442\u043a\u0430, \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u0442\u0441\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u0438\u0432\u0430 \u043f\u0440\u0435\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0430, \u0432\u0441\u0435\u0433\u0434\u0430 \u0434\u043e\u043b\u0436\u043d\u0430\n\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u0441\u0442\u0440\u043e\u043a\u0438. \u0414\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u0434\u0438\u0440\u0435\u043a\u0442\u0438\u0432\u044b \u043f\u0440\u0435\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440\u0430 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f\n\u0432\u043d\u0443\u0442\u0440\u0438 \u0442\u0435\u043b\u0430 \u043a\u043e\u0434\u0430 \u0441 \u043e\u0442\u0441\u0442\u0443\u043f\u043e\u043c, \u043e\u043d\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u0442\u0440\u043e\u043a\u0438."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:'if (condition) {\n  someAction();\n#if DEBUG_LOG\n  logger.info("...");\n#endif\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"\u0414\u0440\u0443\u0433\u0438\u0435 \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0438:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://chromium.googlesource.com/chromium/src/+/HEAD/styleguide/c++/c++-dos-and-donts.md",children:"Chromium Style Guide"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>d});var i=s(7294);const l={},c=i.createContext(l);function d(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);