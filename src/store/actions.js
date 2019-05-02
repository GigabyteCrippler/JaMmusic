const UPDATE_NAME = 'UPDATE_NAME';
// const UPDATE_FULLMENU = 'UPDATE_FULLMENU';
const UPDATE_WIDESCREEN = 'UPDATE_WIDESCREEN';
const UPDATE_ROLE = 'UPDATE_ROLE';
const UPDATE_MENU = 'UPDATE_MENU';

const updateName = name => ({ type: UPDATE_NAME, name });
// const updateFullmenu = fullMenu => ({ type: UPDATE_FULLMENU, fullMenu });
const updateWidescreen = widescreen => ({ type: UPDATE_WIDESCREEN, widescreen });
const updateRole = role => ({ type: UPDATE_ROLE, role });
const updateMenu = menu => ({ type: UPDATE_MENU, menu });

export {
  UPDATE_NAME, UPDATE_MENU, UPDATE_ROLE, UPDATE_WIDESCREEN,
  updateName, updateWidescreen, updateRole, updateMenu
};
