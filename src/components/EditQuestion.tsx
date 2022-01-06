import {Box, Grid, Paper, Stack, TextField} from "@mui/material";
import CheckBoxField from "./atoms/CheckBoxField";

interface EditQuestionProps {
    id: number;
    register: any;
}

export default function EditQuestion(props: EditQuestionProps) {
    return (
        <Grid component={Paper} margin={2} justifyContent="space-evenly">
            <Box p={4}>
                <TextField
                    id="question-x"
                    label="Question"
                    variant="outlined" fullWidth
                    {...props.register(`questions.${props.id}.title`)}
                />
            </Box>
            <Stack>
                {[0,1,2,3].map((i) => {
                    return <CheckBoxField
                        register={props.register}
                        idAnswer={i}
                        idQuestion={props.id}
                        key={i}
                    />
                }) }
            </Stack>
        </Grid>
    )
}