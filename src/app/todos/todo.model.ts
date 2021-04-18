
import { uniqueId } from 'lodash';

export default class Todo {
    id: string;
    text: string;
    isCompleted: boolean;

    constructor(text: string, isCompleted: boolean = false) {
        this.id = uniqueId();
        this.text = text;
        this.isCompleted = isCompleted;
    }

}