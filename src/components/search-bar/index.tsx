import React from 'react';
import { InputWrapper } from './search.style';
import { ReactComponent as SearchIcon } from '@assets/icons/search.svg';
interface Props {
  value:string;
  placeholder:string;
  changeHandler:(e:any) =>void;
  searchHandler:()=>void;
}
const SearchBar = ({value, changeHandler, placeholder, searchHandler}:Props) => {
  return (
    <InputWrapper>
      <SearchIcon onClick={searchHandler} />
      <input value={value} onChange={changeHandler} placeholder={placeholder} />
    </InputWrapper>
  )
}

export default SearchBar;