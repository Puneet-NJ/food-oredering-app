import React, { useRef, useState } from "react";
import Header from "./Header";
import { loginPageImg } from "../Utils/mockData";
import logo from "../images/food-ordering-app-logo.jpeg";
import validate from "../Utils/validate";
import { auth } from "../Utils/firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const [invalidInput, setInvalidInput] = useState(null);
	const email = useRef(null);
	const password = useRef(null);
	const fullName = useRef(null);

	const handleSignIn = () => {
		setIsSignIn(!isSignIn);
	};

	const handleSubmit = () => {
		const errMsg = validate(
			fullName?.current?.value,
			email.current.value,
			password.current.value
		);
		setInvalidInput(errMsg);
		if (errMsg) return;

		if (!isSignIn) {
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;

					updateProfile(user, {
						displayName: fullName?.current?.value,
					})
						.then(() => {
							// Profile updated!
							// ...
						})
						.catch((error) => {
							// An error occurred
							// ...
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					// ..
				});
		} else {
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
				});
		}
	};

	return (
		<div>
			{/* <Header /> */}
			<div className="flex w-1/2 mx-auto mt-16 bg-slate-200">
				<div>
					<img alt="Food Img" src={loginPageImg} />
				</div>
				<div className="pt-10 w-1/2">
					<div className="mx-auto w-24">
						<img src={logo} alt="Logo" className="rounded-full"></img>
					</div>
					<form
						className="w-10/12 mx-auto mt-10"
						onSubmit={(e) => e.preventDefault()}
					>
						{!isSignIn && (
							<input
								ref={fullName}
								type="text"
								placeholder="Full Name"
								className="w-full py-2 px-6 rounded"
							></input>
						)}
						<input
							ref={email}
							type="text"
							placeholder="Email Address"
							className="w-full py-2 px-6 mt-4 rounded"
						></input>
						<input
							ref={password}
							type="password"
							placeholder="Password"
							className="w-full py-2 mt-4 px-6 rounded"
						></input>
					</form>
					<div className="w-1/2 mx-10 mt-5 text-red-600 font-bold">
						{invalidInput}
					</div>
					<div className="flex justify-center items-center mt-8 text-white font-bold">
						<button
							onClick={handleSubmit}
							className="px-10 py-2 bg-slate-500 rounded-2xl hover:scale-110 hover:bg-slate-600 duration-150"
						>
							Sign In
						</button>
					</div>

					<div className="text-sm font-semibold mt-10 ml-1 text-gray-400 text-center">
						{isSignIn ? "New here?" : "Already Registred?"}{" "}
						<button
							onClick={handleSignIn}
							className="border-b-2 hover:cursor-pointer hover:text-gray-800"
						>
							{isSignIn ? "Create Account" : "Log In"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
