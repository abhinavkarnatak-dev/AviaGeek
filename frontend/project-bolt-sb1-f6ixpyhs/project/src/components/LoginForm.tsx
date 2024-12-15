import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, Loader2 } from 'lucide-react';

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email" style={{ color: '#DCBB87' }}>Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="pl-9 bg-zinc-800/50 border-zinc-700 text-[#DCBB87] placeholder:text-zinc-500"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="password" style={{ color: '#DCBB87' }}>Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="pl-9 bg-zinc-800/50 border-zinc-700 text-[#DCBB87] placeholder:text-zinc-500"
            required
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full"
        style={{ 
          backgroundColor: '#DCBB87',
          color: '#19232D'
        }}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Logging in...
          </>
        ) : (
          'Log in'
        )}
      </Button>

      <Button
        variant="link"
        className="w-full text-zinc-400 hover:text-[#DCBB87]"
        type="button"
      >
        Forgot password?
      </Button>
    </form>
  );
}