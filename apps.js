function calculateAge() {
  const dob = document.getElementById("time").value;
  const result = document.querySelector("#result");

  // if(!dob) {
  //   result.innerText = "Select your Date of birth ?";
  // } 

  const birthdate = new Date(dob);
  const today = new Date();

  let years = today.getFullYear()-birthdate.getFullYear();
  let month = today.getMonth()-birthdate.getMonth();
  let day = today.getDate()-birthdate.getDate();

  if(day<0) {
    month--;
    day = day+ new Date(today.getFullYear(),today.getMonth(),today.getDate());
  } 
  if(month<0) {
    years--;
    month = month+12;
  }

  result.innerText = `Your age is ${years} years,${month} months, ${day} days`;
}