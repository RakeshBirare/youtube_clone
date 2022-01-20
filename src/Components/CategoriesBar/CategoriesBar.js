import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPopularVideos, getVideosByCategory } from "../../redux/actions/videos.action";
import "./_CategoriesBar.scss"

const keywords = [
    "All",
    "React Js",
    "Angular js",
    "React Native",
    "Use Of API",
    "Redux",
    "Hitesh Chaudhari",
    "Music",
    "Algorithm Art",
    "Guitar",
    "Marathi Song",
    "Coding",
    "Cricket",
    "Chess",
    "Gatsby",
    "Codedamn"

]


const CategoriesBar = () => {
    const [activeElement, setActiveElement] = useState('All')

    const dispatch = useDispatch()
    const handleClick = value => {
        setActiveElement(value)
        console.log(`value is : ${value}`)
        if (value === 'All') {
            dispatch(getPopularVideos())
        }else{
        dispatch(getVideosByCategory(value))
        } 
    }
    

    return (
        <div className="CategoriesBar">
            {
                keywords.map((value,index) => (
                    <span
                    onClick={() => handleClick(value)} key={index} 
                    className={activeElement === value ? "active" : ""}>{value}</span>
                ))
            }
            
        </div>
    )
}

export default CategoriesBar;