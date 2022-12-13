import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Perritos' ]);

    const onAddCategory = (newCategory) => {
        
        if( categories.includes( newCategory ) ) return;

        setCategories( [ newCategory, ...categories ] );
        //setCategories( cat => [ ...cat, 'Animalitos'] );
    }

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                /* setCategories={ onAddCategory } */
                onNewCategory={ onAddCategory }
            />

            {/* Listado de Gif */}

            { 
                categories.map( category => (
                    <GifGrid category={ category } key={ category }/>
                )) 
            }

                {/* Git Item */}
        </>
    )
}
