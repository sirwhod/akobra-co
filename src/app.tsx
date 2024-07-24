import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/ui/theme-provider";
import { router } from "./Router";
import { Toaster } from "./components/ui/sonner";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Helmet titleTemplate="%s | AKABRA CO" />
        <RouterProvider router={router} />
        <Toaster closeButton richColors />
      </ThemeProvider>
    </HelmetProvider>
  )
}

