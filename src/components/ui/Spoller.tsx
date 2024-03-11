import React, { useState } from 'react';
import { SpollerItem, SpollerItemTitle, SpollerItemBody, SpollerItemCaret } from './styled/Spoller.styled';
import PlusIcon from '../../assets/icons/plus';
import MinusIcon from '../../assets/icons/minus';
import { cx } from 'linaria';

type Spoller = {
  children: React.ReactNode | null;
  title: string;
};

const Spoller = ({ children, title }: Spoller) => {
  const [spoller, setSpoller] = useState(false);
  const toggleSpollerHandler = () => {
    setSpoller(!spoller);
  };
  return (
    <SpollerItem className={cx(spoller && 'is-active')}>
      <SpollerItemTitle
        onClick={toggleSpollerHandler}
        className='spoller-title'
      >
        {title}
        <SpollerItemCaret className='spoller-caret'>
          <PlusIcon className='plus' />
          <MinusIcon className='minus' />
        </SpollerItemCaret>
      </SpollerItemTitle>
      <SpollerItemBody className='spoller-body'>{children}</SpollerItemBody>
    </SpollerItem>
  );
};
export default Spoller;
