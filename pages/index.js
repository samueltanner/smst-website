import { Header } from "../components/Header";
import { InteractiveSubHeader } from "../components/InteractiveSubHeader";
import { ThemeProvider } from "../components/theme/themeContext";
import { useState } from "react";
import { Icon } from "../components/Icon";
export default function Home() {
  const [theme, setTheme] = useState("default");

  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <div className={theme}>
        <Header>
          <span className="flex items-center justify-center pl-8">
            <Icon
              className={"w-8 h-8 fill-current text-white antialiased"}
            />
          </span>
        </Header>
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
