import React, { useState } from 'react';
import { 
  User, 
  Target, 
  Activity, 
  Heart, 
  AlertTriangle, 
  Save, 
  Edit3, 
  CheckCircle2, 
  Scale, 
  Utensils, 
  Sparkles,
  UserPlus
} from 'lucide-react';

export default function ClientCaseIntake({ client, onUpdateClient, onOnboardNewCustomer }) {
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
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Consultation Actions Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-3xl border border-brand-mint-border shadow-soft-sm">
        <div className="flex items-center gap-3.5">
          <img 
            src={formData.avatar} 
            alt={formData.name} 
            className="w-14 h-14 rounded-2xl object-cover border-2 border-brand-mint-border shadow-2xs"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-black text-brand-dark tracking-tight">{formData.name}</h1>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-mint text-brand-forest border border-brand-mint-border">
                {formData.age} yrs • {formData.gender}
              </span>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-orange-light text-brand-orange border border-brand-orange/30">
                {formData.targetDuration} Plan
              </span>
            </div>
            <p className="text-xs text-brand-muted mt-0.5 font-medium">
              Case ID: <span className="font-mono font-bold text-brand-forest">{formData.id}</span> • Started {formData.startDate}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {saveSuccess && (
            <span className="flex items-center gap-1 text-xs font-bold text-brand-forest bg-brand-mint px-3 py-1.5 rounded-xl border border-brand-mint-border animate-fade-in">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-forest" /> Case Saved
            </span>
          )}

          {isEditing ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => { setFormData({ ...client }); setIsEditing(false); }}
                className="px-3 py-2 text-xs font-bold text-brand-muted hover:bg-brand-mint rounded-xl transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-brand-orange hover:bg-brand-orange-hover text-white rounded-xl shadow-soft-sm cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" /> Save Changes
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-brand-forest hover:bg-brand-forest-dark text-white rounded-xl shadow-soft-sm transition-colors cursor-pointer"
            >
              <Edit3 className="w-3.5 h-3.5" /> Edit Case File
            </button>
          )}

          <button
            type="button"
            onClick={onOnboardNewCustomer}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-brand-mint hover:bg-brand-mint-border text-brand-forest rounded-xl transition-colors cursor-pointer"
          >
            <UserPlus className="w-3.5 h-3.5 text-brand-orange" />
            <span>Onboard New</span>
          </button>
        </div>
      </div>

      {/* Structured Case Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* 1. Goals & Timeline */}
        <div className="bg-white p-5 rounded-3xl border border-brand-mint-border shadow-soft-sm space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-brand-mint-border text-brand-forest font-black text-xs uppercase tracking-wider">
            <Target className="w-4 h-4 text-brand-orange" />
            <span>1. Clinical Goals & Timeline</span>
          </div>

          {isEditing ? (
            <div className="space-y-3 text-xs">
              <div>
                <label className="text-brand-muted font-bold block mb-1">Target Program Duration</label>
                <select
                  value={formData.targetDuration}
                  onChange={(e) => handleInputChange(null, 'targetDuration', e.target.value)}
                  className="w-full p-2 border border-brand-mint-border rounded-xl bg-brand-cream focus:outline-hidden font-bold"
                >
                  <option value="3 Months">3 Months (Intensive)</option>
                  <option value="6 Months">6 Months (Clinical Reversal)</option>
                  <option value="1 Year">1 Year (Metabolic Reset)</option>
                </select>
              </div>
              <div>
                <label className="text-brand-muted font-bold block mb-1">Primary Objective</label>
                <input
                  type="text"
                  value={formData.primaryGoal}
                  onChange={(e) => handleInputChange(null, 'primaryGoal', e.target.value)}
                  className="w-full p-2 border border-brand-mint-border rounded-xl focus:outline-hidden font-semibold"
                />
              </div>
              <div>
                <label className="text-brand-muted font-bold block mb-1">Goal Targets</label>
                <textarea
                  rows={2}
                  value={formData.goalDescription}
                  onChange={(e) => handleInputChange(null, 'goalDescription', e.target.value)}
                  className="w-full p-2 border border-brand-mint-border rounded-xl focus:outline-hidden"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-brand-mint rounded-2xl border border-brand-mint-border">
                <span className="text-[10px] font-black text-brand-forest uppercase tracking-wider block">
                  Program Duration
                </span>
                <div className="text-base font-black text-brand-forest mt-0.5">
                  {formData.targetDuration} Plan
                </div>
                <span className="text-[11px] text-brand-muted font-semibold">
                  Currently Week {formData.currentWeek || 1}
                </span>
              </div>

              <div>
                <span className="text-brand-muted font-bold text-[11px] block">Primary Focus:</span>
                <span className="font-extrabold text-brand-dark text-xs">{formData.primaryGoal}</span>
                <p className="text-brand-muted text-[11px] mt-0.5 leading-relaxed">{formData.goalDescription}</p>
              </div>

              <div>
                <span className="text-brand-muted font-bold text-[11px] block mb-1.5">Diagnosed Conditions:</span>
                <div className="flex flex-wrap gap-1">
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

        {/* 2. Biometrics & Pathological Labs */}
        <div className="bg-white p-5 rounded-3xl border border-brand-mint-border shadow-soft-sm space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-brand-mint-border text-brand-forest font-black text-xs uppercase tracking-wider">
            <Heart className="w-4 h-4 text-brand-orange" />
            <span>2. Diagnostic Labs & Biometrics</span>
          </div>

          {isEditing ? (
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div>
                <label className="text-brand-muted font-bold block mb-0.5">Current Wt (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.biometrics.currentWeightKg}
                  onChange={(e) => handleInputChange('biometrics', 'currentWeightKg', parseFloat(e.target.value))}
                  className="w-full p-2 border border-brand-mint-border rounded-xl"
                />
              </div>
              <div>
                <label className="text-brand-muted font-bold block mb-0.5">Target Wt (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.biometrics.targetWeightKg}
                  onChange={(e) => handleInputChange('biometrics', 'targetWeightKg', parseFloat(e.target.value))}
                  className="w-full p-2 border border-brand-mint-border rounded-xl"
                />
              </div>
              <div>
                <label className="text-brand-muted font-bold block mb-0.5">HbA1c (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.biometrics.hba1c}
                  onChange={(e) => handleInputChange('biometrics', 'hba1c', parseFloat(e.target.value))}
                  className="w-full p-2 border border-brand-mint-border rounded-xl"
                />
              </div>
              <div>
                <label className="text-brand-muted font-bold block mb-0.5">Fasting Sugar</label>
                <input
                  type="number"
                  value={formData.biometrics.fastingGlucose}
                  onChange={(e) => handleInputChange('biometrics', 'fastingGlucose', parseInt(e.target.value))}
                  className="w-full p-2 border border-brand-mint-border rounded-xl"
                />
              </div>
              <div>
                <label className="text-brand-muted font-bold block mb-0.5">LDL Chol</label>
                <input
                  type="number"
                  value={formData.biometrics.ldlCholesterol}
                  onChange={(e) => handleInputChange('biometrics', 'ldlCholesterol', parseInt(e.target.value))}
                  className="w-full p-2 border border-brand-mint-border rounded-xl"
                />
              </div>
              <div>
                <label className="text-brand-muted font-bold block mb-0.5">Blood Pressure</label>
                <input
                  type="text"
                  value={formData.biometrics.bloodPressure}
                  onChange={(e) => handleInputChange('biometrics', 'bloodPressure', e.target.value)}
                  className="w-full p-2 border border-brand-mint-border rounded-xl"
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-3 bg-brand-mint-subtle rounded-xl border border-brand-mint-border">
                <span className="text-[10px] uppercase font-bold text-brand-muted block">Weight</span>
                <span className="text-base font-black text-brand-dark">{formData.biometrics.currentWeightKg} kg</span>
                <span className="text-[10px] text-brand-forest font-bold block">Target: {formData.biometrics.targetWeightKg} kg</span>
              </div>

              <div className="p-3 bg-brand-orange-light/50 rounded-xl border border-brand-orange/30">
                <span className="text-[10px] uppercase font-bold text-brand-orange block">HbA1c Level</span>
                <span className="text-base font-black text-brand-dark">{formData.biometrics.hba1c}%</span>
                <span className="text-[10px] text-brand-orange font-bold block">Diabetic Target</span>
              </div>

              <div className="p-3 bg-brand-orange-light/50 rounded-xl border border-brand-orange/30">
                <span className="text-[10px] uppercase font-bold text-brand-orange block">Fasting Sugar</span>
                <span className="text-base font-black text-brand-dark">{formData.biometrics.fastingGlucose}</span>
                <span className="text-[10px] text-brand-muted font-bold block">mg/dL</span>
              </div>

              <div className="p-3 bg-brand-mint-subtle rounded-xl border border-brand-mint-border">
                <span className="text-[10px] uppercase font-bold text-brand-muted block">LDL Chol</span>
                <span className="text-base font-black text-brand-dark">{formData.biometrics.ldlCholesterol}</span>
                <span className="text-[10px] text-brand-forest font-bold block">mg/dL</span>
              </div>

              <div className="p-3 bg-brand-mint-subtle rounded-xl border border-brand-mint-border col-span-2 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-brand-muted block">Blood Pressure</span>
                  <span className="font-extrabold text-brand-dark">{formData.biometrics.bloodPressure}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-brand-muted block">BMI</span>
                  <span className="font-extrabold text-brand-orange">{formData.biometrics.bmi}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3. 24-Hour Recall & Lifestyle */}
        <div className="bg-white p-5 rounded-3xl border border-brand-mint-border shadow-soft-sm space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-brand-mint-border text-brand-forest font-black text-xs uppercase tracking-wider">
            <Utensils className="w-4 h-4 text-brand-forest" />
            <span>3. 24-Hr Recall & Lifestyle</span>
          </div>

          {isEditing ? (
            <div className="space-y-3 text-xs">
              <div>
                <label className="text-brand-muted font-bold block mb-1">Diet Preference</label>
                <input
                  type="text"
                  value={formData.lifestyle.dietaryPreference}
                  onChange={(e) => handleInputChange('lifestyle', 'dietaryPreference', e.target.value)}
                  className="w-full p-2 border border-brand-mint-border rounded-xl"
                />
              </div>
              <div>
                <label className="text-brand-muted font-bold block mb-1">Baseline Eating Pitfalls</label>
                <textarea
                  rows={3}
                  value={formData.lifestyle.currentEatingHabits}
                  onChange={(e) => handleInputChange('lifestyle', 'currentEatingHabits', e.target.value)}
                  className="w-full p-2 border border-brand-mint-border rounded-xl"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between items-center py-1 border-b border-brand-mint-subtle">
                <span className="text-brand-muted font-bold">Diet Style:</span>
                <span className="font-extrabold text-brand-forest bg-brand-mint px-2 py-0.5 rounded-md">
                  {formData.lifestyle.dietaryPreference}
                </span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-brand-mint-subtle">
                <span className="text-brand-muted font-bold">Activity:</span>
                <span className="font-bold text-brand-dark">{formData.lifestyle.activityLevel}</span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-brand-mint-subtle">
                <span className="text-brand-muted font-bold">Hydration:</span>
                <span className="font-bold text-brand-dark">{formData.lifestyle.waterIntakeLitres} L / day</span>
              </div>

              <div>
                <span className="text-brand-muted font-bold text-[11px] block mb-1">Patient 24-Hr Recall:</span>
                <div className="p-3 bg-brand-cream border border-brand-mint-border rounded-xl text-brand-dark italic text-[11px]">
                  "{formData.lifestyle.currentEatingHabits}"
                </div>
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
