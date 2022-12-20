export const range = (start: number, end: number, step: number): number[] => {
  return Array.from(
    Array.from(
      Array(
        Math.ceil(((end - start) / step) + 1)
      ).keys()
    ), x => start + x * step
  );
}


export const groupBy = <GroupedObjectType>(
  requestArray: GroupedObjectType[],
  criteria: keyof GroupedObjectType | Function
): { [x: string | number]: GroupedObjectType[] } => {
  return requestArray.reduce((obj, item) => {
    const groupedObject = { ...obj };
    const key: keyof GroupedObjectType =
      typeof criteria === 'function' ? criteria(item) : item[criteria];
    if (key) {
      const objHasKey = Object.prototype.hasOwnProperty.call(groupedObject, key);
      if (!objHasKey) {
        (groupedObject)[key] = [];
      }
      (groupedObject)[key].push(item);
    }
    return groupedObject;
  }, {} as any)
};