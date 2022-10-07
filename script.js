//Get the submit button
const btnSubmit = document.querySelector(".submit");

// Get the container element
const btnContainer = document.getElementById("button-number-wrapper");
// Text container
const textContainer = document.getElementById("rating");

// Get all buttons with class="btn" inside the container
// wrapujesz to w tablice [] i robisz spred operator zeby przerobic
// nodeListe na JSowa tablice na której moesz wykonac wiecej metod
const btns = [...btnContainer.querySelectorAll(".btn")];

let active = btnContainer.getElementsByClassName("active");
const resultPage = document.querySelector(".state-wrapper");
const mainPage = document.querySelector(".rating-wrapper");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    resultPage.style.display = "none";
    let current = document.getElementsByClassName("active");
    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    // Add the active class to the current/clicked button
    this.className += " active";
  });
}
// Loop that add rate to each button
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    //gets all buttons and gives addEventListener to them
    let rateValue = i + 1;
    //get class active
    let current = document.getElementsByClassName("active");
    //if there is no active class
    //put rateValue to html span
    if (current.length > 0) {
      textContainer.innerHTML = rateValue;
    }
  });
}

// Junior Style
// Check if any button has Active class
// const ifAnyChecked = () => {
//   let ifAnyActive = false; // to bedziemy zwracac z ifAnyChecked

//   btns.forEach((pojedynczy_baton) => {
//     if (pojedynczy_baton.classList.contains('active')) {
//       ifAnyActive = true
//     }
//   });
//   return ifAnyActive
// };

// Senior Style
const ifAnyChecked = (baton) => baton.classList.contains("active");
btnSubmit.addEventListener("click", function () {
  // junior Style
  // if (ifAnyChecked()){
  //   resultPage.style.display = "flex";
  // } else {
  //   alert('Please select a rating!')
  // }

  // Senior style
  if (btns.some(ifAnyChecked)) {
    resultPage.style.display = "flex";
    mainPage.style.display = "none";
  } else {
    alert("Please select a rating!");
  }
});
