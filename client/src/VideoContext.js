import React, {useState, createContext} from 'react';
import {v4 as uuid} from 'uuid';

export const VideoContext = createContext();

export const VideoProvider = (props) => {

  const [videos, setVideos] = useState(
    [
      {
        title: "Windmills",
        thumbnail: "/Users/jacobspade/code/netflix_style_website/client/src/thumbnails/windmills.png",
        id: uuid(),
        synopsis: 'Scientists and engineers are using energy from the wind to generate electricity. Wind energy, or wind power, is created using a wind turbine.'
      },
      {
        title: "Windmills",
        thumbnail: "/Users/jacobspade/code/netflix_style_website/client/src/thumbnails/windmills.png",
        id: uuid(),
        synopsis: 'Scientists and engineers are using energy from the wind to generate electricity. Wind energy, or wind power, is created using a wind turbine.'
      },
      {
        title: "Windmills",
        thumbnail: "/Users/jacobspade/code/netflix_style_website/client/src/thumbnails/windmills.png",
        id: uuid(),
        synopsis: 'Scientists and engineers are using energy from the wind to generate electricity. Wind energy, or wind power, is created using a wind turbine.'
      },
      {
        title: "Windmills",
        thumbnail: "/Users/jacobspade/code/netflix_style_website/client/src/thumbnails/windmills.png",
        id: uuid(),
        synopsis: 'Scientists and engineers are using energy from the wind to generate electricity. Wind energy, or wind power, is created using a wind turbine.'
      },
      {
        title: "Windmills",
        thumbnail: "/Users/jacobspade/code/netflix_style_website/client/src/thumbnails/windmills.png",
        id: uuid(),
        synopsis: 'Scientists and engineers are using energy from the wind to generate electricity. Wind energy, or wind power, is created using a wind turbine.'
      },
      {
        title: "Windmills",
        thumbnail: "/Users/jacobspade/code/netflix_style_website/client/src/thumbnails/windmills.png",
        id: uuid(),
        synopsis: 'Scientists and engineers are using energy from the wind to generate electricity. Wind energy, or wind power, is created using a wind turbine.'
      },
      {
        title: "Windmills",
        thumbnail: "/Users/jacobspade/code/netflix_style_website/client/src/thumbnails/windmills.png",
        id: uuid(),
        synopsis: 'Scientists and engineers are using energy from the wind to generate electricity. Wind energy, or wind power, is created using a wind turbine.'
      },
      {
        title: "Windmills",
        thumbnail: "/Users/jacobspade/code/netflix_style_website/client/src/thumbnails/windmills.png",
        id: uuid(),
        synopsis: 'Scientists and engineers are using energy from the wind to generate electricity. Wind energy, or wind power, is created using a wind turbine.'
      },
      {
        title: "Windmills",
        thumbnail: "/Users/jacobspade/code/netflix_style_website/client/src/thumbnails/windmills.png",
        id: uuid(),
        synopsis: 'Scientists and engineers are using energy from the wind to generate electricity. Wind energy, or wind power, is created using a wind turbine.'
      },
      {
        title: "Windmills",
        thumbnail: "/Users/jacobspade/code/netflix_style_website/client/src/thumbnails/windmills.png",
        id: uuid(),
        synopsis: 'Scientists and engineers are using energy from the wind to generate electricity. Wind energy, or wind power, is created using a wind turbine.'
      },
      {
        title: "Windmills",
        thumbnail: "/Users/jacobspade/code/netflix_style_website/client/src/thumbnails/windmills.png",
        id: uuid(),
        synopsis: 'Scientists and engineers are using energy from the wind to generate electricity. Wind energy, or wind power, is created using a wind turbine.'
      },
      {
        title: "Windmills",
        thumbnail: "/Users/jacobspade/code/netflix_style_website/client/src/thumbnails/windmills.png",
        id: uuid(),
        synopsis: 'Scientists and engineers are using energy from the wind to generate electricity. Wind energy, or wind power, is created using a wind turbine.'
      },
      {
        title: "Windmills",
        thumbnail: "/Users/jacobspade/code/netflix_style_website/client/src/thumbnails/windmills.png",
        id: uuid(),
        synopsis: 'Scientists and engineers are using energy from the wind to generate electricity. Wind energy, or wind power, is created using a wind turbine.'
      },
      {
        title: "Windmills",
        thumbnail: "/Users/jacobspade/code/netflix_style_website/client/src/thumbnails/windmills.png",
        id: uuid(),
        synopsis: 'Scientists and engineers are using energy from the wind to generate electricity. Wind energy, or wind power, is created using a wind turbine.'
      },
      {
        title: "Windmills",
        thumbnail: "/Users/jacobspade/code/netflix_style_website/client/src/thumbnails/windmills.png",
        id: uuid(),
        synopsis: 'Scientists and engineers are using energy from the wind to generate electricity. Wind energy, or wind power, is created using a wind turbine.'
      }
    ]
  )

  return(
    <VideoContext.Provider value={[videos, setVideos]}>
      {props.children}
    </VideoContext.Provider>
  )
}