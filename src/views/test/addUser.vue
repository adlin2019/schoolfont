<template>
    <div>

        <h1>注册页面</h1>

        <el-form ref="form" :model="form" label-width="80px">

            <!-- 账号输入框 -->
            <el-form-item label="账号">
                <el-input v-model="form.account"
                          placeholder="请输入账号"
                          clearable></el-input>
            </el-form-item>

            <!-- 密码输入框 -->
            <el-form-item label="密码">
                <el-input v-model="form.password"
                          placeholder="请输入密码"
                          show-password></el-input>
            </el-form-item>

            <el-form-item label="用户类型">
                <el-radio v-model="form.userType" label="2">学生</el-radio>
                <el-radio v-model="form.userType" label="3">商家</el-radio>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="addUser">注册</el-button>
                <el-button>清空</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
    import {addUserAPI, login} from "@/api/user"

    export default {
        name: 'addUser',

        data() {
            return {
                form: {
                    account: '',
                    password: '',
                    userType: ''
                }
            }
        },

        methods: {
            onSubmit: async function () {

                try {
                    const response = await login(this.form)
                    const data = response.data
                    console.log(data)
                    if (data["code"] == 500) {
                        // 如果登录认证不通过
                        // 弹出弹窗提示错误信息
                        alert(data["msg"])

                        // 清空密码栏以及验证码栏
                        this.form.password = ''
                        this.form.code = ''
                        // 更新验证码
                        await this.getCaptcha()
                    }
                } catch (e) {
                    console.log("login error")
                }

            },

            addUser: async function(){
                try {
                    const response = await addUserAPI(this.form)
                    const data = response.data
                    console.log(data)
                } catch (e) {
                    console.log("error")
                }
            }


        }

    }


</script>

<style scoped>

</style>
