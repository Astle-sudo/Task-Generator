<script>
    import '../app.css';
    export let currentTask;
    export let nextTask;
</script>

<div class="text-black font-bold flex flex-row justify-center">
    <h2>Currently working on: 
        <br>
        <input type="checkbox" name="taskCurrent" value="task">
        <label class="current" for="currentTask"> {currentTask}</label><br> 
    </h2> 
    <h2>Up Next: <span>
        <input type="checkbox" name="taskCurrent" value="task">
        <label for="nextTask"> {nextTask}</label><br> 
    </span></h2>
</div>

<style>
    div {
        display: flex;
        justify-content:space-between;
        border: 2px solid black;
        width: 60vw;
        max-width: 100%;
        margin: 0;
        padding: 0 1vw;
    }
    .current {
        font-size: 2em;
    }
    h2 {
        margin: 2vh 1vw;
        padding: 2vh 0vw;
    }
</style>