import React from 'react';
import UploadForm from '../components/UploadForm';
import { shallow, mount, render } from '../enzyme';



it('renders without crashing', () => {
    shallow(<UploadForm />);
  });


describe('UploadForm Test Suite', () => {
    it('should render the form', () => {
        const wrapper = shallow(<UploadForm />);  // shallow renders a single component each time. In other words, Enzyme won’t consider the child elements for the test.
        expect(wrapper.find('form.params').exists()).toBeDefined();
        expect(wrapper.find('form.file-form').exists()).toBeDefined();
        expect(wrapper.find('#location-tags').exists()).toBeDefined(); 
        expect(wrapper.find('#location-tags').length).toEqual(1); 
    })
});


describe('Location Tags Test Suite', () => {
    it('should change the state of the RunJobForm component', () => {
        const wrapper = shallow(<UploadForm />);
        wrapper.find('#location-tags').simulate('change',
            {
                target: { value: 'location' }
            });
        wrapper.update();
        expect(wrapper.find('#location-tags').prop('value')).toEqual('location');
    })
});


