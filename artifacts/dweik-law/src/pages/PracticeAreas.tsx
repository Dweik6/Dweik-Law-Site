import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

const practices = [
  {
    id: "criminal-defense",
    title: "Criminal Defense",
    description: "The defense of criminal charges requires absolute procedural precision and an aggressive commitment to holding the prosecution to its burden of proof. We represent clients facing serious indictments with a strategic fortitude forged over decades.",
    details: [
      "White-collar defense and corporate investigations",
      "High-stakes felony trials",
      "Evidentiary suppression and procedural dismissals",
      "Strategic plea negotiations and sentence mitigation"
    ]
  },
  {
    id: "appellate-advocacy",
    title: "Strategic Appellate Litigation",
    description: "Appellate law is not a repetition of the trial; it is a clinical examination of judicial error. Directed by a former Court of Appeal Judge, our appellate practice dissects records, challenges statutory interpretations, and alters precedent.",
    details: [
      "Direct appeals of criminal convictions",
      "Interlocutory appeals on critical legal questions",
      "Post-conviction relief and habeas corpus",
      "Amicus curiae representation"
    ]
  },
  {
    id: "property-crimes",
    title: "Property Crimes & Financial Malfeasance",
    description: "Disputes involving property and finance frequently blur the lines between civil liability and criminal culpability. We navigate these complex intersections with forensic accuracy.",
    details: [
      "Embezzlement and corporate fraud",
      "Real property disputes and title litigation",
      "Asset forfeiture defense",
      "Breach of fiduciary duty claims"
    ]
  },
  {
    id: "complex-civil",
    title: "Complex Civil Disputes",
    description: "Our civil practice applies the rigorous evidentiary standards of criminal defense to commercial and civil litigation. We resolve intractable disputes through commanding courtroom presence and leveraged negotiation.",
    details: [
      "High-value contract disputes",
      "Corporate dissolution and shareholder litigation",
      "Defamation and reputation management",
      "Regulatory enforcement defense"
    ]
  }
];

export default function PracticeAreas() {
  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      exit={{ opacity: 0 }}
      className="w-full bg-background pb-32"
    >
      <header className="py-32 text-center border-b border-border bg-card">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div variants={stagger}>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-secondary mb-6">
              Areas of Authority
            </motion.h1>
            <motion.div variants={fadeUp} className="h-px w-24 bg-primary mx-auto mb-8"></motion.div>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our firm focuses intensely on matters where liberty, precedent, and substantial assets are in jeopardy. We do not dilute our expertise across all fields of law; we dominate in a select few.
            </motion.p>
          </motion.div>
        </div>
      </header>

      <section className="container mx-auto px-6 max-w-5xl mt-24">
        <div className="space-y-24">
          {practices.map((practice, index) => (
            <motion.div 
              key={practice.id}
              variants={fadeUp}
              className="grid md:grid-cols-[1fr_2fr] gap-12 pt-12 border-t border-border"
            >
              <div>
                <span className="text-primary font-mono text-sm uppercase tracking-widest mb-4 block">
                  Sector 0{index + 1}
                </span>
                <h2 className="text-3xl font-serif text-secondary leading-snug">
                  {practice.title}
                </h2>
              </div>
              
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {practice.description}
                </p>
                <ul className="space-y-4">
                  {practice.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-secondary">
                      <span className="text-primary mr-4 mt-1">―</span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
