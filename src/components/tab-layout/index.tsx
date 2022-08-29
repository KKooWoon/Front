import React, { ReactNode } from 'react';
import { TabHeader, TabItem, TabLayoutWrapper } from './tab.style';
interface Props {
  children: ReactNode;
  items: Array<string>;
  now: string;
  onClickHandler: (v: string) => void;
}
const TabLayout = ({ children, items, now, onClickHandler }: Props) => {
  return (
    <TabLayoutWrapper>
      <TabHeader>
        {items.map((v, i) => (
          <TabItem className={now === v ? 'active' : ''} key={i} onClick={() => onClickHandler(v)}>
            {v}
          </TabItem>
        ))}
      </TabHeader>
      <section style={{padding:'20px'}}>{children}</section>
    </TabLayoutWrapper>
  );
};

export default TabLayout;
