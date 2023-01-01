import axios from 'axios';


// TROCAR DA PASTA SERVICES PARA PASTA (DESCONHECIDO)
export const api = axios.create({
	baseURL: process.env.NEXT_API_URL,
});