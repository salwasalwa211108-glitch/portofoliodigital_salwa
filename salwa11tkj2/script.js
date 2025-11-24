document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.getElementById("nextBtn");

  nextBtn.addEventListener("click", () => {
    window.location.href="about.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.getElementById("nextBtn");
  const backBtn = document.getElementById("backBtn");

  nextBtn.addEventListener("click", () => {
     window.location.href = "about.html";
  });

  backBtn.addEventListener("click", () => {
    window.location.href = "home.html";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.getElementById("nextBtn");
  const backBtn = document.getElementById("backBtn");

  backBtn.addEventListener("click", () => {
    window.location.href = "about.html";
  });

  nextBtn.addEventListener("click", () => {
    window.location.href = "certificate.html";
  });
});

document.getElementById('backBtn').addEventListener('click', function() {
});

nextBtn.addEventListener("click", () => {
    window.location.href = "experience.html";
  });

document.getElementById('nextBtn').addEventListener('click', function() {
});

document.getElementById("backBtn").addEventListener("click", () => {
    // Aksi tombol "Back" (bisa diarahkan ke halaman sebelumnya)
    window.history.back();
    window.location.href = "experience.html"
});

document.getElementById("backBtn").onclick = function() {
    history.back();
    window.location.href = "experience.html"
};

