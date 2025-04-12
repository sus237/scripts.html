function copyText() {
  navigator.clipboard.writeText("You copied this ✨");
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
