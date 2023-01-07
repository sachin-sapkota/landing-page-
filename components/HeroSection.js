import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillPlayCircle } from 'react-icons/ai';

import hero_image from '../public/images/hero-section/hero_image.png';
function HeroSection() {
  return (
    <Container fluid>
      <Row>
        <Col
          xs={12}
          md={6}
          className="border-start border-dark border-4  hero-text-container "
          style={{ paddingLeft: '60px' }}
        >
          <h1 className="hero_section_main_text">
            {hero_section.hero_section_main_text}
          </h1>
          <h2 className="hero_section_secondary_text">
            {hero_section.hero_section_secondary_text}
          </h2>
          <div className="d-flex gap-4">
            <Link href={hero_section.primary_call_to_action.link}>
              <div className="primary_call_to_action">
                {hero_section.primary_call_to_action.title}
              </div>
            </Link>
            <Link href={hero_section.secondary_call_to_action.link}>
              <div className="secondary_call_to_action">
                <AiFillPlayCircle />
                <span>{hero_section.secondary_call_to_action.title}</span>
              </div>
            </Link>
          </div>
        </Col>
        <Col
          style={{
            borderRight: 'solid 100px rgb(65,64,64)',
            width: '200px',
          }}
          className="hero-container"
        >
          <Image src={hero_image} className="hero-image" alt="" />
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSection;

const hero_section = {
  hero_section_main_text: 'Your trusted mobile app to make day beautiful ',
  hero_section_secondary_text:
    'There will be a day-in our lifetime-when we get to celebrate every person on the planet having access.',
  primary_call_to_action: { title: 'Start 14-days free trial', link: '#' },

  secondary_call_to_action: { title: 'How it works', link: '#' },
};
