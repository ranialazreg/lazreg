
import React from 'react';
import './LeHeader.css';

function LeHeader() {
     return (
<header className="LeHeader">
    <nav className="LeHeader-nav">
      <ul className="LeHeader-list">
    <li className="LeHeader-item"><a href="/" className="LeHeader-link">Accueil</a></li>
    <li className="LeHeader-item"><a href="/produits" className="LeHeader-link">Produits</a></li>
    <li className="LeHeader-item"><a href="/panier" className="LeHeader-link">Panier</a></li>
      </ul>
    </nav>
    </header>
 );
}
export default LeHeader;