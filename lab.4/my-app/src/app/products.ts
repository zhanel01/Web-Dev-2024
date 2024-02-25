export interface Product {
  id: number;
  name: string;
  price: number; 
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  url:string;
  description: string;
}

export const products = [
  {
    id: 1,
    name: '1025 Dokdo Toner',
    price: 4300,
    image:'https://roundlab.com/cdn/shop/files/1025-dokdo-toner-round-lab-1_900x.jpg?v=1687196657',
    rating: { rate: 4.9, count: 140 },
    url:'https://kaspi.kz/shop/p/round-lab-toner-1025-dokdo-toner-200-ml-104770477/?c=750000000:%20undefined',
    description:
      'Outstanding toner exfoliates dead skin cells and leaves skin replenished with long lasting moisture. Experience simple but exceptional skincare everyday.',
  },
  {
    id: 2,
    name: '1025 Dokdo Cleanser',
    price: 6000,
    image:'https://roundlab.com/cdn/shop/files/1025-dokdo-cleanser-round-lab-3.jpg?v=1687288383',
    rating: { rate: 4.5, count: 120 },
    url:'https://kaspi.kz/shop/p/round-lab-mjagkaja-penka-dlja-umyvanija-1025-dokdo-cleanser-penka-150-ml-115419628/?c=750000000',
    description:
      'Slightly acidic (pH 5.0 - 6.0), foamy and creamy cleanser purifies and removes excess sebum without over-drying. It clears away impurities and helps the skin maintain a healthy moisture balance.',
  },
  {
    id: 3,
    name: 'Birch Moisturizing Sheet Mask',
    price: 3000,
    image:'https://roundlab.com/cdn/shop/files/birch-moisturizing-sheet-mask-round-lab-1_900x.png?v=1687196762',
    rating: { rate: 4.7, count: 130 },
    url:'https://kaspi.kz/shop/p/round-lab-tkanevaja-birch-juice-moisturizing-mask-25-ml-105258541/?c=750000000',
    description:
      'Ampoule in a mask - intensive moisture delivered through Birch Sap and Hyaluronic Acid. A great supply of hydration and moisture retention.',
  },
  {
    id: 4,
    name: 'Birch Moisturizing Cream',
    price: 11000,
    image:'https://roundlab.com/cdn/shop/files/birch-moisturizing-cream-round-lab-1_900x.jpg?v=1687196692',
    rating: { rate: 4.4, count: 170 },
    url:'https://kaspi.kz/shop/p/round-lab-toner-1025-dokdo-toner-200-ml-104770477/?c=750000000:%20undefined',
    description:
      'A gentle, well-rounded moisturizer for total moisture care and skin barrier strengthening.',
  },
  {
    id: 5,
    name: 'Soybean Nourishing Cleansing Oil',
    price: 7500,
    image:'https://roundlab.com/cdn/shop/files/80_900x.png?v=1702664340',
    rating: { rate: 4.9, count: 120 },
    url:'https://kaspi.kz/shop/p/round-lab-toner-1025-dokdo-toner-200-ml-104770477/?c=750000000:%20undefined',
    description:
      'Crafted from a blend of natural oils such as avocado, grapeseed, evening primrose, and meadowfoam seed, this cleansing oil nurtures and cleanses, providing soothing comfort.',
  },
  {
    id: 6,
    name: 'Soybean Nourishing Cream',
    price: 8000,
    image:'https://roundlab.com/cdn/shop/files/soybean-nourishing-cream-round-lab-1_900x.png?v=1687196719',
    rating: { rate: 4.5, count: 120 },
    url:'https://kaspi.kz/shop/p/round-lab-toner-1025-dokdo-toner-200-ml-104770477/?c=750000000:%20undefined',
    description:
      'Packed with nutrients from Black Soy Bean, Ceramide and Adenosine, experience intensive moisture supply without the stickiness.',
  },
  {
    id: 7,
    name: 'Pine Calming Cica Cleanser',
    price: 4500,
    image:'https://roundlab.com/cdn/shop/files/PCC4_900x.png?v=1689883728',
    rating: { rate: 4.6, count: 120 },
    url:'https://kaspi.kz/shop/p/round-lab-toner-1025-dokdo-toner-200-ml-104770477/?c=750000000:%20undefined',
    description:
      'This cleanser has a dense foam bubble texture help to cleanse the skin refreshingly and cleanly by smoothly filling the skin.',
  },
  {
    id: 8,
    name: 'Birch Moisturizing Soothing Gel',
    price: 6990,
    image:'https://roundlab.com/cdn/shop/files/3_e61f5927-a3e2-4729-934a-4122a88ea091_900x.png?v=1691695620',
    rating: { rate: 5.0, count: 120 },
    url:'https://kaspi.kz/shop/p/round-lab-toner-1025-dokdo-toner-200-ml-104770477/?c=750000000:%20undefined',
    description:
      'Birch Soothing Gel is a non-sticky, water jelly formula. Great for calming skin post-sun exposure, addressing skin irritations, and providing instant hydration.',
  },
  {
    id: 9,
    name: '1025 Dokdo Pad',
    price: 14000,
    image:'https://roundlab.com/cdn/shop/files/2_40ce13c0-04f0-4259-9333-1a1f4a2e62e1_900x.png?v=1706033524',
    rating: { rate: 4.5, count: 100 },
    url:'https://kaspi.kz/shop/p/round-lab-toner-1025-dokdo-toner-200-ml-104770477/?c=750000000:%20undefined',
    description:
      'This Dokdo Toner Pad is made with concentrated minerals from Ulleungdo s deep seawater, soaked in a relaxing cotton pad. It provides deep hydration, gentle exfoliation, and soothes your stressed-out skin with Panthenol, Allantoin, and Betaine.',
  },
  {
    id: 10,
    name: 'Pine Calming Cica Ampoule',
    price: 12000,
    image:'https://roundlab.com/cdn/shop/files/pine-calming-cica-ampoule-round-lab-1_900x.png?v=1687196745',
    rating: { rate: 4.0, count: 200 },
    url:'https://kaspi.kz/shop/p/round-lab-toner-1025-dokdo-toner-200-ml-104770477/?c=750000000:%20undefined',
    description:
      'Quick acting remedy for hormonal breakouts, acne, rosacea. Effectively improve and fortify skin barrier.',
  },
];



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/