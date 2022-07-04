import Slider from "react-slick";
import LazyLoadType from "react-slick";
import { Movie } from "../api/data/MovieModels";
import MovieItem from "./MovieItem";

interface CarouselProps {
    movies: Movie[];
}
const Carousel: React.FC<CarouselProps> =  (props: CarouselProps) => {
    var settings = {
        dots: true,
        // lazyLoad: "progressive",
        infinite: true,
        speed: 500,
        // arrows: true,
        // centerMode: true,
        
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
        {props.movies.map((movie) =>(
            <MovieItem
            key={movie.id}
            movie={movie}
            />
        ))}
        </Slider>
      );
}

export default Carousel;