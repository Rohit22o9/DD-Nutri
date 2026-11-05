export const initialClients = [
  {
    id: 'client_priya',
    name: 'Priya Sharma',
    age: 42,
    gender: 'Female',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    phone: '+91 98201 44521',
    email: 'priya.sharma@example.com',
    startDate: '2026-10-01',
    targetDuration: '6 Months',
    targetDurationMonths: 6,
    currentWeek: 5,
    primaryGoal: 'Reduce Sugar & Cholesterol',
    goalDescription: 'Lower HbA1c from 7.8% to <6.5%, reduce LDL cholesterol, and achieve healthy weight loss (6-8 kg).',
    conditions: ['Type 2 Diabetes', 'High LDL Cholesterol', 'Borderline Hypertension'],
    biometrics: {
      heightCm: 162,
      currentWeightKg: 73.5,
      targetWeightKg: 65.0,
      bmi: 28.0,
      hba1c: 7.8,
      fastingGlucose: 148,
      ldlCholesterol: 162,
      totalCholesterol: 235,
      bloodPressure: '135/88 mmHg',
    },
    lifestyle: {
      activityLevel: 'Sedentary (IT Desk Job)',
      sleepHours: '6.5 hours / night',
      waterIntakeLitres: 1.8,
      dietaryPreference: 'North Indian Vegetarian',
      currentEatingHabits: 'Skips breakfast often, high intake of evening fried snacks (samosas/biscuits with sweet chai), late dinners at 10 PM with refined rotis and potatoes.',
      exerciseRoutine: 'Occasional 20-min evening walk 2 days/week. Desires guided home routine.',
      allergies: ['Dust/Pollen', 'Mild lactose sensitivity'],
    },
    activeMealPlan: {
      id: 'plan_priya_v2',
      name: 'Diabetic & Cardio Care Plan',
      conditionPreset: 'Diabetic Friendly (Low GI)',
      cuisinePreset: 'North Indian Home-Style',
      targetCalories: 1450,
      targetProteinG: 20, // Notice this! Can be tuned between 15g - 35g
      targetCarbsG: 160,
      targetFatsG: 40,
      targetFiberG: 32,
      meals: [
        {
          id: 'm1',
          slot: 'breakfast',
          title: 'Breakfast (8:30 AM)',
          dish: 'Moong Dal & Palak Cheela with Mint Curd Chutney',
          portion: '2 medium cheelas (approx 120g batter) + 2 tbsp homemade mint curd dip',
          proteinG: 18,
          carbsG: 28,
          fatsG: 6,
          calories: 260,
          alternatives: [
            'Sprouted Methi & Oats Upma with Vegetables (1.5 cup)',
            'Besan Veggie Toast with 1 cup warm unsweetened almond/cinnamon milk'
          ],
          clinicalTip: 'Rich in soluble fiber and fenugreek to prevent morning postprandial glucose spike.'
        },
        {
          id: 'm2',
          slot: 'mid_morning',
          title: 'Mid-Morning (11:00 AM)',
          dish: 'Soaked Walnuts (4 halves) + 1 glass Chia-Cumin Seed Infusion',
          portion: '20g nuts + 250ml warm infused water',
          proteinG: 3,
          carbsG: 4,
          fatsG: 12,
          calories: 140,
          alternatives: [
            '1 small tender green apple with a dash of cinnamon powder',
            'Roasted Makhana (1 cup) tossed with turmeric and pinch of black salt'
          ],
          clinicalTip: 'Omega-3 fatty acids lower systemic inflammation and support LDL clearance.'
        },
        {
          id: 'm3',
          slot: 'lunch',
          title: 'Lunch (1:30 PM)',
          dish: 'Multigrain Roti (Jowar + Wheat) + Methi Paneer (low fat) + Yellow Dal + Cucumber Katori',
          portion: '2 small rotis + 1 katori methi paneer (50g paneer) + 1 katori dal + 1 large bowl salad',
          proteinG: 22,
          carbsG: 52,
          fatsG: 12,
          calories: 420,
          alternatives: [
            'Brown Rice & Quinoa Khichdi with lots of Lauki and French beans + 1 katori curd',
            '2 Bajra Rotis with Baingan Bharta + Sprouted Moong Usal'
          ],
          clinicalTip: 'Always start with the salad first to slow glucose absorption into the bloodstream.'
        },
        {
          id: 'm4',
          slot: 'evening_snack',
          title: 'Evening Snack (5:00 PM)',
          dish: 'Sprouted Moong Chaat with Chopped Tomatoes, Lemon & Chaat Masala',
          portion: '1 medium bowl (120g sprouts) + green tea without sugar',
          proteinG: 12,
          carbsG: 24,
          fatsG: 2,
          calories: 160,
          alternatives: [
            'Boiled Kala Chana Chaat with diced cucumber and bell peppers',
            'Roasted Sattu Drink with lemon juice, mint and roasted jeera'
          ],
          clinicalTip: 'Prevents late-afternoon sugar drops and replaces biscuits/cookies.'
        },
        {
          id: 'm5',
          slot: 'dinner',
          title: 'Dinner (8:00 PM)',
          dish: 'Lauki & Moong Dal Khichdi OR 1 Jowar Roti + Stir-fried Bhindi + Curd',
          portion: '1.5 bowl wholesome khichdi + 1 bowl cucumber raita (low fat)',
          proteinG: 15,
          carbsG: 48,
          fatsG: 8,
          calories: 340,
          alternatives: [
            'Warm Vegetable Soup (tomato-carrot-spinach) + Tofu & Broccoli stir fry',
            '1 Multigrain Roti with Palak Dal and steamed beans'
          ],
          clinicalTip: 'Dinner must be finished at least 2.5 hours prior to bedtime.'
        }
      ]
    },
    mealLogs: [
      {
        id: 'log_p_1',
        mealSlot: 'lunch',
        mealSlotName: 'Lunch',
        date: 'Today',
        time: '1:45 PM',
        photoUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80',
        clientNotes: 'Made 2 jowar rotis, yellow dal and cucumber slices. Paneer was cooked with minimal oil as advised.',
        status: 'reviewed',
        feedback: {
          id: 'fb_1',
          nutritionistName: 'Dr. Shalini (Clinical RD)',
          time: '2:15 PM',
          tag: 'approved',
          comment: 'This is right! Excellent balance. The salad proportion is perfect. Ensure you drink water 30 mins after this meal.',
        }
      },
      {
        id: 'log_p_2',
        mealSlot: 'evening_snack',
        mealSlotName: 'Evening Snack',
        date: 'Today',
        time: '5:20 PM',
        photoUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80',
        clientNotes: 'Had 1 cup chai at office and office colleagues offered samosa. Took half samosa with some roasted peanuts.',
        status: 'reviewed',
        feedback: {
          id: 'fb_2',
          nutritionistName: 'Dr. Shalini (Clinical RD)',
          time: '5:45 PM',
          tag: 'caution',
          comment: "Don't do this! I can't see you eating deep-fried samosas while we are working on your LDL cholesterol and fasting sugar. Keep roasted makhana in your office drawer.",
        }
      },
      {
        id: 'log_p_3',
        mealSlot: 'breakfast',
        mealSlotName: 'Breakfast',
        date: 'Yesterday',
        time: '8:40 AM',
        photoUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80',
        clientNotes: 'Besan and methi cheela with homemade mint chutney.',
        status: 'reviewed',
        feedback: {
          id: 'fb_3',
          nutritionistName: 'Dr. Shalini (Clinical RD)',
          time: '9:15 AM',
          tag: 'approved',
          comment: 'Spot on! The texture looks crisp with very low oil. Keep this consistency.',
        }
      }
    ],
    weeklyReviews: [
      {
        weekNumber: 4,
        date: 'Nov 01, 2026',
        complianceScore: 84,
        bloodSugarUpdate: 'Fasting average dropped to 132 mg/dL (was 148)',
        nutritionistNotes: 'Great improvement in lunch compliance. The major risk area remains office evening snacks. Shifted dinner time to 8:15 PM successfully.',
        actionItems: [
          'Pack roasted sattu or chana for office desk',
          'Increase daily steps from 3,500 to 5,000',
          'Repeat lipid profile test at the end of Week 8'
        ]
      }
    ]
  },
  {
    id: 'client_rahul',
    name: 'Rahul Verma',
    age: 35,
    gender: 'Male',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    phone: '+91 99302 11984',
    email: 'rahul.verma@example.com',
    startDate: '2026-10-15',
    targetDuration: '3 Months',
    targetDurationMonths: 3,
    currentWeek: 3,
    primaryGoal: 'Fat Loss & Lean Muscle',
    goalDescription: 'Lose 7 kg fat, reduce visceral fat grade from 11 to 7, boost daily protein to preserve muscle tone.',
    conditions: ['Mild Fatty Liver (Grade 1)', 'Elevated Uric Acid (Borderline)'],
    biometrics: {
      heightCm: 178,
      currentWeightKg: 86.2,
      targetWeightKg: 79.0,
      bmi: 27.2,
      hba1c: 5.6,
      fastingGlucose: 96,
      ldlCholesterol: 138,
      totalCholesterol: 205,
      bloodPressure: '128/82 mmHg',
    },
    lifestyle: {
      activityLevel: 'Lightly Active (Gym 3 days/week)',
      sleepHours: '7 hours / night',
      waterIntakeLitres: 2.5,
      dietaryPreference: 'Eggetarian / High Protein',
      currentEatingHabits: 'Consumes fast food on weekends, high soda/beer intake, inadequate protein during weekdays.',
      exerciseRoutine: 'Strength training 3x/week for 40 mins. Needs nutrition to match workout days.',
      allergies: ['None'],
    },
    activeMealPlan: {
      id: 'plan_rahul_v1',
      name: 'Lean Body & Liver Reset Plan',
      conditionPreset: 'Weight Loss & High Protein',
      cuisinePreset: 'Indian Eggetarian',
      targetCalories: 1850,
      targetProteinG: 25,
      targetCarbsG: 180,
      targetFatsG: 48,
      targetFiberG: 35,
      meals: [
        {
          id: 'mr1',
          slot: 'breakfast',
          title: 'Breakfast (8:00 AM)',
          dish: '3 Egg Whites + 1 Whole Egg Omelette with Mushrooms & Spinach + 1 Brown Toast',
          portion: '4-egg scramble/omelette cooked in 1 tsp olive oil + 1 slice multigrain toast',
          proteinG: 26,
          carbsG: 18,
          fatsG: 9,
          calories: 270,
          alternatives: [
            'Paneer Bhurji (100g low fat paneer) with 1 multigrain roti and tomato salsa',
            'Soya Granules Poha with boiled sprouts and lemon'
          ],
          clinicalTip: 'High protein breakfast stabilizes ghrelin (hunger hormone) for 4-5 hours.'
        },
        {
          id: 'mr2',
          slot: 'mid_morning',
          title: 'Mid-Morning (11:00 AM)',
          dish: 'Whey Isolate Shake OR Chaas with Chia Seeds',
          portion: '1 scoop whey in water or 300ml spiced buttermilk with 1 tsp chia seeds',
          proteinG: 24,
          carbsG: 5,
          fatsG: 2,
          calories: 140,
          alternatives: [
            'Boiled Edamame (1 cup) with pink salt',
            'Low-fat Greek Yogurt (150g) with 1 tbsp berries'
          ],
          clinicalTip: 'Supports muscle synthesis post-workout and protects liver glycogen.'
        },
        {
          id: 'mr3',
          slot: 'lunch',
          title: 'Lunch (1:30 PM)',
          dish: 'Grilled Paneer / Soya Chunks Curry + 1 Brown Rice Katori + Steamed Broccoli & Carrot Bowl',
          portion: '120g grilled paneer/soya + 1 medium bowl brown rice + generous steamed veggies',
          proteinG: 28,
          carbsG: 46,
          fatsG: 14,
          calories: 440,
          alternatives: [
            '2 Bajra Rotis + Rajma Masala (thick) + raw vegetable salad',
            'Quinoa Egg Fried Rice with 3 egg whites and shredded veggies'
          ],
          clinicalTip: 'Cruciferous veggies (broccoli) support liver detoxification.'
        },
        {
          id: 'mr4',
          slot: 'evening_snack',
          title: 'Evening Snack (5:00 PM)',
          dish: 'Roasted Chana & Peanut Mix (light) + Black Coffee / Green Tea',
          portion: '40g roasted spiced chana + unsweetened coffee',
          proteinG: 9,
          carbsG: 20,
          fatsG: 4,
          calories: 160,
          alternatives: [
            'Sprouted Green Moong & Pomegranate Salad',
            '1 Boiled Corn on the cob with lemon and chili'
          ],
          clinicalTip: 'Avoid sugary energy bars or juices.'
        },
        {
          id: 'mr5',
          slot: 'dinner',
          title: 'Dinner (8:00 PM)',
          dish: 'Tofu & Mixed Veggie Soup + 1 Multigrain Roti with Dal Tadka (low oil)',
          portion: '1 large bowl nourishing soup + 1 roti with 1 bowl dal',
          proteinG: 22,
          carbsG: 38,
          fatsG: 8,
          calories: 330,
          alternatives: [
            'Stir-fried Tofu & Bell Peppers in light soy sauce + clear broth',
            'Lauki Dal with 1 small bowl quinoa'
          ],
          clinicalTip: 'Keep evening carbs moderate to maximize overnight fat oxidation.'
        }
      ]
    },
    mealLogs: [
      {
        id: 'log_r_1',
        mealSlot: 'lunch',
        mealSlotName: 'Lunch',
        date: 'Today',
        time: '1:30 PM',
        photoUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80',
        clientNotes: 'Grilled paneer with brown rice and steamed broccoli. Used olive oil spray.',
        status: 'reviewed',
        feedback: {
          id: 'fb_r1',
          nutritionistName: 'Dr. Shalini (Clinical RD)',
          time: '2:00 PM',
          tag: 'approved',
          comment: 'Looks fantastic! The broccoli volume is spot on and paneer portion matches our 25g target.',
        }
      }
    ],
    weeklyReviews: [
      {
        weekNumber: 2,
        date: 'Oct 30, 2026',
        complianceScore: 91,
        bloodSugarUpdate: 'Weight reduced by 1.4 kg in 2 weeks',
        nutritionistNotes: 'Superb dedication on workout days. Weekend alcohol was limited to 1 beverage.',
        actionItems: [
          'Maintain 3L water hydration',
          'Ensure 7.5 hours sleep for optimal muscle recovery'
        ]
      }
    ]
  }
];

