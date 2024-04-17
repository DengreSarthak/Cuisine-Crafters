"use client";
import { useFormStatus } from "react-dom";

export function MealsFormSubmit({ buttonDetail, classname }) {
	const { pending } = useFormStatus();

	const onClickHandler =() => {
		window.location.href = "/community/feed";
	}

	return (
		<button disabled={pending} className={classname} onClick={onClickHandler}>
			{pending ? "Submitting..." : buttonDetail}
		</button>
	);
}
