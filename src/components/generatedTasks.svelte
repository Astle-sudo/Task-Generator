<script>
    import '/src/app.css';
    import {taskList} from '../store';
    import {generatedBox} from '../store'

    const close = () => $generatedBox = false;

    function loopFunction () {
        let index = Math.floor(Math.random() * $taskList.length);
        if (!usedIndex.includes(index)) {
            generatedTasks.push ($taskList[index]);
            usedIndex.push(index);
        }
        else {loopFunction()};
    }
    let [generatedTasks,usedIndex] = [[],[]];

    $: {
        if ($taskList.length == 0) {
            generatedTasks.push("No Task");
        }
        else if ($taskList.length < 5) {
            generatedTasks = [...$taskList];
        }
        else if ($taskList.length > 5)  {
            generatedTasks = [];
            for (let i = 0; i < 5; i++) {
                loopFunction();
            }
            usedIndex = [];
        }
    }

</script>

<div class="generatedTasks">
    <h1>
        Tasks for Today <div class="close" on:mousedown={close}></div>
    </h1>
    <ul>
        {#each generatedTasks as task}
            <li class="px-2 font-bold">{task}</li> 
        {/each}
    </ul>
</div>

<style>
    .generatedTasks {
        margin: auto;
        min-height: 15em;
        height: fit-content;
        width: fit-content;
        min-width: 22em;
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