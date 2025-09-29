import { api } from "..";

export const getForms = (id) => api.get("/forms/:id".replace(":id", id)).then(res => res.date);
