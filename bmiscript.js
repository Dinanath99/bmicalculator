const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.getElementById("height").value);
  console.log(height);
  const weight = parseInt(document.getElementById("weight").value);
  console.log(weight);

  const result = document.getElementById("result");

  // validate the form
  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `<span> please enter valid height value </span>`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `<span> please enter valid weight value </span>`;
  } else {
    let feet = (height / 30.48).toFixed(1);
    let meter = height / 100;
    let new_height = meter * meter;
    const bmi = weight / new_height;
    if (bmi < 18.6) {
      result.innerHTML = `<span>Your height is ${feet} Feet tall :  Under Weight</span>`;
    }
    if (bmi > 18.6 && 24.9) {
      result.innerHTML = `<span>Your height is ${feet} Feet tall :  Normal range</span>`;
    }
    if (bmi > 24.9) {
      result.innerHTML = `<span>Your height is ${feet} Feet tall : Over Weight</span>`;
    }
    //result.innerHTML = `<span> ${bmi} </span>`;
  }
});
