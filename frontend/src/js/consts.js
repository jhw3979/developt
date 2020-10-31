// parser
export const SLIDE_REGEXP = '\n\n---\n\n';
export const INIT_CONTENTS = `# Slide 1${SLIDE_REGEXP}# Slide 2${SLIDE_REGEXP}# Slide 3${SLIDE_REGEXP}# Slide 4\n`;
// storage
export const USER_INFO = 'userInfo';
// className
export const LOGGED = 'logged';
export const UNLOGGED = 'unlogged';
// dataset
export const USER = 'user';
export const CRUD = 'crud';
export const LOGOUT = 'logout';
export const NEW = 'new';
export const GET = 'get';
export const POST = 'post';
export const DELETE = 'delete';
export const FULLSCREEN = 'fullscreen';
// keys
export const KEYS = {
  RIGHT: 'ArrowRight',
  DOWN: 'ArrowDown',
  LEFT: 'ArrowLeft',
  UP: 'ArrowUp',
  SPACE_BAR: 'Space',
  BACK_SPACE: 'Backspace',
};
export const NEXT_KEYS = [KEYS.RIGHT, KEYS.DOWN, KEYS.SPACE_BAR];
export const PREV_KEYS = [KEYS.LEFT, KEYS.UP, KEYS.BACK_SPACE];
