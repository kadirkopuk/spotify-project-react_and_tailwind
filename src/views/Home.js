import React from "react";
import Section from "components/Section";

function Home() {
  const items = [
    {
      id: 1,
      title: "Peaceful Piano",
      img: "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6",
      description: "Relax and indulge with beautiful piano pieces",
      type: "album",
    },
    {
      id: 2,
      title: "Peaceful Piano",
      img: "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6",
      description: "Relax and indulge with beautiful piano pieces",
      type: "album",
    },
    {
      id: 3,
      title: "Hayko Cepkin",
      img: "https://i.scdn.co/image/ab67616d00001e0226487cf0d65e180fdb4de36d",
      description: "Sanatçı",
      type: "artist",
    },
    {
      id: 4,
      title: "5 Dakikada Dünya Gündemi",
      img: "https://i.scdn.co/image/ab67656300005f1fa8a60d226fe4c3c83c487ca6",
      description: "Pusholder / Bubble works",
      type: "podcast",
    },
    {
      id: 5,
      title: "Peaceful Piano",
      img: "https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6",
      description: "Relax and indulge with beautiful piano pieces",
      type: "album",
    },
  ];

  return (
    <div className="grid gap-y-8">
      <Section title="Recently played" more="/blabla" items={items} />
      <Section title="Shows to try" more="/blabla" items={items} />
      <Section title="Made for Kadir Kopuk" more="/blabla" items={items} />
    </div>
  );
}

export default Home;
