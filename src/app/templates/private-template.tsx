import { Sidebar } from "@/components/sidebar/sidebar";

type PrivateTemplateProps = {
  children: React.ReactNode;
};

export function PrivateTemplate({ children }: PrivateTemplateProps) {
  return (
    <div className="h-full flex">
      <Sidebar />
        <div className="p-10 w-full flex flex-col gap-10 ">{children}</div>
    </div>
  );
}
