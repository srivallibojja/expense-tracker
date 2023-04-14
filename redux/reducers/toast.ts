import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { ToastTypes } from '../types';

interface ToastState {
  messages: ToastTypes.MessageInterface[];
}

const initialState: ToastState = {
  messages: []
};

export default createReducer(initialState, (builder) => {
  builder.addCase(
    ToastTypes.ACTION.ADD_MESSAGE,
    (state, action: PayloadAction<any>) => {
      return {
        ...state,
        messages: [
          ...state.messages.filter(
            (toast) => toast.message !== action.payload.message
          ),
          {
            message: action.payload.message || 'Time.Dev - Toast Message',
            duration: action.payload.duration || 5000,
            type: action.payload.type || 'info'
          }
        ]
      };
    }
  );

  builder.addCase(
    ToastTypes.ACTION.REMOVE_MESSAGE,
    (state, action: PayloadAction<any>) => {
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.message !== action.payload.message
        )
      };
    }
  );
});
