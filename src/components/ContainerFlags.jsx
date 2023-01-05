import ItemFlag from "./ItemFlag";
import { useNavigate } from "react-router-dom";

function ContainerFlags({ data, search, setItemSelected, itemSelected }) {
	if (search !== "") {
		data = data.filter((item) => {
			return (
				item.name.common.toLowerCase().search(search.toLowerCase()) >= 0
			);
		});
	}

	const navigator = useNavigate();

	function handleItemClick(item) {
		const itemUrl = item.cca2.toLowerCase();
		navigator(`/${itemUrl}`);
	}

	if (data.length > 0) {
		/* Sort Alphabetical */
		data = data.sort(function (a, b) {
			let fa = a.name.common.toLowerCase(),
				fb = b.name.common.toLowerCase();

			if (fa < fb) {
				return -1;
			}
			if (fa > fb) {
				return 1;
			}
			return 0;
		});

		return (
			<div className="containerFlags w-full">
				{data.map((item, index) => {
					return (
						<ItemFlag
							item={item}
							key={index}
							onClick={handleItemClick}
						/>
					);
				})}
			</div>
		);
	} else {
		return (
			<div className="w-full py-10 mx-auto text-center">
				<img
					src="https://flagcdn.com/aq.svg"
					width="250"
					alt="Antartica"
					className="text-center mx-auto mb-8"
				/>
				<h3 className="text-2xl text-text">
					Sorry, there are no countries with this search criteria.
				</h3>
			</div>
		);
	}
}

export default ContainerFlags;
