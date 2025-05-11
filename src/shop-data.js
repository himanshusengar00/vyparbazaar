const SHOP_DATA = [
  {
    title: 'Atta, Rice, Oil & Dals',
    items: [
      {
        id: 1,
        name: 'Organic Atta',
        imageUrl: 'https://img.freepik.com/free-photo/whole-wheat-flour-bag-white-background_1150-12322.jpg',
        price: 299,
      },
      {
        id: 2,
        name: 'Basmati Rice',
        imageUrl: 'https://img.freepik.com/free-photo/basmati-rice-white-background_1150-20022.jpg',
        price: 199,
      },
      {
        id: 3,
        name: 'Sunflower Oil',
        imageUrl: 'https://img.freepik.com/free-photo/sunflower-oil-bottle-isolated_1150-12343.jpg',
        price: 499,
      },
      {
        id: 4,
        name: 'Masoor Dal',
        imageUrl: 'https://img.freepik.com/free-photo/red-lentils-dal-white-background_1150-20372.jpg',
        price: 299,
      },
      {
        id: 5,
        name: 'Toor Dal',
        imageUrl: 'https://img.freepik.com/free-photo/toor-dal-yellow-lentils-white-background_1150-20462.jpg',
        price: 199,
      },
      {
        id: 6,
        name: 'Chana Dal',
        imageUrl: 'https://img.freepik.com/free-photo/chickpea-dal-white-background_1150-20470.jpg',
        price: 699,
      },
    ],
  },
  {
    title: 'Packaged Food',
    items: [
      {
        id: 7,
        name: 'Organic Almonds',
        imageUrl: 'https://img.freepik.com/free-photo/almonds-isolated_1150-20662.jpg',
        price: 5620,
      },
      {
        id: 8,
        name: 'Premium Cashews',
        imageUrl: 'https://img.freepik.com/free-photo/cashew-nuts-isolated_1150-20460.jpg',
        price: 8280,
      },
      {
        id: 9,
        name: 'Whole Wheat Flour',
        imageUrl: 'https://img.freepik.com/free-photo/whole-wheat-flour-bag_1150-12322.jpg',
        price: 2110,
      },
      {
        id: 10,
        name: 'Basmati Rice Pack',
        imageUrl: 'https://img.freepik.com/free-photo/basmati-rice-packaging_1150-20022.jpg',
        price: 10160,
      },
      {
        id: 11,
        name: 'Organic Sugar',
        imageUrl: 'https://img.freepik.com/free-photo/sugar-cubes-isolated_1150-20455.jpg',
        price: 12160,
      },
      {
        id: 12,
        name: 'Ghee Pack',
        imageUrl: 'https://img.freepik.com/free-photo/ghee-pack_1150-20632.jpg',
        price: 3160,
      },
    ],
  },
  {
    title: 'Fruit & Vegetables',
    items: [
      {
        id: 13,
        name: 'Fresh Apples',
        imageUrl: 'https://img.freepik.com/free-photo/red-apples-isolated_1150-20862.jpg',
        price: 2125,
      },
      {
        id: 14,
        name: 'Organic Bananas',
        imageUrl: 'https://img.freepik.com/free-photo/bananas-isolated_1150-20865.jpg',
        price: 3090,
      },
      {
        id: 15,
        name: 'Red Tomatoes',
        imageUrl: 'https://img.freepik.com/free-photo/red-tomatoes-white-background_1150-20867.jpg',
        price: 2450,
      },
      {
        id: 16,
        name: 'Cucumber',
        imageUrl: 'https://img.freepik.com/free-photo/cucumber-isolated_1150-20868.jpg',
        price: 5465,
      },
      {
        id: 17,
        name: 'Green Bell Peppers',
        imageUrl: 'https://img.freepik.com/free-photo/green-bell-peppers-isolated_1150-20870.jpg',
        price: 1454,
      },
    ],
  },
  {
    title: 'Frozen Food',
    items: [
      {
        id: 18,
        name: 'Frozen Peas',
        imageUrl: 'https://img.freepik.com/free-photo/frozen-peas_1150-20535.jpg',
        price: 499,
      },
      {
        id: 19,
        name: 'Frozen Corn',
        imageUrl: 'https://img.freepik.com/free-photo/frozen-corn-isolated_1150-20634.jpg',
        price: 1599,
      },
      {
        id: 20,
        name: 'Frozen Chicken Breasts',
        imageUrl: 'https://img.freepik.com/free-photo/frozen-chicken-breasts_1150-20631.jpg',
        price: 1599,
      },
      {
        id: 21,
        name: 'Frozen Berries',
        imageUrl: 'https://img.freepik.com/free-photo/frozen-berries-isolated_1150-20635.jpg',
        price: 2299,
      },
      {
        id: 22,
        name: 'Frozen French Fries',
        imageUrl: 'https://img.freepik.com/free-photo/frozen-french-fries-isolated_1150-20638.jpg',
        price: 1019,
      },
    ],
  },
  {
    title: 'Cleaning Essentials',
    items: [
      {
        id: 23,
        name: 'Dishwashing Liquid',
        imageUrl: 'https://img.freepik.com/free-photo/dishwashing-liquid_1150-20550.jpg',
        price: 599,
      },
      {
        id: 24,
        name: 'Multi-Purpose Cleaner',
        imageUrl: 'https://img.freepik.com/free-photo/multi-purpose-cleaner_1150-20648.jpg',
        price: 549,
      },
      {
        id: 25,
        name: 'Laundry Detergent',
        imageUrl: 'https://img.freepik.com/free-photo/laundry-detergent-bottle_1150-20652.jpg',
        price: 1159,
      },
      {
        id: 26,
        name: 'Glass Cleaner',
        imageUrl: 'https://img.freepik.com/free-photo/glass-cleaner-spray_1150-20653.jpg',
        price: 499,
      },
      {
        id: 27,
        name: 'Broom',
        imageUrl: 'https://img.freepik.com/free-photo/broom_1150-20650.jpg',
        price: 2199,
      },
      {
        id: 28,
        name: 'Mop',
        imageUrl: 'https://img.freepik.com/free-photo/mop_1150-20651.jpg',
        price: 499,
      },
    ],
  },
];

export default SHOP_DATA;
