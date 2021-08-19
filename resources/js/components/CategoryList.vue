<template>
    <div class="category">
        <ul class="list-group">

            <li v-for="n in 9" :key="n" class="list-group-item d-flex">
               <img src="../assets/apple.jpg" alt="Apple" width="30" height="30">
               <span class="px-2">Asbeza asbeza</span>
               <span class="ms-auto"><i class="fas fa-chevron-right"></i></span>
            </li>

        </ul>
    </div>
</template>
<style scoped>
.list-group{
    padding: 0;
    margin: 0;
}
</style>
