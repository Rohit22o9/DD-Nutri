import React, { useState } from 'react';
import { 
  User, 
  Calendar, 
  Target, 
  Activity, 
  Heart, 
  AlertTriangle, 
  Droplet, 
  Clock, 
  FileCheck, 
  Save, 
  Edit3, 
  CheckCircle2, 
  Scale, 
  Utensils, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function ClientCaseIntake({ client, onUpdateClient }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...client });
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleInputChange = (section, field, value) => {
    if (section) {
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    onUpdateClient(formData);
    setIsEditing(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner / Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-brand-mint-border shadow-soft-sm">
        <div className="flex items-center gap-4">
          <img 
            src={formData.avatar} 
            alt={formData.name} 
            className="w-16 h-16 rounded-2xl object-cover border-2 border-brand-mint-border shadow-2xs"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-extrabold text-brand-dark tracking-tight">{formData.name}</h1>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-mint text-brand-forest border border-brand-mint-border">
                {formData.age} yrs • {formData.gender}
              </span>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-orange-light text-brand-orange border border-brand-orange/30">
                Week {formData.currentWeek || 1} of {formData.targetDuration}
              </span>
            </div>
            <p className="text-xs text-brand-muted mt-1">
              Daily Drop Patient ID: <span className="font-mono font-bold text-brand-forest">{formData.id}</span> • Started on {formData.startDate} • Phone: {formData.phone}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {saveSuccess && (
            <span className="flex items-center gap-1 text-xs font-bold text-brand-forest bg-brand-mint px-3 py-1.5 rounded-xl border border-brand-mint-border animate-fade-in">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-forest" /> Case File Updated
            </span>
          )}
          {isEditing ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => { setFormData({ ...client }); setIsEditing(false); }}
                className="px-3.5 py-2 text-xs font-bold text-brand-muted hover:bg-brand-mint rounded-xl transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-brand-orange hover:bg-brand-orange-hover text-white rounded-xl shadow-soft-sm transition-all hover:shadow-glow-orange cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" /> Save Case Record
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-brand-forest hover:bg-brand-forest-dark text-white rounded-xl shadow-soft-sm transition-colors cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" /> Edit Case Details
            </button>
          )}
        </div>
      </div>

      {/* Case Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Column 1: Clinical Goals & Timeline */}
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-2xl border border-brand-mint-border shadow-soft-sm">
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-brand-mint-border text-brand-forest font-bold text-sm">
              <Target className="w-4 h-4 text-brand-orange" />
              <span>Primary Goal & Program Duration</span>
            </div>

            {isEditing ? (
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-brand-muted font-bold">Primary Goal Focus</label>
                  <input
                    type="text"
                    value={formData.primaryGoal}
                    onChange={(e) => handleInputChange(null, 'primaryGoal', e.target.value)}
                    className="w-full text-xs mt-1 p-2.5 border border-brand-mint-border rounded-xl focus:ring-2 focus:ring-brand-orange/20 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="text-xs text-brand-muted font-bold">Goal Description & Targets</label>
                  <textarea
                    rows={3}
                    value={formData.goalDescription}
                    onChange={(e) => handleInputChange(null, 'goalDescription', e.target.value)}
                    className="w-full text-xs mt-1 p-2.5 border border-brand-mint-border rounded-xl focus:ring-2 focus:ring-brand-orange/20 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="text-xs text-brand-muted font-bold">Target Duration</label>
                  <select
                    value={formData.targetDuration}
                    onChange={(e) => handleInputChange(null, 'targetDuration', e.target.value)}
                    className="w-full text-xs mt-1 p-2.5 border border-brand-mint-border rounded-xl bg-brand-cream focus:outline-hidden"
                  >
                    <option value="3 Months">3 Months (Short-term Intensive)</option>
                    <option value="6 Months">6 Months (Clinical Reversal Standard)</option>
                    <option value="1 Year">1 Year (Long-term Metabolic Reset)</option>
                  </select>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="p-3.5 bg-brand-mint/70 rounded-xl border border-brand-mint-border">
                  <span className="text-[10px] font-extrabold text-brand-forest uppercase tracking-wider block">
                    Program Duration Plan
                  </span>
                  <div className="text-lg font-extrabold text-brand-forest mt-0.5">
                    {formData.targetDuration} Program
                  </div>
                  <p className="text-xs text-brand-muted mt-1 font-medium">
                    Currently in Week {formData.currentWeek || 1}. Scheduled clinical review every 4 weeks.
                  </p>
                </div>

                <div>
                  <span className="text-xs font-bold text-brand-dark">Primary Clinical Target:</span>
                  <p className="text-xs text-brand-forest mt-0.5 font-bold">{formData.primaryGoal}</p>
                  <p className="text-xs text-brand-muted mt-1 leading-relaxed">{formData.goalDescription}</p>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-bold text-brand-dark block mb-1.5">Identified Medical Conditions:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {formData.conditions.map((cond, idx) => (
                      <span key={idx} className="text-xs bg-brand-orange-light text-brand-orange border border-brand-orange/30 px-2.5 py-0.5 rounded-lg font-bold">
                        {cond}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Lifestyle & Daily Activity */}
          <div className="bg-white p-5 rounded-2xl border border-brand-mint-border shadow-soft-sm">
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-brand-mint-border text-brand-forest font-bold text-sm">
              <Activity className="w-4 h-4 text-brand-forest" />
              <span>Lifestyle & Activity Profile</span>
            </div>

            {isEditing ? (
              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-brand-muted font-bold">Daily Activity Level</label>
                  <input
                    type="text"
                    value={formData.lifestyle.activityLevel}
                    onChange={(e) => handleInputChange('lifestyle', 'activityLevel', e.target.value)}
                    className="w-full mt-1 p-2.5 border border-brand-mint-border rounded-xl focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="text-brand-muted font-bold">Sleep Hours</label>
                  <input
                    type="text"
                    value={formData.lifestyle.sleepHours}
                    onChange={(e) => handleInputChange('lifestyle', 'sleepHours', e.target.value)}
                    className="w-full mt-1 p-2.5 border border-brand-mint-border rounded-xl focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="text-brand-muted font-bold">Exercise Routine</label>
                  <textarea
                    rows={2}
                    value={formData.lifestyle.exerciseRoutine}
                    onChange={(e) => handleInputChange('lifestyle', 'exerciseRoutine', e.target.value)}
                    className="w-full mt-1 p-2.5 border border-brand-mint-border rounded-xl focus:outline-hidden"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-3 text-xs text-brand-dark">
                <div className="flex justify-between items-center py-1 border-b border-brand-mint-subtle">
                  <span className="text-brand-muted">Activity Level:</span>
                  <span className="font-bold text-brand-forest">{formData.lifestyle.activityLevel}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-brand-mint-subtle">
                  <span className="text-brand-muted">Sleep Duration:</span>
                  <span className="font-bold text-brand-forest">{formData.lifestyle.sleepHours}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-brand-mint-subtle">
                  <span className="text-brand-muted">Daily Hydration:</span>
                  <span className="font-bold text-brand-forest">{formData.lifestyle.waterIntakeLitres} Litres</span>
                </div>
                <div>
                  <span className="text-brand-muted block mb-1">Exercise Habits:</span>
                  <p className="bg-brand-mint-subtle p-3 rounded-xl border border-brand-mint-border text-brand-dark font-medium leading-relaxed">
                    {formData.lifestyle.exerciseRoutine}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Column 2: Diagnostic Biometrics & Lab Reports */}
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-2xl border border-brand-mint-border shadow-soft-sm">
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-brand-mint-border text-brand-forest font-bold text-sm">
              <Heart className="w-4 h-4 text-brand-orange" />
              <span>Biometric Markers & Diagnostic Labs</span>
            </div>

            {isEditing ? (
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="text-brand-muted font-bold">Current Wt (kg)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.biometrics.currentWeightKg}
                    onChange={(e) => handleInputChange('biometrics', 'currentWeightKg', parseFloat(e.target.value))}
                    className="w-full mt-1 p-2 border border-brand-mint-border rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-brand-muted font-bold">Target Wt (kg)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.biometrics.targetWeightKg}
                    onChange={(e) => handleInputChange('biometrics', 'targetWeightKg', parseFloat(e.target.value))}
                    className="w-full mt-1 p-2 border border-brand-mint-border rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-brand-muted font-bold">HbA1c (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.biometrics.hba1c}
                    onChange={(e) => handleInputChange('biometrics', 'hba1c', parseFloat(e.target.value))}
                    className="w-full mt-1 p-2 border border-brand-mint-border rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-brand-muted font-bold">Fasting Sugar (mg/dL)</label>
                  <input
                    type="number"
                    value={formData.biometrics.fastingGlucose}
                    onChange={(e) => handleInputChange('biometrics', 'fastingGlucose', parseInt(e.target.value))}
                    className="w-full mt-1 p-2 border border-brand-mint-border rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-brand-muted font-bold">LDL Cholesterol</label>
                  <input
                    type="number"
                    value={formData.biometrics.ldlCholesterol}
                    onChange={(e) => handleInputChange('biometrics', 'ldlCholesterol', parseInt(e.target.value))}
                    className="w-full mt-1 p-2 border border-brand-mint-border rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-brand-muted font-bold">Blood Pressure</label>
                  <input
                    type="text"
                    value={formData.biometrics.bloodPressure}
                    onChange={(e) => handleInputChange('biometrics', 'bloodPressure', e.target.value)}
                    className="w-full mt-1 p-2 border border-brand-mint-border rounded-xl"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 bg-brand-mint-subtle rounded-xl border border-brand-mint-border">
                    <span className="text-[10px] uppercase font-bold text-brand-muted">Current Weight</span>
                    <div className="text-lg font-extrabold text-brand-dark mt-0.5">
                      {formData.biometrics.currentWeightKg} <span className="text-xs font-normal text-brand-muted">kg</span>
                    </div>
                    <span className="text-[11px] text-brand-forest font-bold">
                      Target: {formData.biometrics.targetWeightKg} kg
                    </span>
                  </div>

                  <div className="p-3 bg-brand-mint-subtle rounded-xl border border-brand-mint-border">
                    <span className="text-[10px] uppercase font-bold text-brand-muted">BMI Index</span>
                    <div className="text-lg font-extrabold text-brand-dark mt-0.5">
                      {formData.biometrics.bmi}
                    </div>
                    <span className="text-[11px] text-brand-orange font-bold">
                      Overweight Grade I
                    </span>
                  </div>

                  <div className="p-3 bg-brand-orange-light/50 rounded-xl border border-brand-orange/30">
                    <span className="text-[10px] uppercase font-bold text-brand-orange">HbA1c Level</span>
                    <div className="text-lg font-extrabold text-brand-dark mt-0.5">
                      {formData.biometrics.hba1c}%
                    </div>
                    <span className="text-[11px] text-brand-orange font-bold">
                      Diabetic Range (&gt;6.5%)
                    </span>
                  </div>

                  <div className="p-3 bg-brand-orange-light/50 rounded-xl border border-brand-orange/30">
                    <span className="text-[10px] uppercase font-bold text-brand-orange">Fasting Sugar</span>
                    <div className="text-lg font-extrabold text-brand-dark mt-0.5">
                      {formData.biometrics.fastingGlucose} <span className="text-xs font-normal text-brand-muted">mg/dL</span>
                    </div>
                    <span className="text-[11px] text-brand-orange font-bold">
                      Elevated (Norm: &lt;100)
                    </span>
                  </div>

                  <div className="p-3 bg-brand-mint-subtle rounded-xl border border-brand-mint-border">
                    <span className="text-[10px] uppercase font-bold text-brand-muted">LDL Cholesterol</span>
                    <div className="text-lg font-extrabold text-brand-dark mt-0.5">
                      {formData.biometrics.ldlCholesterol} <span className="text-xs font-normal text-brand-muted">mg/dL</span>
                    </div>
                    <span className="text-[11px] text-brand-forest font-bold">
                      Borderline High (&lt;100)
                    </span>
                  </div>

                  <div className="p-3 bg-brand-mint-subtle rounded-xl border border-brand-mint-border">
                    <span className="text-[10px] uppercase font-bold text-brand-muted">Blood Pressure</span>
                    <div className="text-lg font-extrabold text-brand-dark mt-0.5">
                      {formData.biometrics.bloodPressure}
                    </div>
                    <span className="text-[11px] text-brand-muted font-bold">
                      Prehypertension
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Allergies & Sensitivities */}
          <div className="bg-white p-5 rounded-2xl border border-brand-mint-border shadow-soft-sm">
            <div className="flex items-center gap-2 pb-3 mb-3 border-b border-brand-mint-border text-brand-forest font-bold text-sm">
              <AlertTriangle className="w-4 h-4 text-brand-orange" />
              <span>Sensitivities & Restrictions</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex flex-wrap gap-1.5">
                {formData.lifestyle.allergies.map((al, idx) => (
                  <span key={idx} className="bg-brand-mint text-brand-forest border border-brand-mint-border px-2.5 py-0.5 rounded-lg font-bold">
                    ⚠️ {al}
                  </span>
                ))}
              </div>
              <p className="text-brand-muted pt-1 text-[11px]">
                Meal plans automatically filter out triggers and emphasize lactose-free or easily digestible alternatives.
              </p>
            </div>
          </div>
        </div>

        {/* Column 3: 24-Hour Dietary Recall */}
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-2xl border border-brand-mint-border shadow-soft-sm">
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-brand-mint-border text-brand-forest font-bold text-sm">
              <Utensils className="w-4 h-4 text-brand-forest" />
              <span>24-Hour Dietary Recall (Baseline)</span>
            </div>

            {isEditing ? (
              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-brand-muted font-bold">Current Dietary Preference</label>
                  <input
                    type="text"
                    value={formData.lifestyle.dietaryPreference}
                    onChange={(e) => handleInputChange('lifestyle', 'dietaryPreference', e.target.value)}
                    className="w-full mt-1 p-2.5 border border-brand-mint-border rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-brand-muted font-bold">Baseline Eating Habits & Pitfalls</label>
                  <textarea
                    rows={4}
                    value={formData.lifestyle.currentEatingHabits}
                    onChange={(e) => handleInputChange('lifestyle', 'currentEatingHabits', e.target.value)}
                    className="w-full mt-1 p-2.5 border border-brand-mint-border rounded-xl"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-brand-muted font-bold">Dietary Pattern:</span>
                  <span className="ml-2 font-bold text-brand-forest bg-brand-mint px-2.5 py-0.5 rounded-md border border-brand-mint-border">
                    {formData.lifestyle.dietaryPreference}
                  </span>
                </div>
                <div>
                  <span className="text-brand-muted font-bold block mb-1">Detailed Patient Recall:</span>
                  <div className="p-3.5 bg-brand-cream border border-brand-mint-border rounded-xl text-brand-dark leading-relaxed italic">
                    "{formData.lifestyle.currentEatingHabits}"
                  </div>
                </div>

                <div className="p-3.5 bg-brand-mint/60 rounded-xl border border-brand-mint-border mt-3">
                  <span className="font-extrabold text-brand-forest flex items-center gap-1.5 text-xs">
                    <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                    Daily Drop Clinical Dietitian Note
                  </span>
                  <p className="text-xs text-brand-dark mt-1 leading-relaxed">
                    Target morning glycemic control by introducing high-protein cheela. Replace evening office samosas with sprouted moong or roasted makhana.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Quick Case Summary Badge */}
          <div className="bg-brand-forest text-white p-5 rounded-2xl shadow-soft">
            <span className="text-[10px] font-extrabold tracking-wider uppercase text-brand-orange">
              Active Daily Drop Prescription
            </span>
            <div className="text-base font-extrabold mt-1">
              {client.activeMealPlan.name}
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-brand-forest-light text-center">
              <div>
                <span className="text-[10px] text-brand-mint block">Target Cals</span>
                <span className="text-xs font-bold text-white">{client.activeMealPlan.targetCalories} kcal</span>
              </div>
              <div>
                <span className="text-[10px] text-brand-mint block">Target Protein</span>
                <span className="text-xs font-extrabold text-brand-orange">{client.activeMealPlan.targetProteinG}g</span>
              </div>
              <div>
                <span className="text-[10px] text-brand-mint block">Target Carbs</span>
                <span className="text-xs font-bold text-white">{client.activeMealPlan.targetCarbsG}g</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
