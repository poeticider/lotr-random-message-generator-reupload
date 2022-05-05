let btn = document.createElement("button");
btn.innerHTML = "test button";
btn.onclick = function () {
  alert("Button is clicked");
};
document.body.appendChild(btn);