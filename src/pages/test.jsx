import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function Test() {
	let params = useParams();

	const [itemCountry, setItemCountry] = useState({});

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

export default Test;
