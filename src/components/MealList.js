import { MealItems } from "./MealItems";

function MealList({meals = []}){
    return(
        <div className="list">
            {meals.map(el => (
                <MealItems key={el.idMeal} {...el}/>
            ))}
        </div>
    )
}

export {MealList};