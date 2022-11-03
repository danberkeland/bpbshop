

const breads = {
  name: "Sub Bread:",
  modType: "chooseOne",
  options: [
    { label: "NONE", value: "NONE", price: 0 },
    { label: "Croissant ($1.00)", value: "croix", price: 1 },
    { label: "Brioche ($0.50)", value: "bri", price: .5 },
    { label: "Baguette ($0.50)", value: "bag", price: .5 },
    { label: "Multigrain ($0.50)", value: "multi", price: .5 },
    { label: "Levain ($0.50)", value: "lev", price: .5 },
  ]
}
;

const queenOfClubs = {
  name: "Queen of Clubs",
  modType: "chooseMany",
  options: [
    { label: "NO Turkey", value: "NO Turkey", price: 0 },
    { label: "NO Bacon", value: "NO Bacon", price: 0 },
    { label: "NO Cheese", value: "NO Cheese", price: 0 },
    { label: "NO Cucumber", value: "NO Cucumber", price: 0 },
    { label: "NO Tomato", value: "NO Tomato", price: 0 },
    { label: "NO Lettuce", value: "NO Lettuce", price: 0 },
    { label: "NO Aioli", value: "NO Aioli", price: 0 },
  ]
}
;

const avocado = {
  name: "Avocado",
  modType: "chooseMany",
  options: [
    { label: "ADD Avocado", value: "ADD Avocado", price: 2 },
  ]
}
;

const chips = {
  name: "Chips",
  modType: "chooseMany",
  options: [
    { label: "ADD Chips", value: "ADD Chips", price: 2 },
  ]
}
;

const theWorks = {
  name: "The Works",
  modType: "chooseMany",
  options: [
    { label: "ADD Peperoncini", value: "ADD Peperoncini", price: 0 },
    { label: "NO Oil", value: "NO Oil", price: 0 },
    { label: "NO Vinegar", value: "NO Vinegar", price: 0 },
    { label: "NO Salt", value: "NO Salt", price: 0 },
    { label: "NO Mayo", value: "NO Mayo", price: 0 },
    { label: "NO Mustard", value: "NO Mustard", price: 0 },
    { label: "NO Pickles", value: "NO Pickles", price: 0 },
  ]
}
;

const unDutchAble = {
  name: "Un.Dutch.able",
  modType: "chooseMany",
  options: [
    { label: "NO Salami", value: "NO Salami", price: 0 },
    { label: "NO Ham", value: "NO Ham", price: 0 },
    { label: "NO Capocollo", value: "NO Capocollo", price: 0 },
    { label: "NO Provolone", value: "NO Provolone", price: 0 },
    { label: "NO Onion", value: "NO Onion", price: 0 },
    { label: "NO Tomato", value: "NO Tomato", price: 0 },
    { label: "NO Lettuce", value: "NO Lettuce", price: 0 },
  ]
}
;

const californiaGarden = {
  name: "TheCalifornia Garden",
  modType: "chooseMany",
  options: [
    { label: "NO Avocado", value: "NO Avocado", price: 0 },
    { label: "NO Lettuce", value: "NO Lettuce", price: 0 },
    { label: "NO Veggies", value: "NO Veggies", price: 0 },
    { label: "NO Cucumber", value: "NO Cucumber", price: 0 },
    { label: "NO Cheese", value: "NO Cheese", price: 0 },
    { label: "Sub Cream Cheese", value: "Sub Cream Cheese", price: 0 },
    { label: "NO Dressing", value: "NO Dressing", price: 0 },
  ]
}
;

const backPorchBLT = {
  name: "Sweet n Spicey BLT",
  modType: "chooseMany",
  options: [
    { label: "NO Lettuce", value: "NO Lettuce", price: 0 },
    { label: "NO Tomato", value: "NO Tomato", price: 0 },
    { label: "NO Sambal Aioli", value: "NO Sambal Aioli", price: 0 },
    { label: "Sub Regular Aioli", value: "Sub Regular Aioli", price: 0 },
    { label: "Sub NOT Spicey Bacon", value: "Sub NOT Spicey Bacon", price: 0 },
  ]
}
;

