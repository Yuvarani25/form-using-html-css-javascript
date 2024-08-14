function valid(){
    var firstname=document.validform.firstname.value;
    var email=document.validform.email.value;
    var city=document.validform.city.value;
    var number=document.validform.number.value;
    var address=document.validform.address.value;
    if(firstname==null||email==""||city==""||number==""||address==""){
        alert("Fill the detials");
        return false;
    }
    var emailPattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid Gmail address");
        return false;
    }
}
