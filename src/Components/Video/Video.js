import React, { useEffect, useState } from "react";
import "./_Video.scss"
import {AiFillEye} from "react-icons/ai";
import moment from "moment";
import  numeral from "numeral";
import request from "../../api";
import { useNavigate } from "react-router-dom";
//import { LazyLoadImage } from 'react-lazy-load-image-component';


const Video = ({video}) => {

    const {
        id,
        snippet : {
            channelId,
            channelTitle,
            title,
            publishedAt,
            thumbnails : {medium}
        },
    } = video

    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const [channelIcon, setChannelIcon] = useState(null)

    const seconds = moment.duration(duration).asSeconds()
    const formatedDuration = moment.utc(seconds * 1000).format('mm:ss')

    const _videoId = id?.videoId || id;

    const navigate = useNavigate()

    useEffect(() =>{
        const getVideoDetails = async () => {
            const {data:{items}} = await request('/videos',{
                params: {
                    part : 'contentDetails,statistics',
                    id : _videoId,
                },
            })
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
        }
        getVideoDetails()
    },[_videoId])


    useEffect(() => {
        const getChannelIcon = async () => {
            const {
                data : { items },
            } = await request('/channels',{
                params : {
                part : 'snippet',
                id : channelId
                },
            })
            setChannelIcon(items[0].snippet.thumbnails.default)
        }
        getChannelIcon()
    },[channelId])

    const handelVideoClick = () => {
        navigate(`/watch/${_videoId}`)
    }

    return (
       <div className="video" onClick={handelVideoClick}>
           <div className="video__top">
               <img src={medium.url} alt="video_thumbnail" />
                {/* <LazyLoadImage src={medium.url} effect="blur" /> */}
                <span>{formatedDuration}</span>
           </div>
           <div className="video__title">
               {title}
           </div>
           <div className="video__details">
               <span>
                    <AiFillEye /> {numeral(views).format("0.a")} views •
               </span>
               <span> {moment(publishedAt).fromNow()} </span>
           </div>
           <div className="video__channel">
               <img src={channelIcon?.url} alt="channel_icon"/>
               {/* <LazyLoadImage src={channelIcon?.url} effect="blur" /> */}

               <p>{channelTitle}</p>
           </div>
       </div>
    )
}

export default Video;