import type { tools } from "./tools";

export type Tool = keyof typeof tools;
export type ToolOption<T extends Tool> = Omit<Parameters<typeof tools[T]>[0], 'partytown'>
export type ToolsDefinition = { [T in Tool]: ToolOption<T> }

export type PartiallyRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
