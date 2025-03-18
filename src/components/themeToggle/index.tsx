// "use client";

// import { useEffect, useState } from "react";
// import { Moon, Sun } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function ThemeToggle() {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme");
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

//     if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
//       document.documentElement.classList.add("dark");
//       setIsDark(true);
//     } else {
//       document.documentElement.classList.remove("dark");
//       setIsDark(false);
//     }
//   }, []);

//    Toggle the dark class in <html> and update localStorage
//   const toggleTheme = () => {
//     document.documentElement.classList.toggle("dark");
//     const newTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
//     // localStorage.setItem("theme", newTheme);
//     setIsDark(newTheme === "dark");
//   };

//   return (
//     <Button onClick={toggleTheme} variant="ghost" size="icon">
//       {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//     </Button>
//   );
// }

"use client";

import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Monitor } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {theme === "dark" ? (
            <Moon className="w-5 h-5" />
          ) : theme === "light" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Monitor className="w-5 h-5" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 w-4 h-4" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 w-4 h-4" /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor className="mr-2 w-4 h-4" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
