// Dark / Light theme toggle
function theme(){
  document.body.classList.toggle("dark");
}

// Appointment form alert
document.querySelector("form").addEventListener("submit", function(e){

  e.preventDefault();

  let name = document.querySelector("input[type='text']").value;
  let email = document.querySelector("input[type='email']").value;
  let date = document.querySelector("input[type='date']").value;
  let dept = document.querySelector("select").value;

  if(name === "" || email === "" || date === "" || dept === "Select Department"){
    alert("Please fill all details.");
  }
  else{
    alert("Appointment booked successfully for " + name);
  }

});