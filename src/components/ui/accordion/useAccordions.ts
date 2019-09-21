import { useReducer } from 'react';

function accordionsReducer(state: IAccordionsState, action: TAccordionsAction) {
    switch (action.type) {
        case 'TOGGLE': {
            const newOpened = state.opened.includes(action.index)
                ? state.opened.filter((accIndex: number) => accIndex !== action.index)
                : [...state.opened, action.index];

            return {
                opened: newOpened
            };
        }
        case 'OPEN':
            if (state.opened.includes(action.index)) {
                return state;
            }

            return {
                opened: [...state.opened, action.index]
            };
        case 'CLOSE':
            return {
                opened: state.opened.filter(i => i !== action.index)
            };
        default: {
            return state;
        }
    }
}

export const useAccordions = (opened: number[]) => {
    const [state, dispatch] = useReducer(accordionsReducer, { opened });

    function toggleAccordion(index: number): void {
        dispatch({
            type: 'TOGGLE',
            index
        });
    }

    function openAccordion(index: number) {
        dispatch({
            type: 'OPEN',
            index
        });
    }

    function closeAccordion(index: number) {
        dispatch({
            type: 'CLOSE',
            index
        });
    }

    function isOpened(index: number) {
        return state.opened.includes(index);
    }

    function goPrevAccordionItem(index: number) {
        return () => {
            closeAccordion(index);
            openAccordion(index - 1);
        };
    }

    return {
        isOpened,
        toggleAccordion,
        openAccordion,
        closeAccordion,
        goPrevAccordionItem
    };
};

interface IAccordionsState {
    opened: number[];
}

type TAccordionsAction =
    | {
          type: 'TOGGLE';
          index: number;
      }
    | {
          type: 'CLOSE';
          index: number;
      }
    | {
          type: 'OPEN';
          index: number;
      };
