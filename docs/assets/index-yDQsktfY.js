(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function c(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(o){if(o.ep)return;o.ep=!0;const n=c(o);fetch(o.href,n)}})();var s=[];for(var T=0;T<256;++T)s.push((T+256).toString(16).slice(1));function E(t,e=0){return(s[t[e+0]]+s[t[e+1]]+s[t[e+2]]+s[t[e+3]]+"-"+s[t[e+4]]+s[t[e+5]]+"-"+s[t[e+6]]+s[t[e+7]]+"-"+s[t[e+8]]+s[t[e+9]]+"-"+s[t[e+10]]+s[t[e+11]]+s[t[e+12]]+s[t[e+13]]+s[t[e+14]]+s[t[e+15]]).toLowerCase()}var f,S=new Uint8Array(16);function C(){if(!f&&(f=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!f))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return f(S)}var P=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const w={randomUUID:P};function A(t,e,c){if(w.randomUUID&&!e&&!t)return w.randomUUID();t=t||{};var l=t.random||(t.rng||C)();return l[6]=l[6]&15|64,l[8]=l[8]&63|128,E(l)}class U{constructor(e){this.id=A(),this.description=e,this.done=!1,this.createAt=new Date}}const a={All:"All",Completed:"Completed",Pending:"Pending"},d={todos:[],filter:a.All},I=()=>{v()},v=()=>{if(!localStorage.getItem("state"))return;const{todos:t=[],filter:e=a.All}=JSON.parse(localStorage.getItem("state"));d.todos=t,d.filter=e},b=()=>{localStorage.setItem("state",JSON.stringify(d))},D=(t=a.All)=>{switch(t){case a.All:return[...d.todos];case a.Completed:return d.todos.filter(e=>e.done);case a.Pending:return d.todos.filter(e=>!e.done);default:throw new Error(`Option ${t} is not valid.`)}},O=t=>{if(!t)throw Error("Description is required");d.todos.push(new U(t)),b()},q=t=>{d.todos=d.todos.map(e=>(t===e.id&&(e.done=!e.done),e)),b()},L=t=>{d.todos=d.todos.filter(e=>e.id!==t),b()},F=()=>{d.todos.filter(e=>e.done).forEach(e=>{L(e.id)})},x=(t=a.All)=>{d.filter=t},k=()=>d.filter,i={addTodo:O,deleteCompleted:F,deleteTodo:L,getCurrentFilter:k,getTodos:D,initStore:I,loadStore:v,setFilter:x,toggleTodo:q},M=`<section class="todoapp"></section>\r
\r
    <header class="header">\r
\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
        \r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class="filtro" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed"> Borrar completados </button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">Jhonatan Urrego Nieves</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`,H=t=>{if(!t)throw new Error(" A TODO object is required");const{done:e,description:c,id:l}=t,o=`
                    <div class="view">
                        <input class="toggle" type="checkbox" ${e?"checked":""}>
                        <label>${c}</label>
                        <button class="destroy"></button>
                     </div>
                    <input class="edit" value="Create a TodoMVC template">
                `,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",l),e&&n.classList.add("completed"),n};let h;const N=(t,e=[])=>{if(h||(h=document.querySelector(t)),!h)throw new Error(`Element ${t} not found`);h.innerHTML="",e.forEach(c=>{h.append(H(c))})};let y;const V=t=>{if(y||(y=document.querySelector(t)),!y)throw new Error(`Element ${t} not found`);y.innerHTML=i.getTodos(a.Pending).length},m={TodoList:".todo-list",newTodoInput:"#new-todo-input",clearCompletedButton:".clear-completed",TodoFilters:".filtro",PendingCountLabel:"#pending-count"},$=t=>{const e=()=>{const r=i.getTodos(i.getCurrentFilter());N(m.TodoList,r),c()},c=()=>{V(m.PendingCountLabel)};(()=>{const r=document.createElement("div");r.innerHTML=M,document.querySelector(t).append(r),e()})();const l=document.querySelector(m.newTodoInput),o=document.querySelector(m.TodoList),n=document.querySelector(m.clearCompletedButton),u=document.querySelectorAll(m.TodoFilters);l.addEventListener("keyup",r=>{r.keyCode===13&&r.target.value.trim().length!==0&&(i.addTodo(r.target.value),e(),r.target.value="")}),o.addEventListener("click",r=>{const p=r.target.closest("[data-id]");i.toggleTodo(p.getAttribute("data-id")),e()}),o.addEventListener("click",r=>{const p=r.target.className==="destroy",g=r.target.closest("[data-id]");!p||!g||(i.deleteTodo(g.getAttribute("data-id")),e())}),n.addEventListener("click",r=>{i.deleteCompleted(),e()}),u.forEach(r=>{r.addEventListener("click",p=>{switch(u.forEach(g=>{g.classList.remove("selected")}),p.target.classList.add("selected"),p.target.text){case"Todos":i.setFilter(a.All);break;case"Pendientes":i.setFilter(a.Pending);break;case"Completados":i.setFilter(a.Completed);break}e()})})};i.initStore();$("#app");
