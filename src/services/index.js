import axios from "axios";
import { BASE_URL } from "../config/api";
import { ClientJS } from "clientjs";

const $api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const client = new ClientJS();

const language = client.getLanguage();

const DEVICE = JSON.stringify({
  brand: client.getBrowser() ?? "",
  osName: client.getOS() ?? "",
  osVersion: client.getOSVersion() ?? "",
  language: language ?? "ru_RU",
});

$api.interceptors.request.use(
  async (config) => {
    config.headers.device = DEVICE;
    return config;
  },
  (error) => Promise.reject(error)
);

export { $api };
