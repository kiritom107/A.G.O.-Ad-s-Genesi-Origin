

/*Step 1 - Creating the Functional Component*/
/*In this step, we will create a functional component that renders the basic layout of the home page. We will start by creating a new file called Home.tsx in the src/components/Home directory. We will then import the React and ReactDOM libraries, as well as the GSAP library. We will then create the functional component and export it.*/

import React from 'react';
import ReactDOM from 'react-dom';
import { gsap } from 'gsap';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__container__text">
          <h1>
            <span>Food</span>
            <span>Vending</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="home__container__image">
          <img src="https://via.placeholder.com/500x500" alt="food" />
        </div>
      </div>
    </div>
  );
};

export default Home;

/*Step 2 - Creating the React Class Component*/
/*In this step, we will create the React Class Component, which will handle the state of the home page. We will start by importing the React library. We will then create the React Class Component and export it. We will then create the state of the component and initialize it. We will then create the render() method, which will render the functional component that we created in the previous step.*/

import React from 'react';
import ReactDOM from 'react-dom';
import { gsap } from 'gsap';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__container__text">
          <h1>
            <span>Food</span>
            <span>Vending</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="home__container__image">
          <img src="https://via.placeholder.com/500x500" alt="food" />
        </div>
      </div>
    </div>
  );
};

class HomePage extends React.Component {
  state = {};

  render() {
    return <Home />;
  }
}

export default HomePage;

/*Step 3 - Implementing the Animations*/
/*In this step, we will implement the animations using GSAP. We will start by importing the ReactDOM library. We will then create the componentDidMount() lifecycle method, which will be called after the component is mounted. We will then create the timeline variable, which will contain the animations. We will then create the animations using GSAP. We will then create the scroll effects using GSAP. Finally, we will test the component to ensure that the animations are working as expected.*/

import React from 'react';
import ReactDOM from 'react-dom';
import { gsap } from 'gsap';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__container__text">
          <h1>
            <span>Food</span>
            <span>Vending</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="home__container__image">
          <img src="https://via.placeholder.com/500x500" alt="food" />
        </div>
      </div>
    </div>
  );
};

class HomePage extends React.Component {
  state = {};

  componentDidMount() {
    const timeline = gsap.timeline();

    timeline
      .from('.home__container__text h1 span:nth-child(1)', {
        duration: 1,
        y: '-100%',
        ease: 'power4.out',
      })
      .from('.home__container__text h1 span:nth-child(2)', {
        duration: 1,
        y: '100%',
        ease: 'power4.out',
      })
      .from('.home__container__text p', {
        duration: 1,
        y: '100%',
        ease: 'power4.out',
      })
      .from('.home__container__image img', {
        duration: 1,
        y: '-100%',
        ease: 'power4.out',
      });

    gsap.from('.home__container__text h1 span:nth-child(1)', {
      scrollTrigger: {
        trigger: '.home__container__text h1 span:nth-child(1)',
        start: 'top top',
        end: '+=100%',
        scrub: true,
      },
      duration: 1,
      y: '-100%',
      ease: 'power4.out',
    });

    gsap.from('.home__container__text h1 span:nth-child(2)', {
      scrollTrigger: {
        trigger: '.home__container__text h1 span:nth-child(2)',
        start: 'top top',
        end: '+=100%',
        scrub: true,
      },
      duration: 1,
      y: '100%',
      ease: 'power4.out',
    });

    gsap.from('.home__container__text p', {
      scrollTrigger: {
        trigger: '.home__container__text p',
        start: 'top top',
        end: '+=100%',
        scrub: true,
      },
      duration: 1,
      y: '100%',
      ease: 'power4.out',
    });

    gsap.from('.home__container__image img', {
      scrollTrigger: {
        trigger: '.home__container__image img',
        start: 'top top',
        end: '+=100%',
        scrub: true,
      },
      duration: 1,
      y: '-100%',
      ease: 'power4.out',
    });
  }

  render() {
    return <Home />;
  }
}

export default HomePage;

/*Step 4 - Testing the Component*/
/*In this step, we will test the component to ensure that the animations and scroll effects are working as expected. We will start by importing the ReactDOM library. We will then create the App component, which will render the HomePage component. We will then render the App component to the DOM.*/

import React from 'react';
import ReactDOM from 'react-dom';
import { gsap } from 'gsap';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__container__text">
          <h1>
            <span>Food</span>
            <span>Vending</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="home__container__image">
          <img src="https://via.placeholder.com/500x500" alt="food" />
        </div>
      </div>
    </div>
  );
};

class HomePage extends React.Component {
  state = {};

  componentDidMount() {
    const timeline = gsap.timeline();

    timeline
      .from('.home__container__text h1 span:nth-child(1)', {
        duration: 1,
        y: '-100%',
        ease: 'power4.out',
      })
      .from('.home__container__text h1 span:nth-child(2)', {
        duration: 1,
        y: '100%',
        ease: 'power4.out',
      })
      .from('.home__container__text p', {
        duration: 1,
        y: '100%',
        ease: 'power4.out',
      })
      .from('.home__container__image img', {
        duration: 1,
        y: '-100%',
        ease: 'power4.out',
      });

    gsap.from('.home__container__text h1 span:nth-child(1)', {
      scrollTrigger: {
        trigger: '.home__container__text h1 span:nth-child(1)',
        start: 'top top',
        end: '+=100%',
        scrub: true,
      },
      duration: 1,
      y: '-100%',
      ease: 'power4.out',
    });

    gsap.from('.home__container__text h1 span:nth-child(2)', {
      scrollTrigger: {
        trigger: '.home__container__text h1 span:nth-child(2)',
        start: 'top top',
        end: '+=100%',
        scrub: true,
      },
      duration: 1,
      y: '100%',
      ease: 'power4.out',
    });

    gsap.from('.home__container__text p', {
      scrollTrigger: {
        trigger: '.home__container__text p',
        start: 'top top',
        end: '+=100%',
        scrub: true,
      },
      duration: 1,
      y: '100%',
      ease: 'power4.out',
    });

    gsap.from('.home__container__image img', {
      scrollTrigger: {
        trigger: '.home__container__image img',
        start: 'top top',
        end: '+=100%',
        scrub: true,
      },
      duration: 1,
      y: '-100%',
      ease: 'power4.out',
    });
  }

  render() {
    return <Home />;
  }
}

const App = () => {
  return <HomePage />;
};

ReactDOM.render(<App />, document.getElementById('root'));

/*Step 5 - Adding the Styles*/
/*In this step, we will add the styles for the component. We will start by creating a new file called Home.css in the src/components/Home directory. We will then add the styles for the component.*/

.home {
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home__container {
  height: 100%;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home__container__text {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
