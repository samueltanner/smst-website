import { Header } from "../components/Header";
import { InteractiveSubHeader } from "../components/InteractiveSubHeader";
import { ThemeProvider } from "../components/theme/themeContext";
import { useState } from "react";
export default function Home() {
  const [theme, setTheme] = useState("mark");

  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <div className={theme}>
        <Header />
        <div className="h-[400px]">
          {/* <CutoutShape /> */}
          <InteractiveSubHeader />
        </div>

        <div className="flex flex-col text-black "></div>
        <div className="h-screen w-full bg-primary" />
      </div>
    </ThemeProvider>
  );
}
