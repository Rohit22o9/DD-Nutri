import React, { useState, useEffect } from 'react';
import NutritionistLogin from './components/auth/NutritionistLogin';
import AdminNavbar from './components/admin/AdminNavbar';
import AdminSidebar from './components/admin/AdminSidebar';
import AdminOverview from './components/admin/AdminOverview';
import ClientCaseIntake from './components/nutritionist/ClientCaseIntake';
import MealPlanBuilder from './components/nutritionist/MealPlanBuilder';
import MealReviewFeed from './components/nutritionist/MealReviewFeed';
import WeeklyReviewSection from './components/nutritionist/WeeklyReviewSection';
import ClientMobileApp from './components/client/ClientMobileApp';
import SpecDocumentViewer from './components/docs/SpecDocumentViewer';
import NewCaseModal from './components/nutritionist/NewCaseModal';
import { initialClients } from './data/initialClients';

const STORAGE_KEY = 'daily_drop_nutrition_cases_v3';
const AUTH_KEY = 'daily_drop_nutrition_user_v1';

export default function App() {
  // Auth state (Admin Login Flow)
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem(AUTH_KEY);
      if (savedUser) return JSON.parse(savedUser);
    } catch (e) {
      console.error(e);
    }
    // Default to Dr. Shalini so reviewers can see the app immediately or log out
    return {
      name: 'Dr. Shalini (Clinical RD)',
      email: 'dr.shalini@dailydrop.today',
      title: 'Lead Clinical Nutritionist',
      badge: 'Daily Drop Partner Dietitian'
    };
  });

  const [clients, setClients] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return initialClients;
  });

  const [selectedClientId, setSelectedClientId] = useState(() => {
    return initialClients[0]?.id || 'client_priya';
  });

  // Admin Navigation Tabs: 'overview', 'case', 'plan', 'review', 'weekly', 'spec'
  const [currentTab, setCurrentTab] = useState('overview');
  const [isNewCaseOpen, setIsNewCaseOpen] = useState(false);
  const [showMobilePreview, setShowMobilePreview] = useState(false);

  // Sync clients to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
    } catch (e) {
      console.error(e);
    }
  }, [clients]);

  // Sync auth user to local storage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(AUTH_KEY, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(AUTH_KEY);
    }
  }, [currentUser]);

  // Selected client object
  const currentClient = clients.find(c => c.id === selectedClientId) || clients[0];

  // Handlers
  const handleLoginSuccess = (userData) => {
    setCurrentUser(userData);
    setCurrentTab('overview');
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

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
    setCurrentTab('case');
  };

  const handleResetData = () => {
    if (window.confirm('Reset all demo cases, meal plans, and photo reviews back to default demo data?')) {
      localStorage.removeItem(STORAGE_KEY);
      setClients(initialClients);
      setSelectedClientId(initialClients[0].id);
      setCurrentTab('overview');
    }
  };

  // If not authenticated, show Nutritionist Login screen
  if (!currentUser) {
    return <NutritionistLogin onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark flex flex-col font-sans">
      
      {/* Admin Navbar */}
      <AdminNavbar
        user={currentUser}
        onLogout={handleLogout}
        clients={clients}
        selectedClientId={selectedClientId}
        setSelectedClientId={setSelectedClientId}
        onOnboardCustomerClick={() => setIsNewCaseOpen(true)}
        onResetData={handleResetData}
        onToggleMobilePreview={() => setShowMobilePreview(!showMobilePreview)}
        showMobilePreview={showMobilePreview}
      />

      {/* Main Admin Layout with Sidebar + Workspace */}
      <div className="flex-1 flex max-w-[1600px] w-full mx-auto">
        
        {/* Sidebar */}
        <AdminSidebar
          currentTab={currentTab}
          onTabChange={setCurrentTab}
          pendingReviewCount={currentClient.mealLogs.filter(l => !l.feedback).length}
        />

        {/* Content Workspace Area */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          
          {currentTab === 'overview' && (
            <AdminOverview
              user={currentUser}
              clients={clients}
              onNavigateTab={setCurrentTab}
              onSelectClient={setSelectedClientId}
              onOnboardNewCustomer={() => setIsNewCaseOpen(true)}
            />
          )}

          {currentTab === 'case' && currentClient && (
            <ClientCaseIntake
              client={currentClient}
              onUpdateClient={handleUpdateClient}
              onOnboardNewCustomer={() => setIsNewCaseOpen(true)}
            />
          )}

          {currentTab === 'plan' && currentClient && (
            <MealPlanBuilder
              client={currentClient}
              onUpdateMealPlan={handleUpdateMealPlan}
            />
          )}

          {currentTab === 'review' && currentClient && (
            <MealReviewFeed
              client={currentClient}
              onAddFeedback={handleAddFeedback}
            />
          )}

          {currentTab === 'weekly' && currentClient && (
            <WeeklyReviewSection
              client={currentClient}
              onAddWeeklyReview={handleAddWeeklyReview}
            />
          )}

          {currentTab === 'spec' && (
            <SpecDocumentViewer />
          )}

        </main>

        {/* Slide-out / Side Patient Mobile App Preview */}
        {showMobilePreview && (
          <aside className="w-[420px] bg-white border-l border-brand-mint-border p-4 shadow-soft-lg flex flex-col items-center shrink-0 animate-fade-in sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="w-full flex items-center justify-between pb-3 border-b border-brand-mint-border mb-3 text-xs">
              <span className="font-black text-brand-forest">Patient Mobile App View</span>
              <button
                onClick={() => setShowMobilePreview(false)}
                className="text-[11px] font-bold text-brand-orange hover:underline cursor-pointer"
              >
                Close
              </button>
            </div>
            <ClientMobileApp
              client={currentClient}
              onUploadMealPhoto={handleUploadMealPhoto}
            />
          </aside>
        )}

      </div>

      {/* Onboard Customer & Take Case Modal */}
      <NewCaseModal
        isOpen={isNewCaseOpen}
        onClose={() => setIsNewCaseOpen(false)}
        onAddClient={handleAddClient}
      />

    </div>
  );
}
