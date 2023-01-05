import { useNavigate } from "react-router-dom";

function Header() {
	const navigator = useNavigate();
	function handleLogoClick() {
		navigator(`/`);
	}

	return (
		<div className="w-full header">
			<h1 className="logo cursor-pointer" onClick={handleLogoClick}>
				ALLFlags
			</h1>
			<p>Get information about countries</p>
		</div>
	);
}

export default Header;
