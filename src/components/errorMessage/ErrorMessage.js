import Error from './Error.jpg';



const ErrorMessage = () => {




    return (
        <div style={{margin:"0 auto"}}>
            <img style={{width:"250px", height:"250px", objectFit:"cover", display:"block", margin:"0 auto"}} src={Error} alt="orkError"/>
            <div style={{margin:"0 auto",width:"250px", textAlign:"center"}} className="errorMessage">Мы ищем таго глупого юдишку что это все сламал чтобы пастукать его</div>
        </div>
    ) 
}


export default ErrorMessage;