const copyTokenButton = document.querySelector('.skeeev__token-button');
const tokenCodeElem = document.querySelector('.skeeev__token-code');

if (copyTokenButton && tokenCodeElem) {
  copyTokenButton.addEventListener('click', () => {
    const code = tokenCodeElem.getAttribute('title')
    navigator.clipboard.writeText(code);
    copyTokenButton.classList.add('active');
  });
}