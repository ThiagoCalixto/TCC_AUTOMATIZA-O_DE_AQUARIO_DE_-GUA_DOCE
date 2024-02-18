import api from "../api";

export interface CreatePetProps {
	name: string,
	ph: string,
	ideal_light?: string,
	species?: string,
	description?: string,
	temperature?: number,
}

export interface UpdatePetProps {
  id?: string,
	name: string,
	ph: string,
	ideal_light?: string,
	species?: string,
	description?: string,
	temperature?: number,
}

export async function GetPetService(id:string): Promise<UpdatePetProps>{
  const response = await api.get<UpdatePetProps>(`pets/${id}`);
  
  return response.data
}
export async function FetchPetsService(page:number): Promise<UpdatePetProps>{
  const response = await api.get<UpdatePetProps>(`pets/?page=${page}`);
  
  return response.data
}

export async function CreatePetService(data: CreatePetProps): Promise<void>{
  const response = await api.post('pets', {
   ...data,
  });
  
  return response.data;
}
