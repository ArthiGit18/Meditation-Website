import React from "react";

const benefits = [
  {
    id: 1,
    title: "Reduces Fine Lines & Wrinkles",
    description: "Face yoga improves blood circulation, helping to minimize wrinkles naturally.",
    icon: "/assets/yoga/1.jpg",
  },
  {
    id: 2,
    title: "Enhances Facial Glow",
    description: "Boosts oxygen flow to the skin, giving a youthful, radiant glow.",
    icon: "/assets/yoga/2.jpg",
  },
  {
    id: 3,
    title: "Relieves Stress & Anxiety",
    description: "Meditation calms the mind and reduces daily stress levels.",
    icon: "/assets/yoga/3.jpg",
  },
  {
    id: 4,
    title: "Improves Skin Elasticity",
    description: "Strengthens facial muscles, preventing sagging and fine lines.",
    icon: "/assets/yoga/4.jpg",
  },
  {
    id: 5,
    title: "Defines Jawline & Cheekbones",
    description: "Sculpts your face naturally for a well-defined look.",
    icon: "/assets/yoga/5.jpg",
  },
  {
    id: 6,
    title: "Boosts Mental Clarity",
    description: "A combination of face yoga & meditation sharpens focus and mindfulness.",
    icon: "/assets/yoga/6.jpg",
  },
];

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <div className="container">
        <h2>Benefits of Face Yoga & Meditation</h2>
        <p>Transform your skin and mind with these powerful, natural techniques.</p>
        <div className="grid_benefits">
          {benefits.map((benefit) => (
            <div className="card_benefit" key={benefit.id}>
              <img src={benefit.icon} alt={benefit.title} />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
