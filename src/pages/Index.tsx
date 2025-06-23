
import React, { useState } from 'react';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { AuthPage } from '@/components/AuthPage';
import { AuthProvider, useAuth } from '@/hooks/useAuth';

const IndexContent = () => {
  const [showAuth, setShowAuth] = useState(false);
  const { user, loading } = useAuth();

  const handleSignInClick = () => {
    setShowAuth(true);
  };

  const handleGetAccessClick = () => {
    if (user) {
      // User is already authenticated, could redirect to dashboard
      console.log('User is authenticated, redirect to dashboard');
    } else {
      setShowAuth(true);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (showAuth) {
    return <AuthPage />;
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="flex flex-col">
        <Hero onSignInClick={handleSignInClick} onGetAccessClick={handleGetAccessClick} />
        <Footer />
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <AuthProvider>
      <IndexContent />
    </AuthProvider>
  );
};

export default Index;
