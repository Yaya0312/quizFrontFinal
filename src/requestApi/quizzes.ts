import axios from "axios";
import { BASE_URL } from "./config";
import Quiz from "../types/Quiz";
import {Guid} from "../types/Guid";

const endpoint = "Quizzes";

export default class Quizzes {
    static async getAll() {
        return await axios.get<Quiz[]>(`${BASE_URL}/${endpoint}`)
            .then(response => response.data)
    }

    static async getById(id: Guid, password:string) {
        return await axios.get<Quiz>(`${BASE_URL}/${endpoint}/${id}?password=${password}`)
            .then(response => response.data)
    }

    static async deleteById(id: Guid, password: string) {
        return await axios.delete(`${BASE_URL}/${endpoint}/${id}?password=${password}`)
    }

    static async update(id:Guid, content: Quiz, password: string) {
        return await axios.put<Quiz>(`${BASE_URL}/${endpoint}/${id}?password=${password}`, content);
    }

    static async create(content: Quiz) {
        return await axios.post<Quiz>(`${BASE_URL}/${endpoint}`, content);
    }
}