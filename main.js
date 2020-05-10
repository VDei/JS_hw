let a, b, c, d, e, f, x, y;

//  Exersize_1
a = +prompt("Enter any number");
if (a < 0) {
  alert("Your number is negative.");
  console.log("Ex.1__________" + "Your number is negative.");
} else if (a == 0) {
  alert("Your number is ZERO.");
  console.log("Ex.1__________" + "Your number is ZERO.");
} else if (a > 0) {
  alert("Your number is positive.");
  console.log("Ex.1__________" + "Your number is positive.");
} else {
  alert("Wrong data! Try again!");
  console.log("Ex.1__________" + "Wrong data! Try again!");
}

//  Exersize_2
b = +prompt("Enter your age.");
if (b >= 0 && b <= 120) {
  alert("You are " + b + " years old.");
  console.log("Ex.2__________" + ("You are " + b + " years old."));
} else if (b < 0 || b > 120) {
  alert("Your age can`t be " + b + "!");
  console.log("Ex.2__________" + ("Your age can`t be " + b + "!"));
} else {
  alert("Invalid data! Try to put your age only with the numeric!");
  console.log(
    "Ex.2__________" +
      "Invalid data! Try to put your age only with the numeric!"
  );
}

//  Exersize_3
c = +prompt("Enter any number.");
if (c < 0) {
  alert("The absolute value of your number is " + -c + ".");
  console.log(
    "Ex.3__________" + ("The absolute value of your number is " + -c + ".")
  );
} else if (c == 0) {
  alert("The absolute value of zero is zero!");
  console.log("Ex.3__________" + "The absolute value of zero is zero.");
} else if (c > 0) {
  alert("The absolute value of your number is " + c + ".");
  console.log(
    "Ex.3__________" + ("The absolute value of your number is " + c + ".")
  );
} else {
  alert("Invalid data! Try again!");
  console.log("Ex.3__________" + "Invalid data! Try again!");
}

//  Exersize_4
d = +prompt("Enter your corrent time (hours).");

if (d >= 0 && d < 24) {
  e = +prompt("Enter your corrent time (minutes).");
  if (e >= 0 && e < 60) {
    f = +prompt("Enter your corrent time (seconds).");
    if (f >= 0 && f < 60) {
      alert("Your time is " + d + "h " + e + "m " + f + "s.");
      console.log(
        "Ex.4__________" + "Your time is " + d + "h " + e + "m " + f + "s."
      );
    } else {
      alert("Invalid data! Try again! (seconds)");
      console.log("Ex.4__________" + "Invalid data! Try again! (seconds)");
    }
  } else {
    alert("Invalid data! Try again! (minutes)");
    console.log("Ex.4__________" + "Invalid data! Try again! (minutes)");
  }
} else {
  alert("Invalid data! Try again! (hours)");
  console.log("Ex.4__________" + "Invalid data! Try again! (hours)");
}

//  Exersize_5
x = +prompt("Enter X point coordinates.");
y = +prompt("Enter Y point coordinates.");
if (x < 0 && y < 0) {
  document.write("Your point is in the third quarter.");
  console.log("Ex.5__________" + "Your point is in the third quarter.");
} else if (x < 0 && y > 0) {
  document.write("Your point is in the fourth quarter.");
  console.log("Ex.5__________" + "Your point is in the fourth quarter.");
} else if (x > 0 && y < 0) {
  document.write("Your point is in the second quarter.");
  console.log("Ex.5__________" + "Your point is in the second quarter.");
} else if (x > 0 && y > 0) {
  document.write("Your point is in the first quarter.");
  console.log("Ex.5__________" + "Your point is in the first quarter.");
} else if (x == 0 && y != 0) {
  document.write("Your point is on the X axis.");
  console.log("Ex.5__________" + "Your point is on the X axis.");
} else if (x != 0 && y == 0) {
  document.write("Your point is on the Y axis.");
  console.log("Ex.5__________" + "Your point is on the Y axis.");
} else if (x == 0 && y == 0) {
  document.write("Your point is at the origin.");
  console.log("Ex.5__________" + "Your point is at the origin.");
}
