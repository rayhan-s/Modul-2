document
  .getElementById("registration-form")
  .addEventListener("submit", function (event) {
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const alamat = document.getElementById("alamat").value.trim();

    if (!nama || !email || !alamat) {
      alert("Anda harus mengisi data dengan lengkap");
      event.preventDefault();
    }
  });
