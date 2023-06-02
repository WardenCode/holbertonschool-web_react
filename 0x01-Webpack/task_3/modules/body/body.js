import './body.css';
import $ from 'jquery';
import _ from 'lodash';

$(() => {
  const body = $('body');
  const secondParagraph = $('<p>').text('Dashboard data for the students');
  const countParagraph = $('<p>').attr('id', 'count');
  const button = $('<button>').text('Click here to get started');

  let count = 0;

  function updateCounter() {
    count++;
    countParagraph.text(`${count} clicks on the button`);
  }

  button.on('click', _.debounce(updateCounter, 1000));

  body.append(secondParagraph);
  body.append(button);
  body.append(countParagraph);
});