var regexEmail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var regexName = /^[a-öA-Ö]{3,20}$/;
var regexPhone = /^(0)\s*(7[0236])\s*(\d{4})\s*(\d{3})$/;
var regexText = /^[a-öA-Ö]{3,150}$/;
$('#invalid_text').hide();
$('#invalid_phone').hide();
$('#invalid_name').hide();
$('#invalid_email').hide();
$("#Valid").hide();
var test_valid = false;
$("#form").submit(function() { // när användaren trycker på submit
    var email = $('#emailBox').val();
    var name = $('#firstNameBox').val();
    var phone = $('#phoneNumberBox').val();
    var text = $('#textBox').val();
    console.log(phone);
    console.log(email);
    console.log(name);
    console.log(text);
    console.log("hej");


    var validEmail = regexEmail.test(email);
    console.log(validEmail);
    var validName = regexName.test(name);
    console.log(validName);
    var validPhone = regexPhone.test(phone);
    console.log(validPhone);
    var validText = regexText.test(text);
    console.log(validText);



    if (validEmail) {
        console.log("email är validerad");
        $('#invalid_email').hide();
    }
    else {
        console.log("email ej godkänd");
        $('#invalid_email').show();
    }

    if (validName) {
        console.log("namn är validerad");
        $('#invalid_name').hide();
    }
    else {
        console.log("namn ej godkänd");
        $('#invalid_name').show();
    }

    if (validPhone) {
        console.log("telefon är validerad");
        $('#invalid_phone').hide();
    }
    else {
        console.log("telefon ej validerad");
        $('#invalid_phone').show();
    }

    if (validText) {
        console.log("text är validerad");
        $('#invalid_text').hide();
    }
    else {
        console.log("text ej godkänd");
        $('#invalid_text').show();
    }

    if (validEmail && validName && validPhone && validText === true) {
        $("#Valid").show();
    }
    else {
        $("#Valid").hide();
    }


    event.preventDefault(); // gör så att sidan inte laddas om!
});

// var email=document.querySelector("$emailBox");
