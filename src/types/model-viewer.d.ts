import type * as React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        alt?: string;
        poster?: string;
        loading?: "eager" | "lazy";
        reveal?: "auto" | "interaction" | "manual";
        "camera-controls"?: boolean;
        "auto-rotate"?: boolean;
        "auto-rotate-delay"?: string;
        ar?: boolean;
        "ar-modes"?: string;
        "shadow-intensity"?: string;
        exposure?: string;
        "environment-image"?: string;
      };
    }
  }
}

export {};
