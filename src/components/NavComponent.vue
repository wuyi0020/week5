<template>
    <nav class="navbar fixed-top navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand me-auto" to="/">Home</router-link>
            <router-link class="btn btn-outline-light me-2" to="/buycoin">購買硬幣</router-link>
            <router-link class="btn btn-outline-light me-2" to="/cart">查看購物車 </router-link>
            <router-link v-if="userLoginState == false" class="btn btn-outline-light me-2" to="/login">登入</router-link>
            <div v-else class="btn btn-outline-light me-2" @click="logOut()" to="/login">登出</div>
        </div>
    </nav>
</template>

<script>
import { mapState, mapActions } from "pinia";
import loginStore from "../store/loginStore";
export default {
    data() {
        return {
            apiUrl: "https://vue3-course-api.hexschool.io/v2",
            apiPath: "wuyi0020",
        }
    },
    methods: {
        ...mapActions(loginStore, ["setUserLoginState", "checkAdmin", "logOut"]),
    },
    computed: {
        ...mapState(loginStore, ["userLoginState" , "getuserLoginState"]),
    },

}
</script>
