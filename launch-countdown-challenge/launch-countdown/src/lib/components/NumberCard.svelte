<script>
    import { shouldFlip } from '$lib/stores';

    export let number = "";
    console.log($shouldFlip)
</script>

<section class="text-center">
    <div class="bg-very-dark-blue h-[200px] w-[200px] rounded-xl mb-5">
        <!-- Top Half Card-->
        <div id="topCard" class="bg-primary-blue h-[93px] w-[200px] rounded-t-xl overflow-hidden flex flex-col justify-start items-center
            top-card-inverted-corner absolute z-50 {$shouldFlip ? 'flipTop' : ''}">
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
                {number}
            </span>
            <!-- Dark overlay -->
            <div class="shadow-[inset_0_-100px_10px_rgba(0,0,0,0.25)] h-[93px] w-[200px] absolute rounded-t-xl"></div>
        </div>
        
        <!-- Bottom Half Card -->
        <div class="absolute bg-primary-blue h-[93px] w-[200px] rounded-b-xl overflow-hidden  flex flex-col justify-end items-center
            bottom-card-inverted-corner z-50 {$shouldFlip ? 'flipBottom' : ''}">
            <span class="text-primary-red font-bold text-[5.8rem] leading-[1] -translate-y-[46px]">
                <span class="text-primary-red font-bold text-[5.8rem] leading-[1] translate-y-[47px]">
                    {number}
                </span>
            </span>
        </div>
        <!-- Background behind bottom half -->
        <div class="bg-primary-blue h-[93px] w-[200px] rounded-b-xl overflow-hidden  flex flex-col justify-end items-center
            bottom-card-inverted-corner">
            <span class="text-primary-red font-bold text-[5.8rem] leading-[1] -translate-y-[46px]">
                <span class="text-primary-red font-bold text-[5.8rem] leading-[1] translate-y-[47px]">
                    {number}
                </span>
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
        animation: flipCard 0.8s ease-in;
        transform-origin: bottom;
    }
    .flipBottom {
        animation: unflipCard 0.8s ease-out;
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