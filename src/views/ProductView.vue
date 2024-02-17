<template>
    <div class="container">
        <div class="row py-3">
            <div class="col-md-6">
                <h2>產品列表</h2>
                <table class="table table-hover mt-4">
                    <thead>
                        <tr>
                            <th width="150">產品名稱</th>
                            <th width="120">原價</th>
                            <th width="120">售價</th>
                            <th width="150">是否啟用</th>
                            <th width="120">查看細節</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item) in products" :key="item.id">
                            <td width="150">{{ item.title }}</td>
                            <td width="120">{{ item.origin_price }}</td>
                            <td width="120">{{ item.price }}</td>
                            <td width="150">
                                <span v-if="item.is_enabled" class="text-success">啟用</span>
                                <span v-if="!item.is_enabled">未啟用</span>
                            </td>
                            <td width="120">
                                <button type="button" class="btn btn-primary" @click="SingleInfo = item">查看細節</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    目前有 <span>{{ products.length }}</span> 項產品
                </p>
            </div>
            <div class="col-md-6">
                <h2>單一產品細節</h2>
                <template v-if="SingleInfo.title">
                    <div class="card mb-3">
                        <img :src="SingleInfo.imageUrl" class="card-img-top primary-image" alt="主圖" />
                        <div class="card-body">
                            <h5 class="card-title">
                                {{ SingleInfo.title }}
                                <span class="badge bg-primary ms-2">{{ SingleInfo.category }}</span>
                            </h5>
                            <p class="card-text">商品描述：{{ SingleInfo.description }}</p>
                            <p class="card-text">商品內容：{{ SingleInfo.content }}</p>
                            <div class="d-flex">
                                <p class="card-text me-2">{{ SingleInfo.price }}</p>
                                <p class="card-text text-secondary">
                                    <del>{{ SingleInfo.origin_price }}</del>
                                </p>
                                元 / {{ SingleInfo.unit }}
                            </div>
                        </div>
                    </div>
                    <div v-if="SingleInfo.imagesUrl">
                        <template v-for="(item, index) in SingleInfo.imagesUrl" :key="index">
                            <img :src="item" alt="" class="images m-2" />
                        </template>
                    </div>
                </template>
                <p class="text-secondary" v-if="!SingleInfo.title">請選擇一個商品查看</p>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "ProductView",
    components: {},
    data() {
        return {
            apiUrl: "https://vue3-course-api.hexschool.io/v2",
            apiPath: "wuyi0020",
            products: [],
            SingleInfo: {},
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
        getData() {
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/products`;
            axios
                .get(url)
                .then((response) => {
                    this.products = response.data.products;
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        },
        openProduct(item) {
            this.tempProduct = item;
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

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
img {
    object-fit: contain;
    max-width: 100%;
}

.primary-image {
    height: 300px;
}

.images {
    height: 150px;
}
</style>

//下面是一行指令 可以安裝axios
//npm install axios