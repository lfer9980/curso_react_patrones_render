import React from "react";
import { withStorageListener } from "./withStorageListener"

function ChangeAlert({ show, toggleShow }) {
	if (show) {
		return (
			<div>
				<p>Hubo cambios</p>
				<button
					onClick={() => toggleShow()}
					>
					Volver a cargar información
				</button>
			</div>
			);
	} else {
		return null;
	}
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }