<script>
    import "../app.css";
    import Tabs from "$lib/Tabs.svelte";
    import DotPattern from "$lib/DotPattern.svelte";
</script>

<Tabs />
<div class="absolute top-0 left-0 h-full w-full">
    <DotPattern c={16} r={32} />
    <slot />
</div>

<style>
    :global(body) {
        background-color: #030303;
    }
</style>
