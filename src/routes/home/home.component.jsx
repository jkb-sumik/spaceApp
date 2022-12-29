import CategoryCard from "../../components/category-card/category-card.component";
import "./home.styles.scss";

const categories = [
  {
    title: "NEWS",
    imageUrl:
      "https://pixabay.com/get/gfcc17cd4c35a634651b8f01b87e6ac5f72cd2d5dc6c20626266035c97bffa3010c6b41ca9bc6ab65dde7ea90a5c351ee094d443b27231dedb22503648675cd4c4e373e9a18613a2c3f650902a09aaeb7_640.jpg",
    route: "/news",
  },
  {
    title: "PHOTOS",
    imageUrl:
      "https://pixabay.com/get/gf3046ef1dd3e3cba5a13594331d67fe062a3ef36d2a936d3aeaca1f057f7fd2cd22fc03708963e6e0e93696f6fa98c9f8258e3433f5888d072ce7bd09eb99ac553b4703811657424166b085bbdabdce0_640.jpg",
    route: "/pictures",
  },
];

const Home = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryCard key={category.title} category={category} />
      ))}
    </div>
  );
};

export default Home;
