import _ from 'lodash'
import './style.css'
import Icon from './pic.png'
import Data from './data.xml'

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  var myPic = new Image()
  myPic.src = Icon
  element.appendChild(myPic)

  console.log(Data)

  return element;
}

document.body.appendChild(component());