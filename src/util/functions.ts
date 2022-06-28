export const formatPrice = (value: number): string => {
  return value.toFixed(2).replace('.', ',')
}

export const copyWith = (objs: Object[]) => {
  return objs.reduce(function(acc, val) {
    return Object.assign(acc, val);
  },{});
}
