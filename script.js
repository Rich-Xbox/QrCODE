let input = document.querySelector("#qrInput")
let btn = document.querySelector(".btn")
let qrImg = document.querySelector("#qrImage")
let rang = document.querySelector("#qrColor")
let orqaFon = document.querySelector("#bgColor")
let ota = document.querySelector("#qrcode")

btn.addEventListener("click", ()=>{
    ota.innerHTML  = ""
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: input.value,
        width: 128,
        height: 128,
        colorDark : rang.value,
        colorLight : orqaFon.value,
        correctLevel : QRCode.CorrectLevel.H
    });
})


rang.addEventListener("change", (e)=>{
  ota.innerHTML  = ""
console.log(e.target.value);
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: input.value,
    width: 128,
    height: 128,
    colorDark : e.target.value,
    colorLight : orqaFon.value,
    correctLevel : QRCode.CorrectLevel.H
});
})

orqaFon.addEventListener("change", (e)=>{
    ota.innerHTML  = ""
  console.log(e.target.value);
  var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: input.value,
      width: 128,
      height: 128,
      colorDark : rang.value,
      colorLight : e.target.value,
      correctLevel : QRCode.CorrectLevel.H
  });
  })
