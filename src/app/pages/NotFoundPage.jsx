
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <h1>Страница не найдена!</h1>
            <p>Вы попали на 404 страницу, вернитесь <Link to="/">Главную!</Link></p>
        </div>
    )
}

export default NotFoundPage;