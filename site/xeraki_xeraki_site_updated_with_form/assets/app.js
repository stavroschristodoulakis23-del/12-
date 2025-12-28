(function(){
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll('[data-page]').forEach(a => {
    if (a.getAttribute("data-page") === path) a.classList.add("active");
  });

  const burger = document.getElementById("burger");
  const drawer = document.getElementById("drawer");
  if (burger && drawer){
    burger.addEventListener("click", () => {
      drawer.classList.toggle("open");
      burger.setAttribute("aria-expanded", drawer.classList.contains("open") ? "true" : "false");
    });
  }

  const homeGallery = document.getElementById("homeGallery");
  if (homeGallery){
    const imgs = [
      {src:"assets/images/ad1.png", cap:"Καθημερινό άγχος; Τώρα υπάρχει λύση."},
      {src:"assets/images/ad2.png", cap:"Εμείς αναλαμβάνουμε τη μετακίνηση."},
      {src:"assets/images/ad3.png", cap:"Ασφάλεια • Συνέπεια • Ηρεμία"},
    ];
    homeGallery.innerHTML = imgs.map(i => `
  <div class="gitem">
    <img src="${i.src}" alt="${i.cap}" loading="lazy" decoding="async">
    <div class="gtext">
      <b>${i.cap}</b>
      <span>Πεζή συνοδεία μαθητών με οργάνωση, συνέπεια και υπευθυνότητα.</span>
    </div>
  </div>
`).join("");
  }

  const interestForm = document.getElementById("interestForm");
  if (interestForm){
    interestForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Ευχαριστούμε! Λάβαμε την εκδήλωση ενδιαφέροντος και θα επικοινωνήσουμε σύντομα.");
      interestForm.reset();
    });
  }
})();