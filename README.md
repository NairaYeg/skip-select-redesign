# Skip Selection Redesign

A React-based web application designed to help users select skip sizes based on their location. The app features a dynamic, responsive, and user-friendly interface.

## Frontend Approach

- **Component-Based Architecture**: Modular, reusable components (e.g., `SkipOptionCard`, `WizardSteps`) for maintainability.
- **Custom Hooks**: Logic encapsulation with hooks like `useSkipsByLocation` for API interactions.
- **TypeScript**: Enforces type safety to minimize runtime errors.
- **Conditional Rendering**: Dynamically displays elements (e.g., flags, footers) based on application state.
- **Responsive Design**: Utilizes media queries, and mobile first approach for cross-device compatibility.
- **State Management**: Leverages React’s `useState` for efficient local state handling (e.g., `selectedSkip`).

## Getting Started

### Prerequisites
- Yarn package manager

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
## Scripts

- `yarn start`: Runs the app in development mode.
- `yarn build`: Builds the app for production.
- `yarn test`: Launches the test runner.

## Folder Structure

```
src/
├── components/       
│   ├── SkipOptionCard/  
│   ├── WizardSteps/   
├── constants/       
├── hooks/         
│   ├── useSkipsByLocation.ts 
├── pages/          
│   ├── SkipSelection/  
├── types/            
│   ├── Skip.ts        
```

## Future Improvements

- Add unit tests.
- Improve accessibility (ARIA roles, keyboard navigation).
