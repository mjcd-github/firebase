<template>
  <div class="about">
    <h1>Esta es una vista protegida</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import {signOut,auth} from '@/auth'
import {useRouter} from 'vue-router'
export default {
  //setup -> created -> mounted
  setup(){
    const router = useRouter()
    const logout = async () => {
      try {
        await signOut(auth)
        router.push('/')
      } catch (error) {
        console.error('Error al cerrar sesion',error)
      }
    } 
    return {logout}
  }
}
</script>
