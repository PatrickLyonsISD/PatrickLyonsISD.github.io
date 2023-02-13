const loading = document.getElementById('loading');
const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    loading.style.display = 'flex';
    setTimeout(() => {
      window.location = this.href;
    }, 1000);
  });
});

window.addEventListener('load', function() {
  loading.style.display = 'none';
});

function showLoading() {
    document.getElementById("loading").style.visibility = "visible";
    document.getElementById("footer").style.visibility = "hidden";
  }

  function hideLoading() {
    document.getElementById("loading").style.visibility = "hidden";
    document.getElementById("footer").style.visibility = "visible";
  }
