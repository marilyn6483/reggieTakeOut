<template>
  <div style="height: 100%">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-container>
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <div class="logo">
            <img src="../assets/login/login-logo.png" alt="" style="width: 117px; height: 32px"/>
          </div>
          <el-menu
            :default-active="defaultActiveMenuPath"
            :router="true"
            class="el-menu-vertical-demo"
            background-color="rgb(52, 55, 68)"
            text-color="#fff"
            active-text-color="#ffd04b">
            <div v-for="item in menuList" :key="item.id">
              <el-menu-item :index="item.url" @close="handleMenuClick(item)">
                <i :class="item.icon"></i>
                <i class="iconfont"></i>
                <span slot="title">{{item.name}}</span>
              </el-menu-item>
            </div>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
  export default {
    name: "Login1",
    data() {
      return {
        defaultActiveMenuPath: '/employee',
        activePath: "/employee",
        menuList: [
          {
            id: '2',
            name: '员工管理',
            url: '/employee',
            icon: 'el-icon-user'
          },
          {
            id: '3',
            name: '分类管理',
            url: '/category',
            icon: 'el-icon-menu'
          },
          {
            id: '4',
            name: '菜品管理',
            url: 'page/food/list.html',
            icon: 'icon-food'
          },
          {
            id: '5',
            name: '套餐管理',
            url: 'page/combo/list.html',
            icon: 'icon-combo'
          },
          {
            id: '6',
            name: '订单明细',
            url: 'page/order/list.html',
            icon: 'icon-order'
          }
          //   ],
          // },
        ]
      }
    },
    methods: {
      handleMenuClick(item) {
        this.defaultActiveMenuPath = item.url
      }
    }
  }
</script>

<style scoped lang="less">

  .logo {
    text-align: center;
    background-color: rgb(52, 55, 68);
    /* height: 100px;
    line-height: 100px;
    padding: 12px 5px; */
    padding: 46px 37px 67px 36px;
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>
