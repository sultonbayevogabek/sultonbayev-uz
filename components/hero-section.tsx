import { ArrowRight, Github, Mail, Send } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Profile Image */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
            <Image
              src="/avatar.jpg?height=400&width=400"
              alt="Og'abek Sultonbayev"
              width={160}
              height={160}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Hi, I'm <span className="gradient-text">Og'abek Sultonbayev</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Frontend Developer specializing in creating beautiful, responsive and user-friendly web applications.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row">
            <Button asChild className="gradient-bg">
              <Link href="/portfolio">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
          <div className="flex gap-4 mt-6">
            <Link href="https://t.me/sultonbayevogabek" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Send className="h-5 w-5" />
                <span className="sr-only">Telegram</span>
              </Button>
            </Link>
            <Link href="mailto:sultonbayevogabek@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
            <Link href="https://github.com/sultonbayevogabek" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
