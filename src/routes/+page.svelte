<script>
    import Tasks from '../components/tasks.svelte';
    import Nav from '../components/nav.svelte';
    import Done from '../components/done.svelte';
    import Current from '../components/current.svelte';
	import Forms from '../components/forms.svelte';
    import {formsVisible} from '../store';
    import {taskList} from '../store'; 
    import {doneList} from '../store';  

</script>

{#if $formsVisible}
    <Forms/>
{/if}

<div class="container">
    {#if $taskList.length == 0}
        <div class='currentItem'><Current currentTask = {'No Task'} nextTask = {'No Task'}/></div>
    {:else if $taskList.length == 1}
        <div class='currentItem'><Current currentTask = {$taskList[0].title} nextTask = {'No Task'}/></div>
    {:else}
        <div class='currentItem'><Current currentTask = {$taskList[0].title} nextTask = {$taskList[1].title}/></div>
    {/if}
    
    <div class='navItem'><Nav/></div>
    <div class='tasksItem flex flex-col justify-evenly'>
        {#if $taskList.length > 1}
            {#each $taskList.slice(2,$taskList.length) as item}
                <Tasks task = {item.title}/>
            {/each}
        {/if}
    </div>
    <div class='doneItem'><Done/></div>
</div>

<style>
    .container {
        width: fit-content;
        display: grid;
        grid-template-areas: 'current current current current'
                             'nav tasks tasks tasks'
                             'nav tasks tasks tasks'
                             'nav done done done';
    }
    .currentItem {
        grid-area: current;
    }
    .navItem {
        grid-area: nav;
    }
    .doneItem {
        grid-area: done;
    }
    .tasksItem {
        background-color: black;
        width: 50vw;
        height: 48vh;
        grid-area: tasks;
    }
</style>