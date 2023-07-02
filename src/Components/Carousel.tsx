import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { noPicture, img_300 } from "../Config/config";

export interface CarouselInterface {
  prop: Array<{
    adult?: boolean;
    cast_id?: number;
    character?: string;
    credit_id?: string;
    gender?: number;
    id?: number;
    known_for_department?: string;
    name?: string;
    order?: number;
    original_name?: string;
    popularity?: number;
    profile_path?: string;
  }>;
}

//const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

const Carousel: React.FC<CarouselInterface> = ({ prop }) => {
  let items;
  const responsive = {
    0:{
        items:3,
    },
    512:{
        items:4
    },
    1024:{
        items:5
    }
  }
  if (prop.length) {
    items = prop.map((p) => (
      <div className="flex flex-col object-contain p-2">
        <img
          src={p.profile_path ? `${img_300}/${p.profile_path}` : noPicture}
          alt=""
          srcSet=""
          className="h-40   rounded-xl"
        />
        <b className="text-sm truncate">{p?.name}</b>
      </div>
    ));
    console.log(items);
  }

  return <AliceCarousel
   autoPlay 
   items={items} 
   responsive={responsive}
   infinite
   disableButtonsControls
   disableDotsControls
   mouseTracking
   />;
};

export default Carousel;
