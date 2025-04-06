import React from 'react';
import { WIZARD_STEPS, WizardStep } from '../../constants/wizardSteps';
import './WizardSteps.css';

interface WizardStepsProps {
  activeStepId: number;
}

const WizardSteps: React.FC<WizardStepsProps> = ({ activeStepId }) => {
  const isStepCompleted = (stepId: number): boolean => stepId < activeStepId;
  const isStepActive = (stepId: number): boolean => stepId === activeStepId;
  const isStepPending = (stepId: number): boolean => stepId > activeStepId;

  const handleStepClick = (stepId: number): void => {
    if (isStepCompleted(stepId)) {
      alert('This page is not implemented yet.');
    }
  };

  const getConnectorClass = (index: number): string => {
    if (index < WIZARD_STEPS.length - 1) {
      const nextStepId = WIZARD_STEPS[index + 1].id;
      if (isStepCompleted(nextStepId)) {
        return 'completed';
      }
      if (nextStepId === activeStepId) {
        return 'before-active';
      }
    }
    return '';
  };

  return (
    <div className="wizard">
      {WIZARD_STEPS.map((step: WizardStep, index: number) => (
        <div
          key={step.id}
          className={`wizard-step ${isStepCompleted(step.id) ? 'completed' : ''} ${
            isStepActive(step.id) ? 'active' : ''
          } ${isStepPending(step.id) ? 'pending' : ''}`}
        >
          <div className="step-content" onClick={() => handleStepClick(step.id)}>
            <span className="step-icon">{step.icon}</span>
            <span className="step-label">{step.name}</span>
          </div>
          {index < WIZARD_STEPS.length - 1 && (
            <div className={`step-connector ${getConnectorClass(index)}`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default WizardSteps;