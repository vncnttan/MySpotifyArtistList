import {gql} from "@apollo/client"

export const getAllArtistDetail = gql `query ($artistName: String!) {
    artist (name: $artistName){
      name
      image
      albums {
        name
        image
        tracks{
          name
          preview_url
        }
        }
    }
  }`