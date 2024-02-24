<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center fw-bolder pt-5 mb-5">購買金幣</h1>
                </div>
            </div>
            <div class="row row-cols-3">
                <template v-for="product in products" :key="product.id">
                    <coin-product :item="product" @addCart="addCart" />
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import CoinProduct from "@/components/CoinProduct.vue";

export default {
    name: "BuyCoin",
    data() {
        return {
            apiUrl: "https://vue3-course-api.hexschool.io",
            apiPath: "wuyi0020",
            products: [],
        };
    },
    components: {
        CoinProduct,
    },
    methods: {
        getData() {
            const url = `${this.apiUrl}/v2/api/${this.apiPath}/products?category=coin`;
            axios
                .get(url)
                .then((response) => {
                    this.products = response.data.products;
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
            this.products.sort((a, b) => {
                return a.order > b.order ? 1 : -1;
            })
            //快速尋找products.order中的最大的數字 記錄到last
            this.last = this.products.reduce((acc, cur) => {
                return acc > cur.order ? acc : cur.order;
            }, 0);
        },
        addCart(product) {
            axios
                .post(`${this.apiUrl}/v2/api/${this.apiPath}/cart`, {
                    data: {
                        product_id: product.id,
                        qty: 1,
                    },
                })
                .then((response) => {
                    alert(response.data.message);
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        },
    },
    mounted() {
        this.getData();
    },
}
</script>

<style></style>