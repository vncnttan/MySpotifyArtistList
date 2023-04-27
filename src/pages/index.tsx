import Layout from "@component/components/layout/Layout";
import TitleHeader from "@component/components/title/TitleHeader";
import StockCard from "@component/components/card/StockCard";
import { LanguageContext } from "@component/lib/context/LanguageContext";
import { useContext } from "react"

export default function Home() {
  let lang = useContext(LanguageContext);

  return (
    <Layout title="List Page">
      <TitleHeader title={lang.dict.HomeHeader} />
      <StockCard />
    </Layout>
  );
}
