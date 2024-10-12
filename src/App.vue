<template>
  <div v-if="visible" class="container">
    <div
      class="div"
      style="width: 100%; height: 50px; border-bottom: 1px solid #ccc"
    >
      <div class="header-logo">
        <router-link to="/" style="width: 100%; height: 100%; display: block" />
      </div>
      <ul class="header-list">
        <li>
          <router-link to="/"> 首页 </router-link>
        </li>
        <li>V1.0.3</li>
        <li
          data-v-92e57744=""
          id="github-btn"
          class="github-btn"
          style="--github-icon-background-color: rgba(0, 0, 0, 0.06)"
        >
          <a
            data-v-92e57744=""
            class="gh-btn"
            href="https://github.com/WANGHONGKANG/hk-design-ui"
            target="_blank"
            ><span
              data-v-92e57744=""
              role="img"
              aria-label="github"
              class="anticon anticon-github github-icon"
              ><svg
                focusable="false"
                data-icon="github"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
                viewBox="64 64 896 896"
              >
                <path
                  d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                ></path></svg></span
          ></a>
        </li>
      </ul>
    </div>
    <div class="sidebar">
      <!-- <div class="logo"><img src="./assets/logo.jpg" alt="" />HK-UI Docs</div> -->
      <ul>
        <template v-for="item in groupList" :key="item.group">
          <h3>
            <span>{{ item.title }}</span>
          </h3>
          <li v-for="child in item.children" :key="child.name">
            <router-link :to="child.path">
              {{ getName(child.name) }}<span>{{ child.meta?.title }}</span>
            </router-link>
          </li>
        </template>
      </ul>
    </div>
    <div class="main-">
      <router-view v-slot="{ Component }">
        <transition name="left-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
  <router-view v-else />
</template>
<script lang="ts" setup>
  import { routes } from './router'

  const visible = true
  const getName = (name: string) => {
    return name.substring(0, 1).toUpperCase() + name.substring(1)
  }
  console.log(routes)
  const routesListFilter = routes.filter(
    (item: any) => !['README', 'test'].includes(item.name)
  )

  const groupList = [
    {
      group: 'comm',
      title: '通用',
      children: []
    },
    {
      group: 'data',
      title: '数据展示',
      children: []
    },
    {
      group: 'form',
      title: '数据录入',
      children: []
    },
    {
      group: 'nav',
      title: '导航',
      children: []
    },
    {
      group: 'feedback',
      title: '反馈',
      children: []
    },
    {
      group: 'other',
      title: '其他',
      children: []
    }
  ]
  groupList.forEach(item => {
    item.children = routesListFilter.filter(
      (fi: any) => fi.meta?.group === item.group
    )
  })
  /*

  const sortBy = (sortValue: string) => {
    // 添加排序
    return function (a: any, b: any) {
      let val1 = a.meta[sortValue]
      let val2 = b.meta[sortValue]
      if (val1 < val2) {
        return -1 // 顺序，倒序1
      } else if (val1 > val2) {
        return 1
      }
    }
  }

  routesListFilter.sort(sortBy('group'))*/
</script>
<style scoped>
  .header-list {
    list-style: none;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
  }

  .header-list li {
    float: left;
    margin: 0 16px;
    cursor: pointer;
  }
  .header-logo {
    background-image: url('./assets/hk-design-ui-2.png');
    background-size: 100% 100%;
    width: 200px;
    height: 38px;
    float: left;
    margin: 5px 20px 5px 0;
  }
  .main- {
    height: calc(100% - 51px);
    width: calc(100% - 240px);
    overflow-y: scroll;
    position: fixed;
    left: 240px;
    padding: 10px;
  }
  .container {
    overflow: hidden;
    height: 100%;
  }
  .sidebar {
    height: calc(100vh - 51px) !important;
  }
</style>
