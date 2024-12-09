<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import axiosService from '@/api/axiosService';
import validateRegister from '@/api/validateRegister';

const name = ref<string>('');
const email = ref<string>('');
const password = ref<string>('');
const confirmPassword = ref<string>('');

const router = useRouter();

const handleSubmit = async () => {
  const response = validateRegister.validFields(name.value, email.value, password.value, confirmPassword.value);
  if (response.type === 'error') {
    toast.error(response.message);
    return;
  }

  const responseFetch = await axiosService.register(name.value, email.value, password.value);
  if (responseFetch.type === 'error') {
    toast.error(responseFetch.message);
    return;
  } else {
    console.log(responseFetch);
    toast.success(responseFetch.message);
  }

  setTimeout(() => {
    router.push('/');
  }, 2000);
};

const handleInputs = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.name === 'name') {
    name.value = target.value;
  } else if (target.name === 'email') {
    email.value = target.value;
  } else if (target.name === 'password') {
    password.value = target.value;
  } else if (target.name === 'confirmPassword') {
    confirmPassword.value = target.value;
  }
};
</script>

<template>
  <section class="register-container">
    <h1>Cadastro</h1>

    <form @submit.prevent="handleSubmit" class="register-form">
      <label for="name">Nome</label>
      <input
        type="text"
        id="name"
        v-model="name"
        @input="handleInputs"
        placeholder="Digite seu nome"
        required
      />

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

      <label for="confirmPassword">Confirme sua senha</label>
      <input
        type="password"
        id="confirmPassword"
        v-model="confirmPassword"
        @input="handleInputs"
        placeholder="Confirme sua senha"
        required
      />
      <button type="submit">Cadastrar</button>
    </form>

    <p>
      Já tem uma conta? <RouterLink to="/">Faça login</RouterLink>
    </p>
  </section>
</template>

<style scoped>
.register-container {
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

.register-form {
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