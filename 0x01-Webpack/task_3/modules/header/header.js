import './header.css';
import $ from 'jquery';

$(() => {
    const body = $('body');
    const logo = $('<div>').attr('id', 'logo');
    const firstH1 = $('<h1>').text('Holberton Dashboard');

    body.append(logo);
    body.append(firstH1);
});