// ----------------------------------------
// ACTION TYPES
// ----------------------------------------

export const ACTION = {
  ADD_MESSAGE: 'TOAST/ADD_MESSAGE',
  REMOVE_MESSAGE: 'TOAST/REMOVE_MESSAGE'
};

// ----------------------------------------
// OTHER INTERFACES
// ----------------------------------------

export interface MessageInterface {
  message: string;
  type: 'success' | 'warning' | 'error' | 'info' | 'loading';
  duration: number;
}
