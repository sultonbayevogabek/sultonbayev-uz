export interface Education {
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export const education: Education[] = [
  {
    institution: `Toshkent davlat transport universiteti`,
    degree: `Informatika va axborot texnologiyalari bo'yicha bakalavr`,
    location: `Toshkent, O'zbekiston`,
    startDate: `3-sentyabr, 2018`,
    endDate: `21-iyun, 2022`,
    description: `Dasturiy ta'minot ishlab chiqish, kompyuter tizimlari va zamonaviy axborot texnologiyalarini amaliy va nazariy ko'nikmalar bilan birgalikda o'rgandim.`
  },
  {
    institution: `Pitnak transport kasb-hunar kolleji`,
    degree: `Avtomobillarni yig'ish va sinash bo'yicha texnik-mexanik`,
    location: `Pitnak, O'zbekiston`,
    startDate: `2-sentyabr, 2015`,
    endDate: `17-iyun, 2018`,
    description:
      `Avtomobil mexanikasiga, jumladan yig'ish texnikasi, diagnostika va avtomobil tizimlarini sinash jarayonlariga e'tibor qaratilgan.`
  }
];
