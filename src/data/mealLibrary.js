export const CONDITION_PRESETS = [
  {
    id: 'diabetic',
    label: 'Diabetic Friendly (Low GI & Fiber Focus)',
    description: 'Stabilizes postprandial glucose, low glycemic load, high soluble fiber, timed carbs.',
    defaultTargetCalories: 1450,
    defaultProteinG: 20,
    defaultCarbsG: 155,
    defaultFatsG: 38,
    clinicalGuidelines: 'Prioritize fenugreek, cinnamon, legumes, jowar, and leafy greens. Avoid simple refined flours and added sugar.'
  },
  {
    id: 'cholesterol',
    label: 'Cardio-Protective (Low LDL Cholesterol & Sodium)',
    description: 'Low saturated fat (<7% calories), rich in plant sterols, omega-3, garlic and soluble oats/fiber.',
    defaultTargetCalories: 1500,
    defaultProteinG: 22,
    defaultCarbsG: 170,
    defaultFatsG: 32,
    clinicalGuidelines: 'Restrict ghee, butter, and palm oils. Use cold-pressed mustard or olive oil (max 2 tsp/day). Include walnuts & flaxseeds.'
  },
  {
    id: 'weight_loss',
    label: 'Weight Loss & High Protein (Fat Reduction)',
    description: 'Calorie deficit with elevated protein to preserve lean muscle, enhance satiety, and stimulate metabolism.',
    defaultTargetCalories: 1600,
    defaultProteinG: 25,
    defaultCarbsG: 140,
    defaultFatsG: 42,
    clinicalGuidelines: 'Aim for 20-30g protein per major meal. Replace starchy sides with high-volume greens and sprouted lentils.'
  },
  {
    id: 'pcod',
    label: 'PCOD / PCOS & Insulin Resistance',
    description: 'Anti-inflammatory, balances androgen levels, low inflammatory dairy/gluten, complex whole grains.',
    defaultTargetCalories: 1550,
    defaultProteinG: 22,
    defaultCarbsG: 150,
    defaultFatsG: 45,
    clinicalGuidelines: 'Spearmint infusion, zinc-rich pumpkin seeds, cruciferous vegetables, and strict exclusion of high-fructose corn sweeteners.'
  }
];

export const CUISINE_PRESETS = [
  {
    id: 'north_indian',
    label: 'North Indian Home-Style',
    staples: 'Roti (multigrain/jowar), yellow & black dals, seasonal subzi, curd, paneer, besan.',
  },
  {
    id: 'south_indian',
    label: 'South Indian Traditional',
    staples: 'Steamed idli/dosa variants (ragi/oats), sambar with drumsticks, rasam, thoran, curd.',
  },
  {
    id: 'pan_indian',
    label: 'Pan-Indian Balanced',
    staples: 'Khichdi, dal-chawal (portion-controlled), poha, daliya, sprouted chaat.',
  },
  {
    id: 'eggetarian',
    label: 'Indian Eggetarian / High Protein',
    staples: 'Boiled eggs, egg white bhurji, soya chunks, tofu, chana, paneer.',
  }
];

