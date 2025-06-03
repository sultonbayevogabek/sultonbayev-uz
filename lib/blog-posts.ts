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
    title: 'HTML markerlash tili',
    slug: 'html-technology',
    date: '3-iyun, 2025',
    image: 'https://www.cantech.in/blog/wp-content/uploads/2024/03/What-is-HTML-958x575.webp?height=600&width=1200',
    excerpt: 'HTML texnologiyasining paydo bo\'lishi va rivojlanish bosqichlari haqida batafsil ma\'lumot.',
    content: `
      <h2 class="text-lg mb-2"><strong>HTML texnologiyasining tarixi va rivojlanishi</strong></h2>
      <p>HTML (HyperText Markup Language) internetning asosiy tili bo'lib, 1990-yillardan buyon veb-sahifalarni yaratishda ishlatib kelinmoqda.</p>

      <h2>HTMLning yaratilishi</h2>
      <p>HTML 1991-yilda Tim Berners-Lee tomonidan CERN laboratoriyasida ishlab chiqilgan. Dastlab u olimlar o'rtasida hujjatlarni almashish uchun mo'ljallangan edi.</p>

      <h2>HTML versiyalarining rivojlanishi</h2>
      <ul>
        <li><strong>HTML 1.0</strong> - 1991-yilda yaratilgan ilk versiya</li>
        <li><strong>HTML 2.0</strong> - 1995-yilda standartlashtirilgan versiya</li>
        <li><strong>HTML 3.2</strong> - 1997-yilda W3C tomonidan tavsiya etilgan</li>
        <li><strong>HTML 4.01</strong> - 1999-yilda chiqqan muhim yangilanish</li>
        <li><strong>XHTML</strong> - 2000-yilda XML qoidalariga asoslangan versiya</li>
        <li><strong>HTML5</strong> - 2014-yilda rasman tasdiqlangan zamonaviy standart</li>
      </ul>

      <h2>HTML5 ning yangi xususiyatlari</h2>
      <p>HTML5 quyidagi muhim yangiliklar bilan keldi:</p>
      <ul>
        <li>Semantik elementlar (<strong>header, footer, nav, article</strong>)</li>
        <li>Audio va video teglar</li>
        <li>Canvas elementi orqali grafika yaratish</li>
        <li>Veb-formalar uchun yangi input turlari</li>
        <li>Local Storage va Session Storage</li>
      </ul>

      <h2>Kelajakdagi rivojlanish</h2>
      <p>HTML texnologiyasi doimiy ravishda rivojlanmoqda. Hozirda HTML5 ning yangi xususiyatlari va funksiyalari ustida ish olib borilmoqda. Bu esa veb-dasturlash imkoniyatlarini yanada kengaytirmoqda.</p>
    `
  }
];
