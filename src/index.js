// commonJS 스펙: 모듈 가져오기
var _ = require('lodash');
import './style.css';
import './hello.scss';
// named import: {} 안에 변수를 가져와와 한다.
import {area, circumference} from './js/circle';
// default import: {} 없고 이름을 마음대로 만들수 있다.
import volume from './js/cube';


const component = () => {
  console.log('test');
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack!!'], ' ');

  return element;
}

console.log(area(5), "  ", circumference(5));
console.log(volume.cube(5));

document.body.appendChild(component());