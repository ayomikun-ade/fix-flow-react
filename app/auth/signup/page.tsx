"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupFormData } from "@/lib/schema";
import { signup, isAuthenticated } from "@/lib/auth";
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
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Wavy from "@/assets/wave.svg";
import Circle from "@/assets/circle.svg";
import Logo from "@/assets/workflow.png";

const Signup = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      router.push("/dashboard");
    }
  }, [router]);

  const form = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    try {
      await signup({
        name: data.name,
        email: data.email,
        password: data.password,
      });
      toast.success("Account created successfully!");
      router.push("/dashboard");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Signup failed");
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
            <CardTitle className="text-2xl">Create Your Account</CardTitle>
            <CardDescription>Get started with FixFlow today</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>
              </form>
            </Form>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">
                Already have an account?{" "}
              </span>
              <Link
                href="/auth/login"
                className="text-primary hover:underline font-medium"
              >
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