export const MEAL_TEMPLATES_CATALOG = {
  // Diabetic + North Indian
  'diabetic_north_indian': [
    {
      slot: 'breakfast',
      title: 'Breakfast (8:30 AM)',
      dish: 'Moong Dal & Palak Cheela with Mint Curd Chutney',
      basePortion: '2 medium cheelas ({cheelaGrams}g batter) + 2 tbsp mint curd chutney',
      baseProtein: 18,
      baseCarbs: 26,
      baseFats: 6,
      baseCalories: 240,
      alternatives: [
        'Vegetable Daliya with roasted peanuts & fenugreek (1.5 bowls)',
        'Sprouted Moong & Oats Idli with coconut coriander chutney (3 pcs)'
      ],
      clinicalTip: 'Moong dal and palak have an exceptionally low glycemic index and stabilize dawn phenomenon spikes.'
    },
    {
      slot: 'mid_morning',
      title: 'Mid-Morning (11:00 AM)',
      dish: 'Soaked Walnuts (4 halves) + 1 glass Warm Cinnamon Infused Water',
      basePortion: '20g walnuts + 250ml infused water',
      baseProtein: 3,
      baseCarbs: 4,
      baseFats: 12,
      baseCalories: 135,
      alternatives: [
        '1 Green Apple sprinkled with cinnamon powder',
        'Roasted Makhana with black salt (1 cup)'
      ],
      clinicalTip: 'Cinnamon has cinnamaldehyde which mimics insulin and enhances glucose uptake.'
    },
    {
      slot: 'lunch',
      title: 'Lunch (1:30 PM)',
      dish: 'Multigrain Roti (Jowar+Methi) + Yellow Moong Dal + Low Fat Paneer Bhurji + Raw Cucumber Salad',
      basePortion: '2 small rotis + 1 bowl dal + {paneerGrams}g paneer + 1 large bowl cucumber & radish slices',
      baseProtein: 22,
      baseCarbs: 48,
      baseFats: 11,
      baseCalories: 390,
      alternatives: [
        'Brown Rice & Moong Khichdi (1.5 cups) + Lauki Raita + steamed French beans',
        '2 Bajra Rotis with Baingan Bharta + Sprouted Kala Chana Gravy'
      ],
      clinicalTip: 'Eat the raw cucumber salad 10 minutes prior to rotis to form a gel matrix in the gut that slows sugar absorption.'
    },
    {
      slot: 'evening_snack',
      title: 'Evening Snack (5:00 PM)',
      dish: 'Sprouted Green Moong & Lemon Chaat + Green Tea (unsweetened)',
      basePortion: '{sproutGrams}g sprouted moong tossed with chopped onions, tomato & lemon',
      baseProtein: 12,
      baseCarbs: 22,
      baseFats: 2,
      baseCalories: 155,
      alternatives: [
        'Roasted Chana (1 fistful) + Mint Ginger Tea',
        'Boiled Sweet Corn (half cup) with chaat masala'
      ],
      clinicalTip: 'Prevents evening energy slumps without triggering insulin surge.'
    },
    {
      slot: 'dinner',
      title: 'Dinner (8:00 PM)',
      dish: 'Lauki & Moong Dal Wholesome Porridge OR 1 Jowar Roti + Tofu/Palak Gravy + Cucumber Salad',
      basePortion: '1.5 bowl lauki moong porridge ({tofuGrams}g tofu if opting for roti)',
      baseProtein: 15,
      baseCarbs: 42,
      baseFats: 7,
      baseCalories: 310,
      alternatives: [
        'Clear Vegetable & Moong Dal Broth with steamed florets of broccoli',
        '1 Multigrain Roti with Methi Mushroom Subzi + thin buttermilk'
      ],
      clinicalTip: 'Light easy-to-digest dinner ensures optimal overnight resting insulin sensitivity.'
    }
  ],

  // Diabetic + South Indian
  'diabetic_south_indian': [
    {
      slot: 'breakfast',
      title: 'Breakfast (8:30 AM)',
      dish: 'Ragi & Oats Steamed Idli (3 pcs) + Vegetable Drumstick Sambar + Tomato Chutney',
      basePortion: '3 idlis (no white rice) + 1 large bowl vegetable sambar + 1 tbsp tomato chutney',
      baseProtein: 16,
      baseCarbs: 36,
      baseFats: 4,
      baseCalories: 250,
      alternatives: ['Pesarattu (Green Gram Dosa) with ginger chutney', 'Vegetable Upma with broken wheat and green peas'],
      clinicalTip: 'Ragi (Finger Millet) is high in polyphenols and dietary fiber.'
    },
    {
      slot: 'mid_morning',
      title: 'Mid-Morning (11:00 AM)',
      dish: 'Tender Coconut Water (1 glass) OR Chaas with Curry Leaves',
      basePortion: '200ml fresh tender coconut water or spiced buttermilk',
      baseProtein: 2,
      baseCarbs: 8,
      baseFats: 1,
      baseCalories: 50,
      alternatives: ['Roasted Pumpkin & Sunflower Seeds (1 tbsp)', 'Guava slices with red chili powder'],
      clinicalTip: 'Curry leaves contain carbazole alkaloids with anti-hyperglycemic properties.'
    },
    {
      slot: 'lunch',
      title: 'Lunch (1:30 PM)',
      dish: 'Brown Rice (1 small cup) + Mixed Vegetable Sambar + Cabbage Thoran + Curd Katori',
      basePortion: '1 cup cooked brown rice + 1.5 bowl sambar with lots of veggies + 1 bowl thoran + 1/2 cup curd',
      baseProtein: 18,
      baseCarbs: 55,
      baseFats: 8,
      baseCalories: 380,
      alternatives: ['Ragi Mudde (1 ball) with Horse Gram Saaru (Kollu) + Beans Poriyal'],
      clinicalTip: 'Sambar prepared with toor dal and drumsticks offers an ideal protein-fiber buffer.'
    },
    {
      slot: 'evening_snack',
      title: 'Evening Snack (5:00 PM)',
      dish: 'Sundal (Boiled Chickpea or White Chana with Mustard & Grated Coconut)',
      basePortion: '1 bowl ({sproutGrams}g sundal) + herbal black tea',
      baseProtein: 11,
      baseCarbs: 24,
      baseFats: 3,
      baseCalories: 170,
      alternatives: ['Roasted Soya nuts (1 handful)', 'Moong Dal boiled snack with lemon'],
      clinicalTip: 'Sundal is traditional South Indian fitness fuel with zero refined sugar.'
    },
    {
      slot: 'dinner',
      title: 'Dinner (8:00 PM)',
      dish: 'Vegetable & Oats Upma OR 2 Multigrain Dosas with Palak Kootu',
      basePortion: '1.5 bowl upma packed with carrots, beans and curry leaves',
      baseProtein: 14,
      baseCarbs: 44,
      baseFats: 6,
      baseCalories: 300,
      alternatives: ['Millet Kanji (thin porridge) with spiced buttermilk and cucumber'],
      clinicalTip: 'Light dinner before 8 PM aids in keeping overnight glucose under 100 mg/dL.'
    }
  ],

  // Weight Loss + Eggetarian
  'weight_loss_eggetarian': [
    {
      slot: 'breakfast',
      title: 'Breakfast (8:00 AM)',
      dish: '3 Egg Whites + 1 Whole Egg Scramble with Spinach & Mushrooms + 1 Multigrain Toast',
      basePortion: '4 eggs (3 whites, 1 yolk) + 1 toast + green tea',
      baseProtein: 26,
      baseCarbs: 18,
      baseFats: 8,
      baseCalories: 260,
      alternatives: ['Paneer & Egg White Bhurji (100g paneer + 2 whites) with 1 small roti'],
      clinicalTip: '30g protein at breakfast elevates peptide YY, keeping you satiated until lunchtime.'
    },
    {
      slot: 'mid_morning',
      title: 'Mid-Morning (11:00 AM)',
      dish: 'Spiced Buttermilk with Chia Seeds + 1 handful Roasted Chana',
      basePortion: '250ml buttermilk + 1 tsp chia seeds + 20g roasted chana',
      baseProtein: 8,
      baseCarbs: 12,
      baseFats: 4,
      baseCalories: 120,
      alternatives: ['Whey isolate protein shake in water (24g protein, 110 kcal)'],
      clinicalTip: 'Hydrates electrolytes while boosting dietary calcium and amino acids.'
    },
    {
      slot: 'lunch',
      title: 'Lunch (1:30 PM)',
      dish: 'Grilled Paneer / Soya Chunks Tikka + Brown Rice (1 cup) + Steamed Broccoli & Carrot Medley',
      basePortion: '{paneerGrams}g grilled paneer/soya + 1 cup rice + 1 large bowl broccoli',
      baseProtein: 28,
      baseCarbs: 45,
      baseFats: 12,
      baseCalories: 420,
      alternatives: ['Egg Curry (3 boiled egg whites + 1 whole) with 2 Jowar Rotis + Cucumber Salad'],
      clinicalTip: 'Broccoli contains indole-3-carbinol which aids cellular metabolism and fat oxidation.'
    },
    {
      slot: 'evening_snack',
      title: 'Evening Snack (5:00 PM)',
      dish: 'Boiled Egg White Chaat with Diced Onion, Tomatoes & Coriander',
      basePortion: '3 boiled egg whites sliced + chaat spices + black coffee',
      baseProtein: 14,
      baseCarbs: 4,
      baseFats: 1,
      baseCalories: 90,
      alternatives: ['Roasted Soya Chunks (30g) seasoned with oregano and paprika'],
      clinicalTip: 'Pure lean protein bridge between lunch and dinner without spiking blood insulin.'
    },
    {
      slot: 'dinner',
      title: 'Dinner (8:00 PM)',
      dish: 'Soya & Vegetable Soup + 1 Multigrain Roti with Palak Dal',
      basePortion: '1 large bowl high-protein soup + 1 small roti with 1 bowl dal',
      baseProtein: 22,
      baseCarbs: 36,
      baseFats: 7,
      baseCalories: 310,
      alternatives: ['Tofu & Bell Pepper Stir-fry in garlic sauce + clear mushroom broth'],
      clinicalTip: 'Early light dinner ensures maximum growth hormone release during deep sleep.'
    }
  ]
};

