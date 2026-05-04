function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateRandomArray(length, min, max) {
  const arr = new Array(length);
  for (let i = 0; i < length; i++) {
    arr[i] = generateRandomNumber(min, max);
  }
  return arr;
}
function calculateAverage(arr) {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}
function findMaxValue(arr) {
  return Math.max(...arr);
}
function findMinValue(arr) {
  return Math.min(...arr);
}
function sortArray(arr) {
  return arr.slice().sort((a, b) => a - b);
}
function isArraySorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
function filterOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}
function countOccurrences(arr, value) {
  return arr.reduce((count, current) => current === value ? count + 1 : count, 0);
}
function uniqueValues(arr) {
  return [...new Set(arr)];
}
const randomArray = generateRandomArray(100, 1, 100);
const average = calculateAverage(randomArray);
const max = findMaxValue(randomArray);
const min = findMinValue(randomArray);
const sortedArray = sortArray(randomArray);
const isSorted = isArraySorted(randomArray);
const evenNumbers = filterEvenNumbers(randomArray);
const oddNumbers = filterOddNumbers(randomArray);
const occurrencesOf50 = countOccurrences(randomArray, 50);
const uniqueRandomValues = uniqueValues(randomArray);
console.log(randomArray);
console.log(average);
console.log(max);
console.log(min);
console.log(sortedArray);
console.log(isSorted);
console.log(evenNumbers);
console.log(oddNumbers);
console.log(occurrencesOf50);
console.log(uniqueRandomValues);
