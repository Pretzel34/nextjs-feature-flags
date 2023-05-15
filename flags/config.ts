// flags/config.ts

import type { Configuration } from "@happykit/flags/config";

// You can replace this with your exact flag types
export type AppFlags = { [key: string]: boolean | number | string | null };

export const config: Configuration<AppFlags> = {
  //   envKey: "flags_pub_development_364811374785724996",
  envKey: process.env.NEXT_PUBLIC_FLAGS_ENVIRONMENT_KEY!,

  // You can provide defaults flag values here
  defaultFlags: {},
};