/**
 * Recalculate dynamic meal portions and macro totals based on nutritionist fine-tuning
 * Exactly addresses voice note: "She needs 20 grams of protein, not 25 grams of protein.
 * She will enter it there and the changes will be shown to her."
 */
export function recalculateMealPlan(conditionId, cuisineId, targetProteinG, targetCalories = 1500) {
  const key = `${conditionId}_${cuisineId}`;
  let template = MEAL_TEMPLATES_CATALOG[key] || MEAL_TEMPLATES_CATALOG['diabetic_north_indian'];

  // Base protein reference in template is ~22g average per main meal
  const scaleFactor = Math.max(0.6, Math.min(1.8, targetProteinG / 22));

  // Dynamic portion numbers based on target protein
  const paneerGrams = Math.round(50 * scaleFactor);
  const cheelaGrams = Math.round(110 * scaleFactor);
  const sproutGrams = Math.round(100 * scaleFactor);
  const tofuGrams = Math.round(75 * scaleFactor);

  const updatedMeals = template.map((meal) => {
    // Scale protein and calories proportionally
    const scaledProtein = Math.round(meal.baseProtein * scaleFactor);
    // Calories adjust based on protein difference (1g protein = 4 kcal)
    const calDelta = (scaledProtein - meal.baseProtein) * 4;
    const scaledCalories = Math.max(50, Math.round(meal.baseCalories + calDelta));

    // Fill in dynamic portion descriptions
    const dynamicPortion = meal.basePortion
      .replace('{paneerGrams}', paneerGrams)
      .replace('{cheelaGrams}', cheelaGrams)
      .replace('{sproutGrams}', sproutGrams)
      .replace('{tofuGrams}', tofuGrams);

    return {
      id: `m_${meal.slot}_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
      slot: meal.slot,
      title: meal.title,
      dish: meal.dish,
      portion: dynamicPortion,
      proteinG: scaledProtein,
      carbsG: meal.baseCarbs,
      fatsG: meal.baseFats,
      calories: scaledCalories,
      alternatives: meal.alternatives,
      clinicalTip: meal.clinicalTip,
    };
  });

  const totalProtein = updatedMeals.reduce((acc, m) => acc + m.proteinG, 0);
  const totalCalories = updatedMeals.reduce((acc, m) => acc + m.calories, 0);
  const totalCarbs = updatedMeals.reduce((acc, m) => acc + m.carbsG, 0);
  const totalFats = updatedMeals.reduce((acc, m) => acc + m.fatsG, 0);

  return {
    id: `plan_${Date.now()}`,
    name: `Customized ${conditionId.toUpperCase()} Plan (${targetProteinG}g Target Protein)`,
    conditionPreset: conditionId,
    cuisinePreset: cuisineId,
    targetCalories: totalCalories,
    targetProteinG: targetProteinG,
    targetCarbsG: totalCarbs,
    targetFatsG: totalFats,
    targetFiberG: Math.round(totalCarbs * 0.22),
    meals: updatedMeals,
  };
}

