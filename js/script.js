var buttonsearch = document.querySelector(".button-search");
var form = document.querySelector("form");
var datecheckin = form.querySelector("[name=date-check-in]");
var datecheckout = form.querySelector("[name=date-check-out]");
var adults = form.querySelector("[name=adults]");
var children = form.querySelector("[name=children]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("date-check-in");
}
catch (err) {
  isStorageSupport = false;
}

buttonsearch.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("form-show");
  if (storage) {
    datecheckin.value = storage;
    datecheckout.focus();
  }
  else {
    datecheckin.focus();
  }
 });
form.addEventListener("submit", function (evt) {
  if (!datecheckin.value || !datecheckout.value || !adults.value || !children.value) {
    evt.preventDefault();
    form.classList.remove("form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("form-error");
  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("date-check-in", datecheckin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (form.classList.contains("form-show")) {
      form.classList.remove("form-show");
      form.classList.remove("form-error");
    }
  }
});
