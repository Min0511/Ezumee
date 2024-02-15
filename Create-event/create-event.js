const categoryBtn = document.querySelector("#event-category");
const dialog = document.querySelector("dialog");
const cancelDialogBtn = document.querySelector("#cancel-button")
const categoryList = document.querySelectorAll("dialog label");

categoryBtn.addEventListener("click",showDialog);
cancelDialogBtn.addEventListener("click",closeDialog);

function showDialog(event) {
  event.preventDefault();
  dialog.showModal();
  dialog.classList.remove("hidden");
}

function closeDialog() {
  dialog.close();
  dialog.classList.add("hidden");
}

categoryList.forEach((cate) => {
  cate.addEventListener("click", () => {
    categoryBtn.textContent = cate.textContent;
    dialog.close();
    dialog.classList.add("hidden");
  });
});
