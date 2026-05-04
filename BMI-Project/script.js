/* BMI = WEIGHT / HEIGHT^2 (IN METERS)
    NORMAL B/W 18.5 TO 25
    THIN   LESS THAN 18.5
    FAT    GREATER THAN 25
*/

let bmiForm = document.querySelector(".bmi-form");
bmiForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;

  const name = form.querySelector("#username").value;
  const weight = Number(form.querySelector("#weight").value);
  const height = Number(form.querySelector("#height").value);

  let pheight = height / 100;
  let bmi = Number((weight / pheight ** 2).toFixed(2));

  console.log(
    "Name: " +
      name +
      "\nWeight: " +
      weight +
      "\nHeight: " +
      height +
      "\nBMI: " +
      bmi
  );

  let result;
  if (bmi > 25) {
    console.log("FAT");
    result = "FAT";
  } else if (bmi >= 18.5 && bmi <= 25) {
    console.log("Normal");
    result = "NORMAL";
  } else if (bmi >= 1 && bmi < 18.5) {
    console.log("THIN");
    result = "THIN";
  } else {
    console.log("Once Check Details & Enter Valid Details.");
    result = "Once Check Details & Enter Valid Details.";
  }

  form.querySelector(
    "#result"
  ).textContent = `${name.toUpperCase()}, You are ${result}`;
});

document.querySelector("#reset").addEventListener("click", function (e) {
  bmiForm.querySelector("#username").value = "";
  bmiForm.querySelector("#weight").value = "";
  bmiForm.querySelector("#height").value = "";
  bmiForm.querySelector("#result").textContent = "";
});