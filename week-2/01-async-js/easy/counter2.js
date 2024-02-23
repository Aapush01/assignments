let counter = 0;

function updateCounter() {
  counter++;
  console.log(counter); // You can replace this with the desired action

  // Schedule the next update after 1000 milliseconds (1 second)
  setTimeout(updateCounter, 1000);
}

// Start the counter
updateCounter();
 