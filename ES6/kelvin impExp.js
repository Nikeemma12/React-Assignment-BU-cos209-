// EXPORT
// This file contains a function we want to use in another file.
// Using "export" allows other files to import and use it.

export const findMaximum = (numbers) => {
  // Use reduce to find the largest number in an array
  return numbers.reduce((max, current) => (current > max ? current : max));
};
