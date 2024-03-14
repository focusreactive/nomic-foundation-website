import React from 'react';
import ContainerSection from '../Container';

import {
  HiringProcessSection,
  HiringProcessWrapper,
  HiringProcessLines,
  HiringProcessLinesItem,
  HiringProcessLinesTitle,
  HiringProcessItems,
  HiringProcessItem,
  HiringProcessList,
  HiringProcessListItem,
} from './styled/HiringProcessBlock.styled';
import Disk from '../../assets/graphics/light/disk';
import DiskDark from '../../assets/graphics/dark/disk-dark';

type Props = {
  content: {
    title: string;
    stepTitleFirst: string;
    stepTitleSecond: string;
    items: HiringProcessItemsType[];
  };
};

type HiringProcessItemsType = {
  list: HiringProcessListType[];
};

type HiringProcessListType = {
  title: string;
};

const HiringProcessBlock = ({ content }: Props) => {
  return (
    <>
      <HiringProcessSection>
        <ContainerSection title={content.title}>
          <HiringProcessWrapper>
            <HiringProcessLines>
              <HiringProcessLinesItem>
                <HiringProcessLinesTitle>{content.stepTitleFirst}</HiringProcessLinesTitle>
              </HiringProcessLinesItem>
              <HiringProcessLinesItem>
                <HiringProcessLinesTitle>{content.stepTitleSecond}</HiringProcessLinesTitle>
              </HiringProcessLinesItem>
            </HiringProcessLines>
            <HiringProcessItems>
              {content.items.map((item, index) => (
                <HiringProcessItem key={index}>
                  <Disk className='light' />
                  <DiskDark className='dark' />
                  <HiringProcessList>
                    {item.list.map((listItem) => (
                      <HiringProcessListItem key={listItem.title}>{listItem.title}</HiringProcessListItem>
                    ))}
                  </HiringProcessList>
                </HiringProcessItem>
              ))}
            </HiringProcessItems>
          </HiringProcessWrapper>
        </ContainerSection>
      </HiringProcessSection>
    </>
  );
};

export default HiringProcessBlock;
