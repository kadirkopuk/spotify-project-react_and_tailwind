import React from "react";
import Section from "components/Section";

function Home() {
  const items = [
    {
      id: 1,
      title: "Peaceful Piano",
      img: "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6",
      description: "Relax and indulge with beautiful piano pieces",
    },
    {
      id: 2,
      title: "Peaceful Piano",
      img: "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6",
      description: "Relax and indulge with beautiful piano pieces",
    },
    {
      id: 3,
      title: "Peaceful Piano",
      img: "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6",
      description: "Relax and indulge with beautiful piano pieces",
    },
    {
      id: 4,
      title: "Peaceful Piano",
      img: "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6",
      description: "Relax and indulge with beautiful piano pieces",
    },
    {
      id: 5,
      title: "Peaceful Piano",
      img: "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6",
      description: "Relax and indulge with beautiful piano pieces",
    },
  ];

  return (
    <div className="px-8 pt-5">
      <Section title="Recently played" more="/blabla" items={items} />
    </div>
  );
}

export default Home;
