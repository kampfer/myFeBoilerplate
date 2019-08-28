import './main.less';
import sukanasi from './sukanasi.jpg';

const domBody = document.getElementsByTagName('body')[0];

domBody.innerHTML += `
    This is kampfer's front-end boilerplate.</br>
    The navigator.userAgent is <strong>${navigator.userAgent}</strong>.</br>
    <img src="${sukanasi}" width="320">
    <div class="bgImage"></div>
`;