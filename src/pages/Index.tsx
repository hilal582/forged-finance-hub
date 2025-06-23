
import React, { useState } from 'react';
import { Hero } from '@/components/Hero';
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
      console.log('User is authenticated, redirect to dashboard');
    } else {
      setShowAuth(true);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0F1629] via-[#1A2847] to-[#2A3B5C] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#4F46E5]"></div>
      </div>
    );
  }

  if (showAuth) {
    return <AuthPage />;
  }

  return (
    <div className="min-h-screen">
      <Hero onSignInClick={handleSignInClick} onGetAccessClick={handleGetAccessClick} />
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
