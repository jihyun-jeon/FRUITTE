import axios from 'axios';
import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import ProductTable from './components/ProductTable';
import OptionTable from './components/OptionTable';
import Filter from './components/Filter';
import { chunk } from '../../utils/sliceArr';
import { lightTheme } from '../../styles/theme';
import { Link, useLocation, useParams } from 'react-router-dom';

const PAGE_SIZE = 8;

const RegisterList = () => {
  const { page = 1 } = useParams();
  const pageIndex = +page - 1;

  const [productData, setProductData] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchValue = queryParams.get('product'); // 유자
  const displayStatus = queryParams.get('show');

  let filterData = productData;

  if (searchValue || displayStatus) {
    filterData = productData.filter(({ title, isShow }) => {
      if (searchValue && displayStatus) {
        return title.includes(searchValue) && `${isShow}` === displayStatus;
      }

      if (searchValue) {
        return title.includes(searchValue);
      }

      if (displayStatus) {
        return `${isShow}` === displayStatus;
      }
    });
  }

  const pageCount = Math.ceil(filterData.length / PAGE_SIZE);
  const pages = new Array(pageCount).fill(null);

  let pageSliceArr = chunk(filterData, PAGE_SIZE);
  let manufacturedData = [];

  pageSliceArr[pageIndex]?.forEach(obj => {
    const updatedArr = [];

    updatedArr.push({ ...obj, type: 'product' });

    obj.options.forEach((option, idx) => {
      if (idx === 0) {
        return;
      }
      updatedArr.push({ ...option, type: 'option' });
    });
    manufacturedData = [...manufacturedData, ...updatedArr];
  });

  const getRequest = async () => {
    const {
      data: { products_list },
    } = await axios('/data.json');

    setProductData(products_list);
  };

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <Container>
      <Filter productData={productData} setProductData={setProductData} getRequest={getRequest} />

      <Table>
        <tbody>
          <HeadTr>
            {TITLES.map((data, idx) => (
              <TableTitle key={idx} width={data.width}>
                {data.title}
              </TableTitle>
            ))}
          </HeadTr>
          {manufacturedData.map((data, idx) => {
            if (data.type === 'product') {
              return <ProductTable key={idx} data={data} setProductData={setProductData} />;
            } else {
              return <OptionTable key={idx} data={data} />;
            }
          })}
        </tbody>
      </Table>

      <div>
        {pages.map((_, idx) => (
          <Link key={idx} to={`/register_list/${idx + 1}`}>
            {idx + 1}
          </Link>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${lightTheme.bgColor};
  color: ${lightTheme.textColor};
  margin: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border: 1px solid black;
`;

const HeadTr = styled.tr`
  background-color: ${lightTheme.ownColor};
`;

const TableTitle = styled.td`
  border: 0.7px solid black;
  vertical-align: middle;
  height: 30px;
  padding-left: 4px;
  text-align: center;
  width: ${prop => prop.width}%;
`;

const PaginationBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export default RegisterList;

const TITLES = [
  { title: '삭제', width: 3 },
  { title: '품번', width: 3 },
  { title: '이미지', width: 10 },
  { title: '상품명', width: 20 },
  { title: '상품 옵션', width: 16 },
  { title: '가격(할인가)', width: 7 },
  { title: '재고', width: 6 },
  { title: '배송방법', width: 6 },
  { title: '배송비', width: 6 },
  { title: '상태', width: 10 },
  { title: '마지막 수정일', width: 8 },
  { title: '상품노출', width: 16 },
];
