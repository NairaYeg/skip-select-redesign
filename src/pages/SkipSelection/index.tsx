import React, { useState } from 'react';
import { useSkipsByLocation } from '../../hooks/useSkipsByLocation';
import SkipOptionCard from '../../components/SkipOptionCard';
import WizardSteps from '../../components/WizardSteps';
import { Skip } from '../../types/Skip';
import { WIZARD_STEPS } from '../../constants/wizardSteps';
import { LOADING_MESSAGES, ALERT_MESSAGES } from '../../constants/messages';
import './styles.css';

const SkipSelection: React.FC = () => {
  const { skips, loading, error } = useSkipsByLocation('LE10', 'Hinckley');
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  const activeStepId = WIZARD_STEPS.find((step) => step.name === 'Select Skip')?.id || 3;

  const handleSelectSkip = (skip: Skip) => {
    setSelectedSkip(skip);
    console.log('Selected skip:', skip);
  };

  const handleContinue = () => {
    alert(ALERT_MESSAGES.NEXT_PAGE_NOT_IMPLEMENTED);
  };

  if (loading) {
    return <div className="skip-selection-message loading">{LOADING_MESSAGES.DEFAULT}</div>;
  }

  if (error) {
    return <div className="skip-selection-message error">{error}</div>;
  }

  return (
    <main className="skip-selection">
      <WizardSteps activeStepId={activeStepId} />
      <header className="skip-selection-header">
        <h1>Choose Your Skip Size</h1>
        <p>Select the skip size that best suits your needs</p>
      </header>
      <section className="skip-selection-grid">
        {skips.map((skip) => (
          <SkipOptionCard
            key={skip.id}
            skip={skip}
            onSelect={handleSelectSkip}
            isSelected={selectedSkip?.id === skip.id}
          />
        ))}
      </section>
      {selectedSkip && (
        <footer className="skip-selection-footer">
          <p>
            Selected: {selectedSkip.size} Yard Skip,{' '}
            {selectedSkip?.hire_period_days} day hire period
          </p>
          <button className="continue-button" onClick={handleContinue}>
            Continue
          </button>
        </footer>
      )}
    </main>
  );
};

export default SkipSelection;
