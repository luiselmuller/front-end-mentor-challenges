<script>
    import { elasticOut } from 'svelte/easing'

    $: number = $$slots.number; // Animate whenever this changes


    // Flip Animation

</script>

<section class="text-center">
    <div class="bg-very-dark-blue h-[200px] w-[200px] rounded-xl mb-5">
        <!-- Top Half Card -->
        <div class="bg-primary-blue h-[93px] w-[200px] rounded-t-xl overflow-hidden flex flex-col justify-start items-center
            top-card-inverted-corner">
            <span class="text-primary-red font-bold text-[5.8rem] leading-[1] translate-y-[47px]">
                <slot name="number">
                    <span>0</span>
                </slot>
            </span>
            <!-- Dark overlay -->
            <div class="shadow-[inset_0_-100px_10px_rgba(0,0,0,0.25)] h-[93px] w-[200px] absolute rounded-t-xl"></div>
        </div>
        <!-- Bottom Half Card -->
        <div class="bg-primary-blue h-[93px] w-[200px] rounded-b-xl overflow-hidden  flex flex-col justify-end items-center
            bottom-card-inverted-corner">
            <span class="text-primary-red font-bold text-[5.8rem] leading-[1] -translate-y-[46px]">
                <slot name="number">
                    <span>0</span>
                </slot>
            </span>
        </div>
    </div>

    <!-- Text under the card -->
    <span class="text-neutral-white uppercase font-[600] tracking-[0.6em] text-lg opacity-60">
        <slot name="unit"></slot>
    </span>
</section>

<style>
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
</style>