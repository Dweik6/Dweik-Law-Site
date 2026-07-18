import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-8xl font-serif text-secondary mb-4">404</h1>
        <div className="h-px w-16 bg-primary mx-auto mb-6"></div>
        <p className="text-muted-foreground uppercase tracking-widest text-sm mb-8 font-mono">
          Precedent Not Found
        </p>
        <p className="text-secondary/70 mb-8 max-w-md mx-auto">
          The requested record does not exist in our archives or the jurisdiction is invalid.
        </p>
        <Link 
          href="/" 
          className="inline-block border border-secondary text-secondary px-8 py-3 text-xs uppercase tracking-widest hover:bg-secondary hover:text-white transition-colors duration-300"
        >
          Return to Chambers
        </Link>
      </div>
    </div>
  );
}
