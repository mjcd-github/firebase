<script>
import { signInWithEmailAndPassword,auth } from '@/auth'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async signIn() {
      try {
        const {email, password} = this
        //const email = this.email
        //const password = this.password
        const {user} = await signInWithEmailAndPassword(auth,email,password)
        alert('usuario logueado')
        console.log('usuario logueado',user)
      } catch (error) {
        console.error('Error en las credenciales',error)
      }
    }
  }
}
</script>

<template>
  <div>
    <h1>Iniciar Sesión</h1>
    <input type="text" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signIn">Ingresar</button>
  </div>
</template>
