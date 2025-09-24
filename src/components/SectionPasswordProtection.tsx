import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Lock, Eye, EyeOff } from 'lucide-react';

interface SectionPasswordProtectionProps {
  section: 'felix' | 'reality';
  onAuthenticated: (section: string) => void;
}

export const SectionPasswordProtection = ({ section, onAuthenticated }: SectionPasswordProtectionProps) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Different passwords for each section
  const SECTION_PASSWORDS = {
    felix: 'faggotnigger69',
    reality: 'stupidfatass69'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate a brief loading delay for better UX
    setTimeout(() => {
      if (password === SECTION_PASSWORDS[section]) {
        // No localStorage - authentication only for current session
        onAuthenticated(section);
      } else {
        setError('Incorrect password. Access denied.');
        setPassword('');
      }
      setIsLoading(false);
    }, 500);
  };

  const sectionColors = {
    felix: {
      primary: 'text-vice-red',
      gradient: 'vice-gradient',
      border: 'border-vice-red/30'
    },
    reality: {
      primary: 'text-vice-purple', 
      gradient: 'vice-gradient',
      border: 'border-vice-purple/30'
    }
  };

  return (
    <div className="flex items-center justify-center p-4 min-h-[400px]" 
         style={{
           backgroundImage: "url('/favicon.png')",
           backgroundAttachment: 'fixed',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
           backgroundSize: 'cover',
           backgroundBlendMode: 'overlay'
         }}>
      <div className="absolute inset-0 bg-background/75 pointer-events-none"></div>
      <div className="w-full max-w-sm">
        <Card className={`p-6 bg-discord-dark/50 ${sectionColors[section].border} shadow-glow`}>
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <Lock className={`w-8 h-8 ${sectionColors[section].primary}`} />
            </div>
            <h3 className="text-lg font-bold mb-2">
              <span className={`${sectionColors[section].gradient} bg-clip-text text-transparent uppercase`}>
                {section} SECTION
              </span>
            </h3>
            <p className="text-muted-foreground terminal-text text-xs">
              Password required for access
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter section password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10 bg-background/50 border-primary/30 focus:border-primary text-sm"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                disabled={isLoading}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {error && (
              <div className="text-destructive text-xs text-center bg-destructive/10 p-2 rounded">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className={`w-full bg-primary hover:bg-primary/90 text-sm`}
              disabled={isLoading || !password.trim()}
            >
              {isLoading ? 'Verifying...' : 'Unlock Section'}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};