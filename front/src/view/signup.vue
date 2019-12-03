<template>
        <el-container class="container">
            <div class="content">
                <div class="signup-content">
                    <el-header class="header">用户注册</el-header>
                    <div class="user-info">
                        <div class="user-account">
                            <div class="text-common"><span style="color:red">*</span><span>&nbsp;&nbsp;账号：</span></div>
                            <el-input class="" type="text" placeholder="请输入账号名" @blur="saveAccount"/>
                        </div>
                        <div class="user-account" style="margin-top:20px;">
                            <div class="text-common">
                                <span style="color:red">*</span>
                                <span>&nbsp;&nbsp;密码：</span>
                            </div>
                            <el-input type="password" placeholder="请输入密码" @blur="savaPassword" @focus="hideInfo"/>
                        </div>
                        <div class="user-account" style="margin-top:20px;">
                            <div class="text-common">
                                <span style="color:red">*</span>
                                <span>&nbsp;&nbsp;确认密码：</span>
                            </div>
                            <el-input type="password" placeholder="请确认密码" @blur="saveConfirmPwd" @focus="hideInfo"/>
                        </div>
                        <div :style="show?'display:block;color:red;margin-top:20px;':'display:none;color:red;margin-top:20px;'" >
                            确认密码与密码不一致
                        </div>
                    </div>
                    <div style="margin:0 auto">
                        <el-button type="success" size="medium" @click="sureToSignup">确定</el-button>
                         <el-button type="danger" size="medium" @click="cancel">取消</el-button>
                    </div>
                </div>
            </div>
        </el-container>
</template>

<script>
export default {
    beforeCreate() {
        
    },
    data() {
        return {
            account: '',
            password: '',
            confirmPwd: '',
            show: false,
        }
    },
    methods: {
        saveAccount(e){
            this.account = e.target.value;
        },
        savaPassword(e){
            this.password = e.target.value;
        },
        saveConfirmPwd(e){
            this.confirmPwd = e.target.value;
            // if(this.password != this.confirmPwd){
            //      this.show = true;
            //      return false;
            // }
        },
        hideInfo(){
            this.show = false;
        },
        sureToSignup(){
            let that = this;
            let account = this.account;
            let password = this.password;
            let confirmPwd = this.confirmPwd;
            if(!account && account == ''){
                this.$alert('账号不能为空','提示',{
                    confirmButtonText: '确定',
                })
                return false;
            }
            if(!password && password == ''){
                this.$alert('密码不能为空','提示',{
                    confirmButtonText: '确定',
                })
                return false;
            }
            if(password != confirmPwd){
                this.show = true;
                return false;
            }
            let isInsert = this.axios.get('http://localhost:9999/api/user/getAccount?account='+account)
                    .then((res)=>{
                        let accounts = res.data.accounts;
                        let flag = accounts.some((value)=>{
                            return account == value;
                        });
                        if(flag){
                            that.$alert('账号已存在','提示',{
                                confirmButtonText: '确定',
                            })
                            return false;
                        }
                        return true;
                    })
            if(isInsert){
                this.axios.post('http://localhost:9999/api/user/addUser',{
                    account: account,
                    password: password
                }).then((res)=>{
                    if(res.data.msg == 'success'){
                        that.account = '';
                        that.password = '';
                        that.confirmPwd = ''
                        this.$alert('注册成功，点击确定返回登录界面','提示',{
                                confirmButtonText: '确定',
                                callback: ()=>{
                                    that.$router.push({
                                        name: 'login'
                                    })
                                }
                            })
                    } 
                })
            }
        },
        cancel(){
            this.$router.push({
                name: 'login'
            })
        }
    },
}
</script>

<style scoped>
    .container{
        width: 100%;
        height: calc(100vh);
        background: #ccc;
    }
    .content{
        width: 100%;
        height: 400px;
    }
    .signup-content{
        width: 500px;
        height: 500px;
        margin: 200px auto;
        background: #fff;
        border-radius: 5%; 
    }
    .header{
        padding-top: 25px;
        font-size: 28px;
    }
    .user-info{
        width: 400px;
        height: 230px;
        margin: 80px auto;
    }
    .user-account{
        display: flex;
        align-items: center;
    }
    .text-common{
        text-align: right;
        width: 35%;
    }
</style>
