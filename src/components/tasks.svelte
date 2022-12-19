<script>
    import '../app.css';
    import {taskList} from '../store';
    import {doneList} from '../store';
    export let task;

    function removeItem () {
        $taskList = $taskList.filter(function (item) {
            return item.title !== task; 
        });
    }

    function handleClick (event) {
        if (event.target.checked) {
            $doneList = [...$doneList,task];
            removeItem ()
        }
    }

    function doNow () {
       for (let i = 0; i <= $taskList.length; i++) {
        if ($taskList[i].title == task) {
            let newTask = $taskList[i];
            removeItem ();
            $taskList.unshift(newTask);
        }
       }
    }

</script>


<div class="flex flex-row justify-around">
    <input type="checkbox" on:click={handleClick}>
    <label class="font-800"  for="tasks"> {task}</label>  
    <button class="font-extrabold" on:click={doNow}>Do Now</button> 
    <button class="font-extrabold" on:click={removeItem}>Delete</button>
</div>

<style>
    div {
        width: 35vw;
        color: white;
    }
    button {
        scale: 0.8;
    }
</style>