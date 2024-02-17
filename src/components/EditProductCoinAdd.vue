<template>
    <div class="card text-center border-dark">
        <div class="card-header user-select-none" data-bs-toggle="collapse" data-bs-target="#addItemCollapse" aria-controls="addItemCollapse" role="button" aria-expanded="false">新增商品</div>
        <div class="card-body collapse" id="addItemCollapse">
            <div class="input-group mb-3 col">
                <div class="input-group-prepend">
                    <span class="input-group-text" :id="`add_title`">標題</span>
                </div>
                <input type="text" class="form-control" aria-label="標題" :aria-describedby="`add_title`" v-model="addItem.title" />
            </div>
            <div class="input-group mb-3 col">
                <div class="input-group-prepend">
                    <span class="input-group-text" :id="`add_imageUrl`">圖片網址</span>
                </div>
                <input type="text" class="form-control" aria-label="圖片網址" :aria-describedby="`add_imageUrl`" v-model="addItem.imageUrl" />
            </div>
            <img :src="addItem.imageUrl" alt="" />
            <div class="input-group mb-3 col">
                <div class="input-group-prepend">
                    <span class="input-group-text" :id="`add_content`">內容</span>
                </div>
                <input type="text" class="form-control" aria-label="內容" :aria-describedby="`add_content`" v-model="addItem.content" />
            </div>
            <div class="input-group mb-3 col">
                <div class="input-group-prepend">
                    <span class="input-group-text" :id="`add_order`">排序</span>
                </div>
                <input type="number" class="form-control" aria-label="排序" :aria-describedby="`add_order`" v-model="addItem.order" />
            </div>
            <div class="row">
                <div class="input-group mb-3 col">
                    <div class="input-group-prepend">
                        <span class="input-group-text" :id="`add_origin_price`">原價</span>
                    </div>
                    <input type="number" class="form-control" aria-label="原價" :aria-describedby="`add_origin_price`" v-model.number="addItem.origin_price" />
                </div>
                <div class="input-group mb-3 col">
                    <div class="input-group-prepend">
                        <span class="input-group-text" :id="`add_price`">現價</span>
                    </div>
                    <input type="number" class="form-control" aria-label="現價" :aria-describedby="`add_price`" v-model.number="addItem.price" />
                </div>
            </div>
            <div>
                <button key="確定" class="btn btn-outline-success" @click="AddCoin(addItem)">確定新增</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            url: "https://vue3-course-api.hexschool.io/v2",
            path: "wuyi0020",
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
                order: 0,
                unit: "TWD",
            },
        };
    },
    props:["last"],
    methods: {
        AddCoin(addItem) {
            const url = `${this.url}/api/${this.path}/admin/product`;
            axios
                .post(url, { data: addItem })
                .then((res) => {
                    if (res.data.success) {
                        alert(res.data.message);
                        this.$emit("getcoinData");
                    } else {
                        alert(res.data.message);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>
