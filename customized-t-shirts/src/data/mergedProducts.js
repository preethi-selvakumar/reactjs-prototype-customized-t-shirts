import { allProducts } from './products';
import { animeProducts } from './animeProducts';
import { superHeroProducts } from './superHeroProducts';
import { glowProducts } from './glowProducts';
import { cartoonProducts } from './cartoonProducts';
import { sloganProducts } from './sloganProducts';
import { funnyProducts } from './funnyProducts';
import { shopProducts } from './shopProducts';

export const mergedProducts = [
    ...allProducts,
    ...animeProducts,
    ...superHeroProducts,
    ...glowProducts,
    ...cartoonProducts,
    ...sloganProducts,
    ...funnyProducts,
    ...shopProducts
];