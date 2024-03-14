import React from 'react';
import { AshbySection } from './styled/AshbyBlock.styled';
import { AshbyBlockPictureWrapperLeft, AshbyBlockPictureWrapperRight } from './styled/AshbyBlock.styled';
import ContainerSection from '../Container';
import AshbyLeft from '../../assets/graphics/light/ashby-left';
import AshbyLeftDark from '../../assets/graphics/dark/ashby-left-dark';
import AshbyRight from '../../assets/graphics/light/ashby-right';
import AshbyRightDark from '../../assets/graphics/dark/ashby-right-dark';

type Props = {
  boardName?: string; // nomic.foundation, test: ashby-embed-demo-org
};

const AshbyBlock = ({ boardName = 'nomic.foundation' }: Props) => {
  React.useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.id = 'ashby-script';
    scriptTag.src = `https://jobs.ashbyhq.com/${boardName}/embed?version=2`;
    document.body.appendChild(scriptTag);
  }, [boardName]);

  return (
    <>
      <AshbySection>
        <ContainerSection>
          <div id='ashby_embed'></div>

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.__Ashby = {
                settings: {
                  ashbyBaseJobBoardUrl: "https://jobs.ashbyhq.com/${boardName}",
                  customCssUrl: "https://focusreactive.github.io/nomic-foundation-website/public/css/ashby.css",
                }
              }`,
            }}
          />
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

export default AshbyBlock;
