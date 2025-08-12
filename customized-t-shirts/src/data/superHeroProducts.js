// Import SuperHero T-Shirt images
import hero1 from '../assets/images/Super-hero/2.png';
import hero2 from '../assets/images/Super-hero/3.jpg';
import hero3 from '../assets/images/Super-hero/4.jpg';
import hero4 from '../assets/images/Super-hero/5.png';
import hero5 from '../assets/images/Super-hero/6.jpg';
import hero6 from '../assets/images/Super-hero/8.jpg';
import hero7 from '../assets/images/Super-hero/4.jpg';
import hero8 from '../assets/images/Super-hero/13.jpg';

import hero9 from '../assets/images/Super-hero/11.jpg';
import hero10 from '../assets/images/Super-hero/9.jpg';
import hero11 from '../assets/images/Super-hero/16.jpg';
import hero12 from '../assets/images/Super-hero/12.jpg';
import hero13 from '../assets/images/Super-hero/23.jpg';
import hero14 from '../assets/images/Super-hero/18.jpg';
import hero15 from '../assets/images/Super-hero/21.jpg';
import hero16 from '../assets/images/Super-hero/19.jpg';

// Import color images
import redTshirt from '../assets/images/red.jpg';
import blueTshirt from '../assets/images/blue.jpg';
import yellowTshirt from '../assets/images/yellow.jpg';
import blackTshirt from '../assets/images/black.jpg';

export const superHeroProducts = [
    {
        id: 'ironman-red',
        label: 'Iron Man Red T Shirt',
        sub: 'Marvel Edition',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: hero1,
        description: 'Channel the genius, billionaire, playboy, philanthropist with this bold Iron Man tee. Premium cotton for comfort and durability.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 }
        ],
        colors: [
            { name: 'Red', image: redTshirt, hex: '#FF0000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'captain-blue',
        label: 'Captain America Blue T Shirt',
        sub: 'Marvel Edition',
        price: 1199,
        badge: 'Out Stocks',
        mainImage: hero2,
        description: 'Show your patriotic side with the Captain America shield print. Lightweight, breathable, and perfect for any Marvel fan.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 }
        ],
        colors: [
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'batman-black',
        label: 'Batman Black T Shirt',
        sub: 'DC Edition',
        price: 1099,
        badge: 'Limited Stocks',
        mainImage: hero3,
        description: 'Dark, sleek, and iconic. Represent Gotham’s hero with this Batman tee. Designed for comfort with a touch of mystery.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 }
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'superman-blue',
        label: 'Superman Blue T Shirt',
        sub: 'DC Edition',
        price: 1199,
        badge: 'Limited Stocks',
        mainImage: hero4,
        description: 'Up, up, and away! Classic Superman logo on a vibrant blue base. Soft fabric for all-day heroics.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'spiderman-red',
        label: 'Spider-Man Red T Shirt',
        sub: 'Marvel Edition',
        price: 1099,
        badge: 'Out Stocks',
        mainImage: hero5,
        description: 'Friendly neighborhood Spider-Man swings onto this bold red tee. Perfect for casual wear or comic cons.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 }
        ],
        colors: [
            { name: 'Red', image: redTshirt, hex: '#FF0000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'thor-black',
        label: 'Thor Black T Shirt',
        sub: 'Marvel Edition',
        price: 999,
        badge: 'Limited Stocks',
        mainImage: hero6,
        description: 'Feel the power of the God of Thunder with this striking Thor print. Durable and stylish for every fan.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'hulk-green',
        label: 'Hulk Green T Shirt',
        sub: 'Marvel Edition',
        price: 1099,
        badge: 'Limited Stocks',
        mainImage: hero7,
        description: 'Go big and go green with this Hulk smash tee. Built for comfort and bold style.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [
            { name: 'Yellow', image: yellowTshirt, hex: '#00FF00' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'flash-red',
        label: 'Flash Red T Shirt',
        sub: 'DC Edition',
        price: 999,
        badge: 'Limited Stocks',
        mainImage: hero8,
        description: 'Tap into the speed force with this Flash logo tee. Lightweight and comfortable for any quick run.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [
            { name: 'Red', image: redTshirt, hex: '#FF0000' }
        ],
        neckDesigns: ['Round']
    },
    // Second batch
    {
        id: 'blackpanther-black',
        label: 'Black Panther T Shirt',
        sub: 'Marvel Edition',
        price: 1199,
        badge: 'Limited Stocks',
        mainImage: hero9,
        description: 'Wakanda Forever! Sleek black design with bold Panther emblem. Perfect for fans of the king of Wakanda.',
        sizeChart: [
            { size: 'L', chest: 42, length: 29 }
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'wonderwoman-yellow',
        label: 'Wonder Woman Yellow T Shirt',
        sub: 'DC Edition',
        price: 1099,
        badge: 'Out Stocks',
        mainImage: hero10,
        description: 'Empower your look with this Wonder Woman tee. Bright yellow with the iconic WW logo.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [
            { name: 'Yellow', image: yellowTshirt, hex: '#FFFF00' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'deadpool-red',
        label: 'Deadpool Red T Shirt',
        sub: 'Marvel Edition',
        price: 1199,
        badge: 'Limited Stocks',
        mainImage: hero11,
        description: 'Loud, proud, and a little inappropriate. Deadpool’s red tee for the true anti-hero fan.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 }
        ],
        colors: [
            { name: 'Red', image: redTshirt, hex: '#FF0000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'drstrange-blue',
        label: 'Doctor Strange Blue T Shirt',
        sub: 'Marvel Edition',
        price: 1099,
        badge: 'Limited Stocks',
        mainImage: hero12,
        description: 'Step into the multiverse with this Doctor Strange print. Magical design on a calming blue base.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'greenlantern-yellow',
        label: 'Green Lantern Yellow T Shirt',
        sub: 'DC Edition',
        price: 999,
        badge: 'Out Stocks',
        mainImage: hero13,
        description: 'A bold twist on the Green Lantern with a bright yellow background. Comfortable and unique.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 }
        ],
        colors: [
            { name: 'Yellow', image: yellowTshirt, hex: '#FFFF00' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'antman-black',
        label: 'Ant-Man Black T Shirt',
        sub: 'Marvel Edition',
        price: 899,
        badge: 'Limited Stocks',
        mainImage: hero14,
        description: 'Small hero, big style. Minimalist Ant-Man design in sharp black.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'hawkeye-blue',
        label: 'Hawkeye Blue T Shirt',
        sub: 'Marvel Edition',
        price: 999,
        badge: 'Limited Stocks',
        mainImage: hero15,
        description: 'Sharp aim, sharper style. Hawkeye design on a cool blue tee.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 }
        ],
        colors: [
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'aquaman-yellow',
        label: 'Aquaman Yellow T Shirt',
        sub: 'DC Edition',
        price: 1099,
        badge: 'Limited Stocks',
        mainImage: hero16,
        description: 'Rule the seas in style with this Aquaman yellow tee. Perfect for fans of the ocean king.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [
            { name: 'Yellow', image: yellowTshirt, hex: '#FFFF00' }
        ],
        neckDesigns: ['Round']
    }
];
