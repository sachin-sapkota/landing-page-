import Image from 'next/image';
import first from '../public/images/process/first.jpg';
import second from '../public/images/process/second.jpg';
import third from '../public/images/process/third.jpg';
import fourth from '../public/images/process/fourth.jpg';
import fifth from '../public/images/process/fifth.jpg';
import Link from 'next/link';
const Process = () => {
  return (
    <div className="process_container_wrapper">
      <h1 className="process_title">{process.title}</h1>
      <div className="process_card_container">
        {process.steps.map((data, i) => {
          return (
            <div className="process_card" key={i}>
              <Image
                src={data.image_url}
                alt=""
                className="process_card_image"
              />

              <h1 className="process_card_title">{data.title}</h1>
              <h2 className="process_card_description">{data.description}</h2>
            </div>
          );
        })}
      </div>
      <div className="process_call_to_action">
        <h2 className="process_cta_primary_text">
          {process.call_to_action_text.primary_text}
        </h2>
        <h3 className="process_cta_secondary_text">
          {process.call_to_action_text.secondary_text}
        </h3>
        <Link href={process.call_to_action_button.link}>
          <div className="process_cta_button">
            {process.call_to_action_button.text}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Process;

const process = {
  title: 'Planning Your Medical Trip',
  call_to_action_text: {
    primary_text: 'Go ahead and start arranging your medical trip now!',
    secondary_text:
      'A medical expert will call and provide you with a free consultation',
  },
  call_to_action_button: {
    text: 'Click here for a free consultation',
    link: '#',
  },
  steps: [
    {
      image_url: first,
      title: 'Consultation',
      description:
        "Our dedicated team will cnnect with you and will answer al of your questions . Your will be provided with help in order to get to know what's best for your case.",
    },
    {
      image_url: second,
      title: 'Planning',
      description:
        "Our dedicated team will cnnect with you and will answer al of your questions . Your will be provided with help in order to get to know what's best for your case. ",
    },
    {
      image_url: third,
      title: 'Transportation',
      description:
        "Our dedicated team will cnnect with you and will answer al of your questions . Your will be provided with help in order to get to know what's best for your case. ",
    },
    {
      image_url: fourth,
      title: 'Accomodation',
      description:
        "Our dedicated team will cnnect with you and will answer al of your questions . Your will be provided with help in order to get to know what's best for your case.",
    },
    {
      image_url: fifth,
      title: 'Medical Follow-up',
      description:
        "Our dedicated team will cnnect with you and will answer al of your questions . Your will be provided with help in order to get to know what's best for your case.",
    },
  ],
};
