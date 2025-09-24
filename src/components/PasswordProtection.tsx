import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Lock, Eye, EyeOff } from 'lucide-react';

interface PasswordProtectionProps {
  onAuthenticated: () => void;
}

export const PasswordProtection = ({ onAuthenticated }: PasswordProtectionProps) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // You can change this password to whatever you want
  const SITE_PASSWORD = 'asswipeadmins25';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate a brief loading delay for better UX
    setTimeout(() => {
      if (password === SITE_PASSWORD) {
        // No localStorage - authentication only for current session
        onAuthenticated();
      } else {
        setError('Incorrect password. Access denied.');
        setPassword('');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="p-8 bg-discord-dark/50 border-primary/20 shadow-glow">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Lock className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-2">
              <span className="vice-gradient bg-clip-text text-transparent">
                RESTRICTED ACCESS
              </span>
            </h1>
            <p className="text-muted-foreground terminal-text text-sm">
              Site under construction - Password required
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10 bg-background/50 border-primary/30 focus:border-primary"
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
              <div className="text-destructive text-sm text-center bg-destructive/10 p-2 rounded">
                {error}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={isLoading || !password.trim()}
            >
              {isLoading ? 'Authenticating...' : 'Access Site'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Unauthorized access is prohibited
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
