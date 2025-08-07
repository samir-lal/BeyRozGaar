import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Lock, Users, MessageSquare, Calendar } from "lucide-react";

interface LoginData {
  username: string;
  password: string;
}

interface MeetupSignup {
  id: string;
  name: string;
  email: string;
  phone?: string;
  experience?: string;
  createdAt: string;
}

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function AdminPage() {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState<LoginData>({ username: "", password: "" });

  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginData) => {
      const response = await apiRequest("POST", "/api/admin/login", credentials);
      return response.json();
    },
    onSuccess: () => {
      setIsAuthenticated(true);
      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Login failed",
        description: error.message || "Invalid credentials",
        variant: "destructive",
      });
    },
  });

  const { data: meetupSignups, isLoading: loadingMeetups } = useQuery<MeetupSignup[]>({
    queryKey: ["/api/admin/meetup-signups"],
    enabled: isAuthenticated,
  });

  const { data: contactMessages, isLoading: loadingMessages } = useQuery<ContactMessage[]>({
    queryKey: ["/api/admin/contact-messages"],
    enabled: isAuthenticated,
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate(loginData);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-warm-gray to-white flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <div className="w-12 h-12 bg-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="text-white" size={24} />
            </div>
            <CardTitle className="text-2xl font-bold text-soft-charcoal">Admin Access</CardTitle>
            <p className="text-gray-600">Enter your credentials to view dashboard</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={loginData.username}
                  onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                  placeholder="Enter username"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  placeholder="Enter password"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={loginMutation.isPending}
                className="w-full gradient-warm text-white"
              >
                {loginMutation.isPending ? "Logging in..." : "Login"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-gray to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-soft-charcoal mb-2">BeyRozGaar Admin Dashboard</h1>
            <p className="text-gray-600">Manage community signups and messages</p>
          </div>
          <Button
            onClick={() => setIsAuthenticated(false)}
            variant="outline"
            className="border-warm-orange text-warm-orange hover:bg-warm-orange hover:text-white"
          >
            Logout
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-warm-orange rounded-full flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-soft-charcoal">{meetupSignups?.length || 0}</p>
                  <p className="text-sm text-gray-600">Meetup Signups</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-warm-teal rounded-full flex items-center justify-center">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-soft-charcoal">{contactMessages?.length || 0}</p>
                  <p className="text-sm text-gray-600">Contact Messages</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-golden-yellow rounded-full flex items-center justify-center">
                  <Calendar className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-soft-charcoal">
                    {((meetupSignups?.length || 0) + (contactMessages?.length || 0))}
                  </p>
                  <p className="text-sm text-gray-600">Total Entries</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="meetups" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="meetups">Meetup Signups</TabsTrigger>
            <TabsTrigger value="messages">Contact Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="meetups">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users size={20} />
                  <span>Meetup Signups</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {loadingMeetups ? (
                  <p className="text-center py-8 text-gray-600">Loading meetup signups...</p>
                ) : meetupSignups && meetupSignups.length > 0 ? (
                  <div className="space-y-4">
                    {meetupSignups.map((signup) => (
                      <div key={signup.id} className="border rounded-lg p-4 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-soft-charcoal">{signup.name}</h3>
                            <p className="text-sm text-gray-600">{signup.email}</p>
                            {signup.phone && (
                              <p className="text-sm text-gray-600">Phone: {signup.phone}</p>
                            )}
                          </div>
                          <Badge variant="secondary">
                            {formatDate(signup.createdAt)}
                          </Badge>
                        </div>
                        {signup.experience && (
                          <div className="mt-2">
                            <p className="text-sm text-gray-700">
                              <strong>Experience:</strong> {signup.experience}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center py-8 text-gray-600">No meetup signups yet</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare size={20} />
                  <span>Contact Messages</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {loadingMessages ? (
                  <p className="text-center py-8 text-gray-600">Loading contact messages...</p>
                ) : contactMessages && contactMessages.length > 0 ? (
                  <div className="space-y-4">
                    {contactMessages.map((message) => (
                      <div key={message.id} className="border rounded-lg p-4 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-soft-charcoal">{message.name}</h3>
                            <p className="text-sm text-gray-600">{message.email}</p>
                          </div>
                          <Badge variant="secondary">
                            {formatDate(message.createdAt)}
                          </Badge>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-gray-700">
                            <strong>Message:</strong> {message.message}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center py-8 text-gray-600">No contact messages yet</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}