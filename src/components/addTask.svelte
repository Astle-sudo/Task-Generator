<script>
    import '/src/app.css';
    import {taskList} from '../store';
    import {taskBox} from '../store';
    
    function onkeydown (event) {
        if (event.which == 13) {
            $taskList = [...$taskList,task]
            $taskBox = false;
            task = '';
        }
    }

    const close = () => $taskBox = false;

    let task;    
    let borderColor = 'black';
    let backgroundColor = 'rgb(56,56,56)';
    let backgroundColorInput = 'white';
    let color = 'white'
</script>

<div class="main" style="border: 1px solid {borderColor};">
    <h1 class="font-bold" style="background-color: {backgroundColor}; color:{color}">Add Task <div class="close" on:mousedown={close}></div></h1>
    <input placeholder="....." bind:value={task} on:keydown={onkeydown} style="background-color: {backgroundColorInput};">
</div>

<style>
    .main {
        height: 80px;
        width: 400px;
        margin: 4em auto;
    }

    h1 {
        padding: 0em 1em;
    }
    input {
        padding: 0em 1em;
        height: 65%;
        width: 100%;
        outline: none;
    }
    .close {
        background-color: red;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        float: right;
        margin: 0.4em 0 0 0;
    }
    .close:hover {
        cursor: pointer;
    }
</style>

