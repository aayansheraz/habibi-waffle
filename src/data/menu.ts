export type Category = "waffle" | "chinese" | "fastfood";

export type Product = {
  name: string;
  desc: string;
  price: string;
  tag?: string;
};

export type CategoryInfo = {
  slug: Category;
  title: string;
  kicker: string;
  /** giant ghost word behind the art */
  word: string;
  blurb: string;
  /** flat background colour for this category */
  color: string;
  /** lighter panel colour for cards */
  panel: string;
  products: Product[];
};

export const CATEGORIES: Record<Category, CategoryInfo> = {
  waffle: {
    slug: "waffle",
    title: "Waffle & Dessert",
    kicker: "What we're famous for",
    word: "WAFFLE",
    blurb:
      "Freshly pressed Belgian & bubble waffles, loaded ice-cream sundaes, brownies and thick shakes. Creamy, fruity, made to order.",
    color: "#E36FA9",
    panel: "#EC8DBE",
    products: [
      { name: "Classic Belgian Waffle", desc: "Crisp waffle, chocolate drizzle, fresh cream.", price: "Rs 450", tag: "Bestseller" },
      { name: "Bubble Waffle Sundae", desc: "Hong-Kong egg waffle wrapped around a scoop.", price: "Rs 650", tag: "Signature" },
      { name: "Nutella Overload", desc: "Double Nutella, hazelnut crunch, banana.", price: "Rs 700" },
      { name: "Loaded Brownie Stack", desc: "Warm fudge brownie, vanilla scoop, sauce.", price: "Rs 550" },
      { name: "Habibi Special Shake", desc: "Thick creamy shake topped with a mini waffle.", price: "Rs 480" },
      { name: "Fruit Punch Waffle", desc: "Seasonal fruit, strawberry glaze, cream.", price: "Rs 600" },
    ],
  },
  chinese: {
    slug: "chinese",
    title: "Chinese Menu",
    kicker: "Wok-fired & fresh",
    word: "CHINESE",
    blurb:
      "Sizzling desi-Chinese cooked over high flame — saucy, spicy and generous. From soups to rice and noodles.",
    color: "#D8443B",
    panel: "#E26A62",
    products: [
      { name: "Chicken Manchurian", desc: "Crispy chicken in tangy Manchurian gravy.", price: "Rs 750", tag: "Popular" },
      { name: "Chicken Chowmein", desc: "Stir-fried noodles, veggies, soy garlic.", price: "Rs 650" },
      { name: "Egg Fried Rice", desc: "Wok-tossed rice with egg and spring onion.", price: "Rs 500" },
      { name: "Hot & Sour Soup", desc: "Classic spicy-sour soup, shredded chicken.", price: "Rs 350" },
      { name: "Chilli Dry Chicken", desc: "Fiery dry chicken with capsicum & onion.", price: "Rs 780" },
      { name: "Garlic Rice + Gravy", desc: "Aromatic garlic rice with chicken gravy.", price: "Rs 700" },
    ],
  },
  fastfood: {
    slug: "fastfood",
    title: "Broast · Pizza · Wraps",
    kicker: "Special injected",
    word: "BROAST",
    blurb:
      "Special injected broast, hand-stretched pizzas and loaded wraps. Juicy, crunchy and made for cravings.",
    color: "#F2A63C",
    panel: "#F6BC63",
    products: [
      { name: "Special Injected Broast", desc: "Marinade-injected crispy broast, fries, dip.", price: "Rs 600", tag: "Signature" },
      { name: "Habibi Special Pizza", desc: "Loaded cheese, chicken, peppers & sauce.", price: "Rs 1100" },
      { name: "Zinger Wrap", desc: "Crispy zinger, slaw, garlic mayo in paratha.", price: "Rs 450" },
      { name: "Chicken Cheese Roll", desc: "Grilled chicken, melted cheese, hot sauce.", price: "Rs 400" },
      { name: "Loaded Fries", desc: "Fries topped with chicken, cheese & jalapeno.", price: "Rs 500" },
      { name: "Broast Burger", desc: "Broast fillet, fresh veg, signature sauce.", price: "Rs 550" },
    ],
  },
};

export const CATEGORY_ORDER: Category[] = ["chinese", "waffle", "fastfood"];
