document.addEventListener("DOMContentLoaded", function () {
  // Cek apakah user sudah pernah melihat modal (gunakan localStorage)
  if (!localStorage.getItem("popupShown")) {
    // Tampilkan modal
    document.getElementById("popupModal").style.display = "block";

    // Set flag di localStorage agar tidak ditampilkan lagi
    localStorage.setItem("popupShown", "true");
  }
});

// Fungsi untuk menutup modal
function closeModal() {
  document.getElementById("popupModal").style.display = "none";
}
