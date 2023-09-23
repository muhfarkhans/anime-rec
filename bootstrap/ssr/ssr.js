import { mergeProps, useSSRContext, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  name: "List",
  props: {
    anime: Object
  },
  data() {
    return {
      like: 0
    };
  },
  methods: {
    increament() {
      this.like++;
    },
    decreament() {
      this.like--;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center h-screen" }, _attrs))}><div class="shadow rounded bg-slate-100 p-4 max-w-4xl"><div class="h-40 overflow-hidden"><h1>${ssrInterpolate($props.anime.data[$data.like].entry[0].title)}</h1><h1>${ssrInterpolate($props.anime.data[$data.like].entry[1].title)}</h1><p>${ssrInterpolate($props.anime.data[$data.like].content)}</p></div><div class="flex justify-between"><button class="my-4 bg-teal-700 rounded px-4 py-2 text-white"> prev </button><button class="my-4 bg-teal-700 rounded px-4 py-2 text-white"> next </button></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Anime/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const List = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: List
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Anime/List.vue": __vite_glob_0_0 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
