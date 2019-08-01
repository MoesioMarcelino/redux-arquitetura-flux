import React, { Component } from 'react';
import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default class Home extends Component {
  render() {
    return (
      <ProductList>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?resize=326:*"
            alt="Sapato"
          />
          <strong>Tênis muito legal</strong>
          <span>R$ 129,90</span>
          <button>
            <div>
              <MdShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?resize=326:*"
            alt="Sapato"
          />
          <strong>Tênis muito legal</strong>
          <span>R$ 129,90</span>
          <button>
            <div>
              <MdShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?resize=326:*"
            alt="Sapato"
          />
          <strong>Tênis muito legal</strong>
          <span>R$ 129,90</span>
          <button>
            <div>
              <MdShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?resize=326:*"
            alt="Sapato"
          />
          <strong>Tênis muito legal</strong>
          <span>R$ 129,90</span>
          <button>
            <div>
              <MdShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?resize=326:*"
            alt="Sapato"
          />
          <strong>Tênis muito legal</strong>
          <span>R$ 129,90</span>
          <button>
            <div>
              <MdShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
        <li>
          <img
            src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?resize=326:*"
            alt="Sapato"
          />
          <strong>Tênis muito legal</strong>
          <span>R$ 129,90</span>
          <button>
            <div>
              <MdShoppingCart size={16} color="#FFF" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      </ProductList>
    );
  }
}
