<script>
    export let number = "";

    export let shouldFlip = false;

    function subNumber() {
        let numberLeftSide = number.split('')[0];
        let numberRightSide = number.split('')[1];
        let result = '';

        if(+numberRightSide > 0 || +numberLeftSide >= 0) {
            result = +numberLeftSide === 0 ? (+number.split('')[1] - 1).toString() : (+number - 1).toString();
        }

        return result.split('').length < 2 ? '0' + result : result;
    }

</script>

<section class="text-center">
    <div class="bg-very-dark-blue h-[200px] w-[200px] rounded-xl mb-5">
        <!-- Top Half Card-->
        <div class="bg-primary-blue h-[93px] w-[200px] rounded-t-xl overflow-hidden flex flex-col justify-start items-center
            top-card-inverted-corner absolute z-50 {shouldFlip ? 'flipTop' : ''}">
            <span class="text-primary-red font-bold text-[5.8rem] leading-[1] translate-y-[47px]">
                {number}
            </span>
            <!-- Dark overlay -->
            <div class="shadow-[inset_0_-100px_10px_rgba(0,0,0,0.25)] h-[93px] w-[200px] absolute rounded-t-xl"></div>
        </div>
        <!-- Background behind the top half  -->
        <div class="bg-primary-blue h-[93px] w-[200px] rounded-t-xl overflow-hidden flex flex-col justify-start items-center
            top-card-inverted-corner">
            <span class="text-primary-red font-bold text-[5.8rem] leading-[1] translate-y-[47px]">
                <!-- Might be able to make this better in the future -->
                {#if shouldFlip && subNumber() != "-1" && number != "00"}
                    {subNumber()}
                {:else}
                    {number}
                {/if}
            </span>
            <!-- Dark overlay -->
            <div class="shadow-[inset_0_-100px_10px_rgba(0,0,0,0.25)] h-[93px] w-[200px] absolute rounded-t-xl"></div>
        </div>
        
        <!-- Bottom Half Card -->
        <div class="absolute bg-primary-blue h-[93px] w-[200px] rounded-b-xl overflow-hidden  flex flex-col justify-end items-center
            bottom-card-inverted-corner z-50 {shouldFlip ? 'flipBottom' : ''}">
            <span class="text-primary-red font-bold text-[5.8rem] leading-[1] -translate-y-[46px]">
                {#if shouldFlip && subNumber() != "-1" && number != "00"}
                    {subNumber()}
                {:else}
                    {number}
                {/if}
            </span>
        </div>
        <!-- Background behind bottom half -->
        <div class="bg-primary-blue h-[93px] w-[200px] rounded-b-xl overflow-hidden  flex flex-col justify-end items-center
            bottom-card-inverted-corner">
            <span class="text-primary-red font-bold text-[5.8rem] leading-[1] -translate-y-[46px]">
                {number}
            </span>
        </div>
    </div>

    <!-- Text under the card -->
    <span class="text-neutral-white uppercase font-[600] tracking-[0.6em] text-lg opacity-60">
        <slot name="unit"></slot>
    </span>
</section>

<style>
    /* Inverted corner radius */
    .top-card-inverted-corner {
        --mask: radial-gradient(8px at 40px 100%,#0000 98%,#000) -40px;
        -webkit-mask: var(--mask);
                mask: var(--mask);
        
    }
    .bottom-card-inverted-corner {
        --mask: radial-gradient(8px at 40px 0,#0000 98%,#000) -40px;
        -webkit-mask: var(--mask);
                mask: var(--mask);
        
    }

    /* Flip animation */
    .flipTop {
        animation: flipCard .7s linear;
        transform-origin: bottom;
    }
    .flipBottom {
        animation: unflipCard .7s linear;
        transform-origin: top;
    }

    @keyframes flipCard {
        0% {
            transform: rotateX(0deg);
        }
        50%, 100% {
            transform: rotateX(-90deg);
        }
    }
    @keyframes unflipCard {
        0%, 50% {
            transform: rotateX(90deg);
        }
        100% {
            transform: rotateX(0deg);
        }
    }

</style>