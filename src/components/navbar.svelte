<script>
    import '/src/app.css';
    import {taskBox} from '../store';
    import {seeList} from '../store';
    import {generatedBox} from '../store';

    const showTaskBox = () => $taskBox = true;
    const onseeList = () => $seeList = true;
    const genBox = () => $generatedBox = true;
</script>

<div class="container font-600">
    <button class="A" on:click={showTaskBox}>A
        <span>Add Task</span>
    </button>
    <button class="B" on:click={onseeList}>B
        <span>See Tasks</span>
    </button>
    <button class="C" on:click={genBox}>C
        <span>Generate Tasks</span>
    </button>
</div>

<style>
    div {
        width: fit-content;
        margin: 2em auto;
        border: 1px solid grey;
    }
    button {
        position: relative;
        padding: 0.5em 1em;
    }
    span {
        background-color: rgb(46, 44, 44);   
        color: white;
        width: max-content;
        padding: 0.5em;
        border-radius: 0.5em;
        position: absolute;
        top: 3em;
        overflow-wrap: unset;
        display: none;
        opacity: 0;
        visibility: 0;
    }

    .A span, .B span {
        left: -2em;
    }

    .C span {
        left: 0em;
    }

    .A:hover span, .B:hover span, .C:hover span {
        display: block;
        opacity: 1;
        visibility: 1;
    }
</style>