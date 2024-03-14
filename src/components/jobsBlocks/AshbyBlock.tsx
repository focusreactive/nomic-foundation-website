import React, { useContext } from 'react';
import { AshbySection } from './styled/AshbyBlock.styled';
import { AshbyBlockPictureWrapperLeft, AshbyBlockPictureWrapperRight } from './styled/AshbyBlock.styled';
import ContainerSection from '../Container';
import AshbyLeft from '../../assets/graphics/light/ashby-left';
import AshbyLeftDark from '../../assets/graphics/dark/ashby-left-dark';
import AshbyRight from '../../assets/graphics/light/ashby-right';
import AshbyRightDark from '../../assets/graphics/dark/ashby-right-dark';
import { ThemeContext } from '../../themes';

type Props = {
  boardName?: string; // nomic.foundation, test: ashby-embed-demo-org
};

const AshbyBlock = ({ boardName = 'nomic.foundation' }: Props) => {
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
      <AshbySection>
        <ContainerSection title='Join us'>
          <div id='ashby_embed'></div>

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

const AshbyBlockContainer = () => {
  const { theme } = useContext(ThemeContext);
  return <AshbyBlock key={theme} />;
};

export default AshbyBlockContainer;
