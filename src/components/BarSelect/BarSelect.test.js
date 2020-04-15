import BarSelect from './BarSelect';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

configure({ adapter: new Adapter() });

const mockHandler = jest.fn();
const wrapper = mount(
    <BarSelect
        current = {0}
        setCurrent = {mockHandler}
        bars = {[10, 20, 30]}
    />);


describe('Testing <ControlBtn/>', ()=>{

    test('snapshot testing',()=>{
        const tree =renderer
            .create(     <BarSelect 
                        current = {0}
                        setCurrent = {mockHandler}
                        bars = {[10, 20, 30]}
            />)
            .toJSON();
            expect(tree).toMatchSnapshot();
    });

    test('current progress is 1',()=>{
        expect(wrapper.find('#dropdown-basic').at(0).text()).toEqual('# Progress1')
    });



});
