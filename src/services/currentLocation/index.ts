import axios from "axios";

export interface LocationProps {
  ip: string;
  version: string;
  city: string;
  region: string;
  region_code: string;
  country_code: string;
  continent_code: string;
  country_code_iso3: string;
  country_name: string;
  country_capital: string;
  latitude: string;
  longitude: string;
  postal: string;
  timezone: string;
  utc_offset: string;
  country_calling_code: string;
  currency: string;
  currency_name: string;
}

//TODO: Consultar https://ipapi.com/product para o ambiente de produção do app. (assinar licença)
export async function GetCurrentLocation(): Promise<LocationProps> {
  const response = await axios.get<LocationProps>(`https://ipapi.co/json`);
  
  return response.data
}


