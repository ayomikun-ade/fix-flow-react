"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/lib/schema";
import { login, isAuthenticated } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Wavy from "@/assets/wave.svg";
import Circle from "@/assets/circle.svg";
import Logo from "@/assets/workflow.png";

const Login = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/dashboard");
    }
  }, [pathname, router]);

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      await login({ email: data.email, password: data.password });
      toast.success("Welcome back!");
      router.push("/dashboard");
      router.refresh();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center p-4">
      <figure className="absolute bottom-0 left-0 right-0 z-0">
        <Image
          src={Wavy}
          alt="Wavy background"
          className="h-36 w-auto md:h-full md:w-full object-cover"
          aria-hidden="true"
        />
      </figure>
      <figure className="absolute inset-0 -z-10">
        <Image
          src={Circle}
          alt="Wavy background"
          className="h-full w-full object-cover max-md:object-right"
          aria-hidden="true"
        />
      </figure>
      <div className="w-full max-w-md z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <Card className="shadow-lg bg-white z-10">
          <div className="w-40 h-40 rounded-full bg-[#f2f2f2] absolute -z-10 right-0 top-1/7" />
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Image
                src={Logo}
                alt="FixFlow Logo"
                className="w-12 h-12"
                aria-hidden="true"
              />
            </div>
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription>
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </Form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">
                Don&lsquo;t have an account?{" "}
              </span>
              <Link
                href="/auth/signup"
                className="text-primary hover:underline font-medium"
              >
                Sign up
              </Link>
            </div>

            <div className="mt-4 p-3 bg-muted/50 rounded-lg text-xs text-muted-foreground">
              <p className="font-medium mb-1">Test credentials:</p>
              <p>Email: test@example.com</p>
              <p>Password: test123</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
