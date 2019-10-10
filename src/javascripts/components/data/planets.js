const planets = [
  {
    name: 'Earth',
    image: '../../../../images/earth.jpeg',
    description: 'Earth, our home, is the third planet from the sun. It\'s the only planet known to have an atmosphere containing free oxygen.',
    isGasPlanet: 'No',
    numberOfMoons: 1,
    nameOfLargestMoon: 'Moon',
  },
  {
    name: 'Jupiter',
    image: '../../../../images/jupiter.jpeg',
    description: 'Jupiter is called a gas giant planet. Its atmosphere is made up of mostly hydrogen gas and helium gas, like the sun.',
    isGasPlanet: 'Yes',
    numberOfMoons: 79,
    nameOfLargestMoon: 'Ganymede',
  },
  {
    name: 'Mars',
    image: '../../../../images/mars.jpeg',
    description: 'Mars is the fourth planet from the Sun and is the second smallest planet in the solar system. Named after the Roman god of war, Mars is also often described as the “Red Planet” due to its reddish appearance.',
    isGasPlanet: 'No',
    numberOfMoons: 2,
    nameOfLargestMoon: 'Phobos',
  },
  {
    name: 'Neptune',
    image: '../../../../images/neptune.jpeg',
    description: 'Neptune is very similar to Uranus. It\'s made of a thick soup of water, ammonia, and methane over an Earth-sized solid center. Its atmosphere is made of hydrogen, helium, and methane.',
    isGasPlanet: 'Yes',
    numberOfMoons: 14,
    nameOfLargestMoon: 'Triton',
  },
  {
    name: 'Saturn',
    image: '../../../../images/saturn.jpeg',
    description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.',
    isGasPlanet: 'Yes',
    numberOfMoons: 62,
    nameOfLargestMoon: 'Titan',
  },
  {
    name: 'Uranus',
    image: '../../../../images/earth.jpeg',
    description: 'Uranus is blue-green in color, as a result of the methane in its mostly hydrogen-helium atmosphere. The planet is often dubbed an ice giant, since at least 80% of its mass is a fluid mix of water, methane and ammonia ice.',
    isGasPlanet: 'Yes',
    numberOfMoons: 27,
    nameOfLargestMoon: 'CodyCross',
  },
  {
    name: 'Venus',
    image: '../../../../images/venus.jpeg',
    description: 'Venus is the second planet from the Sun, and is Earth\'s closest neighbor in the solar system. Venus is the brightest object in the sky after the Sun and the Moon, and sometimes looks like a bright star in the morning or evening sky.',
    isGasPlanet: 'No',
    numberOfMoons: 0,
    nameOfLargestMoon: 'There are no moons',
  },
  {
    name: 'Mercury',
    image: '../../../../images/mercury.jpeg',
    description: 'Mercury is the closest planet to the sun and the eighth largest. It has a diameter of 4,880 kilometers. Mercury has the widest temperature extremes in the solar system ranging from 90 degrees Kelvin to 700 degrees Kelvin.',
    isGasPlanet: 'No',
    numberOfMoons: 0,
    nameOfLargestMoon: 'There are no moons',
  },
];

const getPlanets = () => planets; // single line return function that one returns one thing

export default { getPlanets };
