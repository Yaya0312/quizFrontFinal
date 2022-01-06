import {
    Button,
    CardActions,
    Card,
    CardContent,
    Typography,
    Grid
} from "@mui/material";
import {
    useHistory,
} from "react-router-dom";
import Quiz from "../types/Quiz";
import AskPseudo from "./dialogs/AskPseudo";
import AskPassword from "./dialogs/AskPassword";
import {useState} from "react";

interface CardQuizInfoProps {
    quiz : Quiz;
}


export default function CardQuizInfo(props: CardQuizInfoProps) {
    const history = useHistory();
    const [openPseudoDialog, setOpenPseudoDialog] = useState(false);
    const [openPasswordDialog, setOpenPasswordDialog] = useState(false);

    function sendPseudo(pseudo: string) {
         let url = `play/${props.quiz.id}?pseudo=${pseudo}`;
         history.push(url);
    }

    function sendPassword(password: string) {
         let url = `edit/${props.quiz.id}?password=${password}`;
         history.push(url);
    }
    
    return (
        <Grid>
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.quiz.title}
                </Typography>
            </CardContent>
            <CardActions>
                {(!props.quiz.isPublished) ?
                        <Button size="small" onClick={() => setOpenPasswordDialog(true)}>Editer</Button>
                 :
                    <Button size="small" onClick={() => setOpenPseudoDialog(true)}>Jouer</Button>
                }
            </CardActions>
        </Card>
            <AskPseudo open={openPseudoDialog} handler={sendPseudo}  />
            <AskPassword open={openPasswordDialog} handler={sendPassword}/>
        </Grid>
    )
}