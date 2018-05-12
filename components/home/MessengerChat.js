import React from 'react'
import { lifecycle, compose } from 'recompose'

const enhance = compose(
  lifecycle({
    componentDidMount() {
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/es_LA/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
  })
)

const MessengerChat = ({ scrollTop }) =>
  <div>
    <div id="fb-root" />
    <div
      className="fb-customerchat"
      attribution="setup_tool"
      page_id="202983340452697"
      theme_color="#847894"
      logged_in_greeting="Hola!"
      logged_out_greeting="Hola!"
    />
  </div>

export default enhance(MessengerChat)
