<template>
    <el-container class="container">
        <div class="main">
            <div class="content">
                <div class="info">
                    <el-header class="text-style">What do you want to record today ？</el-header>
                    <el-input  placeholder="请输入账号" type="text" style="margin-top:30px;" @blur="saveAcount">
                        <template slot="prepend">Account</template>
                    </el-input>
                    <el-input placeholder="请输入密码" style="margin-top:20px;" type="password" @blur="savePassword">
                        <template slot="prepend">Password</template>
                    </el-input>
                    <div style="margin:20px auto">
                        <el-button type="success" size="medium" @click="login">Sign In</el-button>
                         <el-button type="primary" size="medium" @click="signUp">Sign Up</el-button>
                    </div>
                </div>
            </div>
        </div>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            account: '',
            password: ''
        }
    },
    methods: {
        saveAcount(e){
            this.account = e.target.value;
        },
        savePassword(e){
            this.password = e.target.value;
        },
        login(){
            this.axios.post('http://localhost:9999/api/user/login',{
                account: this.account,
                password: this.password
            }).then((res)=>{
                if(res.data.code == 200 && res.data.msg == 'success'){
                    this.$alert('登录成功','提示',{
                        confirmButtonText: '确定',
                        callback: ()=>{

                        }
                    })
                    that.dptName = '';
                    that.peopleNum = '';
                }else{
                    this.$alert(res.data.msg,'提示',{
                        confirmButtonText: '确定',
                    })
                }
            })
        },
        signUp(){
            this.$router.push({
                name: 'signup'
            })
        }
    },
}
</script>

<style scoped>
    .container{
        width: 100%;
        height: calc(100vh);
        background-image: url(../assets/background.jpg);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        /* opacity: 0.6; */
        align-items: center;
    }
    .main{
        width: 100%;
        height: 400px;
    }
    .info{
        width: 500px;
    }
    .content{
        width: 80%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
     .text-style{
        font-size: 28px;
        font-weight: bold;
        color: aliceblue;
        text-align: left;
    }
      input::-webkit-input-placeholder {
        color: #000;
      }
      input:-moz-input-placeholder {
        color: #000;
      }
      input::-ms-input-placeholder {
        color: #000;
      }
</style>
