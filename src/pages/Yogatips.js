import React from "react";

const yogaTips = [
  {
    id: 1,
    tip: "Stay consistent and practice daily.",
    image: "/assets/yoga/tip1.jpg",
  },
  {
    id: 2,
    tip: "Focus on breathing techniques.",
    image: "/assets/yoga/tip2.jpg",
  },
  {
    id: 3,
    tip: "Maintain proper posture alignment.",
    image: "/assets/yoga/tip3.jpg",
  },
  {
    id: 4,
    tip: "Start with simple asanas before advancing.",
    image: "/assets/yoga/tip4.jpg",
  },
//   {
//     id: 5,
//     tip: "Stay hydrated and relax your muscles.",
//     image: "/assets/yoga/tip5.jpg",
//   },
];

const YogaTipsSection = () => {
  return (
    <section className="yoga-tips-section">
      <div className="container">
        <h2>Expert Tips for Yoga Beginners</h2>
        <div className="yoga-grid">
          {yogaTips.map((tip) => (
            <div className="tip-card" key={tip.id}>
              <img src={tip.image} alt="Yoga Tip" />
              <p>{tip.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YogaTipsSection;
