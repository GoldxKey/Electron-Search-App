import {getDefaultKeyBinding, KeyBindingUtil} from 'draft-js';
const {hasCommandModifier} = KeyBindingUtil;
import {
  KEY_MAP
} from './key_map';

export const keyBindingFun = (e) => {
  if(KEY_MAP[e.keyCode] && hasCommandModifier(e)) {
    return KEY_MAP[e.keyCode];
  }
  return getDefaultKeyBinding(e);
};
