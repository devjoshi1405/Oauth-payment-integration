
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import GoogleLoginButton from '../components/GoogleLoginButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    // This is just for UI demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // This is just for UI demonstration purposes
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex min-h-screen pt-16">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
              <p className="mt-2 text-sm text-gray-600">
                Or{' '}
                <Link to="/signup" className="font-medium text-purple-600 hover:text-purple-500">
                  create a new account
                </Link>
              </p>
            </div>

            <div className="mt-8">
              <div>
                <div>
                  <div className="mt-1 grid grid-cols-1 gap-3">
                    <GoogleLoginButton 
                      onLogin={handleGoogleLogin} 
                    />
                  </div>
                </div>

                <div className="relative mt-6">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-50 text-gray-500">Or continue with</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <form onSubmit={handleEmailLogin} className="space-y-6">
                  <div>
                    <Label htmlFor="email">Email address</Label>
                    <div className="mt-1">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <div className="text-sm">
                        <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                          Forgot your password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-1">
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Signing in...
                        </div>
                      ) : (
                        <span className="flex items-center">
                          Sign in
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-purple-500 to-blue-600">
            <div className="absolute inset-0 bg-white opacity-10 backdrop-filter backdrop-blur-lg"></div>
            <div className="flex h-full items-center justify-center p-12">
              <div className="max-w-xl">
                <h2 className="text-4xl font-bold text-white">Secure authentication for your applications</h2>
                <p className="mt-4 text-lg text-white text-opacity-90">
                  Our platform provides seamless integration with Google OAuth and payment processing solutions.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                    <div className="text-white font-semibold mb-2">Fast Integration</div>
                    <div className="text-white text-opacity-80 text-sm">
                      Get up and running in minutes with our simple integration process.
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                    <div className="text-white font-semibold mb-2">Secure Access</div>
                    <div className="text-white text-opacity-80 text-sm">
                      Industry-leading security protocols to keep your users' data safe.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
