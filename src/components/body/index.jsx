import './styles.css'
import Card from "./container/card";
import { CatalogueContext } from "../../providers/products";
import { useContext } from 'react';


function BodyContainer () {

    const { catalogue } = useContext(CatalogueContext)

    return (
        <div className="body-container">
            {catalogue.map((elem) => <Card key={elem.id} product={elem}/>)}
        </div>
    )
}

export default BodyContainer
