import './footer.css';
import $ from 'jquery';

$(() => {
    const body = $('body');
    const copyrigth = $('<p>').text('Copyright - Holberton School');
    body.append(copyrigth);
});
