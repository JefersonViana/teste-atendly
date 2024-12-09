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