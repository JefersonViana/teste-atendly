<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify';
import { useAuthStore } from '@/stores/auth';
import 'vue3-toastify/dist/index.css';
import validLogin from '@/utils/validLogin';
import axiosService from '@/api/axiosService';

const email = ref('jefersonv28@gmail.com')
const password = ref('123456')
const router = useRouter();
const authStore = useAuthStore();

const handleSubmit = async () => {
  const validFields = validLogin.validLogin(email.value, password.value)

  if(validFields.type === 'error') {
    toast.error(validFields.message)
    return
  }
  const id = toast.loading('Carregando...')

  const response = await axiosService.login(email.value, password.value);

  if(response.type === 'error') {
    setTimeout(() => {
      toast.update(id, {
      render: response.message,
      type: 'error',
      isLoading: false,
      autoClose: 2000,
    })
    }, 2000)
    return
  }
  authStore.setToken(response.token);
  if(response.type === 'success') {
    setTimeout(() => {
      toast.update(id, {
        render: response.message,
        type: 'success',
        isLoading: false,
        autoClose: 2000,
      })
    }, 2000)
  }
  router.push('/profile')
}

const handleInputs = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.name === 'email') {
    email.value = target.value
  } else if (target.name === 'password') {
    password.value = target.value
  }
}
</script>

<template>
  <section class="login-container">
    <h1>Login</h1>

    <form @submit.prevent="handleSubmit" class="login-form">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        v-model="email"
        @input="handleInputs"
        placeholder="Digite seu email"
        required
      />

      <label for="password">Senha</label>
      <input
        type="password"
        id="password"
        v-model="password"
        @input="handleInputs"
        placeholder="Digite sua senha"
        required
      />
      <button type="submit">Entrar</button>
    </form>

    <p>
      Não tem uma conta? <RouterLink to="/register">Cadastre-se</RouterLink>
    </p>
  </section>
</template>


<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
}

label {
  font-weight: bold;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

button {
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

p {
  margin-top: 1rem;
  font-size: 0.9rem;
}
</style>