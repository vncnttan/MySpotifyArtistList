### MySpotifyArtistList (MSAL)
NJ 23-1 Vincent Tanjaya

	MSAL is a primarily mobile website where you can list your all-time favourite Spotify artist and show it to other. MSAL has 4 main pages:
•	List Page: Top 20 Spotify Artist recommendation from the developer. You can add some artist to your own personal favourite page and see the artist details.
•	Favourite Page: Your personalized favourite artist page where you can add/remove artist to your favourite page and see the artist details.
•	Search Page: Where you can search the name of a spotify artist and you can add it to your favourite page or see the artist details
•	Detail Page: See more information about the artist name, and discography (album and tracks)

Link:
Source code: vncnttan/MySpotifyArtistList: Qualification REACT (github.com)

MSAL is best viewed in the mobile device, although it can also be viewed in desktop devices.
  
		        Image 1.0 MSAL on desktop device  		   Image 1.1 MSAL on mobile

 
#### ArtistObject
	The data is fetched to this object by graphql, where the artistName is specified first.
 
Image 1.1 Artist Object

#### Language Option
	MSAL offers two language option: Indonesian and English, to change language, just click on the language button. To apply language changes, react uses Language Context, and get the data from the dictionary.json
     
    Image 2.1 Indonesian mode  	   Image 2.2 English Mode      Image 2.3 Change Lang Button
 
#### Homepage (List Page)
 
Image 3.1 List Page
List Page have a card component that list all the recommended artist. The star button can be clicked to add that artist to your favorite page. You also can click the card to redirect you the detail page where you can see more about the artist information.
The Navbar is purposely put in the bottom for a better user experience in mobile devices.
Components: 
•	Layout (Title, ChangeLanguage Button, etc.)
•	TitleHeader
•	Navbar
•	NavbarBtn
•	Card Container
•	Card Content
•	 Favorite Button
 
#### Favorite Page
 
Image 4.1 Favorite Page
	Favorite page is the page that is used to list all user’s favorite artist (marked by the yellow star). Favorite page get and store the data from the local storage, for everytime the user click the star (favorite) button. You can also remove unwanted favorite artist by clicking the star button again, it should disappear from the list.
 
Image 4.2 Local Storage
	
Components:
•	Layout
•	TitleHeader
•	Navbar
•	NavbarBtn
•	ListBox Container 
•	Card Content
•	Favorite Button

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
