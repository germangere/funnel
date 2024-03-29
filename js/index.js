const endDate = new Date(2023, 11, 11, 9, 0, 0);

function updateCountdown() {
  const now = new Date();
  const timeLeft = endDate - now;

  if (timeLeft <= 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
  } else {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = formatNumber(days);
    document.getElementById('hours').textContent = formatNumber(hours);
    document.getElementById('minutes').textContent = formatNumber(minutes);
    document.getElementById('seconds').textContent = formatNumber(seconds);
  }
}

function formatNumber(number) {
  return number.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();


const acordeon = document.querySelectorAll('.contenedor');

acordeon.forEach(element => {
  const contenido = element.querySelector('.contenido')
  element.addEventListener('click', function () {
    this.classList.toggle('activa')
    if (element.classList.contains('activa')) {
      contenido.style.height = contenido.scrollHeight + 'px'
    } else {
      contenido.style.height = '0'
    }
  })
})