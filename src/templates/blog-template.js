import React from 'react'
import { graphql } from 'gatsby'

export default function BlogTemplate({data}) {
    const {markdownRemark} = data
    const {frontmatter, html} = markdownRemark
    return (
        <div>
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <div dangerouslySetInnerHTML={{__html: html}}></div>
        </div>
    )
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
            }
        }
    }
`