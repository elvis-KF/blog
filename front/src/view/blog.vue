<template>
    <div class="content">
        <!-- <el-container class="container"> -->
        <div class="container">
            <div class="aside">
                <div class="classify-text">文章分类</div>
                <ul class="classify-list">
                    <li></li>
                </ul>
            </div>
            <el-main></el-main>
        </div>
        <!-- </el-container> -->
    </div>
</template>

<script>
import JQuery from '@/assets/JQuery.svg'
export default {
    data() {
        return {
            tags: '',
            JQuery: JQuery
        }
    },
    methods: {
        
    },
    beforeCreate() {
        
    },
    created() {
        let that = this;
        this.axios.get('http://localhost:9999/api/tag/getAllTag')
        .then((res)=>{
            if(res.data.code == 200){
                let tags = res.data.tags;
                that.tags = tags;
            }else{

            }
        })
    },
    beforeMount() {
    },
    mounted() {
    },
}
</script>

<style scoped>
.content{
    width: 100%;
    height: calc(100vh);
    background:#f3f3f4;
}
.container{
    width: 100%;
    height: 100%;
    margin-top: 50px;
}
.aside{
    width: 350px;
    height: 100%;
    margin-left: 20px;
    background: #fff;
}
.classify-text{
    text-align: left;
    padding: 20px 0 20px 15px;
    border-bottom: 1px solid #ccc;
}
.tag-name-style{
    text-decoration: none;
    font-size: 14px;
    color: #000;
}
.classify-list{
    width: 100%;
    height: 100%;
    margin-top: 20px;
    list-style-type: none;
}
</style>

