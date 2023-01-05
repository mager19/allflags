import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function Country() {
	let params = useParams();

	const [itemCountry, setItemCountry] = useState({});
	const navigator = useNavigate();
	function handleBack() {
		navigator(`/`);
	}

	async function queryApi(url) {
		const response = await fetch(url);

		if (!response.ok) {
			return {
				data: null,
			};
		}
		const data = await response.json();
		return data;
	}

	useEffect(() => {
		const BASE = "https://restcountries.com/v3.1/alpha";
		const country = params.page;
		const url = `${BASE}/${country}`;

		queryApi(url).then((data) => {
			setItemCountry(data);
		});
	}, [params.page]);

	const item = itemCountry[0];

	if (item) {
		return (
			<div className="layout">
				<div className="container mx-auto">
					<div className="flex flex-wrap px-4 w-full lg:w-8/12 lg:mx-auto ">
						<Header />
						<div className="w-full py-2">
							<button
								className="flex items-center"
								onClick={handleBack}
							>
								<svg
									fill="#000000"
									version="1.1"
									id="Layer_1"
									xmlns="http://www.w3.org/2000/svg"
									width="16px"
									height="16px"
									viewBox="0 0 72 72"
									enableBackground="new 0 0 72 72"
								>
									<g>
										<path
											d="M48.252,69.253c-2.271,0-4.405-0.884-6.011-2.489L17.736,42.258c-1.646-1.645-2.546-3.921-2.479-6.255
		c-0.068-2.337,0.833-4.614,2.479-6.261L42.242,5.236c1.605-1.605,3.739-2.489,6.01-2.489c2.271,0,4.405,0.884,6.01,2.489
		c3.314,3.314,3.314,8.707,0,12.021L35.519,36l18.743,18.742c3.314,3.314,3.314,8.707,0,12.021
		C52.656,68.369,50.522,69.253,48.252,69.253z M48.252,6.747c-1.202,0-2.332,0.468-3.182,1.317L21.038,32.57
		c-0.891,0.893-0.833,2.084-0.833,3.355c0,0.051,0,0.101,0,0.151c0,1.271-0.058,2.461,0.833,3.353l24.269,24.506
		c0.85,0.85,1.862,1.317,3.063,1.317c1.203,0,2.273-0.468,3.123-1.317c1.755-1.755,1.725-4.61-0.03-6.365L31.292,37.414
		c-0.781-0.781-0.788-2.047-0.007-2.828L51.438,14.43c1.754-1.755,1.753-4.61-0.001-6.365C50.587,7.215,49.454,6.747,48.252,6.747z"
										/>
									</g>
								</svg>
								Back
							</button>
						</div>
						<div className="itemCountry__single flex-1 bg-secondary p-8 mt-2">
							<img
								src={item.flags.svg}
								alt={`flag of ${item.name.common}`}
							/>
							<h1 className="text-3xl text-text text-bold w-full mt-2">
								{item.name.common}
							</h1>
							<div className="info__country mb-4">
								<span>
									<strong>Capital:</strong> {item.capital}
								</span>
								<span>
									<strong>Region:</strong> {item.region}
								</span>
								<span>
									<strong>Sub Region:</strong>{" "}
									{item.subregion}
								</span>
								<span>
									<strong>Language:</strong>

									{Object.values(item.languages).map(
										(val, index) => {
											return <i key={index}> {val}</i>;
										}
									)}
								</span>
								<span>
									<strong>Population:</strong>{" "}
									{item.population}
								</span>
							</div>
							<a
								className="button__maps"
								href={item.maps.googleMaps}
								target="_blank"
								rel="noreferrer"
							>
								Google Maps
							</a>
						</div>
						<Footer />
					</div>
				</div>
			</div>
		);
	}
}

export default Country;
