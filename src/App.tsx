import React, { useState } from 'react';
import SkipSelection from './pages/SkipSelection';
import { WIZARD_STEPS } from './constants/wizardSteps';
import './styles/breakpoints.css'; 
import { ALERT_MESSAGES } from './constants/messages';

const App: React.FC = () => {
  const [currentStepId, _setCurrentStepId] = useState<number>(
    WIZARD_STEPS.find((step) => step.name === 'Select Skip')?.id || 3
  );

  const renderPage = () => {
    switch (currentStepId) {
      case 3: 
        return <SkipSelection postcode='LE10' location='Hinckley'/>;
      default:
        return <div>{ALERT_MESSAGES.PAGE_NOT_IMPLEMENTED}</div>;
    }
  };

  return (
    <div className="app-container">
      {renderPage()}
    </div>
  );
};

export default App;