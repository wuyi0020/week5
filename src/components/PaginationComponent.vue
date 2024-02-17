<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: !page.has_pre }">
                <a class="page-link" href="#" @click="getData(page.current_page - 1)" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <div v-for="item in page.total_pages" :key="'page' + item">
                <li class="page-item" :class="{ active: page.current_page === item }">
                    <a class="page-link" @click="getData(item)" href="#">
                        {{ item }}
                    </a>
                </li>
            </div>
            <li class="page-item" :class="{ disabled: !page.has_next }">
                <a class="page-link" @click="getData(page.current_page + 1)" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "PaginationComponent",
    props: ["page"],
    methods: {
        getData(page) {
            this.$emit("getcoinData", page);
        },
    },
};
</script>