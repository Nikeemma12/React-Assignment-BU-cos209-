//Export
export const productArray = (numbers) => {
  let product = numbers.reduce((first, second) => {
    return first * second;
  });
  return product;
};
