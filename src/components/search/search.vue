<template>
  <input type="text" @input="change()" v-model="text"/>
</template>

<script type="text/ecmascript-6">
  export default{
      data(){
          return{
              text:''
          }
      },
      methods:{
          change(){
              console.log(this.text)
          }
      }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
