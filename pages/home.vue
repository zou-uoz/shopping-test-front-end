<template>
  <div id="home">
    <Search />
    <div class="show">
      <mt-swipe
        :auto="4000"
        style="height:150px; overflow:hidden; border-radius:10px; margin:5px"
      >
        <mt-swipe-item v-for="banner in bannerData" :key="banner._id">
          <img
            style="height:100%; width:100%;"
            :src="$imagesDir + banner.goodsImages[0]"
            :alt="banner.goodsName"
            @click="$router.push('/detail/' + banner._id)"
          />
        </mt-swipe-item>
      </mt-swipe>
      <IconList :iconData="iconData" />
      <RecommendList :dataSource="wellGoodsData" title="精选好货" />
      <RecommendList :dataSource="fashionData" title="当季流行" />
      <TodaySales :todaySalesData="todaySalesData" title="今日特卖" />
      <footer>
        <p>
          Copyright © 2008-2019 mmm.ccc.com, All Rights Reserved
          粤ICP备0123456号
        </p>
        <p>
          <img src="@/assets/police.gif" alt="网络工商" /><span
            >粤公网安备 22222222000000号</span
          >
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search";
import IconList from "@/components/home/IconList";
import RecommendList from "@/components/home/RecommendList";
import TodaySales from "@/components/home/TodaySales";
import { reqGetRandomGoods, reqGetRandomLv3Categories } from "~/api";
export default {
  name: "Home",
  async asyncData() {
    const categoryPromise = reqGetRandomLv3Categories({
      url:
        (process.server ? process.env.baseUrl : "") +
        "/api2/shopping/getRandomLv3Categories",
      categoryNumber: 10
    });
    const goodsPromise = reqGetRandomGoods({
      url:
        (process.server ? process.env.baseUrl : "") +
        "/api2/shopping/getRandomGoods",
      goodsNumber: 25
    });
    const lv3CategoriesResponse = await categoryPromise;
    const goodsResponse = await goodsPromise;
    const goodsList = goodsResponse.data.goodsList;
    return {
      wellGoodsData: goodsList.slice(0, 7),
      fashionData: goodsList.slice(7, 14),
      bannerData: goodsList.slice(14, 19),
      todaySalesData: goodsList.slice(19, 25),
      iconData: lv3CategoriesResponse.data.categories
    };
  },
  components: {
    Search,
    IconList,
    RecommendList,
    TodaySales
  }
};
</script>

<style lang="scss" scoped>
#home {
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  .show {
    flex-grow: 1;
    overflow: auto;
    margin-top: 3px;
    text-align: center;
  }
  footer {
    // text-align: center;
    color: #d3d4d4;
    font-size: 14px;
    p {
      margin-top: 20px;
    }
    img{
      width: 18px;
      position: relative;
      top: 4px;
    }
  }
}
</style>
