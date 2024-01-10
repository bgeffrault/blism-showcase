import { GlowCapture, Glow } from '@codaworks/react-glow'

export default async function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-5xl px-5 xl:px-0">
        <div
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-orange-100 px-7 py-2"
        >
          <span className="h-5 w-5 text-xl animate-hammering mr-2">🔨</span>
          <p className="text-sm font-semibold text-gray-600">
            Site en cours de construction
          </p>
        </div>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Blism vous accompagne dans vos projets
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >

        </p>
      </div>
      <span>This won t glow</span>

      <GlowCapture>
        <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
          {services.map(({ title, description }) => (
            <Glow key={title} color='#e65c0c'>
              <div className="row-start-2 col-start-1 row-span-2 flex border border-border rounded-2xl bg-background-secondary px-5 py-4 flex-1 flex-col select-none glow:ring-1 glow:border-glow glow:ring-glow glow:bg-glow/[.15] m-[2px] md:text-center">
                <div className="text-xl mb-4">
                  <strong>{title}</strong></div>
                <div className="text-justify">{description}</div>
              </div>
            </Glow>

          ))}
        </div>
      </GlowCapture>
    </>
  );
}

const StyledLi = ({ children }: {
  children: React.ReactNode
}) => (
  <li className="px-4 py-2 mb-2">{children}</li>

)

const services = [
  {
    title: "Votre projet Web",
    description:
      <ul className="list-none p-0 m-0">
        <StyledLi>
          Un site vitrine pour présenter votre activité. 🏢
        </StyledLi>
        <StyledLi>
          Une application web. 🌐
        </StyledLi>
        <StyledLi>
          Un coup de main pour finir une mission. 🤝
        </StyledLi>
      </ul>,
  },
  {
    title: "Votre projet Mobile",
    description:
      <ul className="list-none p-0 m-0">
        <StyledLi>
          Une application dédiée. 📱
        </StyledLi>
        <StyledLi>
          Un coup de main pour finir une mission. 🤝
        </StyledLi>
      </ul>,
  },
  {
    title: "Traitement et analyse de données",
    description:
      <ul className="list-none p-0 m-0">
        <StyledLi>
          Ingestion et stockage de données. 📥
        </StyledLi>
        <StyledLi>
          Nettoyage et transformation de données. 🧹
        </StyledLi>
        <StyledLi>
          Booster vos revenus grâce à la data. 🚀
          <br />
          Création de modèle de machine learning. 🤖
        </StyledLi>
        <StyledLi>
          Analyse de données. 📊
        </StyledLi>
        <StyledLi>
          Un coup de main pour finir une mission. 🤝
        </StyledLi>
      </ul>,
  },

];
