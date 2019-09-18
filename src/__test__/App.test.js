import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import SuperHeroes from '../pages/Superheroes';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

const superheroes = [
    {id: 1,
    name: "Flash",
    age: 24,
    enjoys: "Quick strolls around the world"
},
{   id: 2,
    name: "Wolverine",
    age: "Unknown",
    enjoys: "Getting drunk",
},
{   id: 3,
    name: "Wonder Woman",
    age: 99,
    enjoys: "Flying her invisible jet"
},
]


it('superheroes renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SuperHeroes superheroes={superheroes} />, div);
});

it('Renders the superheroes', ()=>{
  const component = mount(<SuperHeroes superheroes={superheroes} />)
  const headings = component.find('.superheroes-name')
  expect(headings.length).toBe(3)
})