const countryTurkey = {
  name: "Country Turkey",
  modType: "chooseMany",
  options: [
    { label: "ADD Bacon", value: "ADD Bacon", price: 2 },
    { label: "NO Cheese", value: "NO Cheese", price: 0 },
    { label: "NO Onion", value: "NO Onion", price: 0 },
    { label: "NO Pickles", value: "NO Pickles", price: 0 },
    { label: "NO Lettuce", value: "NO Lettuce", price: 0 },
    { label: "NO Aioli", value: "NO Aioli", price: 0 },
  ]
}
;

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
        variations: [
          {
            varid: "AQ4APWTX5LQVSGBKPMLCLU2Y",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
        
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
        variations: [
          {
            varid: "4LKBJHSJMMOQSHSASUNFW3Z2",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "2GWFUDD4QXTJPVDPRVS37BSD",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "36V7LW42CKVVJUBXSUI5OSBI",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p371_i1_w2560.jpeg",
        location: "carlton",
        start: 10,
        lead: 0,
        days: null,
        specialStart: null,
        specialEnd: null,
        modifiers: [breads, unDutchAble, avocado, theWorks, chips]
      },
      {
        name: "The Queen of Clubs",
        description: "Turkey, bacon, cheddar, cucumber, tomato, lettuce, sundried tomato aioli on Back Porch Croissant.",
        price: 11.25,
        sqid: "53K44KCSZVNECIT65FGG3W4P",
        variations: [
          {
            varid: "SP6LVRMWV5PSFQPUATN36U74",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p370_i1_w2560.jpeg",
        location: "carlton",
        start: 10,
        lead: 0,
        days: null,
        specialStart: null,
        specialEnd: null,
        modifiers: [breads, queenOfClubs, avocado, chips]
      },
      {
        name: "The California Garden",
        description: "Avocado, Lettuce, cucumber, pickled veggies (carrots, onion, cucumber, mild chiles), Goat cheese, with Greek dressing on Back Porch multigrain bread.",
        price: 10.75,
        sqid: "ZWJY7ZMMPRIIKWLJQYZGXKZR",
        variations: [
          {
            varid: "LVYDXMISMDVCJHJG7KGFXH46",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p369_i1_w2560.jpeg",
        location: "carlton",
        start: 10,
        lead: 0,
        days: null,
        specialStart: null,
        specialEnd: null,
        modifiers: [breads, californiaGarden, chips]
      },
      {
        name: "Sweet n Spicy BLT",
        description: "Sweet & Spicy applewood smoked bacon, lettuce, and tomato with sambal aioli on sliced brioche.",
        price: 10.75,
        sqid: "EENAYWJU6RFSCBKMRR4TTU66",
        variations: [
          {
            varid: "ETGPHN55ERPC6YFYP3GFU44M",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
        url: "https://backporchbakery.square.site/uploads/1/2/9/7/129700795/s925172661976394124_p368_i1_w2560.jpeg",
        location: "carlton",
        start: 10,
        lead: 0,
        days: null,
        specialStart: null,
        specialEnd: null,
        modifiers: [breads, backPorchBLT, avocado, chips]
      },
      {
        name: "Salami and Brie Ficelle",
        description: "Salami, Brie, Aioli, and mixed green and basil on Back Porch Ficelle.",
        price: 8.40,
        sqid: "A5CD5LNWGEQEBQTNXZYDBWQQ",
        variations: [
          {
            varid: "YQCQNHQPPGIOWTO52REHYFIW",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "R4FMT3Z5RUNM4RBLG7YPDH4X",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "2V2IT2GF3UVTJR2OGVKHOGDX",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "DJ6FYVZ3RWLLZ7YXKVDXXIVX",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "L57KSSSKPPQIFCPVIXP3Z3S4",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "4FRWGMXFYGWSGPUAXE5TT4MJ",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "R4FMT3Z5RUNM4RBLG7YPDH4X",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "2V2IT2GF3UVTJR2OGVKHOGDX",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "DJ6FYVZ3RWLLZ7YXKVDXXIVX",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "L57KSSSKPPQIFCPVIXP3Z3S4",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "4FRWGMXFYGWSGPUAXE5TT4MJ",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "77OSDARFCER2RPZJPMG42SC2",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "JGOQX233Y6IR76GRNW32A5BY",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "7M7MZ6A6DTHVOGPJGE4KJJSD",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "WBS7S2L5TNEZRJ735ZXEONJ3",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "DYK5D5YUESZS7HNSVTDPBMK4",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "77OSDARFCER2RPZJPMG42SC2",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "JGOQX233Y6IR76GRNW32A5BY",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "7M7MZ6A6DTHVOGPJGE4KJJSD",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "WBS7S2L5TNEZRJ735ZXEONJ3",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "DYK5D5YUESZS7HNSVTDPBMK4",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "NVLOBXO4DIXDQV4FBGE36NTD",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "NVLOBXO4DIXDQV4FBGE36NTD",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "P7AD2E4C55U7DJ76UL6Z6UZJ",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
        variations: [
          {
            varid: "P7AD2E4C55U7DJ76UL6Z6UZJ",
            varDescrip: "",
            priceDiff: 0,
          }
        ],
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
