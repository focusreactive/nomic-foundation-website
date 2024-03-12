import React from 'react';

type Props = {
  boardName: string; // nomic.foundation, test: ashby-embed-demo-org
};

const AshbyBlock = ({ boardName = 'nomic.foundation' }: Props) => {
  React.useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.id = 'ashby-script';
    scriptTag.src = `https://jobs.ashbyhq.com/${boardName}/embed`;
    document.body.appendChild(scriptTag);
  }, [boardName]);

  return (
    <>
      <div id="ashby_embed"></div>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__ashbyBaseJobBoardUrl = "https://jobs.ashbyhq.com/${boardName}"`,
          // TODO:  use __Ashby.settings.customCssUrl for custom CSS
        }}
      />
    </>
  );
};

export default AshbyBlock;
