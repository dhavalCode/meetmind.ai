import { useTheme } from "next-themes";
import Image from "next/image";
import IconMoon from "@/assets/icon-moon.svg";
import IconSun from "@/assets/icon-sun.svg";

function ThemeToggler(): JSX.Element {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="theme toggler"
      className="bg-gray-2 dark:bg-dark-bg absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full text-black dark:text-white lg:static"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      type="button"
    >
      <Image
        alt="logo"
        className="dark:hidden"
        height={21}
        src={IconMoon}
        width={21}
      />

      <Image
        alt="logo"
        className="hidden dark:block"
        height={22}
        src={IconSun}
        width={22}
      />
    </button>
  );
}

export default ThemeToggler;
