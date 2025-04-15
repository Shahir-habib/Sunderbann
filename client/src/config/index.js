export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Image Url",
    name: "image",
    componentType: "input",
    type: "text",
    placeholder: "Enter product image URL",
  },
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: 'poetry', label: 'Poetry' },
      { id: 'fiction', label: 'Fiction' },
      { id: 'mystery', label: 'Mystery' },
      { id: 'history', label: 'History' },
      { id: 'adult', label: 'Adult' },
      { id: 'business', label: 'Business' },
      { id: 'art', label: 'Art' },
      { id: 'music', label: 'Music' },
      { id: 'politics', label: 'Politics' },
      { id: 'travel', label: 'Travel' },
      { id: 'thriller', label: 'Thriller' },
      { id: 'drink', label: 'Drink' },
      { id: 'romance', label: 'Romance' },
      { id: 'childrens', label: 'Childrens' },
      { id: 'nonfiction', label: 'Nonfiction' },
      { id: 'spirituality', label: 'Spirituality' },
      { id: 'philosophy', label: 'Philosophy' },
      { id: 'contemporary', label: 'Contemporary' },
      { id: 'fantasy', label: 'Fantasy' },
      { id: 'comment', label: 'comment' },
      { id: 'science', label: 'Science' },
      { id: 'health', label: 'Health' },
      { id: 'horror', label: 'Horror' },
      { id: 'help', label: 'Help' },
      { id: 'religion', label: 'Religion' },
      { id: 'christian', label: 'Christian' },
      { id: 'crime', label: 'Crime' },
      { id: 'autobiography', label: 'Autobiography' },
      { id: 'biography', label: 'Biography' },
      { id: 'erotica', label: 'Erotica' },
      { id: 'cultural', label: 'Cultural' },
      { id: 'psychology', label: 'Psychology' },
      { id: 'humor', label: 'Humor' },
      { id: 'historical', label: 'Historical' },
      { id: 'novels', label: 'Novels' },
      { id: 'stories', label: 'Stories' },
      { id: 'suspense', label: 'Suspense' },
      { id: 'classics', label: 'Classics' },
      { id: 'academic', label: 'Academic' },
      { id: 'games', label: 'Games' },
      { id: 'parenting', label: 'Parenting' },
      { id: 'paranormal', label: 'Paranormal' }
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "penguin", label: "Penguin" },
      { id: "harpercollins", label: "HarperCollins" },
      { id: "simonandschuster", label: "Simon & Schuster" },
      { id: "macmillan", label: "Macmillan" },
      { id: "randomhouse", label: "Random House" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  }, { id: 'poetry', label: 'Poetry', path: '/shop/listing' },
  { id: 'fiction', label: 'Fiction', path: '/shop/listing' },
  { id: 'mystery', label: 'Mystery', path: '/shop/listing' },
  { id: 'history', label: 'History', path: '/shop/listing' },
  { id: 'adult', label: 'Adult', path: '/shop/listing' },
  {id : 'search', label: 'Search', path: '/shop/search'},
  { id: 'business', label: 'Business', path: '/shop/listing' },
  { id: 'art', label: 'Art', path: '/shop/listing' },
  { id: 'music', label: 'Music', path: '/shop/listing' },
  { id: 'politics', label: 'Politics', path: '/shop/listing' },
  { id: 'travel', label: 'Travel', path: '/shop/listing' },
  { id: 'thriller', label: 'Thriller', path: '/shop/listing' },
  { id: 'drink', label: 'Drink', path: '/shop/listing' },
  { id: 'romance', label: 'Romance', path: '/shop/listing' },
  { id: 'childrens', label: 'Childrens', path: '/shop/listing' },
  { id: 'nonfiction', label: 'Nonfiction', path: '/shop/listing' },
  { id: 'spirituality', label: 'Spirituality', path: '/shop/listing' },
  { id: 'philosophy', label: 'Philosophy', path: '/shop/listing' },
  { id: 'contemporary', label: 'Contemporary', path: '/shop/listing' },
  { id: 'fantasy', label: 'Fantasy', path: '/shop/listing' },
  { id: 'comment', label: 'comment', path: '/shop/listing' },
  { id: 'science', label: 'Science', path: '/shop/listing' },
  { id: 'health', label: 'Health', path: '/shop/listing' },
  { id: 'horror', label: 'Horror', path: '/shop/listing' },
  { id: 'help', label: 'Help', path: '/shop/listing' },
  { id: 'religion', label: 'Religion', path: '/shop/listing' },
  { id: 'christian', label: 'Christian', path: '/shop/listing' },
  { id: 'crime', label: 'Crime', path: '/shop/listing' },
  {
    id: 'autobiography',
    label: 'Autobiography',
    path: '/shop/listing'
  },
  { id: 'biography', label: 'Biography', path: '/shop/listing' },
  { id: 'erotica', label: 'Erotica', path: '/shop/listing' },
  { id: 'cultural', label: 'Cultural', path: '/shop/listing' },
  { id: 'psychology', label: 'Psychology', path: '/shop/listing' },
  { id: 'humor', label: 'Humor', path: '/shop/listing' },
  { id: 'historical', label: 'Historical', path: '/shop/listing' },
  { id: 'novels', label: 'Novels', path: '/shop/listing' },
  { id: 'stories', label: 'Stories', path: '/shop/listing' },
  { id: 'suspense', label: 'Suspense', path: '/shop/listing' },
  { id: 'classics', label: 'Classics', path: '/shop/listing' },
  { id: 'academic', label: 'Academic', path: '/shop/listing' },
  { id: 'games', label: 'Games', path: '/shop/listing' },
  { id: 'parenting', label: 'Parenting', path: '/shop/listing' },
  { id: 'paranormal', label: 'Paranormal', path: '/shop/listing' }
  ,
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  poetry: 'Poetry',
  fiction: 'Fiction',
  mystery: 'Mystery',
  history: 'History',
  adult: 'Adult',
  business: 'Business',
  art: 'Art',
  music: 'Music',
  politics: 'Politics',
  travel: 'Travel',
  thriller: 'Thriller',
  drink: 'Drink',
  romance: 'Romance',
  childrens: 'Childrens',
  nonfiction: 'Nonfiction',
  spirituality: 'Spirituality',
  philosophy: 'Philosophy',
  contemporary: 'Contemporary',
  fantasy: 'Fantasy',
  comment: 'comment',
  science: 'Science',
  health: 'Health',
  horror: 'Horror',
  help: 'Help',
  religion: 'Religion',
  christian: 'Christian',
  crime: 'Crime',
  autobiography: 'Autobiography',
  biography: 'Biography',
  erotica: 'Erotica',
  cultural: 'Cultural',
  psychology: 'Psychology',
  humor: 'Humor',
  historical: 'Historical',
  novels: 'Novels',
  stories: 'Stories',
  suspense: 'Suspense',
  classics: 'Classics',
  academic: 'Academic',
  games: 'Games',
  parenting: 'Parenting',
  paranormal: 'Paranormal'
};

