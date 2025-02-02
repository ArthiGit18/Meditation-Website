import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const faceYogaExercises = [
  { id: 1, name: "The V Pose", description: "Reduces wrinkles around the eyes and lifts droopy eyelids.", image: "/assets/face/1.jpeg" },
  { id: 2, name: "The Lion Face", description: "Relieves tension and improves blood circulation in the face.", image: "/assets/face/2.jpg" },
  { id: 3, name: "Cheek Lifter", description: "Lifts sagging cheeks and adds natural plumpness.", image: "/assets/face/3.jpeg" },
  { id: 4, name: "Forehead Smoother", description: "Reduces forehead wrinkles and relaxes facial muscles.", image: "/assets/face/4.jpeg" },
  { id: 5, name: "Jaw Definer", description: "Helps define the jawline and reduces double chin.", image: "/assets/yoga/wow.jpeg" },
  { id: 6, name: "Neck Tightener", description: "Tightens the neck area and prevents sagging skin.", image: "/assets/face/2.jpg" },
];

const FaceYogaSection = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <button className="slick-prev"></button>,
    nextArrow: <button className="slick-next"></button>,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="face-section">
      <div className="container">
        <h2>Simple & Effective Face Yoga Poses</h2>
        <p>Practice these exercises daily for a natural glow and youthful skin.</p>

        <Slider {...settings} className="face-slider">
          {faceYogaExercises.map((exercise) => (
            <div className="card_faceyoga" key={exercise.id}>
              <img src={exercise.image} alt={exercise.name} />
              <h3>{exercise.name}</h3>
              <p>{exercise.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FaceYogaSection;
