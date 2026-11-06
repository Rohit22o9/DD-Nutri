import React from 'react';
import { 
  LayoutDashboard, 
  UserPlus, 
  UtensilsCrossed, 
  Camera, 
  Award, 
  FileText,
  ChefHat,
  ChevronRight
} from 'lucide-react';

export default function AdminSidebar({ 
  currentTab, 
  onTabChange,
  pendingReviewCount = 0 
}) {
  const navItems = [
    { 
      id: 'overview', 
      label: 'Admin Overview & Services', 
      icon: LayoutDashboard,
      badge: null
    },
    { 
      id: 'case', 
      label: 'Onboard & Case File', 
      icon: UserPlus,
      badge: 'Taking Case'
    },
    { 
      id: 'plan', 
      label: 'Meal Planner & Macros', 
      icon: UtensilsCrossed,
      badge: 'Tuner'
    },
    { 
      id: 'review', 
      label: 'Meal Photo Reviews', 
      icon: Camera,
      badge: pendingReviewCount > 0 ? `${pendingReviewCount}` : null,
      badgeColor: 'bg-brand-orange text-white'
    },
    { 
      id: 'weekly', 
      label: 'Weekly Assessments', 
      icon: Award,
      badge: null
    },
    { 
      id: 'spec', 
      label: 'Requirements Spec (PRD)', 
      icon: FileText,
      badge: null
    }
  ];

  return (
    <aside className="w-64 bg-white border-r border-brand-mint-border flex flex-col justify-between p-4 min-h-[calc(100vh-4rem)] shrink-0">
      <div className="space-y-1">
        
        <div className="px-3 py-2 text-[10px] font-black uppercase tracking-wider text-brand-muted">
          Nutritionist Services
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl font-bold text-xs transition-all cursor-pointer ${
                isActive
                  ? 'bg-brand-forest text-white shadow-soft-sm'
                  : 'text-brand-dark/80 hover:bg-brand-mint-subtle hover:text-brand-forest'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon className={`w-4 h-4 ${isActive ? 'text-brand-orange' : 'text-brand-forest'}`} />
                <span>{item.label}</span>
              </div>

              {item.badge && (
                <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                  item.badgeColor || (isActive ? 'bg-white/20 text-white' : 'bg-brand-mint text-brand-forest')
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

      </div>

      {/* Daily Drop Care Kitchen Sync Badge */}
      <div className="p-3.5 bg-brand-mint-subtle border border-brand-mint-border rounded-2xl text-xs space-y-1.5">
        <div className="flex items-center gap-1.5 text-brand-forest font-black text-[11px]">
          <ChefHat className="w-3.5 h-3.5 text-brand-orange" />
          <span>Daily Drop Care Network</span>
        </div>
        <p className="text-[11px] text-brand-muted leading-relaxed font-medium">
          Prescribed meals sync with Daily Drop Kitchen verified food preparation standards.
        </p>
      </div>

    </aside>
  );
}

