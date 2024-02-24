<template>
    <div class="col">
        <div class="card justify-content-between h-100 text-center border-dark">
            <h2 class="card-header">{{ item.title }}</h2>
            <div class="card-body d-flex align-content-between flex-column">
                <img :src="item.imageUrl" alt="" class="coin mb-3  align-self-start card-img-top" />
                <div class=" mb-3">{{ item.content }}</div>
                
            </div>
            <div class="card-footer">
                <div v-if="item.origin_price === item.price">
                    <div>立即購買</div>
                    <h1 class="col card-text">{{ item.origin_price }} TWD</h1>
                </div>
                <div v-else>
                    <del class="col card-text">
                        {{ item.origin_price }} TWD
                    </del>
                    <h1 class="col card-text ">{{ item.price }} TWD</h1>
                </div>
                <button class="btn btn-outline-success mx-1" @click="addCart(item)">
                    加入購物車
                </button>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';

export default {
    name: "CoinProduct",
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {};
    },
    methods: {
        addCart() {
            this.$emit("addCart", this.item);
        },
    },
}
</script>

<style lang="scss" scoped></style>