import React, { useState } from 'react'
import Gallery from '../images/gallery.gif'
import Git from '../images/github.jpg'
import Crud from '../images/CRUD.jpeg'


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
                   
                        <h2>Name: <span>{prj.name}</span></h2>
                        <h3>Stacks used: <span >{prj.stack}</span></h3>
                        <h5>Click for: <a href={prj.LinkURL} target="_blank"rel="noreferrer"> Live Link</a> </h5>
                    </div>
               </div>
           ))}
        </div>
        
    )
}
const style ={
    backGroundColor:'red'
}
export default Projects
