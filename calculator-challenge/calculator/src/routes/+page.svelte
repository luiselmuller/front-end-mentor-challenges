<script lang="ts">
    import CalcBtn from '$lib/components/CalcBtn.svelte';
    import { theme } from '$lib/stores';

    let keys = ["7", "8", "9", "DEL",
                "4", "5", "6", "+",
                "1", "2", "3", "-",
                ".", "0", "/", "x"];

    // Screen
    $: screenText = '399,981';

    function handleThemeToggle(t: number) {
        // Update theme store
        theme.update((n) => n = t);
    }

    // Reactive theme variables
    $: textColor    =   $theme === 2 ? 'text-white' : 
                        $theme === 3 ? 'text-t-secondary' : 'text-white';

    $: specialKeyBg =   $theme === 2 ? 'bg-s-func-key' : 
                        $theme === 3 ? 'bg-t-func-key' : 'bg-f-func-key';

    $: background   =   $theme === 2 ? 'bg-s-key' : 
                        $theme === 3 ? 'bg-t-key' : 'bg-f-key'; 

    $: shadow       =   $theme === 2 ? 'bg-s-key-shadow' : 
                        $theme === 3 ? 'bg-t-key-shadow' : 'bg-f-key-shadow'; 
                          
    $: hoverColor   =   $theme === 2 ? 'bg-s-hover' : 
                        $theme === 3 ? 'bg-t-hover' : 'bg-f-hover';

    $: mainBg   =   $theme === 2 ? 'bg-s-main' : 
                    $theme === 3 ? 'bg-t-main' : 'bg-f-main';

    $: screenBg =   $theme === 2 ? 'bg-s-screen' : 
                    $theme === 3 ? 'bg-t-secondary' : 'bg-f-screen';

    $: mainText =   $theme === 2 ? 'text-s-text' : 
                    $theme === 3 ? 'text-t-text' : 'text-white';

    $: toggle   =   $theme === 2 ? 'bg-s-toggle' :
                    $theme === 3 ? 'bg-t-secondary' : 'bg-f-toggle';
    
    $: toggleKey =  $theme === 2 ? 'bg-s-toggle-key' :
                    $theme === 3 ? 'bg-t-toggle-key' : 'bg-f-toggle-key';

    $: altShadow =  $theme === 2 ? 'bg-s-toggle-shadow' :
                    $theme === 3 ? 'bg-t-toggle-shadow' : 'bg-f-toggle-shadow';
                    
    $: funcShadow   =   $theme === 2 ? 'bg-s-func-key-shadow' :
                        $theme === 3 ? 'bg-t-func-key-shadow' : 'bg-f-func-key-shadow' 

</script>

<!-- Main calculator container -->
<!-- TODO: Make theme switching work between 3 themes (could use stores to then pick which color to use
    inside of the class, picking the tailwind color class and changing the prefix "f, s, t" to pick between
    the themes) -->
<main class="h-screen w-screen flex flex-col justify-center items-center font-spartan font-bold {mainText} {mainBg}
    transition-all duration-200 p-6">
    <!-- Calculator body -->
    <article class="h-screen sm:w-full xxs:w-[360px] w-[300px] m-2 max-w-[550px] ">
        <!-- Upper part of the calculator (with the theme switcher) -->
        <div class="w-full h-20 py-2 flex justify-evenly items-center">
            <h2 class="text-3xl ml-2">calc</h2>
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
                <div class="w-[72px] h-[26px] {toggle} rounded-full flex justify-center items-center hover:cursor-pointer
                    transition-all duration-200">
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
                    <div class="{toggleKey} h-[17px] w-[17px] m-[5px] rounded-full absolute {$theme === 2 ? '' : 
                        $theme === 3 ? 'translate-x-[23px]' : '-translate-x-[23px]'} transition-transform duration-200"></div>
                </div>
            </div>
        </div>

        <!-- Calculator screen 
            TODO: Need to rework this-->
        <div class="w-full h-[130px] {screenBg} rounded-xl mt-1.5 overflow-hidden">
            <h2 class="text-right xxs:text-[54px] text-[40px] px-8 xxs:py-6 py-10">{screenText}</h2>
        </div>

        <!-- Calculator keypad -->
        <div class="w-full h-fit {toggle} rounded-xl mt-6 sm:p-7 p-6 flex justify-center sm:py-8 md:gap-6 gap-4 items-center flex-wrap">
            {#each keys as key(key)}
                <CalcBtn 
                    text={key}
                    background={background}
                    specialKeyBg={specialKeyBg}
                    textColor={$theme === 2 && key != "DEL" ? 'text-s-text' : 
                    $theme === 3 ? 'text-t-text' : 'text-f-text'}
                    shadow={shadow}
                    hoverColor={hoverColor}
                    fontSize={"xxs:text-[40px] text-[32px]"}
                    funcShadow={funcShadow}
                />       
            {/each}
            <!-- Reset and equals buttons -->
            <div class="w-full flex justify-between items-center mt-1 md:px-1 xxs:px-0 px-1">
                <CalcBtn 
                    text={"RESET"}
                    background={specialKeyBg}
                    textColor={"text-white"}
                    shadow={funcShadow}
                    hoverColor={hoverColor}
                    width={"sm:w-[230px] xxs:w-[149px] w-[114px]"}
                />      
                <CalcBtn 
                    text={"="}
                    background={toggleKey}
                    textColor={textColor}
                    shadow={altShadow}
                    hoverColor={hoverColor}
                    width={"sm:w-[230px] xxs:w-[149px] w-[114px]"}
                />   
            </div>   
        </div>

    </article>
</main>

<style>

</style>