function saatGuncelle() {
  const simdi = new Date();
  const saat = simdi.toLocaleTimeString('tr-TR');
  const tarih = simdi.toLocaleDateString('tr-TR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  document.getElementById('saat').innerText = saat;
  document.getElementById('tarih').innerText = tarih;
}

setInterval(saatGuncelle, 1000);
saatGuncelle();

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const konumDiv = document.getElementById('konum');
    konumDiv.innerHTML = `
            <div style="margin-top: 20px;">
                <p style="font-size: 18px; font-weight: bold;">📍 Konumunuz:</p>
                <iframe
                    width="100%" height="300" style="border:0; border-radius: 12px;"
                    loading="lazy"
                    allowfullscreen
                    referrerpolicy="no-referrer-when-downgrade"
                    src="https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed">
                </iframe>
            </div>
        `;
  }, function(error) {
    document.getElementById('konum').innerText = "Konum bilgisi alınamadı.";
  });
} else {
  document.getElementById('konum').innerText = "Tarayıcı konum desteği sunmuyor.";
}