export const brandOptionsMap = {
  
  penguin: "Penguin",
  harpercollins: "HarperCollins",
  simonandschuster: "Simon & Schuster",
  macmillan: "Macmillan",
  randomhouse: "Random House",
};

export const filterOptions = {
  category: [
    { id: 'poetry', label: 'Poetry' },
    { id: 'fiction', label: 'Fiction' },
    { id: 'mystery', label: 'Mystery' },
    { id: 'history', label: 'History' },
    { id: 'adult', label: 'Adult' },
    { id: 'business', label: 'Business' },
    { id: 'art', label: 'Art' },
    { id: 'music', label: 'Music' },
    { id: 'politics', label: 'Politics' },
    { id: 'travel', label: 'Travel' },
    { id: 'thriller', label: 'Thriller' },
    { id: 'drink', label: 'Drink' },
    { id: 'romance', label: 'Romance' },
    { id: 'childrens', label: 'Childrens' },
    { id: 'nonfiction', label: 'Nonfiction' },
    { id: 'spirituality', label: 'Spirituality' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'contemporary', label: 'Contemporary' },
    { id: 'fantasy', label: 'Fantasy' },
    { id: 'comment', label: 'comment' },
    { id: 'science', label: 'Science' },
    { id: 'health', label: 'Health' },
    { id: 'horror', label: 'Horror' },
    { id: 'help', label: 'Help' },
    { id: 'religion', label: 'Religion' },
    { id: 'christian', label: 'Christian' },
    { id: 'crime', label: 'Crime' },
    { id: 'autobiography', label: 'Autobiography' },
    { id: 'biography', label: 'Biography' },
    { id: 'erotica', label: 'Erotica' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'psychology', label: 'Psychology' },
    { id: 'humor', label: 'Humor' },
    { id: 'historical', label: 'Historical' },
    { id: 'novels', label: 'Novels' },
    { id: 'stories', label: 'Stories' },
    { id: 'suspense', label: 'Suspense' },
    { id: 'classics', label: 'Classics' },
    { id: 'academic', label: 'Academic' },
    { id: 'games', label: 'Games' },
    { id: 'parenting', label: 'Parenting' },
    { id: 'paranormal', label: 'Paranormal' }
  ],
  brand: [
    { id: "penguin", label: "Penguin" },
    { id: "harpercollins", label: "HarperCollins" },
    { id: "simonandschuster", label: "Simon & Schuster" },
    { id: "macmillan", label: "Macmillan" },
    { id: "randomhouse", label: "Random House" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
