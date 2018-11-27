import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleDoubleDown
} from '@fortawesome/free-solid-svg-icons'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
    <section class="heroimage">
        <div class="hero is-medium is-fullheight">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <div class="columns">
                        <div class="column is-half">
                            <div class="notification opacity">
                                <h2 class="subtitle">welcome.</h2>
                                <h1 class="title"><strong>pito.run</strong></h1>
                                <h2>But, I don't run.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="hero-foot">
                <div class="scroll-nav">
                  <FontAwesomeIcon icon={faAngleDoubleDown} size="5x"/>
                </div>
            </div>
        </div>
    </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
