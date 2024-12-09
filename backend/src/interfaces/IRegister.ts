export interface IRegister {
  id?: number;
  name: string;
  email: string;
  password: string;
  dataValues?: {
    id: number;
    name: string;
    email: string;
    password: string;
  };
}

export interface ILogin {
  id?: number;
  email: string;
  password: string;
  dataValues?: {
    id: number;
    email: string;
    password: string;
  };
}