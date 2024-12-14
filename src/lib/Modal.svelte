<div
    id="popup-modal"
    tabindex="-1"
    class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
>
    <div class="relative p-4 w-full max-w-md max-h-full">
        <div
            class="relative border border-white rounded-lg shadow-xl shadow-slate-900 shadow bg-transparent"
        >
            <div class="p-4 md:p-5 text-center">
                <svg
                    class="mx-auto mb-4 text-red-500 w-12 h-12"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                </svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500">
                    An error has occured. Please try a different image
                    (preferably a smaller one in size)
                </h3>
                <button
                    href="/style"
                    data-modal-hide="popup-modal"
                    type="button"
                    class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border-2 border-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:text-gray-400 dark:border-gray-600 hover:text-white hover:shadow-sm hover:shadow-white border-white transition-all ease-in"
                    on:click={() => location.reload()}
                >
                    Retry</button
                >
            </div>
        </div>
    </div>
</div>
