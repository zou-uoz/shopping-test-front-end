<template>
  <div class="icon-list">
    <ul>
      <li
        v-for="icon in iconData"
        :key="icon._id"
        @click="$router.push('/goodsList/' + icon._id)"
      >
        <img :src="$imagesDir + icon.categoryImage" :alt="icon.categoryName" />
        <h4>
          {{ icon.categoryName.substr(0, Math.round(Math.random() + 2)) }}
        </h4>
      </li>
    </ul>
  </div>
</template>

<script>
//主页三级分类推荐形成的图标列表
export default {
  name: "IconList",
  props: {
    iconData: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.icon-list {
  margin: 6px;
  background-color: #fff;
  // text-align: center;
  ul {
    display: inline-block;
    // text-align: left;
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-evenly;
    li {
      // text-align: center;
      margin: 8px;
      display: inline-block;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid #dc38d5;
      }
      h4 {
        font-size: 14px;
      }
    }
  }
}
</style>
