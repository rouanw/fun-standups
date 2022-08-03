import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="preload" href="/fonts/montserrat.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      {props.headComponents}
    </head>
    <body {...props.bodyAttributes}>
    {props.preBodyComponents}
    <div
      key={`body`}
      id="___gatsby"
      dangerouslySetInnerHTML={{ __html: props.body }}
    />
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT02XX1DMS"></script>
    <script dangerouslySetInnerHTML={{ __html: `
      var randomId = crypto.randomUUID();
      function gaOptout(){document.cookie=disableStr+'=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/',window[disableStr]=!0}var gaProperty='G-RT02XX1DMS',disableStr='ga-disable-'+gaProperty;document.cookie.indexOf(disableStr+'=true')>-1&&(window[disableStr]=!0);
      if(!(navigator.doNotTrack == "1" || window.doNotTrack == "1")) {
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer && window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-RT02XX1DMS', {"anonymize_ip":true,"ad_storage":"denied","analytics_storage":"denied","client_storage":"none","send_page_view":true,"client_id":randomId});
      }
      ` }}>

    </script>
    {props.postBodyComponents}
    </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
