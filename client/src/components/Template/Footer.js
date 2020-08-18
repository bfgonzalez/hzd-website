import React from "react"

const Footer = () => {
	return (
		<footer className="footer has-text-white has-text-centered has-text-weight-bold">
			<p className="is-size-6">
				<a
					className="has-text-white mr-2"
					href="https://bfgonzalez.netlify.app/"
					target="_blank"
					rel="noopener">
					Bianca Gonzalez
				</a>
				© {new Date().getFullYear()}
			</p>
		</footer>
	)
}

export default Footer
