/// <reference types="@rsbuild/core/types" />

interface Window {
  __MICRO_APP_HOST__?: boolean;

  __FEDERATION_ENHANCED_RUNTIME__?: {
    loadRemote: any;
    registerRemotes: any;
  };
}
