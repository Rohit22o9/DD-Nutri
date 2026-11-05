# Daily Drop Nutrition — Platform Requirements Specification & Product Design Document (PRD)

**Document Version:** 1.1.0 (Daily Drop Ecosystem Standard)  
**Product Line:** Daily Drop Care & Clinical Dietetics Platform  
**Target Audience:** Daily Drop Engineering, Executive Leadership, Clinical Dietitians & Operations  
**Author:** Rohit (Engineering Team)  
**Status:** Ready for Review (First Draft)  

---

## 1. Executive Summary & Brand Identity

### 1.1 Background & Daily Drop Ecosystem Integration
**Daily Drop** is an established food pre-order, commercial kitchen, and healthy lifestyle delivery ecosystem:
- **Daily Drop Kitchen**: Commercial kitchen facilities & certified hourly food production.
- **Daily Drop Restaurant Partner**: Kitchen operational update and delivery communication management.
- **Daily Drop AI Bot**: Conversational ordering, assistance, and smart customer engagement.
- **Daily Drop Nutrition (This Platform)**: The clinical nutrition and dietetics branch of Daily Drop. It provides nutritionists and dietitians with a centralized platform for client onboarding ("Taking the Case"), smart condition- and cuisine-based meal planning with live macro tuning, client meal plate verification via photo logging, and real-time clinical feedback.

### 1.2 Official Daily Drop Design System Tokens
Extracted directly from the official Daily Drop asset repository to maintain strict brand consistency:
- **Brand Forest Green (Primary)**: `#264329`
- **Brand Forest Dark**: `#182E1B`
- **Brand Forest Light**: `#365D3B`
- **Brand Vibrant Orange (Accent / Warmth)**: `#ED8533`
- **Brand Orange Hover**: `#DA7424`
- **Brand Orange Light**: `#FDF3EB`
- **Brand Mint (Subtle green surfaces & badges)**: `#EBF5EE`
- **Brand Mint Subtle**: `#F4FAF6`
- **Brand Mint Border**: `#D8E5DC`
- **Brand Cream (Background)**: `#FAFCF9`
- **Brand Dark (Typography)**: `#152217`
- **Brand Muted (Secondary text)**: `#5A6E5E`
- **Typography**: Plus Jakarta Sans, Inter, sans-serif

---

## 2. User Personas & Core Workflows

### 2.1 Persona A: Daily Drop Clinical Nutritionist / Dietitian (Primary Web User)
* **Demographics:** Certified clinical nutritionist / Registered Dietitian (RD) managing 30–80 active client cases.
* **Key Needs:**
  - Standardized, fast clinical intake form to "take the case" during initial 45-minute consultations.
  - Automated starting presets by condition (Diabetes, Cholesterol, Fat Loss, PCOD) and regional cuisine (North Indian, South Indian, Pan-Indian, Eggetarian).
  - Ability to customize macronutrients with instant visual recalculations (e.g. lowering protein target from 25g to 20g with portion recalibration).
  - Dedicated verification feed to review 100+ meal photos daily with 1-click clinical feedback tags.
  - Structured weekly evaluation system to keep clients accountable.

### 2.2 Persona B: Client / Patient (Primary Mobile User)
* **Demographics:** Individuals working with a Daily Drop nutritionist to achieve specific health goals over 3, 6, or 12 months.
* **Key Needs:**
  - Clear, accessible daily meal plan with portion guidelines and exchange options.
  - Frictionless photo capture and meal logging (Breakfast, Lunch, Dinner, Snack).
  - Direct, reassuring feedback from their nutritionist visible immediately under uploaded meals.
  - Visibility into progress, streaks, hydration, and upcoming weekly milestones.

---

## 3. Functional Requirements & Feature Modules

### Module 1: Client Onboarding & Clinical Case Intake ("Taking the Case")
During the initial consultation, the nutritionist conducts a standardized intake interview:
1. **Demographics & Anthropometrics:** Full Name, Age, Gender, Height, Current Weight, Target Weight, Target BMI.
2. **Primary Clinical Goals & Target Duration:**
   - Primary Goal: Weight Reduction, Blood Sugar (Diabetes / Prediabetes) Control, LDL Cholesterol Reduction, PCOD/PCOS Management, Hypertension Management, Lean Muscle Gain.
   - Program Duration: **3 Months** (Short-term Intensive), **6 Months** (Clinical Reversal Standard), or **12 Months (1 Year)** (Metabolic Transformation).
3. **Medical & Pathological History:**
   - Diagnostic biomarkers: Fasting Blood Glucose, HbA1c (%), Lipid Profile (Total Cholesterol, LDL, HDL, Triglycerides), Blood Pressure (mmHg).
   - Pre-existing medical conditions and ongoing medications.
   - Known food allergies and dietary intolerances.
4. **Lifestyle & Dietary Recall:**
   - Daily physical activity level, sleep hours, and daily water hydration.
   - 24-hour dietary recall: current breakfast, lunch, dinner habits, sugar consumption, dining-out frequency.

### Module 2: Smart Preset Meal Plan Generator & Macro Fine-Tuner
1. **Condition & Cuisine Matrix:**
   - Nutritionist selects Clinical Condition Preset + Cuisine Preference.
   - Auto-generates a balanced 5-meal daily plan populated with verified dishes and macronutrient totals.
2. **Interactive Macro Fine-Tuning Engine:**
   - Nutritionist adjusts daily target calories and specific macronutrient targets (e.g., lowering protein from 25g/meal to 20g/meal).
   - System dynamically recalculates portion sizes (e.g., Paneer from 100g to 80g, Besan Cheela size, Dal portion) and reflects revised calorie/macro sums in real-time.
3. **Dish Exchange & Alternatives:**
   - Pre-approved swap options per meal slot so clients have flexibility without violating clinical boundaries.
4. **Instant Publishing:**
   - Pushes the plan directly to the client's mobile app with a single click.

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

## 4. Technical Architecture & Data Models

### 4.1 System Components
- **Nutritionist Web Portal:** Desktop-optimized React SPA designed for dense clinical data, fast keyboard entry, and batch photo review.
- **Client Mobile Web / PWA:** Mobile-first, responsive viewport with native-like camera upload, push notification ready, and instant chat/feedback timeline.
- **Unified State & Storage:** Reactive state management with local storage persistence and mock API layer ready for Node/Express/PostgreSQL backend integration.

---
*End of Specification Document. Aligned with the Daily Drop Product & Design System.*
