import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FormInput } from '@/components/ui/FormInput';
import { FormButton } from '@/components/ui/FormButton';

interface LoginFormProps {
  onForgotPassword: () => void;
}

export function LoginForm({ onForgotPassword }: LoginFormProps) {
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
      <FormInput
        id="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        icon="email"
      />
      
      <FormInput
        id="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        icon="password"
      />

      <FormButton isLoading={isLoading} loadingText="Logging in...">
        Log in
      </FormButton>

      <Button
        variant="link"
        className="w-full text-zinc-400 hover:text-[#DCBB87]"
        type="button"
        onClick={onForgotPassword}
      >
        Forgot password?
      </Button>
    </form>
  );
}