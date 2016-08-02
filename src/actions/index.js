import  {CSV_PARSED} from './types';

export function passJSON(data) {
  return {
    type: CSV_PARSED,
    payload: data
  }
}
