<template>
  <!-- 自定义指令中传的是参数，需要用引号引起来 -->
  <div id="show-blogs" v-theme:column="'narrow'">
    <h1>博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search">
    <!-- 遍历的内容不再是blogs，应该是过滤之后的Blogs -->
    <div class="single-blog" v-for="blog in filteredBlogs" :key="blog.title">
      <router-link v-bind:to="'/blog/'+ blog.id">
        <!-- 自定义指令 -->
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <div>{{blog.body | snippet}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "show-blogs",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    // 如果需要请求本地json,需要将json文件放到static文件夹中
    // 请求的地址为"./../static/posts.json"
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        this.blogs = data.body.slice(0, 10);
      });
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        //   es6提供的方法，match
        return blog.title.match(this.search);
      });
    }
  },
  filters: {
    "to-uppercase": function(value) {
      return value.toUpperCase();
    },
    // 另一种写法
    toUppercase(value) {
      return value.toUpperCase();
    },
    snippet: function(value) {
      return value.slice(0, 100) + "...";
    }
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        // 随机颜色
        el.style.color =
          "#" +
          Math.random()
            .toString(16)
            .slice(2, 8);
      }
    },
    theme: {
      bind(el, binding, vnode) {
        if (binding.value == "wide") {
          el.style.maxWidth = "1260px";
        } else if (binding.value == "narrow") {
          el.style.maxWidth = "560px";
        }
        // 如果存在一个属性是column;
        if (binding.arg == "column") {
          el.style.background = "#6677cc";
          el.style.padding = "20px";
        }
      }
    }
  }
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border: 1px dotted #aaa;
}
#show-blogs a {
  color: #444;
  text-decoration: none;
}
input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
