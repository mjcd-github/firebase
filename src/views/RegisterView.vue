<script>
import { createUserWithEmailAndPassword,auth } from '@/auth'
export default {
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods: {
    async register(){
      try {
        const userCredentials = await createUserWithEmailAndPassword(auth,this.email,this.password) 
        const user = userCredentials.user
        console.log('usuario creado',user)
      } catch (error) {
        console.error('Error al crear el usuario',error)
      }
    }
  }
}

</script>

<template>
  <div>
    <h1>Registro</h1>
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="register">Registrar</button>
  </div>
</template>

<style scoped>

</style>
