import Header from "./Header";
import Footer from "./Footer";
import ContainerFlags from "./ContainerFlags";
import ContainerRegions from "./ContainerRegions";
import InputText from "./InputText";
import { useState } from "react";
import { useEffect } from "react";

function Layout() {
	const [search, setSearch] = useState("");
	const [data, setData] = useState([]);
	const [selectedRegion, setSelectedRegion] = useState("America");
	const [regions, setRegions] = useState([
		{
			regionName: "All",
			status: "",
		},
		{
			regionName: "America",
			status: "selected",
		},
		{
			regionName: "Europe",
			status: "",
		},
		{
			regionName: "Africa",
			status: "",
		},
		{
			regionName: "Asia",
			status: "",
		},
		{
			regionName: "Oceania",
			status: "",
		},
	]);

	function handleChange(e) {
		setSearch(e.target.value);
	}

	// async function fetchT() {
	// 	const response = await fetch(
	// 		"https://restcountries.com/v3.1/region/americas"
	// 	);

	// 	const data = await response.json();

	// 	return data;
	// }

	useEffect(() => {
		let url;
		if (selectedRegion === "All") {
			const BASE = "https://restcountries.com/v3.1";
			const region = selectedRegion.toLowerCase();
			url = `${BASE}/${region}`;
		} else {
			const BASE = "https://restcountries.com/v3.1/region";
			const region = selectedRegion.toLowerCase();
			url = `${BASE}/${region}`;
		}

		fetch(url)
			.then((response) => response.json())
			.then((json) => {
				setData(json);
			});
	}, [selectedRegion]);

	return (
		<div className="layout">
			<div className="container mx-auto">
				<div className="flex flex-wrap px-4">
					<Header />

					<h2 className="text-text w-full">
						Select a region, by default America is selected{" "}
					</h2>
					<ContainerRegions
						setRegions={setRegions}
						regions={regions}
						setSelectedRegion={setSelectedRegion}
					/>

					<h3 className="text-2xl text-text mt-6 w-full">
						{data.length} Paises
					</h3>
					<div className="w-full lg:w-1/3 my-4">
						<InputText
							type="search"
							placeholder="Busca un País"
							onChange={handleChange}
						/>
					</div>

					<ContainerFlags data={data} search={search} />
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default Layout;
