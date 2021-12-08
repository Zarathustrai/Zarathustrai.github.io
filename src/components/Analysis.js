import React from 'react';

import RenderForm from './RenderForm';

export default class Analysis extends React.Component {

  render() {
    if (this.props.isVisible) {
      return(
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque tincidunt lacus, vitae venenatis est scelerisque a. Phasellus cursus metus massa, et finibus urna mattis eu. Sed nec leo turpis. Nunc rhoncus a lectus vitae consequat. Nullam sit amet mollis leo. Vivamus fermentum tellus sit amet nisi cursus laoreet nec non odio. Vestibulum luctus, nulla elementum tincidunt dapibus, magna lacus faucibus ante, eget cursus dolor dolor quis est. Maecenas maximus, tellus vitae faucibus ultrices, risus felis sollicitudin augue, eu hendrerit urna neque nec nibh.

          Vivamus sollicitudin nisl ac mattis placerat. Proin sollicitudin tristique magna quis porttitor. Fusce semper libero ac sodales lobortis. Etiam vitae ante nibh. Nunc eu pharetra orci, ac ultricies quam. Vivamus lacus est, tempus id magna id, dictum consectetur felis. Sed sollicitudin eu ante vestibulum efficitur. Praesent faucibus tellus vitae diam pellentesque, id pretium risus iaculis.

          Donec auctor eros quis nisi venenatis congue. Nam vel nulla non mauris sodales finibus. Nam ultrices fermentum orci vel malesuada. Aenean facilisis quam in convallis pretium. Nam pellentesque feugiat dignissim. Mauris facilisis pharetra aliquet. Proin auctor laoreet ante, et pellentesque ante accumsan in. Nam pharetra, arcu nec feugiat luctus, nulla sapien placerat lacus, eu finibus tellus est quis ligula. Integer id urna nulla. Nam ultrices enim vel quam cursus molestie. Maecenas et porttitor ligula, porta ullamcorper nisi. Cras faucibus quam nec odio rutrum, vitae efficitur odio blandit. Ut bibendum mauris et urna auctor pretium. Vestibulum venenatis vehicula justo id tempus. Sed faucibus nulla nec mi volutpat, sed eleifend leo sollicitudin.

          Integer non suscipit arcu. Aliquam dapibus sagittis felis, vel molestie mi feugiat nec. Curabitur eleifend nulla enim, in sagittis dolor maximus ac. Fusce dignissim in ipsum a bibendum. Nam hendrerit ut purus at sagittis. Aliquam pellentesque interdum urna, non iaculis sapien blandit porta. Nulla tempus purus ut arcu ultrices, lobortis suscipit urna aliquam. Aliquam scelerisque, elit sit amet feugiat facilisis, orci augue ultrices ipsum, at volutpat arcu urna a orci. Nam id malesuada elit. Etiam malesuada felis eget eros venenatis scelerisque. Donec a quam dignissim, vestibulum ipsum et, congue ligula. Aenean quis hendrerit magna, ac semper odio. Aliquam erat volutpat.

          Maecenas dictum sem nec convallis placerat. Nullam et est mollis justo venenatis suscipit id nec risus. Quisque iaculis elit non purus tristique dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer malesuada, felis eget pellentesque vestibulum, libero mi facilisis ligula, et fermentum leo felis ut metus. Donec viverra libero ut enim consectetur, faucibus rhoncus felis aliquam. Pellentesque quis arcu lacinia enim lobortis placerat. Nullam sit amet nibh porttitor, posuere elit ac, iaculis nisl. Aenean iaculis lectus ac nisi lacinia auctor. Vestibulum egestas suscipit pharetra. Proin vestibulum commodo dapibus. Mauris congue, elit vel suscipit pharetra, elit mi euismod odio, a ultrices velit mauris dignissim sem. Nam condimentum, ligula aliquam tincidunt pretium, justo lectus laoreet ante, eu efficitur augue tortor cursus tellus.
        </p>
      );
    } else {
        return(null);
    }
  }
}
