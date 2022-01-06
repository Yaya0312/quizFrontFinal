import {CircularProgress} from "@mui/material";
import {useLocation, useParams} from "react-router-dom";
import useSWR from "swr";
import Quiz from "../types/Quiz";
import Quizzes from "../requestApi/quizzes";
import {Guid} from "../types/Guid";
import EditQuizTemplate from "../templates/EditQuizTemplate";

interface EditParam {
    id: Guid;
}

export default function EditQuiz() {
    const { id } = useParams<EditParam>();
    const { search } = useLocation();
    const queryParameters = new URLSearchParams(search);
    const password = queryParameters.get("password") || "";
    const mode = id == null ? "ADD" : "EDIT";
    const { data } = useSWR<Quiz>(`/quizzes/${id}`, () => Quizzes.getById(id, password))
    if (!data) return  <CircularProgress/>
    return <EditQuizTemplate quiz={data} mode={mode} id={id} password={password}/>
}