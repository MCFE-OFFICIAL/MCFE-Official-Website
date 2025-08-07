const newsData = [
  {
    title: "MCFE akan segera umumkan rekrutmen staff dan Audisi Generasi 2!",
    date: "5 Agustus 2025",
    image: "./img/events/Dance.JPG",
    summary: "MCFE membuka kesempatan bagi talenta muda dari Surabaya dan sekitarnya untuk bergabung menjadi bagian dari artis MCFE generasi 2. Persiapkan dirimu dan wujudkan mimpi!",
  },
  {
    title: "Comeback Setelah Hiatus, Nancy Siap Rilis Single Lagi",
    date: "28 Juli 2025",
    image: "./img/events/IMG_20250605_150307.jpg",
    summary: "Setelah masa hiatus lama, Nancy akan merilis lagu berjudul 'Better Life'. Lagu ini akan tersedia di semua platform streaming.",
  },
  {
    title: "Tampil Gebrakan Baru, Rasyiid Mulai Latihan Vokal & Rap",
    date: "15 Juli 2025",
    image: "./img/events/DSCF5314.JPG",
    summary: "Founder MCFE, Rasyiid, mulai meranah ke dunia vokal dan rap setelah 3 tahun jadi produser musik. Motivasinya agar Rasyiid bisa punya single mandiri.",
  }
];

const newsContainer = document.getElementById('newsContainer');

newsData.forEach(news => {
  const card = document.createElement('div');
  card.className = 'news-card';
  card.innerHTML = `
    <img src="${news.image}" alt="${news.title}" class="news-image" />
    <div class="news-content">
      <h2 class="news-title">${news.title}</h2>
      <p class="news-date">${news.date}</p>
      <p class="news-summary">${news.summary}</p>
      <a href="#" class="read-more">Baca Selengkapnya →</a>
    </div>
  `;
  newsContainer.appendChild(card);
});
