$(document).ready(function () {
  $('.slider').slick({
    autoplay: true,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.img-slider').slick({
    arrows: false,
    dots: true,
    infinite: false
  });

  $('.sale__products').slick({
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.product__box-slider').slick({
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    swipe: false,
    prevArrow: '<a class="slick-prev_main"></a>',
    nextArrow: '<a class="slick-next_main"></a>'
  });

  $('.product__slider').slick({
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1
  })


  $('.size__info').popover({
    placement: 'top',
    content: "Также как существующая теория напрямую зависит от экономической целесообразности принимаемых решений."
  })

  $('.header__burger').click(function (event) {
    $('.header__burger, .navigation').toggleClass('active')
  })
});


const navigationContainer = document.querySelector('.navigation');
const navigationSelectors = navigationContainer.getElementsByClassName('navigation__section');
for (let i = 0; i < navigationSelectors.length; i++) {
  navigationSelectors[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("navigation_active");
    current[0].className = current[0].className.replace(" navigation_active", "");
    this.className += " navigation_active";
  });
}

$('.like-btn').on('click', function (e) {
  $(this).toggleClass('like_active');
})

$('.action__like').on('click', function (e) {
  $(this).toggleClass('like_active');

})

const colorContainer = document.querySelectorAll('.color-list');
colorContainer.forEach((e) => {
  const colors = e.getElementsByClassName('color-button');
  for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", function (e) {
      let current = e.target.closest(".color-list").querySelector(".color-button_active");
      current.className = current.className.replace(" color-button_active", "");
      this.className += " color-button_active";
    });
  }
})

const btnContainer = document.querySelectorAll('.size-list');
btnContainer.forEach((e) => {
  const colors = e.getElementsByClassName('size-button');
  for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", function (e) {
      let current = e.target.closest(".size-list").querySelector(".size-button_active");
      current.className = current.className.replace(" size-button_active", "");
      this.className += " size-button_active";
    });
  }
})

const categoriesContainer = document.querySelector('.sale__categories');
const categories = categoriesContainer.getElementsByClassName('sale__category');
for (let i = 0; i < categories.length; i++) {
  categories[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("sale__category_active");
    current[0].className = current[0].className.replace(" sale__category_active", "");
    this.className += " sale__category_active";
  });
}


var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    c = document.createElement("DIV");
    c.classList.add('location-option');
    if (j === 1) {
      c.classList.add("same-as-selected")
    }
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].setAttribute("class", "location-option");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
    
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);

