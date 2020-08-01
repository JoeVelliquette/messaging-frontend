import {useState, useCallback} from 'react';

export const useVisibilityToggle = (initial) => {
    const [isVisible, setVisibility] = useState(initial);

    return [
        isVisible,
        useCallback(() => setVisibility(isVisible => !isVisible), [])
    ];
};
