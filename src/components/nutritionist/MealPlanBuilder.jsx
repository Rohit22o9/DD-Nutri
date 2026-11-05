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
  ChefHat,
  Activity,
  Heart,
  Droplets,
  Clock,
  ShieldCheck
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
  // Specifically from voice note: "She needs 20 grams of protein, not 25 grams of protein. She will enter it there and the changes will be shown to her."
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

      {/* Main Generator Header Card */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-mint-border shadow-soft">
        
        {/* Title Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-brand-mint-border">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-brand-forest text-white flex items-center justify-center shadow-soft-sm shrink-0">
              <ChefHat className="w-6 h-6 text-brand-orange" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-brand-dark tracking-tight">
                  Smart Meal Plan Generator & Macro Tuner
                </h1>
                <span className="text-[11px] font-black uppercase tracking-wider bg-brand-mint text-brand-forest px-2.5 py-0.5 rounded-full border border-brand-mint-border">
                  AI Presets
                </span>
              </div>
              <p className="text-xs sm:text-sm text-brand-muted font-medium mt-0.5">
                Clinical preset matrix with dynamic protein recalibration for <strong className="text-brand-forest">{client.name}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {publishedSuccess && (
              <span className="flex items-center gap-1.5 text-xs font-black text-brand-forest bg-brand-mint px-4 py-2.5 rounded-2xl border border-brand-mint-border animate-fade-in shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-brand-forest" />
                Live on Patient Mobile App!
              </span>
            )}
            <button
              onClick={handlePublishToClient}
              className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-black text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-soft-sm hover:shadow-glow-orange transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Publish Plan to Client</span>
            </button>
          </div>
        </div>

        {/* Step 1: Select Condition & Cuisine Presets with Rich Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
          
          {/* 1. Condition Presets */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-black text-brand-dark uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-forest text-white text-[10px] flex items-center justify-center">1</span>
                Clinical Condition Preset
              </label>
              <span className="text-[11px] text-brand-muted font-semibold">Select health target</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CONDITION_PRESETS.map((cond) => {
                const isSelected = selectedCondition === cond.id;
                return (
                  <button
                    key={cond.id}
                    onClick={() => handleConditionSelect(cond.id)}
                    className={`p-4 text-left rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-brand-forest bg-brand-mint text-brand-forest shadow-soft-sm ring-2 ring-brand-forest/20'
                        : 'border-brand-mint-border hover:border-brand-forest/40 bg-brand-cream/60 text-brand-dark'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                          isSelected ? 'bg-brand-forest text-white' : 'bg-brand-mint text-brand-forest'
                        }`}>
                          {cond.tag}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] font-black text-brand-forest flex items-center gap-1">
                            ✓ Selected
                          </span>
                        )}
                      </div>
                      <h4 className="font-black text-xs sm:text-sm text-brand-dark mt-1">
                        {cond.label.split('(')[0]}
                      </h4>
                      <p className="text-[11px] text-brand-muted mt-1 leading-snug line-clamp-2">
                        {cond.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-brand-mint-border flex items-center justify-between text-[10px] font-bold text-brand-muted">
                      <span>Default: {cond.defaultTargetCalories} kcal</span>
                      <span className="text-brand-orange font-black">{cond.defaultProteinG}g protein</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Cuisine Presets */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-black text-brand-dark uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-orange text-white text-[10px] flex items-center justify-center">2</span>
                Regional Cuisine Matrix
              </label>
              <span className="text-[11px] text-brand-muted font-semibold">Indian dietary style</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CUISINE_PRESETS.map((cui) => {
                const isSelected = selectedCuisine === cui.id;
                return (
                  <button
                    key={cui.id}
                    onClick={() => handleCuisineSelect(cui.id)}
                    className={`p-4 text-left rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-brand-orange bg-brand-orange-light text-brand-orange shadow-soft-sm ring-2 ring-brand-orange/20'
                        : 'border-brand-mint-border hover:border-brand-orange/40 bg-brand-cream/60 text-brand-dark'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-md ${
                          isSelected ? 'bg-brand-orange text-white' : 'bg-brand-mint text-brand-forest'
                        }`}>
                          {cui.regionTag}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] font-black text-brand-orange flex items-center gap-1">
                            ✓ Selected
                          </span>
                        )}
                      </div>
                      <h4 className="font-black text-xs sm:text-sm text-brand-dark mt-1">
                        {cui.label}
                      </h4>
                      <p className="text-[11px] text-brand-muted mt-1 leading-snug line-clamp-2">
                        {cui.staples}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-brand-mint-border flex items-center justify-between text-[10px] font-bold text-brand-muted">
                      <span>Daily Drop Standard Prep</span>
                      <span className="text-brand-forest font-bold">Portion Scaled</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Step 3: Interactive Macro Fine-Tuner Showcase (From Voice Message: 25g -> 20g) */}
        <div className="mt-8 p-6 bg-gradient-to-r from-brand-mint/90 via-brand-cream to-brand-orange-light/50 rounded-3xl border-2 border-brand-mint-border shadow-soft-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-soft-sm border-2 border-brand-mint-border flex items-center justify-center text-brand-forest shrink-0">
                <Sliders className="w-7 h-7 text-brand-orange" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-black text-brand-forest uppercase tracking-wider">
                    Interactive Macro Fine-Tuning Engine
                  </span>
                  <span className="text-[10px] font-black uppercase bg-brand-orange text-white px-2 py-0.5 rounded-md">
                    Live Recalculation
                  </span>
                </div>
                <p className="text-xs text-brand-muted mt-0.5 max-w-xl leading-relaxed">
                  Adjust target protein directly. Dish portions (paneer, dal, cheela batter) and daily macros will dynamically scale in real time.
                </p>
              </div>
            </div>

            {/* Protein Slider & Dial Box */}
            <div className="flex flex-wrap items-center gap-3 bg-white p-4 rounded-2xl border-2 border-brand-mint-border shadow-soft-sm">
              <div className="flex flex-col">
                <label htmlFor="proteinSlider" className="text-xs font-black text-brand-dark">
                  Target Protein / Meal:
                </label>
                <span className="text-[10px] text-brand-muted">Slide to recalibrate dishes</span>
              </div>
              
              <input
                id="proteinSlider"
                type="range"
                min="15"
                max="35"
                step="1"
                value={targetProtein}
                onChange={(e) => handleProteinChange(e.target.value)}
                className="w-32 sm:w-44 accent-brand-orange cursor-pointer"
              />

              <div className="flex items-center gap-1 bg-brand-mint text-brand-forest px-3 py-1.5 rounded-xl border-2 border-brand-mint-border shadow-2xs">
                <input
                  type="number"
                  min="12"
                  max="45"
                  value={targetProtein}
                  onChange={(e) => handleProteinChange(e.target.value)}
                  className="w-10 text-center font-black text-base bg-transparent focus:outline-hidden"
                />
                <span className="text-xs font-black">g</span>
              </div>

              {/* Fast Preset Buttons (Voice Note Requirement: 20g vs 25g) */}
              <div className="flex items-center gap-1.5 pl-2 border-l-2 border-brand-mint-border">
                <button
                  type="button"
                  onClick={() => handleProteinChange(20)}
                  className={`text-xs px-3 py-1.5 rounded-xl font-black transition-all cursor-pointer ${
                    targetProtein === 20 
                      ? 'bg-brand-forest text-white shadow-soft-sm' 
                      : 'bg-brand-mint text-brand-forest hover:bg-brand-forest hover:text-white'
                  }`}
                >
                  20g (Standard)
                </button>
                <button
                  type="button"
                  onClick={() => handleProteinChange(25)}
                  className={`text-xs px-3 py-1.5 rounded-xl font-black transition-all cursor-pointer ${
                    targetProtein === 25 
                      ? 'bg-brand-orange text-white shadow-soft-sm' 
                      : 'bg-brand-orange-light text-brand-orange hover:bg-brand-orange hover:text-white'
                  }`}
                >
                  25g (High-Protein)
                </button>
              </div>
            </div>

          </div>

          {/* Macro Totals Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6 pt-5 border-t border-brand-mint-border">
            <div className="bg-white p-3.5 rounded-2xl border-2 border-brand-mint-border shadow-2xs">
              <span className="text-[10px] text-brand-muted font-black uppercase flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-brand-orange" /> Daily Calories
              </span>
              <div className="text-lg font-black text-brand-dark mt-1">
                {activePlan.targetCalories} <span className="text-xs font-normal text-brand-muted">kcal</span>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border-2 border-brand-forest ring-2 ring-brand-forest/20 shadow-2xs">
              <span className="text-[10px] text-brand-forest font-black uppercase flex items-center gap-1.5">
                <Dna className="w-3.5 h-3.5 text-brand-forest" /> Protein Target
              </span>
              <div className="text-lg font-black text-brand-forest mt-1">
                {activePlan.targetProteinG}g <span className="text-[11px] font-black text-brand-orange">({Math.round((activePlan.targetProteinG * 4 * 100) / (activePlan.targetCalories / 4))}%)</span>
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border-2 border-brand-mint-border shadow-2xs">
              <span className="text-[10px] text-brand-muted font-black uppercase flex items-center gap-1.5">
                <Wheat className="w-3.5 h-3.5 text-amber-600" /> Carbohydrates
              </span>
              <div className="text-lg font-black text-brand-dark mt-1">
                {activePlan.targetCarbsG}g
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border-2 border-brand-mint-border shadow-2xs">
              <span className="text-[10px] text-brand-muted font-black uppercase flex items-center gap-1.5">
                <Droplets className="w-3.5 h-3.5 text-teal-600" /> Healthy Fats
              </span>
              <div className="text-lg font-black text-brand-dark mt-1">
                {activePlan.targetFatsG}g
              </div>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border-2 border-brand-mint-border shadow-2xs col-span-2 sm:col-span-1">
              <span className="text-[10px] text-brand-forest font-black uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-forest" /> Dietary Fiber
              </span>
              <div className="text-lg font-black text-brand-forest mt-1">
                {activePlan.targetFiberG}g <span className="text-[10px] text-brand-muted font-normal">(Soluble &gt;15g)</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Meal Slots Section Title & Filter Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <div>
          <h2 className="text-lg font-black text-brand-dark">Prescribed 5-Meal Daily Clinical Schedule</h2>
          <p className="text-xs text-brand-muted">Verified meal slots with scaled portions, food photos, and approved swaps</p>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="font-black text-brand-muted text-xs mr-1">Filter Slot:</span>
          {['all', 'breakfast', 'mid_morning', 'lunch', 'evening_snack', 'dinner'].map((slotKey) => (
            <button
              key={slotKey}
              onClick={() => setActiveSlotFilter(slotKey)}
              className={`px-3.5 py-1.5 rounded-xl font-black capitalize whitespace-nowrap transition-all cursor-pointer ${
                activeSlotFilter === slotKey
                  ? 'bg-brand-forest text-white shadow-soft-sm'
                  : 'bg-white text-brand-muted border border-brand-mint-border hover:bg-brand-mint'
              }`}
            >
              {slotKey.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Rich Meal Plan Slots List with Dish Images */}
      <div className="space-y-4">
        {filteredMeals.map((meal, index) => (
          <div 
            key={meal.id || index}
            className="bg-white rounded-3xl border-2 border-brand-mint-border shadow-soft-sm hover:border-brand-forest/50 transition-all overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-12">
              
              {/* Left Dish Image Thumbnail */}
              <div className="md:col-span-4 relative bg-brand-forest-dark min-h-[200px] overflow-hidden flex items-center justify-center">
                <img 
                  src={meal.image || 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'} 
                  alt={meal.dish}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="bg-brand-forest/90 backdrop-blur-md text-white font-black text-xs px-3 py-1 rounded-xl border border-white/20 shadow-soft-sm">
                    {meal.title}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <span className="bg-brand-dark/80 backdrop-blur-md text-brand-mint text-[11px] font-bold px-2.5 py-1 rounded-lg block truncate border border-white/10">
                    👨‍🍳 {meal.prepMethod || 'Daily Drop Kitchen Preparation'}
                  </span>
                </div>
              </div>

              {/* Center & Right Details */}
              <div className="md:col-span-8 p-6 flex flex-col justify-between space-y-4">
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black uppercase tracking-wider text-brand-forest bg-brand-mint px-2.5 py-0.5 rounded-md border border-brand-mint-border">
                      Prescribed Clinical Recommendation
                    </span>
                    <span className="text-xs font-black text-brand-dark bg-brand-cream px-2.5 py-1 rounded-lg border border-brand-mint-border">
                      {meal.calories} kcal
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-brand-dark">
                    {meal.dish}
                  </h3>

                  <div className="p-3 bg-brand-mint-subtle rounded-2xl border border-brand-mint-border flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-brand-mint flex items-center justify-center text-brand-forest shrink-0 mt-0.5">
                      <Scale className="w-4 h-4 text-brand-orange" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase text-brand-forest block">
                        Prescribed Portion (Calculated for {targetProtein}g Protein Target):
                      </span>
                      <p className="text-xs sm:text-sm text-brand-dark font-extrabold mt-0.5">
                        {meal.portion}
                      </p>
                    </div>
                  </div>

                  {/* Clinical Tip */}
                  {meal.clinicalTip && (
                    <div className="flex items-start gap-2 text-xs text-brand-dark bg-brand-orange-light/50 p-3 rounded-2xl border border-brand-orange/30">
                      <Info className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                      <span><strong className="text-brand-orange">Clinical Rationale:</strong> {meal.clinicalTip}</span>
                    </div>
                  )}

                  {/* Pre-Approved Alternatives */}
                  {meal.alternatives && meal.alternatives.length > 0 && (
                    <div className="pt-1">
                      <span className="text-xs font-black text-brand-forest block mb-1">
                        Daily Drop Approved Exchange Options:
                      </span>
                      <ul className="space-y-1">
                        {meal.alternatives.map((alt, altIdx) => (
                          <li key={altIdx} className="text-xs text-brand-muted font-medium flex items-center gap-1.5">
                            <ChevronRight className="w-3.5 h-3.5 text-brand-orange" />
                            <span>{alt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Macro Badges Row */}
                <div className="pt-3 border-t border-brand-mint-border flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="bg-brand-mint text-brand-forest font-black px-2.5 py-1 rounded-xl border border-brand-mint-border">
                      Protein: <strong className="text-brand-orange">{meal.proteinG}g</strong>
                    </span>
                    <span className="bg-brand-cream text-brand-dark font-bold px-2.5 py-1 rounded-xl border border-brand-mint-border">
                      Carbs: {meal.carbsG}g
                    </span>
                    <span className="bg-brand-cream text-brand-dark font-bold px-2.5 py-1 rounded-xl border border-brand-mint-border">
                      Fats: {meal.fatsG}g
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-brand-forest flex items-center gap-1">
                    ✓ Verified on Mobile App
                  </span>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

// Icon helper
function Scale(props) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}
