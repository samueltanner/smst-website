import { motion, AnimatePresence } from "framer-motion";
import { useState, useContext } from "react";
import ThemeContext from "./themeContext";

export const ThemeSelector = ({}) => {
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const { theme: globalTheme, setTheme } = useContext(ThemeContext);

  const themeList = [
    {
      name: "default",
      colors: {
        primary: "from-[#18181b]",
        accent: "to-white",
      },
    },
    {
      name: "woodsy",
      colors: {
        primary: "from-[#414833]",
        accent: "to-[#C2CDAA]",
      },
    },
    {
      name: "desert",
      colors: {
        primary: "from-[#778C8E]",
        accent: "to-[#C2CDAA]",
      },
    },
  ];
  return (
    <div className="relative z-30">
      <div className="absolute -top-4 right-4 flex flex-col self-center justify-self-center">
        <div
          className="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-white ring-offset-primary hover:bg-zinc-200"
          onClick={() => {
            setThemeDropdownOpen(!themeDropdownOpen);
          }}
        >
          <span className="h-5 w-5 rotate-45 rounded-full bg-gradient-to-b from-primary to-accent" />
        </div>
        {themeDropdownOpen && (
          <div className="flex flex-col items-center gap-3 pt-3">
            {themeList.map(
              (theme, index) =>
                theme.name !== globalTheme && (
                  <div
                    key={index}
                    className={`h-5 w-5 rotate-45 rounded-full bg-gradient-to-b ring-2 ring-white ${theme.colors.primary} ${theme.colors.accent}`}
                    onClick={() => {
                      setTheme(theme.name);
                      setThemeDropdownOpen(false);
                    }}
                  />
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};
