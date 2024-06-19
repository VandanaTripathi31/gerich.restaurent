import images from './images';

const wines = [
  {
    title: 'Kingfisher Strong',
    price: '₹145',
    tags: 'AU | Bottle',
  },
  {
    title: 'Budweiser Malbee',
    price: '₹195',
    tags: 'AU | Bottle',
  },
  {
    title: ' Bira 91 Rose',
    price: '₹355',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Tuborg Ale',
    price: '₹120',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Carlsberg Guinness',
    price: '₹165',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'The Californian Plum',
    price: '₹495',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Sikandar, Bombay Canteen",
    price: '₹160',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Capi Madras',
    price: '₹275',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Dirty Buns',
    price: '₹310',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '₹260',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };