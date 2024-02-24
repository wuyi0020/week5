<template>
    <div class="container">
        <div class="row">
            <div v-if="products.length" class="col">
                <h1>
                    作品列表
                </h1>
            </div>
            <div v-else class="d-flex align-items-center justify-content-center">
                <strong>Loading... </strong>
                <div class="spinner-border" role="status" aria-hidden="true"></div>
            </div>
        </div>
        <div class="row row-cols-5">
            <div v-for="(item) in products" :key="item.id">
                <div class="card mt-2">
                    <div class="card-header">
                    </div>
                    <div class="card-body">
                        <img :src=item.imageUrl class="card-img-top h-75 mb-1" alt="...">
                    </div>
                    <h5 class="card-footer mb-0">{{ item.title }}</h5>
                </div>
            </div>
        </div>
        <div class="row">
            <pagination :page="page" @getcoinData="getData" />
        </div>
    </div>
</template>

<script>
import axios from "axios";
import PaginationComponent from "../components/PaginationComponent.vue";

export default {
    name: "AllArtWorkView",
    components: {
        pagination: PaginationComponent,
    },
    data() {
        return {
            apiUrl: "https://vue3-course-api.hexschool.io/v2",
            apiPath: "wuyi0020",
            products: [],
            page: {}
        };
    },
    methods: {
        getData(page = 1) {
            const url = `${this.apiUrl}/api/${this.apiPath}/products?category=作品&page=${page}`;
            axios
                .get(url)
                .then((response) => {
                    this.products = response.data.products;
                    this.page = response.data.pagination;
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        },
    },
    mounted() {
        this.getData();
    },
};
</script>

<style></style>