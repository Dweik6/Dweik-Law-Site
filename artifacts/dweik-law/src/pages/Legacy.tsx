import { motion } from 'framer-motion';
import founderPortrait from '@assets/unnamed_1784346930420.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

export default function Legacy() {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      exit={{ opacity: 0 }}
      className="w-full bg-background pb-32"
    >
      <header className="py-32 text-center border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div variants={stagger}>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-serif text-secondary mb-8">
              The Architecture of Precedent
            </motion.h1>
            <motion.div variants={fadeUp} className="h-px w-24 bg-primary mx-auto mb-8"></motion.div>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed">
              Dweik Law Firm does not claim authority; it is an institution built upon it. For over half a century, the Dweik name has been synonymous with legal rigor, unyielding defense, and a profound understanding of judicial mechanics in the Middle East.
            </motion.p>
          </motion.div>
        </div>
      </header>

      {/* Founder Portrait */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative mx-auto md:mx-0 w-64">
              <div className="aspect-[3/4] overflow-hidden border border-border">
                <img
                  src={founderPortrait}
                  alt="Abdalmuti Al-Dweik — Founder"
                  className="w-full h-full object-cover object-top grayscale contrast-110"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary z-[-1]"></div>
            </div>
            <motion.div variants={fadeUp} className="space-y-6">
              <div>
                <p className="text-primary font-mono tracking-widest uppercase text-sm mb-2">The Founder</p>
                <h2 className="text-3xl md:text-4xl font-serif text-secondary mb-1">Abdalmuti Al-Dweik</h2>
                <p className="text-muted-foreground font-mono text-sm tracking-wide">1944 — 2023</p>
              </div>
              <div className="h-px w-12 bg-primary"></div>
              <p className="text-muted-foreground leading-relaxed">
                Born in Hebron in 1944, Abdalmuti Al-Dweik graduated in the distinguished class of 1967 and spent the following decades building one of the region's most formidable legal practices. His international work in the United Arab Emirates, followed by his defining contributions to the Jordanian bar, established an institutional legacy that no passage of time can diminish. He practiced with total dedication until his passing in 2023.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The firm he built continues in his name and in his tradition.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 max-w-4xl mt-24">
        <div className="space-y-24">
          
          <div className="relative pl-8 md:pl-0">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>
            
            {/* 1944 - 1967 */}
            <div className="md:grid md:grid-cols-2 md:gap-16 items-center mb-24 relative">
              <div className="hidden md:block absolute left-1/2 top-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_0_4px_var(--background)]"></div>
              <div className="md:text-right mb-8 md:mb-0">
                <span className="text-primary font-mono text-xl block mb-2">1944 — 1967</span>
                <h3 className="text-2xl font-serif text-secondary mb-4">Origins in Hebron</h3>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Born in 1944 in Hebron, the Founder established the intellectual foundation of the firm. Graduating in 1967, his early practice was defined by a rigorous dedication to legal scholarship and a commanding presence in the courtroom.
                </p>
              </div>
            </div>

            {/* UAE Expansion */}
            <div className="md:grid md:grid-cols-2 md:gap-16 items-center mb-24 relative">
              <div className="hidden md:block absolute left-1/2 top-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_0_4px_var(--background)]"></div>
              <div className="md:order-2 mb-8 md:mb-0">
                <span className="text-primary font-mono text-xl block mb-2">The Middle Years</span>
                <h3 className="text-2xl font-serif text-secondary mb-4">International Perspective</h3>
              </div>
              <div className="md:text-right md:order-1">
                <p className="text-muted-foreground leading-relaxed">
                  Expanding the firm's influence, the Founder practiced in the United Arab Emirates, handling complex cross-border disputes and contributing to a growing jurisprudence in a rapidly developing region.
                </p>
              </div>
            </div>

            {/* Return to Jordan */}
            <div className="md:grid md:grid-cols-2 md:gap-16 items-center mb-24 relative">
              <div className="hidden md:block absolute left-1/2 top-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_0_4px_var(--background)]"></div>
              <div className="md:text-right mb-8 md:mb-0">
                <span className="text-primary font-mono text-xl block mb-2">Return & Consolidation</span>
                <h3 className="text-2xl font-serif text-secondary mb-4">Establishment in Amman</h3>
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Returning to the Hashemite Kingdom of Jordan, the firm solidified its reputation as a premier destination for high-stakes criminal defense and civil litigation. The Founder became a pillar of the Jordanian bar.
                </p>
              </div>
            </div>

            {/* 2023 - Present */}
            <div className="md:grid md:grid-cols-2 md:gap-16 items-center relative">
              <div className="hidden md:block absolute left-1/2 top-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_0_4px_var(--background)]"></div>
              <div className="md:order-2 mb-8 md:mb-0">
                <span className="text-primary font-mono text-xl block mb-2">2023 — Present</span>
                <h3 className="text-2xl font-serif text-secondary mb-4">The Modern Era</h3>
              </div>
              <div className="md:text-right md:order-1">
                <p className="text-muted-foreground leading-relaxed">
                  Following the Founder's passing in 2023, leadership transitioned to Ata Al-Dweik. After a distinguished two-decade career culminating as a Judge at the Court of Appeal, he returned to private practice, bringing unparalleled judicial insight to the firm's advocacy.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
}
