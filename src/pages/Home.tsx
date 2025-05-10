
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:pt-32 lg:pb-24 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block">Simplify your</span>
                <span className="block text-purple-600">authentication & payments</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Integrate seamless Google authentication and payment solutions into your applications with our developer-friendly platform.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                  <Link to="/signup">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6">
                      Log in
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <div className="w-full h-full bg-gradient-to-br from-purple-100 via-blue-100 to-purple-100 flex items-center justify-center p-8">
                      <div className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                        <div className="flex flex-col space-y-3 mb-6">
                          <div className="h-12 w-12 rounded-full bg-purple-100 mx-auto flex items-center justify-center">
                            <svg className="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-semibold text-center text-gray-800">Welcome Back</h3>
                          <p className="text-sm text-center text-gray-500">Sign in to your account</p>
                        </div>
                        <div className="space-y-4">
                          <div className="flex justify-center">
                            <div className="w-full h-10 rounded-md border border-gray-300 bg-gray-50 flex items-center justify-center text-gray-500">
                              Sign in with Google
                            </div>
                          </div>
                          <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                              <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                              <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                          </div>
                          <div className="h-10 rounded-md border border-gray-300 bg-gray-50"></div>
                          <div className="h-10 rounded-md border border-gray-300 bg-gray-50"></div>
                          <div className="h-10 rounded-md bg-purple-600"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide text-purple-600 uppercase">Features</h2>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight">
              Everything you need
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Our platform provides all the tools you need for authentication and payment processing.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="h-12 w-12 rounded-md bg-purple-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Simple Authentication</h3>
                <p className="mt-2 text-base text-gray-500">
                  Integrate Google OAuth with just a few lines of code. Secure and reliable user authentication.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">One-click login</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">User management tools</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">Custom branding options</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="h-12 w-12 rounded-md bg-purple-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Seamless Payments</h3>
                <p className="mt-2 text-base text-gray-500">
                  Accept payments easily with our integrated payment solution. Support for multiple payment methods.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">Credit/debit cards</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">Subscription management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">Detailed transaction history</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="h-12 w-12 rounded-md bg-purple-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Developer Friendly</h3>
                <p className="mt-2 text-base text-gray-500">
                  Built with developers in mind. Easy to integrate with your existing applications.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">Comprehensive documentation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">SDKs for major platforms</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">Webhook integrations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
