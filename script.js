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

  // Get a reference to the burger button and nav menu
const burgerButton = document.querySelector('.burger-button');
const navMenu = document.querySelector('.menu');

// Add a click event listener to the burger button
burgerButton.addEventListener('click', function() {
  // Toggle the "show" and "open" classes on the nav menu
  navMenu.classList.toggle('show');
  navMenu.classList.toggle('open');
});