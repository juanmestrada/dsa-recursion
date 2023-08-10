/** product: calculate the product of an array of numbers. */

function product(nums, idx = nums.length - 1) {
  if(idx === 0) return nums[0];

  return nums[idx] * product(nums, idx - 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, currLongest = 0) {
  //base case, index (idx) has reached the end of array
  if(idx === words.length) return currLongest;

  // update the max between current word[i] and current longest
  currLongest = Math.max(words[idx].length, currLongest);

  return longest(words, idx + 1, currLongest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
  // base case, return newStr when index reaches end of string
  if(idx >= str.length) return newStr;

  // concat newStr with every other character
  newStr += str[idx];

  return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, start = 0, end = str.length - 1) {
  // if pointer at start index surpasses pointer at end overlap, all characters of str have matched
  if(start >= end) return true;

  // if at any time str[start] is not equal to str[end], str is not a palindrome
  if(str[start] !== str[end]) return false;

  // call recursive function with updated pointers, (shrinking window)
  return isPalindrome(str, start + 1, end - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  // base case
  // idx has reached the end of array
  if(idx === arr.length) return -1;

  // value found in array, return index
  if(arr[idx] === val) return idx;

  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = str.length - 1, newStr = "") {
  // base case
  // idx has exceeded the start index of str
  if(idx < 0) return newStr;

  // concat newStr with char at current idx
  newStr += str[idx];

  // call recursive function with new idx
  return revString(str, idx - 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  // result array
  let resArr = [];

  // traverse every key in object
  for (let key in obj) {
    // push string to result array
    if (typeof obj[key] === "string") resArr.push(obj[key]);
    if (typeof obj[key] === "object") resArr.push(...gatherStrings(obj[key]));
  }
  return resArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  // value not found
  if(left > right) return -1;

  // get middle
  let mid = Math.floor((right + left) / 2);

  // value found at middle
  if(arr[mid] === val) return mid;

  // check left subarray
  if (arr[mid] > val) {
    return binarySearch(arr, val, left, mid - 1);
  }
  
  // check right subarray
  return binarySearch(arr, val, mid + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
