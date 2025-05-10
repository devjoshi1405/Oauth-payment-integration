
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface PaymentCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  onSelectPlan: () => void;
}

const PaymentCard: React.FC<PaymentCardProps> = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  buttonText,
  onSelectPlan,
}) => {
  return (
    <Card className={`w-full max-w-sm ${
      isPopular ? 'border-purple-500 shadow-lg' : 'border-gray-200'
    }`}>
      {isPopular && (
        <div className="absolute top-0 right-0 -mt-2 -mr-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
            Popular
          </span>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-gray-500 ml-1">/month</span>}
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex">
              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onSelectPlan} 
          className={`w-full ${
            isPopular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-800 hover:bg-gray-900'
          }`}
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentCard;
