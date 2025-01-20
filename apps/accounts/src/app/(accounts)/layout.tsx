import { MainLayout } from "@repo/ui/main-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  );
}
