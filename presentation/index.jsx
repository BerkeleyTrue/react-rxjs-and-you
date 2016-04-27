// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Link,
  Slide,
  Spectacle,
  Text
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');


const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png')
};

preloader(images);

const theme = createTheme({
  primary: '#ff4081'
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500}>
          <Slide
            bgColor='primary'
            transition={['zoom']}>
            <Heading
              caps={ true }
              fit={ true }
              lineHeight={ 1 }
              size={ 1 }
              textColor='black'>
              React, RxJS, and You
            </Heading>
            <Heading
              caps={ true }
              fit={ true }
              size={ 1 }>
              Observables for a better tomorrow
            </Heading>
            <Link href='https://github.com/FormidableLabs/spectacle'>
              <Text
                bold={ true }
                caps={ true }
                textColor='tertiary'>
                View on Github
              </Text>
            </Link>
          </Slide>
          <Slide
            bgColor='primary'
            transition={['zoom']}>
            <Heading
              caps={ true }
              fit={ true }
              lineHeight={ 1 }
              size={ 1 }
              textColor='black'>
              What are Observables?
            </Heading>
            <Heading
              caps={ true }
              size={ 1 }>
              bar
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
