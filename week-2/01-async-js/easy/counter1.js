let counter = 0;

function updateCounter() {
  counter++;
  console.log(counter); // You can replace this with the desired action
}

// Update the counter every second (1000 milliseconds)
setInterval(updateCounter, 1000);