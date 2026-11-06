import React, { useState } from 'react';
import { Lock, Mail, ArrowRight, ShieldCheck, UserCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import dailyDropLogo from '../../assets/daily_drop_logo.png';

export default function NutritionistLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('dr.shalini@dailydrop.today');
  const [password, setPassword] = useState('DailyDropCare2026!');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onLoginSuccess({
        name: 'Dr. Shalini (Clinical RD)',
        email: email,
        title: 'Lead Clinical Nutritionist',
        badge: 'Daily Drop Partner Dietitian',
        license: 'RD-IND-84920'
      });
      setLoading(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col justify-center items-center p-4">
      
      {/* Login Card */}
      <div className="w-full max-w-md bg-white border border-brand-mint-border shadow-soft-lg rounded-3xl p-8 space-y-6">
        
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <img 
            src={dailyDropLogo} 
            alt="Daily Drop Nutrition" 
            className="h-11 mx-auto object-contain"
          />
          <div className="pt-2">
            <h1 className="text-xl font-black text-brand-dark tracking-tight">
              Nutritionist Admin Portal
            </h1>
            <p className="text-xs text-brand-muted font-medium mt-1">
              Clinical Practice, Patient Onboarding & Consultation Hub
            </p>
          </div>
        </div>

        {/* Credentials Pill */}
        <div className="p-3 bg-brand-mint/60 border border-brand-mint-border rounded-2xl flex items-center gap-2.5 text-xs text-brand-forest">
          <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0" />
          <span className="font-semibold text-[11px]">
            Authorized Daily Drop Nutritionist Access Only
          </span>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4 text-xs">
          <div>
            <label className="block text-xs font-bold text-brand-dark mb-1.5 uppercase tracking-wide">
              Dietitian Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-brand-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 bg-brand-cream border border-brand-mint-border rounded-xl text-brand-dark font-medium focus:ring-2 focus:ring-brand-orange/20 focus:outline-hidden"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-brand-dark mb-1.5 uppercase tracking-wide">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-brand-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 bg-brand-cream border border-brand-mint-border rounded-xl text-brand-dark font-medium focus:ring-2 focus:ring-brand-orange/20 focus:outline-hidden"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-brand-forest hover:bg-brand-forest-dark text-white font-bold rounded-2xl shadow-soft transition-all flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
          >
            <span>{loading ? 'Authenticating...' : 'Sign In to Admin Portal'}</span>
            <ArrowRight className="w-4 h-4 text-brand-orange" />
          </button>
        </form>

        {/* Quick Demo Access */}
        <div className="pt-2 border-t border-brand-mint-border text-center">
          <span className="text-[11px] text-brand-muted font-medium block mb-2">
            Instant Demo Access
          </span>
          <button
            type="button"
            onClick={handleLogin}
            className="w-full py-2.5 bg-brand-orange-light hover:bg-brand-orange/15 text-brand-orange border border-brand-orange/30 font-bold rounded-xl text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
          >
            <UserCheck className="w-4 h-4" />
            <span>Sign In as Dr. Shalini (Clinical RD)</span>
          </button>
        </div>

      </div>

      {/* Footer Note */}
      <p className="text-[11px] text-brand-muted mt-6 text-center font-medium">
        Daily Drop Care Network • Connecting Certified Nutritionists with Patients
      </p>

    </div>
  );
}
