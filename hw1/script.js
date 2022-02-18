function isCheckedOG() {
  // Get the checkbox
  var checkBox = document.getElementById("iag");
  // Get the output text
  var button = document.getElementById("ag");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}


function divChange() {
  document.getElementById("terms").style.display = "none";
  document.getElementById("thank").style.display = "block";
}

function closeForm() {
  document.getElementById("my-popup").style.display = "none";
}

function isChecked() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var button = document.getElementById("cont");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
