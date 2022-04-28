/**
 * 数组扁平化
 * @param data
 * @returns
 */
export const flattenArray = (data: any, key: string = "children") => {
  const flatRouter: any[] = [];
  const flattenRecursion = (data: any) => {
    data.forEach((item: any) => {
      if (item[key]) flattenRecursion(item[key]);
      flatRouter.push(item);
    });
  };
  flattenRecursion(data);
  return flatRouter;
};
