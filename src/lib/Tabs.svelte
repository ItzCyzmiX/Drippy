<script lang="ts">
    import { page } from "$app/stores";
    import { Motion } from "svelte-motion";

    $: current = $page.url.pathname;

    let left = 0;
    let width = 0;
    let opacity = 0;
    let ref: any;
    let navs = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Style Me",
            link: "/style",
        },
        {
            name: "About",
            link: "/about",
        },
    ];
    let positionMotion = (node: HTMLElement) => {
        let refNode = () => {
            let mint = node.getBoundingClientRect();
            left = node.offsetLeft;
            width = mint.width;
            opacity = 1;
        };
        node.addEventListener("mouseenter", refNode);
        return {
            destroy() {
                node.removeEventListener("mouseenter", refNode);
            },
        };
    };
</script>

<div class="py-20 w-full bg-transparent">
    <ul
        on:mouseleave={() => {
            width = width;
            left = left;
            opacity = 0;
        }}
        class="relative mx-auto flex w-fit rounded-full border-2 border-black bg-transparent p-1"
    >
        {#each navs as item}
            <li
                use:positionMotion
                class="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base {item.link ===
                current
                    ? 'underline'
                    : ''}"
            >
                <a href={item.link}>{item.name}</a>
            </li>
        {/each}
        <Motion
            animate={{
                left: left,
                width: width,
                opacity: opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
            }}
            let:motion
        >
            <li
                use:motion
                class="absolute z-0 h-7 rounded-full border border-white md:h-12"
            ></li>
        </Motion>
    </ul>
</div>
