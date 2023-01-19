<script>
    import '/src/app.css';
    import {taskList} from '../store';
    import {seeList} from '../store';
    import Draggable from '../components/Draggable.svelte';

    const close = () => $seeList = false;

    function Removetask () {
        $taskList = $taskList.filter (task => {
            return task != this.getAttribute('name');
        })
    }

</script>

<Draggable>
    <div class="container" draggable="false">
        <h1>
            Task List
            <div class="close" on:mousedown={close}></div>
        </h1>
        <ul>
            {#each $taskList as task}
                <li class="px-2 font-bold">{task}
                    <span class="remove" name={task} on:mousedown={Removetask}>x</span>
                </li> 
            {/each}
        </ul>
    </div>
</Draggable>

<style>
    .container {
        min-height: 22em;
        height: fit-content;
        width: fit-content;
        min-width: 15em;
        border: 1px solid black;
        user-select: none;
    }
    .close {
        background-color: red;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        float: right;
        margin: 0.4em 0.2em 0 0;
    }

    li {
        position: relative;
    }
    .remove {
        visibility:hidden;
        position: absolute;
        height: inherit;
        width: fit-content;
        padding: 0 0.25em 0 0.2em;
        top: 0;
        left: 100%;
        background-color: grey;
        color: whitesmoke;
        font-weight: bold;

    }

    li:hover {
        background-color: lightgrey;
    }

    li:hover span, span:hover {
        visibility: visible;
        cursor: pointer;
    }
    .close:hover {
        cursor: pointer;
    }
    h1 {
        padding: 0 1em;
        background-color: rgb(78, 77, 77);
        color: white;
        font-weight: bold;
    }
</style>