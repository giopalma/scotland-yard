<script setup>
import {store} from '../store'

function tabHandler(isDetective)
{
    if(store.isDetective != isDetective){
        store.position = 0
    }
    store.isDetective = isDetective
    
}

</script>

<template>
<div class="tabs">
    <div class="tabs-item" @click="tabHandler(false)" :style="{backgroundColor: store.isDetective ? '' : '#242424', borderTopRightRadius: store.isDetective ? '':'20px'}">Mister X</div>
    <div class="tabs-item" @click="tabHandler(true)" :style="{backgroundColor: store.isDetective ? '#213547' : '', borderTopLeftRadius: store.isDetective ? '20px' : ''}">Detective</div>
</div>
</template>

<style scoped>
.tabs{
    display: flex;
    justify-content: space-around;

}
.tabs-item{
    min-width: 0;
    flex: 1 1 0px;
    font-size: large;
    color: white;
    padding: 10px 0;
    cursor: pointer;
}
</style>