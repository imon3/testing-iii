// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Controls from './Controls';

describe('<Controls />', () => {
    it('should provide a closed button', () => {
        const { getByTestId } = render(<Controls />)

        const lockButton = getByTestId('lockButton');

        expect(lockButton).toBeDefined();
    })

    it('should provide a close button', () => {
        const { getByTestId } = render(<Controls />);

        const closeButton = getByTestId('closeButton');

        expect(closeButton).toBeDefined();
    })
})

