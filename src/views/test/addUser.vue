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
    import {addUserAPI} from "@/api/user"

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

            addUser: async function(){
                try {
                    const response = await addUserAPI(this.form)
                    const data = response.data
                    console.log(data)
                    await this.$router.push("/")
                } catch (e) {
                    console.log("error")
                }
            }


        }

    }


</script>

<style scoped>

</style>
