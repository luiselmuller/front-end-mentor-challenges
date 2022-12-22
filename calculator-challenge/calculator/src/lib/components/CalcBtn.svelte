<script lang="ts">
    import { calculation } from '$lib/stores';

    export let text = "";  // Text to display on the button
    export let fontSize = "xxs:text-[28px] text-[22px]"
    export let width = "sm:w-[104px] xxs:w-[66px] w-[50px]";
    export let height = "sm:h-[62px] xxs:h-[62px] h-[55px]"

    // Theme variables
    export let specialKeyBg = 'bg-f-func-key';
    export let textColor = 'text-f-text';
    export let background = 'bg-f-key';
    export let hoverColor = 'bg-f-key-hover';
    export let funcHover =  'bg-f-func-key-hover';
    export let shadow = 'bg-f-key-shadow';
    export let funcShadow = 'bg-f-func-key-shadow'

    function handleCalc(btnText: string) {
        if(btnText === "RESET"){
            calculation.set("");
        }
        else if(btnText === "="){
            calculation.set(eval($calculation))
        }
        else if(btnText === "DEL"){
            let temp = $calculation.substring(0, $calculation.length-1);
            calculation.update(n => n = temp);
        }
        else if(btnText === "x"){
            calculation.update((n) => n += "*");
        }
        else{
            calculation.update((n) => n += btnText);
        }
    }

</script>

{#if text === "DEL"}
    <!-- Delete button -->
    <div>
        <button type="button" class="sm:rounded-xl rounded-lg {height} {width} {specialKeyBg} text-white {funcHover}
            transition-all duration-100 xxs:text-[28px] text-[22px] z-10 relative active:translate-y-0.5"
            on:click={() => handleCalc(text)}>
            <h2 class="translate-y-[2px]">{text}</h2>       
        </button>
        <div class="rounded-xl {height} {width} {funcShadow} absolute xxs:-translate-y-[58px] -translate-y-[51px] z-0"></div>
    </div>
{:else}
    <!-- Other keys -->
    <div>
        <button type="button" class="sm:rounded-xl rounded-lg {height} {width} {background} {textColor} {hoverColor} {fontSize}
            transition-all duration-100 z-10 relative active:translate-y-0.5"
            on:click={() => handleCalc(text)}>
            <h2 class="translate-y-[4px]">{text}</h2>         
        </button>
        <div class="rounded-xl {height} {width} {shadow} absolute xxs:-translate-y-[58px] -translate-y-[51px] z-0">  </div>
    </div>
{/if}
