const validLogin = (email: string, password: string) => {
  const response = { type: '', message: '' };

  const regex = /\S+@\S+\.\S+/;
  if(!regex.test(email) || !email.includes('.com') || password.length < 6) {
    response.type = 'error';
    response.message = 'Email ou senha inválidos';
    return response;
  }
  return { type: 'success', message: 'Dados válidos' };
};

export default {
  validLogin,
};