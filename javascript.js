function valid(){
    var firstname=document.validform.firstname.value;
    var lastname=document.validform.lastname.value;
    var city=document.validform.city.value;
    var number=document.validform.number.value;
    var address=document.validform.address.value;
    if(firstname==null||lastname==""||city==""||number==""||address==""){
        alert("Fill the detials");
        return false;
    }
}