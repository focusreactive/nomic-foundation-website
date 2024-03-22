import React, { useState } from 'react';
import { SpollerItem, SpollerItemTitle, SpollerItemBody, SpollerItemCaret } from './styled/Spoller.styled';
import PlusIcon from '../../assets/icons/plus';
import MinusIcon from '../../assets/icons/minus';
import { cx } from 'linaria';

type Spoller = {
  children: string;
  title: string;
};

const Spoller = ({ children, title }: Spoller) => {
  const [spoller, setSpoller] = useState(false);
  const toggleSpollerHandler = () => {
    setSpoller(!spoller);
  };
  return (
    <SpollerItem
      className={cx(spoller && 'is-active')}
      onClick={toggleSpollerHandler}
    >
      <SpollerItemTitle className='spoller-title'>
        {title}
        <SpollerItemCaret className='spoller-caret'>
          <PlusIcon className='plus' />
          <MinusIcon className='minus' />
        </SpollerItemCaret>
      </SpollerItemTitle>
      <SpollerItemBody
        className='spoller-body'
        dangerouslySetInnerHTML={{
          __html: children,
        }}
      />
    </SpollerItem>
  );
};
export default Spoller;
