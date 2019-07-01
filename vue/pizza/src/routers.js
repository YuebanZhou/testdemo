import Home from "./components/Home";
import Menu from "./components/Menu";
import Admin from "./components/Admin";
import About from "./components/about/About";
import Login from "./components/Login";
import Register from "./components/Register";

// 二级路由
import Contact from "./components/about/Contact";
import Delivery from "./components/about/Delivery";
import History from "./components/about/History";
import OrderingGuide from "./components/about/OrderingGuide";

// 三级路由
import Phone from "./components/about/contact/Phone";
import PersonName from "./components/about/contact/PersonName";
// export 将routes公开
export const routes = [
  {
    path: "/",
    name: "homeLink",
    components: {
      default: Home,
      orderingGuide: OrderingGuide,
      delivery: Delivery,
      history: History
    }
  },
  { path: "/menu", name: "menuLink", component: Menu },
  {
    path: "/admin",
    name: "adminLink",
    component: Admin
    //beforeEnter: (to, from, next) => {
    // 路由独享守卫
    /*alert("非登录状态，不能访问本页面");
        // 如果执行next，点击确定之后，跳转到admin
        next()
        // 如果next中参数是false，点击确定之后，不执行跳转
        next(false)*/

    // 判断是否登录
    /*if (to.path == "/login" || to.path == "/register") {
          next();
        } else {
          alert("请先登录");
          next("/login");
        }*/
    //}
  },
  // redirect默认展示内容
  {
    path: "/about",
    name: "aboutLink",
    redirect: "/contact",
    component: About,
    children: [
      // path 路径是自己规定的，这里可以加about也可以不加
      // {path:'/about/contact',name:'contactLink',component:Contact},
      {
        path: "/contact",
        name: "contactLink",
        redirect: "/personname",
        component: Contact,
        children: [
          { path: "/phone", name: "phoneNumber", component: Phone },
          { path: "/personname", name: "personName", component: PersonName }
        ]
      },
      { path: "/delivery", name: "deliveryLink", component: Delivery },
      { path: "/history", name: "historyLink", component: History },
      {
        path: "/orderingGuide",
        name: "orderingGuideLink",
        component: OrderingGuide
      }
    ]
  },
  { path: "/login", name: "loginLink", component: Login },
  { path: "/register", name: "registerLink", component: Register },
  // 除了上面的路径，错误路径都跳转到home
  { path: "*", redirect: "/" }
];
