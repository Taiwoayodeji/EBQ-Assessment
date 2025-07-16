// Event listener for the CONTACT US button in the footer
var footerBtn = document.querySelector('.footer-contact-btn');
if (footerBtn) {
  footerBtn.addEventListener('click', function() {
    window.location.href = 'mailto:info@ebq.com?subject=Contact%20Request%20from%20Website';
  });
}
// Event listener for the CONTACT US button in the header
var headerBtn = document.querySelector('.contact-btn');
if (headerBtn) {
  headerBtn.addEventListener('click', function() {
    window.location.href = 'mailto:info@ebq.com?subject=Contact%20Request%20from%20Website';
  });
} 