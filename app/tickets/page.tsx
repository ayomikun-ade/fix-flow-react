"use client";
import { useState, useEffect } from "react";
import TicketCard from "@/components/dashboard/ticket-card";
import TicketForm from "@/components/dashboard/ticket-form";
import {
  getTickets,
  createTicket,
  updateTicket,
  deleteTicket,
} from "@/lib/tickets";
import { Ticket } from "@/lib/types";
import { TicketFormData } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Plus, Search } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { isAuthenticated } from "@/lib/auth";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Circle from "@/assets/circle.svg";
import DashboardFooter from "@/components/dashboard/protected-footer";

const Tickets = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTicket, setEditingTicket] = useState<Ticket | undefined>();
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const loadTickets = () => {
    const loadedTickets = getTickets();
    setTickets(loadedTickets);
    setFilteredTickets(loadedTickets);
  };

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/auth/login");
    }
  }, [router]);

  useEffect(() => {
    loadTickets();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredTickets(tickets);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = tickets.filter(
        (ticket) =>
          ticket.title.toLowerCase().includes(query) ||
          ticket.description?.toLowerCase().includes(query) ||
          ticket.status.toLowerCase().includes(query)
      );
      setFilteredTickets(filtered);
    }
  }, [searchQuery, tickets]);

  const handleSubmit = async (data: TicketFormData) => {
    setIsLoading(true);
    try {
      if (editingTicket) {
        updateTicket({
          id: editingTicket.id,
          title: data.title,
          description: data.description,
          status: data.status,
          priority: data.priority,
        });
        toast.success("Ticket updated successfully");
      } else {
        createTicket({
          title: data.title,
          description: data.description,
          status: data.status,
          priority: data.priority,
        });
        toast.success("Ticket created successfully");
      }
      loadTickets();
      setIsFormOpen(false);
      setEditingTicket(undefined);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Operation failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (ticket: Ticket) => {
    setEditingTicket(ticket);
    setIsFormOpen(true);
  };

  const handleDelete = (id: string) => {
    setDeleteConfirm(id);
  };

  const confirmDelete = () => {
    if (deleteConfirm) {
      try {
        deleteTicket(deleteConfirm);
        loadTickets();
        toast.success("Ticket deleted successfully");
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Failed to delete ticket"
        );
      } finally {
        setDeleteConfirm(null);
      }
    }
  };

  const handleCreateNew = () => {
    setEditingTicket(undefined);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingTicket(undefined);
  };

  return (
    <>
      <div className="flex flex-col max-w-[1440px] mx-auto px-4">
        <figure className="absolute inset-0 -z-10">
          <Image
            src={Circle}
            alt="Wavy background"
            className="h-full w-full object-cover max-md:object-right"
            aria-hidden="true"
          />
        </figure>
        {/* <Navbar /> */}
        <main className="flex-1">
          <div className="container-app py-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-roboto font-bold mb-2">
                  Ticket Management
                </h1>
                <p className="text-muted-foreground">
                  Create, view, edit, and manage all your tickets in one place.
                </p>
              </div>
              <Button onClick={handleCreateNew} size="lg" className="gap-2">
                <Plus className="h-5 w-5" />
                Create Ticket
              </Button>
            </div>
            <div className="mb-6">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search tickets by title, description, or status..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            {filteredTickets.length === 0 ? (
              <div className="bg-card border border-border rounded-xl p-12 text-center shadow-sm">
                <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4">
                  <Plus className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {searchQuery ? "No tickets found" : "No tickets yet"}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {searchQuery
                    ? "Try adjusting your search query"
                    : "Get started by creating your first ticket"}
                </p>
                {!searchQuery && (
                  <Button onClick={handleCreateNew} className="gap-2">
                    <Plus className="h-5 w-5" />
                    Create Your First Ticket
                  </Button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTickets.map((ticket) => (
                  <TicketCard
                    key={ticket.id}
                    ticket={ticket}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            )}
          </div>
        </main>
        {/* <Footer /> */}
        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingTicket ? "Edit Ticket" : "Create New Ticket"}
              </DialogTitle>
            </DialogHeader>
            <TicketForm
              ticket={editingTicket}
              onSubmit={handleSubmit}
              onCancel={handleCloseForm}
              isLoading={isLoading}
            />
          </DialogContent>
        </Dialog>
        <AlertDialog
          open={deleteConfirm !== null}
          onOpenChange={() => setDeleteConfirm(null)}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                ticket.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={confirmDelete}
                className="bg-destructive text-destructive-foreground"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      <section className="absolute right-0 left-0 bottom-0">
        <DashboardFooter />
      </section>
    </>
  );
};

export default Tickets;
