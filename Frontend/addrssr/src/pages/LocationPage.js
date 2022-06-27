import React from 'react'
import { Wrapper, Map, GoogleApiWrapper } from "google-maps-react"

function LocationPage() {
  return (
        <Map
    google = {window.google}
    style = {{width: "100%", height:"100%"}}
    zoom = {9}
    initialCenter = {{
        lat: 33.854721,
        lng: 35.862286
    }}
    />
  )
}

export default GoogleApiWrapper ({
    apiKey: "AIzaSyAHW3cUiVHTLSVW1kKPMjNTFM1wseL4GBE"
})(LocationPage)