import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

jest.mock('react-native-camera', () => require.requireActual('./__mocks__/Camera').default)
test('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});
