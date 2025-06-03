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
          <li><strong class="font-semibold">- JPEG:</strong> Fotografiyalar va murakkab rasmlar uchun</li>
          <li><strong class="font-semibold">- PNG:</strong> Shaffof fon va oddiy grafikalar uchun</li>
          <li><strong class="font-semibold">- WebP:</strong> Zamonaviy format, JPEG va PNG dan 25-30% kichik</li>
          <li><strong class="font-semibold">- SVG:</strong> Vektor grafikalar uchun</li>
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
  <p>CSS va JavaScript fayllari veb-saytning yuklanish tezligiga katta ta'sir ko'rsatadi.
  Bu fayllarni optimizatsiya qilish orqali sahifa yuklanish vaqtini sezilarli darajada
  qisqartirish mumkin.</p>
</div>

<div>
  <h3 class="mb-1 text-lg font-bold">CSS optimizatsiyasi</h3>
  <ul class="pl-3">
    <li>- <strong class="font-semibold">Minification:</strong> Keraksiz bo'sh joylar, sharhlar va satr o'tishlarni olib tashlash</li>
    <li>- <strong class="font-semibold">CSS-ni birlashtirish:</strong> Bir nechta CSS faylini bitta faylga jamlash</li>
    <li>- <strong class="font-semibold">Critical CSS:</strong> Sahifaning yuqori qismida ko'rinadigan elementlar uchun CSS-ni inline qilish</li>
    <li>- <strong class="font-semibold">Foydalanilmagan CSS-ni olib tashlash:</strong> PurgeCSS yoki shunga o'xshash vositalardan foydalanish</li>
  </ul>
</div>

<div>
  <h3 class="mb-1 text-lg font-bold">JavaScript optimizatsiyasi</h3>
  <ul class="pl-3">
    <li>- <strong class="font-semibold">Code splitting:</strong> Katta JavaScript fayllarini kichik qismlarga bo'lish</li>
    <li>- <strong class="font-semibold">Lazy loading:</strong> JavaScript modullarini kerak bo'lganda yuklash</li>
    <li>- <strong class="font-semibold">Tree shaking:</strong> Foydalanilmagan kodni avtomatik olib tashlash</li>
    <li>- <strong class="font-semibold">Minification va compression:</strong> Uglify yoki Terser kabi vositalardan foydalanish</li>
  </ul>
</div>

<div>
  <h3 class="mb-1 text-lg font-bold">Yuklash strategiyalari</h3>
  <ul class="pl-3">
    <li>- <strong class="font-semibold">defer va async:</strong> JavaScript fayllarini to'g'ri yuklash uchun bu atributlardan foydalaning</li>
    <li>- <strong class="font-semibold">Preload va prefetch:</strong> Muhim resurslarni oldindan yuklash</li>
    <li>- <strong class="font-semibold">Resource hints:</strong> Brauzerga keyingi sahifalar uchun tayyorgarlik ko'rish</li>
    <li>- <strong class="font-semibold">Service Workers:</strong> Offline ishlash va kesh boshqaruvi uchun</li>
  </ul>
</div>

