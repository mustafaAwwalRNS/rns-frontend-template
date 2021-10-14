import axios from "axios";
import { environment } from "@config";
export const backendAxios = axios.create({ baseURL: environment.apiKey });
