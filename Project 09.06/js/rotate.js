const records = document.querySelectorAll('.vinyl');

records.forEach(record => {
  record.addEventListener('click', () => {
    record.classList.toggle('rotate');
  });
});