import { ToastTypes } from '../types';

export const addMessage = (
  message?: string,
  type?: 'success' | 'warning' | 'error' | 'info' | 'loading',
  duration?: number,
  handler?: () => void
) => {
  return (dispatch: any) => {
    dispatch({
      type: ToastTypes.ACTION.ADD_MESSAGE,
      payload: {
        message: message,
        type: type,
        duration: duration
      }
    });
    handler && handler();
  };
};

export const removeMessage = (message: string, handler?: () => void) => {
  return (dispatch: any) => {
    dispatch({
      type: ToastTypes.ACTION.REMOVE_MESSAGE,
      payload: {
        message: message
      }
    });
    handler && handler();
  };
};
