type PublicTemplateSectionProps = {
  children: React.ReactNode;
};
export function PublicTemplateSection({
  children,
}: PublicTemplateSectionProps) {
  return (
    <div className="flex flex-col items-center py-20 gap-10">
      <div className="w-4xl flex flex-col gap-3">{children}</div>
    </div>
  );
}
