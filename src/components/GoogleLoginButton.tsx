import React from 'react';
import { Button } from '@/components/ui/button';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { GoogleClientID } from '@/lib/constant';

interface GoogleLoginButtonProps {
  onLogin: (response: CredentialResponse) => void;
  className?: string;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onLogin, className = '' }) => {
  const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
    onLogin(credentialResponse);
  };

  const handleLoginError = () => {
    alert('Google login failed. Please check your internet connection and try again.');
  };

  console.log('Google Client ID:', GoogleClientID);

  return (
    <div className={className}>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
        useOneTap={true}
        text="signin_with"
        shape="rectangular"
        theme="outline"
        size="large"
      />
    </div>
  );
};

export default GoogleLoginButton;
