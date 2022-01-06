import {Checkbox, Grid, TextField} from "@mui/material";

interface CheckBoxFieldProps {
    idAnswer: number;
    idQuestion: number;
    register: any;
}


export default function CheckBoxField(props:CheckBoxFieldProps) {
    const base = `questions.${props.idQuestion}.answers.${props.idAnswer}`;
    return (
        <Grid container margin={2}>
            <Grid item>
                <Checkbox {...props.register(`${base}.isValid`)}/>
            </Grid>
            <Grid item xs={10}>
                <TextField fullWidth {...props.register(`${base}.title`)}/>
            </Grid>
        </Grid>
    )
}