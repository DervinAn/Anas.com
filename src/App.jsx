import { AnimatedBackground } from "@/components/layout/AnimatedBackground";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/hooks/use-theme";
import HomePage from "@/pages/home";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AnimatedBackground />
        <HomePage />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
