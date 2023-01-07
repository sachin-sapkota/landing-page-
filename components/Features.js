import one from '../public/images/features/first.png';
import two from '../public/images/features/second.png';
import three from '../public/images/features/third.png';
import four from '../public/images/features/fourth.png';
import Image from 'next/image';
const Features = () => {
  return (
    <div className="d-flex flex-column gap-2 justify-content-center align-items-center feature ">
      <h1 className="feature_primary_title">{features.primary_title}</h1>
      <h2 className="feature_secondary_title">{features.secondary_title}</h2>
      <div className="feature_card_wrapper">
        {features.cards.map((data, i) => {
          return (
            <div key={i} className="feature_card_container ">
              <Image src={data.image_url} alt="" className="card_image" />
              <h1 className="feature_card_title">{data.title}</h1>
              <h2 className="feature_card_description">{data.description}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;

const features = {
  primary_title: 'Business start with great features',
  secondary_title:
    "Build as incredible workplace and grow your business with Gusto's all-in-one platform with amazing contents.",
  cards: [
    {
      image_url: one,
      title: 'Make Snap Real',
      description:
        "We're driven beyond just finishing the projects. We want to find smart solutions.",
    },
    {
      image_url: two,
      title: 'Total Virtual Reality',
      description:
        "We're driven beyond just finishing the projects. We want to find smart solutions.",
    },
    {
      image_url: three,
      title: 'Full 360 View',
      description:
        "We're driven beyond just finishing the projects. We want to find smart solutions.",
    },
    {
      image_url: four,
      title: 'Artificial Intelligence',
      description:
        "We're driven beyond just finishing the projects. We want to find smart solutions.",
    },
  ],
};
