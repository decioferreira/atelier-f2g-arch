import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslations } from "gatsby-plugin-translate";
import { StaticImage } from "gatsby-plugin-image";

const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
      {children}
    </button>
  );
};

const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      {children}
    </button>
  );
};

const Carousel = () => {
  const t = useTranslations();
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [
    Autoplay({ delay: 2500 }),
  ]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="embla relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex touch-pan-y">
          <div className="embla__slide" style={{ flexBasis: "256px" }}>
            <StaticImage
              className="embla__slide__img"
              src="../images/01.jpg"
              alt={t`collections.fw_ronoel`}
            />
          </div>
          <div className="embla__slide" style={{ flexBasis: "576px" }}>
            <StaticImage
              className="embla__slide__img"
              src="../images/02.jpg"
              alt={t`collections.fw_ronoel`}
            />
          </div>
          <div className="embla__slide" style={{ flexBasis: "256px" }}>
            <StaticImage
              className="embla__slide__img"
              src="../images/03.jpg"
              alt={t`collections.fw_ronoel`}
            />
          </div>
          <div className="embla__slide" style={{ flexBasis: "256px" }}>
            <StaticImage
              className="embla__slide__img"
              src="../images/04.jpg"
              alt={t`collections.fw_ronoel`}
            />
          </div>
          <div className="embla__slide" style={{ flexBasis: "256px" }}>
            <StaticImage
              className="embla__slide__img"
              src="../images/05.jpg"
              alt={t`collections.fw_ronoel`}
            />
          </div>
          <div className="embla__slide" style={{ flexBasis: "256px" }}>
            <StaticImage
              className="embla__slide__img"
              src="../images/06.jpg"
              alt={t`collections.fw_ronoel`}
            />
          </div>
          <div className="embla__slide" style={{ flexBasis: "256px" }}>
            <StaticImage
              className="embla__slide__img"
              src="../images/07.jpg"
              alt={t`collections.fw_ronoel`}
            />
          </div>
          <div className="embla__slide" style={{ flexBasis: "576px" }}>
            <StaticImage
              className="embla__slide__img"
              src="../images/08.jpg"
              alt={t`collections.fw_ronoel`}
            />
          </div>
          <div className="embla__slide" style={{ flexBasis: "256px" }}>
            <StaticImage
              className="embla__slide__img"
              src="../images/09.jpg"
              alt={t`collections.fw_ronoel`}
            />
          </div>
          <div className="embla__slide" style={{ flexBasis: "256px" }}>
            <StaticImage
              className="embla__slide__img"
              src="../images/10.jpg"
              alt={t`collections.fw_ronoel`}
            />
          </div>
          <div className="embla__slide" style={{ flexBasis: "576px" }}>
            <StaticImage
              className="embla__slide__img"
              src="../images/11.jpg"
              alt={t`collections.fw_ronoel`}
            />
          </div>
          <div className="embla__slide" style={{ flexBasis: "256px" }}>
            <StaticImage
              className="embla__slide__img"
              src="../images/12.jpg"
              alt={t`collections.fw_ronoel`}
            />
          </div>
        </div>
      </div>

      <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
      <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
    </div>
  );
};

export default Carousel;
