import Enzyme, { configure, shallow, mount, render } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
export { shallow, mount, render };
export default Enzyme;