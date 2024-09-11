import React from 'react'
import appwriteService from "../appwrite/config"
import {Link } from "react-router-dom"

function PostCard({$id, title, featureImage}) {
  return (
    <Link to={`/post${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img className='w-full'
            </div>
        </div>
    </Link>
  )
}

export default PostCard