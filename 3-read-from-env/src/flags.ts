// You can't "dynamically" read from env.
// In other words, we have to explicitly define which env variables we want to read.

const TRUE = "true";

export const isCounterEnabled =
  import.meta.env.VITE_FEATURE_FLAG_COUNTER === TRUE;

export const isAboutEnabled = import.meta.env.VITE_FEATURE_FLAG_ABOUT === TRUE;
