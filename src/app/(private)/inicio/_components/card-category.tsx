import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Icon, LucideIcon } from "lucide-react";

type CardCategoryProps = {
  title: string;
  icon: LucideIcon;
  total: number;
  period: string;
};

export function CardCategory({
  title,
  icon,
  total,
  period,
}: CardCategoryProps) {
  const Icon = icon;
  return (
    <Card className="w-3xs">
      <CardHeader className="flex justify-between">
        <p className="text-secondary-foreground text-lg">{title}</p>
        <div className="bg-white rounded-sm text-card p-1">
          <Icon />
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-bold text-2xl">{total}</p>
        <p className="text-secondary-foreground">{period}</p>
      </CardContent>
    </Card>
  );
}
