var select = document.querySelectorAll("p.demo");
for (var i=0; i<select.length; i++){ //since query is allowed only on one id or qne element use for loop and query selector all.
    select[i].style.backgroundColor="green";
}