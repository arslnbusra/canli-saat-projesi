function updateClockAndDate() {
  const now = new Date();

  // Saat
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;

  // Tarih
  const days = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
  const months = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const weekday = days[now.getDay()];
  document.getElementById("date").textContent = `${day} ${month} ${year} ${weekday}`;
}

setInterval(updateClockAndDate, 1000);
updateClockAndDate();
