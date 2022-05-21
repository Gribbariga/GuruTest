import AdsItem from "../adsItem/AdsItem";

import useData from '../../service/useRequest';
import Spinner from '../spinner/Spinner';
import ErrorMessage from "../errorMessage/ErrorMessage";


import разворот from '../../img/icon/разворот.svg'

import './adsList.scss';
import { useEffect, useState } from "react";

const AdsList = () => {


    const [data, setData] = useState(null);
    const [viewAll, setViewAll] = useState(false);

    const {getData,procces,setProcces} = useData();

    const setContent = (procces, Component, data = null) => {
        switch (procces) {
            case "load":
                return <Spinner/>                 
            case "success":
                return <Component data={data}/>;
            case "error":
                return <ErrorMessage/>
            default:
                throw new Error("Ошибка");
        }
    }

    useEffect(() => {
        getData()
            .then(updateData)
            .then(()=> setProcces('success'));
    }, [])

    const updateData = (data) => {
        setData(data)
    }

    const viewMore = () => {
        setViewAll(true);
    }

    const getCard = (number) => {

        const items = [];

        for (let i = 0 ; i < number; i++) {
            if(data != null) {
                items[i] = <AdsItem key={data[i].id} data={data[i]}/>
            }
            
        }
        return (
           <>
                <div className="ads__wrapper">
                    {items}
                </div>
                {moreButton}
           </>
        )

    } 

    // const items = getCard(viewAll?data.length: 16);
    const moreButton = viewAll?null:(<div className="ads__more-wrapper">
                                        <div className="ads__view-more" onClick={viewMore}>Показать еще <img src={разворот} alt="стрелочка" /></div>
                                    </div>);


    return (
        <main className="ads">
            <div className="ads-container">
                <h1 className="ads__title">Похожие объявления</h1>
                    {setContent(procces,() => getCard(viewAll?data.length: 16),)}
            </div>
        </main>
    )
}



export default AdsList;