import { useNavigate } from "react-router-dom";
import {
  CardContainer,
  BackgroundImage,
  Body,
} from "./category-card.styles.jsx";

const CategoryCard = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <CardContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Explore Now</p>
      </Body>
    </CardContainer>
  );
};

export default CategoryCard;
