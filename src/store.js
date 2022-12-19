import { writable } from "svelte/store";

let formVisible = false;
let formsVisible = writable(1);
let taskList = writable([]);
let doneList = writable([]);
formsVisible.set(formVisible);

export {formsVisible};
export {taskList};
export {doneList};
export class Task {
    constructor(title, startDate, endDate) {
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
