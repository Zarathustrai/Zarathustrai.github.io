import React from 'react';

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isVisible) {
      return(
        <p>
          Integer non suscipit arcu. Aliquam dapibus sagittis felis, vel molestie mi feugiat nec. Curabitur eleifend nulla enim, in sagittis dolor maximus ac. Fusce dignissim in ipsum a bibendum. Nam hendrerit ut purus at sagittis. Aliquam pellentesque interdum urna, non iaculis sapien blandit porta. Nulla tempus purus ut arcu ultrices, lobortis suscipit urna aliquam. Aliquam scelerisque, elit sit amet feugiat facilisis, orci augue ultrices ipsum, at volutpat arcu urna a orci. Nam id malesuada elit. Etiam malesuada felis eget eros venenatis scelerisque. Donec a quam dignissim, vestibulum ipsum et, congue ligula. Aenean quis hendrerit magna, ac semper odio. Aliquam erat volutpat.

          Maecenas dictum sem nec convallis placerat. Nullam et est mollis justo venenatis suscipit id nec risus. Quisque iaculis elit non purus tristique dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer malesuada, felis eget pellentesque vestibulum, libero mi facilisis ligula, et fermentum leo felis ut metus. Donec viverra libero ut enim consectetur, faucibus rhoncus felis aliquam. Pellentesque quis arcu lacinia enim lobortis placerat. Nullam sit amet nibh porttitor, posuere elit ac, iaculis nisl. Aenean iaculis lectus ac nisi lacinia auctor. Vestibulum egestas suscipit pharetra. Proin vestibulum commodo dapibus. Mauris congue, elit vel suscipit pharetra, elit mi euismod odio, a ultrices velit mauris dignissim sem. Nam condimentum, ligula aliquam tincidunt pretium, justo lectus laoreet ante, eu efficitur augue tortor cursus tellus.
        </p>
      );
    } else {
      return(null);
    }
  }
}
