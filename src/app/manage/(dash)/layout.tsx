import AdminHeader from "@/components/admin/AdminHeader";

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {children}
      </main>
    </>
  );
}
