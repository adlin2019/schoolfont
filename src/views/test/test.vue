<template>

    <div>

        <el-button type="primary" @click="test">测试</el-button>

        <el-button type="primary" @click="increment">增加store实例中的count</el-button>

        <!-- 通过异步请求得到图片并渲染 -->
        <el-image :src="src" @click="test"></el-image>

        <!-- 通过axios从后端取接口数据 -->
        <el-button type="primary" @click="requestForData">请求数据并渲染</el-button>
        <p>{{end_data}}</p>



    </div>


</template>

<script>

    import {testAPI,requestToTest} from "@/api/user"

    export default {
        name: "test",

        data() {

            return{

                src: "",
                end_data: null

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
            },


            increment() {
                this.$store.commit('increment')
                console.log(this.$store.state.count)
            },

            requestForData: async function () {
                const response = await requestToTest()
                if (response.status == 200){
                    this.end_data = response.data
                }
            }






        }
    }
</script>

<style scoped>

</style>
