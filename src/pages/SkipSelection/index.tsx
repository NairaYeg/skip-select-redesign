import React, { useState } from 'react';
import { useSkipsByLocation } from '../../hooks/useSkipsByLocation';
import SkipOptionCard from '../../components/SkipOptionCard';
import WizardSteps from '../../components/WizardSteps/WizardSteps';
import { Skip } from '../../types/Skip';
import { WIZARD_STEPS } from '../../constants/wizardSteps';
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
    alert('Next page not implemented yet!');
  };

  if (loading) {
    return <div className="skip-selection-message loading">Loading skips...</div>;
  }

  if (error) {
    return <div className="skip-selection-message error">Error: {error}</div>;
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
