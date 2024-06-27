var img = document.getElementsByTagName("img")[0];
var input = document.getElementsByTagName("input")[0];
var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", () => {
  var url = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${input.value}`;
  img.src = url;
});
