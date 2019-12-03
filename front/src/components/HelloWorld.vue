<template>
  <div class="hello">
      <input type="text" @blur="saveDptName" placeholder="请输入公寓名" :value="dptName"/>
      <input type="number" @blur="savePeopleNum" placeholder="请输入人员数量" :value="peopleNum">

      <button @click="addDpt">添加</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      dptName: '',
      peopleNum: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    saveDptName(e){
      this.dptName = e.target.value;
    },
    savePeopleNum(e){
      this.peopleNum = e.target.value;
    },
    addDpt(){
      var that = this;
      this.axios.post('http://localhost:9999/api/user/addDpt',{
          dptName: that.dptName,
          peopleNum: that.peopleNum
      }).then((res)=>{
        if(res.data.code == 200 && res.data.msg == 'success'){
          alert('添加成功');
          that.dptName = '';
          that.peopleNum = '';
        }
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


