/**
 * Ideal contents:
 * https://www.reddit.com/r/catfood/comments/whg0id/my_cat_food_resources_guides_spreadsheets_info/
 * Protein: 50-70% (dry matter); above 9% as-fed;
 * Fat: 20-40% (dry matter); above 2% as-fed;
 * Carbs: 1-10% (dry matter); below 2% as-fed;
 * Water: 70-90%;
 */
const catFood = {
  elseySalmon: {
    ingredients: [
      'Salmon',
      'Salmon Hydrolysate',
      'Pork Plasma',
      'Hydrolyzed Pork',
      'Gelatin',
      'Chicken Fat (Preserved with Mixed Tocopherols)',
      'Ground Flaxseed',
      'Natural Flavor',
      'Calcium Carbonate',
      'Potassium Chloride',
      'Choline Chloride',
      'Fructooligosaccharides',
      'Niacin',
      'Vitamin A',
      'Thiamine Mononitrate',
      'd-Calcium Pantothenate',
      'Folic Acid',
      'Pyridoxine Hydrochloride',
      'Riboflavin',
      'Vitamin D',
      'Biotin',
      'Vitamin B12',
      'Zinc Proteinate',
      'Zinc Sulfate',
      'Iron Proteinate',
      'Ferrous Sulfate',
      'Copper Proteinate',
      'Copper Sulfate',
      'Manganese Proteinate',
      'Manganese Sulfate',
      'Calcium Iodate',
      'Sodium Selenite',
      'Taurine',
      'Magnesium Oxide',
      'Mixed Tocopherols',
      'Salt',
      'Vitamin E',
      'Rosemary Extract',
    ],
    analysis: {
      protein: 54,
      fat: 20,
      fiber: 4,
      moisture: 12,
      carbs: 10,
    },
    tried: true,
    notes: 'Itchy after we switched all the way',
    contents: 'I still really like the ingredients',
    wouldBuy: true,
  },
  elseyChicken: {
    ingredients: [
      'Chicken',
      'Hydrolyzed Pork',
      'Pork Plasma',
      'Gelatin',
      'Chicken Fat (Preserved with Mixed Tocopherols)',
      'Ground Flaxseed',
      'Natural Flavor',
      'Calcium Carbonate',
      'Salmon Oil',
      'Potassium Chloride',
      'Choline Chloride',
      'Fructooligosaccharides',
      'Vitamins (Niacin',
      'Vitamin A Supplement',
      'Thiamine Mononitrate',
      'd-Calcium Pantothenate',
      'Folic Acid',
      'Pyridoxine Hydrochloride',
      'Riboflavin',
      'Vitamin D Supplement',
      'Biotin',
      'Vitamin B12)',
      'Minerals (Zinc Proteinate',
      'Zinc Sulfate',
      'Iron Proteinate',
      'Ferrous Sulfate',
      'Copper Proteinate',
      'Copper Sulfate',
      'Manganese Proteinate',
      'Manganese Sulfate',
      'CalciumIodate',
      'Sodium Selenite)',
      'Taurine',
      'Magnesium Oxide',
      'Mixed Tocopherols (Preservative)',
      'Salt',
      'Vitamin E Supplement',
      'Rosemary Extract',
    ],
    analysis: {
      protein: 59,
      fat: 17,
      fiber: 4,
      moisture: 12,
      carbs: 7,
    },
  },
  elseyDuck: {
    ingredients: [
      'Duck',
      'Dried Chicken',
      'Hydrolyzed Pork',
      'Gelatin',
      'Pork Plasma',
      'Chicken Fat (Preserved with Mixed Tocopherols)',
      'Ground Flaxseed',
      'Dried Pork Liver',
      'Natural Flavor',
      'Salmon Oil',
      'Calcium Carbonate',
      'Potassium Citrate',
      'Potassium Chloride',
      'Choline Chloride',
      'Fructooligosaccharides',
      'Vitamins (Niacin',
      'Vitamin A Supplement',
      'Thiamine Mononitrate',
      'd-Calcium Pantothenate',
      'Folic Acid',
      'Pyridoxine Hydrochloride',
      'Riboflavin',
      'Vitamin D Supplement',
      'Biotin',
      'Vitamin B12)',
      'Minerals (Zinc Proteinate',
      'Zinc Sulfate',
      'Iron Proteinate',
      'Ferrous Sulfate',
      'Copper Proteinate',
      'Copper Sulfate',
      'Manganese Proteinate',
      'Manganese Sulfate',
      'Calcium Iodate',
      'Sodium Selenite)',
      'Magnesium Oxide',
      'Taurine',
      'Mixed Tocopherols (Preservative)',
      'Vitamin E Supplement',
      'Salt',
      'Rosemary Extract',
    ],
    analysis: {
      protein: 58,
      fat: 18,
      fiber: 4,
      moisture: 12,
      carbs: 7,
    },
  },
  elseyRabbit: {
    ingredients: [
      'Rabbit',
      'Dried Chicken',
      'Pork Plasma',
      'Hydrolyzed Pork',
      'Gelatin',
      'Chicken Fat (Preserved with Mixed Tocopherols)',
      'Ground Flaxseed',
      'Dried Pork Liver',
      'Natural Flavor',
      'Salmon Oil',
      'Potassium Citrate',
      'Calcium Carbonate',
      'Choline Chloride',
      'Fructooligosaccharides',
      'Potassium Chloride',
      'Vitamins (Niacin',
      'Vitamin A Supplement',
      'Thiamine Mononitrate',
      'd-Calcium Pantothenate',
      'Folic Acid',
      'Pyridoxine Hydrochloride',
      'Riboflavin',
      'Vitamin D Supplement',
      'Biotin',
      'Vitamin B12)',
      'Minerals (Zinc Proteinate',
      'Zinc Sulfate',
      'Iron Proteinate',
      'Ferrous Sulfate',
      'Copper Proteinate',
      'Copper Sulfate',
      'Manganese Proteinate',
      'Manganese Sulfate',
      'Calcium Iodate',
      'Sodium Selenite)',
      'Magnesium Oxide',
      'Taurine',
      'Mixed Tocopherols (Preservative)',
      'Salt',
      'Vitamin E Supplement',
      'Rosemary Extract',
    ],
    analysis: {
      protein: 58,
      fat: 17,
      fiber: 4,
      moisture: 12,
      carbs: 8,
    },
  },
  elseyTurkey: {
    ingredients: [
      'Turkey',
      'Dried Chicken',
      'Hydrolyzed Pork',
      'Pork Plasma',
      'Chicken Fat (Preserved with Mixed Tocopherols)',
      'Gelatin',
      'Dried Chicken Liver',
      'Ground Flaxseed',
      'Natural Flavor',
      'Salmon Oil',
      'Calcium Carbonate',
      'Potassium Citrate',
      'Potassium Chloride',
      'Choline Chloride',
      'Fructooligosaccharides',
      'Vitamins (Niacin',
      'Vitamin A Supplement',
      'Thiamine Mononitrate',
      'd-Calcium Pantothenate',
      'Folic Acid',
      'Pyridoxine Hydrochloride',
      'Riboflavin',
      'Vitamin D Supplement',
      'Biotin',
      'Vitamin B12)',
      'Minerals (Zinc Proteinate',
      'Zinc Sulfate',
      'Iron Proteinate',
      'Ferrous Sulfate',
      'Copper Proteinate',
      'Copper Sulfate',
      'Manganese Proteinate',
      'Manganese Sulfate',
      'Calcium Iodate',
      'Sodium Selenite)',
      'Taurine',
      'Magnesium Oxide',
      'Mixed Tocopherols (Preservative)',
      'Vitamin E Supplement',
      'Salt',
      'Rosemary Extract',
    ],
    analysis: {
      protein: 56,
      fat: 18,
      fiber: 4,
      moisture: 12,
      carbs: 10,
    },
  },
  hillsCD: {
    ingredients: [
      'Ocean Fish',
      'Cracked Pearled Barley',
      'Whole Grain Oats',
      'Brewers Rice',
      'Corn Protein Meal',
      'Wheat Gluten',
      'Chicken Fat',
      'Chicken Meal',
      'Chicken Liver Flavor',
      'Soybean Oil',
      'Lactic Acid',
      'Flaxseed',
      'Calcium Sulfate',
      'Fish Oil',
      'Potassium Chloride',
      'Choline Chloride',
      'L-Lysine',
      'Taurine',
      'Iodized Salt',
      'DL-Methionine',
      'Potassium Citrate',
      'Vitamin E',
      'Niacin',
      'Thiamine Mononitrate',
      'Pyridoxine Hydrochloride',
      'Calcium Pantothenate',
      'Riboflavin',
      'Biotin',
      'Vitamin A',
      'Vitamin B12',
      'Folic Acid',
      'Vitamin D3',
      'Cysteine',
      'Dried Hydrolyzed Casein',
      'L-Tryptophan',
      'L-Arginine',
      'Ferrous Sulfate',
      'Zinc Oxide',
      'Copper Sulfate',
      'Manganous Oxide',
      'Calcium Iodate',
      'Sodium Selenite',
      'Mixed Tocopherols',
      'Natural Flavors',
      'Beta-Carotene',
    ],
    analysis: {
      protein: 29,
      fat: 13.5,
      fiber: 3,
      moisture: 10,
    },
    tried: true,
    notes: 'Itchy after we switched all the way, intolerant after she binged.',
    rx: true,
    contents: 'Why is corn and wheat so high, 2-6th ingredients??',
    wouldBuy: false,
  },
  royalCanineHydrolyzed: {
    ingredients: [
      'Brewers Rice',
      'Hydrolyzed Soy Protein',
      'Chicken Fat',
      'Powdered Cellulose',
      'Natural Flavors',
      'Dried Plain Beet Pulp',
      'Calcium Sulfate',
      'Fish Oil',
      'Potassium Chloride',
      'Vegetable Oil',
      'Dl-Methionine',
      'Monocalcium Phosphate',
      'Sodium Pyrophosphate',
      'Salt',
      'Sodium Aluminosilicate',
      'Fructooligosaccharides',
      'Calcium Carbonate',
      'Choline Chloride',
      'Vitamin E',
      'Niacin',
      'Vitamin C',
      'D-Calcium Pantothenate',
      'Biotin',
      'Vitamin B6',
      'Riboflavin',
      'Vitamin B1',
      'Vitamin A',
      'Vitamin B12',
      'Folic Acid',
      'Vitamin D3',
      'Taurine',
      'Gla Safflower Oil',
      'Marigold Extract (Tagetes Erecta L.)',
      'Zinc Proteinate',
      'Zinc Oxide',
      'Manganese Proteinate',
      'Manganous Oxide',
      'Copper Sulfate',
      'Ferrous Sulfate',
      'Sodium Selenite',
      'Copper Proteinate',
      'Calcium Iodate',
      'Magnesium Oxide',
      'Rosemary Extract',
      'Mixed Tocopherols',
      'Citric Acid',
    ],
    analysis: {
      protein: 24,
      fat: 18,
      fiber: 5.7,
      moisture: 8,
    },
    tried: true,
    notes: 'Constipated',
    rx: true,
    contents: 'The first ingredient is rice??',
  },
  proPlanHydrolyzed: {
    ingredients: [
      'Rice Starch',
      'Hydrolyzed Soy Protein',
      'Partially Hydrogenated Canola Oil Preserved With TBHQ',
      'Hydrolyzed Chicken Liver',
      'Calcium Sulfate',
      'Powdered Cellulose',
      'Hydrolyzed Chicken',
      'Corn Oil',
      'Tricalcium Phosphate',
      'Fish Oil',
      'L-Lysine Monohydrochloride',
      'Sodium Bisulfate',
      'Potassium Chloride',
      'Choline Chloride',
      'Phosphoric Acid',
      'DL-Methionine',
      'Salt',
      'Guar Gum',
      'Taurine',
      'Vitamin E Supplement',
      'Magnesium Oxide',
      'Zinc Sulfate',
      'Ferrous Sulfate',
      'Niacin',
      'Manganese Sulfate',
      'Vitamin A Supplement',
      'Vitamin B-5',
      'Vitamin B-1',
      'Copper Sulfate',
      'Riboflavin',
      'Vitamin B-12',
      'Pyridoxine Hydrochloride (Vitamin B-6)',
      'Folic Acid (Vitamin B-9)',
      'Vitamin D-3',
      'Calcium Iodate',
      'Biotin (Vitamin B-7)',
      'Menadione Sodium Bisulfite Complex (Vitamin K)',
      'Sodium Selenite',
    ],
    analysis: {
      protein: 31,
      fat: 9,
      fiber: 4,
      moisture: 10,
    },
    tried: false,
    rx: true,
    contents: 'The first ingredient is rice??',
    wouldBuy: null,
  },
  hillsZD: {
    ingredients: [
      'Brewers Rice',
      'Hydrolyzed Chicken Liver',
      'Rice Protein Concentrate',
      'Powdered Cellulose',
      'Soybean Oil',
      'Coconut Oil',
      'Chicken Liver Flavor',
      'Calcium Carbonate',
      'Lactic Acid',
      'Potassium Chloride',
      'Calcium Sulfate',
      'Glyceryl Monostearate',
      'Dicalcium Phosphate',
      'L-Threonine',
      'DL-Methionine',
      'L-Lysine',
      'Choline Chloride',
      'vitamins (Vitamin E Supplement',
      'L-Ascorbyl-2-Polyphosphate (source of Vitamin C)',
      'Niacin Supplement',
      'Thiamine Mononitrate',
      'Vitamin A Supplement',
      'Calcium Pantothenate',
      'Biotin',
      'Vitamin B12 Supplement',
      'Riboflavin Supplement',
      'Pyridoxine Hydrochloride',
      'Folic Acid',
      'Vitamin D3 Supplement)',
      'Taurine',
      'Iodized Salt',
      'Potassium Citrate',
      'L-Tryptophan',
      'minerals (Ferrous Sulfate',
      'Zinc Oxide',
      'Copper Sulfate',
      'Manganous Oxide',
      'Calcium Iodate',
      'Sodium Selenite)',
      'Mixed Tocopherols for freshness',
      'Natural Flavors',
      'Beta-Carotene',
    ],
    analysis: {
      protein: 29,
      fat: 10.5,
      fiber: 4.5,
      moisture: 9,
    },
    tried: false,
    rx: true,
    contents: 'The first ingredient is rice??',
  },
  hillsSensitiveStomach: {
    ingredients: [
      'Chicken',
      'Brewers Rice',
      'Corn Gluten Meal',
      'Whole Grain Corn',
      'Chicken Fat',
      'Chicken Meal',
      'Egg Product',
      'Chicken Liver Flavor',
      'Soybean Oil',
      'Lactic Acid',
      'Oat Fiber',
      'L-Lysine',
      'Potassium Chloride',
      'Choline Chloride',
      'Fructooligosaccharides (FOS)',
      'Iodized Salt',
      'DL-Methionine',
      'Taurine',
      'vitamins (Vitamin E Supplement',
      'L-Ascorbyl-2-Polyphosphate (source of Vitamin C)',
      'Niacin Supplement',
      'Thiamine Mononitrate',
      'Vitamin A Supplement',
      'Calcium Pantothenate',
      'Riboflavin Supplement',
      'Biotin',
      'Vitamin B12 Supplement',
      'Pyridoxine Hydrochloride',
      'Folic Acid',
      'Vitamin D3 Supplement)',
      'Calcium Carbonate',
      'L-Tryptophan',
      'minerals (Ferrous Sulfate',
      'Zinc Oxide',
      'Copper Sulfate',
      'Manganous Oxide',
      'Calcium Iodate',
      'Sodium Selenite)',
      'Mixed Tocopherols for freshness',
      'Natural Flavors',
      'Beta-Carotene',
    ],
    analysis: {
      protein: 29,
      fat: 17,
      fiber: 3,
      moisture: 10,
    },
    tried: false,
    notes: '',
    rx: false,
    content: 'Rice and corn 2nd and 3rd',
  },
  hillsGastroBiome: {
    ingredients: [
      'Chicken',
      'Brewers Rice',
      'Corn Protein Meal',
      'Chicken Fat',
      'Wheat Gluten',
      'Pea Protein',
      'Whole Grain Corn',
      'Chicken Meal',
      'Whole Grain Oats',
      'Ground Pecan Shells',
      'Cracked Pearled Barley',
      'Dried Beet Pulp',
      'Chicken Liver Flavor',
      'Flaxseed',
      'Psyllium Seed Husk',
      'Dried Citrus Pulp',
      'Fish Oil',
      'Lactic Acid',
      'L-Lysine',
      'Pumpkin',
      'Pressed Cranberries',
      'Fructooligosaccharides (FOS)',
      'Potassium Chloride',
      'DL-Methionine',
      'Choline Chloride',
      'Taurine',
      'Iodized Salt',
      'vitamins (Vitamin E Supplement',
      'L-Ascorbyl-2-Polyphosphate (source of Vitamin C)',
      'Niacin Supplement',
      'Thiamine Mononitrate',
      'Vitamin A Supplement',
      'Calcium Pantothenate',
      'Riboflavin Supplement',
      'Biotin',
      'Vitamin B12 Supplement',
      'Pyridoxine Hydrochloride',
      'Folic Acid',
      'Vitamin D3 Supplement)',
      'Dried Hydrolyzed Casein',
      'Calcium Sulfate',
      'L-Tryptophan',
      'minerals (Ferrous Sulfate',
      'Zinc Oxide',
      'Copper Sulfate',
      'Manganous Oxide',
      'Calcium Iodate',
      'Sodium Selenite)',
      'Mixed Tocopherols for freshness',
      'Natural Flavors',
      'Beta-Carotene',
    ],
    analysis: {
      protein: 37.5,
      fat: 16.9,
      fiber: 3.4,
      moisture: 9,
      carbs: 23,
    },
    tried: false,
    rx: true,
    content: 'Loooots of grains',
  },
  royalCaninGastroFiber: {
    ingredients: [
      'Brewers Rice',
      'Chicken By-Product Meal',
      'Corn',
      'Chicken Fat',
      'Powdered Psyllium Seed Husk',
      'Wheat Gluten',
      'Natural Flavors',
      'Corn Protein Meal',
      'Dried Chicory Root',
      'Egg Product',
      'Potassium Chloride',
      'Vegetable Oil',
      'Calcium Sulfate',
      'Fish Oil',
      'Sodium Pyrophosphate',
      'Monocalcium Phosphate',
      'Dl-Methionine',
      'Choline Chloride',
      'Fructooligosaccharides',
      'Salt',
      'Vitamins[Dl-Alpha Tocopherol Acetate (Source Of Vitamin E)',
      'L-Ascorbyl-2-Polyphosphate (Source Of Vitamin C)',
      'Niacin Supplement',
      'Biotin',
      'Riboflavin Supplement',
      'D-Calcium Pantothenate',
      'Pyridoxine Hydrochloride (Vitamin B6)',
      'Vitamin A Acetate',
      'Thiamine Mononitrate (Vitamin B1)',
      'Vitamin B12 Supplement',
      'Folic Acid',
      'Vitamin D3 Supplement]',
      'Marine Microalgae Oil',
      'Taurine',
      'Hydrolyzed Yeast',
      'Trace Minerals[Zinc Proteinate',
      'Zinc Oxide',
      'Manganese Proteinate',
      'Ferrous Sulfate',
      'Manganous Oxide',
      'Copper Sulfate',
      'Sodium Selenite',
      'Calcium Iodate',
      'Copper Proteinate]',
      'Marigold Extract (Tagetes Erecta L.)',
      'Rosemary Extract',
      'Preserved With Mixed Tocopherols And Citric Acid',
    ],
    analysis: {
      protein: 29,
      fat: 13,
      fiber: 4.7,
      moisture: 7.5,
    },
    tried: false,
    rx: true,
    content: 'Rice and corn 1st and 3rd',
  },
  proPlanEN: {
    ingredients: [
      'Soy Protein Isolate',
      'Poultry By-Product Meal',
      'Corn Protein Meal',
      'Soy Flakes',
      'Animal Fat Preserved With Mixed-Tocopherols',
      'Corn Starch',
      'Natural Flavor',
      'Calcium Carbonate',
      'Phosphoric Acid',
      'Fish Oil',
      'Potassium Chloride',
      'Choline Chloride',
      'Dl-Methionine',
      'Powdered Cellulose',
      'Taurine',
      'Zinc Proteinate',
      'Salt',
      'Dried Colostrum',
      'Vitamin E Supplement',
      'Manganese Proteinate',
      'Thiamine Mononitrate (Vitamin B-1)',
      'Ferrous Sulfate',
      'Niacin (Vitamin B-3)',
      'Vitamin A Supplement',
      'Calcium Pantothenate (Vitamin B-5)',
      'Copper Proteinate',
      'Riboflavin Supplement (Vitamin B-2)',
      'Vitamin B-12 Supplement',
      'Pyridoxine Hydrochloride (Vitamin B-6)',
      'Folic Acid (Vitamin B-9)',
      'Vitamin D-3 Supplement',
      'Biotin (Vitamin B-7)',
      'Calcium Iodate',
      'Menadione Sodium Bisulfite Complex (Vitamin K)',
      'Sodium Selenite',
    ],
    analysis: {
      protein: 50,
      fat: 16,
      fiber: 3,
      moisture: 12,
      carbs: 11.5,
    },
    tried: false,
    rx: true,
    contents: 'Ingredients are vague, but good protein',
  },
  hillsFoodSensitivities: {
    ingredients: [
      'Yellow Peas',
      'Pea Protein',
      'Venison',
      'Green Peas',
      'Soybean Oil',
      'Powdered Cellulose',
      'Chicken Liver Flavor',
      'Coconut Oil',
      'Calcium Sulfate',
      'Fish Oil',
      'Lactic Acid',
      'Choline Chloride',
      'Potassium Chloride',
      'DL-Methionine',
      'Taurine',
      'Iodized Salt',
      'Calcium Carbonate',
      'Glyceryl Monostearate',
      'vitamins (Vitamin E Supplement',
      'L-Ascorbyl-2-Polyphosphate (source of Vitamin C)',
      'Niacin Supplement',
      'Thiamine Mononitrate',
      'Vitamin A Supplement',
      'Calcium Pantothenate',
      'Riboflavin Supplement',
      'Biotin',
      'Vitamin B12 Supplement',
      'Pyridoxine Hydrochloride',
      'Folic Acid',
      'Vitamin D3 Supplement)',
      'Dicalcium Phosphate',
      'minerals (Ferrous Sulfate',
      'Zinc Oxide',
      'Copper Sulfate',
      'Manganous Oxide',
      'Calcium Iodate',
      'Sodium Selenite)',
      'Cysteine',
      'Mixed Tocopherols for freshness',
      'Natural Flavors',
      'Beta-Carotene',
    ],
    analysis: {
      protein: 29,
      fat: 16.5,
      fiber: 7.5,
      moisture: 8,
    },
    tried: false,
    content: 'Absolutely not, why are 3/4 of the top ingredients peas',
    rx: true,
  },
  tikiBornCarnivoreIndoorChickenAndEgg: {
    ingredients: [
      'Deboned Chicken',
      'Chicken Meal',
      'Dehydrated Chicken',
      'Dried Egg Product',
      'Tapioca',
      'Natural Chicken Flavor',
      'Ground Whole Flaxseed',
      'Chickpeas',
      'Peas',
      'Chicken Fat (Preserved With Mixed Tocopherols And Citric Acid)',
      'Brewers Dried Yeast',
      'Calcium Sulfate',
      'Choline Chloride',
      'Inulin (Prebiotic)',
      'Salmon Oil',
      'Pumpkin',
      'Taurine',
      'Ferrous Sulfate',
      'Zinc Sulfate',
      'Vitamin E Supplement',
      'Niacin Supplement (Vitamin B3)',
      'Copper Sulfate',
      'Vitamin A Supplement',
      'Manganese Sulfate',
      'Thiamine Mononitrate (Vitamin B1)',
      'D-Calcium Pantothenate',
      'Pyridoxine Hydrochloride (Vitamin B6)',
      'Biotin',
      'Riboflavin Supplement (Vitamin B2)',
      'Vitamin B12 Supplement',
      'Vitamin D3 Supplement',
      'Calcium Iodate',
      'Folic Acid',
      'Sodium Selenite',
      'Rosemary Extract',
      'Ascorbic Acid (Preservative)',
      'Citric Acid',
      'Tannic Acid',
    ],
    analysis: {
      protein: 43,
      fat: 19,
      fiber: 3.5,
      moisture: 10,
      carbs: 17.5,
    },
    tried: false,
    contents:
      "peas but they're pretty far down. They were recently bought by big name though so quality might go down",
  },
  // elsey: {
  //     ingredients: [],
  //     analysis: {
  //         protein:null,
  //         fat:null,
  //         fiber:null,
  //         moisture:null
  //     },
  //   tried:
  //   good:
  //   notes
  // }
};
