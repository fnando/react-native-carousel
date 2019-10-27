import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { ScrollView, View } from "react-native";

import {
  CarouselIndicatorRendererProps,
  CarouselProps,
  CarouselRef,
} from "../index.d";
import { Indicator } from "./Indicator";
import { range } from "./range";

const defaultIndicatorRenderer = ({
  currentPage,
  index,
}: CarouselIndicatorRendererProps): JSX.Element => (
  <Indicator key={index} currentPage={currentPage} index={index} />
);

const CarouselComponent = (
  {
    children,
    renderIndicator = defaultIndicatorRenderer,
    showsIndicator = true,
    onPageChange,
    onLayout,
  }: CarouselProps,
  ref: any,
): JSX.Element => {
  const [pageWidth, setPageWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const scrollView: any = useRef();
  const pageCount = children.length;

  useImperativeHandle(
    ref,
    (): CarouselRef => ({
      scrollView: scrollView.current,
      goToPage(page: number, animated: boolean = true) {
        if (scrollView.current) {
          scrollView.current.scrollTo({
            x: pageWidth * (page - 1),
            y: 0,
            animated,
          });
        }
      },
    }),
  );

  const handleScroll = ({
    nativeEvent: {
      contentOffset: { x },
    },
  }: {
    nativeEvent: { contentOffset: { x: number } };
  }) => {
    const newPage = Math.round(Math.abs(x / pageWidth));

    if (newPage !== currentPage) {
      setCurrentPage(newPage);

      if (onPageChange instanceof Function) {
        onPageChange({ currentPage: newPage, pageCount });
      }
    }
  };

  const handleLayout = ({
    nativeEvent: {
      layout: { width, height },
    },
  }: {
    nativeEvent: { layout: { width: number; height: number } };
  }) => {
    setPageWidth(width);

    if (onLayout instanceof Function) {
      onLayout({ pageCount, pageWidth: width, pageHeight: height });
    }
  };

  return (
    <>
      <ScrollView
        ref={scrollView}
        bounces={false}
        horizontal
        onLayout={handleLayout}
        onScroll={handleScroll}
        onScrollBeginDrag={handleScroll}
        pagingEnabled
        scrollEventThrottle={100}
        showsHorizontalScrollIndicator={false}
      >
        {children.map((child: any, index: number) => (
          <View key={index} style={{ width: pageWidth }}>
            {child}
          </View>
        ))}
      </ScrollView>

      {showsIndicator && (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {range(pageCount).map((index) =>
            renderIndicator({ index, currentPage }),
          )}
        </View>
      )}
    </>
  );
};

export const Carousel = forwardRef(CarouselComponent);
