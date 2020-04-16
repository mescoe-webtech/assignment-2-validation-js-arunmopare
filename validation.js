function validate() {
    var lname = document.getElementById('last_name');
    var fname = document.getElementById('first_name');
    var mname = document.getElementById('middle_name');
    var eamil = document.getElementById('email_address');
    var nationality = document.getElementById('nationality');
    var occupation = document.getElementById('occupation');
    var city = document.getElementById('city');
    var state = document.getElementById('state');
    var mobile_number = document.getElementById('mobile_number');
    var district = document.getElementById('district');
    var pin_code = document.getElementById('pin_code');
    var aadhar_number = document.getElementById('aadhar_number');
    var pan_number = document.getElementById('pan_number');

    var phnn = /^\d{10}$/;
    if (!phnn.test(mobile_number.value)) {
      alert("Enter a valid Mobile Number of 10 Digits only!");
      mobile_number.focus();
      return false;
    }

    if (occupation.value === '' || occupation.value == null) {
        alert('Occupation is required!');
        return false;
    }

    if (nationality.value === '' || nationality.value == null) {
        alert('Nationality is required!');
        return false;
    }

    if (lname.value === '' || lname.value == null) {
        alert('Last Name is required!');
        return false;
    }

    if (fname.value === '' || fname.value == null) {
        alert('First Name is required!');
        return false;
    }
    if (mname.value === '' || mname.value == null) {
        alert('Middle Name is required!');
        return false;
    }


    if (city.value === '' || city.value == null) {
        alert('City Name is required!');
        return false;
    }

    if (state.value === '' || state.value == null) {
        alert('State Name is required!');
        return false;
    }

    if (district.value === '' || district.value == null) {
        alert('District Name is required!');
        return false;
    }

    if (pin_code.value === '' || pin_code.value == null) {
        alert('Pin Code is required!');
        return false;
    }

    if (aadhar_number.value === '' || aadhar_number.value == null) {
        alert('lname Name is required!');
        return false;
    }

    var phnn = /^\d{10}$/;
    if (!phnn.test(pan_number.value)) {
      alert("Enter a valid PAN Number of 10 Digits only!");
      pan_number.focus();
      return false;
    }

    
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!reg.test(eamil.value)) {
        alert('You have entered an invalid email address!');
        return false;
    }
}

