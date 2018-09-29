var sscvalue;
var sscmks;
var sscmks1;
var sscradio;
var sscpar;
var sscyop;

var intervalue;
var intermks;
var intermks1;
var interradio;
var interper;
var interyop;

var btechrvalue;
var btechmksrmks;
var btechmks1;
var btechradio;
var btechpar;
var btechyop;

var name;
var rollno;
var email;
var store;

function getDetails(){
  sscvalue=document.getElementById("sscvalue").value;
  sscmks=document.getElementById("sscmks");
  sscmks1=document.getElementById("sscmks1");
  sscpar=document.getElementById("sscpar").value;
  sscyop=document.getElementById("sscyop").value;

interevalue=document.getElementById("intervalue").value;
intermks=document.getElementById("intermks");
intermks1=document.getElementById("intermks1");
interper=document.getElementById("interper").value;
interyop=document.getElementById("interyop").value;

btechevalue=document.getElementById("btechvalue").value;
btechmks=document.getElementById("btechmks");
btechmks1=document.getElementById("btechmks1");
btechpar=document.getElementById("btechpar").value;
btechyop=document.getElementById("btechyop").value;
if (sscmks.checked){
  var sscradio=sscmks.value;
}else{
  var sscradio=sscmks1.value
}
if (intermks.checked){
  var interradio=intermks.value;
}else{
  var interradio=intermks1.value;
}
if (btechmks.checked){
  var btechradio=btechmks.value;
}else{
  var btechradio=btechmks1.value;
}
console.log(sscvalue+" "+sscradio+" "+sscpar+" "+sscyop);
console.log(intervalue+" "+interradio+" "+interper+" "+interyop);
console.log(btechevalue+" "+btechradio+" "+btechpar+" "+btechyop);



      function getDetails(){
  name= document.getElementById("name").value;
   rollno=document.getElementById("rollno").value;
   email=document.getElementById("email").value;
   console.log(name+""+rollno+""+email);

   if(window.indexdDB){
     console.log("indexd db is not working...!");
   }
var request=window.indexedDB.open("svitDB",1);
request.onerror=e=>{
  console.log(e);
}
request.onupgradeneeded=e=>{
  var dbname=e.target.result;
dbname.createObjectStore("cse",{keypath:"roll"});

  console.log("upgraded....!");
}
request.onsuccess=e=>{
  var dbname=e.target.result;
var store=dbname.transacation("cse","readwrite").objectStore("cse");
  store.put(
    {
      "name":name,
      "roll":roll,
      "email":email,
      "co":co,

      "eduDetails":
      {
        "ssc":[
           sscvalue,
             sscradio,
            sscper,
            sscyop
      ],
      "inter":[
        intervalue,
        interradio,
        interper,
        interyop
      ],
      "btech":[
        btechvalue,
        btechradio,
        btechpar,
        btechyop
      ]
    }
    }
  );
  console.log("success.....!");
}

}
localStorage.setItem("roll",rollno);
window.open("resume.html","_self");

}
