import {
    CircularProgress
} from "@mui/material";
import Quizzes from "../requestApi/quizzes";
import useSWR from 'swr';
import HomeTemplate from "../templates/HomeTemplate";

export default function Home() {
    const { data, error } = useSWR('quizzes', () => Quizzes.getAll())
    if (!data) return <CircularProgress/>;
    if (error) return "Impossible de charger les quiz";
  return (
      <HomeTemplate quizzes={data}/>
  )
}