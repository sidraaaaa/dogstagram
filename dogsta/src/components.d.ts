/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
    }
    interface AppRoot {
    }
    interface DisplayFeature {
        "count": number;
        "dog": string;
        "getImage": (selectedBreed: any) => Promise<void>;
        "img": HTMLImageElement;
        "message": string;
        "responseImgUrl": string;
        "status": string;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLDisplayFeatureElement extends Components.DisplayFeature, HTMLStencilElement {
    }
    var HTMLDisplayFeatureElement: {
        prototype: HTMLDisplayFeatureElement;
        new (): HTMLDisplayFeatureElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "display-feature": HTMLDisplayFeatureElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
    }
    interface AppRoot {
    }
    interface DisplayFeature {
        "count"?: number;
        "dog"?: string;
        "img"?: HTMLImageElement;
        "message"?: string;
        "responseImgUrl"?: string;
        "status"?: string;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "display-feature": DisplayFeature;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "display-feature": LocalJSX.DisplayFeature & JSXBase.HTMLAttributes<HTMLDisplayFeatureElement>;
        }
    }
}
