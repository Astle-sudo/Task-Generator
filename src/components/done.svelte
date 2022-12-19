<script>
    import '../app.css';
    import {doneList} from '../store';

    if ($doneList.length >= 4) {
        $doneList.shift();
    }
</script>

<div class="container flex flex-col justify-center">
    <h1 class="done font-bold">
        Completed Tasks
    </h1>
    <div class="tasks flex flex-col justify-evenly mx-1">
        {#each $doneList as item}
            <li class="list-none font-bold">
                <input type="checkbox" checked disabled> {item}
            </li>
        {/each}
    </div>
</div>

<style>
    .container {
        border: 2px solid black;
        padding: 1vh 5vw;
        height: fit-content;
        width: 50vw;
    }
    .done {
        font-size: 1.5em;
        margin: 2vh 0;
    }
    .tasks {
        height: 20vh;
    }
</style>