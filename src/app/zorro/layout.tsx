export default function ZorroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-buey-dark text-[#f9f9f9] selection:bg-buey-orange selection:text-buey-dark">
      {children}
    </div>
  );
}
