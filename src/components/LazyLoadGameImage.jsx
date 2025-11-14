import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function LazyLoadGameImage({ image }) {
  return (
    <LazyLoadImage
      alt="game image"
      effect="blur"
      wrapperProps={{
        style: { TransitionDelay: "0.5" },
      }}
      src={image} className="rounded-start img-card img-fluid" 
    />
  );
}
