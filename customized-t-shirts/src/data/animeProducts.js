// Import Anime T-Shirt images
import prod9 from '../assets/images/Anime/2.jpg';
import prod10 from '../assets/images/Anime/7.jpg';
import prod11 from '../assets/images/Anime/8.jpg';
import prod12 from '../assets/images/Anime/9.jpg';
import prod13 from '../assets/images/Anime/24.jpg';
import prod14 from '../assets/images/Anime/11.jpg';
import prod15 from '../assets/images/Anime/12.jpg';
import prod16 from '../assets/images/Anime/13.jpg';

import prod17 from '../assets/images/Anime/30.jpg';
import prod18 from '../assets/images/Anime/23.jpg';
import prod19 from '../assets/images/Anime/18.jpg';
import prod20 from '../assets/images/Anime/29.jpg';
import prod21 from '../assets/images/Anime/16.jpg';
import prod22 from '../assets/images/Anime/13.jpg';
import prod23 from '../assets/images/Anime/21.jpg';
import prod24 from '../assets/images/Anime/17.jpg';

// Import color images
import redTshirt from '../assets/images/red.jpg';
import blueTshirt from '../assets/images/blue.jpg';
import yellowTshirt from '../assets/images/yellow.jpg';
import blackTshirt from '../assets/images/black.jpg';

