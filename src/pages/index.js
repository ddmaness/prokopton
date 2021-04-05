import * as React from "react"
import {graphql} from "gatsby"
import PostExcerpt from "../components/PostExcerpt"

// markup
export default function IndexPage({data}) {
  const {allMarkdownRemark} = data
  const {nodes} = allMarkdownRemark
  console.log(nodes)
  return (
    <main>
      {nodes.map(({frontmatter}) => (
        <PostExcerpt
          slug = {frontmatter.slug}
          title = {frontmatter.title}
          date = {frontmatter.date}
        ></PostExcerpt>
      ))
    }
    </main>
  )
}

export const pageQuery = graphql`
  {
  allMarkdownRemark {
    nodes {
      frontmatter {
        slug
        title
        date(formatString: "MM-DD-YY")
      }
    }
  }
}
`