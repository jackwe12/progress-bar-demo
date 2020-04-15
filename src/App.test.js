import App from './App';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });



describe('Testing <App/>', ()=>{
    test('snapshot testing',()=>{
        const tree =renderer
            .create(     <App />)
            .toJSON();
            expect(tree).toMatchSnapshot();
    })
});