<div>
  <h3 class="mb-1 text-lg font-bold">Amaliy maslahatlar</h3>
  <ul class="pl-3">
    <li>- Webpack, Rollup yoki Vite kabi bundlerlardan foydalaning</li>
    <li>- CSS va JS fayllarini CDN orqali tarqating</li>
    <li>- Gzip yoki Brotli siqishdan foydalaning</li>
    <li>- Performance budget belgilang va uni nazorat qiling</li>
  </ul>
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
  },
  {
    id: 2,
    title: 'Angular\'da sayt yaratishning afzalikklari va kamchiliklari',
    slug: 'angular-advantages-disadvantages',
    date: '3-iyun, 2025',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?height=600&width=1200',
    excerpt: 'Angular framework\'ining kuchli va zaif tomonlarini batafsil ko\'rib chiqing va loyihangiz uchun to\'g\'ri tanlov qiling.',
    content: `
      <p>Angular - Google tomonidan ishlab chiqilgan va qo'llab-quvvatlanadigan mashhur frontend framework.
      Katta korporativ loyihalardan tortib kichik startaplargacha ko'plab dasturchilar Angular dan foydalanadi.
      Bu maqolada Angular ning asosiy afzalliklari va kamchiliklarini batafsil ko'rib chiqamiz.</p>

      <div>
        <h2 class="mb-1 text-xl font-bold">Angular nima?</h2>
        <p>Angular - bu TypeScript asosida qurilgan to'liq funksional SPA (Single Page Application)
        yaratish uchun mo'ljallangan platform va framework. U komponentga asoslangan arxitektura,
        kuchli CLI vositalari va keng imkoniyatlar to'plamini taklif etadi.</p>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Angular ning afzalliklari</h2>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">1. TypeScript qo'llab-quvvatlashi</h3>
        <ul class="pl-3">
          <li>- Statik tip tekshiruvi orqali xatolarni erta aniqlash</li>
          <li>- Katta loyihalarda kodning ishonchliligini oshirish</li>
          <li>- IDE da yaxshi IntelliSense va avtomatik to'ldirish</li>
          <li>- OOP kontseptsiyalarini to'liq qo'llab-quvvatlash</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">2. To'liq ekosistema</h3>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">Angular CLI:</strong> Loyihani yaratish, build qilish va deploy qilish uchun</li>
          <li>- <strong class="font-semibold">Angular Material:</strong> Tayyor UI komponentlar to'plami</li>
          <li>- <strong class="font-semibold">Angular Router:</strong> Kuchli marshrutlash tizimi</li>
          <li>- <strong class="font-semibold">HttpClient:</strong> HTTP so'rovlar uchun qulay API</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">3. Korporativ darajadagi arxitektura</h3>
        <ul class="pl-3">
          <li>- Dependency Injection (DI) tizimi</li>
          <li>- Modullar orqali kodni tashkil etish</li>
          <li>- RxJS bilan reactive programming</li>
          <li>- Testlash uchun built-in yechimlar</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">4. Performance va optimizatsiya</h3>
        <ul class="pl-3">
          <li>- Ahead-of-Time (AOT) compilation</li>
          <li>- Tree shaking va code splitting</li>
          <li>- Lazy loading modullar</li>
          <li>- OnPush change detection strategiyasi</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Angular ning kamchiliklari</h2>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">1. Yuqori o'rganish darajasi</h3>
        <ul class="pl-3">
          <li>- TypeScript bilishi talab etiladi</li>
          <li>- Ko'p kontseptsiyalar: services, decorators, modules</li>
          <li>- RxJS va reactive programming paradigmasi</li>
          <li>- Katta va murakkab dokumentatsiya</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">2. Bundle hajmi va performance</h3>
        <ul class="pl-3">
          <li>- Boshlang'ich bundle hajmi katta</li>
          <li>- Kichik loyihalar uchun "overkill" bo'lishi mumkin</li>
          <li>- Sekin development build vaqti</li>
          <li>- Ko'p abstraksiya darajalari</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">3. Tez-tez yangilanishlar</h3>
        <ul class="pl-3">
          <li>- Har 6 oyda major versiya chiqadi</li>
          <li>- Migration qilish murakkab bo'lishi mumkin</li>
          <li>- Breaking changes bo'lishi mumkin</li>
          <li>- Uchinchi tomon kutubxonalar mos kelmasligi</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Angular qachon tanlash kerak?</h2>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">Angular mos keladi:</h3>
        <ul class="pl-3">
          <li>- Katta korporativ loyihalar uchun</li>
          <li>- Uzoq muddatli loyihalar</li>
          <li>- TypeScript ishlatmoqchi bo'lganlar uchun</li>
          <li>- Jamoa bo'lib ishlashda</li>
          <li>- Murakkab business logic bilan</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">Angular mos kelmaydi:</h3>
        <ul class="pl-3">
          <li>- Kichik va oddiy loyihalar uchun</li>
          <li>- Tez prototip yaratish uchun</li>
          <li>- Yangi boshlovchilar uchun</li>
          <li>- SEO muhim bo'lgan static saytlar uchun</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Xulosa</h2>
        <p>Angular kuchli va professional framework bo'lib, katta loyihalar uchun juda mos keladi.
        Uning TypeScript qo'llab-quvvatlashi, to'liq ekosistema va korporativ darajadagi arxitekturasi
        uni jiddiy loyihalar uchun ajoyib tanlov qiladi.</p>

        <p>Biroq, Angular ning yuqori o'rganish darajasi va murakkabligi uni kichik loyihalar yoki
        yangi boshlovchilar uchun qiyin qilishi mumkin. Loyiha talablarini diqqat bilan o'rganib,
        to'g'ri framework tanlash muhimdir.</p>

        <p>Agar sizda katta jamoa, murakkab business logic va uzoq muddatli loyiha bo'lsa,
        Angular eng yaxshi tanlov bo'lishi mumkin. Aksincha, oddiy va tez loyihalar uchun
        React yoki Vue.js kabi boshqa variantlarni ko'rib chiqish maqsadga muvofiqdir.</p>
      </div>
    `
  },
  {
    id: 3,
    title: 'Katta loyihalar uchun nimaga Angular tanlanadi?',
    slug: 'why-angular-for-large-projects',
    date: '3-iyun, 2025',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?height=600&width=1200',
    excerpt: 'Katta korporativ loyihalarda Angular framework\'ini tanlashning asosiy sabablari va texnik afzalliklarini ko\'rib chiqamiz.',
    content: `
      <p>Katta loyihalar yaratishda to'g'ri framework tanlash muvaffaqiyatning kalit omilidir.
      Angular ko'plab yirik kompaniyalar tomonidan afzal ko'riladi va buning yaxshi sabablari bor.
      Bu maqolada Angular ning katta loyihalar uchun nima uchun eng yaxshi tanlov ekanligini ko'rib chiqamiz.</p>

      <div>
        <h2 class="mb-1 text-xl font-bold">Katta loyihalar deganda nimani tushunish kerak?</h2>
        <p>Katta loyihalar deganda odatda quyidagi xususiyatlarga ega bo'lgan dasturlarni nazarda tutamiz:</p>
        <ul class="pl-3">
          <li>- 50+ developer bilan ishlayotgan jamoa</li>
          <li>- 100,000+ qator kod</li>
          <li>- Murakkab business logic va integratsiyalar</li>
          <li>- Uzoq muddatli rivojlantirish (5+ yil)</li>
          <li>- Yuqori performance va xavfsizlik talablari</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Angular ning katta loyihalar uchun afzalliklari</h2>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">1. Qat'iy arxitektura va standartlar</h3>
        <p>Angular boshidanoq qat'iy arxitektura tamoyillarini joriy etadi, bu katta jamoalar uchun juda muhim.</p>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">Folder struktura:</strong> Aniq belgilangan papka tuzilmasi</li>
          <li>- <strong class="font-semibold">Naming conventions:</strong> Standart nomlash qoidalari</li>
          <li>- <strong class="font-semibold">Code organization:</strong> Modullar, servislar va komponentlar</li>
          <li>- <strong class="font-semibold">Best practices:</strong> O'rnatilgan eng yaxshi amaliyotlar</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">2. TypeScript ning afzalliklari</h3>
        <p>Katta loyihalarda TypeScript juda katta rol o'ynaydi:</p>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">Type safety:</strong> Compile vaqtida xatolarni aniqlash</li>
          <li>- <strong class="font-semibold">IntelliSense:</strong> IDE da mukammal qo'llab-quvvatlash</li>
          <li>- <strong class="font-semibold">Refactoring:</strong> Xavfsiz kod o'zgartirish</li>
          <li>- <strong class="font-semibold">Documentation:</strong> Kodning o'zi dokumentatsiya vazifasini bajaradi</li>
          <li>- <strong class="font-semibold">Team collaboration:</strong> Jamoa ishlashini osonlashtiradi</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">3. Dependency Injection va modullarlik</h3>
        <p>Angular ning DI tizimi katta loyihalar uchun ajoyib imkoniyatlar yaratadi:</p>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">Loosely coupled code:</strong> Komponentlar orasidagi bog'lanish kamaytiradi</li>
          <li>- <strong class="font-semibold">Testability:</strong> Unit testlar yozishni osonlashtiradi</li>
          <li>- <strong class="font-semibold">Scalability:</strong> Yangi xususiyatlar qo'shishni osonlashtiradi</li>
          <li>- <strong class="font-semibold">Maintenance:</strong> Kodga xizmat ko'rsatishni osonlashtiradi</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">4. CLI va development toolchain</h3>
        <p>Angular CLI katta loyihalarda ishlab chiqish jarayonini sezilarli tezlashtiradi:</p>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">Code generation:</strong> Komponent, servis va modullar avtomatik yaratish</li>
          <li>- <strong class="font-semibold">Build optimization:</strong> Production uchun optimizatsiya</li>
          <li>- <strong class="font-semibold">Testing tools:</strong> Unit va e2e testlar uchun sozlamalar</li>
          <li>- <strong class="font-semibold">Linting va formatting:</strong> Kod sifatini nazorat qilish</li>
        </ul>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">5. Kuchli ekosistema</h3>
        <p>Angular atrofida shakllangan ekosistema katta loyihalar uchun barcha kerakli vositalarni taqdim etadi:</p>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">Angular Material:</strong> Professional UI komponentlar</li>
          <li>- <strong class="font-semibold">NgRx:</strong> State management uchun</li>
          <li>- <strong class="font-semibold">Angular Universal:</strong> Server-side rendering</li>
          <li>- <strong class="font-semibold">Angular Elements:</strong> Custom elements yaratish</li>
          <li>- <strong class="font-semibold">Nx:</strong> Monorepo boshqaruvi</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Real-world misollar</h2>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">Angular dan foydalanadigan mashhur kompaniyalar:</h3>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">Google:</strong> Gmail, Google Cloud Console</li>
          <li>- <strong class="font-semibold">Microsoft:</strong> Xbox, Office 365</li>
          <li>- <strong class="font-semibold">Samsung:</strong> SmartThings platform</li>
          <li>- <strong class="font-semibold">Deutsche Bank:</strong> Banking applications</li>
          <li>- <strong class="font-semibold">BMW:</strong> Car configuration tools</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Performance va scale qilish</h2>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">Katta loyihalarda performance:</h3>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">Lazy loading:</strong> Kerak bo'lganda modullarni yuklash</li>
          <li>- <strong class="font-semibold">OnPush strategy:</strong> Change detection optimizatsiyasi</li>
          <li>- <strong class="font-semibold">Tree shaking:</strong> Foydalanilmagan kodni olib tashlash</li>
          <li>- <strong class="font-semibold">AOT compilation:</strong> Compile vaqtida optimizatsiya</li>
          <li>- <strong class="font-semibold">Service Workers:</strong> PWA va caching</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Jamoa ishlashi va maintainability</h2>
      </div>

      <div>
        <h3 class="mb-1 text-lg font-bold">Katta jamoalar uchun afzalliklar:</h3>
        <ul class="pl-3">
          <li>- <strong class="font-semibold">Consistent codebase:</strong> Barcha developerlar bir xil standartlarda ishlaydi</li>
          <li>- <strong class="font-semibold">Easy onboarding:</strong> Yangi jamoa a'zolarini tez adaptatsiya qilish</li>
          <li>- <strong class="font-semibold">Code review:</strong> TypeScript orqali xatolarni erta aniqlash</li>
          <li>- <strong class="font-semibold">Documentation:</strong> Avtomatik API documentation</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Long-term support va stability</h2>
        <p>Angular ning LTS (Long Term Support) versiyalari katta loyihalar uchun muhim:</p>
        <ul class="pl-3">
          <li>- 18 oy davomida qo'llab-quvvatlash</li>
          <li>- Security updates va bug fixes</li>
          <li>- Backward compatibility</li>
          <li>- Migration tools va documentation</li>
        </ul>
      </div>

      <div>
        <h2 class="mb-1 text-xl font-bold">Xulosa</h2>
        <p>Angular katta loyihalar uchun ideal tanlov hisoblanadi, chunki u:</p>
        <ul class="pl-3 mb-4">
          <li>- Qat'iy arxitektura va standartlarni taqdim etadi</li>
          <li>- TypeScript orqali kod sifatini ta'minlaydi</li>
          <li>- Kuchli development tools bilan ta'minlangan</li>
          <li>- Katta jamoa ishlashi uchun optimallashtirilgan</li>
          <li>- Uzoq muddatli qo'llab-quvvatlash bor</li>
        </ul>

        <p>Agar sizning loyihangiz murakkab, katta jamoa bilan ishlanayotgan va uzoq muddatga mo'ljallangan bo'lsa,
        Angular eng mantiqiy tanlov bo'ladi. Bu framework sizga barqaror, scale qilinadigan va
        maintainable dastur yaratishga yordam beradi.</p>

        <p>Esda tutingki, Angular ni tanlashdan oldin loyihangizning talablarini, jamoa tajribasini
        va uzoq muddatli maqsadlarni hisobga olish muhimdir. Lekin katta loyihalar uchun Angular
        haqiqatan ham eng yaxshi variantlardan biri hisoblanadi.</p>
      </div>
    `
  }
];
