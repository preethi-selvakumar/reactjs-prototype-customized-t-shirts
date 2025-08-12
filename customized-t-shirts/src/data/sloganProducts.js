// Import Slogan T-Shirt images
import slogan1 from '../assets/images/Slogan/1.jpg';
import slogan2 from '../assets/images/Slogan/2.jpg';
import slogan3 from '../assets/images/Slogan/3.png';
import slogan4 from '../assets/images/Slogan/4.jpg';
import slogan5 from '../assets/images/Slogan/6.jpg';
import slogan6 from '../assets/images/Slogan/5.jpg';
import slogan7 from '../assets/images/Slogan/8.jpg';
import slogan8 from '../assets/images/Slogan/9.jpg';

import slogan9 from '../assets/images/Slogan/11.jpg';
import slogan10 from '../assets/images/Slogan/12.jpg';
import slogan11 from '../assets/images/Slogan/20.jpg';
import slogan12 from '../assets/images/Slogan/18.jpg';;

// Import color images 
import redTshirt from '../assets/images/red.jpg';
import blueTshirt from '../assets/images/blue.jpg';
import yellowTshirt from '../assets/images/yellow.jpg';
import blackTshirt from '../assets/images/black.jpg';

export const sloganProducts = [
    {
        id: 'superman-tee',
        label: 'Superman T Shirt',
        sub: 'Premium Shirt',
        price: 699,
        badge: 'Limited Stocks',
        mainImage: slogan1,
        description: 'White T-shirt with the humorous slogan "Just Remember If We Get Caught, You’re Deaf And I Don’t Speak English." Perfect for fun-loving personalities.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 }
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' },
            { name: 'Red', image: redTshirt, hex: '#FF0000' },
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' },
            { name: 'Yellow', image: yellowTshirt, hex: '#FFFF00' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'super-hero-tee',
        label: 'Super Hero T Shirt',
        sub: 'Premium Shirt',
        price: 599,
        badge: 'Out Stocks',
        mainImage: slogan2,
        description: 'Black T-shirt with the bold slogan "Only GOD can judge ME, who the hell are you?" for confident personalities.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 }
        ],
        colors: [
            { name: 'Red', image: redTshirt, hex: '#FF0000' },
            { name: 'Black', image: blackTshirt, hex: '#000000' },
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'born-to-win',
        label: 'Born To Win T Shirt',
        sub: 'Premium Shirt',
        price: 899,
        badge: 'Limited Stocks',
        mainImage: slogan3,
        description: 'Black T-shirt with bold white text reading "BORN TO WIN", inspiring motivation and confidence.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [
            { name: 'Yellow', image: yellowTshirt, hex: '#FFFF00' },
            { name: 'Black', image: blackTshirt, hex: '#000000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'yellow-slogan',
        label: 'Yellow Slogan T Shirt',
        sub: 'Premium Shirt',
        price: 999,
        badge: 'Limited Stocks',
        mainImage: slogan4,
        description: 'Bright yellow T-shirt with a stylish slogan in black script font, making a bold casual statement.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' },
            { name: 'Black', image: blackTshirt, hex: '#000000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'keep-calm',
        label: 'Keep Calm T Shirt',
        sub: 'Premium Shirt',
        price: 599,
        badge: 'Out Stocks',
        mainImage: slogan5,
        description: 'Hot pink T-shirt with the iconic phrase "KEEP CALM AND PLAY ON", perfect for relaxed yet vibrant vibes.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [
            { name: 'Red', image: redTshirt, hex: '#FF0000' },
            { name: 'Black', image: blackTshirt, hex: '#000000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'only-god-blue',
        label: 'Only GOD Blue T Shirt',
        sub: 'Premium Shirt',
        price: 499,
        badge: 'Limited Stocks',
        mainImage: slogan6,
        description: 'Sky blue T-shirt with the confident slogan "Only GOD can judge ME, who the hell are you?"',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'L', chest: 42, length: 29 }
        ],
        colors: [
            { name: 'Yellow', image: yellowTshirt, hex: '#FFFF00' },
            { name: 'Black', image: blackTshirt, hex: '#000000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'entry-late',
        label: 'Entry Late T Shirt',
        sub: 'Premium Shirt',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: slogan7,
        description: 'Dark green T-shirt with the witty slogan "ENTRY LATE, HOGA PAR GREAT HOGA!" for humor and self-confidence.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 }
        ],
        colors: [
            { name: 'Red', image: redTshirt, hex: '#FF0000' },
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' },
            { name: 'Black', image: blackTshirt, hex: '#000000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'modi-g',
        label: 'Only Modi G T Shirt',
        sub: 'Premium Shirt',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: slogan8,
        description: 'Black T-shirt with bold white slogan "NO 4G, NO 5G, ONLY MODI G", perfect for political humor lovers.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 }
        ],
        colors: [
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' },
            { name: 'Black', image: blackTshirt, hex: '#000000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'music-vinyl',
        label: 'Music Is Better T Shirt',
        sub: 'Premium Shirt',
        price: 599,
        badge: 'Out Stocks',
        mainImage: slogan9,
        description: 'Black T-shirt with the slogan "MUSIC IS BETTER ON VINYL, LIFE IS BETTER ON HOLIDAY", perfect for music lovers.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [
            { name: 'Red', image: redTshirt, hex: '#FF0000' },
            { name: 'Yellow', image: yellowTshirt, hex: '#FFFF00' },
            { name: 'Black', image: blackTshirt, hex: '#000000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'serial-chiller',
        label: 'Serial Chiller T Shirt',
        sub: 'Premium Shirt',
        price: 599,
        badge: 'Limited Stocks',
        mainImage: slogan10,
        description: 'Mustard yellow T-shirt with cute panda graphic and slogan "SERIAL CHILLER", perfect for laid-back vibes.',
        sizeChart: [
            { size: 'L', chest: 42, length: 29 }
        ],
        colors: [
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' },
            { name: 'Black', image: blackTshirt, hex: '#000000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'india-rocks',
        label: 'India Rocks T Shirt',
        sub: 'Premium Shirt',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: slogan11,
        description: 'Grey T-shirt with "INDIA ROCKS" text and tricolor flag emblem, celebrating patriotism in style.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [
            { name: 'Red', image: redTshirt, hex: '#FF0000' },
            { name: 'Black', image: blackTshirt, hex: '#000000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'harvard-university',
        label: 'Harvard University T Shirt',
        sub: 'Premium Shirt',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: slogan12,
        description: 'White T-shirt featuring the iconic Harvard University 1636 emblem, a classic collegiate style.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 }
        ],
        colors: [
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' },
            { name: 'Black', image: blackTshirt, hex: '#000000' }
        ],
        neckDesigns: ['Round']
    }
];


