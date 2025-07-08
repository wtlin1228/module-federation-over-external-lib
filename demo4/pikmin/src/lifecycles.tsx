import { loadRemote, registerRemotes } from "mf-runtime";

let root: any = null;

/**
 * The bootstrap will only be called once when the child application is initialized.
 * The next time the child application re-enters, the mount hook will be called directly, and bootstrap will not be triggered repeatedly.
 * Usually we can do some initialization of global variables here,
 * such as application-level caches that will not be destroyed during the unmount phase.
 */
export async function bootstrap() {
  console.log("pikmin bootstrap");

  registerRemotes([
    {
      name: "pikmin",
      entry: `app/pikmin/mf-manifest.json`,
    },
  ]);
}

/**
 * The mount method is called every time the application enters,
 * usually we trigger the application's rendering method here.
 */
export async function mount(props: { container?: HTMLElement }) {
  console.log("pikmin mount", props);

  const { renderToContainer } = await loadRemote("pikmin");

  if (!root) {
    const container = props.container
      ? props.container.querySelector("#root")
      : document.getElementById("root");
    root = renderToContainer(container);
  }
}

/**
 * Methods that are called each time the application is switched/unloaded,
 * usually in this case we uninstall the application instance of the subapplication.
 */
export async function unmount(props: any) {
  console.log("pikmin unmount", props);

  if (root) {
    root.unmount();
    root = null;
  }
}

/**
 * Optional lifecycle，just available with loadMicroApp way
 */
export async function update(props: any) {
  console.log("pikmin update", props);
}
