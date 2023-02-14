import { Header } from "../components/Header";
import { InteractiveSubHeader } from "../components/InteractiveSubHeader";
import { ThemeProvider } from "../components/theme/themeContext";
import { useState, useEffect } from "react";
import { Icon } from "../components/Icon";
import { ThemeSelector } from "../components/theme/ThemeSelector";
import { getThemeFromLS, setThemeToLS } from "../lib/storage";
export default function Home() {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    if (!theme) {
      setTheme("default");
    }
    setThemeToLS(theme);
  }, [theme]);

  console.log(theme, "theme");

  if (!theme) return <></>;
  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <div className={theme}>
        <Header>
          <Icon
            className={"h-8 w-8 fill-current text-white antialiased"}
            icon={theme}
          />

          <ThemeSelector />
        </Header>
        <div className="pointer-events-auto h-[400px] ">
          <InteractiveSubHeader />
        </div>

        <div className="flex flex-col text-black "></div>
        <div className="h-screen w-full bg-primary" />
      </div>
    </ThemeProvider>
  );
}
