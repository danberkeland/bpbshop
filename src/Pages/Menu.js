

const breads = [
  { label: "NONE", value: "NONE" },
  { label: "Croissant ($1.00)", value: "croix" },
  { label: "Brioche ($0.50)", value: "bri" },
  { label: "Baguette ($0.50)", value: "bag" },
  { label: "Multigrain ($0.50)", value: "multi" },
  { label: "Levain ($0.50)", value: "lev" },
];

export const menu = [
  {
    title: "Breakfast Sandwiches",
    info: "Breakfast sandwiches are available all day.",
    items: [
      {
        name: "Turkey, Egg, and Avocado Croissant",
        description: "Egg, Turkey, Avocado, Aioli on a Back Porch Croissant",
        price: 10.25,
        sqid: "BPIFLD7D47QWOCVFOWIKHL4B",
        sqvar: "AQ4APWTX5LQVSGBKPMLCLU2Y",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p382_i1_w2560.jpeg",
        location: "carlton",
        start: 7,
        lead: 0,
        days: null,
        specialStart: null,
        specialEnd: null,
        modifiers: [breads]
      },
      {
        name: "Back Porch Breakfast Croissant",
        description:
          "Egg, Provolone, Tomato, Lettuce, Aioli on a Back Porch Croissant",
        price: 10.25,
        sqid: "FFOF4O7LPKZB6RTPMCLEWV27",
        sqvar: "4LKBJHSJMMOQSHSASUNFW3Z2",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p379_i1_w2560.jpeg",
        location: "carlton",
        start: 7,
        lead: 0,
        days: null,
        specialStart: null,
        specialEnd: null,
        modifiers: [breads]
      },
      {
        name: "Bacon, Eggs, and Cheddar Croissant",
        description: "Bacon, Egg, Cheddar and Aioli on a Back Porch Croissant",
        price: 10.25,
        sqid: "Z3DFBQXUXTFU2E3R2UEF2ZGJ",
        sqvar: "2GWFUDD4QXTJPVDPRVS37BSD",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p378_i2_w2880.jpeg",
        location: "carlton",
        start: 7,
        lead: 0,
        days: null,
        specialStart: null,
        specialEnd: null,
        modifiers: [breads]
      },
    ],
  },
  {
    title: "Lunch Sandwiches",
    info: "Lunch sandwiches are available from 10 AM.",
    items: [
      {
        name: "The Un.Dutch.able",
        description:
          "Italian Deli Sub on Fresh Baked Dutch Crunch Roll. Salami, ham, capocollo, provolone, red onion, tomato, lettuce, pickle, mayo, mustard, salt, pepper, oil and vinegar. Pepperoncini on request.",
        price: 11.85,
        sqid: "BBRCDEQKKR6DKE4KYHWYUUOE",
        sqvar: "36V7LW42CKVVJUBXSUI5OSBI",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p371_i1_w2560.jpeg",
        location: "carlton",
        start: 10,
        lead: 0,
        days: null,
        specialStart: null,
        specialEnd: null,
        modifiers: [breads]
      },
      {
        name: "The Queen of Clubs",
        description: "Turkey, bacon, cheddar, cucumber, tomato, lettuce, sundried tomato aioli on Back Porch Croissant.",
        price: 11.25,
        sqid: "53K44KCSZVNECIT65FGG3W4P",
        sqvar: "SP6LVRMWV5PSFQPUATN36U74",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p370_i1_w2560.jpeg",
        location: "carlton",
        start: 10,
        lead: 0,
        days: null,
        specialStart: null,
        specialEnd: null,
        modifiers: [breads]
      },
      {
        name: "The California Garden",
        description: "Avocado, Lettuce, cucumber, pickled veggies (carrots, onion, cucumber, mild chiles), Goat cheese, with Greek dressing on Back Porch multigrain bread.",
        price: 10.75,
        sqid: "ZWJY7ZMMPRIIKWLJQYZGXKZR",
        sqvar: "LVYDXMISMDVCJHJG7KGFXH46",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p369_i1_w2560.jpeg",
        location: "carlton",
        start: 10,
        lead: 0,
        days: null,
        specialStart: null,
        specialEnd: null,
        modifiers: [breads]
      },
      {
        name: "Sweet n Spicy BLT",
        description: "Sweet & Spicy applewood smoked bacon, lettuce, and tomato with sambal aioli on sliced brioche.",
        price: 10.75,
        sqid: "EENAYWJU6RFSCBKMRR4TTU66",
        sqvar: "ETGPHN55ERPC6YFYP3GFU44M",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p368_i1_w2560.jpeg",
        location: "carlton",
        start: 10,
        lead: 0,
        days: null,
        specialStart: null,
        specialEnd: null,
        modifiers: [breads]
      },
      {
        name: "Salami and Brie Ficelle",
        description: "Salami, Brie, Aioli, and mixed green and basil on Back Porch Ficelle.",
        price: 8.40,
        sqid: "A5CD5LNWGEQEBQTNXZYDBWQQ",
        sqvar: "YQCQNHQPPGIOWTO52REHYFIW",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p367_i1_w2560.jpeg",
        location: "carlton",
        start: 10,
        lead: 0,
        days: null,
        specialStart: null,
        specialEnd: null,
        modifiers: [breads]
      },
      
    ],
  },
  {
    title: "Pastries",
    info: "Pastries baked fresh daily.",
    items: [
      {
        name: "Spinach Feta Croissant",
        description:
          "Wheat flour, water, butter, spinach, feta, cream cheese, parsley, dill, sugar, salt, yeast",
        price: 5.95,
        sqid: "VRGUZK6LRX5VLQJEKLP2JZC2",
        sqvar: "R4FMT3Z5RUNM4RBLG7YPDH4X",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p273_i1_w420.jpeg",
        location: "carlton",
        start: 7,
        lead: 2,
        days: null,
        specialStart: null,
        specialEnd: null,
       
      },
      {
        name: "Chocolate Croissant",
        description: "Wheat flour, water, butter, chocolate, sugar, salt, yeast",
        price: 4.60,
        sqid: "5WV2EBECSFPICUDUXNE6EWPQ",
        sqvar: "2V2IT2GF3UVTJR2OGVKHOGDX",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p276_i1_w2431.jpeg",
        location: "carlton",
        start: 7,
        lead: 2,
        days: null,
        specialStart: null,
        specialEnd: null,
        
      },
      {
        name: "Morning Bun",
        description: "Wheat flour, water, butter, sugar, salt, cinammon, orange zest, yeast",
        price: 4.60,
        sqid: "A2KJVO3L6LEVZ3OBDGFU53PB",
        sqvar: "DJ6FYVZ3RWLLZ7YXKVDXXIVX",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p277_i1_w2448.jpeg",
        location: "carlton",
        start: 7,
        lead: 2,
        days: null,
        specialStart: null,
        specialEnd: null,
        
      },
      {
        name: "All Butter Croissant",
        description: "Wheat flour, water, butter, sugar, salt, yeast",
        price: 3.50,
        sqid: "WKGVREPSY7K7ZNDGRYWWWCJQ",
        sqvar: "L57KSSSKPPQIFCPVIXP3Z3S4",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p278_i1_w434.jpeg",
        location: "carlton",
        start: 7,
        lead: 2,
        days: null,
        specialStart: null,
        specialEnd: null
      },
      {
        name: "Almond Croissant",
        description: "Wheat flour, water, butter, eggs, almonds, sugar, salt, almond extract, yeast",
        price: 5.95,
        sqid: "SUZ6S4BR5BO7K2YDXL34R7UN",
        sqvar: "4FRWGMXFYGWSGPUAXE5TT4MJ",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p257_i1_w2448.jpeg",
        location: "carlton",
        start: 7,
        lead: 2,
        days: null,
        specialStart: null,
        specialEnd: null
      },
      {
        name: "Spinach Feta Croissant",
        description:
          "Wheat flour, water, butter, spinach, feta, cream cheese, parsley, dill, sugar, salt, yeast",
        price: 5.95,
        sqid: "VRGUZK6LRX5VLQJEKLP2JZC2",
        sqvar: "R4FMT3Z5RUNM4RBLG7YPDH4X",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p273_i1_w420.jpeg",
        location: "prado",
        start: 7,
        lead: 2,
        days: null,
        specialStart: null,
        specialEnd: null
      },
      {
        name: "Chocolate Croissant",
        description: "Wheat flour, water, butter, chocolate, sugar, salt, yeast",
        price: 4.60,
        sqid: "5WV2EBECSFPICUDUXNE6EWPQ",
        sqvar: "2V2IT2GF3UVTJR2OGVKHOGDX",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p276_i1_w2431.jpeg",
        location: "prado",
        start: 7,
        lead: 2,
        days: null,
        specialStart: null,
        specialEnd: null
      },
      {
        name: "Morning Bun",
        description: "Wheat flour, water, butter, sugar, salt, cinammon, orange zest, yeast",
        price: 4.60,
        sqid: "A2KJVO3L6LEVZ3OBDGFU53PB",
        sqvar: "DJ6FYVZ3RWLLZ7YXKVDXXIVX",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p277_i1_w2448.jpeg",
        location: "prado",
        start: 7,
        lead: 2,
        days: null,
        specialStart: null,
        specialEnd: null
      },
      {
        name: "All Butter Croissant",
        description: "Wheat flour, water, butter, sugar, salt, yeast",
        price: 3.50,
        sqid: "WKGVREPSY7K7ZNDGRYWWWCJQ",
        sqvar: "L57KSSSKPPQIFCPVIXP3Z3S4",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p278_i1_w434.jpeg",
        location: "prado",
        start: 7,
        lead: 2,
        days: null,
        specialStart: null,
        specialEnd: null
      },
      {
        name: "Almond Croissant",
        description: "Wheat flour, water, butter, eggs, almonds, sugar, salt, almond extract, yeast",
        price: 5.95,
        sqid: "SUZ6S4BR5BO7K2YDXL34R7UN",
        sqvar: "4FRWGMXFYGWSGPUAXE5TT4MJ",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p257_i1_w2448.jpeg",
        location: "prado",
        start: 7,
        lead: 2,
        days: null,
        specialStart: null,
        specialEnd: null
      },
      
    ],
  },
  {
    title: "Rustic Breads & Brioche",
    info: "Breads baked fresh daily.",
    items: [
      {
        name: "Blue Cheese Walnut",
        description:
          "Wheat flour, water, walnuts, blue cheese, natural starter, salt, yeast",
        price: 7.40,
        sqid: "CVKZ6E3OCHBKDVB7YZPB3J6N",
        sqvar: "77OSDARFCER2RPZJPMG42SC2",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p3_i2_w2448.jpeg",
        location: "carlton",
        start: 7,
        lead: 2,
        days: null,
        specialStart: null,
        specialEnd: null
      },
      {
        name: "BPB Baguette",
        description: "Wheat flour, water, natural starter, salt, yeast",
        price: 3.5,
        sqid: "MXWDWKDPJ2633BO7SURJWOLM",
        sqvar: "JGOQX233Y6IR76GRNW32A5BY",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p272_i1_w800.jpeg",
        location: "carlton",
        start: 7,
        lead: 2,
        days: null,
        specialStart: null,
        specialEnd: null
      },
      {
        name: "Country Rye",
        description: "Wheat flour, rye flour, water, natural starter, salt, yeast",
        price: 7.35,
        sqid: "C34CXVX6JXTIACXRDCV5PADU",
        sqvar: "7M7MZ6A6DTHVOGPJGE4KJJSD",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p279_i1_w2448.jpeg",
        location: "carlton",
        start: 7,
        lead: 3,
        days: null,
        specialStart: null,
        specialEnd: null
      },
      {
        name: "Country Batard",
        description: "Wheat flour, water, natural starter, salt",
        price: 7.35,
        sqid: "M72IUS7PDXZ3QA6DKSNKNRY5",
        sqvar: "WBS7S2L5TNEZRJ735ZXEONJ3",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p275_i1_w2560.jpeg",
        location: "carlton",
        start: 7,
        lead: 3,
        days: null,
        specialStart: null,
        specialEnd: null
      },
      {
        name: "Multigrain",
        description: "Wheat flour, nine-grain mix, whole wheat flour, rye flour, water, natural starter, vital wheat gluten, salt, yeast",
        price: 6.25,
        sqid: "J4UJQC7LJEE4QFE2FDVJSDND",
        sqvar: "DYK5D5YUESZS7HNSVTDPBMK4",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p281_i1_w2448.jpeg",
        location: "carlton",
        start: 7,
        lead: 3,
        days: null,
        specialStart: null,
        specialEnd: null
      },
      {
        name: "Blue Cheese Walnut",
        description:
          "Wheat flour, water, walnuts, blue cheese, natural starter, salt, yeast",
        price: 7.40,
        sqid: "CVKZ6E3OCHBKDVB7YZPB3J6N",
        sqvar: "77OSDARFCER2RPZJPMG42SC2",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p3_i2_w2448.jpeg",
        location: "prado",
        start: 8.5,
        lead: 2,
        days: ["Tue","Thu"],
        specialStart: null,
        specialEnd: null
      },
      {
        name: "BPB Baguette",
        description: "Wheat flour, water, natural starter, salt, yeast",
        price: 3.5,
        sqid: "MXWDWKDPJ2633BO7SURJWOLM",
        sqvar: "JGOQX233Y6IR76GRNW32A5BY",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p272_i1_w800.jpeg",
        location: "prado",
        start: 8.5,
        lead: 2,
        days: null,
        specialStart: null,
        specialEnd: null
      },
      {
        name: "Country Rye",
        description: "Wheat flour, rye flour, water, natural starter, salt, yeast",
        price: 7.35,
        sqid: "C34CXVX6JXTIACXRDCV5PADU",
        sqvar: "7M7MZ6A6DTHVOGPJGE4KJJSD",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p279_i1_w2448.jpeg",
        location: "prado",
        start: 8.5,
        lead: 3,
        days: null,
        specialStart: null,
        specialEnd: null
      },
      {
        name: "Country Batard",
        description: "Wheat flour, water, natural starter, salt",
        price: 7.35,
        sqid: "M72IUS7PDXZ3QA6DKSNKNRY5",
        sqvar: "WBS7S2L5TNEZRJ735ZXEONJ3",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p275_i1_w2560.jpeg",
        location: "prado",
        start: 8.5,
        lead: 3,
        days: null,
        specialStart: "2022-11-10",
        specialEnd: "2022-11-15"
      },
      {
        name: "Multigrain",
        description: "Wheat flour, nine-grain mix, whole wheat flour, rye flour, water, natural starter, vital wheat gluten, salt, yeast",
        price: 6.25,
        sqid: "J4UJQC7LJEE4QFE2FDVJSDND",
        sqvar: "DYK5D5YUESZS7HNSVTDPBMK4",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p281_i1_w2448.jpeg",
        location: "prado",
        start: 8.5,
        lead: 3,
        days: null,
        specialStart: null,
        specialEnd: null
      },
      
    ],
  },
  {
    title: "Thanksgiving",
    info: "Order now!!",
    items: [
      {
        name: "Pumpkin Pie",
        description: "Classic Pumpkin Pie",
        price: 21,
        sqid: "NLCMLDOGFWIZJZQLUOOBVYEI",
        sqvar: "NVLOBXO4DIXDQV4FBGE36NTD",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p463_i1_w800.jpeg",
        location: "carlton",
        start: 7,
        lead: 6,
        days: null,
        specialStart: "2022-11-22",
        specialEnd: "2022-11-24"
      },
      {
        name: "Pumpkin Pie",
        description: "Classic Pumpkin Pie",
        price: 21,
        sqid: "NLCMLDOGFWIZJZQLUOOBVYEI",
        sqvar: "NVLOBXO4DIXDQV4FBGE36NTD",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p463_i1_w800.jpeg",
        location: "prado",
        start: 7,
        lead: 6,
        days: null,
        specialStart: "2022-11-22",
        specialEnd: "2022-11-24"
      },
      {
        name: "Pecan Pie",
        description: "Classic Pecan Pie",
        price: 21,
        sqid: "TONUVVEZNERSIUHOZ2T6Y7KG",
        sqvar: "P7AD2E4C55U7DJ76UL6Z6UZJ",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p467_i1_w800.jpeg",
        location: "carlton",
        start: 7,
        lead: 6,
        days: null,
        specialStart: "2022-11-22",
        specialEnd: "2022-11-24"
      },
      {
        name: "Pecan Pie",
        description: "Classic Pecan Pie",
        price: 21,
        sqid: "TONUVVEZNERSIUHOZ2T6Y7KG",
        sqvar: "P7AD2E4C55U7DJ76UL6Z6UZJ",
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p467_i1_w800.jpeg",
        location: "prado",
        start: 7,
        lead: 6,
        days: null,
        specialStart: "2022-11-22",
        specialEnd: "2022-11-24"
      },
    ],
  },
];
