const utils = {
    processArray(arrayOfNumbers) {
      if (!Array.isArray(arrayOfNumbers)) {
        throw new Error('Input must be an array of numbers');
      }
      return arrayOfNumbers.map(num => (num % 2 === 0? num ** 2 : num ** 3));
    },
  
    formatArrayStrings(arrayOfStrings, processedArray) {
      if (!Array.isArray(arrayOfStrings) ||!Array.isArray(processedArray)) {
        throw new Error('Inputs must be arrays of strings and numbers, respectively');
      }
      if (arrayOfStrings.length!== processedArray.length) {
        throw new Error('Input arrays must have the same length');
      }
      return arrayOfStrings.map((str, i) => (processedArray[i] % 2 === 0? str.toUpperCase() : str.toLowerCase()));
    },
  };
  
  const numbers = [1, 2, 3, 4, 5];
  const strings = ['Boy', 'Girl', 'an', 'womAN'];
  
  const processedNumbers = utils.processArray(numbers);
  const formattedStrings = utils.formatArrayStrings(strings, processedNumbers);
  
  console.log(formattedStrings); // Output: ["BOY", "GIRL", "man", "woman"]