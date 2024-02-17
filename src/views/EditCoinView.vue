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
            <div v-if="products.length" class="col-6 mb-1">
                <ProductCoinAdd :-add-coin="AddItem" :addItem="addItem" />
            </div>
        </div>
        <div class="row">
            <div class="col-4" v-for="(item) in products" :key="item.id">
                <ProductCoin :item=item
                @openProduct="openProduct"
                @getcoinData=getcoinData />
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
                    console.log(this.products);
                    this.products.sort((a, b) => {
                        return a.description > b.description ? 1 : -1;
                    })
                    console.log(this.edittingList);
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        },
        openProduct(item) {
            this.tempProduct = item;
        },
        editProduct(item) {
            this.edittingList[item.id] = !this.edittingList[item.id];
            this.editItem[item.id] = { ...item };
        },
        editProductCancel(id) {
            this.edittingList[id] = !this.edittingList[id];
            this.editItem[id] = "";
        },
        editProductDone(id) {
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${id}`;
            this.edittingList[id] = !this.edittingList[id];
            let putItem;
            console.log(this.editItem[id]);
            putItem = { ...this.editItem[id] };
            delete putItem.id;
            console.log(putItem);
            axios.put(url, { data: putItem })
                .then((response) => {
                    console.log(response);
                    this.getcoinData();
                })
                .catch((err) => {
                    console.log(err);
                    alert(err.response);
                })
            console.log(this.editItem[id]);
        },
        AddItem(item) {
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/product`;
            item.description = `${this.products.length + 1}`
            let data = {};
            data["data"] = { ...item };
            console.log(item);
            console.log(data["data"]);
            axios.post(url, data)
                .then((response) => {
                    console.log(response);
                    this.getcoinData();
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        },
        delProduct(id) {
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${id}`;
            axios.delete(url)
                .then((res) => {
                    console.log(res);
                    this.getcoinData();
                })
                .catch((err) => {
                    console.log(err);
                    console.log(err.response.data.message);
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
