<template>
    <div class="home container-fluid">
        <div class="row justify-content-center">
            <div class="col-9 p-2 ">
                <div class="row row-cols-4">
                    <div class="col mb-3" v-for="(item) in products" :key="item.id">
                        <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">{{ item.title }}</h5>
                                <img :src=item.imageUrl class="card-img-top h-75 mb-1" alt="...">
                                <router-link :to="{ path: '/ArtWorkView/' + item.id }" class="btn btn-primary">查看作品</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "HomeView",
    components: {},
    data() {
        return {
            apiUrl: "https://vue3-course-api.hexschool.io/v2",
            apiPath: "wuyi0020",
            products: [],
        };
    },
    methods: {
        checkAdmin() {
            const url = `${this.apiUrl}/api/user/check`;
            axios
                .post(url)
                .then(() => {
                    this.getData();
                })
                .catch((err) => {
                    alert(err.response.data.message);
                    this.$router.push("/login");
                });
        },
        getData(page = 1) {
            const url = `${this.apiUrl}/api/${this.apiPath}/products?category=作者&page=${page}`;
            axios
                .get(url)
                .then((response) => {
                    this.products = response.data.products;
                    //用products裡的description來排序
                    this.products.sort((a, b) => {
                        return a.description.localeCompare(b.description);
                    });
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        },

    },
    mounted() {
        // 取出 Token
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common.Authorization = token;

        this.checkAdmin();
    },

};
</script>
