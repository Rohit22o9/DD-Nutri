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
import dailyDropLogo from '../assets/daily_drop_logo.png';

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
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Official Daily Drop Logo & Brand Banner */}
          <div className="flex items-center space-x-3 cursor-pointer shrink-0">
            <div className="flex items-center gap-3">
              <img 
                src={dailyDropLogo} 
                alt="Daily Drop Nutrition" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform hover:scale-[1.02]"
              />
              <div className="flex flex-col pl-3 border-l-2 border-brand-mint-border">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-brand-forest leading-tight">
                    Nutrition & Care
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-brand-orange text-white px-2 py-0.5 rounded-full shadow-2xs">
                    Clinical
                  </span>
                </div>
                <span className="text-[11px] text-brand-muted font-semibold hidden md:block">
                  Dietitians & Patient Health Platform
                </span>
              </div>
            </div>
          </div>

          {/* Central Role / View Switcher (Desktop & Mobile) */}
          <div className="flex items-center bg-brand-mint/80 p-1.5 rounded-2xl border border-brand-mint-border shadow-inner">
            <button
              onClick={() => setCurrentRole('nutritionist')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                currentRole === 'nutritionist'
                  ? 'bg-brand-forest text-white shadow-soft-sm'
                  : 'text-brand-forest hover:bg-white/80'
              }`}
            >
              <Stethoscope className={`w-4 h-4 ${currentRole === 'nutritionist' ? 'text-brand-orange' : 'text-brand-forest'}`} />
              <span className="hidden sm:inline">Nutritionist Portal</span>
              <span className="sm:hidden">Portal</span>
            </button>

            <button
              onClick={() => setCurrentRole('client')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                currentRole === 'client'
                  ? 'bg-brand-forest text-white shadow-soft-sm'
                  : 'text-brand-forest hover:bg-white/80'
              }`}
            >
              <Smartphone className={`w-4 h-4 ${currentRole === 'client' ? 'text-brand-orange' : 'text-brand-forest'}`} />
              <span className="hidden sm:inline">Patient Mobile App</span>
              <span className="sm:hidden">App</span>
            </button>

            <button
              onClick={() => setCurrentRole('spec')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                currentRole === 'spec'
                  ? 'bg-brand-forest text-white shadow-soft-sm'
                  : 'text-brand-forest hover:bg-white/80'
              }`}
            >
              <FileText className={`w-4 h-4 ${currentRole === 'spec' ? 'text-brand-orange' : 'text-brand-forest'}`} />
              <span className="hidden lg:inline">Requirements Spec (PRD)</span>
              <span className="lg:hidden">PRD</span>
            </button>
          </div>

          {/* Client Selector & Actions */}
          <div className="flex items-center gap-2.5">
            <div className="relative flex items-center">
              <label htmlFor="clientSelect" className="sr-only">Select Patient Case</label>
              <div className="flex items-center gap-2 bg-white border border-brand-mint-border rounded-xl px-3 py-2 text-xs text-brand-dark shadow-2xs hover:border-brand-forest/40 transition-colors">
                <img 
                  src={selectedClient.avatar} 
                  alt={selectedClient.name} 
                  className="w-6 h-6 rounded-full object-cover border border-brand-mint-border"
                />
                <select
                  id="clientSelect"
                  value={selectedClientId}
                  onChange={(e) => setSelectedClientId(e.target.value)}
                  className="bg-transparent font-bold text-brand-dark pr-4 focus:outline-hidden cursor-pointer"
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
              className="flex items-center gap-1.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-black px-4 py-2.5 rounded-xl transition-all shadow-soft-sm hover:shadow-glow-orange cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span className="hidden md:inline">Take New Case</span>
            </button>

            <button
              onClick={onResetData}
              title="Reset Demo Data"
              className="p-2 text-brand-muted hover:text-brand-forest hover:bg-brand-mint rounded-xl transition-colors cursor-pointer border border-transparent hover:border-brand-mint-border"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
