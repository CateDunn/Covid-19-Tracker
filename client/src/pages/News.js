import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navigation/Navbar';
import NewsComp from '../components/newsComponent/NewsComp';
import '../components/newsComponent/news.css';

const NewsPage = () => {
  return (
    <>
      <Header />
      <Navbar />

      <h3 className="text-center pageTitle">NY Times Articles on COVID-19</h3>

      <div className="row newsContentWrapper">

        <NewsComp />

      </div>
      <Footer />

    </>
  )
}
export default NewsPage;