import Navbar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="w-full">
      <Navbar />
      <div className="mt-6">{children}</div>
    </main>
  );
}
