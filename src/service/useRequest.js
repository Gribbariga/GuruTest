


import useHttp from "../hooks/https.hook";



const useData = () => {

    const url = "https://6075786f0baf7c0017fa64ce.mockapi.io/products";

    const {request, setProcces, procces} = useHttp();
    
    const getData = async () => {

        const res = await request(url);

        return res.map(transformData);
    }


    const transformData = (item) => {

        const date = new Date(item.date);
        const month = date.getMonth()+1;
        const day = date.getDate();
        return {
            id: item.id,
            oldPrice: item.oldPrice,
            price: item.price,
            title: item.title,
            seen: item.seen,
            locality: item.locality.slice(0, 15),
            date: {day:day<10?`0${day}`:day,
                   month:month<10?`0${month}`:month,
                   year:date.getFullYear().toString().slice(2),
                   hours:date.getUTCHours(),
                   minutes:date.getMinutes()}         
        }
    } 

    return {getData, setProcces, procces};
}



export default useData;