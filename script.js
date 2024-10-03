document.addEventListener("DOMContentLoaded", (event) => {
  generateQR();
});

var qr;

function generateQR() {
  var url = document.getElementById("urlInput").value.trim();

  if (url !== "") {
    var qrCodeDiv = document.getElementById("qrcode");
    qrCodeDiv.innerHTML = "";

    qr = new QRious({
      element: qrCodeDiv,
      value: url,
      size: 300
    });
  } else {
    alert("Please enter a valid URL.");
  }
}

function downloadQR() {
  if (qr) {
    var canvas = document.getElementById("qrcode");
    var url = canvas.toDataURL("image/png");
    var date = new Date();
    var dateString = formatDate(date);
    var filename = "QrCode-" + dateString + ".png";

    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    alert("Please generate a QR code first.");
  }
}

function formatDate(date) {
  var year = date.getFullYear();
  var month = padNumber(date.getMonth() + 1);
  var day = padNumber(date.getDate());
  var hours = padNumber(date.getHours());
  var minutes = padNumber(date.getMinutes());
  var seconds = padNumber(date.getSeconds());
  return day + "-" + month + "-" + year + "_" + hours + "-" + minutes + "-" + seconds;
}

function padNumber(num) {
  return num.toString().padStart(2, '0');
}