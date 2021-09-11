<template>
    <div>

        <div class="title">智慧校园</div>

        <div class="loginBody">

            <!-- 表单 -->
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

                <!-- 验证码 -->
                <el-image :src="src" @click="getCaptcha"></el-image>

                <!-- 验证码输入框 -->
                <el-form-item label="验证码">
                    <el-input v-model="form.code"
                    placeholder="请输入验证码"
                    clearable></el-input>
                </el-form-item>


                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                    <el-button>取消</el-button>
                    <el-button @click="register">注册</el-button>

                </el-form-item>
            </el-form>

        </div>


    </div>
</template>

<script>
    import {getCaptchaData,login} from "@/api/user"
    import {setToken} from "@/utils/auth";

    export default {
        name: 'login',

        data() {
            return {
                form: {
                    account: '',
                    password: '',
                    code: '',
                    uuid: ''
                },

                // 图片链接
                src: ''
            }
        },


        created: function () {
            // 创建时请求验证码
            this.getCaptcha()

        },


        methods: {
            onSubmit: async function () {

                try {
                    const response = await login(this.form)
                    const data = response.data
                    console.log(data)
                    if (data["code"] == 200) {
                        // 如果登录验证通过
                        // 将得到的token记录到store实例中
                        const token = data["token"]
                        setToken(token)
                        // 然后重定向到index页面
                        await this.$router.push("/test")
                    }

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


            getCaptcha: async function () {
                try {
                    const response = await getCaptchaData()
                    this.src = "data:image/jpeg;base64,"+response.data["img"]
                    this.form.uuid = response.data["uuid"]

                } catch (e) {
                    console.log("error")

                }

            },

            register: function () {
                this.$router.push('/addUser')
            }
        }

    }
</script>

<style scoped>

</style>
