import React, { useState } from 'react';
import styled from 'styled-components';
import products from '../../api/data.json';
import { lightTheme } from '../../styles/theme';
import Pagination from '../../components/Pagination';
import ProductItem from './components/ProductItem';
import { chunk } from '../../utils/sliceArr';

const pageSliceArr = chunk(products.products_list, 10);
const ProductList = () => {
  const [pageNum, setPageNum] = useState(0);

  return (
    <Container>
      <HeaderTextBox>
        FRUITTE STORE <span>{products.products_list.length}</span>
      </HeaderTextBox>
      <ContainerGridBox>
        {pageSliceArr[pageNum].map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ContainerGridBox>
      <PaginationBox>
        <Pagination pageSliceArr={pageSliceArr} pageNum={pageNum} setPageNum={setPageNum} />
      </PaginationBox>
    </Container>
  );
};

export default ProductList;

const Container = styled.div`
  width: 100%;
  padding: 0 10rem;
  margin: 0 auto;

  @media (max-width: 650px) {
    padding: 0 5rem;
  }

  @media (max-width: 490px) {
    padding: 0 1rem;
  }
`;

const HeaderTextBox = styled.p`
  font-size: 16px;
  font-weight: 500;

  span {
    color: ${lightTheme.ownColor};
  }
`;

const PaginationBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const ContainerGridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, auto));
  gap: 100px 10px;
`;
