import React, { useState } from 'react';
import { 
  Award, 
  TrendingUp, 
  Calendar, 
  CheckCircle2, 
  Send, 
  PlusCircle, 
  Activity, 
  Sparkles,
  ChefHat
} from 'lucide-react';

export default function WeeklyReviewSection({ client, onAddWeeklyReview }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [weekNumber, setWeekNumber] = useState((client.weeklyReviews?.length || 0) + 1);
  const [complianceScore, setComplianceScore] = useState(85);
  const [bloodSugarUpdate, setBloodSugarUpdate] = useState('Fasting sugar dropped 12 points to 136 mg/dL');
  const [nutritionistNotes, setNutritionistNotes] = useState('Excellent adherence to lunch and breakfast. Evening snacks require substitution with roasted makhana.');
  const [actionItems, setActionItems] = useState('Drink 2.5L water daily\nAvoid fried office snacks\nWalk 25 mins post-dinner');
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      weekNumber: parseInt(weekNumber) || 1,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      complianceScore: parseInt(complianceScore) || 80,
      bloodSugarUpdate: bloodSugarUpdate.trim(),
      nutritionistNotes: nutritionistNotes.trim(),
      actionItems: actionItems.split('\n').filter(Boolean)
    };

    onAddWeeklyReview(client.id, newReview);
    setShowAddForm(false);
    setSubmittedMessage(true);
    setTimeout(() => setSubmittedMessage(false), 3000);
  };

  const reviews = client.weeklyReviews || [];

  return (
    <div className="space-y-6">

      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-brand-mint-border shadow-soft-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="p-2 bg-brand-mint text-brand-forest rounded-xl">
              <Award className="w-5 h-5 text-brand-orange" />
            </span>
            <div>
              <h1 className="text-xl font-extrabold text-brand-dark tracking-tight">
                Weekly Clinical Accountability & Compliance Scorecards
              </h1>
              <p className="text-xs text-brand-muted">
                Weekly progress summaries, compliance scores, and actionable milestones for {client.name}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-1.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-soft-sm hover:shadow-glow-orange cursor-pointer"
        >
          <PlusCircle className="w-3.5 h-3.5" />
          <span>{showAddForm ? 'Close Form' : 'Publish Week Review'}</span>
        </button>
      </div>

      {submittedMessage && (
        <div className="p-4 bg-brand-mint border border-brand-mint-border text-brand-forest rounded-2xl text-xs flex items-center gap-2 font-bold">
          <CheckCircle2 className="w-4 h-4 text-brand-forest" />
          Weekly clinical review published successfully and synced to patient's mobile app!
        </div>
      )}

      {/* Add Weekly Review Form */}
      {showAddForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl border border-brand-orange/40 shadow-soft space-y-4 text-xs">
          <div className="flex items-center justify-between border-b border-brand-mint-border pb-3">
            <h3 className="font-extrabold text-brand-forest text-sm">Author Weekly Patient Assessment</h3>
            <span className="text-brand-muted font-bold">Week {weekNumber} Evaluation</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="font-bold text-brand-dark block mb-1">Week Number</label>
              <input
                type="number"
                value={weekNumber}
                onChange={(e) => setWeekNumber(e.target.value)}
                className="w-full p-2.5 border border-brand-mint-border rounded-xl bg-brand-cream font-medium"
              />
            </div>
            <div>
              <label className="font-bold text-brand-dark block mb-1">Weekly Adherence Score (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={complianceScore}
                onChange={(e) => setComplianceScore(e.target.value)}
                className="w-full p-2.5 border border-brand-mint-border rounded-xl bg-brand-cream font-medium"
              />
            </div>
            <div>
              <label className="font-bold text-brand-dark block mb-1">Biometric / Sugar Trend</label>
              <input
                type="text"
                value={bloodSugarUpdate}
                onChange={(e) => setBloodSugarUpdate(e.target.value)}
                className="w-full p-2.5 border border-brand-mint-border rounded-xl bg-brand-cream font-medium"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-brand-dark block mb-1">Daily Drop Dietitian Clinical Remarks</label>
            <textarea
              rows={3}
              value={nutritionistNotes}
              onChange={(e) => setNutritionistNotes(e.target.value)}
              className="w-full p-2.5 border border-brand-mint-border rounded-xl bg-brand-cream font-medium"
            />
          </div>

          <div>
            <label className="font-bold text-brand-dark block mb-1">Action Items for Upcoming Week (one per line)</label>
            <textarea
              rows={3}
              value={actionItems}
              onChange={(e) => setActionItems(e.target.value)}
              className="w-full p-2.5 border border-brand-mint-border rounded-xl bg-brand-cream font-medium"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 text-brand-muted hover:bg-brand-mint rounded-xl font-bold cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-5 py-2.5 rounded-xl shadow-soft-sm cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" /> Publish to Patient Mobile
            </button>
          </div>
        </form>
      )}

      {/* Existing Reviews List */}
      <div className="space-y-4">
        {reviews.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-brand-mint-border text-brand-muted">
            <Award className="w-10 h-10 text-brand-mint-border mx-auto mb-2" />
            <p className="text-sm font-bold">No weekly reviews recorded yet.</p>
          </div>
        ) : (
          reviews.map((rev, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-brand-mint-border shadow-soft-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-brand-mint-border">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-brand-dark text-base">
                    Week {rev.weekNumber} Clinical Assessment
                  </span>
                  <span className="text-xs text-brand-muted">• Published on {rev.date}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-brand-mint text-brand-forest border border-brand-mint-border">
                    Adherence Score: {rev.complianceScore}%
                  </span>
                </div>
              </div>

              {rev.bloodSugarUpdate && (
                <div className="p-3 bg-brand-orange-light/60 border border-brand-orange/30 rounded-xl text-xs text-brand-dark font-medium flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-brand-orange shrink-0" />
                  <span><strong className="text-brand-orange">Biometric Improvement:</strong> {rev.bloodSugarUpdate}</span>
                </div>
              )}

              <p className="text-xs text-brand-dark leading-relaxed font-medium">
                {rev.nutritionistNotes}
              </p>

              {rev.actionItems && rev.actionItems.length > 0 && (
                <div className="pt-2">
                  <span className="text-xs font-bold text-brand-forest block mb-2">
                    Action Items Assigned for Next Week:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {rev.actionItems.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-brand-dark bg-brand-mint-subtle p-2.5 rounded-xl border border-brand-mint-border font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-forest shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

    </div>
  );
}
