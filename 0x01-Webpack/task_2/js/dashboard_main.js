import $ from 'jquery';
import { debounce } from 'lodash';

$(() => {
    const body = $('body');
    const firstParagraph = $('<p>').text('Holberton Dashboard');
    const secondParagraph = $('<p>').text('Dashboard data for the students');
    const copyrigth = $('<p>').text('Copyright - Holberton School');
    const countParagraph = $('<p>').attr('id', 'count');
    const button = $('<button>').text('Click here to get started');

    let count = 0;

    function updateCounter() {
        count++;
        countParagraph.text(`${count} clicks on the button`);
    }

    button.on('click', debounce(updateCounter, 1000));

    body.append(firstParagraph);
    body.append(secondParagraph);
    body.append(button);
    body.append(countParagraph);
    body.append(copyrigth);
});
