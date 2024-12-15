import { useState } from 'react';
import { FormInput } from '@/components/ui/FormInput';
import { FormButton } from '@/components/ui/FormButton';
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
      <FormInput
        id="name"
        label="Full Name"
        type="text"
        placeholder="Enter your full name"
        icon="name"
      />

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
        placeholder="Create a password"
        icon="password"
      />

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" className="border-zinc-700 data-[state=checked]:bg-[#DCBB87] data-[state=checked]:border-[#DCBB87]" />
        <label
          htmlFor="terms"
          className="text-sm text-zinc-400 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I agree to the Terms of Service and Privacy Policy
        </label>
      </div>

      <FormButton isLoading={isLoading} loadingText="Creating account...">
        Create account
      </FormButton>
    </form>
  );
}