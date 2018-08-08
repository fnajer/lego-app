import React, { Component } from 'react';

import './styles.css';

class Menu extends Component {
  render() {
    return (
      <nav class="nav nav-pills flex-column flex-sm-row">
        <a class="flex-sm-fill text-sm-center nav-link active" href="#">Главная</a>
        <a class="flex-sm-fill text-sm-center nav-link" href="#">Новости</a>
        <a class="flex-sm-fill text-sm-center nav-link" href="#">Товары</a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#">О нас</a>
        <a class="flex-sm-fill text-sm-center nav-link disabled" href="#">Аккаунт</a>
      </nav>
    );
  }
}

export default Menu;