function showTab(tabId) {
  const tabs = document.querySelectorAll('.content');
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');
}

function showToast() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function copyText() {
  navigator.clipboard.writeText("loadstring(game:HttpGet('https://washiez.lol/script.lua'))()");
  showToast();
}

function copyLancetText() {
  navigator.clipboard.writeText("loadstring(game:HttpGet('https://cdn.rtu.lol/lancet.lua'))()");
  showToast();
}

function copyInfiniteYieldText() {
  navigator.clipboard.writeText("loadstring(game:HttpGet('https://raw.githubusercontent.com/EdgeIY/infiniteyield/master/source'))()");
  showToast();
}
