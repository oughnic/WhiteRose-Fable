/**
 * Touch mode: whether the visitor is walking with a finger or pen (thumb pad shown)
 * or with a mouse (thumb pad hidden). It starts from the device's primary pointer and
 * then follows the last pointer that touched the page, so a touch-screen laptop
 * swaps back and forth as hands move. body.touch carries it to the CSS.
 */
let touchMode = matchMedia('(pointer: coarse)').matches;

const applyInputMode = (touch: boolean) => {
  touchMode = touch;
  document.body.classList.toggle('touch', touch);
};

export const isTouchMode = () => touchMode;

/** A mouse-first device (desktop, laptop): a mouse click may take the pointer lock. */
export const isMouseFirst = () => matchMedia('(pointer: fine)').matches;

/** Start tracking; `onChange` hears every switch between touch and mouse. */
export const watchInputMode = (onChange?: (touch: boolean) => void) => {
  applyInputMode(touchMode);
  addEventListener(
    'pointerdown',
    (e) => {
      const touch = e.pointerType === 'touch' || e.pointerType === 'pen' ? true : e.pointerType === 'mouse' ? false : touchMode;
      if (touch === touchMode) return;
      applyInputMode(touch);
      onChange?.(touch);
    },
    { capture: true }
  );
};
