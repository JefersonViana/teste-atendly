import axios from 'axios';

const URL_REGISTER = 'http://localhost:3001/api/register';

const register = async (name: string, email: string, password: string) => {

  const response = await axios.post(URL_REGISTER, {
    name,
    email,
    password,
  }).then((date) => {
    if(date.status !== 200) {
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

export default {
  register,
}