import {gql} from "@apollo/client"

export const GET_ARTIST_DETAIL = gql `query ($artistName: String!) {
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