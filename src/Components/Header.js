import React, { useEffect } from "react";
import logo from "../images/food-ordering-app-logo.jpeg";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/UserSlice";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import Footer from "./Footer";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user.user);
	const cart = useSelector((store) => store.cart.cart);
	const onlineStatus = useOnlineStatus();

	useEffect(() => {
		// A GOOD PRATICE IS TO UNSUBSCRIBE TO THIS EVENT_LISTENER
		// AFTER MY COMPONENT UNMOUNTS
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user

				dispatch(
					addUser({
						uid: user?.uid,
						email: user?.email,
						displayName: user?.displayName,
					})
				);
				navigate("/browse");
				// ...
			} else {
				// User is signed out
				// ...
				dispatch(removeUser());
				navigate("/");
			}
		});

		return () => unsubscribe();
	}, []);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			});
	};

	return (
		<>
			<div className="flex justify-between items-center px-16 py-5 bg-lime-300">
				<div>
					<img src={logo} alt="Logo" className="w-24 rounded-full" />
				</div>
				{user && (
					<>
						<div className="w-[450px]">
							<ul className="flex justify-between">
								<li>Online: {onlineStatus ? "✅" : "🔴"}</li>
								<li className="hover:text-gray-400 duration-150">
									<Link to="/browse">Home</Link>
								</li>
								<li className="hover:text-gray-400 duration-150">
									<Link to="/browse/about">About Us</Link>
								</li>
								<li className="hover:text-gray-400 duration-150">
									<Link to="/browse/faq">FAQ</Link>
								</li>
								<li className="hover:text-gray-400 duration-150">
									<Link to="/browse/cart">Cart-({cart.length} Items)</Link>
								</li>
							</ul>
						</div>
						<div>
							<button
								onClick={handleSignOut}
								className="bg-transparent rounded-xl hover:text-black text-gray-500 duration-150"
							>
								Sign Out
							</button>
						</div>
					</>
				)}
			</div>
			<Outlet />
			{user && <Footer />}
		</>
	);
};

export default Header;
