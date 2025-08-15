// UI interactions
(function() {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Price slider output
  const priceRange = document.getElementById('priceRange');
  const priceOut = document.getElementById('priceOut');
  if (priceRange && priceOut) {
    const updatePrice = () => priceOut.textContent = '₹' + Number(priceRange.value).toLocaleString('en-IN');
    priceRange.addEventListener('input', updatePrice);
    updatePrice();
  }

  // Bootstrap validation
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        // Replace with your API call
        alert('Thanks! This demo captured your form. Integrate your backend to proceed.');
      }
      form.classList.add('was-validated');
    }, false);
  });

  // Blur toggle for demo video
  const blurToggle = document.getElementById('blurToggle');
  const comfortVideo = document.getElementById('comfortVideo');
  if (blurToggle && comfortVideo) {
    blurToggle.addEventListener('change', () => {
      comfortVideo.classList.toggle('blurred', blurToggle.checked);
    });
  }
})();