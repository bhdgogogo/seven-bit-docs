import{i as u,j as c,r,o as i,c as p,a as t,w as e,d as o}from"../app.694ff86d.js";const m={class:"box"},h=u({__name:"dropdown2",setup(f){const a=c(null),_=()=>{a.value&&a.value.handleShowMenu()},d=()=>{a.value&&a.value.handleCloseMenu()};return(v,g)=>{const n=r("sb-drop-down-item"),l=r("sb-drop-down"),s=r("sb-button");return i(),p("div",m,[t(l,{trigger:"click",style:{"margin-right":"20px"}},{title:e(()=>[o(" 点击展开 ")]),dropdown:e(()=>[t(n,{value:"1"},{default:e(()=>[o("菜单1")]),_:1}),t(n,{value:"2"},{default:e(()=>[o("菜单2")]),_:1}),t(n,{value:"3"},{default:e(()=>[o("菜单3")]),_:1})]),_:1}),t(l,{trigger:"contextmenu",style:{"margin-right":"20px"}},{title:e(()=>[o(" 右键展开 ")]),dropdown:e(()=>[t(n,{value:"1"},{default:e(()=>[o("菜单1")]),_:1}),t(n,{value:"2"},{default:e(()=>[o("菜单2")]),_:1}),t(n,{value:"3"},{default:e(()=>[o("菜单3")]),_:1})]),_:1}),t(l,{trigger:"click",ref_key:"me",ref:a,style:{"margin-right":"20px"}},{title:e(()=>[o(" 事件展开 ")]),dropdown:e(()=>[t(n,{value:"1"},{default:e(()=>[o("菜单1")]),_:1}),t(n,{value:"2"},{default:e(()=>[o("菜单2")]),_:1}),t(n,{value:"3"},{default:e(()=>[o("菜单3")]),_:1})]),_:1},512),t(s,{onClick:_,style:{"margin-right":"20px"}},{default:e(()=>[o("点击展开")]),_:1}),t(s,{onClick:d},{default:e(()=>[o("点击关闭")]),_:1})])}}});export{h as default};
