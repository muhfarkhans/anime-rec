<script>
export default {
    name: "List",
    props: {
        anime: Object,
    },
    data() {
        return {
            like: 0,
        };
    },
    methods: {
        increament() {
            if (this.like == 99) this.like = 0;
            this.like++;
        },
        decreament() {
            if (this.like == 0) this.like = 99;
            this.like--;
        },
    },
};
</script>

<template>
    <div class="flex justify-center items-center h-screen">
        <div class="shadow rounded bg-slate-100 p-4 w-[56rem] max-w-4xl mx-2">
            <div class="h-40 overflow-y-scroll">
                <h1 class="font-semibold">
                    {{ anime.data[like].entry[0].title }}
                </h1>
                <h1 class="font-semibold">
                    {{ anime.data[like].entry[1].title }}
                </h1>
                <p>{{ anime.data[like].content }}</p>
            </div>
            <div class="flex justify-between">
                <button
                    class="my-4 bg-teal-700 rounded px-4 py-2 text-white"
                    @click="decreament"
                >
                    prev
                </button>
                <button
                    class="my-4 bg-teal-700 rounded px-4 py-2 text-white"
                    @click="increament"
                >
                    next
                </button>
            </div>
        </div>
    </div>
</template>
