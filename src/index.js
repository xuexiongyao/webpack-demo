/**
 * Created by christ on 2017/7/26.
 */
import _ from 'lodash';
import  './style.css';
import  './font-awesome.min.css';
import Img from './demo.jpg';

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    element.setAttribute('id','hello');

    // Add the image to our existing div.
    var myImg = new Image();
    myImg.src = Img;

    element.appendChild(myImg);

    //Add icon
    var iconElement = document.createElement('i');
    iconElement.setAttribute('class','fa fa-home');
    iconElement.setAttribute('id','fa');

    element.appendChild(iconElement);

    return element;
}

document.body.appendChild(component());