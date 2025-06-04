export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl?: string;
  features: string[];
  type: 'Vebinar sayt' | 'Landing sayt' | 'Hujjat aylanish tizimi' | `Internet do'kon`;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Komiljon Xamidjonov',
    slug: 'programming-fulfiledu-uz',
    description: `
      Xalqaro kompaniyalarda ishlayotgan tajribali dasturchi Komiljon Xamidjonovning "Dasturlashda 0 dan 1000$ topish qadamlari" nomli vebinari
      uchun landing sahifa. Sayt performensiga alohida e'tibor berilgan. Aynan shu saytda Visit Rate 87% bo'lgan. Targetologlar bu nimaligini yaxshiroq tushunadi.
      Visit Rate - bu targetingda chiqqan reklamadagi "Learn More" tugmasini bosganlardan necha foizi saytni to'liq ocha olganining ko'rsatkichi.
    `,
    image: '/portfolio/programming-fulfiledu-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://programming.fulfiledu.uz',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Ma'lumotlarini qoldirgan foydalanuvchilar uchun "Thank you" sahifasi`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 2,
    title: 'Fulfil Education',
    slug: 'fulfiledu-uz',
    description: `
      Fulfil jamoasi uchun ko'p sahifalik veb-sayt. Saytda jamoa haqida to'liq ma'lumot olish mumkin. Shuningdek Fulfil jamoasida bo'layotgan yangiliklar va
      bo'sh ish o'rinlari haqidagi ma'lumotlar saytga joylab turiladi. <br>
      Saytni Angular'da ko'targanman. Nimaga Angular? Angular SPA ilovalarni yaratish uchun imkoniyat beradi. SPA - Single Page Application. Bu degani sayt bir marta
      yuklanganidan keyin, boshqa menyularga o'tishda foydalanuvchidan qo'shimcha internet trafik va vaqt talab qilinmaydi.
      Saytga bitta kirgan odam xuddi telefoniga dastur o'rnatgan odamga o'xshab bo'limdan bo'limga, sayt fayllarini boshqatdan yuklamasdan foydalana oladi.
      Admin uchun alohida panel qilinmagan. Ma'lumotlarni dinamik kiritib turish uchun Google Sheets'dan foydalanilgan.
    `,
    image: '/portfolio/fulfiledu-uz.jpg',
    technologies: [ 'Angular', 'Tailwind CSS' ],
    demoUrl: 'https://fulfiledu.uz',
    features: [
      `Jamoa haqida to'liq ma'lumot`,
      `Yangiliklar bo'limi`,
      `Bo'sh ish o'rinlari bo'limi`,
      `SPA (Single Page Application) tizimi`,
      `Tezkor sahifalar orasida o'tish`,
      `Google Sheets orqali dinamik kontent`,
      `Ma'lumotlarni saqlash va boshqarish`
    ],
    type: 'Landing sayt'
  },
  {
    id: 3,
    title: 'Maftuna Arabbayevna',
    slug: 'qobiliyat-fulfiledu-uz',
    description: `
      "Badavlat Ayol" loyihasining spikeri Maftuna Arabbayevaning "O'z imkoniyatlaringizni
      kashf eting" nomli 2 kunlik onlayn darsi uchun tanishtiruv sayti. Saytda mentorning ustidagi
      kiyimga mos ranglar palitrasi yaxshi tanlangan. <br>

      Shu saytdan boshlab saytlarga statistika qo'shishni boshlaganman.
      Kerakli ma'lumotlar oddiy ko'rinishda ko'rsatib berilgan.
      Statistika ma'lumotlarini ko'rsatishga AI ham ozgina qarashib yuborgan 🫣 (Claude AI)
    `,
    image: '/portfolio/qobiliyat-fulfiledu-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://qobiliyat.fulfiledu.uz',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Ma'lumotlarini qoldirgan foydalanuvchilar uchun "Thank you" sahifasi`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 4,
    title: 'Rustilida Loyihasi',
    slug: 'rustilida-uz',
    description: `Ko'p yillik tajribaga ega rus tili o'qituvchisi Zarina Ismailovnaning kurslari uchun sotuv sayti. Saytda kurs haqida to'liq ma'lumot berilgan. Shuningdek rasmiy sertfikatlar va o'quvchilarning kurs haqidagi fikrlari joylangan.`,
    image: '/portfolio/rustilida-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://rustilida.uz',
    features: [
      `Kurs haqida to'liq ma'lumot`,
      `Mentor haqida ma'lumot`,
      `Onlayn ro'yxatdan o'tish`,
      `O'quvchilarning fikrlari`,
      `Sertifikatlar galereyasi`,
      `Kursning narxlari`,
      `Mobil versiyaga moslashgan dizayn`
    ],
    type: 'Landing sayt'
  },
  {
    id: 5,
    title: 'Zebiniso Yadgarova',
    slug: 'vebinar-dynamics-market-uz',
    description: `
      Ko'p yillik tajribaga ega bolalar shifokori, Zebiniso Yadgarovaning "Sog'lom bola formulasi" nomli onlayn darsi uchun qilingan vebinar sahifasi. <br>
      Domen nimaga bunaqa vebinarga mosmas degan savol tug'ilishi mumkin albatta.
      Ba'zi hollarda vebinar tashkilotchilarida .uz domeni bo'lmaydi va o'zingizda bor domenga ulab beravering,
      vaqtimiz kam domen sotib olish uchun deyishadi. Domen sotib olinganidan keyin to'liq aktiv bo'lib ketishi 24 soatdan 48 soatgacha
      cho'zilishi mumkin. Agar dam olish kunlariga to'g'ri kelib qolsa, domen aktivlashishiga ketadigan vaqt bundan ham cho'zilishi mumkin.
    `,
    image: '/portfolio/vebinar-dynamics-market-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://vebinar.dynamics-market.uz',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Ma'lumotlarini qoldirgan foydalanuvchilar uchun "Thank you" sahifasi`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 6,
    title: 'Video darslik sotuv sayti',
    slug: 'video-lessons-fulfil',
    description: `
      Oldin Zoom'da frontend dasturlash yo'nalishi bo'yicha onlayn dars berganman. Darslarni o'quvchilar darsdan keyin ham ko'ra olishlari uchun
      yozib olardim va telegram guruhga tashlab qo'yardim. Shu yozib olingan darslarni sotish fikri kelgan va reklama uchun shu saytni yasaganman. <br>

      Saytni yasashda native texnologiyalardan foydalanganman. O'zimga yoqqan bu qilgan ishim. Chiroyli chiqqan deb hisoblayman.
    `,
    image: '/portfolio/video-lessons-fulfil.jpg',
    technologies: [ 'HTML', 'CSS', 'JavaScript' ],
    demoUrl: 'https://video-lessons-fulfil.netlify.app',
    features: [
      `Kurs haqida to'liq ma'lumot`,
      `Mentor haqida ma'lumot`,
      `Onlayn ro'yxatdan o'tish`,
      `O'quvchilarning fikrlari`,
      `Kurs davomida bajariladigan loyihalar`,
      `Kursning narxlari`,
      `Mobil versiyaga moslashgan dizayn`
    ],
    type: 'Landing sayt'
  },
  {
    id: 7,
    title: 'ABM tarjimonlik firmasi sayti',
    slug: 'abm-uz',
    description: `
      O'zbekistonda uzoq yillardan buyon faoliyat yuritib kelayotgan ABM tarjimonlik firmasi uchun ushbu sayt qilib berilgan. Saytda firma
      ko'rsatadigan xizmat turlari, firmaning doimiy mijozlari va mijozlarning ular haqidagi bildirgan izohlarini ko'rish mumkin. <br>
      Sayt tarjimonlik firmasiniki bo'lgani uchun sayt kontenti ko'p tillik qilib ishlab chiqilgan, ya'ni saytga tashrif buyurgan odam
      o'zbek, rus va ingliz tillarida ushbu firma haqidagi ma'lumotlarni o'qishi mumkin.
    `,
    image: '/portfolio/abm-uz.jpg',
    technologies: [ 'HTML', 'CSS', 'JavaScript' ],
    demoUrl: 'https://abm.uz',
    features: [
      'Kompaniya haqida to\'liq ma\'lumot',
      'Ko\'p tillilik - o\'zbek, rus va ingliz tillari',
      'Firma xizmat turlarining tavsifi',
      'Doimiy mijozlar ro\'yxati',
      'Mijozlarning fikrlari',
      'Aloqa uchun ma\'lumotlar',
      'Mobil versiyaga moslashgan dizayn'
    ],
    type: 'Landing sayt'
  },
  {
    id: 8,
    title: 'Iroda Rahmonova',
    slug: 'arabtili-one-netlify-app',
    description: `
      Arab tilini o'qitish bo'yicha katta tajribaga ega mutaxassis Iroda Rahmonovaning kursi uchun vebinar sayt. <br>
      Sayt performensi yaxshi bo'lishi uchun faqat mobil versiyasini qilib berdi. Bu zo'r yordam berdi deyolmayman. Performens
      92-93% dan oshmadi. Shunda saytga ulangan fontlar performensga ta'sir qilishini tushunib yetgandim.
    `,
    image: '/portfolio/arabtili-one-netlify-app.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://arabtili-one.netlify.app',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Ma'lumotlarini qoldirgan foydalanuvchilar uchun "Thank you" sahifasi`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 9,
    title: 'Dildora Tursunova',
    slug: 'dildora-tursunova-dynamics-market-uz',
    description: `
      Hozirda Uzinfocom'da HR bo'limi rahbari lavozimida ishlayotgan va HR sohasida ko'p yillik tajribaga
      ega ekspert Dildora Tursunovaning "Qanday qilib aniq formula asosida kuchli va sodiq jamoa qurish
      mumkin?" nomli oflayn seminari uchun qilingan lending sahifa. <br>
      Saytni hosting'ga yuklab, performensini tekshirib ko'rganimda juda yomon natija ko'rsatgan (25%😭).
      Tashkilotchilar sayt yuklanish tezligini oshirib berishimni so'rashgan. Keyin "lazy loading" orqali saytning
      performensini ancha oshirib berganman. Lazy loading'da foydalanuvchi scroll qilib tushmaguncha, kontentni serverdan
      olib kelmaydi va shuning hisobiga saytning dastlabgi yuklanish tezligi oshadi.
    `,
    image: '/portfolio/dildora-tursunova-dynamics-market-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://dildora-tursunova.dynamics-market.uz',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Ma'lumotlarini qoldirgan foydalanuvchilar uchun "Thank you" sahifasi`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 10,
    title: 'Dynamics Market',
    slug: 'dynamics-market-uz',
    description: `
      <strong>Dynamics Market</strong> — bu avtomatlashtirish, asbobsozlik, energetika va elektrotexnika
      sohalarida yetkazib berish va texnik yechimlar taklif qiluvchi taniqli kompaniya. <br>
      Saytga kompaniya o'z tovarlarini joylaydi. Saytga kirgan mijozlar tovar haqida to'liq ma'lumot olishlari mumkin. Tovarni
      savatiga qo'shadi va keyin savatdagi barcha tovarlarni buyurtma qiladi. <br>
      Saytni Angular'da ko'targanman. Sababi bu loyihani kelgusida rivojlantirish va qo'llab-quvvatlashni reja qilyapmiz. Katta masshtabli loyihalar
      uchun esa Angular taqdim etadigan arxitektura zo'r instrument.
    `,
    image: '/portfolio/dynamics-market-uz.jpg',
    technologies: [ 'Angular 13', 'Tailwind CSS', 'Boostrap', 'SCSS', 'NgBootstrap', ],
    demoUrl: 'https://dynamics-market.example.com',
    features: [
      'Tovarlarni ko\'rish va tanlash',
      'Tovarlarni savatga qo\'shish',
      'Buyurtma berish imkoniyati',
      'Tovarlar haqida to\'liq ma\'lumot',
      'Maxsulot qidirish tizimi',
      'Tovarlar filtrlash',
      'Savatdagi tovarlarni boshqarish'
    ],
    type: 'Internet do\'kon'
  },
  {
    id: 11,
    title: 'EDO.IJRO.UZ',
    slug: 'edo-ijro-uz',
    description: `
      <div class="mb-4">
        <strong>EDO.IJRO.UZ</strong> — bu O'zbekiston Respublikasi Prezidentining farmon, qaror, farmoyish va topshiriqlari ijrosini nazorat qilish va hujjat aylanishini
        raqamli ravishda boshqarish uchun mo'ljallangan idoralararo yagona elektron tizimdir. U davlat organlari va tashkilotlar o'rtasida hujjatlarni tezkor,
        shaffof va samarali almashish imkonini yaratadi .
      </div>

      <div class="font-bold">Asosiy vazifalari va imkoniyatlari</div>

      <ul class="text-left mb-4">
        <li><strong>- Hujjat aylanishini avtomatlashtirish:</strong> Tizim orqali kiruvchi va chiquvchi hujjatlar ro'yxatdan o'tkaziladi, ijrochilarga biriktiriladi va ijro holati real vaqt rejimida kuzatiladi.</li>
        <li><strong>- Ijro intizomini mustahkamlash:</strong> Prezident farmonlari, qarorlar va boshqa rasmiy topshiriqlarning bajarilishi monitoring qilinadi, bu esa ijro intizomini oshiradi.</li>
        <li><strong>- Shaffoflik va hisobdorlik:</strong> Tizimda ijro holati bo'yicha aniq statistikalar yuritiladi, bu esa rahbarlar va mas'ul xodimlarning faoliyatini baholash imkonini beradi.</li>
      </ul>

      <div class="font-bold">Afzalliklari</div>

      <ul class="text-left">
        <li><strong>- Qog'ozbozlikni kamaytirish:</strong> Hujjatlar elektron shaklda yuritilishi orqali qog'oz sarfi kamayadi va ekologik jihatdan foyda keltiradi.</li>
        <li><strong>- Tezkorlik va samaradorlik:</strong> Hujjatlar tezda yetkaziladi va ijro jarayoni tezlashadi.</li>
        <li><strong>- Markazlashtirilgan nazorat:</strong> Barcha hujjatlar va topshiriqlar yagona platformada boshqariladi, bu esa nazoratni osonlashtiradi .</li>
      </ul>
    `,
    image: '/portfolio/edo-ijro-uz.jpg',
    technologies: [ 'Angular', 'Angular Material', 'SCSS', 'Tailwind CSS' ],
    demoUrl: 'https://edo.ijro.uz',
    features: [
      'Hujjat aylanishini raqamlashtirish',
      'Elektron imzolar bilan ishlash',
      'Tasdiqlash jarayonlarini avtomatlashtirish',
      'Audit nazorati funksionali',
      'Rolga asoslangan huquqlarni boshqarish'
    ],
    type: 'Hujjat aylanish tizimi'
  },
  {
    id: 12,
    title: 'E-Ticket Railway',
    slug: 'eticket-railway-uz',
    description: `
      <div class="mb-4">
        <strong>eticket.railway.uz</strong> — bu “O‘zbekiston temir yo‘llari” AJ tomonidan taqdim etilgan
        rasmiy onlayn platforma bo‘lib, foydalanuvchilarga temir yo‘l chiptalarini masofadan turib xarid qilish, qaytarish va tekshirish imkonini beradi.
        Sayt orqali Toshkent, Samarqand, Buxoro, Xiva, Andijon kabi shaharlarga poyezdlar uchun chiptalarni sotib olish mumkin.
      </div>

      <div class="font-bold">Asosiy funksiyalar</div>

      <ul class="text-left mb-4">
        <li><strong>- Chipta xaridi: </strong> Yo‘nalish, sana va poyezd tanlab, chiptani onlayn xarid qilish.</li>
        <li><strong>- Chipta qaytarish:</strong> Shaxsiy kabinet orqali chiptani bekor qilish va pul mablag‘larini qaytarish imkoniyati mavjud.</li>
        <li><strong>- Chipta tekshirish:</strong> Xarid qilingan chiptaning haqiqiyligini QR-kod orqali tekshirish.</li>
        <li><strong>- Jadval va yo‘nalishlar:</strong> Poyezdlar jadvali va mavjud yo‘nalishlar bilan tanishish.</li>
      </ul>

      <div class="font-bold">Afzalliklari</div>

      <ul class="text-left">
        <li><strong>- Qog'ozbozlikni kamaytirish:</strong> Hujjatlar elektron shaklda yuritilishi orqali qog'oz sarfi kamayadi va ekologik jihatdan foyda keltiradi.</li>
        <li><strong>- Tezkorlik va samaradorlik:</strong> Hujjatlar tezda yetkaziladi va ijro jarayoni tezlashadi.</li>
        <li><strong>- Markazlashtirilgan nazorat:</strong> Barcha hujjatlar va topshiriqlar yagona platformada boshqariladi, bu esa nazoratni osonlashtiradi .</li>
      </ul>
    `,
    image: '/portfolio/eticket-railway-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://eticket-railway.example.com',
    features: [
      'Real-time seat booking',
      'Route planning',
      'Payment processing',
      'Ticket management',
      'Administrative dashboard'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 13,
    title: 'Fulfiledu Frontend Platform',
    slug: 'frontt-fulfiledu',
    description: 'A comprehensive frontend development learning platform with interactive coding exercises.',
    image: '/portfolio/frontt-fulfiledu-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://frontt-fulfiledu.example.com',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Ma'lumotlarini qoldirgan foydalanuvchilar uchun "Thank you" sahifasi`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 14,
    title: 'Hurriyat Rahmatullaeva Portfolio',
    slug: 'hurriyat-portfolio',
    description: 'An elegant portfolio website for a professional designer with clean aesthetics.',
    image: '/portfolio/hurriyat-rahmatullaeva.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://hurriyat-portfolio.example.com',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Ma'lumotlarini qoldirgan foydalanuvchilar uchun "Thank you" sahifasi`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 15,
    title: 'Lawyer IJRO Legal Platform',
    slug: 'lawyer-ijro',
    description: 'A comprehensive legal case management system for law firms and attorneys.',
    image: '/portfolio/lawyer-ijro-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://lawyer-ijro.example.com',
    features: [
      'Case management',
      'Client communication',
      'Document management',
      'Billing system',
      'Court schedule tracking'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 16,
    title: 'Mahmudjon B Dynamics Market',
    slug: 'mahmudjon-b-market',
    description: 'A specialized e-commerce platform for automotive parts and accessories.',
    image: '/portfolio/mahmudjon-b-dynamics-market-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://mahmudjon-market.example.com',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Ma'lumotlarini qoldirgan foydalanuvchilar uchun "Thank you" sahifasi`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 17,
    title: 'Mahmudjon Dynamics Market Pro',
    slug: 'mahmudjon-dynamics-market',
    description: 'An advanced version of the dynamics market platform with enhanced features.',
    image: '/portfolio/mahmudjon-dynamics-market-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://mahmudjon-dynamics-pro.example.com',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Ma'lumotlarini qoldirgan foydalanuvchilar uchun "Thank you" sahifasi`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 18,
    title: 'Masterkomo Educational Platform',
    slug: 'masterkomo-platform',
    description: 'An online learning management system with video courses and interactive content.',
    image: '/portfolio/masterkomo-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://masterkomo.example.com',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Ma'lumotlarini qoldirgan foydalanuvchilar uchun "Thank you" sahifasi`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 19,
    title: 'OKR Management System',
    slug: 'okr-system',
    description: 'A modern OKR (Objectives and Key Results) tracking system for teams and organizations.',
    image: '/portfolio/okr-us-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://okr-system.example.com',
    features: [
      'Goal setting and tracking',
      'Team alignment tools',
      'Progress visualization',
      'Performance analytics',
      'Integration capabilities'
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 20,
    title: 'Russian Language Learning Platform',
    slug: 'russkiy-fulfiledu',
    description: 'A comprehensive Russian language learning platform with interactive exercises.',
    image: '/portfolio/russkiy-fulfiledu-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://russkiy-fulfiledu.example.com',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Ma'lumotlarini qoldirgan foydalanuvchilar uchun "Thank you" sahifasi`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 21,
    title: 'SAT Jamals Preparation Platform',
    slug: 'sat-jamals',
    description: 'A comprehensive SAT test preparation platform with practice tests and analytics.',
    image: '/portfolio/sat-jamals-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://sat-jamals.example.com',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Ma'lumotlarini qoldirgan foydalanuvchilar uchun "Thank you" sahifasi`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 22,
    title: 'Uzumone Mobile Banking App',
    slug: 'uzumone-app',
    description: 'A modern mobile banking application with comprehensive financial services.',
    image: '/portfolio/uzumone-netlify-app.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://uzumone-app.example.com',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Ma'lumotlarini qoldirgan foydalanuvchilar uchun "Thank you" sahifasi`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 23,
    title: 'Webinar Linguabarno Platform',
    slug: 'webinar-linguabarno',
    description: 'A specialized webinar platform for language learning with interactive features.',
    image: '/portfolio/vebinar-linguabarno-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://webinar-linguabarno.example.com',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Ma'lumotlarini qoldirgan foydalanuvchilar uchun "Thank you" sahifasi`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`
    ],
    type: 'Vebinar sayt'
  },
  {
    id: 24,
    title: 'Web Development Portfolio',
    slug: 'web-rusiyzabon',
    description: 'A showcase website for web development services with modern design.',
    image: '/portfolio/web-rusiyzabon-uz.jpg',
    technologies: [ 'HTML', 'Tailwind CSS', 'JavaScript' ],
    demoUrl: 'https://web-rusiyzabon.example.com',
    features: [
      `Instagramda reklama qilinayotgan kurs haqida ma'lumot`,
      `Ro'yxatdan o'tish formasi`,
      `Foydalanuvchilar ma'lumotlarini yig'ish`,
      `Ma'lumotlarini qoldirgan foydalanuvchilar uchun "Thank you" sahifasi`,
      `Foydalanuvchini yopiq telegram kanalga yo'naltirish`,
      `Kam trafik sarflagan holda tezkor yuklanish`,
      `Zamonaviy va chiroyli dizayn`,
      `Mobil qurilmalarga moslashtirilgan dizayn`
    ],
    type: 'Vebinar sayt'
  }
];
