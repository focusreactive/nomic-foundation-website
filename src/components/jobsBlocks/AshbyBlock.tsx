import React, { useContext } from 'react';
import { AshbySection } from './styled/AshbyBlock.styled';
import { AshbyBlockPictureWrapperLeft, AshbyBlockPictureWrapperRight, JobBoard } from './styled/AshbyBlock.styled';
import {
  HiringProcessWrapper,
  HiringProcessTitle,
  HiringProcessLines,
  HiringProcessLinesItem,
  HiringProcessLinesTitle,
  HiringProcessItems,
  HiringProcessItem,
  HiringProcessList,
  HiringProcessListItem,
} from './styled/HiringProcessBlock.styled';
import ContainerSection from '../Container';
import AshbyLeft from '../../assets/graphics/light/ashby-left';
import AshbyLeftDark from '../../assets/graphics/dark/ashby-left-dark';
import AshbyRight from '../../assets/graphics/light/ashby-right';
import AshbyRightDark from '../../assets/graphics/dark/ashby-right-dark';
import Disk from '../../assets/graphics/light/disk';
import DiskDark from '../../assets/graphics/dark/disk-dark';
import { ThemeContext } from '../../themes';

type Props = {
  content: {
    title: string;
    stepTitleFirst: string;
    stepTitleSecond: string;
    items: HiringProcessItemsType[];
  };
  boardName?: string; // nomic.foundation, test: ashby-embed-demo-org
};

type HiringProcessItemsType = {
  list: HiringProcessListType[];
};

type HiringProcessListType = {
  title: string;
};

const AshbyBlock = ({ content, boardName = 'nomic.foundation' }: Props) => {
  const { theme } = useContext(ThemeContext);

  const cssFile = theme === 'LIGHT' ? 'ashby' : 'ashby-dark';

  React.useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.id = 'ashby-script';
    scriptTag.src = `https://jobs.ashbyhq.com/${boardName}/embed?version=2`;
    document.body.appendChild(scriptTag);

    //@ts-ignore
    window.__Ashby = {
      settings: {
        ashbyBaseJobBoardUrl: `https://jobs.ashbyhq.com/${boardName}`,
        customCssUrl: `https://focusreactive.github.io/nomic-foundation-website/public/css/${cssFile}.css`,
      },
    };

    return () => {
      scriptTag.remove();
    };
  }, [boardName, cssFile]);

  return (
    <>
      <AshbySection id='job-board'>
        <ContainerSection title='Join us'>
          <JobBoard id='ashby_embed'></JobBoard>

          <HiringProcessBlock content={content} />

          <AshbyBlockPictureWrapperLeft>
            <AshbyLeft className='light' />
            <AshbyLeftDark className='dark' />
          </AshbyBlockPictureWrapperLeft>
          <AshbyBlockPictureWrapperRight>
            <AshbyRight className='light' />
            <AshbyRightDark className='dark' />
          </AshbyBlockPictureWrapperRight>
        </ContainerSection>
      </AshbySection>
    </>
  );
};

const AshbyBlockContainer = ({ content }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <AshbyBlock
      key={theme}
      content={content}
    />
  );
};

const HiringProcessBlock = ({ content }: Props) => {
  return (
    <HiringProcessWrapper>
      <HiringProcessTitle>{content.title}</HiringProcessTitle>
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
  );
};

export default AshbyBlockContainer;
