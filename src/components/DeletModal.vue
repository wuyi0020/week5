<template>
    <div class="modal fade" id="deletModal" tabindex="-1" aria-labelledby="deletModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="deletModalLabel">確定要刪除嗎?</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    刪除後無法復原，請確認是否刪除[<span class="text-danger">{{ item.title }}</span>]
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-danger" @click="delProduct(item.id)">確定</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="module">
import axios from "axios";
//bootstrap
import { Modal } from 'bootstrap'

export default {
    name: "DeletModal",
    props: {
        item: {
            type: Object,
        }
    },
    data() {
        return {
            apiUrl: "https://vue3-course-api.hexschool.io/v2",
            apiPath: "wuyi0020",
            delProductModal: null,
        };
    },
    mounted() {
        this.delProductModal = new Modal(document.getElementById('deletModal'), {
            keyboard: false,
            backdrop: 'static',
        });
    },
    methods: {
        delProduct(id) {
            const url = `${this.apiUrl}/api/${this.apiPath}/admin/product/${id}`;
            axios
                .delete(url)
                .then(() => {
                    this.delProductModal.hide();
                    this.$emit("getcoinData");
                })
                .catch((err) => {
                    alert(err.response.data.message);
                });

        }
    }

}
</script>