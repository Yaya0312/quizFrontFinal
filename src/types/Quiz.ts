import Question from "./Question";
import {Guid} from "./Guid";


export default interface Quiz {
    id: Guid;
    title: string;
    password: string | null;
    isPublished: boolean;
    rating: number;
    questions : Question[] | null;
}