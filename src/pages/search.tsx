import { getUserSearch } from '@apis/user';
import SearchBar from '@components/search-bar';
import SearchResult from '@components/search-result';
import useInput from '@hooks/use-input';
import { resultType } from '@typings/search';
import React, { useCallback, useState } from 'react';

const SearchPage = () => {
  const [searchValue, onChangeSearchValue, setSearchValue] = useInput('');
  const [searchResult, setSearchResult] = useState<null | Array<resultType>>(null);
  const searchHandler = useCallback(() => {
    const {data:result, isLoading} = getUserSearch(searchValue);
    setSearchResult(result ? result : null);
    setSearchValue('');
  }, [searchValue]);
  // todo : 로딩 에러 안나는지 체크
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
