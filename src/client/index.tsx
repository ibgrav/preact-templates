let hydrate: typeof import("preact").hydrate;

const components: Record<string, () => Promise<{ default: (props: any) => JSX.Element }>> = {
  button: () => import("../components/button/Button"),
};

const roots = document.querySelectorAll("[data-component]");
roots.forEach(async (root) => {
  const name = root.getAttribute("data-component");
  const props = JSON.parse(root.getAttribute("data-props") || "{}");

  if (components[name]) {
    const { default: Component } = await components[name]();

    hydrate = hydrate || (await import("preact")).hydrate;

    hydrate(<Component {...props} />, root);
  }
});
