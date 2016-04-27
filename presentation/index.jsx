// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Link,
  List,
  ListItem,
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
          </Slide>
          <Slide>
            <Link href='https://github.com/berkeleytrue/react-rxjs-and-you'>
              <Text
                bold={ true }
                caps={ true }
                textColor='tertiary'>
                View on Github(BerkeleyTrue/react-rxjs-and-you)
              </Text>
            </Link>
          </Slide>
          <Slide>
            <Heading>
              Whose that guy?
            </Heading>
            <List
              bold={ true }
              caps={ true }
              textColor='white'>
              <ListItem>
                CTO of Free Code Camp
              </ListItem>
              <ListItem>
                @BerkeleyTrue on the internet
              </ListItem>
              <ListItem>
                Programming for over two years
              </ListItem>
              <ListItem>
                React/RxJS Advocate
              </ListItem>
              <ListItem>
                #AnyoneCanLearnToCode
              </ListItem>
            </List>
          </Slide>
          <Slide
            background='black'>
            <List
              bold={ true }
              caps={ true }
              textColor='white'>
              <ListItem>
                What This is
              </ListItem>
              <ListItem>
                What this isn't
              </ListItem>
              <ListItem>
                What is RxJS?
              </ListItem>
              <ListItem>
                What are Observables?
              </ListItem>
              <ListItem>
                Why are they awesome?
              </ListItem>
              <ListItem>
                Observables in React
              </ListItem>
              <ListItem>
                Observables in Redux
              </ListItem>
              <ListItem>
                Redux Epic
              </ListItem>
            </List>
          </Slide>
          <Slide bgColor='secondary'>
            <Heading>
              What this isn't?
            </Heading>
          </Slide>
          <Slide bgColor='secondary'>
            <Heading>
              What this is?
            </Heading>
          </Slide>
          <Slide bgColor='secondary'>
            <Heading>
              What is RxJS?
            </Heading>
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
          </Slide>
          <Slide bgColor='secondary'>
            <Heading>
              Why are they awesome?
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
