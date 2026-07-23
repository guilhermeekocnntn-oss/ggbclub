import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

const IMG = {
  logo: "/brand/logo.svg",
  product1: "/brand/product1.webp",
  product2: "/brand/product2.webp",
  slide1: "/brand/slide1.webp",
  slide2: "/brand/slide2.webp",
  slide3: "/brand/slide3.webp",
  slide4: "/brand/slide4.webp",
  slide5: "/brand/slide5.webp",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GGB Club — Mais que um creme, sua liberdade" },
      { name: "description", content: "Bem-vinda ao clube, gata garota! Creme Clareador para axilas e virilhas com Niacinamida e Ácido Tranexâmico." },
      { property: "og:title", content: "GGB Club — Mais que um creme, sua liberdade" },
      { property: "og:description", content: "Bem-vinda ao clube, gata garota!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", href: "/brand/logo.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Space+Grotesk:wght@400;500;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground overflow-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Gata />
      <Benefits />
      <Ritual />
      <Ingredients />
      <Testimonials />
      <Manifesto />
      <CTA />
      <Footer />
    </main>
  );
}

/* ---------- LOGO ---------- */
function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={IMG.logo}
        alt="GGB Club"
        className="h-8 md:h-10 w-auto object-contain"
      />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-5 md:px-10 py-3 flex items-center justify-between bg-yellow border-b-2 border-black">
      <a href="#top"><Logo /></a>
      <nav className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-wider">
        <a href="#beneficios" className="hover:text-pink transition">Benefícios</a>
        <a href="#ritual" className="hover:text-pink transition">Ritual</a>
        <a href="#formula" className="hover:text-pink transition">Fórmula</a>
        <a href="#depoimentos" className="hover:text-pink transition">O clube fala</a>
      </nav>
      <a href="#comprar" className="px-5 py-2.5 rounded-full bg-pink text-white text-xs md:text-sm font-black uppercase tracking-widest hover:scale-105 transition shadow-[0_6px_0_0_var(--brand-blue)]">
        Comprar ✿
      </a>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen pt-32 pb-16 px-5 md:px-10 flex items-center bg-white">
      {/* Confetti stickers */}
      <Sticker className="top-32 left-6 text-yellow text-6xl md:text-8xl animate-wobble" style={{ animationDelay: "0.2s" }}>✿</Sticker>
      <Sticker className="top-44 right-10 text-blue text-5xl md:text-7xl animate-wobble">☀</Sticker>
      <Sticker className="bottom-24 left-16 text-pink text-6xl md:text-7xl animate-wobble" style={{ animationDelay: "0.5s" }}>♥</Sticker>
      <Sticker className="bottom-40 right-24 text-green text-5xl md:text-6xl animate-wobble" style={{ animationDelay: "0.8s" }}>≈</Sticker>
      <Squiggle className="top-36 left-1/2 text-blue" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center w-full">
        <div>
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: -4 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="inline-block px-4 py-2 rounded-full bg-yellow border-2 border-black text-blue text-xs uppercase tracking-widest font-black mb-6"
          >
            ✿ Novo · Gata Garota Edition ✿
          </motion.div>

          <h1 className="font-display text-[clamp(3.5rem,10vw,8rem)] leading-[0.85] tracking-tight">
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="block text-pink">
              Mais que
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="block text-green">
              um creme,
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="block text-blue">
              sua liberdade.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg md:text-xl max-w-md text-muted-foreground leading-relaxed"
          >
            Creme clareador pra <b className="text-pink">axilas e virilhas</b>. Com niacinamida e ácido tranexâmico. Bem-vinda ao clube, <em className="text-green font-bold not-italic">gata garota</em>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#comprar" className="px-8 py-4 rounded-full bg-pink text-white font-black uppercase tracking-widest text-sm shadow-[0_8px_0_0_var(--brand-blue)] hover:translate-y-1 hover:shadow-[0_4px_0_0_var(--brand-blue)] transition-all">
              Quero entrar no clube →
            </a>
            <a href="#ritual" className="px-8 py-4 rounded-full bg-white border-2 border-black text-blue font-black uppercase tracking-widest text-sm hover:bg-yellow transition">
              Como usar
            </a>
          </motion.div>

          <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-widest text-muted-foreground font-bold">
            <div className="flex text-yellow text-lg">★★★★★</div>
            <span>4.9 · +12.000 gatas no clube</span>
          </div>
        </div>

        {/* Product image with sticker-like frame */}
        <motion.div style={{ y: yImg }} className="relative animate-bounce-soft mt-6 md:mt-0">
          <div className="absolute inset-4 bg-yellow rounded-[3rem] rotate-3" />
          <div className="absolute inset-4 bg-green rounded-[3rem] -rotate-3" />
          <div className="relative bg-pink rounded-[3rem] p-6 md:p-10 border-4 border-black shadow-[12px_12px_0_0_var(--brand-blue)]">
            <img
              src={IMG.product1}
              alt="GGB Club Creme Clareador"
              width={800}
              height={800}
              className="w-full rounded-[2rem] bg-white object-cover"
            />
          </div>
          {/* Spinning badge */}
          <div className="absolute -top-8 -right-4 md:-top-10 md:-right-10 w-28 h-28 md:w-36 md:h-36 z-25">
            <svg viewBox="0 0 100 100" className="animate-spin-slow w-full h-full">
              <defs>
                <path id="circ" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <circle cx="50" cy="50" r="48" fill="var(--brand-yellow)" />
              <text fontSize="7.5" fill="var(--brand-blue)" fontFamily="var(--font-display)" letterSpacing="0.5">
                <textPath href="#circ">✿ PRODUTO APROVADO PELA ANVISA ✿ GGB CLUB </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl md:text-5xl text-blue">✿</span>
            </div>
          </div>
          {/* Price tag */}
          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-yellow border-2 border-black rounded-2xl px-5 py-3 -rotate-6 shadow-[4px_4px_0_0_black]">
            <div className="text-[10px] uppercase tracking-widest font-black text-blue">A partir de</div>
            <div className="font-display text-3xl text-pink leading-none">R$89</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Sticker({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return <div className={`absolute pointer-events-none select-none z-0 ${className}`} style={style}>{children}</div>;
}
function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg className={`absolute w-32 h-8 pointer-events-none ${className}`} viewBox="0 0 200 40" fill="none">
      <path d="M 5 20 Q 25 5, 45 20 T 85 20 T 125 20 T 165 20 T 195 20" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/* ---------- MARQUEE ---------- */
function Marquee() {
  const items = ["MAIS QUE UM CREME", "SUA LIBERDADE", "GATA GAROTA", "GGB CLUB", "AXILAS & VIRILHAS", "CLAREIA DE VERDADE"];
  return (
    <section className="relative bg-pink text-white py-5 overflow-hidden border-y-4 border-black">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="mx-6 font-display text-3xl md:text-5xl flex items-center gap-6">
            {it} <span className="text-yellow">✿</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------- GATA GAROTA HERO ART ---------- */
function Gata() {
  return (
    <section className="relative bg-white py-16 md:py-24 px-5 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <img
          src={IMG.slide4}
          alt="Mais brasileira do que nunca"
          loading="lazy"
          className="w-full rounded-3xl border-4 border-black shadow-[10px_10px_0_0_var(--brand-pink)]"
        />
      </div>
    </section>
  );
}

/* ---------- BENEFITS ---------- */
function Benefits() {
  const items = [
    { icon: "☀", t: "Clareia manchas", d: "Ácido tranexâmico focado em hiperpigmentação. Some com marca teimosa.", bg: "bg-pink", text: "text-white" },
    { icon: "✿", t: "Uniformiza o tom", d: "Niacinamida iguala o tom, controla oleosidade e fortalece a pele.", bg: "bg-green", text: "text-white" },
    { icon: "♥", t: "Textura seda", d: "Absorção rápida, zero pegajoso. Passou, esqueceu, brilhou.", bg: "bg-yellow", text: "text-blue" },
    { icon: "★", t: "Ginecologicamente testado", d: "Feito pra pele brasileira. Vegano, cruelty-free, sem parabenos.", bg: "bg-blue", text: "text-yellow" },
  ];
  return (
    <section id="beneficios" className="relative py-20 md:py-32 px-5 md:px-10 max-w-7xl mx-auto">
      <Sticker className="top-10 right-10 text-pink text-7xl animate-wobble">✿</Sticker>
      <div className="grid md:grid-cols-2 gap-10 items-end mb-14">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] font-black text-blue mb-3">O que o creme faz</p>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.9]">
            <span className="text-pink">Poderes</span> <span className="text-green">que</span><br /><span className="text-blue">funcionam.</span>
          </h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-md">
          Formulado pra pele brasileira, na temperatura brasileira, com a atitude que só a gata garota tem.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.t}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08 }}
            className={`${it.bg} ${it.text} p-7 rounded-[2rem] border-4 border-black shadow-[6px_6px_0_0_black] hover:translate-y-[-4px] hover:shadow-[6px_10px_0_0_black] transition-all`}
          >
            <div className="text-5xl mb-4">{it.icon}</div>
            <h3 className={`font-display mb-2 ${it.t.length > 20 ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"}`}>{it.t}</h3>
            <p className="text-sm opacity-90 leading-relaxed">{it.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------- RITUAL ---------- */
function Ritual() {
  const steps = [
    { n: "01", t: "Higieniza", d: "Axila e virilha lavadinhas e bem sequinhas." },
    { n: "02", t: "Aplica", d: "Ervilha de creme. Massagem circular, com carinho." },
    { n: "03", t: "Repete", d: "Toda noite antes de dormir. Consistência é tudo." },
    { n: "04", t: "Brilha", d: "Em semanas, o clarear aparece. Sai gata garota." },
  ];
  const [active, setActive] = useState(0);
  return (
    <section id="ritual" className="relative py-20 md:py-32 px-5 md:px-10 bg-green text-white overflow-hidden">
      <Sticker className="top-10 left-10 text-yellow text-8xl animate-wobble">☀</Sticker>
      <Sticker className="bottom-20 right-10 text-pink text-7xl animate-wobble">♥</Sticker>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-12 items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] font-black text-yellow mb-3">Ritual GGB</p>
          <h2 className="font-display text-5xl md:text-8xl leading-[0.85]">
            <span className="text-yellow">Quatro</span> <span className="text-white">passos,</span><br />
            <span className="text-pink">zero</span> <span className="text-white">drama.</span>
          </h2>
          <p className="mt-6 text-lg max-w-md opacity-90">
            Skincare não é prisão. É ritual pra lembrar todo dia que você é o barato.
          </p>

          <img src={IMG.slide2} alt="" loading="lazy" className="mt-8 w-full rounded-3xl border-4 border-black" />
        </div>
        <div className="space-y-3">
          {steps.map((s, i) => (
            <button
              key={s.n}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`w-full text-left p-6 rounded-3xl border-4 border-black transition-all duration-300 ${active === i ? "bg-pink text-white scale-[1.02] shadow-[8px_8px_0_0_var(--brand-blue)]" : "bg-white text-blue shadow-[4px_4px_0_0_black] hover:bg-yellow"}`}
            >
              <div className="flex items-baseline gap-5">
                <span className="font-display text-5xl md:text-6xl">{s.n}</span>
                <div>
                  <h3 className="font-display text-3xl">{s.t}</h3>
                  <p className="text-sm mt-1 opacity-90">{s.d}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INGREDIENTS ---------- */
function Ingredients() {
  const list = [
    { name: "Niacinamida", pct: "4%", note: "Vitamina B3. Uniformiza tom, controla oleosidade, fortalece a barreira." },
    { name: "Ácido Tranexâmico", pct: "3%", note: "O clareador queridinho da derma. Age na raiz da mancha." },
    { name: "Alfa-Arbutin", pct: "1%", note: "Reduz hiperpigmentação sem irritar a pele sensível." },
    { name: "Vitamina C", pct: "2%", note: "Antioxidante. Ilumina, protege e entrega glow real." },
  ];
  return (
    <section id="formula" className="py-20 md:py-32 px-5 md:px-10 max-w-7xl mx-auto relative">
      <Sticker className="top-10 right-1/4 text-green text-6xl animate-wobble">✿</Sticker>
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-[0.3em] font-black text-blue mb-3">A fórmula</p>
        <h2 className="font-display text-5xl md:text-8xl leading-[0.9]">
          <span className="text-pink">Ciência</span> <span className="text-green">com</span> <span className="text-blue">personalidade.</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute inset-3 bg-yellow rounded-[2rem] rotate-2" />
          <img
            src={IMG.slide3}
            alt="Creme Clareador GGB Club"
            loading="lazy"
            className="relative w-full rounded-[2rem] border-4 border-black object-cover"
          />
        </div>
        <div className="order-1 md:order-2 space-y-4">
          {list.map((ing, i) => (
            <motion.div
              key={ing.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center justify-between gap-4 p-5 bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0_0_black]"
            >
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl text-blue">{ing.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{ing.note}</p>
              </div>
              <span className="font-display text-4xl md:text-5xl text-pink">{ing.pct}</span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: list.length * 0.08 }}
            className="p-5 bg-yellow border-2 border-black rounded-2xl shadow-[4px_4px_0_0_black] flex items-center gap-4"
          >
            <span className="text-3xl">🛡️</span>
            <div>
              <h3 className="font-display text-xl text-blue uppercase tracking-wide">Segurança & Qualidade</h3>
              <p className="text-sm text-blue font-bold mt-0.5">Testado ginecologicamente e aprovado pela ANVISA.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const quotes = [
    { q: "ESSE CREME FAZ MILAGRESSSSS!", a: "Bianca", tag: "cliente verificada", color: "bg-pink text-white" },
    { q: "Ele REALMENTE clareia. Já usei creme famoso e não vi o resultado que estou vendo com esse. MARAVILHOSO!!", a: "Rafa", color: "bg-green text-white" },
    { q: "Melhor investimento. Minha pele agradece todo dia.", a: "Jéssica", color: "bg-yellow text-blue" },
    { q: "Chegou rápido e a textura é tudo. Virei fã.", a: "Larissa", color: "bg-blue text-yellow" },
  ];
  return (
    <section id="depoimentos" className="py-20 md:py-32 px-5 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <h2 className="font-display text-5xl md:text-8xl leading-[0.9]">
            <span className="text-pink">O clube</span> <span className="text-green">fala.</span>
          </h2>
          <p className="text-sm uppercase tracking-widest font-black text-blue">★★★★★ · 4.9/5 · 2.847 avaliações</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quotes.map((qt, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              className={`${qt.color} p-7 rounded-[2rem] border-4 border-black shadow-[6px_6px_0_0_black] flex flex-col justify-between min-h-[260px]`}
            >
              <blockquote className="font-display text-2xl md:text-3xl leading-[1.05]">"{qt.q}"</blockquote>
              <figcaption className="text-xs uppercase tracking-widest mt-5 opacity-90 font-bold">— {qt.a}{qt.tag ? ` · ${qt.tag}` : ""}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- MANIFESTO ---------- */
function Manifesto() {
  const words = "Amiga, eu cheguei para ser a sua best.".split(" ");
  return (
    <section className="py-24 md:py-40 px-5 md:px-10 bg-yellow text-blue text-center relative overflow-hidden border-y-4 border-black">
      <Sticker className="top-10 left-10 text-pink text-8xl animate-wobble">✿</Sticker>
      <Sticker className="bottom-10 right-10 text-green text-8xl animate-wobble">☀</Sticker>
      <div className="relative max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] font-black mb-6 text-pink">Manifesto</p>
        <h2 className="font-display text-5xl md:text-8xl leading-[0.9] flex flex-wrap justify-center gap-x-4 gap-y-2">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.08 }}
              className={i === 4 ? "text-pink" : i === 6 ? "text-green" : ""}
            >
              {w}
            </motion.span>
          ))}
        </h2>
        <p className="mt-8 text-lg md:text-xl max-w-2xl mx-auto font-bold">
          E você também não será. GGB Club não é só skincare — é movimento, é rede, é lembrar todo dia que sua pele e sua vida pertencem a você.
        </p>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section id="comprar" className="py-20 md:py-32 px-5 md:px-10 max-w-6xl mx-auto">
      <div className="relative bg-pink text-white rounded-[2.5rem] border-4 border-black p-8 md:p-16 overflow-hidden shadow-[12px_12px_0_0_var(--brand-blue)]">
        <Sticker className="top-6 right-8 text-yellow text-6xl animate-wobble">☀</Sticker>
        <Sticker className="bottom-6 left-8 text-green text-6xl animate-wobble">✿</Sticker>
        <div className="relative grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] font-black text-yellow mb-3">Bem-vinda ao clube</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.85]">
              Seu <span className="text-yellow">glow</span><br /> tá esperando.
            </h2>
            <p className="mt-5 text-base md:text-lg opacity-90 max-w-md">
              Envio pra todo Brasil · Parcelamento sem juros · Garantia de amor à primeira aplicação.
            </p>
          </div>
          <div className="bg-white text-blue rounded-[2rem] border-4 border-black p-7 shadow-[6px_6px_0_0_black]">
            <img src={IMG.product2} alt="Creme Clareador GGB Club 150g" className="w-full rounded-2xl mb-4 aspect-square object-cover" loading="lazy" />
            <p className="text-xs uppercase tracking-widest font-black opacity-70">Creme Clareador · 150g</p>
            <div className="flex items-baseline gap-3 mt-1">
              <span className="font-display text-5xl text-pink">R$ 89</span>
              <span className="text-lg line-through opacity-40">R$ 129</span>
            </div>
            <p className="text-sm mt-1 font-black text-green">ou 3x de R$ 29,67 sem juros</p>
            <a href="https://www.ggbclub.com.br/produtos/creme-clareador/" className="mt-5 block w-full py-4 rounded-full bg-pink text-white text-center font-black uppercase tracking-widest shadow-[0_6px_0_0_var(--brand-blue)] hover:translate-y-1 hover:shadow-[0_2px_0_0_var(--brand-blue)] transition-all">
              Comprar agora ✿
            </a>
            <p className="text-xs text-center mt-3 opacity-60 font-bold">✓ Frete grátis acima de R$ 150</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t-4 border-black py-12 px-5 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
        <div>
          <Logo className="text-3xl" />
          <p className="text-sm text-muted-foreground mt-2 font-bold">© {new Date().getFullYear()} GGB Club · Gata Garota</p>
        </div>
        <div className="flex gap-6 text-xs uppercase tracking-widest font-black text-blue">
          <a href="https://www.instagram.com/ggbclub.Oficial" className="hover:text-pink">Instagram</a>
          <a href="#" className="hover:text-pink">TikTok</a>
          <a href="#" className="hover:text-pink">Contato</a>
        </div>
      </div>
    </footer>
  );
}
