type ShuffleArray<T> = (array: T[]) => T[];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useShuffle: ShuffleArray<any> = (array) => {
  return array
    .map((item) => ({ ...item, sortKey: Math.random() }))
    .sort((a, b) => a.sortKey - b.sortKey)
    .map(({ ...rest }) => rest);
};
