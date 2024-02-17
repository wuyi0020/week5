<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h3 class="text-center">登入</h3>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="login">
                            <div class="mb-3">
                                <label for="username" class="form-label">使用者名稱：</label>
                                <input type="text" class="form-control" v-model="user.username" id="username" name="username" required />
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">密碼：</label>
                                <input type="password" class="form-control" name="password" v-model="user.password" autocomplete="current-password" />
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary">登入</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "LoginView",
    components: {},
    data() {
        return {
            user: {
                username: "",
                password: "",
            },
        };
    },
    methods: {
        login() {
            const api = "https://vue3-course-api.hexschool.io/v2/admin/signin";
            axios
                .post(api, this.user)
                .then((response) => {
                    const { token, expired } = response.data;
                    document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`;
                    this.$router.push("/");
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });
        },
    },
};
</script>
