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

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

import WikiSearch from './Wiki-Search.jsx';
const theme = createTheme({
  primary: '#ffffff'
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
          <Slide
            bgColor='secondary'>
            <Link
              href='https://github.com/berkeleytrue/react-rxjs-and-you'
              target='_blank'>
              <Text
                bold={ true }
                caps={ true }
                textColor='tertiary'>
                View on Github:
              </Text>
              <Heading
                caps={ true }
                fit={ true }
                size={ 1 }>
                BerkeleyTrue/react-rxjs-and-you
              </Heading>
            </Link>
          </Slide>
          <Slide>
            <Heading
              textColor='secondary'>
              Who I Am
            </Heading>
            <List
              bold={ true }
              caps={ true }>
              <ListItem>
                CTO of Free Code Camp
              </ListItem>
              <ListItem>
                @BerkeleyTrue on the internet
              </ListItem>
              <ListItem>
                React/RxJS Advocate
              </ListItem>
              <ListItem>
                Self Taught Programming for over two years
              </ListItem>
              <ListItem>
                Fellow Human
              </ListItem>
            </List>
          </Slide>
          <Slide
            bgColor='black'>
            <Heading
              caps={ true }
              size={ 2 }
              textColor='white'>
              What it's inside:
            </Heading>
            <List
              bold={ true }
              caps={ true }
              textColor='white'>
              <ListItem>
                What is RxJS and Observables?
              </ListItem>
              <ListItem>
                Why are Observables awesome?
              </ListItem>
              <ListItem>
                How to Observables in React
              </ListItem>
              <ListItem>
                How to Observables in Redux
              </ListItem>
            </List>
          </Slide>
          <Slide bgColor='secondary'>
            <Heading>
              This is not an:
            </Heading>
            <List
              bold={ true }
              caps={ true }
              textColor='white'>
              <ListItem>
                Intro to React
              </ListItem>
              <ListItem>
                Intro to RxJS
              </ListItem>
              <ListItem>
                Intro to Redux
              </ListItem>
            </List>
          </Slide>
          <Slide
            bgColor='secondary'
            notes={`
              High level look at using RxJS Observables with React and Redux
            `}>
            <Heading>
              What this is?
            </Heading>
          </Slide>
          <Slide bgColor='secondary'>
            <Heading>
              What is RxJS?
            </Heading>
            <Text
              bold={ true }
              caps={ true }
              textColor='primary'>
              A library for creating Observables
            </Text>
          </Slide>
          <Slide
            bgColor='primary'
            notes={`
You can think of Observables in an abstract way as a special type of function
that can return multiple items over time.`
            }
            transition={['zoom']}>
            <Heading
              bold={ true }
              caps={ true }
              size={ 2 }
              textColor='secondary'>
              The shortest answer I've found that still makes sense:
            </Heading>
          </Slide>
          <Slide
            bgColor='secondary'
            notes={`
Observables are often compared to promises. While they can do what promises do,
the comparison falls short.
            `}>
            <Heading
              size={ 1 }
              textColor='primary'>
              How do they relate to Promises?
            </Heading>
            <br />
            <Heading
              size={ 2 }
              textColor='primary'>
              Observables can be sync or async
            </Heading>
            <br />
            <Heading
              size={ 2 }
              textColor='primary'>
              Observables are lazy
            </Heading>
          </Slide>
          <Slide
            bgColor='secondary'>
            <Heading
              size={ 1 }
              textColor='primary'>
              Why are they awesome?
            </Heading>
          </Slide>
          <Slide
            bgColor='secondary'
            notes={`
There is very little you can't do with Observables.
            `}>
            <Heading
              size={ 1 }
              textColor='white'>
              Observable are powerful.
            </Heading>
          </Slide>
          <Slide
            bgColor='secondary'
            notes={'Need to create an tinder-like app?'}>
            <Heading
              size={ 1 }
              textColor='white'>
              Swipe left for no, right for 'hell yeah'?
            </Heading>
          </Slide>
          <Slide bgColor='secondary'>
            <Heading
              size={ 1 }
              textColor='white'>
              Observables.
            </Heading>
          </Slide>
          <Slide bgColor='secondary'>
            <Heading
              size={ 1 }
              textColor='white'>
Need to cache a database query for any number of request that expires after two
hours and refreshes itself on the next request?
            </Heading>
          </Slide>
          <Slide bgColor='secondary'>
            <Heading
              size={ 1 }
              textColor='white'>
              Observables.
            </Heading>
          </Slide>
          <Slide bgColor='secondary'>
            <Heading
              size={ 4 }
              textColor='white'>
              Need to request the latest data from your server,
              retry 4 times if it fails, and then gracefully show
              your user a message informing them that the zombie
              apocalypse has caused your request to fail and that
              they should run for their lives?
            </Heading>
          </Slide>
          <Slide bgColor='secondary'>
            <Heading
              size={ 1 }
              textColor='primary'>
              Observables.
            </Heading>
          </Slide>
          <Slide bgColor='secondary'>
            <Heading
              size={ 1 }
              textColor='primary'>
              How to Observables in React?
            </Heading>
          </Slide>
          <Slide>
            <Heading
              textColor='secondary'>
              Purpose built libraries
            </Heading>
            <List
              bold={ true }
              caps={ true }>
              <ListItem>
                rx-react: RxJS bindings for React
              </ListItem>
              <ListItem>
                rx-recompose: compose React function components
                or Higher Order Components(HOC)
                using RxJS
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <WikiSearch />
          </Slide>
          <CodeSlide
            bgColor='primary'
            code={ require('raw!../assets/deck.example') }
            lang='jsx'
            ranges={[
              { loc: [0, 1] },
              { loc: [21, 41] },
              { loc: [2, 7] },
              { loc: [8, 19] }
            ]}
            textSize={ 25 }
            transition={['zoom', 'fade']}
          />
          <Slide
            bgColor='secondary'
            notes={`
In Redux, What is a side-effect?
              `}>
            <Heading
              size={ 1 }
              textColor='primary'>
              How to Observables in Redux?
            </Heading>
          </Slide>
          <Slide
            bgColor='secondary'
            notes={`
Anything that is not a simple input-output function is considered a side-effect.
            `}>
            <Heading
              size={ 1 }
              textColor='primary'>
              Side-Effects
            </Heading>
          </Slide>
          <Slide>
            <Heading
              textColor='secondary'>
              Some Examples
            </Heading>
            <List
              bold={ true }
              caps={ true }>
              <ListItem>
Making a request to the server for data
              </ListItem>
              <ListItem>
Add a time counter(tick)
              </ListItem>
              <ListItem>
Adding items to localStorage
              </ListItem>
              <ListItem>
Changing the document title property on page change
              </ListItem>
              <ListItem>
Reading cookies
              </ListItem>
              <ListItem>
Authentication
              </ListItem>
              <ListItem>
Initiating and listening to websocket
              </ListItem>
              <ListItem>
Responding to user mouse clicks
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading
              textColor='secondary'>
              Current Async story in Redux
            </Heading>
            <List
              bold={ true }
              caps={ true }>
              <ListItem>
                Redux-Thunk
              </ListItem>
              <ListItem>
                Redux-Promises
              </ListItem>
              <ListItem>
                Redux-Rx
              </ListItem>
              <ListItem>
                Redux-Saga
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading
              textColor='secondary'>
            Redux-Saga
            </Heading>
          </Slide>
          <Slide>
            <Heading
              textColor='secondary'>
              Why saga's are better
            </Heading>
            <List
              bold={ true }
              caps={ true }>
              <ListItem>
                Complex logic in one place
              </ListItem>
              <ListItem>
                Action Creators are plain functions
              </ListItem>
              <ListItem>
                Saga's can individually be tested
              </ListItem>
            </List>
          </Slide>
          <CodeSlide
            code={ require('raw!../assets/saga.example') }
            lang='jsx'
            ranges={[
              { loc: [ 0, 1 ] },
              { loc: [ 2, 6] },
              { loc: [ 7, 10 ] }
            ]}
            textSize={ 25 }
            transition={[ 'zoom', 'fade' ]}
          />
          <Slide>
            <Heading
              textColor='secondary'>
              In comes Redux-Epic
            </Heading>
          </Slide>
          <Slide>
            <Heading
              textColor='secondary'>
              Why Redux-Epic?
            </Heading>
            <List
              bold={ true }
              caps={ true }>
              <ListItem>
                Observables are powerful
              </ListItem>
              <List>
                <ListItem>
                  Smaller API surface
                </ListItem>
                <ListItem>
                  Server-Side data pre-fetching
                </ListItem>
              </List>
              <ListItem>
                Inject dependencies right into your sagas
              </ListItem>
            </List>
          </Slide>
          <CodeSlide
            code={ require('raw!../assets/saga2.example') }
            lang='jsx'
            ranges={[
              { loc: [ 0, 1 ] },
              { loc: [ 1, 2 ] },
              { loc: [ 2, 3 ] },
              { loc: [ 3, 10 ] },
              { loc: [ 4, 5 ] },
              { loc: [ 5, 8 ] },
              { loc: [ 8, 9 ] }
            ]}
            textSize={ 20 }
            transition={[]}
          />
          <CodeSlide
            code={ require('raw!../assets/saga-autocomplete.example') }
            lang='jsx'
            ranges={[
              { loc: [ 0, 1 ] },
              { loc: [ 2, 10 ] },
              { loc: [ 11, 26 ] },
              { loc: [ 13, 25 ] },
              { loc: [ 21, 25 ] }
            ]}
            textSize={ 20 }
            transition={[]}
          />
          <CodeSlide
            code={ require('raw!../assets/saga-with-deps.example') }
            lang='jsx'
            ranges={[
              { loc: [ 0, 10 ] },
              { loc: [ 2, 3 ] },
              { loc: [ 3, 9 ] },
              { loc: [ 4, 5 ] },
              { loc: [ 5, 6 ] },
              { loc: [ 6, 7 ] }
            ]}
            textSize={ 20 }
            transition={[]}
          />
          <CodeSlide
            code={require('raw!../assets/create-epic.example')}
            lang='jsx'
            ranges={[
              { loc: [ 0, 1 ] },
              { loc: [ 6, 10 ] },
              { loc: [ 10, 11 ] },
              { loc: [ 11, 14 ] },
              { loc: [ 14, 16 ] },
              { loc: [ 17, 24 ] }
            ]}
            textSize={ 20 }
            transition={[]}
          />
          <Slide
            notes={`
create composed store enhancer
use store enhancer function to enhance createStore function
call enhanced createStore function with reducer and initialState
to create store
            `}>
            <Link
              href='https://github.com/berkeleytrue/react-rxjs-and-you'
              target='_blank'>
              <Heading
                textColor='secondary'
                textSize={ 60 }>
                github.com/berkeleyTrue/redux-epic
              </Heading>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
