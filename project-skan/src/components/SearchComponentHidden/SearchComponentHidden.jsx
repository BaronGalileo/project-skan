import React from "react";
import { useFormContext } from "react-hook-form";

const SearchFormHidden = () => {

    const {
        register
    } = useFormContext()


    return(
        <>
        <input type="hidden" value="company" {...register(`searchContext.targetSearchEntitiesContext.targetSearchEntities.0.type`)}/>
        <input type="hidden" value={null} {...register(`searchContext.targetSearchEntitiesContext.targetSearchEntities.0.sparkId`)}/>
        <input type="hidden" value={null} {...register(`searchContext.targetSearchEntitiesContext.targetSearchEntities.0.entityId`)}/>

    
    </>
    )
}

export { SearchFormHidden }