// Test away
import React from 'react';
import { render } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it.skip('should show the controls', () => {
        const tree = renderer.create(<Dashboard />)

        expect(tree.toJSON()).toMatchSnapshot()
    })
})
