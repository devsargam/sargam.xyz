'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export const AnimatedCursor = () => {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isActive, setIsActive] = useState<boolean>(false);

  const previousTimeRef = useRef<number | null>(null);
  const requestRef = useRef<number | null>(null);

  const endX = useRef(0);
  const endY = useRef(0);

  const onMouseMove = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event;
    setCoords({ x: clientX, y: clientY });
    if (cursorInnerRef.current !== null) {
      cursorInnerRef.current.style.top = `${clientY}px`;
      cursorInnerRef.current.style.left = `${clientX}px`;
    }
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  const animateOuterCursor = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / 8;
        coords.y += (endY.current - coords.y) / 8;
        if (cursorOuterRef.current !== null) {
          cursorOuterRef.current.style.top = `${coords.y}px`;
          cursorOuterRef.current.style.left = `${coords.x}px`;
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    },
    [requestRef], // eslint-disable-line
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animateOuterCursor]);

  const onMouseDown = useCallback(() => setIsActive(true), []);
  const onMouseUp = useCallback(() => setIsActive(false), []);

  const getScaleAmount = (orignalSize: number, scaleAmount: number) => {
    return `${parseInt(String(orignalSize * scaleAmount))}px`;
  };

  const scaleBySize = useCallback(
    (
      cursorRef: HTMLDivElement | null,
      orignalSize: number,
      scaleAmount: number,
    ) => {
      if (cursorRef) {
        cursorRef.style.height = getScaleAmount(orignalSize, scaleAmount);
        cursorRef.style.width = getScaleAmount(orignalSize, scaleAmount);
      }
    },
    [],
  );

  useEffect(() => {
    if (isActive) {
      scaleBySize(cursorInnerRef.current, 20, 0.6);
      scaleBySize(cursorOuterRef.current, 20, 6);
    } else {
      scaleBySize(cursorInnerRef.current, 20, 1);
      scaleBySize(cursorOuterRef.current, 25, 1);
    }
  }, [scaleBySize, isActive]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
  }, [onMouseUp, onMouseDown, onMouseMove]);

  const coreStyles: Record<string, string | number> = {
    zIndex: 999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    borderRadius: '50%',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    transition:
      'opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out',
  };

  const styles = {
    cursorInner: {
      width: 15,
      height: 15,
      backgroundColor: `rgba(128, 128, 128, 0.9)`,
      ...coreStyles,
    },
    cursorOuter: {
      width: 25,
      height: 20,
      backgroundColor: `rgba(${'128, 128, 128'}, 0.4)`,
      ...coreStyles,
    },
  };

  // Some hack to detect is a device is touch or not
  if (typeof window !== 'undefined' && matchMedia('(hover: none)').matches)
    return null;

  return (
    <>
      <div ref={cursorOuterRef} style={styles.cursorOuter} />
      <div ref={cursorInnerRef} style={styles.cursorInner} />
    </>
  );
};
