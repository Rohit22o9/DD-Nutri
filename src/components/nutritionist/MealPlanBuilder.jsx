import React, { useState } from 'react';
import { 
  Sparkles, 
  Sliders, 
  Send, 
  Check, 
  RefreshCw, 
  Utensils, 
  Zap, 
  Info, 
  CheckCircle2, 
  Layers, 
  Flame, 
  Dna, 
  Wheat, 
  ChevronRight,
  ChefHat
} from 'lucide-react';
import { 
  CONDITION_PRESETS, 
  CUISINE_PRESETS, 
  recalculateMealPlan 
} from '../../data/mealLibrary';

export default function MealPlanBuilder({ client, onUpdateMealPlan }) {
  const [selectedCondition, setSelectedCondition] = useState(
    client.activeMealPlan.conditionPreset || 'diabetic'
  );
  const [selectedCuisine, setSelectedCuisine] = useState(
    client.activeMealPlan.cuisinePreset || 'north_indian'
  );

  // Nutritionist target protein slider / input
  // From voice note: "She needs 20 grams of protein, not 25 grams of protein. She will enter it there and the changes will be shown to her."
  const [targetProtein, setTargetProtein] = useState(
    client.activeMealPlan.targetProteinG || 20
  );

  const [activePlan, setActivePlan] = useState(client.activeMealPlan);
  const [publishedSuccess, setPublishedSuccess] = useState(false);
  const [activeSlotFilter, setActiveSlotFilter] = useState('all');

  // Generate / Regenerate with preset and protein adjustment
  const handleRegenerate = (conditionId, cuisineId, proteinVal) => {
    const newPlan = recalculateMealPlan(
      conditionId || selectedCondition, 
      cuisineId || selectedCuisine, 
      proteinVal !== undefined ? proteinVal : targetProtein
    );
    setActivePlan(newPlan);
  };

  const handleProteinChange = (newProtein) => {
    const val = parseInt(newProtein) || 15;
    setTargetProtein(val);
    handleRegenerate(selectedCondition, selectedCuisine, val);
  };

  const handleConditionSelect = (condId) => {
    setSelectedCondition(condId);
    handleRegenerate(condId, selectedCuisine, targetProtein);
  };

  const handleCuisineSelect = (cuiId) => {
    setSelectedCuisine(cuiId);
    handleRegenerate(selectedCondition, cuiId, targetProtein);
  };

  const handlePublishToClient = () => {
    onUpdateMealPlan(client.id, activePlan);
    setPublishedSuccess(true);
    setTimeout(() => setPublishedSuccess(false), 3500);
  };

  const filteredMeals = activeSlotFilter === 'all' 
    ? activePlan.meals 
    : activePlan.meals.filter(m => m.slot === activeSlotFilter);

  return (
    <div className="space-y-6">

      {/* Header & Controls */}
      <div className="bg-white p-6 rounded-2xl border border-brand-mint-border shadow-soft-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-brand-mint-border">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="p-2 bg-brand-mint text-brand-forest rounded-xl">
                <ChefHat className="w-5 h-5 text-brand-orange" />
              </span>
              <div>
                <h1 className="text-xl font-extrabold text-brand-dark tracking-tight">
                  Daily Drop Smart Meal Plan Generator & Macro Tuner
                </h1>
                <p className="text-xs text-brand-muted">
                  Clinical preset matrix with dynamic protein recalculation for {client.name}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {publishedSuccess && (
              <span className="flex items-center gap-1.5 text-xs font-bold text-brand-forest bg-brand-mint px-3.5 py-2 rounded-xl border border-brand-mint-border animate-fade-in">
                <CheckCircle2 className="w-4 h-4 text-brand-forest" />
                Synced to Patient Mobile App!
              </span>
            )}
            <button
              onClick={handlePublishToClient}
              className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-soft-sm hover:shadow-glow-orange transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              Publish Plan to Client
            </button>
          </div>
        </div>

        {/* Step 1: Select Condition & Cuisine Presets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          
          {/* Condition Presets */}
          <div>
            <label className="text-xs font-extrabold text-brand-dark uppercase tracking-wider block mb-2">
              1. Clinical Condition Preset
            </label>
            <div className="grid grid-cols-2 gap-2">
              {CONDITION_PRESETS.map((cond) => (
                <button
                  key={cond.id}
                  onClick={() => handleConditionSelect(cond.id)}
                  className={`p-3 text-left rounded-xl border transition-all text-xs cursor-pointer ${
                    selectedCondition === cond.id
                      ? 'border-brand-forest bg-brand-mint text-brand-forest font-bold ring-2 ring-brand-forest/20'
                      : 'border-brand-mint-border hover:border-brand-forest/30 bg-brand-cream text-brand-dark'
                  }`}
                >
                  <div className="font-bold">{cond.label.split('(')[0]}</div>
                  <div className="text-[11px] text-brand-muted line-clamp-1 mt-0.5">{cond.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Cuisine Presets */}
          <div>
            <label className="text-xs font-extrabold text-brand-dark uppercase tracking-wider block mb-2">
              2. Regional Cuisine Matrix
            </label>
            <div className="grid grid-cols-2 gap-2">
              {CUISINE_PRESETS.map((cui) => (
                <button
                  key={cui.id}
                  onClick={() => handleCuisineSelect(cui.id)}
                  className={`p-3 text-left rounded-xl border transition-all text-xs cursor-pointer ${
                    selectedCuisine === cui.id
                      ? 'border-brand-orange bg-brand-orange-light text-brand-orange font-bold ring-2 ring-brand-orange/20'
                      : 'border-brand-mint-border hover:border-brand-orange/30 bg-brand-cream text-brand-dark'
                  }`}
                >
                  <div className="font-bold">{cui.label}</div>
                  <div className="text-[11px] text-brand-muted line-clamp-1 mt-0.5">{cui.staples}</div>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Step 2: Interactive Macro Fine-Tuner (Target Protein: 25g -> 20g) */}
        <div className="mt-6 p-4 bg-brand-mint-subtle rounded-xl border border-brand-mint-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white shadow-2xs border border-brand-mint-border flex items-center justify-center text-brand-forest">
                <Sliders className="w-5 h-5 text-brand-orange" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-brand-forest uppercase tracking-wider block">
                  Interactive Macro Recalculation Engine
                </span>
                <p className="text-xs text-brand-muted">
                  Change protein target to automatically scale meal portions and macronutrients in real time.
                </p>
              </div>
            </div>

            {/* Protein Slider & Direct Input */}
            <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-brand-mint-border shadow-2xs">
              <label htmlFor="proteinInput" className="text-xs font-bold text-brand-dark">
                Target Protein / Meal:
              </label>
              
              <input
                type="range"
                min="15"
                max="35"
                step="1"
                value={targetProtein}
                onChange={(e) => handleProteinChange(e.target.value)}
                className="w-28 sm:w-36 accent-brand-orange cursor-pointer"
              />

              <div className="flex items-center gap-1 bg-brand-mint text-brand-forest px-2.5 py-1 rounded-lg border border-brand-mint-border">
                <input
                  id="proteinInput"
                  type="number"
                  min="12"
                  max="45"
                  value={targetProtein}
                  onChange={(e) => handleProteinChange(e.target.value)}
                  className="w-10 text-center font-extrabold text-sm bg-transparent focus:outline-hidden"
                />
                <span className="text-xs font-bold">g</span>
              </div>

              {/* Quick Preset Buttons (Voice note: 20g vs 25g) */}
              <div className="hidden md:flex items-center gap-1 pl-2 border-l border-brand-mint-border">
                <button
                  type="button"
                  onClick={() => handleProteinChange(20)}
                  className={`text-[11px] px-2.5 py-1 rounded-md font-bold transition-colors cursor-pointer ${
                    targetProtein === 20 
                      ? 'bg-brand-forest text-white' 
                      : 'bg-brand-mint text-brand-forest hover:bg-brand-forest hover:text-white'
                  }`}
                >
                  20g (Standard)
                </button>
                <button
                  type="button"
                  onClick={() => handleProteinChange(25)}
                  className={`text-[11px] px-2.5 py-1 rounded-md font-bold transition-colors cursor-pointer ${
                    targetProtein === 25 
                      ? 'bg-brand-orange text-white' 
                      : 'bg-brand-orange-light text-brand-orange hover:bg-brand-orange hover:text-white'
                  }`}
                >
                  25g (Athletic)
                </button>
              </div>
            </div>

          </div>

          {/* Macro Totals Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-4 pt-3 border-t border-brand-mint-border">
            <div className="bg-white p-2.5 rounded-xl border border-brand-mint-border">
              <span className="text-[10px] text-brand-muted font-bold uppercase flex items-center gap-1">
                <Flame className="w-3 h-3 text-brand-orange" /> Daily Calories
              </span>
              <div className="text-base font-extrabold text-brand-dark mt-0.5">
                {activePlan.targetCalories} <span className="text-xs font-normal text-brand-muted">kcal</span>
              </div>
            </div>

            <div className="bg-white p-2.5 rounded-xl border-2 border-brand-forest ring-1 ring-brand-forest/20">
              <span className="text-[10px] text-brand-forest font-bold uppercase flex items-center gap-1">
                <Dna className="w-3 h-3 text-brand-forest" /> Protein Target
              </span>
              <div className="text-base font-extrabold text-brand-forest mt-0.5">
                {activePlan.targetProteinG}g <span className="text-[10px] font-bold text-brand-orange">({Math.round((activePlan.targetProteinG * 4 * 100) / (activePlan.targetCalories / 4))}%)</span>
              </div>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-brand-mint-border">
              <span className="text-[10px] text-brand-muted font-bold uppercase flex items-center gap-1">
                <Wheat className="w-3 h-3 text-amber-600" /> Carbohydrates
              </span>
              <div className="text-base font-extrabold text-brand-dark mt-0.5">
                {activePlan.targetCarbsG}g
              </div>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-brand-mint-border">
              <span className="text-[10px] text-brand-muted font-bold uppercase">
                Healthy Fats
              </span>
              <div className="text-base font-extrabold text-brand-dark mt-0.5">
                {activePlan.targetFatsG}g
              </div>
            </div>

            <div className="bg-white p-2.5 rounded-xl border border-brand-mint-border col-span-2 sm:col-span-1">
              <span className="text-[10px] text-brand-forest font-bold uppercase">
                Dietary Fiber
              </span>
              <div className="text-base font-extrabold text-brand-forest mt-0.5">
                {activePlan.targetFiberG}g <span className="text-[10px] text-brand-muted font-normal">(Soluble &gt;15g)</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Meal Slot Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="font-bold text-brand-muted text-xs mr-1">Filter Slots:</span>
        {['all', 'breakfast', 'mid_morning', 'lunch', 'evening_snack', 'dinner'].map((slotKey) => (
          <button
            key={slotKey}
            onClick={() => setActiveSlotFilter(slotKey)}
            className={`px-3 py-1.5 rounded-xl font-bold capitalize whitespace-nowrap transition-colors cursor-pointer ${
              activeSlotFilter === slotKey
                ? 'bg-brand-forest text-white shadow-soft-sm'
                : 'bg-white text-brand-muted border border-brand-mint-border hover:bg-brand-mint'
            }`}
          >
            {slotKey.replace('_', ' ')}
          </button>
        ))}
      </div>

      {/* Meal Plan Slots List */}
      <div className="space-y-4">
        {filteredMeals.map((meal, index) => (
          <div 
            key={meal.id || index}
            className="bg-white rounded-2xl border border-brand-mint-border shadow-soft-sm hover:border-brand-forest/40 transition-all p-5"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
              
              {/* Left Details */}
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-brand-mint text-brand-forest border border-brand-mint-border">
                    {meal.title}
                  </span>
                  <span className="text-xs text-brand-muted">• Daily Drop Verified Nutritional Prep</span>
                </div>

                <h2 className="text-base font-extrabold text-brand-dark">
                  {meal.dish}
                </h2>

                <div className="p-3 bg-brand-mint-subtle rounded-xl border border-brand-mint-border">
                  <span className="text-[10px] font-extrabold uppercase text-brand-muted block">
                    Calculated Portion Size (for {targetProtein}g Target Protein):
                  </span>
                  <p className="text-xs text-brand-dark font-bold mt-0.5">
                    {meal.portion}
                  </p>
                </div>

                {/* Clinical Tip */}
                {meal.clinicalTip && (
                  <div className="flex items-start gap-2 text-xs text-brand-dark bg-brand-mint/60 p-2.5 rounded-xl border border-brand-mint-border">
                    <Info className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                    <span><strong className="text-brand-forest">Clinical Rationale:</strong> {meal.clinicalTip}</span>
                  </div>
                )}

                {/* Pre-Approved Alternatives */}
                {meal.alternatives && meal.alternatives.length > 0 && (
                  <div className="pt-2">
                    <span className="text-xs font-bold text-brand-forest block mb-1">
                      Daily Drop Approved Exchange Options:
                    </span>
                    <ul className="space-y-1">
                      {meal.alternatives.map((alt, altIdx) => (
                        <li key={altIdx} className="text-xs text-brand-muted flex items-center gap-1.5">
                          <ChevronRight className="w-3 h-3 text-brand-orange" />
                          <span>{alt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Macros Card */}
              <div className="bg-brand-mint-subtle p-4 rounded-2xl border border-brand-mint-border min-w-[210px] shrink-0 text-xs">
                <span className="font-extrabold text-brand-dark block mb-2 text-center pb-1.5 border-b border-brand-mint-border">
                  Nutritional Breakdown
                </span>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-brand-muted">Energy:</span>
                    <span className="font-extrabold text-brand-dark">{meal.calories} kcal</span>
                  </div>
                  <div className="flex justify-between items-center text-brand-forest font-bold">
                    <span>Protein:</span>
                    <span className="text-brand-orange font-extrabold">{meal.proteinG}g</span>
                  </div>
                  <div className="flex justify-between items-center text-brand-dark">
                    <span className="text-brand-muted">Carbohydrates:</span>
                    <span>{meal.carbsG}g</span>
                  </div>
                  <div className="flex justify-between items-center text-brand-dark">
                    <span className="text-brand-muted">Healthy Fats:</span>
                    <span>{meal.fatsG}g</span>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-brand-mint-border text-center">
                  <span className="text-[10px] text-brand-muted block">Status on Client App:</span>
                  <span className="text-xs font-extrabold text-brand-forest">Live & Synchronized</span>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
