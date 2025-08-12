// Import Cartoon T-Shirt images
import cartoon1 from '../assets/images/Cartoon/1.jpg';
import cartoon2 from '../assets/images/Cartoon/2.jpg';
import cartoon3 from '../assets/images/Cartoon/4.jpg';
import cartoon4 from '../assets/images/Cartoon/5.jpg';
import cartoon5 from '../assets/images/Cartoon/6.jpg';
import cartoon6 from '../assets/images/Cartoon/7.jpg';
import cartoon7 from '../assets/images/Cartoon/8.jpg';
import cartoon8 from '../assets/images/Cartoon/9.jpg';

import cartoon9 from '../assets/images/Cartoon/10.jpg';
import cartoon10 from '../assets/images/Cartoon/11.jpg';
import cartoon11 from '../assets/images/Cartoon/12.jpg';
import cartoon12 from '../assets/images/Cartoon/17.jpg';
import cartoon13 from '../assets/images/Cartoon/20.jpg';
import cartoon14 from '../assets/images/Cartoon/25.jpg';
import cartoon15 from '../assets/images/Cartoon/23.jpg';
import cartoon16 from '../assets/images/Cartoon/22.jpg';

// Import color images 
import redTshirt from '../assets/images/red.jpg';
import blueTshirt from '../assets/images/blue.jpg';
import yellowTshirt from '../assets/images/yellow.jpg';
import blackTshirt from '../assets/images/black.jpg';

export const cartoonProducts = [
    {
        id: 'mickey-mouse-standing',
        label: 'Mickey Mouse T Shirt',
        sub: 'Premium Shirt',
        price: 699,
        badge: 'Limited Stocks',
        mainImage: cartoon1,
        description: 'Show your love for the timeless classic with this charming Mickey Mouse tee. A comfortable and stylish pick for everyday wear, perfect for Disney fans.',
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
        id: 'mickey-mouse-classic',
        label: 'Mickey Mouse Classic T Shirt',
        sub: 'Premium Shirt',
        price: 599,
        badge: 'Out Stocks',
        mainImage: cartoon2,
        description: 'A classic Mickey Mouse design on a crisp white tee. Simple, iconic, and comfortable for any casual outing. A must-have for every cartoon lover.',
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
        id: 'snoopy-woodstock',
        label: 'Snoopy & Woodstock T Shirt',
        sub: 'Premium Shirt',
        price: 899,
        badge: 'Limited Stocks',
        mainImage: cartoon3,
        description: 'Embrace friendship with this adorable Snoopy and Woodstock design on a comfy pink tee. A fun and cheerful shirt for fans of the Peanuts gang.',
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
        id: 'tom-jerry-fighting',
        label: 'Tom & Jerry T Shirt',
        sub: 'Premium Shirt',
        price: 999,
        badge: 'Limited Stocks',
        mainImage: cartoon4,
        description: 'Relive the classic cat-and-mouse chase with this vibrant Tom & Jerry tee. Perfect for fans of timeless animated mischief and fun.',
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
        id: 'powerpuff-girls',
        label: 'Powerpuff Girls T Shirt',
        sub: 'Premium Shirt',
        price: 599,
        badge: 'Out Stocks',
        mainImage: cartoon5,
        description: 'Unleash your inner superhero with this energetic Powerpuff Girls tee. Blossom, Bubbles, and Buttercup are ready to save the day on your shirt!',
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
        id: 'panda-bear-hug',
        label: 'Panda Hug T Shirt',
        sub: 'Premium Shirt',
        price: 499,
        badge: 'Limited Stocks',
        mainImage: cartoon6,
        description: 'A heartwarming design featuring a cute panda hugging a bear. This cozy tee is perfect for those who love adorable animal graphics.',
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
        id: 'harry-potter-back-print',
        label: 'Harry Potter Back Print T Shirt',
        sub: 'Premium Shirt',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: cartoon7,
        description: 'Step into the wizarding world with this unique Harry Potter back print tee. Featuring a stylized character, it\'s a subtle nod for true fans.',
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
        id: 'boss-baby',
        label: 'Boss Baby T Shirt',
        sub: 'Premium Shirt',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: cartoon8,
        description: 'Rule the playroom with this adorable Boss Baby graphic tee. A fun and playful shirt for the little boss in your life, or fans of the movie.',
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
        id: 'donald-daisy-goofy-mickey',
        label: 'Mickey & Friends T Shirt',
        sub: 'Premium Shirt',
        price: 699,
        badge: 'Limited Stocks',
        mainImage: cartoon9,
        description: 'Gather the gang with this fun tee featuring Mickey, Donald, Daisy, and Goofy. A vibrant print for lovers of classic Disney characters.',
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
        id: 'olive-oilt-shirt',
        label: 'Olive Oyl T Shirt',
        sub: 'Premium Shirt',
        price: 599,
        badge: 'Out Stocks',
        mainImage: cartoon10,
        description: 'Sport a vintage vibe with this Olive Oyl tee, featuring Popeye\'s classic sweetheart. A unique and playful addition to your wardrobe.',
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
        id: 'panda-pink-tee',
        label: 'Pink Panda T Shirt',
        sub: 'Premium Shirt',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: cartoon11,
        description: 'An adorable panda graphic on a soft pink long-sleeve tee. Perfect for adding a cute and cozy touch to your casual style.',
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
        id: 'shin-chan-kiss',
        label: 'Shin-chan Kiss T Shirt',
        sub: 'Premium Shirt',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: cartoon12,
        description: 'A playful Shin-chan design featuring a mischievous kiss. This tee captures the fun-loving spirit of the popular anime character.',
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
        id: 'popeye-standing',
        label: 'Popeye The Sailor Man T Shirt',
        sub: 'Premium Shirt',
        price: 599,
        badge: 'Out Stocks',
        mainImage: cartoon13,
        description: 'Strong to the finich! This Popeye the Sailor Man tee features the iconic spinach-loving character, ready for adventure.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [
            { name: 'Yellow', image: yellowTshirt, hex: '#FFFF00' },
            { name: 'Black', image: blackTshirt, hex: '#000000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'tom-face',
        label: 'Tom Cat Face T Shirt',
        sub: 'Premium Shirt',
        price: 499,
        badge: 'Limited Stocks',
        mainImage: cartoon14,
        description: 'A close-up of Tom the cat from Tom & Jerry, capturing his classic exasperated expression. A fun tee for fans of the duo.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 }
        ],
        colors: [
            { name: 'Red', image: redTshirt, hex: '#FF0000' },
            { name: 'Black', image: blackTshirt, hex: '#000000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'steve-jobs-skull',
        label: 'Steve Jobs Skull T Shirt',
        sub: 'Premium Shirt',
        price: 999,
        badge: 'Limited Stocks',
        mainImage: cartoon15,
        description: 'A cool and edgy skull graphic inspired by Steve Jobs. A unique shirt for tech enthusiasts and fans of iconic figures.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' },
            { name: 'Black', image: blackTshirt, hex: '#000000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'woody-woodpecker',
        label: 'Woody Woodpecker T Shirt',
        sub: 'Premium Shirt',
        price: 599,
        badge: 'Limited Stocks',
        mainImage: cartoon16,
        description: 'Bring some vintage cartoon fun with this Woody Woodpecker tee, featuring the mischievous woodpecker in vibrant colors.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 }
        ],
        colors: [
            { name: 'Red', image: redTshirt, hex: '#FF0000' },
            { name: 'Black', image: blackTshirt, hex: '#000000' }
        ],
        neckDesigns: ['Round']
    }
];

