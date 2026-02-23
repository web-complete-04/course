console.log('This are the main BOM features');

// 1. the window object
// window.print()

// 2. modal boxes: alert, confirm, prompt
// window.alert('I am the old a modal alert!');
console.log('this is executed after the alert');

// 3. setTimeout, setInterval
window.setTimeout(() => console.log('Timeot executed!'), 1000);

// 4. location object
console.log(location);
console.log(location.href);
console.log(location.protocol);
console.log(location.search);
console.log(location.hash);

// 5. screen object
console.log(screen);

// 6. local storage
// save in local storage
const saveUser = {name: "WebComplete 4", message: "Keep coding!"};
localStorage.setItem("currentUser", JSON.stringify(saveUser));

// read from local storage
const user = JSON.parse(localStorage.getItem("currentUser"));
console.log(user);

// delete from local storage
//localStorage.removeItem("currentUser");

// 7. navigator object
navigator.geolocation.getCurrentPosition(
  (position) => {
    const { latitude, longitude } = position.coords;
    console.log("Lat:", latitude);
    console.log("Lng:", longitude);
  },
  (error) => {
    console.error("Error:", error.message);
  }
);

// 8. cookies
document.cookie = "username=John Doe";


console.log('end od the concepts...');