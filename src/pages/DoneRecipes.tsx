import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function DoneRecipes() {
  const navigate = useNavigate();
  const handleBackProfile = () => {
    navigate('/profile');
  };
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText('http://localhost:3000/meals/52771');
    setCopied(true);
  };

  return (
    <>
      <button
        data-testid="profile-back-btn"
        onClick={ handleBackProfile }
      >
        Voltar
      </button>
      <Header title="Done Recipes" />
      <p data-testid="filter-by-all-btn">O</p>
      <p data-testid="filter-by-meal-btn">O</p>
      <p data-testid="filter-by-drink-btn">O</p>
      <p data-testid="0-horizontal-image">O</p>
      <p data-testid="0-horizontal-top-text">O</p>
      <p data-testid="0-horizontal-name">O</p>
      <p data-testid="0-horizontal-done-date">O</p>
      <button
        data-testid="0-horizontal-share-btn"
        onClick={ handleShare }
      >
        Compartilhar
        <Link
          to="http://localhost:3000/meals/52771"
        />
      </button>
      {copied && <div>Link copied!</div>}
      <p data-testid="0-Pasta-horizontal-tag">O</p>
      <p data-testid="0-Curry-horizontal-tag">O</p>
      <p data-testid="1-horizontal-image">O</p>
      <p data-testid="1-horizontal-top-text">O</p>
      <p data-testid="1-horizontal-nam">O</p>
      <button
        data-testid="1-horizontal-share-btn"
        onClick={ handleShare }
      >
        Compartilhar
      </button>
      {copied && <div>Link copied!</div>}
      <p data-testid="1-horizontal-done-date">O</p>
      <Footer />
    </>
  );
}

export default DoneRecipes;
// Fazendo o Push de novo
