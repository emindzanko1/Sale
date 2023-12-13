import { SocialIcon } from 'react-social-icons';

export default function Footer() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  return (
    <footer className='footer'>
      <div className='footer-content'>
        <p>© {currentYear} Sportska oprema Sale. All rights reserved.</p>
        <SocialIcon
          className='social-network-img'
          network='instagram'
          url='https://www.instagram.com/sportskaopremasale/'
          style={{ width: '30px', height: '30px' }} 
        />
      </div>
    </footer>
  );
}
