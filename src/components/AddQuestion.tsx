import {Fab, Grid} from "@mui/material";

interface AddQuestion {
    data: string;
}

export default function AddQuestion(props: AddQuestion) {
    return (
        <Grid>
            <Fab variant="extended" color="primary" aria-label="add">
                Ajouter une question
            </Fab>
        </Grid>
    )
}