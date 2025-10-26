"use client";
import { useEffect, useState } from "react";
import StatCard from "@/components/dashboard/stat-card";
import { getTickets } from "@/lib/tickets";
import { getSession, isAuthenticated } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Ticket, CheckCircle, Clock, XCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Circle from "@/assets/circle.svg";

const Dashboard = () => {
  const router = useRouter();
  const session = getSession();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/auth/login");
    }
  }, [router]);

  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    inProgress: 0,
    closed: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const tickets = await getTickets();
      setStats({
        total: tickets.length,
        open: tickets.filter((t) => t.status === "open").length,
        inProgress: tickets.filter((t) => t.status === "in_progress").length,
        closed: tickets.filter((t) => t.status === "closed").length,
      });
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col max-w-[1440px] mx-auto px-4">
      <figure className="absolute inset-0 -z-10">
        <Image
          src={Circle}
          alt="Wavy background"
          className="h-full w-full object-cover max-md:object-right"
          aria-hidden="true"
        />
      </figure>
      <main className="flex-1 ">
        <div className="container-app py-12">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-roboto font-bold mb-2">
              Welcome back, {session?.user.name}!
            </h1>
            <p className="text-muted-foreground">
              Here&lsquo;s an overview of your ticket management system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard
              title="Total Tickets"
              value={stats.total}
              icon={Ticket}
              description="All tickets in the system"
            />
            <StatCard
              title="Open Tickets"
              value={stats.open}
              icon={Clock}
              description="Awaiting action"
            />
            <StatCard
              title="In Progress"
              value={stats.inProgress}
              icon={CheckCircle}
              description="Currently being worked on"
            />
            <StatCard
              title="Closed Tickets"
              value={stats.closed}
              icon={XCircle}
              description="Successfully resolved"
            />
          </div>

          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-roboto font-semibold mb-2">
                  Manage Your Tickets
                </h2>
                <p className="text-muted-foreground">
                  Create, view, edit, and delete tickets with ease.
                </p>
              </div>
              <Link href="/tickets">
                <Button size="lg" className="gap-2">
                  Go to Tickets
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Dashboard;
