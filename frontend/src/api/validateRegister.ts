export type ResponseFields = {
  type: string,
  message: string
}

const validFields = (name: string, email: string, password: string, confirmPassword: string): ResponseFields => {
  const response = { type: '', message: '' };

  if (password !== confirmPassword) {
    response.type = 'error';
    response.message = 'Senhas não conferem';
    return response;
  }
  if(password.length < 6) {
    response.type = 'error';
    response.message = 'Senha deve ter no mínimo 6 caracteres';
    return response;
  }
  if(name.length <= 3) {
    response.type = 'error';
    response.message = 'Nome deve ter no mínimo 3 caracteres';
    return response;
  }
  const regex = /\S+@\S+\.\S+/;
  if(!regex.test(email) || !email.includes('.com')) {
    response.type = 'error';
    response.message = 'Email inválido';
    return response;
  }
  response.type = 'success';
  response.message = 'Dados válidos';
  return response;
};

export default {
  validFields,
};