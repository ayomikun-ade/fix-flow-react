import { Ticket, CreateTicketInput, UpdateTicketInput } from "@/lib/types";

const TICKETS_KEY = "ticketapp_tickets";

// Initialize with demo tickets
const initializeDemoTickets = () => {
  const tickets = localStorage.getItem(TICKETS_KEY);
  if (!tickets) {
    const demoTickets: Ticket[] = [
      {
        id: "1",
        title: "Fix login page styling",
        description:
          "The login button is not aligned properly on mobile devices",
        status: "open",
        priority: "high",
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: "2",
        title: "Implement dark mode",
        description: "Add dark mode support across all pages",
        status: "in_progress",
        priority: "medium",
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: "3",
        title: "Update documentation",
        description: "API documentation needs to be updated with new endpoints",
        status: "closed",
        priority: "low",
        createdAt: new Date(
          Date.now() - 10 * 24 * 60 * 60 * 1000
        ).toISOString(),
        updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ];
    localStorage.setItem(TICKETS_KEY, JSON.stringify(demoTickets));
  }
};

initializeDemoTickets();

export const getTickets = (): Ticket[] => {
  const tickets = localStorage.getItem(TICKETS_KEY);
  return tickets ? JSON.parse(tickets) : [];
};

const saveTickets = (tickets: Ticket[]) => {
  localStorage.setItem(TICKETS_KEY, JSON.stringify(tickets));
};

export const createTicket = (input: CreateTicketInput): Ticket => {
  const tickets = getTickets();
  const newTicket: Ticket = {
    id: Date.now().toString(),
    ...input,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tickets.push(newTicket);
  saveTickets(tickets);

  return newTicket;
};

export const updateTicket = (input: UpdateTicketInput): Ticket => {
  const tickets = getTickets();
  const index = tickets.findIndex((t) => t.id === input.id);

  if (index === -1) {
    throw new Error("Ticket not found");
  }

  const updatedTicket: Ticket = {
    ...tickets[index],
    ...input,
    updatedAt: new Date().toISOString(),
  };

  tickets[index] = updatedTicket;
  saveTickets(tickets);

  return updatedTicket;
};

export const deleteTicket = (id: string): void => {
  const tickets = getTickets();
  const filteredTickets = tickets.filter((t) => t.id !== id);

  if (filteredTickets.length === tickets.length) {
    throw new Error("Ticket not found");
  }

  saveTickets(filteredTickets);
};

export const getTicketById = (id: string): Ticket | undefined => {
  const tickets = getTickets();
  return tickets.find((t) => t.id === id);
};
