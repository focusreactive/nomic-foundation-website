import { CTAContent } from '../../types/commonTypes';
import { Button } from '../ui/Button';
import {
  ProjectItemContainer,
  ProjectItemTopDecoration,
  ProjectItemDecoration,
  ProjectsContainer,
  ProjectsSubtitle,
  ProjectsTitle,
  StyledProjects,
  ProjectItemInnerSection,
  ProjectItemPicWrapper,
  ProjectItemMobilePicWrapper,
  ProjectItemPictureSection,
  ProjectItemContentSection,
  ProjectItemContentSectionTitle,
  ProjectItemSectionsDivider,
  ProjectItemContentSectionText,
  ButtonWrapper,
  ProjectItemPictureLeftDecoration,
} from './styled/ProjectsBlock.styled';

type Project = {
  title: string;
  text: string;
  cta: CTAContent;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  IconDark?: React.FC<React.SVGProps<SVGSVGElement>>;
  PictureDesk: React.FC<React.SVGProps<SVGSVGElement>>;
  PictureDeskDark: React.FC<React.SVGProps<SVGSVGElement>>;
  PictureMobile: React.FC<React.SVGProps<SVGSVGElement>>;
  PictureMobileDark: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
};

type Props = {
  content: {
    title: string;
    subtitle: string;
    projects: Project[];
  };
};

const ProjectItem = ({
  title,
  text,
  cta,
  Icon,
  PictureDesk,
  PictureDeskDark,
  PictureMobile,
  PictureMobileDark,
  color,
  isReversed,
  IconDark,
}: Project & { color: string; isReversed: boolean }) => {
  return (
    <ProjectItemContainer className={isReversed ? 'reversed' : ''}>
      <ProjectItemTopDecoration color={color}>
        <ProjectItemDecoration color={color} className='left' />
        <ProjectItemDecoration color={color} className='right' />
      </ProjectItemTopDecoration>
      <ProjectItemInnerSection color={color}>
        <ProjectItemPictureSection color={color}>
          <ProjectItemPicWrapper>
            <ProjectItemPictureLeftDecoration color={color} className={`item-${title.toLowerCase()}`} />
            <PictureDesk className='light' />
            <PictureDeskDark className='dark' />
          </ProjectItemPicWrapper>
          <ProjectItemMobilePicWrapper className={`item-${title.toLowerCase()}`}>
            <PictureMobile className='light' />
            <PictureMobileDark className='dark' />
          </ProjectItemMobilePicWrapper>
        </ProjectItemPictureSection>
        <ProjectItemContentSection color={color}>
          <ProjectItemSectionsDivider color={color} />
          <ProjectItemContentSectionTitle>
            <Icon className={!!IconDark ? 'light' : ''} />
            {IconDark && <IconDark className='dark' />}
            {title !== 'Hardhat' && title}
          </ProjectItemContentSectionTitle>
          <ProjectItemContentSectionText>{text}</ProjectItemContentSectionText>
          <ButtonWrapper>
            <Button
              href={cta.href}
              label={cta.label}
              color={title === 'Hardhat' ? color : undefined}
            />
          </ButtonWrapper>
        </ProjectItemContentSection>
      </ProjectItemInnerSection>
    </ProjectItemContainer>
  );
};

const Projects = ({ content }: Props) => {
  const { title, subtitle, projects } = content;
  return (
    <StyledProjects>
      <ProjectsTitle>{title}</ProjectsTitle>
      <ProjectsSubtitle>{subtitle}</ProjectsSubtitle>
      <ProjectsContainer>
        {projects.map((projectProps, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <ProjectItem
              key={projectProps.title}
              {...projectProps}
              isReversed={isReversed}
            />
          );
        })}
      </ProjectsContainer>
    </StyledProjects>
  );
};

export default Projects;
