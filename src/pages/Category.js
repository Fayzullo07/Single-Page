import { useEffect, useState } from "react";
import { useParams} from "react-router-dom"
import {getFilterCategory} from '../api';
import { Loader } from "../components/Loader";
import { MealList } from "../components/MealList";
export default function Category() {
    const [meals, setMeals] = useState([]);
    const {name} = useParams();

    useEffect(() => {
        getFilterCategory(name).then(data => {
            setMeals(data.meals)
        })
    }, [name]);
    return(
        <>
            {!meals.length ? <Loader/>: <MealList meals={meals}/>}
        </>
    )
}