<template>
    <div class="container">
       <div class="head">
                    <div class="headPic-style">
                        <img src="@/assets/headPic.jpg" alt="个人头像" class="logo">
                        <span class="title">MyBlog</span>
                    </div>
                    <div style="display:flex">
                        <!-- <el-menu @select="handleSelect" :default-active="activeIndex" text-color="#000" active-text-color="#f60" mode="horizontal" v-for="(menuItem, index) in menuItems" :key="menuItem.title">
                            <el-menu-item  :index="index+''">
                                <template slot="title">
                                    <i :class="menuItem.icon"></i>{{menuItem.title}}
                                </template>
                            </el-menu-item>
                        </el-menu> -->
                        <el-menu :default-active="activeIndex" class="el-menu-demo" text-color="#000" active-text-color="#f60" mode="horizontal" 
                                router>
                            <el-menu-item index="/index/blog">
                                <template slot="title">
                                        <i class="el-icon-tickets"></i>博客
                                </template>
                            </el-menu-item>
                            <el-menu-item index="/index/messageBoard">
                                <template slot="title">
                                    <i class="el-icon-edit"></i> 留言板
                                </template>
                            </el-menu-item>
                            <el-menu-item index="/index/about">
                                <template slot="title">
                                    <i class="el-icon-star-off"></i> 关于
                                </template>
                            </el-menu-item>
                        </el-menu>   
                    </div>
        </div> 

        <!-- 路由 -->
        <el-container>
            <router-view></router-view>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '/index/blog',
            // menuItems: [
            //     {'title': '博客', 'icon': 'el-icon-tickets', 'name': 'blog'},
            //     {'title': '留言板', 'icon': 'el-icon-edit', 'name': 'messageBoard'},
            //     {'title': '关于', 'icon': 'el-icon-star-off', 'name': 'about'}
            // ]
        }
    },
    methods: {
        handleSelect(key, keypath){
            // console.log(key,keypath);
            // this.activeIndex = key;
        }
    },
}
</script>

<style scoped>
    .head{
        position: relative;
        color: #fff;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        /* height: 70px; */
        /* background: linear-gradient(30deg, #13194b, #4d9cf7); */
        box-shadow: 0 1px 3px #ccc; 
    }
    .headPic-style{
        display: flex;
        align-items: center;
        color: #000;
        margin-left:15px;
    }
    .title{
        margin-left: 10px;
    }
    .headPic-style img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
</style>
