// Gallery lightbox: show the clicked photo in the modal
const photoModal = document.getElementById("photoModal");
if (photoModal) {
  photoModal.addEventListener("show.bs.modal", (event) => {
    const trigger = event.relatedTarget;
    const img = document.getElementById("photoModalImg");
    img.src = trigger.dataset.src;
    img.alt = trigger.querySelector("img").alt;
    document.getElementById("photoModalCaption").textContent =
      trigger.dataset.caption;
  });
}

// Contact form: Bootstrap validation, then open the visitor's email app with the message filled in
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add("was-validated");
      return;
    }
    const data = new FormData(form);
    const body = `${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`;
    const mailto = `mailto:your.name@university.ac.ug?subject=${encodeURIComponent(data.get("subject"))}&body=${encodeURIComponent(body)}`;
    document.getElementById("formStatus").classList.remove("d-none");
    form.reset();
    form.classList.remove("was-validated");
    window.location.href = mailto;
  });
}
