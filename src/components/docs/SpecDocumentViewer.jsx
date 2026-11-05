import React, { useState } from 'react';
import { 
  FileText, 
  Copy, 
  Check, 
  Download, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Code2, 
  Smartphone, 
  Stethoscope,
  ChefHat
} from 'lucide-react';

export default function SpecDocumentViewer() {
  const [copied, setCopied] = useState(false);

  const fullMarkdown = `# Daily Drop Nutrition — Platform Requirements Specification & Product Design Document (PRD)

**Document Version:** 1.1.0 (Daily Drop Ecosystem Standard)  
**Product Line:** Daily Drop Care & Clinical Dietetics Platform  
**Target Audience:** Daily Drop Engineering, Executive Leadership & Clinical Dietitians  
**Author:** Rohit (Engineering Team)  
**Status:** Ready for Review (First Draft)  

---

## 1. Executive Summary & Brand Identity

### 1.1 Brand Ecosystem Integration
Daily Drop is an established food pre-order, commercial kitchen, and healthy lifestyle delivery ecosystem:
- **Daily Drop Kitchen**: Commercial kitchen facilities & certified hourly food production.
- **Daily Drop Restaurant Partner**: Kitchen operational update and delivery management.
- **Daily Drop AI Bot**: Conversational ordering, assistance, and smart customer engagement.
- **Daily Drop Nutrition**: The dedicated clinical dietetics platform connecting qualified nutritionists with clients for case intake, smart condition/cuisine meal planning with live macro recalculation, meal plate photo verification, and actionable feedback.

### 1.2 Design System Tokens
Extracted directly from the official Daily Drop asset repository:
- **Brand Forest Green (Primary)**: \`#264329\`
- **Brand Forest Dark**: \`#182E1B\`
- **Brand Forest Light**: \`#365D3B\`
- **Brand Orange (Accent / Warmth)**: \`#ED8533\`
- **Brand Mint (Surfaces / Badges)**: \`#EBF5EE\`
- **Brand Cream (Background)**: \`#FAFCF9\`
- **Brand Dark (Typography)**: \`#152217\`
- **Brand Muted (Secondary text)**: \`#5A6E5E\`
- **Typography**: Plus Jakarta Sans, Inter, sans-serif

---

## 2. Core User Personas & Workflows

### 2.1 Persona A: Daily Drop Clinical Nutritionist / Dietitian (Web User)
* **Demographics:** Certified clinical dietitian managing active client cases.
* **Key Needs:**
  - Quick, comprehensive intake form to "take the case" during initial 45-minute consultations.
  - Automated starting presets by condition (Diabetes, Cholesterol, Fat Loss, PCOD) and cuisine (North Indian, South Indian, Pan-Indian, Eggetarian).
  - Ability to customize macronutrients with instant visual recalculations (e.g. lowering protein target from 25g to 20g).
  - Efficient verification feed to review meal photos daily with 1-click clinical feedback tags.
  - Structured weekly evaluation system to keep clients accountable.

### 2.2 Persona B: Client / Patient (Mobile User)
* **Demographics:** Individuals working to achieve health goals over 3, 6, or 12 months.
* **Key Needs:**
  - Clear, accessible daily meal plan with portion guidelines and exchange options.
  - Frictionless photo capture and meal logging (Breakfast, Lunch, Dinner, Snack).
  - Direct, reassuring feedback from their nutritionist visible immediately under uploaded meals.
  - Progress visibility into streaks, weight milestones, and hydration.

---

## 3. Functional Requirements & Feature Modules

### Module 1: Client Onboarding & Clinical Case Intake ("Taking the Case")
During the initial consultation, the nutritionist records:
1. **Demographics & Anthropometrics:** Full Name, Age, Gender, Height, Current Weight, Target Weight, Target BMI.
2. **Primary Clinical Goals & Target Duration:** Weight Reduction, Blood Sugar (Diabetes) Control, LDL Cholesterol Reduction, PCOD Management, Hypertension. Program duration: **3 Months**, **6 Months**, or **12 Months (1 Year)**.
3. **Medical & Pathological History:** Diagnostic labs: Fasting Glucose, HbA1c (%), Lipid Profile, Blood Pressure, Medications, Food Allergies.
4. **Lifestyle & Dietary Recall:** Physical activity level, sleep hours, hydration, and 24-hour dietary recall.

### Module 2: Smart Preset Meal Plan Generator & Macro Fine-Tuner
1. **Condition & Cuisine Matrix:**
   - Nutritionist selects Clinical Condition Preset + Cuisine Preference.
   - Generates a balanced 5-meal daily plan populated with verified dishes and macronutrient totals.
2. **Interactive Macro Fine-Tuning Engine:**
   - Nutritionist adjusts daily target calories and specific macronutrient targets (e.g., lowering protein from 25g/meal to 20g/meal).
   - System dynamically recalculates portion sizes (e.g., Paneer from 100g to 80g, Besan Cheela size, Dal portion) and reflects revised calorie/macro sums in real-time.
3. **Dish Exchange & Alternatives:** Pre-approved swap options per meal slot.
4. **Instant Publishing:** Syncs directly to the client's mobile app.

### Module 3: Client Mobile Experience & Meal Photo Logging
1. **Daily Meal Plan View:** Tabbed view of Today's meals with portion instructions and nutritional tags.
2. **Photo Capture & Record Keeping:** Client captures/uploads photo before eating, selects meal slot, and enters portion notes.

### Module 4: Nutritionist Review Feed & Feedback System
1. **Clinical Photo Review Gallery:** Visual inspection for portion size accuracy, food balance, and cooking oil usage.
2. **Micro-Feedback & Clinical Remarks:**
   - Quick feedback tags: *"✅ This is right! Excellent balance"*, *"⚠️ Don't do this! Avoid deep fried snacks"*, *"❌ I can't see you eating this"*, *"⚠️ Portion too large on carbohydrates"*.
   - Direct custom remarks.
3. **Weekly Review & Accountability Scorecard:** Adherence score (e.g. 85%), biometric trends, and action goals for next week.

---

## 4. Technical Architecture
- **Web Portal:** Desktop-optimized React SPA designed for dense clinical data, fast keyboard entry, and batch photo review.
- **Client Mobile Web / PWA:** Mobile-first, responsive viewport with native-like camera upload and instant feedback timeline.
- **Unified State & Storage:** Reactive state management with local storage persistence and mock API layer ready for Node/Express/PostgreSQL backend integration.
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([fullMarkdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'DAILY_DROP_NUTRITION_PRD.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      
      {/* Top Banner with Actions */}
      <div className="bg-white p-6 rounded-2xl border border-brand-mint-border shadow-soft-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="p-2.5 bg-brand-mint text-brand-forest rounded-2xl">
              <FileText className="w-5 h-5 text-brand-orange" />
            </span>
            <div>
              <h1 className="text-xl font-extrabold text-brand-dark tracking-tight">
                Daily Drop Nutrition — PRD & Specification Document
              </h1>
              <p className="text-xs text-brand-muted">
                Official clinical specification aligned with the Daily Drop ecosystem standards
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold bg-brand-mint hover:bg-brand-mint-border text-brand-forest rounded-xl transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-brand-forest" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy PRD Markdown'}</span>
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold bg-brand-orange hover:bg-brand-orange-hover text-white rounded-xl shadow-soft-sm transition-all hover:shadow-glow-orange cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .MD</span>
          </button>
        </div>
      </div>

      {/* Visual System Architecture Diagram */}
      <div className="bg-brand-forest text-white p-6 rounded-3xl shadow-soft space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold text-brand-orange uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-brand-orange" />
            Daily Drop Ecosystem Architecture & Dual-Flow Interaction
          </span>
          <span className="text-[11px] bg-brand-forest-dark text-brand-mint px-3 py-0.5 rounded-full border border-brand-forest-light">
            Ecosystem Standard
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="bg-brand-forest-dark/80 p-4 rounded-2xl border border-brand-forest-light/40 space-y-2">
            <div className="flex items-center gap-2 text-brand-orange font-bold text-xs">
              <Stethoscope className="w-4 h-4" />
              <span>Nutritionist Web Portal</span>
            </div>
            <ul className="text-xs text-brand-mint space-y-1">
              <li>• Structured Case Onboarding ("Taking Case")</li>
              <li>• Clinical condition + Indian cuisine matrix</li>
              <li>• Real-time Macro Fine-Tuner (Protein 25g &rarr; 20g)</li>
              <li>• Photo verification & clinical remarks</li>
              <li>• Weekly compliance scorecards</li>
            </ul>
          </div>

          <div className="bg-brand-forest-dark/80 p-4 rounded-2xl border border-brand-forest-light/40 space-y-2 flex flex-col justify-center text-center">
            <div className="text-xs font-bold text-white flex items-center justify-center gap-1.5">
              <ChefHat className="w-4 h-4 text-brand-orange" />
              <span>Daily Drop Kitchen & Care Core</span>
            </div>
            <p className="text-[11px] text-brand-mint mt-1">
              Connects clinical meal prescriptions with portion-controlled preparation, nutrient tracking, and longitudinal health records (HbA1c, Chol, Wt).
            </p>
          </div>

          <div className="bg-brand-forest-dark/80 p-4 rounded-2xl border border-brand-forest-light/40 space-y-2">
            <div className="flex items-center gap-2 text-brand-orange font-bold text-xs">
              <Smartphone className="w-4 h-4" />
              <span>Client Mobile App (PWA)</span>
            </div>
            <ul className="text-xs text-brand-mint space-y-1">
              <li>• Daily 5-meal schedule with portions & swaps</li>
              <li>• Camera plate logging ("What did you eat?")</li>
              <li>• Live dietitian feedback feed</li>
              <li>• Water intake & weight milestone tracking</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rendered Document View */}
      <div className="bg-white p-8 rounded-3xl border border-brand-mint-border shadow-soft-sm space-y-8 text-brand-dark leading-relaxed">
        
        <div className="border-b border-brand-mint-border pb-4">
          <div className="text-xs font-extrabold uppercase tracking-wider text-brand-forest bg-brand-mint inline-block px-3 py-1 rounded-md mb-2 border border-brand-mint-border">
            Official Product Specification
          </div>
          <h2 className="text-2xl font-extrabold text-brand-dark tracking-tight">Daily Drop Nutrition — Platform Specification</h2>
          <p className="text-xs text-brand-muted mt-1">
            Clinical Operating Protocol for Daily Drop Dietitians & Collaborative Client Care
          </p>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h3 className="text-lg font-extrabold text-brand-forest border-l-4 border-brand-orange pl-3">
            1. Client Onboarding ("Taking the Case")
          </h3>
          <p className="text-xs text-brand-dark font-medium">
            When a patient begins with a Daily Drop clinical nutritionist, a standardized consultation occurs:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-brand-mint-subtle p-3.5 rounded-xl border border-brand-mint-border">
              <span className="font-bold text-brand-forest block mb-1">Target Duration</span>
              <p className="text-brand-muted">3 Months (Intensive), 6 Months (Standard Clinical Reversal), or 12 Months (Metabolic Transformation).</p>
            </div>
            <div className="bg-brand-mint-subtle p-3.5 rounded-xl border border-brand-mint-border">
              <span className="font-bold text-brand-forest block mb-1">Target Objectives</span>
              <p className="text-brand-muted">Weight reduction, Fasting blood glucose & HbA1c control, LDL cholesterol reduction, PCOD hormonal balancing.</p>
            </div>
            <div className="bg-brand-mint-subtle p-3.5 rounded-xl border border-brand-mint-border">
              <span className="font-bold text-brand-forest block mb-1">Biometrics & Medical History</span>
              <p className="text-brand-muted">Diagnostic lab values (HbA1c, fasting glucose, lipid panel), medications, allergies, and blood pressure.</p>
            </div>
            <div className="bg-brand-mint-subtle p-3.5 rounded-xl border border-brand-mint-border">
              <span className="font-bold text-brand-forest block mb-1">Dietary Recall & Lifestyle</span>
              <p className="text-brand-muted">24-hour baseline recall: current breakfast, lunch, snacking triggers, dining out, and exercise routine.</p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h3 className="text-lg font-extrabold text-brand-forest border-l-4 border-brand-orange pl-3">
            2. Smart Meal Plan Generator & Dynamic Macro Tuner
          </h3>
          <p className="text-xs text-brand-dark font-medium">
            Rather than composing meal plans from scratch, the nutritionist uses automated starting presets combined with dynamic macro scaling:
          </p>
          <div className="p-4 bg-brand-orange-light/50 rounded-2xl border border-brand-orange/30 text-xs space-y-2">
            <div className="font-extrabold text-brand-dark flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              Dynamic Recalculation Implementation (Voice Note Specific)
            </div>
            <p className="text-brand-dark leading-relaxed">
              When the nutritionist adjusts target protein (e.g., from 25g down to 20g), the platform recalculates the portion size of protein-bearing dishes (e.g., paneer from 100g to 80g, cheela batter grams, dal katoris) and instantly re-balances total daily calories, carbohydrates, and fats.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h3 className="text-lg font-extrabold text-brand-forest border-l-4 border-brand-orange pl-3">
            3. Client Meal Photo Upload & Clinical Record Keeping
          </h3>
          <p className="text-xs text-brand-dark font-medium">
            Clients capture photos of their actual plates before eating. The nutritionist reviews them to verify:
          </p>
          <ul className="text-xs text-brand-dark list-disc list-inside space-y-1">
            <li><strong>Portion control:</strong> Is the roti quantity or rice bowl within prescribed limits?</li>
            <li><strong>Preparation method:</strong> Is there excessive floating oil/tadka, or deep frying?</li>
            <li><strong>Food balance:</strong> Did the client include the prescribed raw salad/fiber?</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h3 className="text-lg font-extrabold text-brand-forest border-l-4 border-brand-orange pl-3">
            4. Nutritionist Feedback & Weekly Clinical Review
          </h3>
          <p className="text-xs text-brand-dark font-medium">
            Nutritionists deliver immediate and structured feedback:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 bg-brand-mint-subtle rounded-xl border border-brand-mint-border">
              <span className="font-bold text-brand-forest block mb-1">Daily Micro-Feedback</span>
              <p className="text-brand-muted">Direct remarks on photos: <em>"This is right! Good portion balance."</em> or <em>"Don't do this! I can't see you eating deep-fried snacks."</em></p>
            </div>
            <div className="p-3.5 bg-brand-mint-subtle rounded-xl border border-brand-mint-border">
              <span className="font-bold text-brand-forest block mb-1">Weekly Accountability Scorecard</span>
              <p className="text-brand-muted">Adherence percentage (e.g. 85%), fasting sugar changes, and assigned action goals for the next 7 days.</p>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
