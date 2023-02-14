export const setThemeToLS = (theme) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("theme", theme);
  }
};

export const getThemeFromLS = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("theme");
  }
};
