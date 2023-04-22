import Layout from "@component/components/layout/Layout";
import TitleHeader from "@component/components/title/TitleHeader";
import StockCard from "@component/components/card/StockCard";

export default function Home() {

  return (
    <Layout title="List Page">
      <TitleHeader title="List Page" />
      <StockCard />
    </Layout>
  );
}
