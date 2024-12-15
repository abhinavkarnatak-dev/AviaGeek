import { Mail, Lock, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { theme } from '@/constants/styles';

const icons = {
  email: Mail,
  password: Lock,
  name: User,
} as const;

interface FormInputProps {
  id: string;
  label: string;
  type: 'email' | 'password' | 'text';
  placeholder: string;
  icon: keyof typeof icons;
  required?: boolean;
}

export function FormInput({
  id,
  label,
  type,
  placeholder,
  icon,
  required = true,
}: FormInputProps) {
  const Icon = icons[icon];

  return (
    <div className="space-y-2">
      <Label htmlFor={id} style={{ color: theme.colors.primary }}>
        {label}
      </Label>
      <div className="relative">
        <Icon className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className="pl-9 bg-zinc-800/50 border-zinc-700 text-[#DCBB87] placeholder:text-zinc-500"
          required={required}
        />
      </div>
    </div>
  );
}