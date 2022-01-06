import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import {useForm} from "react-hook-form";

interface AskPseudoProps {
    open: boolean;
    handler: any;
}

export default function AskPseudo(props:AskPseudoProps) {
    const { register, watch } = useForm();
    const {pseudo} = watch();

    return (
        <Dialog open={props.open} >
            <DialogTitle>Pseudo</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Veuillez entrez votre pseudo
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Pseudo"
                    type="text"
                    fullWidth
                    variant="standard"
                    {...register("pseudo")}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.handler(pseudo)}>Valider</Button>
            </DialogActions>
        </Dialog>
    )
}