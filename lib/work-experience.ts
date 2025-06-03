export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies?: string[];
}

export const workExperience: WorkExperience[] = [
  {
    title: `Senior Frontend Dasturchi`,
    company: `"Unicon Soft" MChJ`,
    location: `Toshkent, O'zbekiston`,
    startDate: `1-sentyabr, 2022`,
    description: [
      `Davlat tashkilotlari uchun katta ko'lamdagi veb-ilovalarni ishlab chiqish va qo'llab-quvvatlashda asosiy rol o'ynadim`,
      `Turli davlat muassasalaridagi davlat xizmatchilari foydalanadigan elektron hujjatlar aylanish tizimlarini yaratish va qo'llab-quvvatlashga ixtisoslashganman`,
      `Murakkab, moslashuvchan va kengaytirilgan foydalanuvchi interfeyslarini yaratish uchun Angular, SCSS va Angular Materialdan foydalandim`,
      `Yangi funksiyalarni joriy etish, xatolarni tuzatish, yuqori samaradorlik va qo'llab-quvvatlashni ta'minlash uchun turli jamoalar bilan yaqindan hamkorlik qildim`,
      `Enterprise darajadagi frontend tizimlarini ishlab chiqish va real texnik muammolarni hal qilishda keng tajriba ortirdim`,
      `Zarur hollarda ichki ishlab chiqish standartlarini yaxshilash va yosh dasturchilarga mentorlikda o'z hissamni qo'shdim`
    ],
    technologies: [ 'Angular', 'RxJS', 'TypeScript', 'SCSS', 'Angular Material' ]
  },
  {
    title: `Middle Angular Dasturchi`,
    company: `"Axon Logic" MChJ`,
    location: `Toshkent, O'zbekiston`,
    startDate: `6-dekabr, 2021`,
    endDate: `31-avgust, 2022`,
    description: [
      `O'zbekiston Temir Yo'llari uchun bir nechta veb-ilovalarni ishlab chiqishda qatnashdim, katta tajribali dasturchilari nazorati ostida real loyihalarda ishtirok etdim`,
      `Moslashuvchan va foydalanuvchiga qulay interfeyslarni yaratish uchun Angular, Bootstrap, NgBootstrap va SCSSdan foydalandim`,
      `Enterprise darajadagi frontend ishlab chiqish, kod tuzilishi va komponentlarga asoslangan arxitekturada qimmatli tajriba ortirdim`,
      `Yuqori samaradorlik va barqarorlikni ta'minlash uchun veb-ilovalarni tuzatish, optimallashtirish va qo'llab-quvvatlash uchun jamoa bilan hamkorlik qildim`,
      `Kundalik kodlash va loyihalarda ishtirok etish orqali frontend ishlab chiqishdagi eng yaxshi amaliyotlarga amal qildim va texnik ko'nikmalarimni takomillashtirdim`
    ],
    technologies: [ 'Angular', 'NgBootstrap', 'TypeScript', 'RxJS', 'Bootstrap', 'SCSS' ]
  },
  {
    title: `Frontend Dasturlash O'qituvchisi`,
    company: `Fulfil Education`,
    location: `Toshkent, O'zbekiston`,
    startDate: `1-fevral, 2020`,
    endDate: `30-may, 2022`,
    description: [
      `HTML, CSS, SCSS, Bootstrap, JavaScript va Webpack kabi asosiy veb-texnologiyalarga e'tibor qaratgan holda boshlang'ich va o'rta darajadagi talabalar uchun onlayn frontend dasturlash kurslarini olib bordim`,
      `O'rganishni osonlashtirish uchun tuzilgan interaktiv kurs materiallari va amaliy kodlash vazifalarini ishlab chiqdim`,
      `O'quvchilarga real loyihalardan topshiriqlar berib, to'liq ishlaydigan moslashuvchan veb-saytlar yaratishga yordam berdim`,
      `Bo'lajak dasturchilarga yakka tartibda mentorlik qildim, texnik savollarga javob berdim va karyera bo'yicha maslahatlar berdim`,
      `Ta'lim sifati va dolzarbligini ta'minlash uchun bozor talablari asosida o'quv dasturini doimiy yangilab bordim`
    ],
    technologies: [ 'HTML', 'CSS', 'SCSS', 'JavaScript', 'Bootstrap', 'Webpack' ]
  }
];
