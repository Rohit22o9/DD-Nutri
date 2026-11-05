export const CONDITION_PRESETS = [
  {
    id: 'diabetic',
    label: 'Diabetic Friendly (Low GI & Fiber Focus)',
    tag: 'Glycemic Control',
    icon: 'Activity',
    description: 'Stabilizes postprandial glucose, low glycemic load, high soluble fiber, timed complex carbs.',
    defaultTargetCalories: 1450,
    defaultProteinG: 20,
    defaultCarbsG: 155,
    defaultFatsG: 38,
    clinicalGuidelines: 'Prioritize fenugreek, cinnamon, legumes, jowar, and leafy greens. Avoid simple refined flours and added sugar.'
  },
  {
    id: 'cholesterol',
    label: 'Cardio-Protective (Low LDL & Sodium)',
    tag: 'Heart Care',
    icon: 'Heart',
    description: 'Low saturated fat (<7% calories), rich in plant sterols, omega-3, garlic and soluble oats/fiber.',
    defaultTargetCalories: 1500,
    defaultProteinG: 22,
    defaultCarbsG: 170,
    defaultFatsG: 32,
    clinicalGuidelines: 'Restrict ghee, butter, and palm oils. Use cold-pressed mustard or olive oil (max 2 tsp/day). Include walnuts & flaxseeds.'
  },
  {
    id: 'weight_loss',
    label: 'Weight Loss & High Protein (Fat Loss)',
    tag: 'Fat Loss',
    icon: 'Flame',
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
    tag: 'Hormonal Balance',
    icon: 'Sparkles',
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
    regionTag: 'Delhi & Punjab',
    staples: 'Roti (multigrain/jowar), yellow & black dals, seasonal subzi, curd, paneer, besan.',
  },
  {
    id: 'south_indian',
    label: 'South Indian Traditional',
    regionTag: 'Kerala & Tamil Nadu',
    staples: 'Steamed idli/dosa variants (ragi/oats), sambar with drumsticks, rasam, thoran, curd.',
  },
  {
    id: 'pan_indian',
    label: 'Pan-Indian Balanced',
    regionTag: 'Multi-Regional Home',
    staples: 'Khichdi, dal-chawal (portion-controlled), poha, daliya, sprouted chaat.',
  },
  {
    id: 'eggetarian',
    label: 'Indian Eggetarian / High Protein',
    regionTag: 'Protein Enriched',
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
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
      prepMethod: 'Cooked on cast-iron tava with 1/2 tsp cold-pressed oil',
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
      image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=500&q=80',
      prepMethod: 'Overnight water soaked, skins intact',
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
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80',
      prepMethod: 'Freshly ground flour, salt-controlled dal tadka',
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
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80',
      prepMethod: 'Raw organic sprouted moong, lemon dressing',
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
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
      prepMethod: 'Slow pressure-cooked, easy digestion formula',
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
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=500&q=80',
      prepMethod: 'Steamed, zero oil formulation',
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
      image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=500&q=80',
      prepMethod: 'Fresh cracked, unsweetened natural electrolytes',
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
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80',
      prepMethod: 'Low-starch drained brown rice with fresh grated coconut thoran',
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
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80',
      prepMethod: 'Steamed legumes, tempered with curry leaves and mustard seeds',
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
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
      prepMethod: 'Rolled oats roasted dry, steamed with carrots & french beans',
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
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80',
      prepMethod: 'Olive oil spray, high bio-available egg albumin',
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
      image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=500&q=80',
      prepMethod: 'Churned curd with roasted cumin, rock salt and soaked chia',
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
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=500&q=80',
      prepMethod: 'Marinated in low-fat hung curd & tandoori spices, air-grilled',
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
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80',
      prepMethod: 'Hard boiled, tossed with chaat spices and lime juice',
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
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80',
      prepMethod: 'Slow simmered vegetable stock, protein-dense chunks',
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
 */
export function recalculateMealPlan(conditionId, cuisineId, targetProteinG, targetCalories = 1500) {
  const key = `${conditionId}_${cuisineId}`;
  let template = MEAL_TEMPLATES_CATALOG[key] || MEAL_TEMPLATES_CATALOG['diabetic_north_indian'];

  const scaleFactor = Math.max(0.6, Math.min(1.8, targetProteinG / 22));

  const paneerGrams = Math.round(50 * scaleFactor);
  const cheelaGrams = Math.round(110 * scaleFactor);
  const sproutGrams = Math.round(100 * scaleFactor);
  const tofuGrams = Math.round(75 * scaleFactor);

  const updatedMeals = template.map((meal) => {
    const scaledProtein = Math.round(meal.baseProtein * scaleFactor);
    const calDelta = (scaledProtein - meal.baseProtein) * 4;
    const scaledCalories = Math.max(50, Math.round(meal.baseCalories + calDelta));

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
      image: meal.image,
      prepMethod: meal.prepMethod,
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
    name: `Daily Drop Customized ${conditionId.toUpperCase()} Care Plan (${targetProteinG}g Target Protein)`,
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
