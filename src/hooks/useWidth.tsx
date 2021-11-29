import { size } from "constant";
import { WidthMode } from "models/layout";
import { setWidth, setWidthMode } from "modules/layoutSlice";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "modules/store";

type WidthRes = {
  width: number;
  widthMode: WidthMode;
};

const getWidthInfo = (): WidthRes => {
  const width = window.innerWidth;
  let mode: WidthMode = WidthMode.Desktop;
  if (width > size.desktopMin) {
    mode = WidthMode.Desktop;
  } else if (width > size.tabletMin) {
    mode = WidthMode.Tablet;
  } else {
    mode = WidthMode.Mobile;
  }
  return { width, widthMode: mode };
};

export function useWidth(): WidthRes {
  const width = useSelector((state: State) => state.layout.width);
  const widthMode = useSelector((state: State) => state.layout.widthMode);

  return {
    width,
    widthMode,
  };
}

export function useWidthStartup() {
  const dispatch = useDispatch();

  const handleResize = useCallback(() => {
    const { width, widthMode } = getWidthInfo();
    dispatch(setWidth(width));
    dispatch(setWidthMode(widthMode));
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line
  }, []);
}
