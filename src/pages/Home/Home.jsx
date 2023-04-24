import Carousel, {CarouselItem} from "../../components/carousel/Carousel.jsx";
import Title from "../../components/title/Title.jsx";
import BestSale from "../../components/bestSale/BestSale.jsx";
import CollectionCarousel, {CollectionItem} from "../../components/collectionCarousel/CollectionCarousel.jsx";
import NewProduct from "../../components/newProduct/NewProduct.jsx";
import TestimonialCarousel, {TestimonialItem} from "../../components/testimonialCarousel/TestimonialCarousel.jsx";

import style from "./home.module.scss";
import Community from "../../components/community/Community.jsx";

export default function Home() {
  return (
    <div className={style.home__container}>
      <Carousel>
        {[
          "./src/assets/banner 2.png",
          "./src/assets/yyys.png",
          "./src/assets/banner__03.png",
        ].map((item, index) => (
          <CarouselItem key={index}>
            <img className={style.carousel__img} src={item} alt="" />
          </CarouselItem>
        ))}
      </Carousel>
      <div className={style.main__container}>
        <div className={style.top__sales__section}>
          <Title
            main__title={"top sales"}
            sub__title={"what our clients prefer"}
          />
          <BestSale />
        </div>
        <div className={style.protocole__section}>
          <div className={style.protocole__section__head}>
            <h1 className={style.protocole__section__title}>
              Découvrez botre protocole personnalisé
            </h1>
            <p>
              Prenez 5 minutes pour décoder votre peau, en suidant pas à pas les
              explications de nos experts qui accompagnent chaque question.
              Notre questionnaire a été créé dans l'objectif de reproduire
              l'échange que vours auriez au comptoir de la pharmacie ou chez
              votre esthéticienne.
            </p>
          </div>
          <div className={style.protocole__section__visual}>
            <div className={style.protocole__type}>
              <div className={style.protocole__img}>
                <img src="./src/assets/Background-min_01.png" alt="" />
              </div>
              <div className={style.protocole__type__details}>
                <h1 className={style.protocole__type__title}>
                  diagnostique visage
                </h1>
                <p className={style.protocole__type__sub_title}>
                  personnalisé & gratuit
                </p>
              </div>
            </div>
            <div className={style.protocole__type}>
              <div className={style.protocole__img}>
                <img src="./src/assets/Background-min_02.png" alt="" />
              </div>
              <div className={style.protocole__type__details}>
                <h1 className={style.protocole__type__title}>
                  diagnostique cheuveux
                </h1>
                <p className={style.protocole__type__sub_title}>
                  personnalisé & gratuit
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.collection__section}>
          <div className={style.collection__head}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={style.collection__icon}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                />
              </svg>
            </div>
            <h1>new collection</h1>
          </div>
            <CollectionCarousel>
              {[...Array(17).fill({
                img : "./src/assets/noir 7e.png",
                title: "gold argan...",
                hart : 4,
                review : 1,
                price : 16.51,
              })].map((item, index) => (
                <CollectionItem key={index} {...item} />
              ))}
            </CollectionCarousel>
        </div>
        <div className={style.new__product__section}>
          <Title main__title={"new products"} sub__title={"brand-new innovations of self-care"} />
          <div className={style.new_product__container}>
            { [...Array(4).fill({img : "./src/assets/noir 7.png", price:180.00})].map((item, index) => <NewProduct key={index} {...item} />) }
          </div>
        </div>
        <div className={style.extrat__section}>
          <div>
            <img src="./src/assets/catalogue__bionnor.png" alt=""/>
            <p>catalogue bionnor</p>
          </div>
          <div>
            <img src="./src/assets/idee__cadeau.png" alt=""/>
            <p>idée cadeau</p>
          </div>
        </div>
        <div className={style.testimonial__section}>
          <Title main__title={"testimonial"} sub__title={"what out client are saying"} />
          <TestimonialCarousel>
            {[...Array(5).fill({user_img:"./src/assets/user_img.jpg", user_name:"Kaiya Philips", user_location:"Casablanca", star:4, review:4.5, content:"Facilis magnam esse voluptatum accusamus vero. Quia modi cupiditate nobis esse. Cupiditate dolore et pariatur. Sint beatae dolor esse voluptates suscipit"})].map((item, index)=> <TestimonialItem key={index} {...item} />)}
          </TestimonialCarousel>
        </div>
        <div className={style.community__section}>
          <Community />
        </div>
      </div>
    </div>
  );
}