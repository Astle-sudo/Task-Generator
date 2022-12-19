<script>
    import '../app.css';
    import {formsVisible} from '../store';

    const change = () => $formsVisible = true;
</script>

<div class="text-black font-bold flex flex-col justify-around navBar px-5">
    <a href="/">Today</a>
    <a href="/">Tomorrow</a>
    <a href="/">This Week</a>
    <a href="/">Whenever</a>
    <button on:click={change}>Add Task</button>
</div>

<style>
    button {
        color: grey;
    }
    .navBar {
        height: 80vh;
        padding: 0 2vw;
        width: fit-content;
        border: 2px solid black;
    }
</style>