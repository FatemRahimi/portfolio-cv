import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      const usePref = window.localStorage.getItem("theme");

      let check;
      if (usePref === "dark" || usePref === "light") {
        check = usePref;
      } else {
        check = mediaQuery.matches ? "dark" : "light";
      }

      setMode(check);

      if (check === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode === "dark" || mode === "light") {
      window.localStorage.setItem("theme", mode);
    }
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
