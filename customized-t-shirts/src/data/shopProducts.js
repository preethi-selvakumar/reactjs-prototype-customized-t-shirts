// Import Shop T-shirt images
import shop1 from '../assets/images/shop1.png';
import shop2 from '../assets/images/Cartoon/18.jpg';
import shop3 from '../assets/images/Cartoon/25.jpg';
import shop4 from '../assets/images/Slogan/6.jpg';
import shop5 from '../assets/images/Anime/23.jpg';
import shop6 from '../assets/images/Slogan/17.jpg';

// Import color images
import redTshirt from '../assets/images/red.jpg';
import blueTshirt from '../assets/images/blue.jpg';
import yellowTshirt from '../assets/images/yellow.jpg';
import blackTshirt from '../assets/images/black.jpg';

export const shopProducts = [
    {
        id: 'caroon-tshirt',
        label: 'Caroon T Shirt',
        sub: 'Premium Hoodie',
        price: 699,
        badge: 'Out Stocks',
        mainImage: shop1,
        description: 'A purple hoodie with a cute cartoon bear graphic on the back, perfect for a casual and fun look.',
        tags: ['Mens T shirt', 'Cartoon'],
        sizeChart: [
            { size: 'M', chest: 40, length: 28 }
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'pikachu-tshirt',
        label: 'Pikachu T Shirt',
        sub: 'Premium Shirt',
        price: 599,
        badge: 'Limited Stocks',
        mainImage: shop2,
        description: 'A dark blue t-shirt featuring a large, vibrant graphic of the Pokemon character Pikachu.',
        tags: ['Mens T shirt', 'Anime'],
        sizeChart: [
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 }
        ],
        colors: [
            { name: 'Red', image: redTshirt, hex: '#FF0000' },
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'tom-tshirt',
        label: 'Tom T Shirt',
        sub: 'Premium Shirt',
        price: 499,
        badge: 'Limited Stocks',
        mainImage: shop3,
        description: 'A white t-shirt with a detailed cartoon graphic of the character Tom from Tom and Jerry.',
        tags: ['Womens T shirt', 'Cartoon'],
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
        id: 'keep-calm-tshirt',
        label: 'Slogan Pink T Shirt',
        sub: 'Premium Shirt',
        price: 799,
        badge: 'Limited Stocks',
        mainImage: shop4,
        description: 'A vibrant pink t-shirt with a bold white slogan "KEEP CALM AND PLAY ON".',
        tags: ['Womens T shirt', 'Slogan', 'Funny'],
        sizeChart: [
            { size: 'S', chest: 38, length: 27 },
            { size: 'L', chest: 42, length: 29 }
        ],
        colors: [
            { name: 'Red', image: redTshirt, hex: '#FF0000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'gray-anime-tshirt',
        label: 'Gray Anime T Shirt',
        sub: 'Premium T-shirt',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: shop5,
        description: 'A dark gray, washed-out t-shirt with a detailed black and white anime character graphic.',
        tags: ['Mens T shirt', 'Anime'],
        sizeChart: [
            { size: 'M', chest: 40, length: 28 },
            { size: 'L', chest: 42, length: 29 }
        ],
        colors: [
            { name: 'Black', image: blackTshirt, hex: '#000000' }
        ],
        neckDesigns: ['Round']
    },
    {
        id: 'slogan-tshirt',
        label: 'Slogan T Shirt',
        sub: 'Premium Shirt',
        price: 799,
        badge: 'Limited Stocks',
        mainImage: shop6,
        description: 'A beige t-shirt with the slogan "why not today" in elegant script font.',
        tags: ['Womens T shirt', 'Slogan', 'Funny'],
        sizeChart: [
            { size: 'S', chest: 38, length: 27 }
        ],
        colors: [
            { name: 'Yellow', image: yellowTshirt, hex: '#FFFF00' },
            { name: 'Blue', image: blueTshirt, hex: '#0000FF' }
        ],
        neckDesigns: ['Round']
    }
];