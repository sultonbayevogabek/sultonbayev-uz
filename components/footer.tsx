import Link from 'next/link';
import { Github, Mail, Phone, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Og'abek Sultonbayev</h3>
            <p className="text-muted-foreground mb-4">
              Chiroyli, moslashuvchan va foydalanuvchilarga qulay veb-ilovalarni yaratishga ixtisoslashgan Frontend
              dasturchi.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Tezkor havolalar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Xizmatlar
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Aloqa
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Aloqa</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4"/>
                <a href="tel:+998971999773" className="hover:text-primary transition-colors">
                  +99897-199-97-73
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Send className="h-4 w-4"/>
                <a
                  href="https://t.me/sultonbayevogabek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @sultonbayevogabek
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4"/>
                <a href="mailto:sultonbayevogabek@gmail.com" className="hover:text-primary transition-colors">
                  sultonbayevogabek@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Github className="h-4 w-4"/>
                <a
                  href="https://github.com/sultonbayevogabek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  sultonbayevogabek
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© { new Date().getFullYear() } Og'abek Sultonbayev. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}
