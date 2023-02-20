

// Include the GSAP library
import { TweenLite } from 'gsap';

// Create a TweenLite object
const tween = TweenLite.fromTo(
  '.box', // Target the .box element
  1, // Set the duration to 1 second
  { opacity: 0 }, // Set the start value to 0
  { opacity: 1 } // Set the end value to 1
);

// Call the play() method on the TweenLite object
tween.play();

/*JavaScript*/
