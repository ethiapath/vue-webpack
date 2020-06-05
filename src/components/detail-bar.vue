<template>
    <div class="detail-container">
        <section class="device source">source</section>
        <section class="device effect">effect</section>
        <section class="device effect">effect</section>
    </div> 
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'detail-bar',
    data: () => ({
        devices: [
            {
                type: 'source',
                name: 'synth'
            },
            {
                type: 'effect',
                name: 'delay'
            },
            {
                type: 'effect',
                name: 'eq'
            },
        ]
    })
})
</script>

<style lang="css" scoped>
.detail-container {
    display: flex;
    flex-direction: row;
}
.device {
    border: 1px solid black;
    height: 100px;
    width: 60px;
}
</style>