import {Button, Container, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import {useState} from "react";
import QuestionCard from "../components/QuestionCard";
import Quiz from "../types/Quiz";

interface PlayTemplateProps {
    pseudo: string;
    quiz: Quiz;
}

export default function PlayTemplate(props:PlayTemplateProps) {
    const { register, getValues } = useForm();
    const [scoreMode, setScoreMode] = useState(false);
    const score = Array(props.quiz.questions.length).fill(false);
    const [scoreToDisplay, setScoreToDisplay] = useState<string>("");

    function updateScore(idQuestion:number, isCorrect: boolean) {
        score[idQuestion] = isCorrect;
        const scoreTypeInt: number[] = score.map(x => x ? 1 : 0);
        setScoreToDisplay(`Score : ${scoreTypeInt.reduce((acc, e) => acc + e)}/${score.length}`);
    }

    const listQuestions = props.quiz.questions?.map((question, i) => {
        return <QuestionCard
            key={i}
            idQuestion={i}
            question={question}
            register={register}
            scoreMode={scoreMode}
            valuesForm={getValues}
            updateScore={updateScore}
        />
    });

    const calculusScore = () => {
        setScoreMode(true);
    }

    return (
        <Container>
        <Typography variant="h3" component="div" align="center">
            Bonne chance {props.pseudo}
        </Typography>
        <Typography variant="h3" component="div" align="center">
            Quiz : {props.quiz.title}
        </Typography>
        {listQuestions}
        {!scoreMode ? <Button variant="contained" onClick={calculusScore}>Voir mon score</Button> : ""}
            {scoreToDisplay}
    </Container>
    )
}