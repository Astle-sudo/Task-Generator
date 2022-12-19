<script>
    import '../app.css';
    import {Task} from '../store';
    import {formsVisible} from '../store';
    import {taskList} from '../store';
    
    let type1,type2 = 'text';
    const change1 = () => type1 = 'date';
    const change2 = () => type2 = 'date';
    const change1back = () => type1 = 'text';
    const change2back = () => type2 = 'text';

    const submit = (event) => {
        let data = new FormData (event.target);
        $taskList = [...$taskList, new Task (
            data.get('title'),
            data.get('startDate'),
            data.get('endDate')
        )]
        $formsVisible = false;
    }
    
</script>

<div class="cover"></div>

<form on:submit={submit} onsubmit="return false">

    <h1 class="text-center">Add Task</h1> <br>
    <input type="text" name="title" placeholder="Title"> <br><br>
    <input on:focus={change1} on:focusout={change1back} type={type1} name="startDate" placeholder="Start Date"> <br><br>
    <input on:focus={change2} on:focusout={change2back} type={type2} name="endDate" placeholder="End Date"> <br><br>
    <div class="flex">
        <input class="buttons text-center" type="reset">
        <input class="buttons text-center" type="submit">
    </div>

</form>

<style>
    form {
        scale: 1.1;
        background-color: white;
        position: absolute;
        margin: 10em 35em;
        width: fit-content;
        padding: 1em;
        border: 1px solid grey;
        border-radius: 5px;
        z-index: 1;
    }
    h1 {
        scale: 1.2;
        font-weight: bold;
    }
    input {
        padding: 0.5em;
        border: 2px solid lightgrey;
        border-radius: 10px;
    }
    .buttons {
        color: grey;
        margin: 1%;
        width: 50%;
    }
    .buttons:hover {
        cursor: pointer;
        background-color: grey;
        color: whitesmoke;
    }
    .cover {
        position: absolute;
        opacity: 0.5;
        background-color: black;
        height: 100vh;
        width: 100vw;
        z-index: 0;
    }
</style>