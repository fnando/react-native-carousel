import { RefAttributes } from "react";
import { ScrollView } from "react-native";

declare module "react-native-carousel";
declare function Carousel(
  props: CarouselProps & RefAttributes<CarouselRef>,
): JSX.Element;

export interface CarouselProps {
  children: any;
  showsIndicator?: boolean;

  onPageChange?: ({
    currentPage,
    pageCount,
  }: CarouselPageChangeHandlerProps) => void;

  onLayout?: ({
    pageWidth,
    pageHeight,
    pageCount,
  }: CarouselLayoutHandlerProps) => void;

  renderIndicator?: ({
    currentPage,
    index,
  }: CarouselIndicatorRendererProps) => React.ReactElement;
}

export interface CarouselPageChangeHandlerProps {
  currentPage: number;
  pageCount: number;
}

export interface CarouselPageLayoutHandlerProps {
  pageWidth: number;
  pageHeight: number;
  pageCount: number;
}

export interface CarouselIndicatorRendererProps {
  currentPage: number;
  index: number;
}

export interface CarouselRef {
  goToPage(page: number, animated?: boolean): void;
  scrollView: ScrollView;
}
