import { Button } from "@/components/ui/button";
import { FootprintsIcon, GlassesIcon, HomeIcon, LaptopIcon, PaintbrushIcon, ShirtIcon } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="container space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl max-w-sm md:max-w-md lg:max-w-full font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Descubra as Últimas Tendências da Moda
              </h1>
              <p className="lg:mx-auto max-w-sm md:max-w-md lg:max-w-[700px] text-muted-foreground md:text-xl">
                Explore nossa coleção selecionada de produtos elegantes e de alta qualidade para todas as ocasiões.
              </p>
              <div className="space-x-4 mt-6">
                <Link
                  to="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

                >
                  Comprar Agora
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="w-[20rem] aspect-square border rounded-md" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 md:px-6">
          <Link
            to="#"
            className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors"

          >
            <ShirtIcon className="size-8" />
            <span className="text-sm font-medium">Roupas</span>
          </Link>
          <Link
            to="#"
            className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors"

          >
            <GlassesIcon className="size-8" />
            <span className="text-sm font-medium">Acessórios</span>
          </Link>
          <Link
            to="#"
            className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors"

          >
            <FootprintsIcon className="size-8" />
            <span className="text-sm font-medium">Calçados</span>
          </Link>
          <Link
            to="#"
            className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors"

          >
            <HomeIcon className="size-8" />
            <span className="text-sm font-medium">Casa</span>
          </Link>
          <Link
            to="#"
            className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors"

          >
            <PaintbrushIcon className="size-8" />
            <span className="text-sm font-medium">Beleza</span>
          </Link>
          <Link
            to="#"
            className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/50 transition-colors"

          >
            <LaptopIcon className="size-8" />
            <span className="text-sm font-medium">Eletrônicos</span>
          </Link>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Produtos Populares</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Confira nossos itens mais vendidos em todas as categorias.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="group relative">
              <Link to="#" className="absolute inset-0 z-10">
                <span className="sr-only">Ver Produto</span>
              </Link>
              <div className="w-[20rem] aspect-square border rounded-md" />
              <div className="flex-1 py-4">
                <h3 className="font-semibold tracking-tight">Suéter de Tricô Aconchegante</h3>
                <small className="text-sm leading-none text-muted-foreground">Macio e quente para o inverno.</small>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-semibold">R$249,99</span>
                  <Button variant="outline" size="sm">
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link to="#" className="absolute inset-0 z-10">
                <span className="sr-only">Ver Produto</span>
              </Link>
              <div className="w-[20rem] aspect-square border rounded-md" />
              <div className="flex-1 py-4">
                <h3 className="font-semibold tracking-tight">Mochila de Couro</h3>
                <small className="text-sm leading-none text-muted-foreground">
                  Durável e elegante para uso diário.
                </small>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-semibold">R$449,99</span>
                  <Button variant="outline" size="sm">
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link to="#" className="absolute inset-0 z-10">
                <span className="sr-only">Ver Produto</span>
              </Link>
              <div className="w-[20rem] aspect-square border rounded-md" />
              <div className="flex-1 py-4">
                <h3 className="font-semibold tracking-tight">Fones de Ouvido Sem Fio</h3>
                <small className="text-sm leading-none text-muted-foreground">Experiência de áudio imersiva.</small>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-semibold">R$649,99</span>
                  <Button variant="outline" size="sm">
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link to="#" className="absolute inset-0 z-10">
                <span className="sr-only">Ver Produto</span>
              </Link>
              <div className="w-[20rem] aspect-square border rounded-md" />
              <div className="flex-1 py-4">
                <h3 className="font-semibold tracking-tight">Conjunto de Canecas de Cerâmica</h3>
                <small className="text-sm leading-none text-muted-foreground">Artesanal e durável.</small>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-semibold">R$124,99</span>
                  <Button variant="outline" size="sm">
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}