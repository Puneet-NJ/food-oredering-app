import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { Provider } from "react-redux";
import appStore from "../Utils/appStore";
import Header from "./Header";
import About from "./About";
import FAQ from "./FAQ";
import Cart from "./Cart";
import RestaurantMenu from "./RestaurantMenu";

const Main = () => {
	return (
		<>
			<Provider store={appStore}>
				<Routes>
					<Route element={<Header />}>
						<Route path="/" element={<Login />}></Route>
						<Route path="browse">
							<Route index element={<Browse />}></Route>
							<Route path="about" element={<About />}></Route>
							<Route path="faq" element={<FAQ />}></Route>
							<Route path="cart" element={<Cart />}></Route>

							<Route path="restaurant">
								<Route path=":id" element={<RestaurantMenu />}></Route>
							</Route>
						</Route>
					</Route>
				</Routes>
			</Provider>
		</>
	);
};

export default Main;
