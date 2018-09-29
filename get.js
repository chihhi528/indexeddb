var rollnumber=localStorage.getItem("roll");

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
var store=dbname.transaction("cse","readwrite").objectStore("cse");
var data=store.get(rollnumber);
data.onsuccess=e=>{
  var res=e.target.result;
 var main=document.getElementById("mainDiv");
 var left=document.getElementById("div");
 left.classList.add("leftDiv");
 var name=document.createElement("h3");
 name.textcontent=res.name;
 left.appendChild(name);
 main.appendChild(left);
 var hr=document.createElement("hr");
 left.appendChild(hr);
 var roll=document.createElement("p");
 roll.textcontent=res.roll;
 left.appendChild(roll);
 var email=document.createElement("p");
 email.textcontent=res.email;
 left.appendChild(email);


 var right=document.createElement("div");
 right.classList.add("rightdiv");
 var co=document.createElement("p");
 co.textcontent=res.co;
 right.appendChild(co);
 main.appendChild(right);

}

console.log("success....!");
}
