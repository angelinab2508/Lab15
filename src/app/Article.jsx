
import '../css/Article.css';

import {Route, Routes} from "react-router-dom";

import IndexPage from "./pages/IndexPage";
import NewsPage from "./pages/NewsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

const Article = () => {
    return (
        <article>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </article>
    );
}

export default Article;