import React, { useEffect } from "react";

function withStorageListener(WrappedComponent) {
	return function WrappedComponentWithStorageListener(props) {
		const [storageChange, setStorageChange] = React.useState(false);

		useEffect(() => {
			const onChange = (change) => {
				if(change.key === "TODOS_v1") {
					console.log("Hubo cambios en TODOS_V1")
					setStorageChange(true);
				}

				window.addEventListener("storage", onChange);

				return () => {
					window.removeEventListener("storage", onChange)
				}
			}	
		}
		,[]);

		const toggleShow = () => {
			setStorageChange(false);
			props.sincronize();
		};

		return (
			<WrappedComponent 
				show={storageChange} 
				toggleShow={toggleShow}	
				/>
		);
	}
}

export { withStorageListener }