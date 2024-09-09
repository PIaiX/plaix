import axios from "axios";
import { ClientJS } from "clientjs";

const createCallback = async (data) => {
  const client = new ClientJS();

  const language = client.getLanguage();

  const DEVICE = {
    brand: client.getBrowser() ?? "",
    osName: client.getOS() ?? "",
    osVersion: client.getOSVersion() ?? "",
    language: language ?? "ru_RU",
  };

  const response = await axios.postForm(
    "https://api.telegram.org/bot7282317126:AAGjagjtqU4pfKJm6jC5hBfZXuEorrHE5o0/sendMessage",
    {
      chat_id: "-1001846556129",
      text: `Имя: ${data.name}\nНомер телефона: ${data.phone}\nИнформация: ${DEVICE.brand} ${DEVICE.osName} ${DEVICE.osVersion} ${DEVICE.language}`,
    }
  );
  return response?.data;
};

export { createCallback };
