/* Image Slideshow */

window.addEvent('domready',function() {
  /* settings */
  var showDuration = 3000;
  var container = $('slideshow-container');
  var images = container.getElements('img');
  var currentIndex = 0;
  var interval;
  var toc = [];
  var tocWidth = 20;
  var tocActive = 'toc-active';
  
  /* new: starts the show */
  var start = function() { interval = show.periodical(showDuration); };
  var stop = function() { $clear(interval); };
  /* worker */
  var show = function(to) {
    images[currentIndex].fade('out');
    toc[currentIndex].removeClass(tocActive);
    images[currentIndex = ($defined(to) ? to : (currentIndex < images.length - 1 ? currentIndex+1 : 0))].fade('in');
    toc[currentIndex].addClass(tocActive);
  };
  
  /* new: control: table of contents */
  images.each(function(img,i){
    toc.push(new Element('a',{
      text: i+1,
      href: '#',
      'class': 'toc' + (i == 0 ? ' ' + tocActive : ''),
      events: {
        click: function(e) {
          if(e) e.stop();
          stop();
          show(i);
        }
      },
      styles: {
        left: ((i + 1) * (tocWidth + 10))
      }
    }).inject(container));
    if(i > 0) { img.set('opacity',0); }
  });
  
  /* new: control: next and previous */
  var next = new Element('a',{
    href: '#',
    id: 'next',
    text: '>>',
    events: {
      click: function(e) {
        if(e) e.stop();
        stop(); show();
      }
    }
  }).inject(container);
  var previous = new Element('a',{
    href: '#',
    id: 'previous',
    text: '<<',
    events: {
      click: function(e) {
        if(e) e.stop();
        stop(); show(currentIndex != 0 ? currentIndex -1 : images.length-1);
      }
    }
  }).inject(container);
  
  /* new: control: start/stop on mouseover/mouseout */
  container.addEvents({
    mouseenter: function() { stop(); },
    mouseleave: function() { start(); }
  });
  
  /* start once the page is finished loading */
  window.addEvent('load',function(){
    start();
  });
});