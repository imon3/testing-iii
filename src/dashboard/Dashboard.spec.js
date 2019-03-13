// Test away
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('should show the controls', () => {
        const tree = renderer.create(<Dashboard />)

        expect(tree.toJSON()).toMatchSnapshot()
    });
});

describe('<Dashboard', () => {
    it('should show button text changes when clicked ', () => {
        const { getByText } = render(<Dashboard />);

        const closeButton = getByText(/close gate/i);
        fireEvent.click(closeButton);

        expect(getByText(/open gate/i)).toBeDefined();
    });
});