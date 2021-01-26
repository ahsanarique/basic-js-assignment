// https://github.com/ahsanarique/basic-js-assignment

// 1st Task:
function kilometerToMeter(kilometer) {
  // Input Validation:
  if (typeof kilometer != "number" || kilometer < 0) {
    return "Please enter a positive number as input parameter";
  }

  // Calculation:
  var convertToMeter = (kilometer * 1000).toFixed(2);

  return convertToMeter;
}

// 2nd Task:
function budgetCalculator(watches, phones, laptops) {
  // Input Validation:
  var validate = [watches, phones, laptops];

  for (var i = 0; i < validate.length; i++) {
    if (
      typeof validate[i] != "number" ||
      validate[i] < 0 ||
      validate[i] != Math.floor(validate[i])
    ) {
      return "Input parameters must be positive whole numbers";
    }
  }

  // Calculation:
  var watchPrice = 50;
  var phonePrice = 100;
  var laptopPrice = 500;

  var totalCost =
    watches * watchPrice + phones * phonePrice + laptops * laptopPrice;

  return totalCost;
}

// 3rd Task:
function hotelCost(totalDays) {
  // Input Validation:
  if (typeof totalDays != "number" || totalDays <= 0) {
    return "Please enter a positive number as input parameter";
  }

  // Calculation
  totalDays = Math.round(totalDays);

  var firstPhase = 10;
  var secondPhase = 20;
  var rest = totalDays - secondPhase;
  var totalCost = 0;

  if (totalDays <= firstPhase) {
    totalCost = totalDays * 100;
  } else if (totalDays > firstPhase && totalDays <= secondPhase) {
    totalCost = firstPhase * 100 + (totalDays - firstPhase) * 80;
  } else if (totalDays > secondPhase) {
    totalCost = firstPhase * 100 + secondPhase * 80 + rest * 50;
  }

  return totalCost;
}

// 4th Task:
function megaFriend(arrayOfNames) {
  // Input Validation:
  for (var i = 0; i < arrayOfNames.length; i++) {
    if (typeof arrayOfNames[i] != "string") {
      return arrayOfNames[i] + " is not a valid input type as a name.";
    }
  }

  // Counting Characters and whitespaces, eliminating whitespaces and saving the values in the array below:
  var countWithoutSpace = [];

  for (var i = 0; i < arrayOfNames.length; i++) {
    var charCounts = 0;
    var spaceCounts = 0;
    charCounts = arrayOfNames[i].length;

    for (var j = 0; j < arrayOfNames[i].length; j++) {
      if (arrayOfNames[i][j] === " ") {
        spaceCounts++;
      }
    }

    countWithoutSpace.push(charCounts - spaceCounts);
  }

  // The Process below uses the fact that index positions of the values in countWithoutSpace is parallel to the index of the values in arrayOfNames.

  var maxChar = 0;
  var longestNameIndex = 0;

  for (var i = 0; i < countWithoutSpace.length; i++) {
    if (countWithoutSpace[i] > maxChar) {
      maxChar = countWithoutSpace[i]; // max value in countWithoutSpace
    }
  }

  if (maxChar < 1) {
    return "Name must contain minimum two characters.";
  }

  longestNameIndex = countWithoutSpace.indexOf(maxChar); // First longest name location in arrayOfNames
  var longestName = arrayOfNames[longestNameIndex];

  console.log(longestName.length);
  console.log(countWithoutSpace);

  return longestName;
}

console.log(megaFriend(["   "]));
