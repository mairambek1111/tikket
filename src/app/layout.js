import { Roboto } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title:
    "Общество косметологов Кыргызстана, Конгресс косметологов Кыргызстана Бишкек, III международный конгресс косметологов",
  description:
    "Общество Косметологов КР, kosmetologi_kg, Врачи Косметологи, Мед.сестры Косметологи, Информационная страница, косметологии, конгресса, онлайн запись на конгресс, III международный конгресс косметологов",
  keywords:
    "косметология, косметологи Кыргызстана, конгресс косметологов, медицинские сестры косметологи, онлайн запись конгрессбкосметологический конгресс 2024, косметологические семинары, конгресс косметологов, конгресс бишкек косметология, III международный конгресс косметологов",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <Head>
        <meta name="keywords" content={metadata.keywords} />
      </Head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
