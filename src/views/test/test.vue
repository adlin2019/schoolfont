<template>

    <div>

        <el-button type="primary" @click="test">测试</el-button>

        <!-- 通过异步请求得到图片并渲染 -->
        <el-image :src="src" @click="test"></el-image>

    </div>


</template>

<script>

    import {testAPI} from "@/api/user"

    export default {
        name: "test",

        data() {

            return{

                src: ""

            }

        },

        methods: {

            test: async function () {


                try {

                    const response = await testAPI();

                    console.log(response.data)

                    this.src = "data:image/jpeg;base64,"+response.data["img"]


                } catch (e) {

                    console.log("error")

                }



            }






        }
    }
</script>

<style scoped>

</style>
