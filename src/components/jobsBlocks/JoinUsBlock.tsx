import React from 'react';
import ContainerSection from '../Container';

import {
  JoinUsBlockSection,
  JoinUsBlockRows,
  JoinUsBlockWrapper,
  JoinUsBlockPictureWrapperLeft,
  JoinUsBlockPictureWrapperRight,
  JoinUsBlockWrapperTitlte,
  Filter,
  FilterTitle,
  FilterItems,
  FilterItem,
  Select,
  SelectOption,
  JoinUsBlockContent,
  JoinUsBlockContentTitle,
  JoinUsBlockContentList,
  JoinUsBlockContentListItem,
  JoinUsBlockContentListItemTitle,
  JoinUsBlockContentListItemDescription,
  HiringProcess,
  HiringProcessLines,
  HiringProcessLinesItem,
  HiringProcessLinesTitle,
  HiringProcessItems,
  HiringProcessItem,
  HiringProcessList,
  HiringProcessListItem,
} from './styled/JoinUsBlock.styled';
import Disk from '../../assets/graphics/light/disk';
import DiskDark from '../../assets/graphics/dark/disk-dark';
import JoinUsLeft from '../../assets/graphics/light/join-us-left';
import JoinUsLeftDark from '../../assets/graphics/dark/join-us-left-dark';
import JoinUsRight from '../../assets/graphics/light/join-us-right';
import JoinUsRightDark from '../../assets/graphics/dark/join-us-right-dark';

type Props = {
  content: {
    title: string;
    hiringProcess: HiringProcessType;
  };
};

type HiringProcessType = {
  title: string;
  stepTitleFirst: string;
  stepTitleSecond: string;
  items: HiringProcessItemsType[];
};

type HiringProcessItemsType = {
  list: HiringProcessListType[];
};

type HiringProcessListType = {
  title: string;
};

const JoinUsBlock = ({ content }: Props) => {
  return (
    <>
      <JoinUsBlockSection>
        <ContainerSection title={content.title}>
          <JoinUsBlockRows>
            <JoinUsBlockWrapper>
              <JoinUsBlockWrapperTitlte>Open Positions (4)</JoinUsBlockWrapperTitlte>
              <JoinUsFilter />

              <JoinUsBlockContent>
                <JoinUsBlockContentTitle>Engineering</JoinUsBlockContentTitle>
                <JoinUsBlockContentList>
                  <JoinUsBlockContentListItem>
                    <JoinUsBlockContentListItemTitle href='#'>
                      Senior Backend Engineer (TypeScript), Ignition
                    </JoinUsBlockContentListItemTitle>
                    <JoinUsBlockContentListItemDescription>
                      Engineering · Remote, EMEA, Americas · Full time
                    </JoinUsBlockContentListItemDescription>
                  </JoinUsBlockContentListItem>
                  <JoinUsBlockContentListItem>
                    <JoinUsBlockContentListItemTitle href='#'>
                      Senior Backend Engineer (TypeScript), Ignition
                    </JoinUsBlockContentListItemTitle>
                    <JoinUsBlockContentListItemDescription>
                      Engineering · Remote, EMEA, Americas · Full time
                    </JoinUsBlockContentListItemDescription>
                  </JoinUsBlockContentListItem>
                  <JoinUsBlockContentListItem>
                    <JoinUsBlockContentListItemTitle href='#'>
                      Senior Backend Engineer (TypeScript), Ignition
                    </JoinUsBlockContentListItemTitle>
                    <JoinUsBlockContentListItemDescription>
                      Engineering · Remote, EMEA, Americas · Full time
                    </JoinUsBlockContentListItemDescription>
                  </JoinUsBlockContentListItem>
                  <JoinUsBlockContentListItem>
                    <JoinUsBlockContentListItemTitle href='#'>
                      Senior Backend Engineer (TypeScript), Ignition
                    </JoinUsBlockContentListItemTitle>
                    <JoinUsBlockContentListItemDescription>
                      Engineering · Remote, EMEA, Americas · Full time
                    </JoinUsBlockContentListItemDescription>
                  </JoinUsBlockContentListItem>
                </JoinUsBlockContentList>
              </JoinUsBlockContent>
            </JoinUsBlockWrapper>
            <JoinUsBlockWrapper className='hiring-process'>
              <JoinUsBlockWrapperTitlte>{content.hiringProcess.title}</JoinUsBlockWrapperTitlte>
              <HiringPricess content={content.hiringProcess} />
            </JoinUsBlockWrapper>
          </JoinUsBlockRows>

          <JoinUsBlockPictureWrapperLeft>
            <JoinUsLeft className='light' />
            <JoinUsLeftDark className='dark' />
          </JoinUsBlockPictureWrapperLeft>
          <JoinUsBlockPictureWrapperRight>
            <JoinUsRight className='light' />
            <JoinUsRightDark className='dark' />
          </JoinUsBlockPictureWrapperRight>
        </ContainerSection>
      </JoinUsBlockSection>
    </>
  );
};

const JoinUsFilter = () => {
  return (
    <Filter>
      <FilterTitle>Filters:</FilterTitle>
      <FilterItems>
        <FilterItem>
          <Select>
            <SelectOption value=''>Department</SelectOption>
            <SelectOption value=''>Department</SelectOption>
            <SelectOption value=''>Department</SelectOption>
          </Select>
        </FilterItem>
        <FilterItem>
          <Select>
            <SelectOption value=''>Location</SelectOption>
            <SelectOption value=''>Location</SelectOption>
            <SelectOption value=''>Location</SelectOption>
          </Select>
        </FilterItem>
        <FilterItem>
          <Select>
            <SelectOption value=''>Employment Type</SelectOption>
            <SelectOption value=''>Employment Type</SelectOption>
            <SelectOption value=''>Employment Type</SelectOption>
          </Select>
        </FilterItem>
      </FilterItems>
    </Filter>
  );
};

const HiringPricess = ({ content }: { content: HiringProcessType }) => {
  return (
    <HiringProcess>
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
    </HiringProcess>
  );
};

export default JoinUsBlock;
