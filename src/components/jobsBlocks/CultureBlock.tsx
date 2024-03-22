import React from 'react';
import ContainerSection from '../Container';
import {
  CultureBlockSection,
  CultureBlockPictureWrapperLeft,
  CultureBlockPictureWrapperRight,
  CultureBlockSuptitle,
  Reviews,
  ReviewsItem,
  ReviewsItemText,
  ReviewsItemFooter,
  ReviewsItemName,
  ReviewsItemProfession,
  CultureContents,
  CultureContentsItem,
  CultureContentsItemInfo,
  CultureContentsItemTitlte,
  CultureContentsItemText,
  CultureContentsItemPicture,
  Stats,
  StatItem,
  StatItemTitle,
} from './styled/CultureBlock.styled';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Arrow from '../ui/Arrow';
import CultureLeft from '../../assets/graphics/light/culture-left';
import CultureRight from '../../assets/graphics/light/culture-right';
import CultureRightDark from '../../assets/graphics/dark/culture-right-dark';
import CultureLeftDark from '../../assets/graphics/dark/culture-left-dark';

type Props = {
  content: {
    title: string;
    suptitle: string;
    reviews: Review[];
    contents: Content[];
  };
};

type Review = {
  text: string;
  name: string;
  link: string;
  profession: string;
};

type Content = {
  title: string;
  text: string;
  Picture: React.FC<React.SVGProps<SVGSVGElement>>;
  PictureDark: React.FC<React.SVGProps<SVGSVGElement>>;
  stats?: Stats[];
};

type Stats = {
  title: string;
};

const ContentItem = ({ title, text, Picture, PictureDark, stats }: Content) => {
  return (
    <CultureContentsItem>
      <CultureContentsItemInfo>
        <CultureContentsItemTitlte>{title}</CultureContentsItemTitlte>
        <CultureContentsItemText>{text}</CultureContentsItemText>
      </CultureContentsItemInfo>
      <CultureContentsItemPicture>
        <Picture className='light' />
        <PictureDark className='dark' />

        <Stats>
          {stats &&
            stats.map((stat, index) => (
              <StatItem key={index}>
                <Arrow />
                <StatItemTitle>{stat.title}</StatItemTitle>
              </StatItem>
            ))}
        </Stats>
      </CultureContentsItemPicture>
    </CultureContentsItem>
  );
};

const CultureBlock = ({ content }: Props) => {
  return (
    <CultureBlockSection>
      <ContainerSection title={content.title}>
        <CultureBlockSuptitle>{content.suptitle}</CultureBlockSuptitle>

        <Reviews>
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={3}
            pagination
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              100: {
                slidesPerView: 1,
              },
            }}
          >
            {content.reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <ReviewsItem href={review.link}>
                  <ReviewsItemText>{review.text}</ReviewsItemText>
                  <ReviewsItemFooter>
                    <ReviewsItemName>{review.name},</ReviewsItemName>
                    <ReviewsItemProfession>{review.profession}</ReviewsItemProfession>
                  </ReviewsItemFooter>
                </ReviewsItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reviews>
        <CultureContents>
          {content.contents.map((item, index) => (
            <ContentItem
              key={index}
              {...item}
            />
          ))}
        </CultureContents>

        <CultureBlockPictureWrapperLeft>
          <CultureLeft className='light' />
          <CultureLeftDark className='dark' />
        </CultureBlockPictureWrapperLeft>
        <CultureBlockPictureWrapperRight>
          <CultureRight className='light' />
          <CultureRightDark className='dark' />
        </CultureBlockPictureWrapperRight>
      </ContainerSection>
    </CultureBlockSection>
  );
};

export default CultureBlock;
