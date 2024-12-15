import { useState } from 'react';
import { FormInput } from '@/components/ui/FormInput';
import { FormButton } from '@/components/ui/FormButton';
import { theme } from '@/constants/styles';

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsEmailSent(true);
    setIsLoading(false);
  };

  if (isEmailSent) {
    return (
      <div className="text-center space-y-4">
        <h2 className="text-xl font-semibold" style={{ color: theme.colors.primary }}>
          Check Your Email
        </h2>
        <p className="text-zinc-400">
          We've sent you instructions on how to reset your password. Please check your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-6">
        <p className="text-zinc-400">
          Enter your email address and we'll send you instructions to reset your password.
        </p>
      </div>

      <FormInput
        id="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        icon="email"
      />

      <FormButton isLoading={isLoading} loadingText="Sending instructions...">
        Send Reset Instructions
      </FormButton>
    </form>
  );
}