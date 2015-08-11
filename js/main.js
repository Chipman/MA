(function() {
  'use strict';

  var elements = {
    concerts: {
      title: 'concerts',
      titleUk: 'Концерти',
      template: function(data) {
        var template = '<div class="conc"><h1>' + data.title + '</h1> </div><main class="posts">';
        data.concerts.forEach(function(el) {
          var className = el.link == 'nolink' ? 'nolink' : '';
          template += '<section class="single-date">' +
            '<a href="' + el.link + '"  title="Зустріч Вконтактє" target="_blank" class="' + className + '">' +
              '<img src="' + el.image + '" alt="' + el.title + '" class="single-date-img">' +
            '</a>' +
              '<span class="concert-date">' + el.date + '</span>' +
              '<h2 class="single-date-h2">' +
                '<a href="' + el.link + '" title="Зустріч Вконтактє" class="' + className + '" target="_blank">' +
                  '&#171;' + el.title + '&#187;' +
                '</a>' +
              '</h2>' +
              '<span class="city">' + el.city + '</span>' +
              '<p class="single-date-p">' + el.description + '</p>' +
          '</section>';
        });
        template += '</main>'
        return template;
      }
    },
    about: {
      title: 'about',
      titleUk: 'Про нас',
      template: function(data) {
        var template = '<div class="conc"><h1>' + data.title + '</h1> </div><main class="posts">' +
          '<p class="about-par">' +
          data.about +
          '</p>' +
          '<div>';
        data.members.forEach(function(el) {
          template += '<section class="artic">' +
            '<img src="' + el.picture + '" alt="' + el.name + '">' +
            '<h2>' + el.name.replace(' ', '<br>') + '</h2>' +
            '<p>' + el.position.replace(' ', '<br>') + '</p>' +
            '<div style="clear:both; width:100%;"></div>' +
            '</section>';
        });
        template += '</div></main>';
        return template;
      }
    },
    music: {
      title: 'music',
      titleUk: 'Музика',
      template: function(data) {
        var template = '<div class="conc"><h1>' + data.title + '</h1> </div><main class="posts">';
        data.albums.forEach(function(el) {
          template += '<div class="album-wrapper">' +
            '<h2 class="album-header">' + el.title + '</h2>' +
            '<span class="year">' + el.year + '</span>' +
            '<img src="' + el.coverm + '" class="album-cover">' +
            '<p class="album-description">' + el.description + '</p>' +
            '<a href="' + el.file + '" class="download-button">Скачати альбом</a>' +
            '</div>';
        });
        template += '</main>';
        return template;
      }
    },
    video: {
      title: 'video',
      titleUk: 'Відео',
      template: function(data) {
        var template = '<div class="conc"><h1>' + data.title + '</h1> </div><main class="posts">';
        data.videos.forEach(function(el) {
          template += '<section class="video">' +
            '<a id="' + el.id + '">' +
              '<h2 class="video-header">' + el.title + '</h2>' +
            '</a>' +
            '<iframe class="video-frame" src="' + el.src + '" frameborder="0" allowfullscreen></iframe>' +
          '</section>';
        });
        template += '</main>';
        return template;
      }
    },
    contacts: {
      title: 'contacts',
      titleUk: 'Контакти',
      template: function() {
        var template = '<div class="conc">' +
          '<h1>Контакти</h1>' +
          '</div>' +
          '<main class="posts"><main class="posts">' +
          '<h2>З питань співпраці:</h2>' +
          '<p class="contact__par">' +
          '<strong>Юра Апельсин</strong>' +
          '<br>+38 (093) 80-00-074' +
          '<br>+38 (067) 97-30-100' +
          '<br>+38 (050) 18-63-506' +
          '</p>' +
          '<p>' +
          '<a class="contact__link" href="mailto:m-ap@ukr.net">e-mail: m-ap@ukr.net</a>' +
          '</p>' +
          '<a class="contact__link" href="http://www.vk.com/mehanichnyjapelsyn" target="_blank">VK: vk.com/mehanichnyjapelsyn</a>' +
          '<a class="contact__link" href="http://www.facebook.com/mekhanichnyi" target="_blank">FaceBook: facebook.com/mekhanichnyi</a>';
        template += '</main>';
        return template;
      }
    },
    news: {
      title: 'news',
      template: function(data) {
        var template = '<h2 class="sideHead">Новини</h2>';
        data.forEach(function(el) {
          template += '<div class="single-news-block">' +
            '<img src="' + el.image + '" alt="' + el.title + '" class="news-img">' +
            '<a href="' + el.link + '" class="news-header sidebar-link">' + el.title + '</a>' +
            '</div>';;
        });
        return template;
      }
    },
    '404': {
      title: '404',
      template: function() {
        var template = '<div class="conc"><h1>Помилка</h1> </div><main class="posts"><h2>404: cторінку не знайдено.</h2></main>';
        return template;
      }
    },
    menu: {
      title: 'menu',
      template: function() {
        var template = document.createElement('ul');
        template.className = 'menu-list';
        for (var element in elements) {
          var isAllowed = hashAllowed(elements[element].title);
          if (isAllowed && elements[element].title != 404) {
            var item = document.createElement('li');
            var itemLink = document.createElement('a');
            var text = document.createTextNode(elements[element].titleUk);

            item.className = 'menu-list-item';
            itemLink.className = 'menu-link';
            itemLink.href = '#' + elements[element].title;
            itemLink.appendChild(text);
            item.appendChild(itemLink);
            template.appendChild(item);
          }
        }
        template.innerHTML += '<li class="menu-list-item socials">' +
          '<script type="text/javascript">' +
          '(function() {' +
          'if (window.pluso)' +
          'if (typeof window.pluso.start == "function") return;' +
          'if (window.ifpluso == undefined) {' +
          'window.ifpluso = 1;' +
          'var d = document,' +
          's = d.createElement("script"),' +
          'g = "getElementsByTagName";' +
          's.type = "text/javascript";' +
          's.charset = "UTF-8";' +
          's.async = true;' +
          's.src = ("https:" == window.location.protocol ? "https" : "http") + "://share.pluso.ru/pluso-like.js";' +
          'var h = d[g]("body")[0];' +
          'h.appendChild(s);' +
          '}' +
          '})();' +
          '</script>' +
          '<div class="pluso" data-background="transparent" data-options="medium,round,line,horizontal,nocounter,theme=04" data-services="facebook,google,vkontakte,myspace,twitter"></div>' +
          '</li>';
        return template;
      }
    }
  };

  function router() {
    var content = document.getElementById('content');
    var aside = document.createElement('aside');
    var clearfix = document.createElement('div');

    aside.className = 'sidebar';
    clearfix.style.clear = 'both';

    getJSON('news', function(data) {
      aside.innerHTML = elements.news.template(data);
    });

    function handleHash() {
      var hash = window.location.hash.substr(1);
      var mainTag = document.getElementsByTagName('main')[0];

      if (hash == '') {
        updateView('concerts');
      } else if (hash in elements && hashAllowed(hash)) {
        updateView(hash);
      } else {
        updateView('404');
      }
    }

    function updateView(module) {
      getJSON(module, function(payload) {
        var htmlString = elements[module].template(payload);

        content.innerHTML = htmlString;
        content.appendChild(aside);
        content.appendChild(clearfix);
        nolinkAlert();
      });
    }

    function setHash(newHash) {
      window.location.hash = '#' + newHash;
    }

    return {
      handleHash: handleHash,
      setHash: setHash
    };
  };

  function init() {
    var menu = document.getElementsByClassName('main-nav')[0];
    menu.appendChild(elements.menu.template());

    window.onhashchange = function() {
      router().handleHash();
    };
    router().handleHash();
  }
  init();

  function nolinkAlert() {
    var links = document.getElementsByClassName('nolink');
    Array.prototype.forEach.call(links, function(nolink) {
      nolink.addEventListener('click', function(e) {
        e.preventDefault();
        var alert = document.createElement('div');
        var t = document.createTextNode('Нажаль ще немає посилання');

        alert.className = 'nolink-alert';
        alert.appendChild(t);

        document.body.appendChild(alert);
        setTimeout(function() {
          document.body.removeChild(alert);
        }, 2000);
      });
    });
  }

  function getJSON(element, next) {
    var path = 'json/' + elements[element].title + '.json';
    var xhr = new XMLHttpRequest();
    var data;

    xhr.open('GET', path, false);
    xhr.send();

    if (xhr.status != 200) {
      console.log(xhr.status + ': ' + xhr.statusText);
      data = null;
    } else {
      data = JSON.parse(xhr.responseText);
    }
    next(data);
  }

  function hashAllowed(hash) {
    var forbidden = ['news', 'menu'];
    var isAllowed = forbidden.every(function(el, idx, arr) {
      return hash != el;
    });
    return isAllowed;
  }


})();
