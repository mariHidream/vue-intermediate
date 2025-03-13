<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="fa-solid fa-plus addBtn"></i>
        </span>
        <AlertModal v-if="showModal" @close="showModal = false">
            <template v-slot:header> 
                경고 
                <span class="closeModalBtn" @click="showModal = false">
                    <i class="fas fa-times" ></i>
                </span>
            </template>
            <template v-slot:body> 무언가를 입력하세요. </template>
            <template v-slot:footer> copy right </template>
        </AlertModal>
    </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue';

export default {
 data : function(){
    return {
        newTodoItem : "",
        showModal : false
    }
 },
 methods : {
    addTodo : function(){
        if(this.newTodoItem !== ''){
            this.$emit('addTodoeItem',this.newTodoItem)
            this.clearInput();
        }else{
            this.showModal = !this.showModal
        }
    },
    clearInput : function(){
        this.newTodoItem = '';
    }
 },
 components : {
    AlertModal
 }
}                  
</script>

<style>
input:focus{
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input{
    border-style: none;
    font-size: 0.9rem;
}
.addContainer{
    display: block;
    float:right;
    background : linear-gradient(to right, #6478fb, #8763fb);
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn{
    color:white;
    vertical-align: middle;
}
.closeModalBtn{
    color:#42b983;
}
</style>