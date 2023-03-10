import { api } from "../../../services"

export const postClient = async (data) => {
    const client = await api.post("/Cliente", data)
    return client.data
}