import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { PomodoroTypes } from '../types';

interface PomodoroState {
    presentTimer: number;
    presentBreak: number;
    timerLabel: string;
    staticTimer:string;
    staticBreak:string;
    newRecord?: PomodoroTypes.Pomodoro;
    busyIndicator: boolean;
    records?: any;
    // records?: PomodoroTypes.Pomodoro[];
    error?: any;
    usage?: any;
    level?: any;
    streak?: any;
}

const initialState: PomodoroState = { 
    presentTimer: 0,
    presentBreak: 0,
    staticTimer:"0",
    staticBreak: "0",
    timerLabel: "Session",
    busyIndicator: false
};

export default createReducer(initialState, (builder) => {

  builder.addCase(
    PomodoroTypes.ACTION.GET_TIMER,
    (state, action: PayloadAction<any>) => {
      if (action.payload.data) 
        return {
            ...state, 
            presentTimer: +(action.payload.data.timer)*60,
            staticTimer: action.payload.data.timer,
            staticBreak: action.payload.data.breakTime,
            records: action.payload.data 
        };
      return { 
        ...state, 
        error: action.payload.message 
    };
    }
  );

  builder.addCase(
    PomodoroTypes.ACTION.GET_SESSIONS,
    (state, action: PayloadAction<any>) => {
      if (action.payload.data) 
        return {
            ...state, 
            usage: action.payload.data
        };
      return { 
        ...state, 
        error: action.payload.message 
    };
    }
  );

  builder.addCase(
    PomodoroTypes.ACTION.GET_LEVELS,
    (state, action: PayloadAction<any>) => {
      if (action.payload.data) 
        return {
            ...state, 
            level: action.payload.data
        };
      return { 
        ...state, 
        error: action.payload.message 
    };
    }
  );

  builder.addCase(
    PomodoroTypes.ACTION.RESET_TIMERS,
    (state, action: PayloadAction<any>) => {
        return {
            ...state,
            presentTimer: +(state.records.timer)*60
        }
    }
  )

  builder.addCase(
    PomodoroTypes.ACTION.START_TIMER,
    (state, action: PayloadAction<any>) => {
        return {
            ...state,
            presentTimer: action.payload
        }
    }
  )

  builder.addCase(
    PomodoroTypes.ACTION.TOGGLE_TIMER_LABEL,
    (state, action: PayloadAction<any>) => {
        return {
            ...state,
            timerLabel: action.payload
        }
    }
  )
  
  builder.addCase(
    PomodoroTypes.ACTION.TOGGLE_ISBUSY_INDICATOR,
    (state, action: PayloadAction<any>) => {
        return {
            ...state,
            busyIndicator: action.payload
        }
    }
  )
  
  builder.addCase(
    PomodoroTypes.ACTION.INCREASE_BREAK_VALUE,
    (state, action: PayloadAction<any>) => {
        return {
            ...state,
            records: {
              ...state.records,
              breakTime: `${action.payload}`
            }
        }
    }
  )
  
  builder.addCase(
    PomodoroTypes.ACTION.DECREASE_BREAK_VALUE,
    (state, action: PayloadAction<any>) => {
        return {
            ...state,
            records: {
              ...state.records,
              breakTime: `${action.payload}`
            }
        }
    }
  )
  
  builder.addCase(
    PomodoroTypes.ACTION.DECREASE_SESSION_VALUE,
    (state, action: PayloadAction<any>) => {
        return {
            ...state,
            records: {
              ...state.records,
              timer: `${action.payload}`
            }
        }
    }
  )
  
  builder.addCase(
    PomodoroTypes.ACTION.INCREASE_SESSION_VALUE,
    (state, action: PayloadAction<any>) => {
        return {
            ...state,
            records: {
              ...state.records,
              timer: `${action.payload}`
            }
        }
    }
  )
  
  builder.addCase(
    PomodoroTypes.ACTION.GET_LOGIN,
    (state, action: PayloadAction<any>) => {
      if (action.payload.data)
        return {
            ...state,
            streak: action.payload.data
        };
      return { 
        ...state, 
        error: action.payload.message 
      };
    }
  );
});
