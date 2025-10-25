import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  description?: string;
}

const StatCard = ({ title, value, icon: Icon, description }: StatCardProps) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-medium transition-all">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground mb-1">
            {title}
          </p>
          <h3 className="text-3xl font-bold">{value}</h3>
          {description && (
            <p className="text-xs text-muted-foreground mt-2">{description}</p>
          )}
        </div>
        <div className="w-8 h-8 rounded-lg bg-[#1d1d1d] flex items-center justify-center">
          <Icon className="h-4 w-4 text-primary-foreground" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
