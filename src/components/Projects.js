import React, { useState } from 'react'

import Gallery from '../images/gallery.gif'
import Git from '../images/github.jpg'
import Crud from '../images/CRUD.jpeg'
import dp from '../images/DP.jpeg'

const Projects = () => {
    const [prjs, setPrjs] = useState([
        { 
            id:1,
            name:'GitHub Finder',
            stack:'ReactJs, Json Server, CSS',
            LinkURL: 'https://githubfinder300.herokuapp.com',
            imageUrl:Git
        },
        {
            id:2,
            name:'Gallery App',
            stack:'ReactJs, FireBase, CSS',
            LinkURL: 'https://photosgalleryapp.herokuapp.com',
            imageUrl:Gallery
        },
        {
            id:3,
            name:'Tracker CRUD',
            stack:'ReactJs, Json Server, CSS',
            LinkURL: 'https://mytrackerapp.herokuapp.com',
            imageUrl:Crud
        },
    ])
    console.log(prjs)

    return (
      
        <div className="projects-cont">
           {prjs.map((prj) =>(
               <div className="prj-cont" key={prj.id}>
                   <img src={prj.imageUrl} alt=""/>
                   <div className="prj-info">
                        <h1>Name: {prj.name}</h1>
                        <h3>Stacks used: {prj.stack}</h3>
                        <h5>Click for: <a href="{prj.LinkURL}"> Live Link</a> </h5>
                    </div>
               </div>
           ))}
        </div>
        
    )
}

export default Projects
