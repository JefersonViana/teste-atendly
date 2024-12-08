<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter();

const handleSubmit = () => {
  console.log('Email:', email.value)
  console.log('Password:', password.value)
  // criando usuáriol fake
  const user = {
    email: email.value,
    password: password.value
  }
  // salvando no localStorage - teste básico
  localStorage.setItem('auth_token', JSON.stringify(user))
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