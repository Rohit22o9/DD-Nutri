import React from 'react';
import { 
  UserPlus, 
  UtensilsCrossed, 
  Camera, 
  Award, 
  ArrowRight, 
  Users, 
  CheckCircle2, 
  Flame, 
  Activity, 
  ChevronRight,
  TrendingUp,
  Clock,
  Sparkles
} from 'lucide-react';

export default function AdminOverview({
  user,
  clients,
  onNavigateTab,
  onSelectClient,
  onOnboardNewCustomer
}) {
  const totalClients = clients.length;
  const totalMealLogs = clients.reduce((acc, c) => acc + (c.mealLogs?.length || 0), 0);
  const reviewedMealLogs = clients.reduce(
    (acc, c) => acc + (c.mealLogs?.filter(l => l.feedback)?.length || 0), 
    0
  );

  return (
    <div className="space-y-6">

      {/* Welcome Banner */}
      <div className="bg-white p-6 rounded-3xl border border-brand-mint-border shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider text-brand-orange bg-brand-orange-light px-2.5 py-0.5 rounded-full border border-brand-orange/30">
            Daily Drop Clinical Practice Hub
          </span>
          <h1 className="text-xl sm:text-2xl font-black text-brand-dark tracking-tight mt-1">
            Welcome, {user?.name || 'Dr. Shalini'}
          </h1>
          <p className="text-xs text-brand-muted font-medium mt-0.5">
            Select a service below to onboard a patient, customize diets, or review meal photos.
          </p>
        </div>

        <button
          onClick={onOnboardNewCustomer}
          className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-black px-5 py-2.5 rounded-2xl shadow-soft-sm hover:shadow-glow-orange transition-all cursor-pointer shrink-0"
        >
          <UserPlus className="w-4 h-4" />
          <span>Onboard New Customer</span>
        </button>
      </div>

      {/* Quick KPI Stat Chips */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white p-4 rounded-2xl border border-brand-mint-border shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase text-brand-muted">Active Patients</span>
            <Users className="w-4 h-4 text-brand-forest" />
          </div>
          <div className="text-2xl font-black text-brand-dark mt-1">
            {totalClients}
          </div>
          <span className="text-[11px] text-brand-forest font-bold">On Active Daily Drop Care</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-brand-mint-border shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase text-brand-muted">Meal Photos Logged</span>
            <Camera className="w-4 h-4 text-brand-orange" />
          </div>
          <div className="text-2xl font-black text-brand-dark mt-1">
            {totalMealLogs}
          </div>
          <span className="text-[11px] text-brand-orange font-bold">Verified by Clinical Team</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-brand-mint-border shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase text-brand-muted">Avg. Adherence</span>
            <Activity className="w-4 h-4 text-brand-forest" />
          </div>
          <div className="text-2xl font-black text-brand-forest mt-1">
            88%
          </div>
          <span className="text-[11px] text-brand-muted font-medium">Compliance Target</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-brand-mint-border shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase text-brand-muted">Consultation Mode</span>
            <CheckCircle2 className="w-4 h-4 text-brand-forest" />
          </div>
          <div className="text-base font-black text-brand-dark mt-1">
            Active Online
          </div>
          <span className="text-[11px] text-brand-forest font-bold">Daily Drop Certified</span>
        </div>

      </div>

      {/* Nutritionist Services Section (Requested by Sir) */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-black text-brand-dark tracking-tight">
            Nutritionist Core Services & Workflows
          </h2>
          <span className="text-xs text-brand-muted font-medium">Click any service to proceed</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Service 1: Onboard Customer & Take Case */}
          <div 
            onClick={() => onNavigateTab('case')}
            className="p-5 bg-white rounded-3xl border-2 border-brand-mint-border hover:border-brand-forest/40 transition-all cursor-pointer shadow-soft-sm group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="p-2.5 bg-brand-mint text-brand-forest rounded-2xl group-hover:scale-105 transition-transform">
                  <UserPlus className="w-5 h-5 text-brand-orange" />
                </span>
                <span className="text-[10px] font-black uppercase text-brand-forest bg-brand-mint px-2.5 py-0.5 rounded-full">
                  Step 1: Intake
                </span>
              </div>
              <h3 className="text-base font-black text-brand-dark group-hover:text-brand-forest transition-colors">
                Onboard New Customer & "Take Case"
              </h3>
              <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                Record customer goals (sugar, cholesterol, weight loss), timeline (3m, 6m, 1yr), medical diagnostic history, and 24-hr diet recall.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-brand-mint-border flex items-center justify-between text-xs font-bold text-brand-forest">
              <span>Open Case Intake File</span>
              <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Service 2: Smart Meal Plan & Macro Tuner */}
          <div 
            onClick={() => onNavigateTab('plan')}
            className="p-5 bg-white rounded-3xl border-2 border-brand-mint-border hover:border-brand-orange/40 transition-all cursor-pointer shadow-soft-sm group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="p-2.5 bg-brand-orange-light text-brand-orange rounded-2xl group-hover:scale-105 transition-transform">
                  <UtensilsCrossed className="w-5 h-5 text-brand-orange" />
                </span>
                <span className="text-[10px] font-black uppercase text-brand-orange bg-brand-orange-light px-2.5 py-0.5 rounded-full">
                  Step 2: Planning
                </span>
              </div>
              <h3 className="text-base font-black text-brand-dark group-hover:text-brand-orange transition-colors">
                Clinical Meal Plan & Dynamic Macro Tuner
              </h3>
              <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                Generate condition and cuisine presets. Fine-tune target protein (20g vs 25g) with live portion scaling and push to patient app.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-brand-mint-border flex items-center justify-between text-xs font-bold text-brand-orange">
              <span>Open Meal Customizer</span>
              <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Service 3: Meal Photo Review Feed */}
          <div 
            onClick={() => onNavigateTab('review')}
            className="p-5 bg-white rounded-3xl border-2 border-brand-mint-border hover:border-brand-forest/40 transition-all cursor-pointer shadow-soft-sm group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="p-2.5 bg-brand-mint text-brand-forest rounded-2xl group-hover:scale-105 transition-transform">
                  <Camera className="w-5 h-5 text-brand-forest" />
                </span>
                <span className="text-[10px] font-black uppercase text-brand-forest bg-brand-mint px-2.5 py-0.5 rounded-full">
                  Step 3: Verification
                </span>
              </div>
              <h3 className="text-base font-black text-brand-dark group-hover:text-brand-forest transition-colors">
                Patient Plate Photo Review & Remarks
              </h3>
              <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                Inspect meal photos uploaded by patients to verify portion size, oil usage, and deliver 1-click clinical feedback.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-brand-mint-border flex items-center justify-between text-xs font-bold text-brand-forest">
              <span>Inspect Meal Gallery</span>
              <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Service 4: Weekly Accountability Assessments */}
          <div 
            onClick={() => onNavigateTab('weekly')}
            className="p-5 bg-white rounded-3xl border-2 border-brand-mint-border hover:border-brand-forest/40 transition-all cursor-pointer shadow-soft-sm group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="p-2.5 bg-brand-mint text-brand-forest rounded-2xl group-hover:scale-105 transition-transform">
                  <Award className="w-5 h-5 text-brand-orange" />
                </span>
                <span className="text-[10px] font-black uppercase text-brand-forest bg-brand-mint px-2.5 py-0.5 rounded-full">
                  Step 4: Accountability
                </span>
              </div>
              <h3 className="text-base font-black text-brand-dark group-hover:text-brand-forest transition-colors">
                Weekly Clinical Assessments & Milestones
              </h3>
              <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                Issue weekly compliance scores, log biometric improvements (fasting sugar, weight loss), and assign next week's action goals.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-brand-mint-border flex items-center justify-between text-xs font-bold text-brand-forest">
              <span>View Scorecards</span>
              <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>
      </div>

      {/* Assigned Patient Cases List Table */}
      <div className="bg-white p-6 rounded-3xl border border-brand-mint-border shadow-soft">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-black text-brand-dark">Active Assigned Patient Cases</h2>
            <p className="text-xs text-brand-muted">Quick access to client records, active meal plans, and review feeds</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-brand-mint-border text-brand-muted uppercase text-[10px] font-black">
                <th className="pb-3">Patient</th>
                <th className="pb-3">Program Plan</th>
                <th className="pb-3">Primary Objective</th>
                <th className="pb-3">Conditions</th>
                <th className="pb-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-mint-subtle">
              {clients.map((c) => (
                <tr key={c.id} className="hover:bg-brand-mint-subtle/50 transition-colors">
                  <td className="py-3">
                    <div className="flex items-center gap-2.5">
                      <img 
                        src={c.avatar} 
                        alt={c.name} 
                        className="w-8 h-8 rounded-full object-cover border border-brand-mint-border"
                      />
                      <div>
                        <span className="font-extrabold text-brand-dark block">{c.name}</span>
                        <span className="text-[10px] text-brand-muted">{c.age} yrs • {c.gender}</span>
                      </div>
                    </div>
                  </td>

                  <td className="py-3">
                    <span className="font-bold text-brand-forest bg-brand-mint px-2 py-0.5 rounded-md border border-brand-mint-border">
                      {c.targetDuration} (Week {c.currentWeek || 1})
                    </span>
                  </td>

                  <td className="py-3 font-semibold text-brand-dark">
                    {c.primaryGoal}
                  </td>

                  <td className="py-3">
                    <div className="flex flex-wrap gap-1">
                      {c.conditions.map((cond, idx) => (
                        <span key={idx} className="text-[10px] bg-brand-orange-light text-brand-orange border border-brand-orange/30 px-1.5 py-0.5 rounded-md font-bold">
                          {cond}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td className="py-3 text-right space-x-1.5">
                    <button
                      onClick={() => {
                        onSelectClient(c.id);
                        onNavigateTab('case');
                      }}
                      className="px-2.5 py-1 bg-brand-mint hover:bg-brand-forest hover:text-white text-brand-forest font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Case File
                    </button>
                    <button
                      onClick={() => {
                        onSelectClient(c.id);
                        onNavigateTab('plan');
                      }}
                      className="px-2.5 py-1 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Diet Plan
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
