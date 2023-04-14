// ----------------------------------------
// ACTION TYPES
// ----------------------------------------

export const ACTION = {
    GET_TIMER: 'POMODORO/GET_TIMER',
    GET_BREAKTIME: 'POMODORO/GET_BREAKTIME',
    RESET_TIMERS: 'POMODORO/RESET_TIMERS',
    START_TIMER: 'POMODORO/START_TIMER',
    TOGGLE_TIMER_LABEL: 'POMODORO/TOGGLE_TIMER_LABEL',
    TOGGLE_ISBUSY_INDICATOR: 'POMODORO/TOGGLE_ISBUSY_INDICATOR',
    INCREASE_BREAK_VALUE: 'POMODORO/INCREASE_BREAK_VALUE',
    DECREASE_BREAK_VALUE: 'POMODORO/DECREASE_BREAK_VALUE',
    INCREASE_SESSION_VALUE: 'POMODORO/INCREASE_SESSION_VALUE',
    DECREASE_SESSION_VALUE: 'POMODORO/DECREASE_SESSION_VALUE',
    GET_ALL: 'POMODORO/GET_ALL',
    GET_SESSIONS: 'POMODORO/GET_SESSIONS',
    GET_LEVELS: 'POMODORO/GET_LEVELS',
    GET_LOGIN: 'TODO/GET_LOGIN',
  };
  
  // ----------------------------------------
  // PAYLOAD INTERFACES
  // ----------------------------------------
  
  export interface CreateSamplePayload {
    sampleId?: string;
    title: string;
    message: string;
  }
  
  export interface UpdateSamplePayload {
    sampleId: number;
    title?: string;
    message?: string;
  }
  
  // ----------------------------------------
  // RESPONSE INTERFACES
  // ----------------------------------------
  
  
  export interface Pomodoro {
    sampleId: number;
    title: string;
    message: string;
  }