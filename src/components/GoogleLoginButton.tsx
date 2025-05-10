import React from 'react';
import { Button } from '@/components/ui/button';
import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin from @react-oauth/google

interface GoogleLoginButtonProps {
  onLogin: (cred: any) => void; // Pass the credential data to the parent component
  className?: string;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onLogin, className = '' }) => {
  // Handle the Google login success
  const handleLoginSuccess = (credentialResponse: any) => {
    // You can decode the Google credential response and pass the data to onLogin
    onLogin(credentialResponse);
  };

  // Handle login failure
  const handleLoginError = () => {
    console.log('Login Failed');
  };

  return (
    <GoogleLogin
      onSuccess={handleLoginSuccess}
      onError={handleLoginError}
      useOneTap
      text="signin_with" 
      shape="rectangular"
      theme="outline"
      size="large" 
    />
  );
};

export default GoogleLoginButton;
