"use client";
import { useFormState } from "react-dom";
import classes from "./form-searching.module.css";
import { useRef } from "react";
import { searchMeal } from "./../../lib/actions";

export function MealsFormSearching() {

	// const InputRef = useRef();

    const [state, formAction] = useFormState(searchMeal, { message: null });

	// function SubmitHandler(event) {
	// 	event.preventDefault();

	// 	const input = InputRef.current.value;
    //     console.log(input);
    //     <Link href={input}></Link>
	// }

	return (
        <main className={classes.searchForm}>
            <form  action={formAction}> 
                <div>
                    <input type="search" id="search" name="search" placeholder="Search Your Favorite Meal"/>
                </div>
                <button >
                    Search
                </button>
            </form>
        </main>
	);
}
