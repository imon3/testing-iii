// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

import Controls from './Controls';

describe('<Controls />', () => {
    it('should provide a closed button', () => {
        const { getByTestId } = render(<Controls />);

        const lockButton = getByTestId('lockButton');

        expect(lockButton).toBeDefined();
    });
});

describe('<Controls />', () => {
    it('should provide a close button', () => {
        const { getByTestId } = render(<Controls />);

        const closeButton = getByTestId('closeButton');

        expect(closeButton).toBeDefined();
    });
});
