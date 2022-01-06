import {SubmitHandler, useForm} from "react-hook-form";
import Quiz from "../types/Quiz";
import {Button, ButtonGroup, Container} from "@mui/material";
import CardQuizInfoEditable from "../components/CardQuizInfoEditable";
import EditQuestion from "../components/EditQuestion";
import Quizzes from "../requestApi/quizzes";
import {useState} from "react";

interface EditQuizTemplateProps {
    id?: string;
    quiz?: Quiz;
    mode: "ADD" | "EDIT";
    password?: string;
}

export default function EditQuizTemplate(props: EditQuizTemplateProps) {
    const { register, handleSubmit} = useForm<Quiz>({defaultValues: props.quiz});
    const [questions, setQuestion] = useState([<EditQuestion register={register} id={0} key={0} />]);
    const onSubmit: SubmitHandler<Quiz> = data => {
        console.log(data);
        props.mode == "ADD" ? Quizzes.create(data) : Quizzes.update(props.id, data, props.password);
    };
    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)} >
                <CardQuizInfoEditable register={register} />
                {questions}
                <ButtonGroup disableElevation variant="contained">
                    <Button color="secondary" onClick={() => setQuestion([...questions,
                        <EditQuestion register={register} id={questions.length} key={questions.length} />])}>
                        Ajouter une question
                    </Button>
                    <Button color="success" type="submit">Valider les modifications</Button>
                </ButtonGroup>
            </form>
        </Container>
    )
}