import { motion } from 'framer-motion';
import { Link } from 'wouter';
import courtroomHero from '@assets/courtroom-hero.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      exit={{ opacity: 0 }}
      className="w-full"
    >
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <img 
            src={courtroomHero} 
            alt="Courthouse Interior" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-transparent to-secondary"></div>
        </div>
        
        <div className="container relative z-10 px-6 text-center max-w-4xl mx-auto">
          <motion.div variants={stagger} className="space-y-8">
            <motion.p variants={fadeUp} className="text-primary tracking-[0.4em] uppercase text-sm font-semibold">
              Established 1967
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
              Authority Forged <br/> In Precedent.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              A decades-long judicial and courtroom dynasty. We do not negotiate from weakness; we litigate from a position of absolute certainty.
            </motion.p>
            <motion.div variants={fadeUp} className="pt-8">
              <Link href="/legacy" className="inline-block border border-primary text-primary px-8 py-4 uppercase tracking-widest text-xs hover:bg-primary hover:text-secondary transition-all duration-500">
                Examine Our Legacy
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Firm History Intro */}
      <section className="py-32 bg-background border-b border-border">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6 text-secondary">The Weight of History</h2>
              <div className="h-px w-16 bg-primary mb-8"></div>
              <p className="text-muted-foreground leading-loose mb-6">
                Founded by the late pioneer of the Jordanian bar, Dweik Law Firm carries a legacy that spans over half a century. From the courts of Hebron to the tribunals of the UAE, and finally establishing a formidable presence in Amman, our foundation is built upon decades of rigorous jurisprudence.
              </p>
              <p className="text-muted-foreground leading-loose">
                Today, under the leadership of a retired Court of Appeal Judge, the firm operates with the rare and invaluable perspective of those who have authored the verdicts they now argue.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-secondary p-8 flex items-center justify-center text-center relative z-10 border border-border">
                <blockquote className="font-serif text-2xl text-white leading-relaxed">
                  "The law is not a suggestion; it is the architecture of consequence."
                </blockquote>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-primary z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Practice Areas */}
      <section className="py-32 bg-card">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-24">
            <h2 className="text-3xl font-serif text-secondary mb-6">Jurisdictional Dominance</h2>
            <div className="h-px w-24 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Criminal Defense",
                desc: "Uncompromising representation in high-stakes criminal proceedings. We demand the strictest adherence to evidentiary standards."
              },
              {
                title: "Appellate Advocacy",
                desc: "Strategic litigation at the appellate level. Led by a former Court of Appeal Judge, our mastery of procedural error and statutory interpretation is unmatched."
              },
              {
                title: "Property Crimes",
                desc: "Aggressive defense and civil litigation regarding complex real property disputes, embezzlement, and corporate malfeasance."
              }
            ].map((area, i) => (
              <div key={i} className="group border-t border-border pt-8">
                <span className="text-primary text-sm font-mono mb-4 block">0{i + 1}</span>
                <h3 className="text-xl font-serif mb-4 text-secondary group-hover:text-primary transition-colors">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link href="/practice-areas" className="text-sm font-semibold tracking-[0.2em] uppercase border-b border-primary text-secondary hover:text-primary transition-colors pb-2">
              View All Practice Areas
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
