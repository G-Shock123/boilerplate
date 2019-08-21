import React from 'react'
import {shallow} from 'enzyme'
import LoadingPage from '../../components/LoadingPage'


test('Render loading page',()=>{


    const wrapper = shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot()
})