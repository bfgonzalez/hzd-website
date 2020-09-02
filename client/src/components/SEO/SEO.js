import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

const SEO = () => {
  const title = "Horizon Zero Dawn Wiki"
  const description = "A wiki for Horizon Zero Dawn"
  const url = "https://hzd-website.herokuapp.com/"

  return (
    <Helmet
      title="Horizon Zero Dawn Wiki"
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: `url`,
          content: url,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:image`,
          content: `${url}/thumbnail.png`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `Bianca Francesca Gonzalez | @bfgonzalez`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    />
  )
}

SEO.defaultProps = {
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  url: PropTypes.string,
}

export default SEO
