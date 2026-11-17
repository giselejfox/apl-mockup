/* APL-UW static prototype: mega menus and the mobile menu toggle. */
(function () {
  var triggers = Array.prototype.slice.call(document.querySelectorAll('.nav-trigger'));

  function closeAll(except) {
    triggers.forEach(function (t) {
      if (t === except) return;
      t.setAttribute('aria-expanded', 'false');
      var panel = document.getElementById(t.getAttribute('aria-controls'));
      if (panel) panel.hidden = true;
    });
  }

  triggers.forEach(function (t) {
    t.addEventListener('click', function () {
      var open = t.getAttribute('aria-expanded') === 'true';
      closeAll(t);
      t.setAttribute('aria-expanded', open ? 'false' : 'true');
      document.getElementById(t.getAttribute('aria-controls')).hidden = open;
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var open = triggers.filter(function (t) { return t.getAttribute('aria-expanded') === 'true'; })[0];
    closeAll();
    if (open) open.focus();
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.site-header')) closeAll();
  });

  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      nav.classList.toggle('is-open', !open);
      if (open) closeAll();
    });
  }
})();