export const animeProducts = [
    {
        id: 'lady-attack-tshirt',
        label: 'Lady Attack T Shirt',
        sub: 'Anime Edition',
        price: 1099,
        badge: 'Limited Stocks',
        mainImage: prod9,
        description: 'Bold and powerful! This Lady Attack Anime T-shirt features sharp lines and stunning character art. A must-have for any anime enthusiast. Crafted with soft premium cotton for all-day comfort and durability.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 },
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' },
        ],
        neckDesigns: ['Round'],
    },
    {
        id: 'anime-blue-tshirt',
        label: 'Anime Blue T Shirt',
        sub: 'Anime Edition',
        price: 1199,
        badge: 'Out Stocks',
        mainImage: prod10,
        description: 'With its energetic character art and gradient color blend, this Anime Blue T-shirt is perfect for any anime event. Lightweight and breathable, it keeps you stylish and cool even on busy days.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 },
        ],
        colors: [
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' },
        ],
        neckDesigns: ['Round'],
    },
    {
        id: 'lady-anime-red',
        label: 'Lady Anime Red T Shirt',
        sub: 'Anime Edition',
        price: 999,
        badge: 'Limited Stocks',
        mainImage: prod11,
        description: 'Express your strength with this bold red Lady Anime print. Designed with comfort and character in mind. Perfect for fans who want to make a confident and stylish statement.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 },
            { size: 'XL', chest: 44, length: 30 },
        ],
        colors: [
            { name: 'Red', image: redTshirt, hex: '#FF0000' },
            { name: 'Black', image: blackTshirt, hex: '#000000' },
        ],
        neckDesigns: ['V Neck'],
    },
    {
        id: 'black-panel-anime',
        label: 'Black Panel Anime T Shirt',
        sub: 'Manga Panel Series',
        price: 999,
        badge: 'Limited Stocks',
        mainImage: prod12,
        description: 'Unique manga panel-style print in monochrome, perfect for manga lovers. A versatile tee that pairs effortlessly with casual or streetwear styles.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 },
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' },
        ],
        neckDesigns: ['Round'],
    },
    {
        id: 'flame-purple-anime',
        label: 'Purple Body T Shirt',
        sub: 'Limited Drop',
        price: 899,
        badge: 'Out Stocks',
        mainImage: prod13,
        description: 'Featuring a flame crown and pastel background, this shirt gives chill vibes with fiery attitude. Designed for comfort with eye-catching anime flair.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 },
        ],
        colors: [
            { name: 'Purple', image: blueTshirt, hex: '#800080' },
        ],
        neckDesigns: ['Round'],
    },
    {
        id: 'kento-tshirt',
        label: 'Kento T Shirt',
        sub: 'Street Style',
        price: 899,
        badge: 'Limited Stocks',
        mainImage: prod14,
        description: 'Show off your calm and confident side with this minimalist character print of Kento. Sharp, clean, and cool. Ideal for layering or wearing solo.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 },
        ],
        colors: [
            { name: 'White', image: yellowTshirt, hex: '#FFFFFF' },
        ],
        neckDesigns: ['Round'],
    },
    {
        id: 'glow-dazai-white',
        label: 'Glow-in-Night T Shirt',
        sub: 'Glow Series',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: prod15,
        description: 'A Dazai-themed glow-in-the-dark T-shirt that radiates mystery and night energy. Stand out in style whether it’s day or night.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 },
        ],
        colors: [
            { name: 'White', image: yellowTshirt, hex: '#FFFFFF' },
        ],
        neckDesigns: ['Round'],
    },
    {
        id: 'lady-black-pink',
        label: 'Lady Black T Shirt',
        sub: 'Anime Aesthetic',
        price: 1099,
        badge: 'Limited Stocks',
        mainImage: prod16,
        description: 'Elegant character artwork combined with the charm of dark fashion. Simple yet striking. A timeless design that works for any casual occasion.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 },
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' },
        ],
        neckDesigns: ['Round'],
    },
    {
        id: 'gritty-anime-gray',
        label: 'Grey T Shirt',
        sub: 'Grunge Series',
        price: 1099,
        badge: 'Limited Stocks',
        mainImage: prod17,
        description: 'Grunge-style anime artwork in a charcoal finish. Perfect for streetwear lovers. Adds an edgy touch to your everyday look.',
        sizeChart: [
            { size: 'L', chest: 42, length: 29 },
        ],
        colors: [
            { name: 'Grey', image: blackTshirt, hex: '#808080' },
        ],
        neckDesigns: ['Round'],
    },
    {
        id: 'blue-back-anime',
        label: 'Blue Back T Shirt',
        sub: 'Anime Core',
        price: 999,
        badge: 'Out Stocks',
        mainImage: prod18,
        description: 'Clean blue with powerful back-print anime character. Eye-catching and bold. Ideal for both casual outings and anime conventions.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 },
        ],
        colors: [
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' },
        ],
        neckDesigns: ['Round'],
    },
    {
        id: 'gear5-anime-black',
        label: 'Black Anime Gear 5',
        sub: 'Gear Series',
        price: 1399,
        badge: 'Limited Stocks',
        mainImage: prod19,
        description: 'Gear 5 transformation in stunning color pop. This tee makes your fandom loud and proud. Built for fans who want style and comfort in one.',
        sizeChart: [
            { size: 'L', chest: 42, length: 29 },
            { size: 'XL', chest: 44, length: 30 },
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' },
        ],
        neckDesigns: ['Round'],
    },
    {
        id: 'demon-green-tshirt',
        label: 'Green and Black T Shirt',
        sub: 'Demon Edition',
        price: 899,
        badge: 'Limited Stocks',
        mainImage: prod20,
        description: 'Inspired by iconic characters. Rich green tones with katakana art. A bold choice for fans who love standing out.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 },
        ],
        colors: [
            { name: 'Green', image: blueTshirt, hex: '#00FF00' },
        ],
        neckDesigns: ['Round'],
    },
    {
        id: 'dazai-white-tshirt',
        label: 'Dazai T Shirt',
        sub: 'Anime Classic',
        price: 999,
        badge: 'Out Stocks',
        mainImage: prod21,
        description: 'A clean portrait of Dazai on premium fabric. Iconic, simple, and stylish. The perfect addition to any anime wardrobe.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 },
        ],
        colors: [
            { name: 'White', image: yellowTshirt, hex: '#FFFFFF' },
        ],
        neckDesigns: ['Round'],
    },
    {
        id: 'vibe-tshirt',
        label: 'Vibe T Shirt',
        sub: 'Pop Style',
        price: 799,
        badge: 'Limited Stocks',
        mainImage: prod22,
        description: 'Retro pop vibe with bright comic panels. Street-ready and full of color. Designed for comfort and to make a statement wherever you go.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 },
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' },
            { name: 'Pink', image: redTshirt, hex: '#FFC0CB' },
        ],
        neckDesigns: ['Round'],
    },
    {
        id: 'one-piece-black',
        label: 'One Piece Black T Shirt',
        sub: 'Pirate Series',
        price: 1399,
        badge: 'Limited Stocks',
        mainImage: prod23,
        description: 'Join the crew with this epic One Piece back print. Powerful design and perfect fit. A true collector’s piece for every One Piece fan.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 },
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' },
        ],
        neckDesigns: ['Round'],
    },
    {
        id: 'classic-anime-white',
        label: 'Classic Anime White T Shirt',
        sub: 'Signature Edition',
        price: 1199,
        badge: 'Limited Stocks',
        mainImage: prod24,
        description: 'Signature anime print with clean white base. A great mix of minimal and expressive. Easy to match with any style, making it a wardrobe essential.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 },
        ],
        colors: [
            { name: 'White', image: yellowTshirt, hex: '#FFFFFF' },
        ],
        neckDesigns: ['Round'],
    },
];
