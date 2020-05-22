<template lang="pug">
    div (class="detail-container")
        section (class="device source")
        section (class="device effect")
        section (class="device effect")


</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data: {
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
    }
})
</script>

<style lang="scss" scoped>
.detail-container {
    display: flex;
    flex-direction: row;
}
.device {
    border: 1px solid black;
    height: 100px;
}
</style>