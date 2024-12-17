import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
} from '@clerk/nextjs';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* Only show the sign-in page for signed-out users */}
          <SignedOut>
            <SignIn />
          </SignedOut>
          
          {/* Show content for signed-in users */}
          <SignedIn>
            {children}
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}