 
 function showTime(){

    // Create a new Date object
    const currentDate = new Date();

    // Get the current time components
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const hr = hours;
   
   
   // Display the current time
      console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
 }
 setInterval(showTime,1000);
