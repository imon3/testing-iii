// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each'
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
    it('should display if gate is open', () => {
        const { getByText } = render(<Display />);
        const openGateDisplay = getByText(/open/i);

        expect(openGateDisplay);
    });
});