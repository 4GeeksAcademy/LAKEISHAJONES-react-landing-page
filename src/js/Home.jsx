import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  const cardData = [
    {
      title: "Card title",
      content: "This is just placeholder text.",
      buttonText: "Find Out More!",
      buttonVariant: "primary",
      imageUrl: "https://picsum.photos/id/82/1500/997",
    },
    {
      title: "Card title",
      content: "This is just placeholder text.",
      buttonText: "Find Out More!",
      buttonVariant: "primary",
      imageUrl: "https://picsum.photos/id/82/1500/997",
    },
    {
      title: "Card title",
      content: "This is just placeholder text.",
      buttonText: "Find Out More!",
      buttonVariant: "primary",
      imageUrl: "https://picsum.photos/id/122/4147/2756",
    },
    {
      title: "Card title",
      content: "This is just placeholder text.",
      buttonText: "Find Out More!",
      buttonVariant: "primary",
      imageUrl: "https://picsum.photos/id/152/3888/2592",
    },
  ];

  return (
    <div>
      <Navbar />
      <Jumbotron />

      {/* Cards Section */}
      <div className="py-5 bg-white">
        <div className="container">
          <div className="row g-4">
            {cardData.map((card, index) => (
              <div key={index} className="col-sm-12 col-md-6 col-lg-3">
                <Card
                  title={card.title}
                  content={card.content}
                  buttonText={card.buttonText}
                  buttonVariant={card.buttonVariant}
                  imageUrl={card.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
