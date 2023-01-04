import Button from "./Button";

function ContainerRegions({ setRegions, regions, setSelectedRegion }) {
	function handleRegionClick(id) {
		regions.map((item) => {
			return (item.status = "");
		});
		regions[id].status = "selected";
		setSelectedRegion(regions[id].regionName);
		setRegions([...regions]);
	}

	return (
		<div className="flex flex-wrap gap-4 mt-4">
			{regions.map((region, index) => {
				return (
					<Button
						key={index}
						id={index}
						name={region.regionName}
						status={region.status}
						onClick={handleRegionClick}
					/>
				);
			})}
		</div>
	);
}

export default ContainerRegions;
