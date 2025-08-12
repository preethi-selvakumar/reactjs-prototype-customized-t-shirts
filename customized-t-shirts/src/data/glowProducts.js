// Import Glow T-Shirt images
import glow1 from '../assets/images/GID/2.jpg';
import glow2 from '../assets/images/GID/3.jpg';
import glow3 from '../assets/images/GID/5.jpg';
import glow4 from '../assets/images/GID/6.jpg';
import glow5 from '../assets/images/GID/7.jpg';
import glow6 from '../assets/images/GID/7.jpg';
import glow7 from '../assets/images/GID/12.jpg';
import glow8 from '../assets/images/GID/13.jpg';

import glow9 from '../assets/images/GID/11.jpg';
import glow10 from '../assets/images/GID/16.jpg';
import glow11 from '../assets/images/GID/2.jpg';
import glow12 from '../assets/images/GID/14.jpg';
import glow13 from '../assets/images/GID/15.jpg';
import glow14 from '../assets/images/GID/19.jpg';
import glow15 from '../assets/images/GID/20.jpg';
import glow16 from '../assets/images/GID/18.jpg';

// Import color images 
import redTshirt from '../assets/images/red.jpg';
import blueTshirt from '../assets/images/blue.jpg';
import yellowTshirt from '../assets/images/yellow.jpg';
import blackTshirt from '../assets/images/black.jpg';

export const glowProducts = [
    {
        id: 'superman-green',
        label: 'Superman T Shirt',
        sub: 'Premium Shirt',
        price: 699,
        badge: 'Limited Stocks',
        mainImage: glow1,
        description: 'Stand out day or night with this glow-in-the-dark Superman tee. The bold emblem lights up your style, perfect for fans who never blend into the crowd.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 }
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' },
            { name: 'Red', image: redTshirt, hex: '#FF0000' },
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'super-hero-green',
        label: 'Super Hero T Shirt',
        sub: 'Premium Shirt',
        price: 599,
        badge: 'Out Stocks',
        mainImage: glow2,
        description: 'A minimal silhouette with glowing superhero charm. Designed to impress in daylight and shine brilliantly in the dark.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 }
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' },
            { name: 'Red', image: redTshirt, hex: '#FF0000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'yellow-slogan',
        label: 'Yellow Slogan T Shirt',
        sub: 'Premium Shirt',
        price: 899,
        badge: 'Limited Stocks',
        mainImage: glow3,
        description: 'Brighten your nights with this fierce glow slogan design. Perfect for parties, concerts, and night rides.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' },
            { name: 'Yellow', image: yellowTshirt, hex: '#FFFF00' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'black-anime',
        label: 'Black Anime T Shirt',
        sub: 'Premium Shirt',
        price: 999,
        badge: 'Limited Stocks',
        mainImage: glow4,
        description: 'Anime meets neon in this electrifying glow tee. The perfect pick for late-night anime marathons or comic conventions.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [{ name: 'Black', image: blackTshirt, hex: '#000000' }],
        neckDesigns: ['Round']
    },
    {
        id: 'black-slogan',
        label: 'Black Slogan T Shirt',
        sub: 'Premium Shirt',
        price: 599,
        badge: 'Out Stocks',
        mainImage: glow5,
        description: 'Let your back do the talking with this bold glowing slogan design. A statement piece for bold personalities.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [{ name: 'Black', image: blackTshirt, hex: '#000000' }],
        neckDesigns: ['Round']
    },
    {
        id: 'pink-slogan',
        label: 'Pink Slogan T Shirt',
        sub: 'Premium Shirt',
        price: 499,
        badge: 'Limited Stocks',
        mainImage: glow6,
        description: 'A fierce glowing skull graphic that glows in the dark. A must-have for edgy fashion lovers.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'L', chest: 42, length: 29 }
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' },
            { name: 'Red', image: redTshirt, hex: '#FF0000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'blue-pink-anime',
        label: 'Blue Pink Anime T Shirt',
        sub: 'Premium Shirt',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: glow7,
        description: 'Colorful and luminous anime-inspired smiley that pops both day and night.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 }
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' },
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'glow-night',
        label: 'Glow in Night T Shirt',
        sub: 'Premium Shirt',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: glow8,
        description: 'A futuristic neon blade-inspired print that glows vividly in the dark. Built for bold, night-loving souls.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 }
        ],
        colors: [{ name: 'Black', image: blackTshirt, hex: '#000000' }],
        neckDesigns: ['Round']
    },

    // Second batch
    {
        id: 'superman-back',
        label: 'Superman T Shirt',
        sub: 'Premium Shirt',
        price: 699,
        badge: 'Limited Stocks',
        mainImage: glow9,
        description: 'Oversized streetwear Superman with a playful glow twist on the back. A unique take for urban fashion lovers.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [{ name: 'Black', image: blackTshirt, hex: '#000000' }],
        neckDesigns: ['Round']
    },
    {
        id: 'super-hero-chicken',
        label: 'Super Hero T Shirt',
        sub: 'Premium Shirt',
        price: 599,
        badge: 'Out Stocks',
        mainImage: glow10,
        description: 'PUBG-themed glowing "Winner Winner Chicken Dinner" tee. Perfect for gamers who like to wear their victories.',
        sizeChart: [
            { size: 'L', chest: 42, length: 29 }
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' },
            { name: 'Yellow', image: yellowTshirt, hex: '#FFFF00' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'glow-ring',
        label: 'Glow in Night Ring T Shirt',
        sub: 'Premium Shirt',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: glow11,
        description: 'A hypnotic glow ring design that looks stunning under UV or low light. A conversation starter for sure.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' },
            { name: 'Red', image: redTshirt, hex: '#FF0000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'glow-feather',
        label: 'Glow in Night Feather T Shirt',
        sub: 'Premium Shirt',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: glow12,
        description: 'Ethereal angel feather wings that shine brilliantly in the dark. A celestial touch for your wardrobe.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 }
        ],
        colors: [{ name: 'Black', image: blackTshirt, hex: '#000000' }],
        neckDesigns: ['Round']
    },
    {
        id: 'black-slogan-flower',
        label: 'Black Slogan T Shirt',
        sub: 'Premium Shirt',
        price: 599,
        badge: 'Out Stocks',
        mainImage: glow13,
        description: 'Floral skull glowing print on the back. For rebels with a soft side.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [{ name: 'Black', image: blackTshirt, hex: '#000000' }],
        neckDesigns: ['Round']
    },
    {
        id: 'pink-skeleton',
        label: 'Pink Slogan T Shirt',
        sub: 'Premium Shirt',
        price: 499,
        badge: 'Limited Stocks',
        mainImage: glow14,
        description: 'Skeleton ribcage design in glow effect — fun, spooky, and perfect for night events.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 }
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' },
            { name: 'Red', image: redTshirt, hex: '#FF0000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'blue-superman',
        label: 'Blue Pink Anime T Shirt',
        sub: 'Premium Shirt',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: glow15,
        description: 'Glowing Superman emblem with a vibrant neon effect. A bold twist on the classic logo.',
        sizeChart: [
            { size: 'L', chest: 42, length: 29 }
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' },
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'glow-skeleton-butterfly',
        label: 'Glow in Night Skeleton T Shirt',
        sub: 'Premium Shirt',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: glow16,
        description: 'Butterfly-skeleton hybrid glow design that’s both eerie and artistic.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [{ name: 'Black', image: blackTshirt, hex: '#000000' }],
        neckDesigns: ['Round']
    }
];