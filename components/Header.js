import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import { ImWhatsapp } from 'react-icons/im';
import { BsMessenger } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import Image from 'next/image';
import Logo from '../public/images/header/logo.png';
function BrandExample() {
  return (
    <div style={{ height: '100px' }}>
      <Navbar bg="white" className="fixed-top">
        <Container fluid className="border-bottom border-gray border-2 p-2 ">
          <Navbar.Brand href="#home" style={{ objectFit: 'contain' }}>
            <Image
              alt=""
              src={Logo}
              width="200"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <div className="justify-end d-flex  align-items-center justify-content-end gap-2">
            <div className="d-flex gap-1">
              {contacts.map((data, i) => {
                return (
                  <Link key={i} href={data.link}>
                    <span className="d-flex bg-primary rounded-circle p-2 w-15 h-15 text-light bg-dark">
                      {data.contact_logo}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div
              className="border-start border-danger border-4 p-2 d-flex flex-column align-items-start justify-content-center"
              style={{ height: '60px' }}
            >
              <div className="text-secondary fw-bold fs-8 ">Call Us</div>
              <div className="fs-4 " style={{ fontWeight: 700 }}>
                {ContactNumber}
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default BrandExample;
const contacts = [
  { contact_logo: <ImWhatsapp />, link: '#' },
  { contact_logo: <BsMessenger />, link: '#' },
  { contact_logo: <FaEdit />, link: '#' },
  { contact_logo: <MdOutlineEmail />, link: '#' },
];
const ContactNumber = '+90348348383';
