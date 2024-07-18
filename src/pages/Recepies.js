import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import PreviousSearches from '../components/PreviousSearches';
import Footer from '../components/footer';
import RecipeCard from '../components/RecipeCard';
import RecipeCard1 from '../components/RecipeCard1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Recepies = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const YOUR_APP_ID = '94bf3303';
  const YOUR_APP_KEY = '70b06fe08a633d45bb090b4a322ccb18';
  const images = [
    '/img/top-chiefs/img_1.jpg',
    '/img/top-chiefs/img_2.jpg',
    '/img/top-chiefs/img_3.jpg',
    '/img/top-chiefs/img_4.jpg',
    '/img/top-chiefs/img_5.jpg',
    '/img/top-chiefs/img_6.jpg',
  ];
  const [randomImage, setRandomImage] = useState(images[0]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const searchQuery = query.get('search');
    if (searchQuery) {
      setSearch(searchQuery);
      fetchData(searchQuery);
    }
  }, [location.search]);

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  };

  const fetchData = (searchTerm) => {
    axios
      .get(
        `https://api.edamam.com/search?q=${searchTerm}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=40&calories=591-722&health=alcohol-free`
      )
      .then((data) => {
        setData(data.data.hits);
      });
    getRandomImage();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/recipes/?search=${search}`);
    fetchData(search);
  };

  const recipes = [
    {
      title: 'Chicken Pan Pizza',
      image: '/img/gallery/img_1.jpg',
      authorImg: '/img/top-chiefs/img_1.jpg',
    },
    {
      title: 'Spaghetti and Meatballs',
      image: '/img/gallery/img_4.jpg',
      authorImg: '/img/top-chiefs/img_2.jpg',
    },
    {
      title: 'American Cheese Burger',
      image: '/img/gallery/img_5.jpg',
      authorImg: '/img/top-chiefs/img_3.jpg',
    },
    {
      title: 'Mutton Biriyani',
      image: '/img/gallery/img_6.jpg',
      authorImg: '/img/top-chiefs/img_5.jpg',
    },
    {
      title: 'Japanese Sushi',
      image: '/img/gallery/img_10.jpg',
      authorImg: '/img/top-chiefs/img_6.jpg',
    },
  ].sort(() => Math.random() - 0.5);

  return (
    <div>
      <PreviousSearches />
      <div className='search-box'>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            placeholder='search for recipe...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type='submit' className='btn'>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
      <div className='recipes-container'>
        {data.length >= 1
          ? data.map((data, index) => (
              <RecipeCard key={index} recipe={data} im={randomImage} />
            ))
          : recipes.map((recipe, index) => (
              <RecipeCard1 key={index} recipe={recipe} />
            ))}
      </div>
      <Footer />
    </div>
  );
};

export default Recepies;
