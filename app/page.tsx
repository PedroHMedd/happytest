import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Calendar, Search } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-royal-blue" />
            <span className="text-xl font-bold">Happy Idosos</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Início
            </Link>
            <Link href="/search" className="text-sm font-medium hover:underline underline-offset-4">
              Buscar Asilos
            </Link>
            <Link href="/events" className="text-sm font-medium hover:underline underline-offset-4">
              Eventos
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contato
            </Link>
          </nav>
          <Button className="hidden md:flex bg-royal-blue hover:bg-royal-blue/90">Seja Voluntário</Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-ecclesiastical-blue text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Conectando Voluntários e Idosos
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl">
                  O projeto Happy Idosos facilita o acesso entre voluntários e entidades que cuidam de idosos,
                  promovendo a visibilidade e participação ativa dos idosos na sociedade.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/search">
                    <Button className="bg-white text-ecclesiastical-blue hover:bg-white/90">
                      Encontrar Asilos
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/events">
                    <Button variant="outline" className="border-white text-white hover:bg-white/10">
                      Ver Eventos
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  alt="Voluntários com idosos"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-royal-blue">Como Funciona</h2>
                <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossa plataforma conecta voluntários a casas de repouso e centros de atividades para idosos, criando
                  uma troca de experiências valiosa para ambos.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ecclesiastical-blue text-white">
                  <Search className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-royal-blue">Encontre Asilos</h3>
                <p className="text-zinc-500">
                  Busque por casas de repouso e centros de atividades para idosos próximos a você.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ecclesiastical-blue text-white">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-royal-blue">Participe de Eventos</h3>
                <p className="text-zinc-500">
                  Inscreva-se em eventos organizados pelas instituições e compartilhe seus talentos.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ecclesiastical-blue text-white">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-royal-blue">Faça a Diferença</h3>
                <p className="text-zinc-500">
                  Crie conexões significativas e troque experiências valiosas com os idosos.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-royal-blue">Benefícios</h2>
                <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubra como o Happy Idosos beneficia tanto os voluntários quanto os idosos.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-ecclesiastical-blue">Para os Idosos</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-royal-blue shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Maior interação social e redução do isolamento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-royal-blue shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Acesso a atividades culturais e recreativas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-royal-blue shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Oportunidade de compartilhar conhecimentos e experiências</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-ecclesiastical-blue">Para os Voluntários</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-royal-blue shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Experiência enriquecedora de troca intergeracional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-royal-blue shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Oportunidade de desenvolver habilidades sociais e empáticas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-royal-blue shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Satisfação pessoal por contribuir com uma causa social</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-ecclesiastical-blue text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Junte-se a Nós</h2>
                <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Faça parte dessa iniciativa e ajude a transformar a vida dos idosos.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/search">
                  <Button className="bg-white text-ecclesiastical-blue hover:bg-white/90">Encontrar Asilos</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Entre em Contato
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-royal-blue" />
              <span className="text-lg font-bold">Happy Idosos</span>
            </Link>
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 Happy Idosos. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/search" className="text-sm font-medium hover:underline underline-offset-4">
              Buscar Asilos
            </Link>
            <Link href="/events" className="text-sm font-medium hover:underline underline-offset-4">
              Eventos
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
