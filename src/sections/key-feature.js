/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';
import Notification from 'assets/key-feature/bell.svg';
import Flag from 'assets/key-feature/flag.svg';
import Message from 'assets/key-feature/message.svg';

const data = [
  {
    id: 1,
    imgSrc: Flag,
    altText: 'See Everyone',
    title: 'See Everyone',
    text:
      'Do you ever have a hard time seeing someone\'s flag? Lake Flags eliminates that problem.',
  },
  {
    id: 2,
    imgSrc: Notification,
    altText: 'Fast Notifications',
    title: 'Fast Notifications',
    text:
      'Get notified right to your device every time their is a flag change. Easily turn these off when you are away.',
  },
  {
    id: 3,
    imgSrc: Message,
    altText: 'Messages',
    title: 'Messages',
    text:
      'Quickly message another residence. Ask them about their session or how they are doing.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'Have issues or questions? Quickly contact us for a fast response.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{ variant: 'section.keyFeature'}} id="feature">
     <Container>
       <SectionHeader 
        slogan="What's the function"
        title="Meet the features of our product"
       />

       <Grid sx={styles.grid}>
        {data.map((item)=> (
          <FeatureCardColumn 
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
          />
        ))}
       </Grid>

       
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
