function CheckPassword(inputtxt) 
{ 
var passw=  /^[A-Za-z]\w{7,14}$/;
if(inputtxt.value.match(passw)) 
{ 

return true;
}
else
{ 
alert('Wrong...!')
location.reload();
return false;
}
}