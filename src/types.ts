import type { tools } from "./tools";

// The different tools available
export type Tool = keyof typeof tools;
// Options per tool. Those are the options that will be passed to the snippet function.
type ToolOption<T extends Tool> = Parameters<(typeof tools)[T]>[0];

// Params per tool. Those are the params defined by the user for each tool.
export type ToolParam<T extends Tool> = ToolOption<T>;
export type ToolsParams = Partial<{ [T in Tool]: ToolParam<T> }>;
