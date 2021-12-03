/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';


const data = [
  {
    id: 1,
    imgSrc: "/flag.svg",
    altText: 'See Everyone',
    title: 'See Everyone',
    text:
      'The entire lake queue is in your hand',
  },
  {
    id: 2,
    imgSrc: 'bell.svg',
    altText: 'Fast Notifications',
    title: 'Fast Notifications',
    text:
      'Get notified right to your device.',
  },
  {
    id: 3,
    imgSrc: 'message.svg',
    altText: 'Messages',
    title: 'Messages',
    text:
      'Quickly message another residence.',
  },
  // {
  //   id: 4,
  //   imgSrc: 'support.svg',
  //   altText: 'Customer Support',
  //   title: 'Customer Support',
  //   text:
  //     'Have issues or questions? Quickly contact us for a fast response.',
  // },
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
      'repeat(3,1fr)',
    ],
  },
};
