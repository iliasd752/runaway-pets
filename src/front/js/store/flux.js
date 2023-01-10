const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			logIn: (email, password, {onSuccess, onFailure} = {}) => {
				const opts = {
					method: "POST",
					headers: {
					  "Content-type": "application/json",
					},
					body: JSON.stringify({
					  email: email,
					  password: password,
					}),
				  };
				  fetch(process.env.BACKEND_URL + "/api/token", opts)
					.then((resp) => {
					  if (resp.status === 200) return resp.json();
					})
					.then(data => {
					  sessionStorage.setItem("token", data.access_token)
					  sessionStorage.setItem("user_id", data.user_id)
					  if (onSuccess) {
						onSuccess()}
					})
					.catch((error) => {
					  console.error("There was an error", error);
					  if (onFailure) {onFailure()}
					});
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
