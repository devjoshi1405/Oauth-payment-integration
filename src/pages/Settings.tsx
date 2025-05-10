
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
    updates: true,
    marketing: false,
    security: true
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <Tabs defaultValue="notifications" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
        </TabsList>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Choose how and when you want to be notified
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Notification Channels</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications via email
                    </p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={notifications.email}
                    onCheckedChange={(checked) => 
                      setNotifications({ ...notifications, email: checked })
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-notifications">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications on your device
                    </p>
                  </div>
                  <Switch
                    id="push-notifications"
                    checked={notifications.push}
                    onCheckedChange={(checked) => 
                      setNotifications({ ...notifications, push: checked })
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="sms-notifications">SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications via text message
                    </p>
                  </div>
                  <Switch
                    id="sms-notifications"
                    checked={notifications.sms}
                    onCheckedChange={(checked) => 
                      setNotifications({ ...notifications, sms: checked })
                    }
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Notification Types</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="updates-notifications">Product Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive updates about product improvements and new features
                    </p>
                  </div>
                  <Switch
                    id="updates-notifications"
                    checked={notifications.updates}
                    onCheckedChange={(checked) => 
                      setNotifications({ ...notifications, updates: checked })
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="marketing-notifications">Marketing</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive marketing and promotional communications
                    </p>
                  </div>
                  <Switch
                    id="marketing-notifications"
                    checked={notifications.marketing}
                    onCheckedChange={(checked) => 
                      setNotifications({ ...notifications, marketing: checked })
                    }
                  />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="security-notifications">Security Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive alerts about security updates and unusual account activity
                    </p>
                  </div>
                  <Switch
                    id="security-notifications"
                    checked={notifications.security}
                    onCheckedChange={(checked) => 
                      setNotifications({ ...notifications, security: checked })
                    }
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Manage your account's security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication (2FA)</Label>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Button variant="outline">Setup 2FA</Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Session Management</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Current Session</p>
                      <p className="text-sm text-muted-foreground">
                        macOS • Chrome • New York, USA
                      </p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Previous Session</p>
                      <p className="text-sm text-muted-foreground">
                        iOS • Safari • San Francisco, USA
                      </p>
                    </div>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Expired</span>
                  </div>
                </div>
                <Button variant="outline">Logout All Devices</Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Recent Activity</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium">Login</p>
                    <p className="text-sm text-muted-foreground">May 10, 2023 • 12:42 PM • New York, USA</p>
                  </div>
                  <div>
                    <p className="font-medium">Password Changed</p>
                    <p className="text-sm text-muted-foreground">May 5, 2023 • 10:22 AM • New York, USA</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="payments">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>
                Manage your payment methods and billing information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Your Cards</h3>
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-12 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded mr-4"></div>
                    <div>
                      <p className="font-medium">•••• •••• •••• 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 12/25</p>
                    </div>
                  </div>
                  <div className="flex">
                    <Button variant="ghost" size="sm">Edit</Button>
                    <Button variant="ghost" size="sm" className="text-red-500">Remove</Button>
                  </div>
                </div>
                <Button variant="outline">Add Payment Method</Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Billing Address</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>John Doe</p>
                  <p>123 Main St</p>
                  <p>Apt 4B</p>
                  <p>New York, NY 10001</p>
                  <p>United States</p>
                </div>
                <Button variant="outline">Edit Address</Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Billing History</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="text-left bg-gray-50">
                      <tr>
                        <th className="p-2">Date</th>
                        <th className="p-2">Amount</th>
                        <th className="p-2">Status</th>
                        <th className="p-2">Invoice</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-t p-2">May 1, 2023</td>
                        <td className="border-t p-2">$29.99</td>
                        <td className="border-t p-2">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Paid</span>
                        </td>
                        <td className="border-t p-2">
                          <Button variant="link" size="sm" className="p-0 h-auto text-purple-600">Download</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-t p-2">Apr 1, 2023</td>
                        <td className="border-t p-2">$29.99</td>
                        <td className="border-t p-2">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Paid</span>
                        </td>
                        <td className="border-t p-2">
                          <Button variant="link" size="sm" className="p-0 h-auto text-purple-600">Download</Button>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-t p-2">Mar 1, 2023</td>
                        <td className="border-t p-2">$29.99</td>
                        <td className="border-t p-2">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Paid</span>
                        </td>
                        <td className="border-t p-2">
                          <Button variant="link" size="sm" className="p-0 h-auto text-purple-600">Download</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
