import React, { useState } from 'react';
import { 
  Camera, 
  MessageSquare, 
  CheckCircle, 
  AlertCircle, 
  XCircle, 
  Clock, 
  Send, 
  Filter, 
  ThumbsUp, 
  AlertTriangle,
  User,
  Sparkles,
  Calendar,
  ChefHat
} from 'lucide-react';

export default function MealReviewFeed({ client, onAddFeedback }) {
  const [selectedTag, setSelectedTag] = useState({});
  const [feedbackTexts, setFeedbackTexts] = useState({});
  const [feedbackSentMessage, setFeedbackSentMessage] = useState(null);
  const [filterSlot, setFilterSlot] = useState('all');

  const QUICK_REMARKS = [
    { text: "This is right! Excellent portion balance.", tag: "approved" },
    { text: "Don't do this! Avoid deep fried snacks during this phase.", tag: "caution" },
    { text: "I can't see you eating this. Please stick to the prescribed exchange.", tag: "caution" },
    { text: "Portion is too large on carbohydrates — reduce roti to 1.5.", tag: "caution" },
    { text: "Great work adding the fresh raw salad! Keep this up.", tag: "approved" },
  ];

  const handleSelectQuickRemark = (logId, remark) => {
    setFeedbackTexts(prev => ({
      ...prev,
      [logId]: remark.text
    }));
    setSelectedTag(prev => ({
      ...prev,
      [logId]: remark.tag
    }));
  };

  const handleSendFeedback = (logId) => {
    const text = feedbackTexts[logId];
    if (!text || text.trim() === '') return;

    const tag = selectedTag[logId] || 'approved';
    onAddFeedback(client.id, logId, {
      id: `fb_${Date.now()}`,
      nutritionistName: 'Dr. Shalini (Daily Drop Clinical RD)',
      time: 'Just now',
      tag: tag,
      comment: text.trim()
    });

    setFeedbackSentMessage(logId);
    setTimeout(() => setFeedbackSentMessage(null), 3000);
  };

  const filteredLogs = filterSlot === 'all'
    ? client.mealLogs
    : client.mealLogs.filter(log => log.mealSlot === filterSlot);

  return (
    <div className="space-y-6">

      {/* Header & Stats */}
      <div className="bg-white p-6 rounded-2xl border border-brand-mint-border shadow-soft-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-brand-mint-border">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="p-2 bg-brand-mint text-brand-forest rounded-xl">
                <Camera className="w-5 h-5 text-brand-orange" />
              </span>
              <div>
                <h1 className="text-xl font-extrabold text-brand-dark tracking-tight">
                  Patient Meal Verification & Photo Review Feed
                </h1>
                <p className="text-xs text-brand-muted">
                  Inspect prepared plates for {client.name}, verify portion accuracy, and provide clinical feedback.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center gap-3 text-xs">
            <div className="bg-brand-mint-subtle border border-brand-mint-border px-3.5 py-1.5 rounded-xl text-brand-dark font-medium">
              Total Logs: <span className="font-extrabold text-brand-forest">{client.mealLogs.length}</span>
            </div>
            <div className="bg-brand-orange-light border border-brand-orange/30 px-3.5 py-1.5 rounded-xl text-brand-orange font-bold">
              Reviewed: <span className="font-extrabold">{client.mealLogs.filter(l => l.feedback).length}</span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 pt-4 overflow-x-auto text-xs">
          <span className="text-brand-muted font-bold">Filter by Meal:</span>
          {['all', 'breakfast', 'lunch', 'evening_snack', 'dinner'].map((slot) => (
            <button
              key={slot}
              onClick={() => setFilterSlot(slot)}
              className={`px-3 py-1.5 rounded-xl font-bold capitalize transition-colors cursor-pointer ${
                filterSlot === slot
                  ? 'bg-brand-forest text-white shadow-soft-sm'
                  : 'bg-brand-mint-subtle text-brand-muted border border-brand-mint-border hover:bg-brand-mint'
              }`}
            >
              {slot.replace('_', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Uploaded Meal Cards Feed */}
      {filteredLogs.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-2xl border border-brand-mint-border text-brand-muted">
          <Camera className="w-10 h-10 text-brand-mint-border mx-auto mb-2" />
          <p className="text-sm font-bold">No meal photos logged for this category yet.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredLogs.map((log) => {
            const hasExistingFeedback = Boolean(log.feedback);
            const currentTag = selectedTag[log.id] || (hasExistingFeedback ? log.feedback.tag : 'approved');

            return (
              <div 
                key={log.id}
                className="bg-white rounded-2xl border border-brand-mint-border shadow-soft-sm overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-12">
                  
                  {/* Photo Column */}
                  <div className="md:col-span-5 relative bg-brand-forest-dark flex items-center justify-center min-h-[260px] max-h-[360px] overflow-hidden">
                    <img 
                      src={log.photoUrl} 
                      alt={log.mealSlotName}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="bg-brand-dark/80 backdrop-blur-md text-white font-bold text-xs px-2.5 py-1 rounded-lg border border-white/10">
                        {log.mealSlotName}
                      </span>
                      <span className="bg-brand-dark/70 backdrop-blur-md text-slate-200 text-xs px-2 py-1 rounded-lg flex items-center gap-1 font-medium border border-white/10">
                        <Clock className="w-3 h-3 text-brand-orange" /> {log.time} • {log.date}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3">
                      {log.feedback ? (
                        <span className={`text-xs font-bold px-3 py-1 rounded-xl backdrop-blur-md border ${
                          log.feedback.tag === 'approved' 
                            ? 'bg-brand-forest/90 text-white border-brand-forest-light' 
                            : 'bg-brand-orange/90 text-white border-brand-orange-hover'
                        }`}>
                          {log.feedback.tag === 'approved' ? '✓ Daily Drop Approved' : '⚠️ Action Advised'}
                        </span>
                      ) : (
                        <span className="text-xs font-bold px-2.5 py-1 rounded-xl bg-brand-orange text-white shadow-soft-sm">
                          Pending Review
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Details & Nutritionist Feedback Column */}
                  <div className="md:col-span-7 p-6 flex flex-col justify-between space-y-4">
                    
                    <div>
                      {/* Client Log Entry */}
                      <div className="space-y-1.5 pb-3 border-b border-brand-mint-border">
                        <div className="flex items-center gap-2 text-xs font-bold text-brand-forest">
                          <User className="w-3.5 h-3.5 text-brand-orange" />
                          <span>Patient's Preparation & Portion Log:</span>
                        </div>
                        <p className="text-xs text-brand-dark bg-brand-mint-subtle p-3 rounded-xl border border-brand-mint-border leading-relaxed italic">
                          "{log.clientNotes}"
                        </p>
                      </div>

                      {/* Display Existing Clinical Feedback */}
                      {hasExistingFeedback && (
                        <div className={`mt-3 p-3.5 rounded-xl border ${
                          log.feedback.tag === 'approved'
                            ? 'bg-brand-mint/80 border-brand-mint-border text-brand-forest'
                            : 'bg-brand-orange-light/80 border-brand-orange/30 text-brand-dark'
                        }`}>
                          <div className="flex items-center justify-between gap-2 text-xs font-bold mb-1">
                            <span className="flex items-center gap-1.5 text-brand-forest">
                              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                              {log.feedback.nutritionistName}
                            </span>
                            <span className="text-[11px] font-normal text-brand-muted">
                              {log.feedback.time}
                            </span>
                          </div>
                          <p className="text-xs leading-relaxed font-bold">
                            "{log.feedback.comment}"
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Nutritionist Feedback Input & Controls */}
                    <div className="pt-2 border-t border-brand-mint-border space-y-2.5">
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-brand-forest">
                          {hasExistingFeedback ? 'Update or Add Additional Clinical Remark:' : 'Provide Clinical Feedback to Client:'}
                        </span>

                        {/* Tag Selector */}
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => setSelectedTag(p => ({ ...p, [log.id]: 'approved' }))}
                            className={`text-[11px] px-2.5 py-0.5 rounded-lg font-bold transition-colors cursor-pointer ${
                              currentTag === 'approved'
                                ? 'bg-brand-forest text-white'
                                : 'bg-brand-mint text-brand-forest border border-brand-mint-border'
                            }`}
                          >
                            ✓ Approved
                          </button>
                          <button
                            type="button"
                            onClick={() => setSelectedTag(p => ({ ...p, [log.id]: 'caution' }))}
                            className={`text-[11px] px-2.5 py-0.5 rounded-lg font-bold transition-colors cursor-pointer ${
                              currentTag === 'caution'
                                ? 'bg-brand-orange text-white'
                                : 'bg-brand-orange-light text-brand-orange border border-brand-orange/30'
                            }`}
                          >
                            ⚠️ Caution
                          </button>
                        </div>
                      </div>

                      {/* Quick Remarks Pills */}
                      <div>
                        <span className="text-[10px] text-brand-muted font-bold block mb-1">
                          Official Feedback Shortcuts (Voice Note Specified):
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {QUICK_REMARKS.map((remark, rIdx) => (
                            <button
                              key={rIdx}
                              type="button"
                              onClick={() => handleSelectQuickRemark(log.id, remark)}
                              className="text-[11px] bg-brand-cream hover:bg-brand-mint text-brand-forest border border-brand-mint-border px-2.5 py-0.5 rounded-lg transition-colors cursor-pointer font-medium"
                            >
                              {remark.text.split('!')[0]}!
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Comment Input */}
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="e.g. This is right. Don't do this next time. Reduce the roti portion..."
                          value={feedbackTexts[log.id] || ''}
                          onChange={(e) => setFeedbackTexts(p => ({ ...p, [log.id]: e.target.value }))}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSendFeedback(log.id);
                          }}
                          className="flex-1 text-xs p-2.5 border border-brand-mint-border rounded-xl focus:ring-2 focus:ring-brand-orange/20 focus:outline-hidden bg-brand-cream"
                        />
                        <button
                          type="button"
                          onClick={() => handleSendFeedback(log.id)}
                          className="flex items-center gap-1.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-soft-sm hover:shadow-glow-orange cursor-pointer shrink-0"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Send</span>
                        </button>
                      </div>

                      {feedbackSentMessage === log.id && (
                        <p className="text-xs text-brand-forest font-bold animate-fade-in flex items-center gap-1">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-forest" />
                          Feedback sent to patient's mobile app feed!
                        </p>
                      )}

                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
