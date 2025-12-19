import { Banner, CategoriesSection, HomeCollectionSection, KeralaHeritageSection } from "../components";
import TrendingSection from "../components/TrendingSection";

const Landing = () => {
  return (
    <>
      <Banner />
      <TrendingSection />
      <KeralaHeritageSection />
      <CategoriesSection />
      <HomeCollectionSection />
    </>
  );
};
export default Landing;
