<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const user = ref<{ name: string; email: string } | null>(null);
const errorMessage = ref('');

const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('auth_token');
  return token ? true : false;
};

const fetchUserProfile = async () => {
  if (!isAuthenticated()) {
    errorMessage.value = 'Você precisa estar logado para acessar essa página!';
    return;
  }

  // fetch {}
  console.log('fetching user profile...');
  const userStorage = JSON.parse(localStorage.getItem('auth_token') || '{}');
  console.log('user:', user);
  user.value = {
    name: userStorage.password,
    email: userStorage.email,
  };
};

const router = useRouter();
onMounted(() => {
  if (!isAuthenticated()) {
    router.push('/');
  } else {
    fetchUserProfile();
  }
});

const logout = () => {
  localStorage.removeItem('auth_token');
  router.push('/');
};
</script>

<template>
  <section class="profile-container">
    <h1>Perfil</h1>

    <div v-if="user">
      <p><strong>Nome:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
    </div>

    <div v-if="errorMessage" class="error-message">
      <p>{{ errorMessage }}</p>
    </div>

    <button @click="logout">Sair</button>
  </section>
</template>

<style scoped>
.profile-container {
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

button {
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #d93633;
}

.error-message {
  color: red;
  margin-top: 1rem;
}
</style>
