import { apiRoutes } from "../config/api";
import { $api } from "./index";

const createCallback = async data => {
    const response = await $api.postForm(apiRoutes.TASK, data);
    return response?.data;
};

export { createCallback };