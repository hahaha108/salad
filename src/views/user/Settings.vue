<template>
    <div class="settings">
        <div class="topme">
            <TopMenu choiceIndex="1" />
        </div>
    </div>
</template>

<script>
    import TopMenu from '@/components/TopMenu.vue'
    // import * as api from '../api'
    export default {
        name: "Settings",
        components: {
            TopMenu,
        }
    }
</script>

<style scoped>

</style>