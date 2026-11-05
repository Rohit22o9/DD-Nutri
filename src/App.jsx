import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NutritionistDashboard from './components/nutritionist/NutritionistDashboard';
import ClientMobileApp from './components/client/ClientMobileApp';
import SpecDocumentViewer from './components/docs/SpecDocumentViewer';
import NewCaseModal from './components/nutritionist/NewCaseModal';
import { initialClients } from './data/initialClients';

const STORAGE_KEY = 'daily_drop_nutrition_cases_v2';

export default function App() {
  const [clients, setClients] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse clients from localStorage', e);
    }
    return initialClients;
  });

  const [selectedClientId, setSelectedClientId] = useState(() => {
    return initialClients[0]?.id || 'client_priya';
  });

  const [currentRole, setCurrentRole] = useState('nutritionist'); // 'nutritionist', 'client', 'spec'
  const [isNewCaseOpen, setIsNewCaseOpen] = useState(false);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
    } catch (e) {
      console.error('Failed to persist clients', e);
    }
  }, [clients]);

  // Selected client object
  const currentClient = clients.find(c => c.id === selectedClientId) || clients[0];

  // Handlers
  const handleUpdateClient = (updatedClient) => {
    setClients(prev => prev.map(c => c.id === updatedClient.id ? updatedClient : c));
  };

  const handleUpdateMealPlan = (clientId, newPlan) => {
    setClients(prev => prev.map(c => {
      if (c.id === clientId) {
        return {
          ...c,
          activeMealPlan: newPlan
        };
      }
      return c;
    }));
  };

  const handleAddFeedback = (clientId, logId, feedbackObj) => {
    setClients(prev => prev.map(c => {
      if (c.id === clientId) {
        const updatedLogs = c.mealLogs.map(log => {
          if (log.id === logId) {
            return {
              ...log,
              status: 'reviewed',
              feedback: feedbackObj
            };
          }
          return log;
        });
        return {
          ...c,
          mealLogs: updatedLogs
        };
      }
      return c;
    }));
  };

  const handleAddWeeklyReview = (clientId, reviewObj) => {
    setClients(prev => prev.map(c => {
      if (c.id === clientId) {
        return {
          ...c,
          weeklyReviews: [reviewObj, ...(c.weeklyReviews || [])]
        };
      }
      return c;
    }));
  };

  const handleUploadMealPhoto = (clientId, logObj) => {
    setClients(prev => prev.map(c => {
      if (c.id === clientId) {
        return {
          ...c,
          mealLogs: [logObj, ...c.mealLogs]
        };
      }
      return c;
    }));
  };

  const handleAddClient = (newClient) => {
    setClients(prev => [newClient, ...prev]);
    setSelectedClientId(newClient.id);
    setCurrentRole('nutritionist');
  };

  const handleResetData = () => {
    if (window.confirm('Reset all demo cases, meal plans, and photo logs back to default demo data?')) {
      localStorage.removeItem(STORAGE_KEY);
      setClients(initialClients);
      setSelectedClientId(initialClients[0].id);
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark flex flex-col font-sans">
      
      {/* Universal Top Header with Official Daily Drop Brand */}
      <Header
        currentRole={currentRole}
        setCurrentRole={setCurrentRole}
        clients={clients}
        selectedClientId={selectedClientId}
        setSelectedClientId={setSelectedClientId}
        onNewCaseClick={() => setIsNewCaseOpen(true)}
        onResetData={handleResetData}
      />

      {/* Main Body depending on Active View */}
      <main className="flex-1">
        {currentRole === 'nutritionist' && currentClient && (
          <NutritionistDashboard
            client={currentClient}
            onUpdateClient={handleUpdateClient}
            onUpdateMealPlan={handleUpdateMealPlan}
            onAddFeedback={handleAddFeedback}
            onAddWeeklyReview={handleAddWeeklyReview}
            onOpenNewCase={() => setIsNewCaseOpen(true)}
          />
        )}

        {currentRole === 'client' && currentClient && (
          <ClientMobileApp
            client={currentClient}
            onUploadMealPhoto={handleUploadMealPhoto}
          />
        )}

        {currentRole === 'spec' && (
          <SpecDocumentViewer />
        )}
      </main>

      {/* New Case (Onboarding Intake) Modal */}
      <NewCaseModal
        isOpen={isNewCaseOpen}
        onClose={() => setIsNewCaseOpen(false)}
        onAddClient={handleAddClient}
      />

      {/* Daily Drop Ecosystem Footer */}
      <footer className="bg-white border-t border-brand-mint-border py-6 px-6 text-center text-xs text-brand-muted">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img 
              src="/daily_drop_logo.png" 
              alt="Daily Drop" 
              className="h-6 w-auto object-contain opacity-80"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
            />
            <span className="font-bold text-brand-forest">Daily Drop Nutrition</span>
            <span className="text-brand-muted">• Clinical Care & Dietetics</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-semibold text-brand-forest">
            <span>Daily Drop Kitchen</span>
            <span>•</span>
            <span>Daily Drop Restaurant Partner</span>
            <span>•</span>
            <span>Daily Drop AI Bot</span>
            <span>•</span>
            <span className="text-brand-orange">Daily Drop Nutrition</span>
          </div>

          <p className="text-[11px] text-brand-muted">
            &copy; 2026 Daily Drop. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
