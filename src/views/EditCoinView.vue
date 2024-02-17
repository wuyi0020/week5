<template>
    <div class="container">
        <div class="row">
            <div v-if="products.length" class="col">
                <h1>
                    編輯購買硬幣
                </h1>
            </div>
            <div v-else class="d-flex align-items-center justify-content-center">
                <strong>Loading... </strong>
                <div class="spinner-border" role="status" aria-hidden="true"></div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div v-if="products.length" class="col-6 h-100 mb-1">
                <ProductCoinAdd :last="last" @getcoinData="getcoinData" />
            </div>
        </div>
        <div class="row">
            <div class="col-4 pb-3" v-for="(item) in products" :key="item.id">
                <ProductCoin :item=item @openProduct="openProduct" @getcoinData=getcoinData />
            </div>
        </div>
        <ModalDelet :item="tempProduct" @getcoinData="getcoinData" />
    </div>
</template>
<!-- <script src="../buycoin.js" type="module"></script> -->
<script>
import axios from "axios";
import ProductCoin from '../components/EditProductCoin.vue';
import ProductCoinAdd from '../components/EditProductCoinAdd.vue';
import ModalDelet from "../components/DeletModal.vue";



export default {
    name: "CoinView",
    components: {
        ProductCoin,
        ProductCoinAdd,
        ModalDelet,
    },
    data() {
        return {
            apiUrl: "https://vue3-course-api.hexschool.io/v2",
            apiPath: "wuyi0020",
            products: [],
            edittingList: {},
            editItem: {},
            addItem: {
                title: "",
                category: "coin",
                content: "",
                description: "",
                imageUrl: "",
                imagesUrl: [],
                is_enabled: 1,
                origin_price: 0,
                price: 0,
                unit: "TWD"
            },
            tempProduct: {},
            last: 0,
        };
    },
    methods: {
        checkAdmin() {
            const url = `${this.apiUrl}/api/user/check`;
            axios
                .post(url)
                .then(() => {
                    this.getcoinData();
                })
                .catch((err) => {
                    alert(err.response.data.message);
                    this.$router.push("/login");
                });
        },
        getcoinData() {
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/products?category=coin`;
            axios
                .get(url)
                .then((response) => {
                    this.products = response.data.products;
                    this.products.sort((a, b) => {
                        return a.order > b.order ? 1 : -1;
                    })
                    //快速尋找products.order中的最大的數字 記錄到last
                    this.last = this.products.reduce((acc, cur) => {
                        return acc > cur.order ? acc : cur.order;
                    }, 0);
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        },
        openProduct(item) {
            this.tempProduct = item;
        },
        AddItem(item) {
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/product`;
            let data = {};
            data["data"] = { ...item };

            axios.post(url, data)
                .then(() => {
                    this.getcoinData();
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        },
        delProduct(id) {
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${id}`;
            axios.delete(url)
                .then(() => {
                    this.getcoinData();
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
