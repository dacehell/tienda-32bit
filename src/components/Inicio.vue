<template>
    <div>
        <h1 v-text = 'title'></h1>
        <h2 v-text = 'subTitle'></h2>
        
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: mapState (['title', 'subTitle'])
}
</script>


<style scoped>
    h1, h2{
        text-align: center;
    }
</style>