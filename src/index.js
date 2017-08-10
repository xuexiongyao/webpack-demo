/**
 * Created by christ on 2017/7/26.
 */
import _ from 'lodash';
// import  './style.css';
// import  './font-awesome.min.css';
// import Img from './demo.jpg';
// import Data from './data.xml';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    // Lodash, currently included via a script, is required for this line to work
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello');
    // element.setAttribute('id','hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe();

    element.appendChild(btn);

    // Add the image to our existing div.
    // var myImg = new Image();
    // myImg.src = Img;
    //
    // element.appendChild(myImg);

    //Add icon
    // var iconElement = document.createElement('i');
    // iconElement.setAttribute('class','fa fa-home');
    // iconElement.setAttribute('id','fa');
    //
    // element.appendChild(iconElement);
    //
    // console.log(Data);

    return element;
}

document.body.appendChild(component());