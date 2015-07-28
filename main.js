/*
  1. Create a new Github project named js102.
  2. Create a ~/workspace/js102 directory on your host machine.
  3. Initialize the ~/workspace/js102 directory as a git project and attach 
  it to your js102 Github project.

  4. Write a JavaScript function that accepts an array as an argument, 
  and returns a new array that is sorted.
  5. Write a JavaScript function that accepts an array, and returns a new array
   that contains elements in the array you passed in that are larger than 25.
  
  6. Create a simple HTML form that has one input box and one button.
  7. Attach an event handler to the button click.
  8. When the button is clicked retrieve the value of the input box.
  You should enter in a comma-delimited list of integers
  (e.g. 10,3,5,67,22,etc..).
  9. Convert that string of comma-delimited numbers into an array.
  10. Pass that array into the function that finds numbers higher than 25.
  11. The array that is the result of that, pass it into the function that
  sorts the array.
  12. Loop over the sorted array and create a DOM string that wraps a <div>
   element around each number (e.g. output += something).
  
  13. Give each <div> a class of "number".
  14. Write a CSS class that changes the font color of the even elements to red.
  15. Write a CSS class that changes the background color of the odd elements
   to azure.
  
  16. Push all of your code to Github.
  17. Send the link to your Github project to your assigned TA.
*/
$(document).ready(function() {

  var oneArray = ["kiwi", "apple", "banana", "pear"];

  function sorter(arrayHere) {
    var sortedArray = arrayHere.sort();
    return sortedArray;
  };

  // console.log(sorter(oneArray));

  // var someNumbers = [1000, 1, -50, 25, 26, 100];
  var newNumbers = [];

  function large(numberArray) {
      for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > 25) {
          newNumbers.push(numberArray[i]);
        }
      }
    return newNumbers;
  };

  // console.log(large(someNumbers));

  var stringToNumber = [];

  $('#whenClicked').click(function() {
    var inputNumbers = $('#grab').val();
    var inputArray = inputNumbers.split(',');
    for(var i = 0; i < inputArray.length; i++) {
      stringToNumber.push(parseInt(inputArray[i]));
    }
    var onlyBigNums = large(stringToNumber);
    var sortedBigNums = sorter(onlyBigNums);

    for(var i = 0; i < sortedBigNums.length; i++) {
      $('#put').append("<div class=\"number\">" + sortedBigNums[i] + "</div>");
    }
  });
});

