import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { theme } from '@/constants/styles';

interface FormButtonProps {
  isLoading: boolean;
  loadingText: string;
  children: React.ReactNode;
}

export function FormButton({ isLoading, loadingText, children }: FormButtonProps) {
  return (
    <Button
      type="submit"
      className="w-full"
      style={{
        backgroundColor: theme.colors.primary,
        color: theme.colors.background,
      }}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </Button>
  );
}