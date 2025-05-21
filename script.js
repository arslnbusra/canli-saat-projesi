function updateClock() {
    const now = new Date();

    let saat = now.getHours().toString().padStart(2, '0');
    let dakika = now.getMinutes().toString().padStart(2, '0');
    let saniye = now.getSeconds().toString().padStart(2, '0');

    const zaman = `${saat}:${dakika}:${saniye}`;
    document.getElementById('clock').textContent = zaman;

    const gunler = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    const aylar = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz',
                   'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

    const tarih = `${now.getDate()} ${aylar[now.getMonth()]} ${now.getFullYear()} ${gunler[now.getDay()]}`;
    document.getElementById('date').textContent = tarih;
}

setInterval(updateClock, 1000);
updateClock();
