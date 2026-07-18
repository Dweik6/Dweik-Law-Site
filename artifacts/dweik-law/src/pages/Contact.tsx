import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
                <address className="not-italic text-secondary-foreground/70 space-y-1">
                  <p>Amman</p>
                  <p>Hashemite Kingdom of Jordan</p>
                </address>
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
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-border py-3 px-0 text-secondary focus:outline-none focus:border-primary transition-colors rounded-none resize-none"
                    placeholder="Provide a concise summary of the issue..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full border border-secondary text-secondary py-4 text-xs font-mono uppercase tracking-widest hover:bg-secondary hover:text-white transition-colors duration-300 mt-4"
                >
                  Submit Petition
                </button>
              </form>
            )}
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
