import React from 'react';
import { 
  Stethoscope, 
  Smartphone, 
  FileText, 
  PlusCircle, 
  RotateCcw,
  Sparkles,
  ChevronDown
} from 'lucide-react';

export default function Header({ 
  currentRole, 
  setCurrentRole, 
  clients, 
  selectedClientId, 
  setSelectedClientId, 
  onNewCaseClick,
  onResetData 
}) {
  const selectedClient = clients.find(c => c.id === selectedClientId) || clients[0];

  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-brand-mint-border shadow-soft-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5">
              <img 
                src="/daily_drop_logo.png" 
                alt="Daily Drop" 
                className="h-9 w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
              <div className="border-l border-brand-mint-border pl-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-base text-brand-forest tracking-tight">
                    Nutrition
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-bold bg-brand-orange-light text-brand-orange px-2 py-0.5 rounded-full border border-brand-orange/30">
                    Dietetics Care
                  </span>
                </div>
                <p className="text-[11px] text-brand-muted hidden sm:block font-medium">
                  Part of the Daily Drop Food & Health Ecosystem
                </p>
              </div>
            </div>
          </div>

          {/* Central Role / View Switcher */}
          <div className="flex items-center bg-brand-mint/60 p-1 rounded-xl border border-brand-mint-border">
            <button
              onClick={() => setCurrentRole('nutritionist')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentRole === 'nutritionist'
                  ? 'bg-brand-forest text-white shadow-soft-sm'
                  : 'text-brand-muted hover:text-brand-forest hover:bg-white/60'
              }`}
            >
              <Stethoscope className={`w-3.5 h-3.5 ${currentRole === 'nutritionist' ? 'text-brand-orange' : 'text-brand-forest'}`} />
              <span>Nutritionist Portal</span>
            </button>

            <button
              onClick={() => setCurrentRole('client')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentRole === 'client'
                  ? 'bg-brand-forest text-white shadow-soft-sm'
                  : 'text-brand-muted hover:text-brand-forest hover:bg-white/60'
              }`}
            >
              <Smartphone className={`w-3.5 h-3.5 ${currentRole === 'client' ? 'text-brand-orange' : 'text-brand-forest'}`} />
              <span>Client Mobile App</span>
            </button>

            <button
              onClick={() => setCurrentRole('spec')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentRole === 'spec'
                  ? 'bg-brand-forest text-white shadow-soft-sm'
                  : 'text-brand-muted hover:text-brand-forest hover:bg-white/60'
              }`}
            >
              <FileText className={`w-3.5 h-3.5 ${currentRole === 'spec' ? 'text-brand-orange' : 'text-brand-forest'}`} />
              <span className="hidden md:inline">Requirements Spec (PRD)</span>
              <span className="md:hidden">PRD</span>
            </button>
          </div>

          {/* Client Selector & Actions */}
          <div className="flex items-center gap-2">
            <div className="relative flex items-center">
              <label htmlFor="clientSelect" className="sr-only">Select Patient Case</label>
              <div className="flex items-center gap-2 bg-white border border-brand-mint-border rounded-xl px-2.5 py-1.5 text-xs text-brand-dark shadow-2xs">
                <img 
                  src={selectedClient.avatar} 
                  alt={selectedClient.name} 
                  className="w-5 h-5 rounded-full object-cover border border-brand-mint-border"
                />
                <select
                  id="clientSelect"
                  value={selectedClientId}
                  onChange={(e) => setSelectedClientId(e.target.value)}
                  className="bg-transparent font-semibold text-brand-dark pr-5 focus:outline-hidden cursor-pointer"
                >
                  {clients.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.targetDuration})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={onNewCaseClick}
              title="Take New Case (Client Onboarding)"
              className="flex items-center gap-1.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold px-3.5 py-1.5 rounded-xl transition-all shadow-soft-sm hover:shadow-glow-orange cursor-pointer"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">Take New Case</span>
            </button>

            <button
              onClick={onResetData}
              title="Reset Demo Data"
              className="p-2 text-brand-muted hover:text-brand-forest hover:bg-brand-mint rounded-xl transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
