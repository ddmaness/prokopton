import { Link } from 'gatsby'
import React from 'react'

export default function PostExcerpt({title, slug, date}) {
    return(
        <div>
            <Link to={slug}>
                <h2>{title}</h2>
                <span>{date}</span>
            </Link>
        </div>
    )
}