type Entries<T extends object> = {
	[K in keyof T]-?: [K, Exclude<T[K], undefined>];
}[keyof T][];

export function entriesFromObject<T extends object>(object: T): Entries<T> {
	return Object.entries(object).filter(
		([, value]) => value !== undefined,
	) as Entries<T>;
}
