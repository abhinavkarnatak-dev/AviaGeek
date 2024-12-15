import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, User, Loader2 } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';

export function SignupForm() {
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
        <Label htmlFor="name" style={{ color: '#DCBB87' }}>Full Name</Label>
        <div className="relative">
          <User className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            className="pl-9 bg-zinc-800/50 border-zinc-700 text-[#DCBB87] placeholder:text-zinc-500"
            required
          />
        </div>
      </div>

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
            placeholder="Create a password"
            className="pl-9 bg-zinc-800/50 border-zinc-700 text-[#DCBB87] placeholder:text-zinc-500"
            required
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" className="border-zinc-700 data-[state=checked]:bg-[#DCBB87] data-[state=checked]:border-[#DCBB87]" />
        <label
          htmlFor="terms"
          className="text-sm text-zinc-400 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I agree to the Terms of Service and Privacy Policy
        </label>
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
            Creating account...
          </>
        ) : (
          'Create account'
        )}
      </Button>
    </form>
  );
}