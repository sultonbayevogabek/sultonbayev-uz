export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Veb-saytning performansi va yuklanish tezligini qanday oshirish mumkin?',
    slug: 'website-performance-optimization',
    date: '3-iyun, 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?height=600&width=1200',
    excerpt: 'Veb-saytingizning yuklanish tezligini oshirish va foydalanuvchi tajribasini yaxshilash uchun amaliy maslahatlar va usullar.',
    content: `
      <p>Bugungi raqamli dunyoda veb-saytning tez yuklanishi foydalanuvchilar uchun eng muhim omillardan biridir.
        Tadqiqotlar shuni ko'rsatadiki, agar sayt 3 soniyadan ko'proq yuklanayotgan bo'lsa, foydalanuvchilarning 40% dan ortig'i uni
        tark etadi. Bu maqolada veb-sayt performansini oshirishning eng samarali usullarini ko'rib chiqamiz.</p>

      <div>
        <h2 class="mb-1 text-xl font-bold">Performansning ahamiyati</h2>
        <p>Veb-sayt tezligi nafaqat foydalanuvchi tajribasiga ta'sir qiladi, balki qidiruv tizimlarida
        reytingga ham bevosita bog'liq. Google va boshqa qidiruv tizimlari tez yuklanadigan saytlarni
        yuqori o'rinlarga qo'yadi. Shuningdek, mobil qurilmalarda internetga ulanish tezligi har doim ham yuqori
        bo'lmasligi sababli, sayt optimizatsiyasi yanada muhim ahamiyat kasb etadi.</p>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">1. Rasmlarni optimizatsiya qilish</h2>
        <p>Rasmlar ko'pincha veb-sahifaning eng katta qismini tashkil etadi.
        Ularni to'g'ri optimizatsiya qilish performansni sezilarli darajada oshiradi.</p>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">Formatni to'g'ri tanlash</h3>
        <ul>
          <li><strong>- JPEG:</strong> Fotografiyalar va murakkab rasmlar uchun</li>
          <li><strong>- PNG:</strong> Shaffof fon va oddiy grafikalar uchun</li>
          <li><strong>- WebP:</strong> Zamonaviy format, JPEG va PNG dan 25-30% kichik</li>
          <li><strong>- SVG:</strong> Vektor grafikalar uchun</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-lg font-bold">Praktik tavsiyalar</h2>
        <ul class="pl-3">
          <li>- Rasmlarni siqish (compression) dan foydalaning</li>
          <li>- Zamonaviy formatlarni qo'llang (WebP, AVIF)</li>
          <li>- Lazy loading texnikasini ishlatib, faqat ko'rinadigan rasmlarni yuklang</li>
          <li>- Responsive images bilan turli ekran o'lchamlari uchun mos rasmlar taqdim eting</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">2. CSS va JavaScript optimizatsiyasi</h2>
        <p>Rasmlar ko'pincha veb-sahifaning eng katta qismini tashkil etadi.
        Ularni to'g'ri optimizatsiya qilish performansni sezilarli darajada oshiradi.</p>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Xulosa</h2>
        <p>Veb-sayt performansini oshirish murakkab jarayon bo'lib, bir nechta yo'nalishda
        ishlab borish talab etadi. Rasmlarni optimizatsiya qilish, keshdan to'g'ri foydalanish,
         server sozlamalarini yaxshilash va muntazam monitoring orqali foydalanuvchilar
         uchun tez va qulay veb-sayt yaratish mumkin.</p>
         <p>Eng muhimi, bu optimizatsiya ishlarini bosqichma-bosqich amalga oshirish va har bir o'zgarishdan keyin natijalarni o'lchashdir. Shunday qilib, qaysi usullar sizning saytingiz uchun eng samarali ekanligini aniqlash mumkin.</p>
         <p>Esda tutingki, performans - bu bir martalik ish emas, balki doimiy jarayondir. Texnologiyalar rivojlanishi va foydalanuvchi ehtiyojlari o'zgarishi bilan saytingizni ham yangilab borishingiz kerak.</p>
      </div>
    `
}
];
