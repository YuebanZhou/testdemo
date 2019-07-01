import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
export default [
    {path:"/",component:ShowBlogs},
    {path:"/add",component:AddBlog},
    // 根据属性访问
    {path:"/blog/:id",component:SingleBlog},
]