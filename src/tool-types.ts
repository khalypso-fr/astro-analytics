export interface CommonToolOptions {
    partytown: boolean;
}

export type SnippetFunction<T> = (params: T) => string;
