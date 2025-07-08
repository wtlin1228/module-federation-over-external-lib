import { type RegistrableApp, registerMicroApps, start } from "qiankun";
import { useEffect } from "react";

const APP_CONTAINER = "app-container";

const registerableApps: RegistrableApp<{
  displayName: string;
}>[] = [
  {
    name: "__APP_KIRBY_LIFECYCLES__",
    entry: "/app/kirby/index.html",
    container: `#${APP_CONTAINER}`,
    activeRule: "/app/kirby-cafe",
  },
  {
    name: "__APP_PIKMIN_LIFECYCLES__",
    entry: "/app/pikmin/index.html",
    container: `#${APP_CONTAINER}`,
    activeRule: "/app/pikmin-cafe",
  },
];

export const useMicroApps = () => {
  useEffect(() => {
    registerMicroApps(registerableApps);
    start({ prefetch: false });
  }, []);

  return APP_CONTAINER;
};
