import { api } from "..";

export const getForm = (id) => api.get("/forms/:id".replace(":id", id)).then((res) => res.data);
