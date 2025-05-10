
import React, { useState } from 'react';
import PaymentCard from '../components/PaymentCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const Payment = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [processingPayment, setProcessingPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const plans = [
    {
      title: 'Basic',
      price: '$9.99',
      description: 'For individuals and small projects',
      features: [
        'Up to 5 users',
        '10GB storage',
        'Basic support',
        'Standard authentication features'
      ],
      buttonText: 'Choose Basic',
      isPopular: false,
    },
    {
      title: 'Pro',
      price: '$29.99',
      description: 'For growing teams and businesses',
      features: [
        'Up to 25 users',
        '50GB storage',
        'Priority support',
        'Advanced authentication features',
        'Custom branding'
      ],
      buttonText: 'Choose Pro',
      isPopular: true,
    },
    {
      title: 'Enterprise',
      price: '$99.99',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        '500GB storage',
        '24/7 support',
        'Advanced security features',
        'Custom integrations',
        'Dedicated account manager'
      ],
      buttonText: 'Choose Enterprise',
      isPopular: false,
    }
  ];

  const handleSelectPlan = (planTitle: string) => {
    setSelectedPlan(planTitle);
    setShowPaymentForm(true);
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessingPayment(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessingPayment(false);
      setPaymentSuccess(true);
    }, 2000);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Subscription Plans</h1>
        <p className="text-muted-foreground">
          Choose a plan that works for you and your team
        </p>
      </div>

      {!showPaymentForm && !paymentSuccess ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <PaymentCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              buttonText={plan.buttonText}
              onSelectPlan={() => handleSelectPlan(plan.title)}
            />
          ))}
        </div>
      ) : paymentSuccess ? (
        <div className="flex flex-col items-center justify-center p-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">Payment Successful!</h2>
          <p className="text-center text-gray-600 mb-6">
            Thank you for subscribing to our {selectedPlan} plan. Your subscription is now active.
          </p>
          <Button
            onClick={() => {
              setShowPaymentForm(false);
              setPaymentSuccess(false);
            }}
          >
            Return to Plans
          </Button>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 flex items-center">
            <Button
              variant="outline"
              onClick={() => setShowPaymentForm(false)}
              className="mr-4"
            >
              ← Back to Plans
            </Button>
            <h2 className="text-xl font-semibold">
              Checkout: {selectedPlan} Plan
            </h2>
          </div>
          
          <Card>
            <CardHeader className="border-b">
              <h3 className="text-lg font-medium">Payment Information</h3>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmitPayment}>
                <div className="mb-6">
                  <Label className="text-base">Payment Method</Label>
                  <RadioGroup defaultValue="card" className="mt-2">
                    <div className="flex items-center space-x-2 border rounded-md p-3">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-2">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                          <path d="M2 10H22" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        Credit / Debit Card
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardName">Cardholder Name</Label>
                    <Input id="cardName" placeholder="Name as it appears on your card" />
                  </div>
                  
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input id="expiryDate" placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Subtotal</span>
                      <span>$29.99</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Tax</span>
                      <span>$2.50</span>
                    </div>
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>$32.49</span>
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full mt-6"
                    disabled={processingPayment}
                  >
                    {processingPayment ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </div>
                    ) : (
                      `Pay $32.49`
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Payment;
