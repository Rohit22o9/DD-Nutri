import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  UtensilsCrossed, 
  Camera, 
  Award, 
  Sparkles, 
  Layers,
  ChefHat
} from 'lucide-react';
import ClientCaseIntake from './ClientCaseIntake';
import MealPlanBuilder from './MealPlanBuilder';
import MealReviewFeed from './MealReviewFeed';
import WeeklyReviewSection from './WeeklyReviewSection';

export default function NutritionistDashboard({
  client,
  onUpdateClient,
  onUpdateMealPlan,
  onAddFeedback,
  onAddWeeklyReview,
  onOpenNewCase
}) {
  const [activeTab, setActiveTab] = useState('plan'); // 'case', 'plan', 'review', 'weekly'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* Ecosystem Breadcrumb Banner */}
      <div className="bg-brand-mint/40 border border-brand-mint-border px-4 py-2.5 rounded-2xl flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-brand-forest font-semibold">
          <ChefHat className="w-4 h-4 text-brand-orange" />
          <span>Daily Drop Care Network:</span>
          <span className="font-normal text-brand-muted">
            Prescribing verified nutritional meals compliant with Daily Drop Kitchen preparation standards
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange bg-brand-orange-light px-2.5 py-0.5 rounded-full border border-brand-orange/20">
            Clinical RD Portal
          </span>
        </div>
      </div>

      {/* Top Clinical Tabs Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-mint-border pb-4">
        
        <div className="flex items-center gap-1.5 bg-brand-mint/60 p-1.5 rounded-2xl border border-brand-mint-border">
          <button
            onClick={() => setActiveTab('case')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'case'
                ? 'bg-brand-forest text-white shadow-soft-sm'
                : 'text-brand-muted hover:text-brand-forest hover:bg-white/60'
            }`}
          >
            <FileSpreadsheet className={`w-4 h-4 ${activeTab === 'case' ? 'text-brand-orange' : 'text-brand-forest'}`} />
            <span>1. Clinical Case Intake ("Taking Case")</span>
          </button>

          <button
            onClick={() => setActiveTab('plan')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'plan'
                ? 'bg-brand-forest text-white shadow-soft-sm'
                : 'text-brand-muted hover:text-brand-forest hover:bg-white/60'
            }`}
          >
            <UtensilsCrossed className={`w-4 h-4 ${activeTab === 'plan' ? 'text-brand-orange' : 'text-brand-forest'}`} />
            <span>2. Smart Meal Plan & Macro Tuner</span>
          </button>

          <button
            onClick={() => setActiveTab('review')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'review'
                ? 'bg-brand-forest text-white shadow-soft-sm'
                : 'text-brand-muted hover:text-brand-forest hover:bg-white/60'
            }`}
          >
            <Camera className={`w-4 h-4 ${activeTab === 'review' ? 'text-brand-orange' : 'text-brand-forest'}`} />
            <span>3. Meal Photo Review Feed</span>
            {client.mealLogs.length > 0 && (
              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                activeTab === 'review' ? 'bg-brand-orange text-white' : 'bg-brand-forest text-white'
              }`}>
                {client.mealLogs.length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('weekly')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'weekly'
                ? 'bg-brand-forest text-white shadow-soft-sm'
                : 'text-brand-muted hover:text-brand-forest hover:bg-white/60'
            }`}
          >
            <Award className={`w-4 h-4 ${activeTab === 'weekly' ? 'text-brand-orange' : 'text-brand-forest'}`} />
            <span>4. Weekly Clinical Assessments</span>
          </button>
        </div>

        {/* Current Active Patient Tag */}
        <div className="flex items-center gap-2 text-xs text-brand-muted">
          <span>Active Patient Case:</span>
          <span className="font-bold text-brand-forest bg-white px-3 py-1 rounded-xl border border-brand-mint-border shadow-2xs flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
            {client.name} ({client.targetDuration})
          </span>
        </div>

      </div>

      {/* Tab Contents */}
      {activeTab === 'case' && (
        <ClientCaseIntake 
          client={client} 
          onUpdateClient={onUpdateClient} 
        />
      )}

      {activeTab === 'plan' && (
        <MealPlanBuilder 
          client={client} 
          onUpdateMealPlan={onUpdateMealPlan} 
        />
      )}

      {activeTab === 'review' && (
        <MealReviewFeed 
          client={client} 
          onAddFeedback={onAddFeedback} 
        />
      )}

      {activeTab === 'weekly' && (
        <WeeklyReviewSection 
          client={client} 
          onAddWeeklyReview={onAddWeeklyReview} 
        />
      )}

    </div>
  );
}
