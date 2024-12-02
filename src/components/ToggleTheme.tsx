"use client"
import { useState } from "react";
import Image from 'next/image'
import SunLight from "../../public/icon-sun-dark.svg";
import SunDark from "../../public/icon-sun-light.svg";
import MoonLight from "../../public/icon-moon-dark.svg";
import MoonDark from "../../public/icon-moon-light.svg";

import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/hooks/useTheme";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();
  const [checked, setChecked] = useState(theme === "dark");

  const handleChange = () => {
    toggleTheme();
    setChecked(prev => !prev);
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <Image
        src={theme === "dark" ? SunDark : SunLight}
        alt="Sun Icon"
        onClick={handleChange}
      />
      <Switch checked={checked} onCheckedChange={handleChange} />
      <Image
        src={theme === "dark" ? MoonDark : MoonLight}
        alt="Moon Icon"
        onClick={handleChange}
      />
    </div>
  );
}
