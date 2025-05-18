import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, MapPin, Calendar, Heart } from "lucide-react"

export default function SearchPage() {
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
            <Link href="/search" className="text-sm font-medium hover:underline underline-offset-4 text-royal-blue">
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Encontre Asilos e Centros de Atividades
                </h1>
                <p className="max-w-[700px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Busque por instituições próximas a você e descubra como pode ajudar.
                </p>
              </div>
              <div className="w-full max-w-2xl bg-white rounded-lg p-4 flex items-center gap-2">
                <Input type="text" placeholder="Digite o nome ou cidade da instituição" className="flex-1" />
                <Button className="bg-royal-blue hover:bg-royal-blue/90">
                  <Search className="h-4 w-4 mr-2" />
                  Buscar
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <img
                      alt={`Asilo ${i}`}
                      className="aspect-video object-cover w-full"
                      height="225"
                      src={`/placeholder.svg?height=225&width=400&text=Asilo ${i}`}
                      width="400"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-2 text-ecclesiastical-blue">Lar dos Idosos Felizes {i}</CardTitle>
                    <CardDescription className="mb-4">
                      Um espaço acolhedor para idosos com diversas atividades recreativas e culturais.
                    </CardDescription>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>São Paulo, SP</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{i * 2} eventos próximos</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex gap-2">
                    <Button variant="outline" className="w-full">
                      Ver Detalhes
                    </Button>
                    <Button className="w-full bg-royal-blue hover:bg-royal-blue/90">Ver Eventos</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="mx-auto">
                Carregar Mais
              </Button>
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
