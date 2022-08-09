import SearchBar from '@components/search-bar';
import SearchResult from '@components/search-result';
import useInput from '@hooks/use-input';
import { resultType } from '@typings/search';
import { userSearch } from 'dummy';
import React, { useCallback, useState } from 'react';

const SearchPage = () => {
  const [searchValue, onChangeSearchValue, setSearchValue] = useInput('');
  const [searchResult, setSearchResult] = useState<null | Array<resultType>>(null);
  const searchHandler = useCallback(() => {
    console.log(searchValue, ' 로 친구 찾기');
    /* 서치 아이콘 누르면 searchResult 불러옴 */
    const result = userSearch;
    setSearchResult(result);
    setSearchValue('');
  }, [searchValue]);
  return (
    <div style={{ padding: '30px 20px' }}>
      <SearchBar
        value={searchValue}
        changeHandler={onChangeSearchValue}
        placeholder='친구의 닉네임을 검색해주세요'
        searchHandler={searchHandler}
      />
      <SearchResult result={searchResult} />
    </div>
  );
};

export default SearchPage;
