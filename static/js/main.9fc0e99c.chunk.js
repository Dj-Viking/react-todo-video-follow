(this["webpackJsonpreact-todo-video-follow"]=this["webpackJsonpreact-todo-video-follow"]||[]).push([[0],{32:function(t,e,o){t.exports=o(60)},37:function(t,e,o){},60:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(29),c=o.n(r),l=o(18),i=o(7),u=o(8),d=o(10),s=o(9),p=o(13),m=o(1),f=function(t){Object(d.a)(o,t);var e=Object(s.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t.markComplete=function(t){},t}return Object(u.a)(o,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," ",o,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:h},"x")))}}]),o}(n.Component),h={background:"#FF0000",color:"#fff",border:"none",padding:"5px 10px",borderRadius:"50%",cursor:"pointer",float:"right"},b=f,y=function(t){Object(d.a)(o,t);var e=Object(s.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).markComplete=function(){},t}return Object(u.a)(o,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(b,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),o}(n.Component),v=(o(37),o(30)),g=function(t){Object(d.a)(o,t);var e=Object(s.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t.onKeyInput=function(e){t.setState(Object(v.a)({},e.target.name,e.target.value))},t}return Object(u.a)(o,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo",autoComplete:"off",value:this.state.title,onChange:this.onKeyInput}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),o}(n.Component);var E={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},j={color:"#fff",textDecoration:"none"},k=function(){return a.a.createElement("header",{style:E},a.a.createElement("h1",null,"TodoList"),a.a.createElement(p.b,{style:j,to:"/"},"Home")," | ",a.a.createElement(p.b,{style:j,to:"/about"},"About"))};var O=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the TodoList App following the Traversy React Crash Course"))},C=o(14),x=o.n(C),T=function(t){Object(d.a)(o,t);var e=Object(s.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){x.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(o){t.setState({todos:Object(l.a)(t.state.todos.filter((function(t){return t.id!==e})))})})).catch((function(t){return console.log(t)}))},t.addTodo=function(e){x.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){t.setState({todos:[].concat(Object(l.a)(t.state.todos),[e.data])})})).catch((function(t){return console.log(t)}))},t}return Object(u.a)(o,[{key:"componentDidMount",value:function(){var t=this;x.a.get("https://jsonplaceholder.typicode.com/users/1/todos?_limit=10").then((function(e){console.log(e.data),t.setState({todos:e.data})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){var t=this;return a.a.createElement(p.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(k,null),a.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(g,{addTodo:t.addTodo}),a.a.createElement(y,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),a.a.createElement(m.a,{path:"/about",component:O}))))}}]),o}(n.Component);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(T,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.9fc0e99c.chunk.js.map