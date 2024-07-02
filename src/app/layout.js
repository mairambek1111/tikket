import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Общество косметологов Кыргызстана",
  description:
    "Общество Косметологов КР, kosmetologi_kg, Врачи Косметологи, Мед.сестры Косметологи, Информационная страница, косметологии, конгресса, онлайн запись на конгресс",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}