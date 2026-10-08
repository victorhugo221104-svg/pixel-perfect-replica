import { createFileRoute } from "@tanstack/react-router";
import renato from "@/assets/renato.jpg.asset.json";
import { Check, ShieldCheck, Lightbulb, ArrowRight, ArrowDown } from "lucide-react";

const CHECKOUT = "https://pay.kiwify.com.br/Oc9ucVp";
const IMG = "https://receitasrenatomoreira.com/wp-content/uploads/2026/08/";
const HERO = "/foto-rafael-molina-studio.jpg";
const COVER = IMG + "ChatGPT-Image-30-de-ago.-de-2026-13_32_20.png";
const PREVIEWS = ["preview_page1.jpg", "preview_page2.jpg", "preview_page3.jpg"].map((p) => IMG + p);
const AUTHOR = renato.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Receitas do Campo — 73 recetas sin azúcar refinada | Renato Moreira" },
      { name: "description", content: "Las recetas que mi abuela preparaba para alimentar a toda la familia, sin azúcar refinada y sin complicaciones. Libro digital con 73 recetas." },
      { property: "og:title", content: "Receitas do Campo — Renato Moreira" },
      { property: "og:description", content: "73 recetas sin azúcar refinada, con el paso a paso completo. Acceso inmediato." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Cta({ pulse = false }: { pulse?: boolean }) {
  return (
    <a href={CHECKOUT} className={`cta-btn ${pulse ? "animate-pulse-soft" : ""}`}>
      QUIERO EL LIBRO · R$47 <ArrowRight className="size-5" />
    </a>
  );
}

function Price() {
  return (
    <div className="text-center">
      <div className="flex items-baseline justify-center gap-3">
        <span className="font-serif text-6xl font-bold text-primary">R$47</span>
        <span className="text-xl text-muted-foreground line-through">R$97</span>
      </div>
      <p className="eyebrow mt-2">Precio de lanzamiento — termina pronto</p>
    </div>
  );
}

function SectionHead({ n, label, title }: { n: string; label: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="eyebrow">{n}. {label}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">{title}</h2>
    </div>
  );
}

const bonus = [
  ["Receitas do Campo", "Libro digital ilustrado, +200 páginas, 73 recetas completas en 7 capítulos", "R$47"],
  ["Menú de 7 Días", "Plan semanal completo con recetas del libro y aprovechamiento inteligente", "R$19"],
  ["Lista de Compras por Capítulo", "Elige los capítulos de la semana y llévate la lista lista al mercado", "R$14"],
  ["Guía de Sustituciones", "Tabla completa: si no tienes un ingrediente, usa este otro", "R$14"],
  ["Los 10 Alimentos de Doña Conceição", "Los ingredientes que la abuela de Renato nunca dejaba que faltaran en la cocina", "R$19"],
  ["Actualizaciones futuras", "Cada revisión y receta nueva, sin costo adicional", "R$14"],
];

const chapters = [
  ["Desayuno", "12 recetas · de 5 a 30 minutos", "Tapioca cremosa, panqueques de plátano, huevos revueltos con cúrcuma, avena cocida, cuscús con huevo, licuado de aguacate con cacao. Seis saladas, seis dulces."],
  ["Almuerzo", "12 recetas · pollo, carne, pescado, huevo", "Pollo con calabaza, pastel de camote, pescado con costra de hierbas, carne en olla con yuca, strogonoff sin crema de caja."],
  ["Cena", "10 recetas · ligeras y completas", "Sopas, ensaladas tibias, wrap de col, pescado en papel aluminio, omelette de claras, crema de yuca. Ligera para dormir bien, completa para no quedarte con hambre."],
  ["Meriendas y Botanas", "10 recetas · dulces y saladas", "Bolitas de dátiles con cacao, chips de camote, pasta de garbanzo, muffin salado de avena, galletas de plátano con chocolate amargo."],
  ["Postres", "12 recetas · todas sin azúcar refinada", "Cheesecake de yogur, helado de camote, brigadeiro de dátiles, mousse de aguacate, flan de leche de coco, pastel de chocolate, pavé, dulce de calabaza con coco."],
  ["Tés", "10 recetas · cada té con un propósito", "Manzanilla para dormir. Jengibre para la digestión. Cúrcuma para la inflamación. Toronjil para la calma. Romero para la energía. Cada té con una historia de Doña Conceição."],
  ["Salsas, Condimentos y Bases", "7 recetas · multiplican el libro entero", "Salsa de tomate casera, sazonador completo que reemplaza al de sobre, salsa de yogur, vinagreta, pasta de ajo, granola casera y leche condensada sin azúcar refinada."],
];

const diffs = [
  ["Ninguna receta usa azúcar refinada.", "Ni una. El dulce viene de la miel, el plátano maduro, los dátiles y el cacao. Nada blanco, nada de sobre."],
  ["Todos los ingredientes están en el mercado y en el supermercado.", "Nada de harina de almendra a R$60 el kilo. Nada que tengas que pedir por internet."],
  ["Cada receta tiene el paso a paso completo.", "Temperatura, tiempo, tamaño del molde, punto de cocción. No quedó nada fuera."],
  ["Las recetas funcionan como un sistema.", "Los mismos ingredientes aparecen en varios capítulos. Quien compra para el desayuno ya tiene ingredientes para el postre."],
  ["Fue escrito para gente real, no para chefs.", "Si sabes freír un huevo y prender el horno, puedes hacer cualquier receta de este libro."],
];

const forWho = [
  "Quieres comer mejor, pero no sabes por dónde empezar sin complicarte.",
  "Estás cansada de recetas saludables que saben a dieta.",
  "Quieres reducir el azúcar refinada, pero no quieres vivir sin dulce.",
  "Cocinas para el día a día y necesitas practicidad, no un proyecto.",
  "Quieres recetas que toda la familia acepte, sin tener que hacer comida aparte.",
  "Quieres una guía organizada, con lista de compras, sustituciones y menú listo.",
  "Quieres comer como cocinaba tu abuela. Comida de verdad. Sin etiquetas, sin modas.",
];

function Index() {
  return (
    <main className="min-h-screen">
      <div className="bg-secondary px-4 py-2 text-center text-xs font-semibold tracking-widest text-secondary-foreground">
        SERRA DA MANTIQUEIRA · EDICIÓN 2026 · <span className="text-accent">PRECIO DE LANZAMIENTO — TERMINA PRONTO</span>
      </div>

      {/* HERO */}
      <section className="mx-auto grid max-w-5xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:py-20">
        <div>
          <p className="eyebrow">Renato Moreira</p>
          <h1 className="mt-4 text-[2.1rem] font-bold leading-[1.1] md:text-5xl">
            Las recetas que mi abuela preparaba para alimentar a toda la familia — <em className="text-primary">sin azúcar refinada y sin complicaciones.</em>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Setenta y tres recetas sin azúcar refinada — con los ingredientes que usaba mi abuela, el paso a paso completo y todo lo que necesitas para cocinar mejor esta semana. Empieza con un huevo, un plátano y lo que ya tienes en la cocina.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#produto" className="cta-btn sm:w-auto">VER EL LIBRO <ArrowRight className="size-5" /></a>
            <a href="#conteudo" className="flex items-center justify-center gap-2 px-4 py-3 font-bold text-secondary underline underline-offset-4">QUÉ HAY ADENTRO <ArrowRight className="size-4" /></a>
          </div>
        </div>
        <img src={HERO} alt="Rafael Molina" className="aspect-[3/4] w-full rounded-3xl object-cover object-center shadow-soft" />
      </section>

      <section className="mx-auto max-w-5xl px-5">
        <div className="grid grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-card py-5 text-center shadow-soft">
          {[["10 mil+", "seguidores"], ["1,500+", "personas satisfechas"], ["7 días", "de garantía"]].map(([a, b]) => (
            <div key={b} className="px-2">
              <div className="font-serif text-2xl font-bold text-primary md:text-3xl">{a}</div>
              <div className="mt-1 text-[0.65rem] font-bold uppercase tracking-widest text-muted-foreground">{b}</div>
            </div>
          ))}
        </div>
        <blockquote className="mx-auto mt-12 max-w-2xl text-center">
          <p className="font-serif text-2xl italic leading-snug">"No es para volverte naturista. Es para volver a comer como la gente."</p>
          <footer className="eyebrow mt-3">Renato Moreira · Serra da Mantiqueira</footer>
        </blockquote>
      </section>

      {/* I. EL LIBRO */}
      <section id="produto" className="mx-auto max-w-3xl px-5 py-20">
        <SectionHead n="I" label="El libro" title="Un libro. Setenta y tres recetas. Cero azúcar refinada." />
        <p className="text-lg leading-relaxed text-muted-foreground">
          Desayuno, almuerzo, cena, merienda, postre, té, salsa y sazonador casero. Siete capítulos. Setenta y tres recetas completas, con ingredientes, cantidades, paso a paso y consejos. Todo con lo que encuentras en el mercado y en el supermercado de tu colonia. Abre el libro, elige una receta y prepárala hoy.
        </p>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="bg-secondary p-8">
            <img src={COVER} alt="Portada del libro Receitas do Campo" className="mx-auto w-3/4 max-w-xs rounded-lg shadow-soft" />
          </div>
          <div className="p-6 md:p-10">
            <p className="eyebrow">Libro digital ilustrado · +200 páginas · primera edición</p>
            <h3 className="mt-3 text-2xl font-bold leading-tight md:text-3xl">La guía completa para cocinar sin azúcar refinada, sin ingredientes caros y sin complicaciones.</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Huevos revueltos con cúrcuma. Pollo con calabaza y romero. Pastel de camote. Pastel de chocolate con avena. Cheesecake de yogur con miel. Brigadeiro de dátiles. Té de manzanilla con limón. Sazonador casero que reemplaza al de sobre. Setenta y tres recetas que mi abuela ya preparaba — con el paso a paso completo, las cantidades exactas y consejos para no equivocarte.
            </p>
            <p className="mt-4 font-semibold">Libro digital en PDF — lo recibes al instante y lo abres en tu celular, tablet o computadora.</p>
            <div className="mt-6 flex gap-3 rounded-2xl bg-muted p-4 text-sm leading-relaxed">
              <Lightbulb className="size-5 shrink-0 text-accent" />
              <p><strong>Consejo:</strong> Cuando el libro llegue a tu correo, imprímelo y encuadérnalo. Así lo tienes siempre a la mano en la cocina — sin celular, sin pantalla manchada de harina. Muchas lectoras ya lo hicieron y dicen que es la mejor forma de usarlo.</p>
            </div>

            <div className="my-10"><Price /></div>

            <p className="eyebrow mb-4 text-center">Lo que recibes por R$47:</p>
            <ul className="divide-y divide-border rounded-2xl border border-border">
              {bonus.map(([t, d, p], i) => (
                <li key={t} className="flex items-start gap-3 p-4">
                  <Check className="mt-1 size-5 shrink-0 text-primary" />
                  <div className="flex-1">
                    <p className="font-bold">{i > 0 && <span className="mr-2 rounded bg-accent px-1.5 py-0.5 text-[0.6rem] uppercase tracking-wider text-accent-foreground">Bono</span>}{t}</p>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                  <span className="font-bold text-muted-foreground">{p}</span>
                </li>
              ))}
              <li className="flex justify-between bg-muted p-4 font-bold">
                <span>Valor total</span><span className="line-through">R$127</span>
              </li>
            </ul>
            <p className="mt-8 text-center text-lg">Hoy pagas solo <strong className="font-serif text-3xl text-primary">R$47</strong></p>
            <p className="mb-4 mt-2 flex items-center justify-center gap-1 text-sm text-muted-foreground">Haz clic aquí para asegurar el tuyo <ArrowDown className="size-4" /></p>
            <Cta pulse />
            <p className="mt-4 text-center text-[0.7rem] font-bold uppercase tracking-widest text-muted-foreground">Acceso inmediato en el celular · Libro digital en PDF · Tuyo para siempre</p>
          </div>
        </div>
      </section>

      {/* II. CONTENIDO */}
      <section id="conteudo" className="bg-card py-20">
        <div className="mx-auto max-w-5xl px-5">
          <SectionHead n="II" label="Qué hay adentro" title="Siete capítulos. Setenta y tres recetas. Del desayuno al té antes de dormir." />
          <div className="grid gap-4 md:grid-cols-2">
            {chapters.map(([t, m, d], i) => (
              <article key={t} className="rounded-2xl border border-border bg-background p-6">
                <span className="font-serif text-sm text-accent">Capítulo {i + 1}</span>
                <h3 className="mt-1 text-2xl font-bold">{t}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-primary">{m}</p>
                <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* II.b POR DENTRO */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        <SectionHead n="II·b" label="Por dentro del libro" title="Mira cómo es el libro por dentro — diagramado, ilustrado y listo para usar." />
        <p className="mb-2 inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">Libro digital — acceso inmediato en celular, tablet o computadora</p>
        <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>Este es un libro digital en PDF. Lo recibes al instante, lo abres en tu celular, tablet o computadora y empiezas a usarlo de inmediato. Cada receta tiene foto, ingredientes con cantidades exactas, paso a paso numerado, consejos y sustituciones. Todo organizado para que encuentres lo que necesitas sin perder tiempo.</p>
          <p>Si prefieres, puedes imprimirlo y encuadernarlo — el libro fue diagramado con márgenes especiales para eso. Muchas lectoras lo imprimen y lo dejan siempre en la barra de la cocina.</p>
        </div>
        <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {PREVIEWS.map((src, i) => (
            <img key={src} src={src} alt={`Página de muestra ${i + 1}`} loading="lazy" className="w-[75%] shrink-0 snap-center rounded-xl border border-border shadow-soft md:w-full" />
          ))}
        </div>
      </section>

      {/* III. DIFERENCIA */}
      <section className="bg-secondary py-20 text-secondary-foreground">
        <div className="mx-auto max-w-3xl px-5">
          <p className="eyebrow">III. La diferencia</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">Este libro no es otra colección más de recetas de internet.</h2>
          <p className="mt-5 text-lg leading-relaxed opacity-85">
            Internet tiene millones de recetas. El problema nunca fue la falta de recetas. El problema es que la mayoría pide ingredientes caros, usa azúcar refinada escondida, tiene el paso a paso incompleto y se hizo para verse bonita en la foto — no para funcionar en tu cocina.
          </p>
          <div className="mt-10 space-y-6">
            {diffs.map(([t, d]) => (
              <div key={t} className="flex gap-4">
                <Check className="mt-1 size-6 shrink-0 text-accent" />
                <div><h3 className="text-xl font-bold">{t}</h3><p className="mt-1 opacity-80">{d}</p></div>
              </div>
            ))}
          </div>
          <blockquote className="mt-12 border-l-4 border-accent pl-5 font-serif text-xl italic leading-relaxed">
            Mi abuela no era nutrióloga. Pero nadie de la familia se enfermaba. Ella solo usaba lo que daba la tierra y cocinaba con respeto. Este libro es lo que ella me enseñó — y que yo organicé para que lo uses en tu cocina.
            <footer className="eyebrow mt-3 not-italic">Renato Moreira</footer>
          </blockquote>
        </div>
      </section>

      {/* IV. PARA QUIÉN */}
      <section className="mx-auto max-w-3xl px-5 py-20">
        <SectionHead n="IV" label="Para quién es" title="Este libro es para ti si:" />
        <ul className="space-y-3">
          {forWho.map((t) => (
            <li key={t} className="flex gap-3 rounded-xl border border-border bg-card p-4">
              <Check className="mt-0.5 size-5 shrink-0 text-primary" /><span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* V. GARANTÍA */}
      <section className="mx-auto max-w-3xl px-5 pb-20">
        <div className="rounded-3xl border-2 border-primary bg-card p-8 text-center shadow-soft">
          <ShieldCheck className="mx-auto size-14 text-primary" />
          <p className="eyebrow mt-4">V. Garantía</p>
          <h2 className="mt-2 text-3xl font-bold">Si no te gusta, te devuelvo hasta el último centavo.</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Tienes 7 días para abrir el libro, leerlo, cocinar y decidir si es para ti. Si por cualquier motivo sientes que no valió la pena, solo pide el reembolso directamente en la plataforma de pago. Sin preguntas, sin trámites, sin incomodidades.
          </p>
          <p className="mt-4 font-bold">Solo puedo ofrecerte esto porque sé lo que hay adentro.</p>
        </div>
      </section>

      {/* OFERTA FINAL */}
      <section className="bg-card py-20">
        <div className="mx-auto max-w-md px-5 text-center">
          <img src={AUTHOR} alt="Renato Moreira" loading="lazy" className="mx-auto size-28 rounded-full object-cover object-top shadow-soft" />
          <p className="eyebrow mt-6">Libro digital ilustrado · +200 páginas · primera edición</p>
          <h2 className="mt-3 text-4xl font-bold">Receitas do Campo</h2>
          <p className="mt-2 font-serif italic text-muted-foreground">73 recetas sin azúcar refinada que mi abuela ya preparaba antes de que se pusieran de moda</p>
          <div className="my-8"><Price /></div>
          <p className="mb-4 flex items-center justify-center gap-1 text-sm text-muted-foreground">Haz clic aquí para asegurar el tuyo <ArrowDown className="size-4" /></p>
          <Cta pulse />
          <p className="mt-4 text-[0.7rem] font-bold uppercase tracking-widest text-muted-foreground">Acceso inmediato en el celular · Libro digital en PDF · Tuyo para siempre</p>
        </div>
      </section>

      <footer className="bg-secondary px-5 py-12 text-center text-secondary-foreground">
        <p className="mx-auto max-w-xl font-serif text-2xl italic">"La cura más poderosa no empieza en el médico. Empieza en la cocina."</p>
        <p className="eyebrow mt-4">Renato Moreira · Serra da Mantiqueira · 2026</p>
        <p className="mt-6 text-xs opacity-60">receitasrenatomoreira.com</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 p-3 backdrop-blur md:hidden">
        <Cta />
      </div>
      <div className="h-20 md:hidden" />
    </main>
  );
}
