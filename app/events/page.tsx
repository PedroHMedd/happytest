import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, MapPin, Heart, Music, Brush, BookOpen, Users } from "lucide-react"

export default function EventsPage() {
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
            <Link href="/events" className="text-sm font-medium hover:underline underline-offset-4 text-royal-blue">
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
                  Eventos para Voluntários e Idosos
                </h1>
                <p className="max-w-[700px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Participe de eventos ou crie o seu próprio para promover a interação entre voluntários e idosos.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="upcoming" className="w-full">
              <div className="flex justify-between items-center mb-8">
                <TabsList>
                  <TabsTrigger value="upcoming">Próximos Eventos</TabsTrigger>
                  <TabsTrigger value="create">Criar Evento</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="upcoming" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Tarde Musical",
                      icon: <Music className="h-5 w-5" />,
                      date: "15 de Maio, 2025",
                      time: "14:00 - 16:00",
                      location: "Lar dos Idosos Felizes",
                      description: "Uma tarde de música ao vivo com apresentações de voluntários talentosos.",
                    },
                    {
                      title: "Oficina de Pintura",
                      icon: <Brush className="h-5 w-5" />,
                      date: "22 de Maio, 2025",
                      time: "10:00 - 12:00",
                      location: "Centro de Convivência Viver Bem",
                      description: "Aprenda técnicas de pintura e crie sua própria obra de arte.",
                    },
                    {
                      title: "Clube do Livro",
                      icon: <BookOpen className="h-5 w-5" />,
                      date: "29 de Maio, 2025",
                      time: "15:00 - 17:00",
                      location: "Residencial Terceira Idade",
                      description: "Discussão sobre o livro do mês com chá da tarde.",
                    },
                    {
                      title: "Roda de Conversa",
                      icon: <Users className="h-5 w-5" />,
                      date: "5 de Junho, 2025",
                      time: "14:00 - 16:00",
                      location: "Lar dos Idosos Felizes",
                      description: "Compartilhe histórias e experiências em uma tarde de conversa.",
                    },
                  ].map((event, i) => (
                    <Card key={i}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ecclesiastical-blue text-white">
                            {event.icon}
                          </div>
                          <CardTitle className="text-xl">{event.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="mb-4">{event.description}</CardDescription>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-royal-blue hover:bg-royal-blue/90">Inscrever-se</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-center">
                  <Button variant="outline" className="mx-auto">
                    Ver Mais Eventos
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="create" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-ecclesiastical-blue">Criar Novo Evento</CardTitle>
                    <CardDescription>
                      Preencha o formulário abaixo para criar um evento para voluntários.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="institution"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nome da Instituição
                      </label>
                      <Input id="institution" placeholder="Digite o nome da sua instituição" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="event-title"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Título do Evento
                      </label>
                      <Input id="event-title" placeholder="Digite o título do evento" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="event-date"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Data
                        </label>
                        <Input id="event-date" type="date" />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="event-time"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Horário
                        </label>
                        <Input id="event-time" type="time" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="event-location"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Local
                      </label>
                      <Input id="event-location" placeholder="Digite o endereço completo" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="event-description"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Descrição
                      </label>
                      <Textarea
                        id="event-description"
                        placeholder="Descreva o evento, atividades planejadas e o que os voluntários precisam saber"
                        className="min-h-[120px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="event-requirements"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Requisitos para Voluntários
                      </label>
                      <Textarea
                        id="event-requirements"
                        placeholder="Descreva habilidades ou materiais necessários para os voluntários"
                        className="min-h-[80px]"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-royal-blue hover:bg-royal-blue/90">Publicar Evento</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
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
