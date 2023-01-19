<script>
    import Nav from '../components/navbar.svelte'
    import Taskbox from '../components/addTask.svelte'
    import {taskBox} from '../store'; 
    import {seeList} from '../store';
    import {generatedBox} from '../store';
	import Tasklist from '../components/tasklist.svelte';
    import Gtask from '../components/generatedTasks.svelte';

</script>

<Nav />

{#if $generatedBox}
    <Gtask />
{/if}

{#if $taskBox}
    <Taskbox />
{/if}

{#if $seeList}
    <Tasklist />
{/if}
