import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formspree.io/f/mkodrwrp', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      exit={{ opacity: 0 }}
      className="w-full bg-background min-h-[80vh] flex flex-col"
    >
      <div className="grid md:grid-cols-2 flex-1">
        
        {/* Left Info Panel */}
        <div className="bg-secondary text-secondary-foreground p-12 md:p-24 flex flex-col justify-center">
          <motion.div variants={fadeUp} className="max-w-md">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Formal Inquiry</h1>
            <div className="h-px w-16 bg-primary mb-12"></div>
            
            <p className="text-secondary-foreground/70 leading-relaxed mb-16 text-lg">
              Consultations are granted subject to conflict checks and availability. Please submit the nature of your legal matter below. 
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="font-serif text-xl mb-4 border-b border-white/10 pb-2 inline-block">Chambers</h4>
                <address className="not-italic text-secondary-foreground/70 space-y-2">
                  <p>Amman</p>
                  <p>Hashemite Kingdom of Jordan</p>
                  <a
                    href="https://maps.app.goo.gl/RauW6F8Dw7Ge7iZj7?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-mono tracking-wide mt-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    View on Map
                  </a>
                </address>
              </div>

              <div>
                <h4 className="font-serif text-xl mb-4 border-b border-white/10 pb-2 block">Telephone</h4>
                <a
                  href="tel:0796499980"
                  className="block text-primary hover:text-primary/80 transition-colors font-mono tracking-widest text-lg"
                >
                  0796 499 980
                </a>
              </div>
              
              <div>
                <h4 className="font-serif text-xl mb-4 border-b border-white/10 pb-2 inline-block">Direct Protocol</h4>
                <p className="text-secondary-foreground/70">
                  By scheduled appointment only.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Form Panel */}
        <div className="p-12 md:p-24 flex items-center justify-center bg-card">
          <motion.div variants={fadeUp} className="w-full max-w-md">
            {submitted ? (
              <div className="text-center p-12 border border-border">
                <span className="text-primary font-mono text-xl block mb-4">Submission Recorded</span>
                <p className="text-muted-foreground">
                  Your inquiry has been received. The firm will contact you upon review of the preliminary details.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-secondary block">
                    Full Name / Entity
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-border py-3 px-0 text-secondary focus:outline-none focus:border-primary transition-colors rounded-none"
                    placeholder="Enter full legal name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact" className="text-xs font-mono uppercase tracking-widest text-secondary block">
                    Contact Information
                  </label>
                  <input 
                    type="text" 
                    id="contact"
                    name="contact"
                    required
                    className="w-full bg-transparent border-b border-border py-3 px-0 text-secondary focus:outline-none focus:border-primary transition-colors rounded-none"
                    placeholder="Phone or Email"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="type" className="text-xs font-mono uppercase tracking-widest text-secondary block">
                    Matter Classification
                  </label>
                  <select 
                    id="type"
                    name="matter_type"
                    required
                    defaultValue=""
                    className="w-full bg-transparent border-b border-border py-3 px-0 text-secondary focus:outline-none focus:border-primary transition-colors rounded-none appearance-none"
                  >
                    <option value="" disabled>Select classification</option>
                    <option value="criminal">Criminal Defense</option>
                    <option value="appellate">Appellate Action</option>
                    <option value="property">Property / Financial</option>
                    <option value="civil">Complex Civil</option>
                    <option value="other">Other Matter</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="description" className="text-xs font-mono uppercase tracking-widest text-secondary block">
                    Brief Statement of Facts
                  </label>
                  <textarea 
                    id="description"
                    name="statement_of_facts"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-border py-3 px-0 text-secondary focus:outline-none focus:border-primary transition-colors rounded-none resize-none"
                    placeholder="Provide a concise summary of the issue..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full border border-secondary text-secondary py-4 text-xs font-mono uppercase tracking-widest hover:bg-secondary hover:text-white transition-colors duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Transmitting...' : 'Submit Petition'}
                </button>
              </form>
            )}
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
