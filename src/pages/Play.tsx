import { useLocation, useParams} from "react-router-dom";
import Quizzes from "../requestApi/quizzes";
import {Guid} from "../types/Guid";
import useSWR from "swr";
import Quiz from "../types/Quiz";
import PlayTemplate from "../templates/PlayTemplate";

interface PlayParams {
    id: Guid;
}

function quizById(id:string) {
    const { data, error } = useSWR<Quiz>(`/quizzes/${id}`, () => Quizzes.getById(id, ""))
    return {
        quiz: data,
        isLoading: !error && !data,
        isError: error
    }
}

export default function Play() {
    const { id } = useParams<PlayParams>();
    const { search } = useLocation();
    const queryParameters = new URLSearchParams(search);
    const pseudo = queryParameters.get("pseudo") || "";
    const { quiz, isLoading, isError } = quizById(id);
    if (isLoading) return "loading";
    if (quiz == null || isError) return "Impossible de charger les données du quiz";

    return (
        <PlayTemplate pseudo={pseudo} quiz={quiz}/>
   )
}