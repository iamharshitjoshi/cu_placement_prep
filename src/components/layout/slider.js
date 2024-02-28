import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
 import x from '../../images/Studeent.jpg'
const slider = (
    <AwesomeSlider animation="cubeAnimation">
    <div data-src={x} />
    <div data-src={x} />
    <div data-src={x} />
  </AwesomeSlider>
);
 

export default slider;