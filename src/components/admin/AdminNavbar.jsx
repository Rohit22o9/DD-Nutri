import React from 'react';
import { 
  LogOut, 
  Smartphone, 
  UserPlus, 
  Sparkles, 
  RotateCcw,
  ExternalLink,
  ChevronDown,
  UserCheck
} from 'lucide-react';
import dailyDropLogo from '../../assets/daily_drop_logo.png';

export default function AdminNavbar({
  user,
  onLogout,
  clients,
  selectedClientId,
  setSelectedClientId,
  onOnboardCustomerClick,
  onResetData,
  onToggleMobilePreview,
  showMobilePreview
}) {
  const selectedClient = clients.find(c => c.id === selectedClientId) || clients[0];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-brand-mint-border shadow-soft-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Portal Identity */}
          <div className="flex items-center gap-3">
            <img 
              src={dailyDropLogo} 
              alt="Daily Drop" 
              className="h-9 w-auto object-contain"
            />
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-brand-mint-border">
              <span className="text-xs font-black uppercase tracking-wider text-brand-forest">
                Nutritionist Admin
              </span>
              <span className="text-[10px] font-bold uppercase bg-brand-orange text-white px-2 py-0.5 rounded-full">
                Portal
              </span>
            </div>
          </div>

          {/* Center: Current Patient Context */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-brand-cream border border-brand-mint-border rounded-xl px-3 py-1.5 text-xs shadow-2xs">
              <span className="text-brand-muted font-bold text-[11px] hidden md:inline">Case:</span>
              <img 
                src={selectedClient.avatar} 
                alt={selectedClient.name} 
                className="w-5 h-5 rounded-full object-cover border border-brand-mint-border"
              />
              <select
                value={selectedClientId}
                onChange={(e) => setSelectedClientId(e.target.value)}
                className="bg-transparent font-bold text-brand-dark pr-3 focus:outline-hidden cursor-pointer"
              >
                {clients.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.targetDuration})
                  </option>
                ))}
              </select>
            </div>

            {/* "+ Onboard New Customer" Button (Requested by Sir) */}
            <button
              onClick={onOnboardCustomerClick}
              className="flex items-center gap-1.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold px-3.5 py-1.5 rounded-xl transition-all shadow-soft-sm hover:shadow-glow-orange cursor-pointer"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Onboard Customer</span>
            </button>
          </div>

          {/* Right: Nutritionist Profile & Actions */}
          <div className="flex items-center gap-2">
            
            {/* Toggle Patient App Preview */}
            <button
              onClick={onToggleMobilePreview}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                showMobilePreview 
                  ? 'bg-brand-forest text-white' 
                  : 'bg-brand-mint text-brand-forest hover:bg-brand-mint-border'
              }`}
              title="Preview what the patient sees on mobile"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">{showMobilePreview ? 'Close Preview' : 'Patient App View'}</span>
            </button>

            {/* Nutritionist Identity Pill */}
            <div className="hidden xl:flex items-center gap-2 pl-2 border-l border-brand-mint-border">
              <div className="w-7 h-7 rounded-full bg-brand-forest text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                S
              </div>
              <div className="text-left text-[11px] leading-tight">
                <span className="font-bold text-brand-dark block">{user?.name || 'Dr. Shalini'}</span>
                <span className="text-brand-muted text-[10px]">{user?.title || 'Clinical Dietitian'}</span>
              </div>
            </div>

            {/* Reset Data */}
            <button
              onClick={onResetData}
              title="Reset Demo Data"
              className="p-1.5 text-brand-muted hover:text-brand-forest hover:bg-brand-mint rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Logout */}
            <button
              onClick={onLogout}
              title="Sign Out of Portal"
              className="p-1.5 text-brand-muted hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}
