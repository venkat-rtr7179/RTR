 var request=new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload=function()
{
    var res=JSON.parse(request.response);
    console.log(res);
    var result=res.filter((ele)=>ele.region=="Asia");
    console.log(result);
}