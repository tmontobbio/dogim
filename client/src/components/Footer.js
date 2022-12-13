import facebook from "./img/iconmonstr-facebook-6.svg";
import insta from "./img/iconmonstr-instagram-11.svg";
import twitter from "./img/iconmonstr-twitter-1.svg";

export default function Footer() {
	return (
		<div id="footer">
			<div id="footer-text">
				<ul>
					<li>Dog Instant Messenger&#8482;</li>
					<li>Est. 2022</li>
					<li>tylermontobbio@gmail.com</li>
				</ul>
			</div>
			<div>
				<img className="icons" src={facebook} alt="fb-img" />
				<img className="icons" src={insta} alt="ig-img" />
				<img className="icons" src={twitter} alt="twitter-img" />
			</div>
		</div>
	);
}
