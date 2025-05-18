import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
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
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4 text-royal-blue">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Entre em Contato</h1>
                <p className="max-w-[700px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos aqui para responder suas dúvidas e ouvir suas sugestões.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold tracking-tighter text-ecclesiastical-blue">
                    Informações de Contato
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Entre em contato conosco por qualquer um dos meios abaixo ou preencha o formulário.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-royal-blue mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">contato@happyidosos.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-royal-blue mt-1" />
                    <div>
                      <h3 className="font-medium">Telefone</h3>
                      <p className="text-muted-foreground">(11) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-royal-blue mt-1" />
                    <div>
                      <h3 className="font-medium">Endereço</h3>
                      <p className="text-muted-foreground">ETEC - São Paulo, SP</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold tracking-tighter text-ecclesiastical-blue">
                    Horário de Atendimento
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Segunda a Sexta: 9h às 18h
                    <br />
                    Sábado: 9h às 13h
                  </p>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-ecclesiastical-blue">Envie uma Mensagem</CardTitle>
                  <CardDescription>Preencha o formulário abaixo para entrar em contato conosco.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nome
                      </label>
                      <Input id="name" placeholder="Seu nome completo" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Assunto
                    </label>
                    <Input id="subject" placeholder="Assunto da mensagem" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensagem
                    </label>
                    <Textarea id="message" placeholder="Digite sua mensagem aqui" className="min-h-[150px]" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-royal-blue hover:bg-royal-blue/90">Enviar Mensagem</Button>
                </CardFooter>
              </Card>
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
