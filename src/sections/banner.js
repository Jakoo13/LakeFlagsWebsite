/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import phoneImg from 'assets/banner/LakeFlagsPhone.png'
import ShapeLeft from '../../public/shape-left.png';
import ShapeRight from '../../public/shape-right.png';

export default function Banner() {
  const navigateContact = (e) => {
    e.preventDefault();
      window.location.href='http://netscaledigital.com/contact-us';
  }
  return (
    <section sx={styles.banner} id="home">
      
      {/* <img src="shape-left.png" sx={styles.banner.imageRight} /> */}
      {/* <img src="shape-right.png" sx="image-right" /> */}
      <Container sx={styles.banner.container}>
         <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary"> 
            Lake Flags <br />A Water Ski Rotation App
          </Heading>
          <Text as="p" variant="heroSecondary">
            Instantly view and change rotation status and conveniently message others via inner-app chat
          </Text>
          <Button onClick={navigateContact} variant="primary">Contact</Button>
         </Box>
         <Box sx={styles.banner.imageBox}>
         <img sx={styles.logo} src="/lake-queue.png" alt="alt Image" /> 
          {/* <Image src={phoneImg} alt="banner" /> */}
         </Box>
      </Container>
    </section>
  );
}

const styles = {
  
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url('shape-left.png')`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url('/shape-right.png')`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    // imageRight: {
    //   position: "absolute",
      
    //   content: '""',
    //   bottom: '40px',
    //   right: 0,
    //   height: '50%',
    //   width: '50%',
    //   zIndex: -1,
      
    //   backgroundRepeat: `no-repeat`,
    //   backgroundPosition: 'bottom right',
    //   backgroundSize: '32%',
    // },
    // imageLeft: {
      
    //   position: 'absolute',

    //   content: '""',
    //   bottom: 6,
    //   left: 0,
    //   height: '50%',
    //   width: '50%',
    //   zIndex: -1,
    //   backgroundRepeat: `no-repeat`,
    //   backgroundPosition: 'bottom left',
    //   backgroundSize: '36%',
    // },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {

        width: ["50%","50%","40%","40%"],
        position: 'relative',
        height: ["auto", 'auto'],
      },
    },
  },
};
