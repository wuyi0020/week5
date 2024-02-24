<template>
    <div>
        <h1>
            {{ Text }}
        </h1>
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
                <v-field id="name" name="name" type="text" class="form-control" :class="{ 'is-invalid': errors['name'] }"
                    placeholder="請輸入name" rules="required" v-model="form.user.name"></v-field>
                <error-message name="name" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-3">
                <label for="tel" class="form-label">收件人phone</label>
                <v-field id="tel" name="phone" type="text" class="form-control" :class="{ 'is-invalid': errors['phone'] }"
                    placeholder="請輸入phone" rules="required|min:8|max:10" v-model="form.user.tel"></v-field>
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
                <textarea name="" id="message" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
            </div>
            <div class="text-end">
                <button type="submit" class="btn btn-danger">送出訂單</button>
            </div>
        </v-form>
    </div>
</template>

<script>
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
            loadingStatus: {
                loadingItem: '',
            },
            products: [],
            product: {},
            form: {
                user: {
                    name: '',
                    email: '',
                    tel: '',
                    address: '',
                },
                message: '',
            },
            cart: {},
        };
    },
    components: {
        VField: VeeValidate.Field,
        VForm: VeeValidate.Form,
        ErrorMessage: VeeValidate.ErrorMessage,
    },
    mounted() {
        console.log(VeeValidate);
    },
}




</script>

<style lang="scss" scoped></style>