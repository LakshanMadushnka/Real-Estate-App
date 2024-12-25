"use client"
import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

function GoogleAddressSeqarch() {
  return (
    <div>
        <GooglePlacesAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
                />
    </div>
  )
}

export default GoogleAddressSeqarch