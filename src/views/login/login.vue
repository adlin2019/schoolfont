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
                <el-image :src="src" @click="test"></el-image>

                <!-- 验证码输入框 -->
                <el-form-item label="验证码">
                    <el-input v-model="form.code"></el-input>
                </el-form-item>


                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                    <el-button>取消</el-button>
                    <el-button @click="test">测试</el-button>

                </el-form-item>
            </el-form>

        </div>


    </div>
</template>

<script>
    import {testAPI,login} from "@/api/user"

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

            this.test()

        },


        methods: {
            onSubmit: async function () {

                try {
                    const response = await login(this.form)
                    console.log(response.data)

                } catch (e) {

                    console.log("login error")

                }

            },


            test: async function () {


                try {

                    const response = await testAPI()

                    this.src = "data:image/jpeg;base64,"+response.data["img"]

                    this.form.uuid = response.data["uuid"]


                } catch (e) {

                    console.log("error")

                }



            }
        }

    }
</script>

<style scoped>

</style>
