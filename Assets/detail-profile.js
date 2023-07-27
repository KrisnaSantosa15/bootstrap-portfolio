// Animate on Scroll Initialization
AOS.init();

// Tooltip Initialization

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl, {})
);

// File Input Customization
document.addEventListener("DOMContentLoaded", function () {
  var file = document.getElementById("file-input");
  var label = file.nextElementSibling;
  var labelText = label.querySelector("span");
  var labelRemove = document.querySelector("svg.remove");
  var labelDefault = labelText.textContent;

  // on file change
  file.addEventListener("change", function (event) {
    var fileName = file.value.split("\\").pop();
    if (fileName) {
      labelText.textContent = fileName;
      labelRemove.style.display = "inline";
    } else {
      labelText.textContent = labelDefault;
      labelRemove.style.display = "none";
    }
  });

  // Remove file
  labelRemove.addEventListener("click", function (event) {
    file.value = "";
    labelText.textContent = labelDefault;
    labelRemove.style.display = "none";
  });
});

// Validation Form Bootstrap
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
