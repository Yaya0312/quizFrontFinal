import {Checkbox, FormControlLabel, Grid, Paper, Typography} from "@mui/material";
import Question from "../types/Question";
import {useEffect, useState} from "react";

interface QuestionCardProps {
    idQuestion: number;
    question: Question;
    register: any;
    scoreMode: any;
    valuesForm: any;
    updateScore: any;
}

enum StatusColor {
    NOT_DEFINED = "white",
    INCORRECT = "red",
    CORRECT = "green",
}

export default function QuestionCard(props: QuestionCardProps) {
    const [statusColor, setStatusColor] = useState<StatusColor>(StatusColor.NOT_DEFINED);
    useEffect(() => {
        const goodAnswers = props.question.answers;
        const userAnswers = props.valuesForm(`questions.${props.idQuestion}.answers`);
        if (userAnswers && goodAnswers) {
            props.scoreMode ? setStatusColor(StatusColor.CORRECT) : setStatusColor(StatusColor.INCORRECT);
            const result:boolean = goodAnswers.every((goodAnswer,i) => goodAnswer.isValid === userAnswers[i].isValid);
            console.log("result", result);
            result ? setStatusColor(StatusColor.CORRECT) : setStatusColor(StatusColor.INCORRECT);
            props.updateScore(props.idQuestion, result);
        }
    }, [props.scoreMode])

    return (
        <Grid component={Paper} bgcolor={statusColor}>
            <Typography variant="h5" component="div" align="center">
                Question {props.idQuestion}: {props.question.title}
            </Typography>
            <Grid direction="column" margin={2} container>
                {props.question.answers.map((answer, idAnswer) =>
                    <Grid key={idAnswer}>
                    <FormControlLabel
                        control={<Checkbox {...props.register(`questions.${props.idQuestion}.answers.${idAnswer}.isValid`)} />}
                        label={answer.title}
                    />
                    </Grid>
                )}
            </Grid>
        </Grid>
    )
}