import api from "../api";

export interface UserToAuthenticate{
  id: string;
  email: string;
  name: string;
  cellphone: string;
}

export interface CreateUserProps {
  name: string,
  email: string,
  cpf: string,
  password?: string,
}
export interface ResponseProfile {
  user: UpdateUserProps
}
export interface UpdateUserProps {
  id?: string,
	name: string,
	email: string,
	cpf?: string,
	cellphone?: string,
	address?: string,
	address_number?: number,
	address_zipcode?: string,
	address_complement?: string,
	birthday?: string,
}

export async function GetProfileService(): Promise<ResponseProfile>{
  const response = await api.get<ResponseProfile>('profile');
  
  return response.data
}

export async function UpdateAccountService(data: UpdateUserProps): Promise<void>{
 try {
  // await api.put('users', {
  //   ...data,
  // });
  console.log("data",data)
 } catch (error) {
  console.log(error);
 }
}

export async function CreateAccountService(data: CreateUserProps): Promise<void>{
  const response = await api.post('users', {
   ...data,
  });
  
  return response.data;
}
