(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={actionsWrapper:"Section_actionsWrapper__3MJck",actionsWrapperDel:"Section_actionsWrapperDel__1c3R9",actionBtn:"Section_actionBtn__3DwQN",add:"Section_add__camvX",delete:"Section_delete__3aCOK",lightBtn:"Section_lightBtn__8_R47",darkBtn:"Section_darkBtn__1NVpI",dark:"Section_dark__3Jg9m"}},function(e,t,a){e.exports={dialogueWrapper:"RemoveTaskDialogue_dialogueWrapper__39Ho9",warning:"RemoveTaskDialogue_warning__1hCRi",value:"RemoveTaskDialogue_value__3NStV",actions:"RemoveTaskDialogue_actions__b6xRE",cta:"RemoveTaskDialogue_cta__1BaEX",ctaYes:"RemoveTaskDialogue_ctaYes__1qDbX",ctaNo:"RemoveTaskDialogue_ctaNo__3lN2e"}},function(e,t,a){e.exports={elementWrapper:"Task_elementWrapper__3SoPg",completed:"Task_completed__1V1Ff",stars:"Task_stars__11ZDm",starsDark:"Task_starsDark__11l6Z",shake:"Task_shake__2YSgg","shake-horizontal":"Task_shake-horizontal__1Xpyz"}},function(e,t,a){e.exports={header:"Header_header__1VCKf",dark:"Header_dark__1zK7_",darkText:"Header_darkText__2VF4P",logoWrapper:"Header_logoWrapper__aXNT1",logo1:"Header_logo1__3p0Cw"}},function(e,t,a){e.exports={asideAnimation:"Aside_asideAnimation__CJfGM",ulWrapper:"Aside_ulWrapper__1nZ79",title:"Aside_title__Z8zgG",dark:"Aside_dark__2KN7g",container:"Aside_container__CAkKr"}},,,,function(e,t,a){e.exports={buttons:"Nav_buttons__2_SsE",aside:"Nav_aside__2dCON",search:"Nav_search__37uF5",cta:"Nav_cta__3QMcZ",ctaDark:"Nav_ctaDark__1mqCy"}},function(e,t,a){e.exports={listItems:"List_listItems__2CPGu",darkListItems:"List_darkListItems__2ra3q",selected:"List_selected__36e2y",selectedDark:"List_selectedDark__3vR8R"}},function(e,t,a){e.exports={addTaskForm:"AddTaskForm_addTaskForm__1VW73",formFields:"AddTaskForm_formFields__1qYh-",cta:"AddTaskForm_cta__1gtuK",ctaDark:"AddTaskForm_ctaDark__MFnCM"}},,,function(e,t,a){e.exports={asideForm:"AsideForm_asideForm__srPHL",errorWrapper:"AsideForm_errorWrapper__wxZFb",error:"AsideForm_error__2xXXf"}},function(e,t,a){e.exports={backdrop:"Modal_backdrop__3iXHD",modal:"Modal_modal__30MRu",slide:"Modal_slide__3BUFT"}},function(e,t,a){e.exports={dark:"AddTask_dark__1LYyz",ctaSec:"AddTask_ctaSec__3VuOK",ctaSecDark:"AddTask_ctaSecDark__1CLAs"}},,function(e,t,a){e.exports={dark:"TaskList_dark__3a_D0",ulAsideActive:"TaskList_ulAsideActive__3Ho4c"}},function(e,t,a){e.exports={button:"Button_button__2lgkF"}},function(e,t,a){e.exports={inputField:"Search_inputField__3svVc",inputOpen:"Search_inputOpen__2xzwW"}},function(e,t,a){e.exports={card:"Card_card__1te4P","card-dark":"Card_card-dark__3tDGA","card-light":"Card_card-light__3hfCd"}},function(e,t,a){e.exports={priorityWrapper:"Priority_priorityWrapper__3c0gK"}},function(e,t,a){},,,,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(13),r=a.n(s),i=a(6),o=a(0),l=n.a.createContext({darkTheme:!1,onThemeChange:function(){}}),d=function(e){var t=e.children,a=JSON.parse(localStorage.getItem("taskTrackerDevGeoTheme"))||!1,n=Object(c.useState)(a),s=Object(i.a)(n,2),r=s[0],d=s[1];Object(c.useEffect)((function(){localStorage.setItem("taskTrackerDevGeoTheme",r)}),[r]);return Object(o.jsx)(l.Provider,{value:{darkTheme:r,onThemeChange:function(){d((function(e){return!e}))}},children:t})},u=l,j=a(3),b=a(7),_=a.n(b),m=n.a.createContext({tasks:[],addTask:function(e){},addList:function(e){}}),O={tasksAndLists:[{list:"default",selected:!0,tasks:[]}]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,a=_.a.cloneDeep(e),c=a.tasksAndLists,n=c.findIndex((function(e){return!0===e.selected}));switch(t.type){case"ADD_TASK":var s=_.a.orderBy(c.filter((function(e){return!0===e.selected}))[0].tasks.concat(t.task),["priority","task"],"desc");return c[n].tasks=s,Object(j.a)({},a);case"DELETE_TASK":var r=c.find((function(e){return"default"===e.list})),i="default"===c[n].list,o=c[n].tasks.findIndex((function(e){return e.id===t.id}));if(c[n].tasks.splice(o,1),0===c[n].tasks.length&&!i){if(0===r.tasks.length){r.selected=!0;var l=c.filter((function(e){return 0!==e.tasks.length})).concat(r);return Object(j.a)(Object(j.a)({},a),{},{tasksAndLists:l})}r.selected=!0;var d=c.filter((function(e){return 0!==e.tasks.length}));return Object(j.a)(Object(j.a)({},a),{},{tasksAndLists:d})}return Object(j.a)(Object(j.a)({},a),{},{selection:""});case"SEARCH_TASK":var u=c.map((function(e){return e.tasks.filter((function(e){return e.task.includes(t.query)}))})).flat()[0];if(u){var b=u.id,m=c.find((function(e){return e.tasks.some((function(e){return e.id===b}))}));return c.map((function(e){return e.selected=!1})),m.selected=!0,Object(j.a)(Object(j.a)({},a),{},{selection:b})}return Object(j.a)(Object(j.a)({},a),{},{selection:""});case"ADD_LIST":var h={list:t.list,selected:!0,tasks:[]};return c.map((function(e){return e.selected=!1})),c.push(h),Object(j.a)(Object(j.a)({},a),{},{selection:""});case"COMPLETE_TOGGLE":var f=c[n].tasks.find((function(e){return e.id===t.id}));return f.completed=!f.completed,Object(j.a)(Object(j.a)({},a),{},{selection:""});case"ACTIVATE_LIST":var k=c.findIndex((function(e){return e.list===t.active.list}));return c.map((function(e){return e.selected=!1})),c[k].selected=!0,Object(j.a)(Object(j.a)({},a),{},{selection:""});default:return e}},f=function(e){var t=e.children,a=Object(c.useReducer)(h,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;return JSON.parse(localStorage.getItem("taskTrackerDevGeo"))||e}()),n=Object(i.a)(a,2),s=n[0],r=n[1];Object(c.useEffect)((function(){localStorage.setItem("taskTrackerDevGeo",JSON.stringify(s))}),[s]);var l={currentState:s,addTask:function(e){r({type:"ADD_TASK",task:e})},deleteTask:function(e){r({type:"DELETE_TASK",id:e})},searchTask:function(e){r({type:"SEARCH_TASK",query:e})},toggleComplete:function(e){r({type:"COMPLETE_TOGGLE",id:e})},addList:function(e){r({type:"ADD_LIST",list:e})},activateList:function(e){r({type:"ACTIVATE_LIST",active:e})}};return Object(o.jsx)(m.Provider,{value:l,children:t})},k=a(4),p=a(5),x=a(26),v=a.n(x),T=function(e){var t=e.onClick,a=e.type,c=e.title,n=e.className,s=e.children;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("button",{title:c,onClick:t,type:a||"button",className:"".concat(v.a.button," ").concat(n),children:s})})},g=a(27),N=a.n(g),C=n.a.forwardRef((function(e,t){var a=e.className,c=e.onChange,n=e.onFocus,s=e.placeholder,r=e.id,i=e.required;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("input",{required:i,ref:t,className:"".concat(N.a.inputField," ").concat(a||null),onChange:c,onFocus:n,id:r||null,type:"text",placeholder:s})})})),A=a(28),S=a.n(A),D=function(e){var t=e.className,a=e.children,c=e.title;return Object(o.jsx)("div",{className:"".concat(S.a.card," ").concat(t||""),title:c,children:a})},F=a(16),L=a.n(F),y=function(e){var t=e.onAsideEnable,a=Object(c.useState)(!1),n=Object(i.a)(a,2),s=n[0],r=n[1],l=Object(c.useContext)(m).searchTask,d=Object(c.useContext)(u),j=d.darkTheme,b=d.onThemeChange,_=Object(c.useRef)();Object(c.useEffect)((function(){if(s){var e=setTimeout((function(){_.current.focus()}),100);return function(){clearTimeout(e)}}}),[s]);var O=j?L.a.ctaDark:L.a.cta;return Object(o.jsxs)("nav",{children:[Object(o.jsx)(T,{onClick:t,title:"Toggle menu",className:O,children:Object(o.jsx)(k.a,{icon:p.a})}),Object(o.jsxs)(D,{className:L.a.buttons,children:[s&&Object(o.jsx)(C,{onChange:function(){var e=_.current.value.toLowerCase();e.trim().length>=2&&l(e)},ref:_,className:L.a.search,placeholder:"What are we looking for?"}),Object(o.jsx)(T,{onClick:function(e){e.preventDefault(),r((function(e){return!e}))},type:"submit",title:"Search",className:O,children:Object(o.jsx)(k.a,{icon:p.d})}),Object(o.jsxs)(T,{className:O,onClick:b,title:"Change to ".concat(j?"light":"dark"," mode"),children:[j&&Object(o.jsx)(k.a,{icon:p.g}),!j&&Object(o.jsx)(k.a,{icon:p.h})]})]})]})},R=a(11),E=a.n(R),I=function(e){var t=e.onAsideEnable,a=Object(c.useContext)(u).darkTheme,n="".concat(E.a.header," ").concat(a?E.a.dark:""),s=a?E.a.darkText:"";return Object(o.jsxs)("header",{className:n,children:[Object(o.jsx)("div",{className:E.a.logoWrapper,children:Object(o.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.github.com/developedbygeo",title:"My GitHub Profile",children:Object(o.jsxs)("h1",{className:s,children:[Object(o.jsx)("span",{className:E.a.logo1,children:"Task"})," Planner"]})})}),Object(o.jsx)(y,{onAsideEnable:t})]})},M=n.a.memo(I),W=a(21),w=a.n(W),P=function(e){var t=e.onFormReset,a=Object(c.useContext)(m),n=a.addList,s=a.currentState.tasksAndLists,r=Object(c.useRef)(),l=Object(c.useState)(!1),d=Object(i.a)(l,2),u=d[0],j=d[1],b=Object(o.jsx)("div",{className:w.a.errorWrapper,children:Object(o.jsx)("p",{className:w.a.error,children:"Oops, list already exists!"})});return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=r.current.value,c=a.trim().length>0,i=s.findIndex((function(e){return e.list===a||e.list===a.toLowerCase()}))>-1;c&&!i?(n(a),t([r])):j(!0)},className:w.a.asideForm,children:[Object(o.jsx)("div",{children:Object(o.jsx)(C,{onFocus:function(){j(!1),setTimeout((function(){r.current.focus()}),200)},required:!0,ref:r,placeholder:"Let's add a list!"})},_.a.uniqueId()),Object(o.jsx)("div",{children:Object(o.jsx)(T,{type:"submit",title:"Add a new list!",children:Object(o.jsx)(k.a,{icon:p.c})})})]}),u&&b]})},q=a(17),B=a.n(q),H=function(e){var t=e.onClick,a=e.title,n=e.selected,s=e.id,r=Object(c.useContext)(u).darkTheme,i=n&&r,l="".concat(B.a.listItems,"  ").concat(r?B.a.darkListItems:""," ").concat(i&&B.a.selectedDark," \n  ").concat(n?B.a.selected:"");return Object(o.jsx)("li",{onClick:t,className:l,title:"Click to enable the ".concat(a," list"),children:Object(o.jsx)(D,{children:Object(o.jsx)("p",{children:a})})},s)},K=a(12),G=a.n(K),V=function(e){var t=e.onFormReset,a=Object(c.useContext)(u).darkTheme,n=Object(c.useContext)(m),s=n.activateList,r=n.currentState.tasksAndLists,i=function(e){return s(e)},l=a?G.a.dark:G.a.aside;return Object(o.jsxs)("aside",{className:l,children:[Object(o.jsxs)("div",{className:G.a.container,children:[Object(o.jsx)(D,{className:G.a.title,children:Object(o.jsx)("h3",{children:"Lists"})}),Object(o.jsx)(P,{onFormReset:t})]}),Object(o.jsx)("div",{className:G.a.ulWrapper,children:Object(o.jsx)("ul",{children:r.map((function(e){return Object(o.jsx)(H,{onClick:i.bind(null,e),title:e.list,selected:e.selected},_.a.uniqueId())}))})})]})},J=a(8),X=a.n(J),Y=function(e){var t=e.children,a=e.onMenuEnable,n=e.onRemoveMenuEnable,s=Object(c.useContext)(u).darkTheme,r=!!Object(c.useContext)(m).currentState.tasksAndLists.find((function(e){return e.selected})).tasks.find((function(e){return e.completed})),i="".concat(X.a.actionBtn," ").concat(s?X.a.darkBtn:X.a.lightBtn," "),l=s?X.a.dark:X.a.section,d="".concat(X.a.actionsWrapper," ").concat(r?X.a.actionsWrapperDel:"");return Object(o.jsxs)("section",{className:l,children:[t,Object(o.jsxs)("div",{className:d,children:[Object(o.jsx)(T,{className:"".concat(i," ").concat(X.a.add),onClick:a,title:"Add a new task!",children:Object(o.jsx)(k.a,{icon:p.c})}),r&&Object(o.jsx)(T,{onClick:n,className:"".concat(i," ").concat(X.a.delete),children:Object(o.jsx)(k.a,{icon:p.i})})]})]})},z=a(31),Z=a(29),Q=a.n(Z),U={1:"Low",2:"Medium",3:"High"},$=function(e){var t=e.className,a=e.priorityLevel,c=Object(z.a)(Array(+a).keys()),n=U[+a],s=c.map((function(e){return Object(o.jsx)(k.a,{className:t,icon:p.e},_.a.uniqueId())}));return Object(o.jsx)(D,{title:"Priority: ".concat(n),className:Q.a.priorityWrapper,children:s})},ee=a(10),te=a.n(ee),ae=function(e){var t=e.onClick,a=e.completed,n=e.title,s=e.header,r=e.id,l=e.description,d=e.tabIndex,j=Object(c.useContext)(u).darkTheme,b=Object(c.useContext)(m).currentState.selection,_=Object(c.useState)(!1),O=Object(i.a)(_,2),h=O[0],f=O[1];return Object(c.useEffect)((function(){if(b===r){f(!0);var e=setTimeout((function(){f(!1)}),800);return function(){return clearTimeout(e)}}}),[b,r]),Object(o.jsx)("li",{onClick:t,className:te.a.li,title:n,tabIndex:d,children:Object(o.jsxs)(D,{className:"".concat(te.a.elementWrapper," ").concat(a?te.a.completed:""," ").concat(h?te.a.shake:""),children:[s&&Object(o.jsx)("h3",{children:s}),l&&Object(o.jsx)($,{className:j?te.a.starsDark:te.a.stars,priorityLevel:l})]})},r)},ce=a(25),ne=a.n(ce),se=function(e){var t=e.isAsideActive,a=Object(c.useContext)(m),n=a.toggleComplete,s=a.currentState.tasksAndLists.filter((function(e){return!0===e.selected}))[0].tasks,r=Object(c.useContext)(u).darkTheme,i=function(e){return n(e)},l=s.map((function(e,t){var a=e.completed,c=e.task,n=e.priority,s=e.id;return Object(o.jsx)(ae,{onClick:i.bind(null,s),title:"Mark ".concat(c," as ").concat(a?"pending":"completed"),header:c,description:n,id:s,completed:a,tabIndex:t},s)}));return Object(o.jsx)("ul",{className:"".concat(t?ne.a.ulAsideActive:""," ").concat(r?ne.a.dark:""),children:l})},re=a(30),ie=a.n(re),oe=n.a.forwardRef((function(e,t){var a=e.className;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("select",{required:!0,className:"".concat(ie.a.select," ").concat(a||null),ref:t,defaultValue:"low",children:[Object(o.jsx)("option",{value:"default",disabled:!0,children:"Please select the tasks's priority"}),Object(o.jsx)("option",{value:1,children:"Low"}),Object(o.jsx)("option",{value:2,children:"Medium"}),Object(o.jsx)("option",{value:3,children:"High"})]})})})),le=a(18),de=a.n(le),ue=function(e){var t=e.onFormReset,a=Object(c.useContext)(m).addTask,n=Object(c.useRef)(),s=Object(c.useRef)();return Object(o.jsxs)("form",{onSubmit:function(e){var c=n.current.value.toLowerCase(),r=s.current.value;e.preventDefault(),c.trim().length>0&&r.trim().length>0&&(a({task:c,priority:r,completed:!1,id:_.a.uniqueId()}),t([n]))},className:de.a.addTaskForm,children:[Object(o.jsxs)("div",{className:de.a.formFields,children:[Object(o.jsx)("label",{htmlFor:"taskName",children:"Task Name"}),Object(o.jsx)(C,{required:!0,ref:n,id:"taskName",placeholder:"What task are we adding?"})]}),Object(o.jsxs)("div",{className:de.a.formFields,children:[Object(o.jsx)("label",{htmlFor:"taskPriority",children:"Task Priority"}),Object(o.jsx)(oe,{ref:s})]}),Object(o.jsx)(T,{type:"submit",className:de.a.cta,children:"Add"})]})},je=a(9),be=a.n(je),_e=function(e){var t=e.onRemoveMenuDisable,a=Object(c.useContext)(m),n=a.currentState.tasksAndLists,s=a.deleteTask,r=n.find((function(e){return!0===e.selected})),i="default"===r.list,l=r.tasks.filter((function(e){return!0===e.completed})),d=l.length,u=d>1?"tasks":"task",j=r.tasks.length!==d||i?"":Object(o.jsxs)("span",{children:[Object(o.jsx)("br",{}),"The list will also be ",Object(o.jsx)("b",{children:"deleted"}),"."]});return Object(o.jsxs)("div",{className:be.a.dialogueWrapper,children:[Object(o.jsx)("div",{className:be.a.warning,children:Object(o.jsxs)("p",{children:["You are about to remove"," ",Object(o.jsx)("span",{className:be.a.value,children:d})," ",u,".",j,Object(o.jsx)("br",{})," Do you want to proceed?"]})}),Object(o.jsx)("div",{className:be.a.actionWrapper,children:Object(o.jsxs)("div",{className:be.a.actions,children:[Object(o.jsx)(T,{onClick:function(){l.map((function(e){return s(e.id)})),t()},title:"Yup, let's delete them.",className:"".concat(be.a.cta," ").concat(be.a.ctaYes),children:Object(o.jsx)(k.a,{icon:p.b})}),Object(o.jsx)(T,{onClick:t,title:"Nope, do not delete.",className:"".concat(be.a.cta," ").concat(be.a.ctaNo),children:Object(o.jsx)(k.a,{icon:p.f})})]})})]})},me=a(22),Oe=a.n(me),he=document.querySelector("#overlay"),fe=function(e){var t=e.onMenuDisable;return Object(o.jsx)("div",{className:Oe.a.backdrop,onClick:t})},ke=function(e){var t=e.children,a=e.className;return Object(o.jsx)("div",{className:"".concat(Oe.a.modal," ").concat(a||null),children:Object(o.jsx)("div",{className:Oe.a.content,children:t})})},pe=function(e){var t=e.onMenuDisable,a=e.className,c=e.children;return Object(o.jsxs)(o.Fragment,{children:[r.a.createPortal(Object(o.jsx)(fe,{onMenuDisable:t}),he),r.a.createPortal(Object(o.jsx)(ke,{className:a,children:c}),he)]})},xe=a(23),ve=a.n(xe),Te=function(e){var t=e.onFormReset,a=e.onMenuDisable,n=e.add,s=Object(c.useContext)(u).darkTheme,r="".concat(ve.a.ctaSec," ").concat(s?ve.a.ctaSecDark:""),i=Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(T,{onClick:a,className:r,children:Object(o.jsx)(k.a,{icon:p.f})}),Object(o.jsx)(ue,{onFormReset:t})]}),l=Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(_e,{onRemoveMenuDisable:a})}),d=n?i:l;return Object(o.jsx)(pe,{onMenuDisable:a,className:s&&ve.a.dark,children:d})};var ge=function(){var e=Object(c.useContext)(u),t=Object(c.useState)(!1),a=Object(i.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(!1),l=Object(i.a)(r,2),d=l[0],j=l[1],b=Object(c.useState)(!1),_=Object(i.a)(b,2),m=_[0],O=_[1],h=function(){d?j(!1):O(!1)},k=function(e){e.map((function(e){return e.current.value=""}))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(f,{children:[d&&Object(o.jsx)(Te,{add:!0,onFormReset:k,onMenuDisable:h}),m&&Object(o.jsx)(Te,{add:!1,onMenuDisable:h}),Object(o.jsx)(M,{onThemeSelection:e.onThemeChange,onAsideEnable:function(){s((function(e){return!e}))}}),Object(o.jsxs)("main",{className:"App",children:[n&&Object(o.jsx)(V,{onFormReset:k,theme:e.darkTheme}),Object(o.jsx)(Y,{onMenuEnable:function(){j(!0)},onRemoveMenuEnable:function(){O(!0)},children:Object(o.jsx)(se,{isAsideActive:n})})]})]})})};a(43);r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(d,{children:Object(o.jsx)(ge,{})})}),document.getElementById("app-wrapper"))}],[[44,1,2]]]);
//# sourceMappingURL=main.ddc89bb4.chunk.js.map