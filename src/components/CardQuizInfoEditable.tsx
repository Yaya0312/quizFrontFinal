import {Checkbox, FormControlLabel, Grid, Paper, Switch, TextField} from "@mui/material";
import Quiz from "../types/Quiz";
import {useEffect} from "react";

interface TitleEditQuestionProps {
    register: any;
}

export default function CardQuizInfoEditable(props:TitleEditQuestionProps) {
    return (
        <Grid container component={Paper} justifyContent="space-evenly" margin={2}>
            <TextField
                id="title"
                label="Titre"
                variant="outlined"
                margin="normal"
                {...props.register('title')}
            />
            <TextField
                id="password"
                label="Mot de passe"
                variant="outlined"
                margin="normal"
                {...props.register('password')}
            />
            <FormControlLabel control={<Switch {...props.register('isPublished')} />} label="Publier" />
        </Grid>
    )
}
