import axios from "axios";
import { environment } from "@config";

/**
 * backendAxios
 *
 * Feature:
 * - Provides an axios instance with baseURL set to apiKey provided by environment.
 */
export const backendAxios = axios.create({ baseURL: environment.apiKey });
