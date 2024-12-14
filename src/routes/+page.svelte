<script>
    import WordsFadeIn from "$lib/WordsFadeIn.svelte";
    import Card from "$lib/Card.svelte";
    import Btn from "$lib/Btn.svelte";
</script>

<div
    class="w-full h-full -mt-10 min-h-[700px] relative overflow-hidden flex items-center justify-center"
>
    <div class="text-xl md:text-3xl mb-[160px] capitalize font-bold z-10">
        <WordsFadeIn words="Let AI Style You" />
    </div>

    <div class="absolute mt-[80px] top-0 left-0 h-full w-full">
        <div
            class="w-full h-full relative overflow-hidden flex items-center justify-center"
        >
            <Card
                title="Step 1"
                desc="Provide the AI with a picture of your closet"
                class="p-10"
            />
            <Card title="Step 2" desc="Chose a outfit style" class="p-10" />
            <Card title="Step 3" desc="Hit Generate!" />
            <div class="absolute mr-48 mt-52">
                <Btn link="/style" text="Try for FREE!" />
            </div>
        </div>
    </div>
</div>
