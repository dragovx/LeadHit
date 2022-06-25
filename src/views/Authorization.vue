<template>
  <div class="row">
    <form class="col s12 valign-wrapper" @submit.prevent="submitHandler">
        <div class="input-field col s4 ">
          <input id="id" type="text" v-model.trim="id">
          <label for="id">{{id.length}}</label>
          <span class="helper-text" v-if="state ? id.length == idlength : state">id сайта должен содержать 24 символа </span>
        </div>
        <div class="col s12">
          <button class="btn col s3 valign-wrapper" type="submit"> Войти </button>
        </div>
        
    </form>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data: ()=> ({
    state: false,
    id: '',
    idlength: 24,
  }),
  methods: {
    submitHandler(){
      if (this.id.length != 24){
        this.state = true
        this.idlength = this.id.length
      } else {
        fetch(" https://track-api.leadhit.io/client/test_auth", {
          method: 'Get',
          headers:{
            'Api-Key' : '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
            'Leadhit-Site-Id' : this.id
          }
        })
        .then(response => response.json())
        .then(response => {
          if (response.message == 'ok') this.$router.push({ path: '/Analytics'})
          localStorage.id = this.id
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
form{
  padding-top: 2rem;
}
</style> 
