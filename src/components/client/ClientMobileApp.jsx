import React, { useState } from 'react';
import { 
  Utensils, 
  Camera, 
  MessageSquare, 
  User, 
  ChevronRight, 
  Upload, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Droplets, 
  Flame, 
  Heart,
  Calendar,
  Smartphone,
  Maximize2,
  Minimize2,
  ChefHat
} from 'lucide-react';
import dailyDropLogoWhite from '../../assets/daily_drop_logo_white.png';
import dailyDropLogo from '../../assets/daily_drop_logo.png';

export default function ClientMobileApp({ 
  client, 
  onUploadMealPhoto 
}) {
  const [activeTab, setActiveTab] = useState('plan'); // 'plan', 'upload', 'feedback', 'health'
  const [isFramed, setIsFramed] = useState(true);

  // Upload Form State
  const [uploadMealSlot, setUploadMealSlot] = useState('lunch');
  const [clientNotes, setClientNotes] = useState('');
  const [photoPreview, setPhotoPreview] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [waterGlasses, setWaterGlasses] = useState(6);

  // Preset sample photo urls for quick 1-click test upload
  const SAMPLE_MEALS = [
    { label: 'Moong Dal Cheela', url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80' },
    { label: 'Roti & Dal Thali', url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80' },
    { label: 'Green Salad Bowl', url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80' },
    { label: 'Snack / Tea Plate', url: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80' }
  ];

  const handlePhotoFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    const finalPhoto = photoPreview || SAMPLE_MEALS[0].url;

    const newLog = {
      id: `log_${Date.now()}`,
      mealSlot: uploadMealSlot,
      mealSlotName: uploadMealSlot.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()),
      date: 'Today',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      photoUrl: finalPhoto,
      clientNotes: clientNotes || 'Prepared according to Daily Drop meal instructions.',
      status: 'pending',
      feedback: null
    };

    onUploadMealPhoto(client.id, newLog);
    setUploadSuccess(true);
    setClientNotes('');
    setPhotoPreview(null);
    setTimeout(() => {
      setUploadSuccess(false);
      setActiveTab('feedback');
    }, 1800);
  };

  return (
    <div className="py-6 flex flex-col items-center justify-center min-h-[85vh]">
      
      {/* Viewport Control Bar */}
      <div className="flex items-center justify-between w-full max-w-sm sm:max-w-md mb-4 px-2 text-xs text-brand-muted">
        <div className="flex items-center gap-2 font-bold text-brand-forest">
          <Smartphone className="w-4 h-4 text-brand-orange" />
          <span>Daily Drop Patient App ({client.name})</span>
        </div>
        <button
          onClick={() => setIsFramed(!isFramed)}
          className="flex items-center gap-1.5 text-[11px] bg-white border border-brand-mint-border px-3 py-1 rounded-xl text-brand-dark font-semibold hover:bg-brand-mint transition-colors cursor-pointer shadow-2xs"
        >
          {isFramed ? <Maximize2 className="w-3 h-3" /> : <Minimize2 className="w-3 h-3" />}
          <span>{isFramed ? 'Full Screen' : 'Phone Frame'}</span>
        </button>
      </div>

      {/* Mobile Device Frame Container */}
      <div className={`transition-all duration-300 w-full ${
        isFramed 
          ? 'max-w-[400px] rounded-[42px] border-[10px] border-brand-dark shadow-soft-lg overflow-hidden bg-brand-dark ring-1 ring-brand-dark/40' 
          : 'max-w-2xl rounded-2xl border border-brand-mint-border shadow-soft overflow-hidden bg-white'
      }`}>
        
        {/* Inner Phone Screen */}
        <div className="bg-brand-cream min-h-[660px] max-h-[820px] flex flex-col justify-between overflow-y-auto relative text-brand-dark">
          
          {/* iOS-Style Top Bar */}
          <div className="bg-white/90 backdrop-blur-md sticky top-0 z-30 px-5 pt-3 pb-2.5 border-b border-brand-mint-border flex items-center justify-between">
            <div className="text-[11px] font-extrabold text-brand-dark">9:41</div>
            <div className="w-20 h-4 bg-brand-dark rounded-full mx-auto -mt-1 hidden sm:block"></div>
            <div className="flex items-center gap-1.5 text-[11px] text-brand-dark font-bold">
              <span className="text-[9px]">5G</span>
              <div className="w-4 h-2 rounded-xs border border-brand-dark flex items-center p-0.5">
                <div className="w-2 h-full bg-brand-dark rounded-2xs"></div>
              </div>
            </div>
          </div>

          {/* Patient App Header with Official Daily Drop Brand */}
          <div className="bg-brand-forest text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src={client.avatar} 
                  alt={client.name} 
                  className="w-10 h-10 rounded-full object-cover border-2 border-brand-orange shadow-2xs"
                />
                <div>
                  <h3 className="font-extrabold text-sm leading-tight text-white">{client.name}</h3>
                  <span className="text-[10px] text-brand-mint font-semibold">
                    {client.targetDuration} Plan • Week {client.currentWeek || 1}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col items-end">
                <img 
                  src={dailyDropLogoWhite} 
                  alt="Daily Drop" 
                  className="h-6 w-auto object-contain mb-1"
                />
                <span className="text-[9px] bg-brand-orange text-white px-2 py-0.5 rounded-full font-bold">
                  Care Network
                </span>
              </div>
            </div>

            {/* Quick Macro Summary Pill */}
            <div className="grid grid-cols-4 gap-1.5 mt-3 pt-3 border-t border-brand-forest-light text-center text-white">
              <div className="bg-brand-forest-dark/60 p-1.5 rounded-xl border border-brand-forest-light/30">
                <span className="text-[9px] text-brand-mint block">Target Cals</span>
                <span className="text-[11px] font-extrabold">{client.activeMealPlan.targetCalories}</span>
              </div>
              <div className="bg-brand-forest-dark/60 p-1.5 rounded-xl border border-brand-forest-light/30">
                <span className="text-[9px] text-brand-orange block">Protein</span>
                <span className="text-[11px] font-extrabold text-brand-orange">{client.activeMealPlan.targetProteinG}g</span>
              </div>
              <div className="bg-brand-forest-dark/60 p-1.5 rounded-xl border border-brand-forest-light/30">
                <span className="text-[9px] text-brand-mint block">Carbs</span>
                <span className="text-[11px] font-extrabold">{client.activeMealPlan.targetCarbsG}g</span>
              </div>
              <div className="bg-brand-forest-dark/60 p-1.5 rounded-xl border border-brand-forest-light/30">
                <span className="text-[9px] text-brand-mint block">Fats</span>
                <span className="text-[11px] font-extrabold">{client.activeMealPlan.targetFatsG}g</span>
              </div>
            </div>
          </div>

          {/* TAB CONTENT CONTAINER */}
          <div className="p-4 flex-1 space-y-4">
            
            {/* 1. TODAY'S MEAL PLAN */}
            {activeTab === 'plan' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-brand-forest uppercase tracking-wider">
                    Today's Prescribed Diet
                  </span>
                  <span className="text-[11px] font-bold text-brand-forest bg-brand-mint px-2 py-0.5 rounded-md border border-brand-mint-border">
                    Target: {client.activeMealPlan.targetProteinG}g Protein
                  </span>
                </div>

                {client.activeMealPlan.meals.map((meal, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-2xl border border-brand-mint-border shadow-2xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-forest bg-brand-mint px-2.5 py-0.5 rounded-md border border-brand-mint-border">
                        {meal.title}
                      </span>
                      <span className="text-[11px] font-bold text-brand-dark">
                        {meal.calories} kcal
                      </span>
                    </div>

                    <h4 className="font-extrabold text-xs text-brand-dark">{meal.dish}</h4>
                    
                    <div className="bg-brand-mint-subtle p-2.5 rounded-xl text-[11px] text-brand-dark border border-brand-mint-border">
                      <span className="font-bold text-brand-forest block text-[10px] uppercase">Prescribed Portion:</span>
                      {meal.portion}
                    </div>

                    {meal.alternatives && meal.alternatives.length > 0 && (
                      <div className="text-[10px] text-brand-muted pt-1">
                        <span className="font-bold text-brand-forest">Approved Swap: </span>
                        {meal.alternatives[0]}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-1 border-t border-brand-mint-border text-[10px]">
                      <span className="text-brand-orange font-bold">Protein: {meal.proteinG}g</span>
                      <span className="text-brand-muted">Carbs: {meal.carbsG}g • Fats: {meal.fatsG}g</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 2. PHOTO UPLOAD & MEAL RECORD KEEPING */}
            {activeTab === 'upload' && (
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-2xl border border-brand-mint-border shadow-2xs space-y-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 bg-brand-mint text-brand-forest rounded-xl">
                      <Camera className="w-4 h-4 text-brand-orange" />
                    </span>
                    <div>
                      <h4 className="font-extrabold text-brand-dark text-sm">Upload Meal Photo</h4>
                      <p className="text-[11px] text-brand-muted">Your dietitian will inspect this plate and provide feedback</p>
                    </div>
                  </div>

                  {uploadSuccess && (
                    <div className="p-3 bg-brand-mint border border-brand-mint-border text-brand-forest rounded-xl text-xs font-bold flex items-center gap-2 animate-fade-in">
                      <CheckCircle2 className="w-4 h-4 text-brand-forest" />
                      Plate photo uploaded successfully to your dietitian!
                    </div>
                  )}

                  <form onSubmit={handleUploadSubmit} className="space-y-3">
                    
                    <div>
                      <label className="font-bold text-brand-dark block mb-1">Select Meal Slot:</label>
                      <select
                        value={uploadMealSlot}
                        onChange={(e) => setUploadMealSlot(e.target.value)}
                        className="w-full p-2.5 border border-brand-mint-border rounded-xl bg-brand-cream text-xs font-semibold focus:outline-hidden"
                      >
                        <option value="breakfast">Breakfast</option>
                        <option value="mid_morning">Mid-Morning Snack</option>
                        <option value="lunch">Lunch</option>
                        <option value="evening_snack">Evening Snack</option>
                        <option value="dinner">Dinner</option>
                      </select>
                    </div>

                    {/* Photo Picker / File Upload */}
                    <div>
                      <label className="font-bold text-brand-dark block mb-1">Take Photo / Choose File:</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoFileChange}
                        className="w-full text-xs text-brand-muted file:mr-2 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-brand-mint file:text-brand-forest hover:file:bg-brand-mint-border cursor-pointer"
                      />
                    </div>

                    {/* Quick Demo Photo Presets */}
                    <div>
                      <span className="text-[10px] text-brand-muted font-bold block mb-1">Or Pick Demo Sample Plate:</span>
                      <div className="grid grid-cols-2 gap-1.5">
                        {SAMPLE_MEALS.map((sample, sIdx) => (
                          <button
                            key={sIdx}
                            type="button"
                            onClick={() => setPhotoPreview(sample.url)}
                            className={`p-1.5 rounded-xl border text-left text-[11px] flex items-center gap-1.5 transition-colors cursor-pointer ${
                              photoPreview === sample.url
                                ? 'border-brand-orange bg-brand-orange-light text-brand-orange font-bold'
                                : 'border-brand-mint-border bg-brand-cream text-brand-dark'
                            }`}
                          >
                            <img src={sample.url} alt={sample.label} className="w-6 h-6 rounded-lg object-cover" />
                            <span className="truncate">{sample.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Photo Preview */}
                    {photoPreview && (
                      <div className="relative rounded-2xl overflow-hidden border border-brand-mint-border max-h-40">
                        <img src={photoPreview} alt="Preview" className="w-full h-40 object-cover" />
                        <span className="absolute bottom-2 left-2 bg-brand-dark/70 text-white text-[10px] px-2 py-0.5 rounded-md font-bold">
                          Ready to Send
                        </span>
                      </div>
                    )}

                    <div>
                      <label className="font-bold text-brand-dark block mb-1">
                        Plate Description & Notes:
                      </label>
                      <textarea
                        rows={2}
                        placeholder="What did you make? Did you finish it all? Any changes?"
                        value={clientNotes}
                        onChange={(e) => setClientNotes(e.target.value)}
                        className="w-full p-2.5 border border-brand-mint-border rounded-xl focus:outline-hidden text-xs bg-brand-cream"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold rounded-xl text-xs transition-all shadow-soft-sm hover:shadow-glow-orange flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Send Plate to Dietitian</span>
                    </button>

                  </form>
                </div>
              </div>
            )}

            {/* 3. NUTRITIONIST FEEDBACK TIMELINE */}
            {activeTab === 'feedback' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-brand-forest uppercase tracking-wider">
                    Dietitian Clinical Remarks
                  </span>
                  <span className="text-[11px] text-brand-muted font-bold">
                    {client.mealLogs.filter(l => l.feedback).length} Reviews Given
                  </span>
                </div>

                {client.mealLogs.map((log) => (
                  <div key={log.id} className="bg-white rounded-2xl border border-brand-mint-border shadow-2xs overflow-hidden">
                    <div className="flex gap-3 p-3">
                      <img 
                        src={log.photoUrl} 
                        alt={log.mealSlotName} 
                        className="w-20 h-20 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-extrabold uppercase text-brand-forest">
                            {log.mealSlotName}
                          </span>
                          <span className="text-[10px] text-brand-muted font-medium">{log.time}</span>
                        </div>
                        <p className="text-[11px] text-brand-dark line-clamp-2 italic font-medium">
                          "{log.clientNotes}"
                        </p>
                      </div>
                    </div>

                    {/* Nutritionist Review Card */}
                    {log.feedback ? (
                      <div className={`p-3 text-xs border-t ${
                        log.feedback.tag === 'approved' 
                          ? 'bg-brand-mint/90 border-brand-mint-border text-brand-forest' 
                          : 'bg-brand-orange-light/90 border-brand-orange/30 text-brand-dark'
                      }`}>
                        <div className="flex items-center justify-between font-bold text-[11px] mb-1">
                          <span className="flex items-center gap-1 text-brand-forest font-extrabold">
                            <Sparkles className="w-3 h-3 text-brand-orange" />
                            {log.feedback.nutritionistName}
                          </span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${
                            log.feedback.tag === 'approved' ? 'bg-brand-forest text-white' : 'bg-brand-orange text-white'
                          }`}>
                            {log.feedback.tag === 'approved' ? '✓ Approved' : '⚠️ Action Advised'}
                          </span>
                        </div>
                        <p className="text-[11px] font-bold leading-relaxed">
                          "{log.feedback.comment}"
                        </p>
                      </div>
                    ) : (
                      <div className="p-2.5 bg-brand-cream border-t border-brand-mint-border text-center text-[10px] text-brand-muted font-medium">
                        Waiting for dietitian to review this plate...
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* 4. HEALTH & PROGRESS */}
            {activeTab === 'health' && (
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-2xl border border-brand-mint-border shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-brand-forest uppercase tracking-wider">
                      My Clinical Goals
                    </span>
                    <span className="text-[11px] font-bold text-brand-orange">
                      {client.targetDuration} Plan
                    </span>
                  </div>

                  <div className="p-3 bg-brand-mint/70 border border-brand-mint-border rounded-xl space-y-1">
                    <span className="text-xs font-extrabold text-brand-forest">{client.primaryGoal}</span>
                    <p className="text-[11px] text-brand-muted font-medium">{client.goalDescription}</p>
                  </div>

                  {/* Weight Milestone Progress */}
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between font-bold">
                      <span className="text-brand-muted">Weight Milestone:</span>
                      <span className="text-brand-dark">{client.biometrics.currentWeightKg} kg &rarr; {client.biometrics.targetWeightKg} kg</span>
                    </div>
                    <div className="w-full h-2.5 bg-brand-mint rounded-full overflow-hidden">
                      <div className="w-3/5 h-full bg-brand-forest rounded-full"></div>
                    </div>
                  </div>

                  {/* Daily Hydration Counter */}
                  <div className="pt-2 border-t border-brand-mint-border flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-brand-dark font-medium">
                      <Droplets className="w-4 h-4 text-brand-forest" />
                      <span>Water: <strong className="text-brand-forest">{waterGlasses} glasses</strong> / 8</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setWaterGlasses(w => Math.min(12, w + 1))}
                      className="text-[11px] bg-brand-mint text-brand-forest border border-brand-mint-border px-2.5 py-1 rounded-xl font-bold hover:bg-brand-forest hover:text-white transition-colors cursor-pointer"
                    >
                      + Add Glass
                    </button>
                  </div>
                </div>

                {/* Latest Weekly Note */}
                {client.weeklyReviews && client.weeklyReviews[0] && (
                  <div className="bg-white p-4 rounded-2xl border border-brand-mint-border shadow-2xs space-y-2 text-xs">
                    <div className="flex items-center justify-between font-bold">
                      <span className="text-brand-dark">Week {client.weeklyReviews[0].weekNumber} Summary</span>
                      <span className="text-brand-forest bg-brand-mint px-2.5 py-0.5 rounded-full text-[10px] border border-brand-mint-border">
                        {client.weeklyReviews[0].complianceScore}% Score
                      </span>
                    </div>
                    <p className="text-[11px] text-brand-dark leading-normal italic font-medium">
                      "{client.weeklyReviews[0].nutritionistNotes}"
                    </p>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* iOS Bottom Navigation Bar */}
          <div className="sticky bottom-0 bg-white/95 backdrop-blur-md border-t border-brand-mint-border px-3 py-2 flex items-center justify-around z-30">
            <button
              onClick={() => setActiveTab('plan')}
              className={`flex flex-col items-center gap-0.5 p-1 rounded-xl transition-colors cursor-pointer ${
                activeTab === 'plan' ? 'text-brand-forest font-bold' : 'text-brand-muted hover:text-brand-forest'
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span className="text-[10px]">Diet Plan</span>
            </button>

            <button
              onClick={() => setActiveTab('upload')}
              className={`flex flex-col items-center gap-0.5 p-1 rounded-xl transition-colors cursor-pointer ${
                activeTab === 'upload' ? 'text-brand-orange font-bold' : 'text-brand-muted hover:text-brand-forest'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center -mt-3 shadow-glow-orange">
                <Camera className="w-4 h-4" />
              </div>
              <span className="text-[10px]">Log Meal</span>
            </button>

            <button
              onClick={() => setActiveTab('feedback')}
              className={`flex flex-col items-center gap-0.5 p-1 rounded-xl transition-colors cursor-pointer ${
                activeTab === 'feedback' ? 'text-brand-forest font-bold' : 'text-brand-muted hover:text-brand-forest'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span className="text-[10px]">Feedback</span>
            </button>

            <button
              onClick={() => setActiveTab('health')}
              className={`flex flex-col items-center gap-0.5 p-1 rounded-xl transition-colors cursor-pointer ${
                activeTab === 'health' ? 'text-brand-forest font-bold' : 'text-brand-muted hover:text-brand-forest'
              }`}
            >
              <User className="w-4 h-4" />
              <span className="text-[10px]">My Goals</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
