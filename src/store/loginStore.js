import { defineStore } from 'pinia'
import axios from 'axios'

export default defineStore("loginStore", {
    //data, methods, computed, etc
    //state, getters, actions, mutations
    state: () => ({
        LoginState: true,
        apiUrl: "https://vue3-course-api.hexschool.io/v2",
        apiPath: "wuyi0020",
    }),
    getters: {
        userLoginState({ LoginState }) {
            return LoginState
        },
        getuserLoginState() {
            return this.LoginState
        }
    },
    actions: {
        setUserLoginState(value) {
            this.LoginState = value
        },
        checkAdmin() {
            const url = `${this.apiUrl}/api/user/check`;
            axios
                .post(url)
                .then(() => {
                    this.setUserLoginState(true);
                })
                .catch(() => {
                    this.setUserLoginState(false);
                })
        },
        logOut() {
            document.cookie = `hexToken=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
            this.setUserLoginState(false);
            this.checkAdmin();
        },
        login(user) {
            const api = "https://vue3-course-api.hexschool.io/v2/admin/signin";
            axios
                .post(api,user)
                .then((response) => {
                    const expired  = response.data.expired;
                    const token = response.data.token;
                    document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`;
                    this.LoginState = true;
                    this.$router.push("/");
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        },
    }
})