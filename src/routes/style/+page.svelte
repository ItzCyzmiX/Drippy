<script>
    import Modal from "$lib/Modal.svelte";
    import {
        blur,
        crossfade,
        draw,
        fade,
        fly,
        scale,
        slide,
    } from "svelte/transition";
    let files;
    let file;
    let step = 1;
    let style = "";
    let done = false;

    $: outfit = undefined;
    $: {
        if (files) {
            for (const [key, _file] of Object.entries(files)) {
                file = _file;
                step = 2;
            }
        }
        if (done) {
            step = 3;
        }
        if (step === 3) {
            Getoutfit();
        }
    }
    async function Getoutfit() {
        const formData = new FormData();
        let imgUrl = "";
        formData.append("key", "0cb66f54254213228eadef681eb41af3");
        formData.append("image", file);

        const res = await fetch("https://api.imgbb.com/1/upload", {
            method: "POST",
            body: formData,
        });
        const data = await res.json();

        if (data.success) {
            imgUrl = data.data.url; // Get the public URL of the image
        } else {
            console.error("Error uploading image:", data.error.message);
        }

        const response = await fetch("/style", {
            method: "POST",
            body: JSON.stringify({ url: imgUrl, style }),
            headers: {
                "content-type": "application/json",
            },
        });

        outfit = await response.json();
    }
</script>

<div
    class="relative overflow-hidden flex items-center justify-center text-xl md:text-3xl capitalize font-bold z-50 mt-52"
>
    {#if step === 3 && !outfit}
        <h1 class="text-white">{`Generating...`}</h1>
    {:else if step === 3 && outfit}
        <h1 class="text-white">{`Done!`}</h1>
    {:else}
        <h1 class="text-white">{`Step ${step}`}</h1>
    {/if}
</div>
<br />
<div
    class="absolute w-full h-full -mt-52 min-h-[700px] overflow-hidden flex items-center justify-center"
    in:slide
>
    {#if step === 1}
        <div
            class="flex items-center justify-center w-[400px] shadow-xl shadow-slate-900"
        >
            <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border border-white rounded-lg cursor-pointer bg-transparent"
            >
                <div
                    class="flex flex-col items-center justify-center pt-5 pb-6"
                >
                    <svg
                        class="w-8 h-8 mb-4 text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or drag
                        and drop your image
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG or JPG
                    </p>
                </div>
                <input
                    id="dropzone-file"
                    type="file"
                    class="hidden"
                    bind:files
                />
            </label>
        </div>
    {/if}
    {#if step == 2}
        <input
            class="border-1 block h-12 -mt-52 w-324 rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)] bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none pl-22 pr-22"
            placeholder="Enter Your Outfit Style"
            bind:value={style}
        />
        <button
            class="absolute w-[300px] h-fit p-5 text-center bg-transparent border border-white rounded-3xl transition-all ease-in-out hover:shadow-md hover:scale-105 hover:shadow-white"
            on:click={() => {
                done = true;
            }}
        >
            <div
                class="group relative grid overflow-hidden rounded-xl transition-colors duration-200"
            >
                <div class="space-y-2 z-10">
                    <h3 class="text-lg font-semibold text-neutral-200">
                        Style Me!
                    </h3>
                </div>
            </div>
        </button>
    {/if}
    {#if outfit === "error"}
        <Modal />
    {:else}
        <code
            in:slide
            class="h-fit w-fit text-white rounded-xl border border-white text-sm p-4 shadow-xl shadow-slate-900 {outfit
                ? ''
                : 'hidden'}">{outfit}</code
        >
    {/if}
</div>
