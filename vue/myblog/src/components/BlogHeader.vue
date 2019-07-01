<template>
  <nav>
    <ul>
      <li>
        <!-- 加exact属性，达到切换效果，点击其中一个，另一个元素的active属性消失 -->
        <router-link to="/" exact>博客</router-link>
        <router-link to="/add" exact>写博客</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "blog-header"
};
</script>
<style>
ul {
  list-style: none;
  text-align: center;
  margin: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
}
nav {
  background: coral;
  padding: 30px 0;
  margin-bottom: 40px;
}
.router-link-active {
  background: rgba(255, 255, 255, 0.8);
  color: #444;
}
</style>


