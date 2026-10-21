document.getElementById("go").addEventListener("click",function(){
  var v=document.getElementById("em").value.trim(),o=document.getElementById("ok");
  o.textContent=/^\S+@\S+\.\S+$/.test(v)?"Спасибо. Следующий выпуск придёт на вашу почту.":"Проверьте адрес: в нём должен быть знак @ и домен.";
});
