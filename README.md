# Photo Gallery

A basic photo gallery using react and redux featuring placeholder data and images from [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/).

## Run Locally

Simply `npm install` and `npm start` then visit `localhost:3000`.

## Features

#### Homepage

The homepage is a grid of photo albums. Each album has a banner with the album title and the author of the album.

Clicking on a thumbnail will take you to the album.

Clicking on the name of an author will take you to the user's profile page.

#### User Profile

Each user has a profile page, displaying their name, profile picture, biographical details and all of their personal albums. Clicking on an album thumbnail will take you to the album.

#### Album View

After clicking on an album thumbnail from the homepage or a user's profile, you will be able to navigate through each photo in the album. You will see one large photo and arrow buttons to go to the previous or next photo in the album (provided you are not at the start/end). Below the photo you can see the title of the image.

Below the large image, you will see all the photos in the album. The selected large image is outlined. Clicking on any image thumbnail will display that photo in the large photo area at the top.

The header should display the author's name followed by the name of the album. Clicking on the author's name will bring you to their profile page.

Clicking on the camera icon in the header from any view will bring you back to the homepage.

