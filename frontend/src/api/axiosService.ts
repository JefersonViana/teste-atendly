import axios from 'axios';

const URL_REGISTER = 'http://localhost:3001/api/register';
const URL_LOGIN = 'http://localhost:3001/api/login';

const register = async (name: string, email: string, password: string) => {

  const response = await axios.post(URL_REGISTER, {
    name,
    email,
    password,
  }).then((data) => {
    if(data.status !== 200) {
      return {
        type: 'error',
        message: 'Erro ao cadastrar usuário',
      }
    } else {
      return {
        type: 'success',
        message: 'Usuário cadastrado com sucesso',
      }
    }
  }).catch((error) => {
    if(error.response.data.message === 'User already exists') {
      console.log('ERROR: ', error.response.data.message);
      return {
        type: 'error',
        message: 'Usuário já existe',
      }
    }
  });
  return response || { type: 'error', message: 'Erro ao cadastrar usuário' };
};


const login = async (email: string, password: string) => {
  const response = await axios.post(URL_LOGIN, {
    email,
    password,
  }).then((data) => {
    if(data.status !== 200) {
      return {
        type: 'error',
        message: 'Email ou senha inválidos',
        token: data.data.token,
      }
    } else {
      return {
        type: 'success',
        message: 'Usuário logado com sucesso',
        token: data.data.token,
      }
    }
  }).catch((error) => {
    console.log('ERROR: ', error.response.data.message);
  });
  return response || { type: 'error', message: 'Email ou senha inválidos', token: '' };
};

export default {
  login,
  register,
}