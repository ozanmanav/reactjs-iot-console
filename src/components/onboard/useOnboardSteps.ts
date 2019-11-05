import { useReducer } from 'react';

function onboardStepsReducer(state: OnboardStepsState, action: TOnboardStepsAction) {
  switch (action.type) {
    case 'SET_ACTIVE':
      return {
        ...state,
        activeStep: action.index
      };
    case 'SET_FINISH':
      if (state.finishedSteps.includes(action.index)) {
        return state;
      }

      return { ...state, activeStep: action.index + 1, finishedSteps: [...state.finishedSteps, action.index] };
    case 'GO_NEXT':
      if (state.activeStep === state.numberOfSteps) {
        return state;
      }

      return {
        ...state,
        activeStep: state.activeStep + 1,
        finishedSteps: state.finishedSteps.includes(state.activeStep)
          ? state.finishedSteps
          : [...state.finishedSteps, state.activeStep]
      };
    case 'GO_PREV':
      if (state.activeStep === 1) {
        return state;
      }

      return {
        ...state,
        activeStep: state.activeStep - 1,
        finishedSteps: state.finishedSteps.filter(i => i !== state.activeStep - 1)
      };
    default: {
      return state;
    }
  }
}

export const useOnboardSteps = (numberOfSteps: number) => {
  const [state, dispatch] = useReducer(onboardStepsReducer, { activeStep: 1, finishedSteps: [], numberOfSteps });

  function setFinishOnboardStep(index: number) {
    dispatch({
      type: 'SET_FINISH',
      index
    });
  }

  function setActiveOnboardStep(index: number) {
    dispatch({
      type: 'SET_ACTIVE',
      index
    });
  }

  function goNextOnboardStep() {
    dispatch({
      type: 'GO_NEXT'
    });
  }

  function goPrevOnboardStep() {
    dispatch({
      type: 'GO_PREV'
    });
  }

  function isActiveStep(index: number) {
    return state.activeStep === index;
  }

  function isFinishedStep(index: number) {
    return state.finishedSteps.includes(index);
  }

  return {
    activeStep: state.activeStep,
    isActiveStep,
    isFinishedStep,
    finishedSteps: state.finishedSteps,
    setFinishOnboardStep,
    setActiveOnboardStep,
    goNextOnboardStep,
    goPrevOnboardStep
  };
};

interface OnboardStepsState {
  numberOfSteps: number;
  activeStep: number;
  finishedSteps: number[];
}

type TOnboardStepsAction =
  | {
      type: 'SET_ACTIVE';
      index: number;
    }
  | {
      type: 'SET_FINISH';
      index: number;
    }
  | {
      type: 'GO_NEXT';
    }
  | {
      type: 'GO_PREV';
    };
