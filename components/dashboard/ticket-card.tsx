import { Ticket } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2, Calendar } from "lucide-react";
import { format } from "date-fns";

interface TicketCardProps {
  ticket: Ticket;
  onEdit: (ticket: Ticket) => void;
  onDelete: (id: string) => void;
}

const statusConfig = {
  open: {
    label: "Open",
    className: "bg-[#15803D] text-white",
  },
  in_progress: {
    label: "In Progress",
    className: "bg-[#FACC15] text-white",
  },
  closed: {
    label: "Closed",
    className: "bg-[#A1A1AA] text-white",
  },
};

const priorityConfig = {
  low: { label: "Low", className: "bg-muted text-muted-foreground" },
  medium: {
    label: "Medium",
    className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  },
  high: {
    label: "High",
    className:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  },
  urgent: {
    label: "Urgent",
    className: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  },
};

const TicketCard = ({ ticket, onEdit, onDelete }: TicketCardProps) => {
  const status = statusConfig[ticket.status];
  const priority = ticket.priority ? priorityConfig[ticket.priority] : null;

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">{ticket.title}</h3>
          {ticket.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {ticket.description}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <Badge className={status.className}>{status.label}</Badge>
        {priority && (
          <Badge variant="outline" className={priority.className}>
            {priority.label}
          </Badge>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          <span>{format(new Date(ticket.updatedAt), "MMM d, yyyy")}</span>
        </div>

        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => onEdit(ticket)}
            className="gap-2"
          >
            <Pencil className="h-4 w-4" />
            Edit
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => onDelete(ticket.id)}
            className="gap-2"
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
