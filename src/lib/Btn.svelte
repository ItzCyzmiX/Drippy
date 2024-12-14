<script>
    export let text, link;
    import {
        blur,
        crossfade,
        draw,
        fade,
        fly,
        scale,
        slide,
    } from "svelte/transition";
</script>

<a
    href={link}
    class="absolute w-[200px] h-fit p-5 text-center bg-transparent border border-white rounded-3xl transition-all ease-in-out hover:shadow-md hover:scale-105 hover:shadow-white"
    in:scale
>
    <div
        class="group relative grid overflow-hidden rounded-xl transition-colors duration-200"
    >
        <div class="space-y-2 z-10">
            <h3 class="text-xl font-semibold text-neutral-200">{text}</h3>
        </div>
    </div>
</a>
