import { writable } from "svelte/store";

let [tb,seelist,generatedbox] = [false, false,false];

let taskBox = writable(1);
let seeList = writable(1);
let generatedBox = writable(1);
let taskList = writable([]);

taskBox.set(tb);
seeList.set(seelist);
generatedBox.set(generatedbox);

export {taskBox};
export {taskList};
export {seeList};
export {generatedBox};
