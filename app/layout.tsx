import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Sultonbayev Og\'abek - Senior Frontend dasturchi',
  description: 'Chiroyli, moslashuvchan va foydalanuvchilarga qulay veb-ilovalarni yaratishga ixtisoslashgan Frontend dasturchi.',
  keywords: `
    sayt yasash, sayt tayyorlash, web sayt yaratish, front-end dasturchi,
    shaxsiy sayt yasash, portfolio sayt tayyorlash, landing page yaratish,
    internet magazin yasash, mobilga mos sayt, adaptiv sayt, tezkor sayt tayyorlash, veb dizayn,
    dizayn xizmatlari, html css javascript, veb dasturchi, freelance dasturchi, arzon sayt yasash,
    professional saytlar, blog sayt tayyorlash, korxona uchun sayt, xizmatlar sayti, onlayn do‘kon yaratish,
     figma dizayn asosida sayt, domen ulash, hosting sozlash, web developer xizmatlari,
     SEO xizmatlari, saytga SEO qilish, sayt optimizatsiyasi, mobil versiya sayt,
     O‘zbekistonda sayt yasash, Toshkentda sayt yaratish, web portfolio yaratish,
     O‘zbek dasturchi, Toshkent front-end dasturchi, saytga chat qo‘shish,
     telegram bot yasash, fast loading saytlar, veb xizmatlar, saytlarni yangilash,
     foydalanuvchiga qulay sayt, foydalanuvchi interfeysi dizayni, UI UX xizmatlari,
     figmadan saytga o‘tkazish, yagona sahifali saytlar, ko‘p sahifali saytlar,
     landing sahifa yaratish, tezkor buyurtma, saytni yangilash xizmati,
     создание сайтов, заказать сайт, разработка сайта под ключ, фронтенд разработчик,
      адаптивный сайт, создание лендинга, интернет магазин под ключ, персональный сайт,
      фриланс разработчик, веб-дизайн, услуги фронтендера, профессиональная верстка,
      HTML CSS JavaScript разработка, веб-программист Узбекистан, разработка под заказ,
      бизнес сайт, сайт для компании, портфолио сайт, веб разработка в Ташкенте,
      услуги по созданию сайта, доступная разработка сайта, быстрый сайт,
      ускорение сайта, SEO оптимизация, продвижение сайта, сайт под SEO,
      создание сайта недорого, веб-дизайнер в Узбекистане, UI UX дизайн,
      чат на сайте, телеграм бот, конверсионный лендинг, разработка интерфейсов,
      отзывчивый дизайн, figma в верстку, сайт на заказ, услуги по верстке,
      создание мультистраничного сайта, посадочная страница, лендинг с адаптацией, быстрый
      фрилансер, срочный сайт под ключ, редизайн сайта
  `,
  authors: [{ name: `Og'abek Sultonbayev` }],
  openGraph: {
    title: `Og'abek Sultonbayev - Senior Frontend dasturchi`,
    description: 'Chiroyli, moslashuvchan va foydalanuvchilarga qulay veb-ilovalarni yaratishga ixtisoslashgan Frontend dasturchi.',
    url: 'https://sultonbayev.uz',
    siteName: `Og'abek Sultonbayev`,
    images: [
      {
        url: 'https://sultonbayev.uz/avatar.jpg',
        width: 400,
        height: 400,
      },
    ],
    locale: 'uz_UZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Og'abek Sultonbayev - Senior Frontend dasturchi`,
    description: 'Chiroyli, moslashuvchan va foydalanuvchilarga qulay veb-ilovalarni yaratishga ixtisoslashgan Frontend dasturchi.',
    images: ['https://sultonbayev.uz/avatar.jpg'],
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
