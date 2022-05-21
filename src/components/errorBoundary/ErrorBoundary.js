import { Component } from "react";

import ErrorMessage from "../errorMessage/ErrorMessage";



class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
      static getDerivedStateFromError(error) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return { hasError: true };
      }
    
      componentDidCatch(error, errorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        console.log(error, errorInfo);
      }
    
      render() {
        if (this.state.hasError) {
          // Можно отрендерить запасной UI произвольного вида
          return <ErrorMessage/>;
        }
    
        return this.props.children; 
      }
}


export default ErrorBoundary;