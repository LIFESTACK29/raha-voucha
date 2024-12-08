export const examplePackages = [
    {
        packageTitle: 'Joyful Starter Package',
        price: '₦28,000',
        items: [
            {
                value: 'provision',
                itemContent: [
                    'Dano Cool Cow Instant Filled Milk Powder, 350g',
                    'Ovaltine Refill Pouch, 350g',
                    "Kellogg's Cornflakes 350g",
                    'Chivita Exotic Pineapple & Coconut Nectar, 1L',
                    'Golden Penny Spread 250g',
                    'Golden Penny Sugar Cubes 500g',
                    'Whippy Real Mayonnaise 240g',
                    'Safina Sardines 125g',
                ],
            },
            {
                value: 'food_gourmet',
                itemContent: [
                    'Royal Stallion Parboiled Rice 5kg',
                    'Mr Chef Salt 500g ',
                    'Golden Penny Spaghetti, 500g',
                    'Golden Penny Pasta Twist 500g',
                    'Gino Pepper And Onion Sachet, 70g (x5)',
                    'Knorr Chicken Cubes, Pack 320g',
                ],
            },
        ],
    },
    {
        packageTitle: 'Festive Bliss Package',
        price: '₦40,000',
        items: [
            {
                value: 'provision',
                itemContent: [
                    'Dano Cool Cow Instant Filled Milk Powder 350g',
                    'Ovaltine Refill Pouch, 350g',
                    'Checkers Custard Refill Vanilla, 400g',
                    "Kellogg's Cornflakes 350g",
                    'Whippy Real Mayonnaise 460g',
                    'Safina Sardines 125g',
                    'Chivita Exotic Pineapple & Coconut Nectar, 1L',
                    'Golden Penny Spread 250g',
                    'Golden Penny Sugar Cubes 500g',
                    'Mcvities Hobnobs Biscuit 90g',
                    'Plantain Chips Peppered 250g',
                ],
            },
            {
                value: 'food_gourmet',
                itemContent: [
                    'Royal Stallion Parboiled Rice 5kg',
                    'Mamador Pure Vegetable Oil 900ml',
                    'Mr Chef Salt 500g (x2)',
                    'Golden Penny Spaghetti, 500g',
                    'Golden Penny Pasta Twist 500g',
                    'Gino Pepper And Onion Sachet, 70g (x5)',
                    'Knorr Chicken Cubes, Pack 320g',
                    'Whippy Real Mayonnaise 245g',
                ],
            },
        ],
    },
    {
        packageTitle: 'Deluxe Package',
        price: '₦60,000',
        items: [
            {
                value: 'provision',
                itemContent: [
                    '4th Street Sweet Red Wine 75cl',
                    'Loya Instant Full Cream Milk Powder Refill, 350g ',
                    'Milo Food Drink Sachet 400g',
                    'Checkers Custard Refill Vanilla, 400g',
                    "Kellogg's Cornflakes 350g",
                    'Golden Penny Spread 250g',
                    'Bottle Of Groundnut 450g',
                    'Heinz Baked Beans 200g',
                    'Bounty Chocolate Bar 57g',
                    'Golden Penny Sugar Cubes 500g',
                    'Mcvities All Butter Shortbread 100g',
                    'Bama Mayonnaise 385ml',
                    'Safina Sardines 125g',
                    'Quaker Oats Tin 500g',
                    'Frolic Tomato Ketchup 420g',
                ],
            },
            {
                value: 'food_gourmet',
                itemContent: [
                    'Royal Stallion Parboiled Rice 10kg',
                    'Mr Chef Salt 500g (x2)',
                    'Golden Penny Spaghetti 500g (x2)',
                    'Golden Penny Pasta Twist 500g (x2)',
                    'Gino Party Jollof Tomato Seasoning Mix, 60g Sachet (x10)',
                    'Gino Pepper And Onion Sachet, 70g (x5)',
                    'Knorr Chicken Cubes, Pack 320g (x2)',
                    'Devon Kings Vegetable Oil 1L',
                    'Golden Penny Semovita 1kg',
                    'Bama Mayonnaise 385ml',
                ],
            },
        ],
    },
    {
        packageTitle: 'Grand Celebration Package',
        price: '₦100,000',
        items: [
            {
                value: 'provision',
                itemContent: [
                    'Baron Romero Spanish Red Wine 75cl',
                    'Loya Instant Full Cream Milk Powder Refill 350g',
                    'Milo Food Drink Sachet 400g',
                    'Checkers Custard Refill Vanilla, 400g',
                    'Chivita Exotic Pineapple & Coconut Nectar, 1L',
                    'Bottle Of Groundnut 450g',
                    'Heinz Baked Beans 200g',
                    'Nestle Golden Morn 600g',
                    'Golden Penny Sugar Cubes 500g',
                    'Nasco Corn Flakes Original 350g',
                    'Mcvities All Butter Shortbread 100g (x2)',
                    'Bama Mayonnaise 385ml',
                    'Safina Sardines 125g (x3)',
                    'Quaker Oats Tin 500g',
                    '2 Sure Fresh Original Dishwashing Liquid, 500ml',
                    'Frolic Tomato Ketchup 420g',
                    'Pancake Mix Creamy & Fluffy 500g',
                ],
            },
            {
                value: 'food_gourmet',
                itemContent: [
                    'Royal Stallion Parboiled Rice 25kg',
                    'Devon Kings Vegetable Oil 1L ',
                    'Mr Chef Salt 500g (x2)',
                    'Golden Penny Spaghetti 500g (x3)',
                    'Golden Penny Pasta Twist 500g (x2)',
                    'Gino Party Jollof Tomato Seasoning Mix, 60g Sachet (x10)',
                    'Gino Pepper And Onion Sachet, 70g (x10)',
                    'Knorr Chicken Cubes, Pack 320g',
                    'Indomie Instant Noodles Chicken 70 g—Carton',
                    'Golden Penny Semovita 1kg',
                    'Bama Mayonnaise 385ml',
                ],
            },
        ],
    },
];

export const packageOffers: {
    packageOfferName: string;
    packageOfferValue: string;
}[] = [
  { packageOfferName: "Provisions", packageOfferValue: "Provision" },
  { packageOfferName: "Food gourmet", packageOfferValue: "Food Gourmet" },
];

export const christmasPackages: {
    packageName: string;
    packagePrice: string;
    packageValue: string;
}[] = [
  {
    packageName: "Joyful Starter Package",
    packageValue: "joyful",
    packagePrice: "28000",
  },
  {
    packageName: "Festive Bliss Package",
    packageValue: "festive",
    packagePrice: "40000",
  },
  {
    packageName: "Deluxe Package",
    packageValue: "deluxe",
    packagePrice: "60000",
  },
  {
    packageName: "Grand Celebration Package",
    packageValue: "grand",
    packagePrice: "100000",
  },
];
