import Home from "./pages/Home/Home.jsx";
import Carousel, {CarouselItem} from "./components/Carousel/Carousel.jsx";
import CollectionCarousel, {CollectionItem} from "./components/collectionCarousel/CollectionCarousel.jsx";
import TestimonialCarousel, {TestimonialItem} from "./components/testimonialCarousel/TestimonialCarousel.jsx";

function App() {
  return <Home />
  // return  <div style={{ width:'144rem', border:'1px solid red', marginInline: 'auto' }}>
    {/*<Carousel>*/}
    {/*  { ["./src/assets/banner 2.png", "./src/assets/yyys.png", "./src/assets/banner__03.png"].map((item, index) => <CarouselItem key={index}>*/}
    {/*    <img className={style.carousel__img} src={item} alt="" />*/}
    {/*  </CarouselItem>)*/}
    {/*  }*/}
    {/*</Carousel>*/}

    {/*<CollectionCarousel>*/}
    {/*  { [...Array(17).keys()].map(item => <CollectionItem key={item}> item__{item}</CollectionItem>) }*/}
    {/*</CollectionCarousel>*/}

    {/*<TestimonialCarousel>*/}
    {/*  { [...Array(7).keys()].map(item => <TestimonialItem> item__0{item}</TestimonialItem>) }*/}
    {/*</TestimonialCarousel>*/}
  // </div>
}

export default App;
