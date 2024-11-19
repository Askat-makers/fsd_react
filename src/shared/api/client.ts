import axios from "axios";
import { backendBaseUrl } from "../config";

export const { post } = axios.create({
  baseURL: backendBaseUrl,
});
