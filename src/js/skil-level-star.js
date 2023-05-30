
export default class SkilLevelStar {


    options = {
        all_star_count: 5,
        attr_star_count: 'data-stars',
        star_count_num: 0,
    }

    constructor(element) {
            this.element = Array.from(document.querySelectorAll(element));
      }

      star_count(el) {
        if(el.hasAttribute(this.options.attr_star_count)) {
            return el.getAttribute(this.options.attr_star_count)
        }
      }


        print_star(state) {

            const color1 = '#000';
            const color2 = '#E5E5E5';

            let fill = state ? color1 : color2;
            
 
            return `<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.89241 0.85958C10.1923 -0.0606967 11.4942 -0.0606959 11.794 0.859581L13.5451 6.23398C13.6792 6.64561 14.063 6.92418 14.4959 6.92418H20.1567C21.1261 6.92418 21.5284 8.16521 20.7434 8.73398L16.1685 12.0486C15.8171 12.3033 15.67 12.7555 15.8044 13.1682L17.553 18.5349C17.853 19.4557 16.7997 20.2227 16.0155 19.6544L11.4299 16.3321C11.0799 16.0784 10.6065 16.0784 10.2565 16.3321L5.67095 19.6544C4.88669 20.2227 3.8334 19.4557 4.13343 18.5348L5.882 13.1682C6.01645 12.7555 5.86937 12.3033 5.51791 12.0486L0.943038 8.73398C0.158031 8.16521 0.560362 6.92418 1.52976 6.92418H7.19051C7.62344 6.92418 8.0072 6.64561 8.14132 6.23398L9.89241 0.85958Z" fill="${fill}"/>
            </svg>`;
      }

      fill() {

        for(let m = 0; m < this.element.length; m++) {
            let star_count_num = this.star_count(this.element[m])

            for (let i = 0; i < this.options.all_star_count; i++) {
                if(star_count_num <= 0) {
                    this.element[m].insertAdjacentHTML('beforeend',this.print_star(false));
                } else {
                    this.element[m].insertAdjacentHTML('beforeend',this.print_star(true));
                }

                star_count_num--;
            }
            star_count_num = null;
        }
       
      }


}