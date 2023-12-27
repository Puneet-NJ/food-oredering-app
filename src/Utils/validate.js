const validate = (fullName, email, password) => {
	if (fullName !== undefined) {
		const idealFullName =
			/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
				fullName
			);

		if (!idealFullName) return "Invalid Full Name";
	}

	const idealEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
		email
	);

	if (!idealEmail) return "Invalid email";

	const idealPassword =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

	if (!idealPassword) return "Invalid password";
};

export default validate;
