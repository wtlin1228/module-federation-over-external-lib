/// <reference types="@rsbuild/core/types" />

interface Window {
  __MICRO_APP_HOST__?: boolean;

  __APP_KIRBY_LIFECYCLES__: {
    bootstrap: () => void;
    mount: (props: { container?: HTMLElement }) => Promise<void>;
    unmount: (props: any) => Promise<void>;
    update: (props: any) => Promise<void>;
  };
}
