import Layout from "./components/Layout";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Test from "../pages/test";

function AppRouting() {
	return (
		// <div className="App">
		// 	<Layout />
		// </div>
		<Router>
			<Switch>
				<Route exact path="/" component={HomePage} />
			</Switch>
		</Router>
	);
}

export default AppRouting;
