import { motion } from 'framer-motion';
import attorneyPortrait from '@assets/attorney-portrait.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Attorneys() {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      exit={{ opacity: 0 }}
      className="w-full bg-background"
    >
      <header className="py-24 text-center border-b border-border bg-card">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-secondary mb-6">
            Leadership & Counsel
          </motion.h1>
          <motion.div variants={fadeUp} className="h-px w-16 bg-primary mx-auto"></motion.div>
        </div>
      </header>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-5 relative">
              <div className="aspect-[3/4] overflow-hidden border border-border">
                <img 
                  src={attorneyPortrait} 
                  alt="Ata Al-Dweik" 
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-full h-full border border-primary z-[-1]"></div>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <div>
                <h2 className="text-4xl font-serif text-secondary mb-2">Ata Al-Dweik</h2>
                <p className="text-primary font-mono tracking-widest uppercase text-sm mb-8">
                  CEO & Managing Partner • Former Court of Appeal Judge
                </p>
                <div className="h-px w-full bg-border mb-8"></div>
                
                <div className="prose prose-lg prose-p:text-muted-foreground prose-p:leading-relaxed max-w-none">
                  <p>
                    Ata Al-Dweik commands a legal authority matched by few in the region. He approaches litigation not merely as an advocate, but with the incisive analytical rigor of a magistrate who has spent decades determining the fate of complex legal arguments.
                  </p>
                  <p>
                    Beginning his career as a practicing attorney in 1993, Al-Dweik quickly established a reputation for meticulous preparation and strategic brilliance. In 2001, he transitioned to the judiciary, where he served the Kingdom for over two decades. His tenure on the bench was defined by impartial rigor, culminating in his appointment as a Judge at the Court of Appeal.
                  </p>
                  <p>
                    In 2023, he retired from the judiciary and returned to private practice to assume leadership of Dweik Law Firm following the passing of its Founder.
                  </p>
                  <p>
                    This dual perspective—having argued cases before the bench and having ruled upon them from it—grants the firm an extraordinary tactical advantage. When Dweik Law Firm submits a brief or stands before a tribunal, it does so with an exact understanding of judicial expectations. 
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-secondary mb-6 border-b border-border pb-4">
                  Career Chronology
                </h3>
                <ul className="space-y-6">
                  <li className="grid md:grid-cols-[120px_1fr] gap-4">
                    <span className="font-mono text-primary text-sm pt-1">2023 – Present</span>
                    <div>
                      <strong className="block text-secondary font-medium">Managing Partner, Dweik Law Firm</strong>
                      <span className="text-muted-foreground text-sm">Amman, Jordan</span>
                    </div>
                  </li>
                  <li className="grid md:grid-cols-[120px_1fr] gap-4">
                    <span className="font-mono text-primary text-sm pt-1">2001 – 2023</span>
                    <div>
                      <strong className="block text-secondary font-medium">Judge, Court of Appeal</strong>
                      <span className="text-muted-foreground text-sm">Hashemite Kingdom of Jordan</span>
                    </div>
                  </li>
                  <li className="grid md:grid-cols-[120px_1fr] gap-4">
                    <span className="font-mono text-primary text-sm pt-1">1993 – 2001</span>
                    <div>
                      <strong className="block text-secondary font-medium">Practicing Attorney</strong>
                      <span className="text-muted-foreground text-sm">Amman, Jordan</span>
                    </div>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
}
