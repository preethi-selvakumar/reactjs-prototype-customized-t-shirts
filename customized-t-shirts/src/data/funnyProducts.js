// Import Funny T-Shirt images
import funny1 from '../assets/images/Funny/1.jpg';
import funny2 from '../assets/images/Funny/4.jpg';
import funny3 from '../assets/images/Funny/5.jpg';
import funny4 from '../assets/images/Funny/6.jpg';
import funny5 from '../assets/images/Funny/7.jpg';
import funny6 from '../assets/images/Funny/8.jpg';
import funny7 from '../assets/images/Funny/2.jpg';
import funny8 from '../assets/images/Funny/9.jpg';
import funny9 from '../assets/images/Funny/10.jpg';
import funny10 from '../assets/images/Funny/11.jpg';
import funny11 from '../assets/images/Funny/12.jpg';
import funny12 from '../assets/images/Funny/13.jpg';

// Import color images 
import redTshirt from '../assets/images/red.jpg';
import blueTshirt from '../assets/images/blue.jpg';
import yellowTshirt from '../assets/images/yellow.jpg';
import blackTshirt from '../assets/images/black.jpg';

export const funnyProducts = [
    {
        id: 'superman-tee',
        label: 'Superman T Shirt',
        sub: 'Premium Shirt',
        price: 699,
        badge: 'Limited Stocks',
        mainImage: funny1,
        description: 'White T-shirt featuring a cartoon Superman drinking from a bottle. Fun and quirky design for superhero fans.',
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
        mainImage: funny2,
        description: 'Realistic 3D print T-shirt of a monkey face with a surprised expression. Eye-catching and fun.',
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
        id: 'yellow-slogan-tee',
        label: 'Yellow Slogan T Shirt',
        sub: 'Premium Shirt',
        price: 899,
        badge: 'Limited Stocks',
        mainImage: funny3,
        description: 'White T-shirt with cartoon toast slices and the phrase "I\'m Gonna Crumb" in yellow print.',
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
        id: 'black-anime-tee',
        label: 'Black Anime T Shirt',
        sub: 'Premium Shirt',
        price: 999,
        badge: 'Limited Stocks',
        mainImage: funny4,
        description: 'Black oversized T-shirt featuring oyster and lemon anime art. Stylish streetwear look.',
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
        id: 'black-slogan-tee',
        label: 'Black Slogan T Shirt',
        sub: 'Premium Shirt',
        price: 599,
        badge: 'Out Stocks',
        mainImage: funny5,
        description: 'White T-shirt with pop art comic panel of a woman in thought. Retro and expressive design.',
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
        id: 'pink-slogan-tee',
        label: 'Pink Slogan T Shirt',
        sub: 'Premium Shirt',
        price: 499,
        badge: 'Limited Stocks',
        mainImage: funny6,
        description: 'White T-shirt featuring red M&M character with an American flag cap graphic. Fun and playful.',
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
        id: 'blue-pink-animet-tee',
        label: 'Blue pink Animet T Shirt',
        sub: 'Premium Shirt',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: funny7,
        description: 'Brown T-shirt with a cow graphic and the text "I\'m not mad... just very disappointed".',
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
        id: 'glow-night-tee',
        label: 'Glow in night T Shirt',
        sub: 'Premium Shirt',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: funny8,
        description: 'Black T-shirt featuring Snoopy with text "Hi Mom You Are Awesome". Glow-in-the-dark print.',
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
        id: 'black-slogan-tee2',
        label: 'Black Slogan T Shirt',
        sub: 'Premium Shirt',
        price: 599,
        badge: 'Out Stocks',
        mainImage: funny9,
        description: 'Black T-shirt featuring an AT-AT Walker illustration holding a pink balloon. Geeky and cute.',
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
        id: 'pink-slogan-tee2',
        label: 'Pink Slogan T Shirt',
        sub: 'Premium Shirt',
        price: 499,
        badge: 'Limited Stocks',
        mainImage: funny10,
        description: 'White T-shirt with meme dog image and text "I am about to get real silly".',
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
        id: 'blue-pink-animet-tee2',
        label: 'Blue pink Animet T Shirt',
        sub: 'Premium Shirt',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: funny11,
        description: 'Green T-shirt with cartoon cat lying down and text "I hate mornings".',
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
        id: 'glow-night-tee2',
        label: 'Glow in night T Shirt',
        sub: 'Premium Shirt',
        price: 1299,
        badge: 'Limited Stocks',
        mainImage: funny12,
        description: 'White T-shirt with a cactus and the text "Can\'t touch this". Glow-in-the-dark print.',
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
