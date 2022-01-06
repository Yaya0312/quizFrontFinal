import {Box, Button, FormControlLabel, Grid, Paper, Switch, TextField} from "@mui/material";
import {Add} from "@mui/icons-material";
import {Link} from "react-router-dom";
import CardQuizInfo from "../components/CardQuizInfo";
import {useForm} from "react-hook-form";
import Quiz from "../types/Quiz";

interface HomeTemplateProps {
    quizzes: Quiz[];
}

export default function HomeTemplate(props:HomeTemplateProps) {
    const { register, watch } = useForm({defaultValues: { search: "", onlyPublished: false }});
    const { search, onlyPublished } = watch();
    const filterQuiz = (quiz: Quiz) => {
        return !quiz.title.toLowerCase().search(search.toLowerCase()) &&
            (onlyPublished ? !quiz.isPublished : quiz.isPublished)
    };
    return (
        <Grid>
            <Grid container gap={1} direction="column">
                <Grid container component={Paper} padding={2} justifyContent="space-evenly" direction="column" gap={2}>
                    <Grid container gap={2} >
                        <Box flexGrow={1}>
                            <TextField
                                id="outlined-search"
                                label="Rechercher"
                                type="search"
                                fullWidth
                                {...register('search')}
                            />
                        </Box>
                        <FormControlLabel
                            control={<Switch {...register('onlyPublished')}/>}
                            label="Afficher Brouillon"
                        />
                        <Button variant="contained" endIcon={<Add />} >
                            <Link to={"/create"}>
                                Ajouter
                            </Link>
                        </Button>
                    </Grid>
                </Grid>
                <Grid direction="row" container gap={1}>
                    {props.quizzes.filter(filterQuiz).map((quiz, i) =>
                        <CardQuizInfo quiz={quiz} key={i} />
                    )
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}