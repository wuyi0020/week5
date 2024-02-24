<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h2 class="my-2">購物車</h2>
                <div v-if="!getCartTotal.length">
                    <h3>購物車是空的</h3>
                </div>
                <table v-else class="table align-middle">
                    <thead>
                        <tr>
                            <th scope="col">商品名稱</th>
                            <th scope="col">單價</th>
                            <th scope="col">數量</th>
                            <th scope="col">小計</th>
                            <th scope="col">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="background-color: aqua;" v-for="item in getCartTotal" :key="item.product.id">
                            <td>{{ item.product.title }}</td>
                            <td>{{ item.product.price }}</td>
                            <td>
                                <input type="button" class="btn btn-outline-dark rounded-0 mx-3 fs-3 lh-1 p-0 butAdd"
                                    value="+" @click="setCart(item, item.qty + 1)">
                                <input type="number" name="" id="" :value="item.qty"
                                    @change="(e) => { setCart(item, e.target.value) }">
                                <input type="button" class="btn btn-outline-dark rounded-0 mx-3 fs-3 lh-1 p-0 butAdd"
                                    value="-" @click="setCart(item, item.qty - 1)">
                            </td>
                            <td class=" text-end">{{ item.total }}</td>
                            <td> <button type="button" class="btn btn-danger" @click="deleteCart(item)">刪除產品</button></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td class=" text-end" scope="row" colspan="4">總計:{{ final_total }}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        <div class="row justify-content-center">
            <v-form ref="form" class="col-md-6" v-slot="{ errors }" @submit="createOrder">
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <v-field id="email" name="email" type="email" class="form-control"
                        :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" rules="email|required"
                        v-model="form.user.email"></v-field>
                    <error-message name="email" class="invalid-feedback"></error-message>
                </div>

                <div class="mb-3">
                    <label for="name" class="form-label">收件人name</label>
                    <v-field id="name" name="name" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['name'] }" placeholder="請輸入name" rules="required"
                        v-model="form.user.name"></v-field>
                    <error-message name="name" class="invalid-feedback"></error-message>
                </div>

                <div class="mb-3">
                    <label for="tel" class="form-label">收件人phone</label>
                    <v-field id="tel" name="phone" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['phone'] }" placeholder="請輸入phone" rules="required|min:8|max:10"
                        v-model="form.user.tel"></v-field>
                    <error-message name="phone" class="invalid-feedback"></error-message>
                </div>

                <div class="mb-3">
                    <label for="address" class="form-label">收件人address</label>
                    <v-field id="address" name="address" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['address'] }" placeholder="請輸入address" rules="required"
                        v-model="form.user.address"></v-field>
                    <error-message name="address" class="invalid-feedback"></error-message>
                </div>

                <div class="mb-3">
                    <label for="message" class="form-label">留言</label>
                    <textarea name="" id="message" class="form-control" cols="30" rows="10"
                        v-model="form.message"></textarea>
                </div>
                <div class="text-end">
                    <button type="submit" class="btn btn-danger">送出訂單</button>
                </div>
            </v-form>
        </div>

    </div>
</template>

<script>
//pinia mapState mapActions mapGetters
import { mapState, mapActions } from "pinia";
import { cartStore } from "../store/cartStore.js";
// import { debounce } from 'lodash'
import * as VeeValidate from 'vee-validate';
import * as VeeValidateRules from '@vee-validate/rules';
import * as VeeValidateI18n from '@vee-validate/i18n';
import zh_TW from "@/assets/zh_TW.json";

Object.keys(VeeValidateRules).forEach(rule => {
    VeeValidate.defineRule(rule, VeeValidateRules[rule]);
});
VeeValidateI18n.localize({
    zh_TW,
});
VeeValidate.configure({
    generateMessage: VeeValidateI18n.localize('zh_TW'),
    validateOnInput: true,
});



export default {
    data() {
        return {
            total: 0,
            form: {
                user: {
                    name: '',
                    email: '',
                    tel: '',
                    address: '',
                },
                message: '',
            },
        };
    },
    methods: {
        ...mapActions(cartStore, ["getCart", "deleteCart", "setCart"]),
    },
    computed: {
        ...mapState(cartStore, ["getCartTotal", "final_total"]),

    },
    mounted() {
        this.getCart();

    },
    components: {
        VField: VeeValidate.Field,
        VForm: VeeValidate.Form,
        ErrorMessage: VeeValidate.ErrorMessage,
    },
}
</script>

<style>
.butAdd {
    width: 30px;
    height: 30px;
}
</style>