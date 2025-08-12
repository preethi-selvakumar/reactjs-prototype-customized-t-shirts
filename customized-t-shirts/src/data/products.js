// Import home page featured product images 
import prod1 from '../assets/images/Super-hero/25.jpg';
import prod2 from '../assets/images/Super-hero/11.jpg';
import prod3 from '../assets/images/Slogan/4.jpg';
import prod4 from '../assets/images/Anime/24.jpg';
import prod5 from '../assets/images/t-shirt.png';
import prod6 from '../assets/images/Slogan/6.jpg';
import prod7 from '../assets/images/Anime/7.jpg';
import prod8 from '../assets/images/GID/12.jpg';

// Import product dedcription page color images 
import redTshirt from '../assets/images/red.jpg';
import blueTshirt from '../assets/images/blue.jpg';
import yellowTshirt from '../assets/images/yellow.jpg';
import blackTshirt from '../assets/images/black.jpg';

// product description page all product details are added in this array
export const allProducts = [
    {
        id: 'superman-tshirt',
        label: 'Superman T Shirt',
        sub: 'Premium Shirt',
        price: 699,
        badge: 'Limited Stocks',
        mainImage: prod1,
        description: 'Celebrate the superhero within you with this premium Superman T-shirt. Made from 100% pure cotton, it offers superior comfort for all-day wear. The fabric weight is 180 GSM, ensuring durability and a great feel. This is a must-have for every true fan of the Man of Steel.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 },
        ],
        colors: [
            { name: 'Red', image: redTshirt, hex: '#FF0000' },
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' },
        ],
        neckDesigns: ['Round'],
    },
    {
        id: 'super-hero-tshirt',
        label: 'Super Hero T Shirt',
        sub: 'Premium Shirt',
        price: 599,
        badge: 'Out Stocks',
        mainImage: prod2,
        description: 'Be your own hero with this stylish Super Hero T-shirt. Crafted from durable, high-quality cotton, it is perfect for any casual occasion. The unique design makes a bold statement, and the superior fabric gives you a smart, structured look. Ideal for showcasing your inner strength and style.',
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
        id: 'yellow-slogan-tshirt',
        label: 'Yellow Slogan T Shirt',
        sub: 'Premium Shirt',
        price: 899,
        badge: 'Limited Stocks',
        mainImage: prod3,
        description: 'Make a statement with this vibrant yellow slogan T-shirt. Its bright color and bold text will make your look stand out from the crowd. Made from 100% cotton, it is comfortable for everyday use and pairs perfectly with jeans or any casual pants. Wear your thoughts and style with confidence.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 },
        ],
        colors: [
            { name: 'Yellow', image: yellowTshirt, hex: '#FFFF00' },
            { name: 'Black', image: blackTshirt, hex: '#000000' },
        ],
        neckDesigns: ['Round'],
    },
    {
        id: 'black-anime-tshirt',
        label: 'Black Anime T Shirt',
        sub: 'Premium Shirt',
        price: 999,
        badge: 'Limited Stocks',
        mainImage: prod4,
        description: 'The Lady Anime Printed T-shirt is an essential piece of summer apparel. This high-quality T-shirt combines the durability of 100% cotton with a trendy design to create a fashionable, comfortable look. The half sleeves, round neck, and classic color combos give it an added level of style. Perfect for any occasion, this breathable shirt will keep you cool during those hot summer days.',
        sizeChart: [
            { size: 'S', chest: 40, length: 28 },
            { size: 'M', chest: 42, length: 29 },
            { size: 'L', chest: 44, length: 30 },
            { size: 'XL', chest: 46, length: 31.5 },
        ],
        colors: [
            { name: 'Red', image: redTshirt, hex: '#FF0000' },
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' },
            { name: 'Yellow', image: yellowTshirt, hex: '#FFFF00' },
            { name: 'Black', image: blackTshirt, hex: '#000000' },
        ],
        neckDesigns: ['Round', 'V Neck'],
    },
    {
        id: 'black-slogan-tshirt',
        label: 'Black Slogan T Shirt',
        sub: 'Premium Shirt',
        price: 599,
        badge: 'Out Stocks',
        mainImage: prod5,
        description: 'This black slogan T-shirt adds a bold touch to your everyday style. The high-quality cotton fabric ensures long-lasting color and durability. Its simple yet powerful slogan helps you express your personality effortlessly. It looks great when paired with casual jeans or shorts.',
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
        id: 'pink-slogan-tshirt',
        label: 'Pink Slogan T Shirt',
        sub: 'Premium Shirt',
        price: 499,
        badge: 'Limited Stocks',
        mainImage: prod6,
        description: 'Elevate your style with this beautiful pink slogan T-shirt. Made from 100% soft cotton fabric, it feels gentle and comfortable against your skin. The unique slogan adds a touch of personality and charm, making it a perfect choice for those who love to stand out with vibrant colors.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 },
        ],
        colors: [
            { name: 'Red', image: redTshirt, hex: '#FF0000' },
        ],
        neckDesigns: ['Round'],
    },
    {
        id: 'blue-pink-anime-tshirt',
        label: 'Blue pink Animet T Shirt',
        sub: 'Premium Shirt',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: prod7,
        description: 'Exclusively designed for anime fans, this blue-and-pink T-shirt will give your style a unique aesthetic. The modern anime graphic is printed on high-quality fabric, and its vibrant colors are sure to catch everyone\'s attention. It is built to last, ensuring you can show off your fandom for a long time.',
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'M', chest: 40, length: 28 },
        ],
        colors: [
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' },
            { name: 'Red', image: redTshirt, hex: '#FF0000' },
        ],
        neckDesigns: ['Round'],
    },
    {
        id: 'glow-in-night-tshirt',
        label: 'Glow in night T Shirt',
        sub: 'Premium Shirt',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: prod8,
        description: 'Stand out at night with this amazing Glow in the Night T-shirt! It features a special printed design that absorbs light during the day and glows brightly in the dark. The 100% soft cotton fabric offers maximum comfort. This is the perfect choice for parties and nighttime events where you want to make a unique impression.',
        sizeChart: [
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 },
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' },
            { name: 'Red', image: redTshirt, hex: '#FF0000' },
        ],
        neckDesigns: ['Round'],
    },
];