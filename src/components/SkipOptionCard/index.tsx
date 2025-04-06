import React from 'react';
import { Skip } from '../../types/Skip';
import { Flag, FLAG_TYPES, FLAG_VARIANTS } from '../Flag';
import { CARD_MESSAGES, FLAG_MESSAGES} from '../../constants/messages';
import './styles.css';

const DEFAULT_SKIP_IMAGE_URL = 'https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800';

interface SkipOptionCardProps {
  skip: Skip;
  onSelect: (skip: Skip) => void;
  isSelected?: boolean;
}

const SkipOptionCard: React.FC<SkipOptionCardProps> = ({ skip, onSelect, isSelected = false }) => {
const isDisabled = !skip.allows_heavy_waste;

  return (
    <article
      className={`skip-option-card ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
      onClick={() => !isDisabled && onSelect(skip)}
      aria-label={`Select ${skip.size} Yard Skip`}
      aria-disabled={isDisabled}
    >
      <div className="skip-option-content">
        <div className="skip-option-image-wrapper">
          <img
            src={DEFAULT_SKIP_IMAGE_URL}
            alt={`${skip.size} Yard Skip`}
            className="skip-option-image"
          />
          <Flag text={FLAG_MESSAGES.SIZE(skip.size)} type={FLAG_TYPES.MESSAGE} />
          {!skip.allowed_on_road && (
            <Flag
              text={FLAG_MESSAGES.PRIVATE_PROPERTY_ONLY}
              type={FLAG_TYPES.WARNING}
              variant={FLAG_VARIANTS.PRIVATE_PROPERTY}
              icon={"⚠️"}
            />
          )}
             {!skip.allows_heavy_waste && (
            <Flag
            text={FLAG_MESSAGES.NOT_SUITABLE_FOR_HEAVY_WASTE}
            type={FLAG_TYPES.WARNING}
            variant={FLAG_VARIANTS.HEAVY_WASTE}
              icon={'❗'}
            />
          )}
        </div>
        <h2 className="skip-option-title">{skip.size} Yard Skip</h2>
        <p className="skip-option-detail">{skip.hire_period_days} day hire period</p>
        <p className="skip-option-price">£{skip.price_before_vat} per week</p>
      </div>
      <button
        className="skip-option-button"
        onClick={(e) => {
          e.stopPropagation();
          !isDisabled && onSelect(skip);
        }}
        disabled={isDisabled}
        aria-pressed={isSelected}
      >
        {isSelected ? CARD_MESSAGES.SELECTED : CARD_MESSAGES.SELECT_SKIP}
      </button>
    </article>
  );
};

export default SkipOptionCard;