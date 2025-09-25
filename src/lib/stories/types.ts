export type InputFocusEvent = FocusEvent & {
  currentTarget: EventTarget & HTMLInputElement;
};

export type InputClipboardEvent = ClipboardEvent & {
  currentTarget: EventTarget & HTMLInputElement;
};

export type InputInputEvent = Event & {
  currentTarget: EventTarget & HTMLInputElement;
};

export type InputKeyboardEvent = KeyboardEvent & {
  currentTarget: EventTarget & HTMLInputElement;
};
