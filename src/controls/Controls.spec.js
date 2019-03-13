// Test away!
import React from 'react';
import { render } from 'react-testing-library';

import Controls from './Controls';

describe('<Controls />', () => {
    it('should provide a closed button', () => {
        const { getByTestId } = render(<Controls />)

        const lockButton = getByTestId('lockButton');

        expect(lockButton).toBeDefined();
    })

    it('should provide a gate button', () => {
        const { getByTestId } = render(<Controls />);

        const gateButton = getByTestId('gateButton');

        expect(gateButton).toBeDefined();
    })
})