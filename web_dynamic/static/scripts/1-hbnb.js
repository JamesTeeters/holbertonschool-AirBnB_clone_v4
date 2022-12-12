var checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener('change', function() {
  checked_list = {}
  if (this.checked) {
    checked_list.append(this.checked);
  } else {
    console.log("Checkbox is not checked..") ;
  }
});
$(document).ready(function() {
    // Your code goes here
});
