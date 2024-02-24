import { defineStore } from 'pinia'
import axios from 'axios'
import toastr from 'toastr'
import $ from 'jquery';

export const cartStore = defineStore("cartStore", {
    state: () => ({
        carts: [],
        cartTotal: 0,
        final_total: 0,
        isLoading: false,
        apiUrl: "https://vue3-course-api.hexschool.io/v2",
        apiPath: "wuyi0020",
    }),
    getters: {
        getCartTotal({ carts }) {
            return carts;
        },
        // getCartCount({ carts }) {
        // }
    },
    actions: {
        getCart() {
            this.isLoading = true;
            const url = `${this.apiUrl}/api/${this.apiPath}/cart`;
            console.log(url);
            axios
                .get(url)
                .then((response) => {
                    this.carts = response.data.data.carts;
                    this.total = response.data.data.total;
                    this.final_total = response.data.data.final_total;
                })
                .catch((err) => {
                    $(toastr.success("出現錯誤", err));
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },
        deleteCart(item) {
            const url = `${this.apiUrl}/api/${this.apiPath}/cart/${item.id}`;
            axios
                .delete(url)
                .then((response) => {
                    $(toastr.success("刪除成功", response.data.message));
                    this.getCart();
                })
                .catch((err) => {
                    $(toastr.success("出現錯誤", err));
                });
        },
        setCart(cart, value) {
            this.isLoading = true;
            const url = `${this.apiUrl}/api/${this.apiPath}/cart/${cart.id}`;
            const data = {
                product_id: cart.product.id,
                qty: Number(value),
            };
            axios
                .put(url, { data: data })
                .then((response) => {
                    $(toastr.success("更新完成", response.data.message));
                    this.getCart();
                })
                .catch((err) => {
                    $(toastr.success("出現錯誤", err));
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },
    }
})
