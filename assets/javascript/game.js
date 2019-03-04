var correct = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];

if (correct) {
  alert(petName + " " + petType + " " + petAge);
}
else {
  alert("You don't get my cat's information");
}

if (petIsCat) {
  alert("My pet is a cat");
}
else {
  alert("My pet is not a cat");
}

if (petAge !== 7) {
  alert("My pet is not 7 years old");
}

if (petAge === 5) {
  alert("My pet is 5 years old");
}
else if (petAge < 5) {
  alert("My pet is less than 5 years old");
}
else if (petAge > 5) {
  alert("My pet is older than 5 years old");
}

// document.write() overwrites the entire page. We don't normally use this, but we will today for simplicity
document.write("Welcome to our page " + userName);

var catAge = prompt("How old is your cat?");

// Won't work as expected
alert(catAge + 2);

// Works as expected
alert(parseInt(catAge) + 2);
