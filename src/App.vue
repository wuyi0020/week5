<template>
    <nav></nav>
    <nav class="navbar fixed-top navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">Home</router-link>
            <router-link class="btn btn-outline-light me-2" to="/buycoin">購買硬幣</router-link>
            <router-link v-if="!LoginState" class="btn btn-outline-light me-2" to="/login">登入</router-link>
            <div v-else class="btn btn-outline-light me-2" @click="logOut()" to="/login">登出</div>
        </div>
        
    </nav>
    <router-view />
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            LoginState: false,
            apiUrl: "https://vue3-course-api.hexschool.io/v2",
            apiPath: "wuyi0020",
        }
    },
    methods: {
        checkAdmin() {
            const url = `${this.apiUrl}/api/user/check`;
            axios
                .post(url)
                .then(() => {
                    this.LoginState = true
                })
                .catch(() => {
                    this.LoginState = false
                });
        },
        logOut(){
            document.cookie = `hexToken=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
            this.checkAdmin();
        }
    },
    mounted() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
        axios.defaults.headers.common.Authorization = token;
        this.checkAdmin();
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
