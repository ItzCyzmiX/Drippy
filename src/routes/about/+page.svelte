<script>
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

<div
    class="w-full h-full -mt-10 min-h-[700px] relative overflow-hidden flex items-center justify-center"
    in:slide
>
    <code
        class="text-center text-xl gap-2 h-fit w-[980px] text-white rounded-xl border border-white text-sm p-6 shadow-xl shadow-slate-900"
    >
        This is an outfit recomender made with the help of AI! <br /> It uses the
        llama-3.2-90b-vision-preview LLM model, with the help of the Groq API, to
        generate an outfit based on your style!
    </code>
</div>
