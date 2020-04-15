import ProgressBar from './ProgressBar';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { shallow} from 'enzyme';

configure({ adapter: new Adapter() });

const wrapper = shallow(
    <ProgressBar
        barValue = {100}
        limit = {120}
        key = {0}
    />);
const wrapper2 = shallow(
    <ProgressBar
        barValue = {130}
        limit = {120}
        key = {0}
    />);

describe('Testing <ProgressBar/>', ()=>{
    test('snapshot testing',()=>{
        const tree =renderer
            .create(<ProgressBar
                    barValue = {100}
                    limit = {120}
                    key = {0}
             />)
            .toJSON();
            expect(tree).toMatchSnapshot();
    });

    test('buttonValue is right',()=>{
        expect(wrapper.find('.bar-value').text()).toEqual('100%')
    });

    test('buttonValue is larger than limit, turn danger',()=>{
        let bar = wrapper2.find('.progressBar');
        expect(bar.hasClass('danger')).toEqual(true);
    });


});
