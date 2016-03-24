# Make React Reactive (working title)

### Brain storm

* The hardest part of JavaScript is asynchronicity.
    * Ajax
    * Events
    * input

* Rx solves all these and adds the ability to compose events and data streams.
    * Websocket returns an event, send ajax request, display loading event to user
    * ajax request returns. Stream data to view and build list, while removing loading event

* But how do you use Rx with React?
    * Use Rx to make your data calls
    * Use Rx as your primary data pipeline
    * Abstract data into pipelines
    * Manage state and data loading
        * Use cycle.js principals and React as the view layer

* How do you manage asynchronicity in react?

* Use Rx in place of flux?
* Building Redux pattern using Rx? (using `scan`)

Abstract

React has ushered in a fundamental change in how web applications
are built that has effected the front end community by views that react to data
changes in a functional way. But one the one thing that react really lacks is
data management and data fetching

Reactive Extensions for JavaScript (RxJs) solves the hardest problem with
JavaScript, asynchronicity and composition of events and data. It does this by combining
functional programming concepts (monads) and event emitters.

Can you combine these two and make something great? Hear about how you can take
your React applications to the next level with a few key Rx concepts.
