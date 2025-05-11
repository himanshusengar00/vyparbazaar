import { CarouselContainer } from "./carousel.styles";
// import { ReactComponent as Carousel } from "../../../assets/carousel.svg";
import Carousal2 from '../carousel/carousal2'
import { useNavigate } from "react-router-dom";
const CarouselBanner = () => {
  const navigate = useNavigate();
  const onClickhandler = () => {
    navigate(`/shop`);
  };
  return (
    <CarouselContainer>
      {<Carousal2/>}
    </CarouselContainer>
  );
};

export default CarouselBanner;
