import React from 'react';
import { mount, shallow } from 'enzyme';
import { stub } from 'sinon';
import DisplayBmi from '../Components/DisplayBmi';
import { bmiCalculation } from '../Modules/BMICalculator';
import { Header } from 'semantic-ui-react';

describe('<DisplayBmi />', () => {
  it('renders header', () => {
    const component = shallow(<DisplayBmi />);
    const header = <Header>BMI Converter</Header>;
    expect(component.containsMatchingElement(header)).toEqual(true);
  });

  it('shows metric as the standard method', () => {
    const component = shallow(<DisplayBmi />);
    const weightLabel = <label>Weight(kg)</label>;
    const heightLabel = <label>Height(cm)</label>;
    expect(component.contains(weightLabel)).toEqual(true);
    expect(component.contains(heightLabel)).toEqual(true);
  })

  it('can change method', () => {
    const onChangeValue = stub();
    const component = shallow(<DisplayBmi onChangeValue={onChangeValue} />);
    const weightLabel = <label>Weight(lbs)</label>;
    const heightLabel = <label>Height(inches)</label>;
    component.find("#method").prop('onChange')({target: {value:'imperial'}});
    expect(component.contains(weightLabel)).toEqual(true);
    expect(component.contains(heightLabel)).toEqual(true);
  })

  it('has two methods to choose from', () => {
    const component = mount(<DisplayBmi />);
    const selector = component.find('#method').instance()
    expect(selector.options.length).toEqual(2)
  })

  it('displays the calulation correct(metric)', async () => {
    const component = shallow(<DisplayBmi/>)
    await component.find("#weight").prop('onChange')({target: {value:100, id:"weight"}})
    await component.find("#height").prop('onChange')({target: {value:195, id:"height"}})
    const response = <div>You are Overweight with a BMI of 26.3</div>
    expect(component.containsMatchingElement(response)).toEqual(true)
  })

  it('displays the calulation correct(imperial)', async () => {
    const component = shallow(<DisplayBmi/>)
    await component.find("#method").prop('onChange')({target: {value:'imperial'}});
    await component.find("#weight").prop('onChange')({target: {value:140, id:"weight"}})
    await component.find("#height").prop('onChange')({target: {value:73, id:"height"}})
    const response = <div>You are Underweight with a BMI of 18.47</div>
    expect(component.containsMatchingElement(response)).toEqual(true)
  })

  it('does not show anything when one of the input fields are empty', () => {
    const component = shallow(<bmiCalculation method='metric' weight='' height='195'/>);
    expect(component.text()).toBe('')
  })
})
