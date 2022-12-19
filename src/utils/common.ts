export const range = (start: number, end: number, step: number): number[] => {
  return Array.from(
    Array.from(
      Array(
        Math.ceil(((end - start) / step) + 1)
      ).keys()
    ), x => start + x * step
  );
}