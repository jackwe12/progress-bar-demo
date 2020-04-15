import ControlBtn from './ControlBtn';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

configure({ adapter: new Adapter() });

const mockHandler = jest.fn();
const wrapper = shallow(
    <ControlBtn
        buttonValue = {50}
        index = {0}
        handleScore = {mockHandler}
        current = {0}
        key={0}
    />);
const wrapper2 = shallow(
    <ControlBtn
        buttonValue = {-50}
        index = {0}
        handleScore = {mockHandler}
        current = {0}
        key={0}
    />);
const wrapper3 = mount(
    <ControlBtn
        buttonValue = {-50}
        index = {0}
        handleScore = {mockHandler}
        current = {0}
        key={0}
    />);

describe('Testing <ControlBtn/>', ()=>{
    test('snapshot testing',()=>{
        const tree =renderer
            .create(     <ControlBtn />)
            .toJSON();
            expect(tree).toMatchSnapshot();
    });
    test('buttonValue is positive',()=>{
        expect(wrapper.find('span').text()).toEqual('+50')
    });
    test('buttonValue is negative',()=>{
        expect(wrapper2.find('span').text()).toEqual('-50')
    });
    test('should call mock click Handler when btn clicked',()=>{
        const btn = wrapper3.find('button');
        btn.simulate('click');
        expect(mockHandler.mock.calls.length).toBe(1);
    });

});
