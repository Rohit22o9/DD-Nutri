import React, { useState } from 'react';
import { X, UserPlus, Sparkles, Check, ChefHat } from 'lucide-react';

export default function NewCaseModal({ isOpen, onClose, onAddClient }) {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [age, setAge] = useState(38);
  const [gender, setGender] = useState('Female');
  const [phone, setPhone] = useState('+91 98');
  const [targetDuration, setTargetDuration] = useState('6 Months');
  const [primaryGoal, setPrimaryGoal] = useState('Reduce Sugar & Weight');
  const [conditions, setConditions] = useState('Type 2 Diabetes, High Cholesterol');
  const [activityLevel, setActivityLevel] = useState('Sedentary (Desk Job)');
  const [dietaryPref, setDietaryPref] = useState('North Indian Vegetarian');
  const [currentEatingHabits, setCurrentEatingHabits] = useState('Eats heavy fried dinner late night, irregular breakfast.');
  const [weightKg, setWeightKg] = useState(72);
  const [targetWeightKg, setTargetWeightKg] = useState(64);
  const [hba1c, setHba1c] = useState(7.4);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newClient = {
      id: `client_${Date.now()}`,
      name: name.trim(),
      age: parseInt(age) || 30,
      gender: gender,
      avatar: gender === 'Female' 
        ? 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'
        : 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      phone: phone,
      email: `${name.toLowerCase().replace(/\s+/g, '')}@dailydrop.today`,
      startDate: new Date().toISOString().split('T')[0],
      targetDuration: targetDuration,
      targetDurationMonths: targetDuration.includes('3') ? 3 : targetDuration.includes('6') ? 6 : 12,
      currentWeek: 1,
      primaryGoal: primaryGoal,
      goalDescription: `Targeting healthy metabolic balance and achieving target weight of ${targetWeightKg} kg.`,
      conditions: conditions.split(',').map(c => c.trim()),
      biometrics: {
        heightCm: 165,
        currentWeightKg: parseFloat(weightKg),
        targetWeightKg: parseFloat(targetWeightKg),
        bmi: 26.4,
        hba1c: parseFloat(hba1c),
        fastingGlucose: 135,
        ldlCholesterol: 145,
        totalCholesterol: 215,
        bloodPressure: '130/84 mmHg',
      },
      lifestyle: {
        activityLevel: activityLevel,
        sleepHours: '6.5 hours / night',
        waterIntakeLitres: 2.0,
        dietaryPreference: dietaryPref,
        currentEatingHabits: currentEatingHabits,
        exerciseRoutine: 'Guided walking 30 mins / day.',
        allergies: ['None declared'],
      },
      activeMealPlan: {
        id: `plan_${Date.now()}`,
        name: `${name}'s Daily Drop Diet Plan`,
        conditionPreset: 'diabetic',
        cuisinePreset: 'north_indian',
        targetCalories: 1450,
        targetProteinG: 20,
        targetCarbsG: 160,
        targetFatsG: 38,
        targetFiberG: 30,
        meals: [
          {
            id: 'm1',
            slot: 'breakfast',
            title: 'Breakfast (8:30 AM)',
            dish: 'Moong Dal & Palak Cheela + Mint Chutney',
            portion: '2 medium cheelas + 2 tbsp mint curd chutney',
            proteinG: 18,
            carbsG: 26,
            fatsG: 6,
            calories: 240,
            alternatives: ['Vegetable Oats Upma with Peanuts', 'Besan Toast (2 pcs)'],
            clinicalTip: 'Low GI protein prevents post-meal glucose rise.'
          },
          {
            id: 'm2',
            slot: 'lunch',
            title: 'Lunch (1:30 PM)',
            dish: 'Multigrain Roti (2 pcs) + Yellow Moong Dal + Paneer Bhurji + Salad',
            portion: '2 rotis + 1 bowl dal + 50g paneer + large cucumber salad',
            proteinG: 22,
            carbsG: 50,
            fatsG: 11,
            calories: 400,
            alternatives: ['Brown Rice Khichdi with lots of veggies'],
            clinicalTip: 'Consume raw salad first to moderate insulin response.'
          },
          {
            id: 'm3',
            slot: 'dinner',
            title: 'Dinner (8:00 PM)',
            dish: 'Lauki & Moong Dal Porridge with Cucumber Raita',
            portion: '1.5 bowl porridge + 1 bowl low fat raita',
            proteinG: 15,
            carbsG: 40,
            fatsG: 7,
            calories: 300,
            alternatives: ['Clear Vegetable & Tofu Soup + 1 Roti'],
            clinicalTip: 'Light dinner before 8 PM promotes nighttime fat burning.'
          }
        ]
      },
      mealLogs: [],
      weeklyReviews: []
    };

    onAddClient(newClient);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-forest-dark/70 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-brand-mint-border">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-mint-border sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            <span className="p-2.5 bg-brand-mint text-brand-forest rounded-2xl">
              <UserPlus className="w-5 h-5 text-brand-orange" />
            </span>
            <div>
              <h2 className="text-lg font-extrabold text-brand-dark">Take New Case (Client Onboarding)</h2>
              <p className="text-xs text-brand-muted">Daily Drop clinical case file, baseline history & targets</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-brand-muted hover:text-brand-forest rounded-xl hover:bg-brand-mint cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-brand-dark block mb-1">Patient Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Meera Kapoor"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2.5 border border-brand-mint-border rounded-xl focus:ring-2 focus:ring-brand-orange/20 focus:outline-hidden bg-brand-cream"
              />
            </div>

            <div>
              <label className="font-bold text-brand-dark block mb-1">Target Program Duration *</label>
              <select
                value={targetDuration}
                onChange={(e) => setTargetDuration(e.target.value)}
                className="w-full p-2.5 border border-brand-mint-border rounded-xl bg-brand-cream focus:outline-hidden font-medium"
              >
                <option value="3 Months">3 Months (Intensive)</option>
                <option value="6 Months">6 Months (Standard Clinical Reversal)</option>
                <option value="1 Year">1 Year (Metabolic Transformation)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="font-bold text-brand-dark block mb-1">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-2.5 border border-brand-mint-border rounded-xl bg-brand-cream"
              />
            </div>
            <div>
              <label className="font-bold text-brand-dark block mb-1">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full p-2.5 border border-brand-mint-border rounded-xl bg-brand-cream font-medium"
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-brand-dark block mb-1">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2.5 border border-brand-mint-border rounded-xl bg-brand-cream"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-brand-dark block mb-1">Primary Clinical Objective *</label>
            <input
              type="text"
              placeholder="e.g. Reduce HbA1c below 6.5% and lose 8 kg"
              value={primaryGoal}
              onChange={(e) => setPrimaryGoal(e.target.value)}
              className="w-full p-2.5 border border-brand-mint-border rounded-xl bg-brand-cream"
            />
          </div>

          <div>
            <label className="font-bold text-brand-dark block mb-1">Current Medical Conditions (comma-separated)</label>
            <input
              type="text"
              placeholder="e.g. Type 2 Diabetes, High Cholesterol, Hypertension"
              value={conditions}
              onChange={(e) => setConditions(e.target.value)}
              className="w-full p-2.5 border border-brand-mint-border rounded-xl bg-brand-cream"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="font-bold text-brand-dark block mb-1">Current Wt (kg)</label>
              <input
                type="number"
                step="0.5"
                value={weightKg}
                onChange={(e) => setWeightKg(e.target.value)}
                className="w-full p-2.5 border border-brand-mint-border rounded-xl bg-brand-cream"
              />
            </div>
            <div>
              <label className="font-bold text-brand-dark block mb-1">Target Wt (kg)</label>
              <input
                type="number"
                step="0.5"
                value={targetWeightKg}
                onChange={(e) => setTargetWeightKg(e.target.value)}
                className="w-full p-2.5 border border-brand-mint-border rounded-xl bg-brand-cream"
              />
            </div>
            <div>
              <label className="font-bold text-brand-dark block mb-1">HbA1c (%)</label>
              <input
                type="number"
                step="0.1"
                value={hba1c}
                onChange={(e) => setHba1c(e.target.value)}
                className="w-full p-2.5 border border-brand-mint-border rounded-xl bg-brand-cream"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-brand-dark block mb-1">Dietary Preference</label>
              <input
                type="text"
                value={dietaryPref}
                onChange={(e) => setDietaryPref(e.target.value)}
                className="w-full p-2.5 border border-brand-mint-border rounded-xl bg-brand-cream"
              />
            </div>
            <div>
              <label className="font-bold text-brand-dark block mb-1">Activity Level</label>
              <input
                type="text"
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="w-full p-2.5 border border-brand-mint-border rounded-xl bg-brand-cream"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-brand-dark block mb-1">Baseline 24-Hr Eating Habits & Diet Recall</label>
            <textarea
              rows={3}
              value={currentEatingHabits}
              onChange={(e) => setCurrentEatingHabits(e.target.value)}
              className="w-full p-2.5 border border-brand-mint-border rounded-xl bg-brand-cream"
            />
          </div>

          <div className="pt-4 border-t border-brand-mint-border flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-brand-muted hover:bg-brand-mint rounded-xl font-bold cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold rounded-xl shadow-soft-sm hover:shadow-glow-orange cursor-pointer"
            >
              <Check className="w-4 h-4" /> Save & Open Clinical Case
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
