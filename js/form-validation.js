function formValidation() {
    var x = document.forms["msform"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        location.reload();
    }
}
