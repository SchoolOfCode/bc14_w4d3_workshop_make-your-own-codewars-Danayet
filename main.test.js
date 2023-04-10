//👉 Write your tests below here:
export function trafficLight() {
  return new Promise((resolve) => {
    console.log("Stop"); // red light with stop sign
    setTimeout(() => {
      console.log("Slow down"); // yellow light
      setTimeout(() => {
        console.log("Go"); // green light
        resolve();
      }, 2000); // wait for 2 seconds before changing to green
    }, 2000); // wait for 2 seconds before changing to yellow
  });
}

import { trafficLight } from './trafficLight.js';

// Call the trafficLight function
trafficLight().then(() => {
  console.log('Finished');
});
