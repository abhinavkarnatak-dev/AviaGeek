import { useState } from 'react';
import { LoginForm } from './components/auth/LoginForm';
import { SignupForm } from './components/auth/SignupForm';
import { ForgotPasswordForm } from './components/auth/ForgotPasswordForm';
import { Button } from '@/components/ui/button';
import { theme } from '@/constants/styles';

type AuthView = 'login' | 'signup' | 'forgot-password';

export default function App() {
  const [view, setView] = useState<AuthView>('login');

  const titles = {
    login: 'Welcome Back',
    signup: 'Create Account',
    'forgot-password': 'Reset Password',
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center" 
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="w-full max-w-md p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold" style={{ color: theme.colors.primary }}>
            {titles[view]}
          </h1>
          
          {view !== 'forgot-password' && (
            <>
              <p className="text-zinc-400">
                {view === 'login' ? "Don't have an account?" : "Already have an account?"}
              </p>
              <Button
                variant="link"
                onClick={() => setView(view === 'login' ? 'signup' : 'login')}
                className="text-[#DCBB87] hover:text-[#DCBB87]/80"
              >
                {view === 'login' ? "Sign up" : "Log in"}
              </Button>
            </>
          )}

          {view === 'forgot-password' && (
            <Button
              variant="link"
              onClick={() => setView('login')}
              className="text-[#DCBB87] hover:text-[#DCBB87]/80"
            >
              Back to login
            </Button>
          )}
        </div>

        {view === 'login' && <LoginForm onForgotPassword={() => setView('forgot-password')} />}
        {view === 'signup' && <SignupForm />}
        {view === 'forgot-password' && <ForgotPasswordForm />}
      </div>
    </div>
  );
}