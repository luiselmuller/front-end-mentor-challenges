<script>
    let keys = ["7", "8", "9", "DEL",
                "4", "5", "6", "+",
                "1", "2", "3", "-",
                ".", "0", "/", "x"];

    let theme = 1;
    function handleThemeToggle(t) {
        // Update theme store
        theme = t;
    }
</script>

<!-- Main calculator container -->
<!-- TODO: Make theme switching work between 3 themes (could use stores to then pick which color to use
    inside of the class, picking the tailwind color class and changing the prefix "f, s, t" to pick between
    the themes) -->
<main class="h-screen w-screen bg-f-main flex justify-center items-center font-spartan font-bold text-white">
    <!-- Calculator body -->
    <article class="border-2 h-4/5 w-full m-2 min-w-[300px] max-w-[525px]">
        <!-- Upper part of the calculator (with the theme switcher) -->
        <div class="w-full h-20 py-2 flex justify-evenly items-center">
            <h2 class="text-3xl">calc</h2>
            <!-- Container to fill space between the items also contains the label for the toggle -->
            <div class="w-full text-right text-xs tracking-widest mr-[24px] font-semibold">THEME</div>
            <!-- Theme switcher -->
            <div class="-translate-y-[1px] flex flex-col justify-start items-center w-fit h-full">
                <div class="flex justify-center gap-4 items-center text-sm font-semibold">
                    <h2>1</h2>
                    <h2>2</h2>
                    <h2>3</h2>
                </div>

                <!-- Toggle -->
                <div class="w-[72px] h-[26px] bg-f-toggle rounded-full flex justify-center items-center hover:cursor-pointer">
                    <!-- Theme One -->
                    <button class="h-full w-full rounded-l-full relative" 
                        on:click={() => handleThemeToggle(1)}>
                    </button>
                    <!-- Theme Two -->
                    <button class="h-full w-full relative" 
                        on:click={() => handleThemeToggle(2)}>
                    </button>
                    <!-- Theme Three -->
                    <button class="h-full w-full rounded-r-full relative" 
                        on:click={() => handleThemeToggle(3)}>
                    </button>

                    <!-- Theme key -->
                    <div class="bg-f-toggle-key h-[17px] w-[17px] m-[5px] rounded-full absolute {theme === 2 ? '' : 
                        theme === 3 ? 'translate-x-[23px]' : '-translate-x-[23px]'} transition-transform duration-200"></div>
                </div>
            </div>
        </div>

        <!-- Calculator screen -->
        <div class="w-full h-[140px] bg-f-screen rounded-xl mt-1.5">

        </div>

        <!-- Calculator keypad -->
        <div class="w-full h-max bg-f-toggle rounded-xl mt-6 p-6 flex justify-around py-8 gap-6 items-center flex-wrap">
            {#each keys as key(key)}
                <button type="button" class="w-[100px] h-16 bg-f-key rounded-xl text-[32px] text-f-toggle">
                    {key}
                </button>
                <!-- Key shadow -->
                <!-- <div class="bg-f-key-shadow w-[100px] h-16 -translate-y-10 rounded-xl"></div> -->
                
            {/each}
        </div>

    </article>
</main>