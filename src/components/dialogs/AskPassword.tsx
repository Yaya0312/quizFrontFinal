import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import {useForm} from "react-hook-form";

interface AskPasswordProps {
    open: boolean;
    handler: any;
}

export default function AskPassword(props:AskPasswordProps) {
    const { register, watch } = useForm();
    const {password} = watch();
    return (
        <Dialog open={props.open} >
            <DialogTitle>Authentification</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Veuillez entrez le mot de passe
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Mot de passe"
                    type="password"
                    fullWidth
                    variant="standard"
                    {...register('password')}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.handler(password)}>Valider</Button>
            </DialogActions>
        </Dialog>
    )
}