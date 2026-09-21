/* Sallee Horse Vans — redesign concept
   Shared behaviour: tabs, chip groups, placeholder video buttons. */

(function () {
  'use strict';

  /* Tabs: <div data-tabs> with buttons [data-tab] and panels [data-panel] */
  document.querySelectorAll('[data-tabs]').forEach(function (group) {
    var scope = document.querySelector(group.getAttribute('data-tabs')) || document;
    var tabs = group.querySelectorAll('[data-tab]');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var name = tab.getAttribute('data-tab');
        tabs.forEach(function (t) {
          t.setAttribute('aria-selected', String(t === tab));
        });
        scope.querySelectorAll('[data-panel]').forEach(function (panel) {
          panel.hidden = panel.getAttribute('data-panel') !== name;
        });
      });
    });
  });

  /* Single-choice chip groups: <div data-choice="name"> with buttons */
  document.querySelectorAll('[data-choice]').forEach(function (group) {
    group.addEventListener('click', function (event) {
      var button = event.target.closest('button');
      if (!button || !group.contains(button)) { return; }
      group.querySelectorAll('button').forEach(function (b) {
        b.setAttribute('aria-pressed', String(b === button));
      });
      group.dispatchEvent(new CustomEvent('choice', {
        detail: { value: button.getAttribute('data-value') }
      }));
    });
  });

  /* Video placeholders — this is a concept build, so they just say so. */
  document.querySelectorAll('[data-play]').forEach(function (button) {
    button.addEventListener('click', function () {
      var note = button.closest('.media') || button.parentElement;
      var flag = note.querySelector('[data-play-note]');
      if (flag) {
        flag.textContent = 'Placeholder — drop the real clip in here.';
      }
    });
  });

  /* Forms in the concept never submit anywhere. */
  document.querySelectorAll('form[data-demo]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var done = form.querySelector('[data-demo-note]');
      if (done) { done.hidden = false; }
    });
  });

  var year = document.querySelector('[data-year]');
  if (year) { year.textContent = new Date().getFullYear(); }
}());
