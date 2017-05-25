


function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#coverphoto')
          .attr('src', e.target.result)
          .width(245)
          .height(220);
    };

    reader.readAsDataURL(input.files[0]);
  }
}
//////////////////////////




function cancleprofile() {
  document.getElementById("saveprofile").style.visibility = "hidden";
  document.getElementById("cancleprofile").style.visibility = "hidden";
  document.getElementById("employeefname").disabled = true;
  document.getElementById("employeelname").disabled = true;
  document.getElementById("dob").disabled = true;
  document.getElementById("contactno").disabled = true;
  document.getElementById("area1").disabled = true;
  document.getElementById("employeefname").style.borderColor = 'transparent';
  document.getElementById("employeelname").style.borderColor = 'transparent';
  document.getElementById("dob").style.borderColor = 'transparent';
  document.getElementById("contactno").style.borderColor = 'transparent';
  document.getElementById("area1").style.borderColor = 'transparent';
}

function editprofile() {
    alert(hello);
    document.getElementById("saveprofile").style.visibility = "visible";
    document.getElementById("cancleprofile").style.visibility = "visible";

    document.getElementById("employeefname").disabled = false;
    document.getElementById("employeelname").disabled = false;
    document.getElementById("dob").disabled = false;
    document.getElementById("contactno").disabled = false;
    document.getElementById("area1").disabled = false;

    document.getElementById("employeefname").style.border = "2px solid #0099CC";
    document.getElementById("employeelname").style.border = "2px solid #0099CC";
    document.getElementById("dob").style.border = "2px solid #0099CC";
    document.getElementById("contactno").style.border = "2px solid #0099CC";
    document.getElementById("area1").style.border = "2px solid #0099CC";
}
function saveprofile() {
  v1 = document.getElementById("employeefname").value;
  v2 = document.getElementById("dob").value;
  v3 = document.getElementById("contactno").value;
  v4 = document.getElementById("profiledes").value;
  v5 = document.getElementById("employeelname").value;
  document.getElementById("employeefname").value = v1
  document.getElementById("dob").value = v2;
  document.getElementById("contactno").value = v3;
  document.getElementById("profiledes").value = v4;
  document.getElementById("employeelname").value = v5;

  document.getElementById("saveprofile").style.visibility = "hidden";
  document.getElementById("cancleprofile").style.visibility = "hidden";
  document.getElementById("employeefname").disabled = true;
  document.getElementById("employeelname").disabled = true;
  document.getElementById("dob").disabled = true;
  document.getElementById("contactno").disabled = true;
  document.getElementById("profiledes").disabled = true;
  document.getElementById("employeefname").style.borderColor = 'transparent';
  document.getElementById("employeelname").style.borderColor = 'transparent';
  document.getElementById("dob").style.borderColor = 'transparent';
  document.getElementById("contactno").style.borderColor = 'transparent';
  document.getElementById("profiledes").style.borderColor = 'transparent';

  document.getElementById("personalform").submit();
  

}
///////////////////////////////////////////////////////////////////////////////////

