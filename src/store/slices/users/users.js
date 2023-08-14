import { createSlice } from '@reduxjs/toolkit';
import localForage from 'localforage';
import _ from 'lodash';
import moment from 'moment/min/moment-with-locales';
import Swal from 'sweetalert2';
import { syncGuests, syncUserInfo } from './thunks';
moment.locale('es-mx')

const serializableDate = JSON.stringify(moment())

const initialState = {
  userInfo: {
    names: '',
    lastName: '',
    scdLastName: '',
    date: '',
  },
  createName: {
    name: '',
    date: '',
  },
  list: [],
  userActive: {},
  isEditing: false,
  isPartnerEditing: false,
  isGroupEditing: false,
  addPartner: false,
  hasPartner: false,
  hasGroup: false,
  userPartnerActive: {},
  isSelectPartner: false,
  partnerIndex: 0,
  partnerSelected: {},
  dateSelected: serializableDate,
  toast: {
    message: '',
    type: '',
    show: false
  },
  eventYear: null,
  guests: [],
  guestActive: {}
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
    setCreateName: (state, action) => {
      state.createName = action.payload
    },
    setUserList: (state, action) => {
      state.list = action.payload
    },
    setUserActive: (state, action) => {
      state.userActive = action.payload
    },
    setIsEditing: (state, action) => {
      state.isEditing = action.payload
    },
    setAddPartner: (state, action) => {
      state.addPartner = action.payload
    },
    setHasPartner: (state, action) => {
      state.hasPartner = action.payload
    },
    setUserPartnerActive: (state, action) => {
      state.userPartnerActive = action.payload
    },
    setIsSelectPartner: (state, action) => {
      state.isSelectPartner = action.payload
    },
    setIsPartnerEditing: (state, action) => {
      state.isPartnerEditing = action.payload
    },
    setIsGroupEditing: (state, action) => {
      state.isGroupEditing = action.payload
    },
    setPartnerIndex: (state, action) => {
      state.partnerIndex = action.payload
    },
    setPartnerSelected: (state, action) => {
      state.partnerSelected = action.payload
    },
    logout: (state, action) => {
      state = initialState
    },
    setDateSelected: (state, action) => {
      state.dateSelected = action.payload
    },
    setToast: (state, action) => {
      state.toast = action.payload
    },
    setEventYear: (state, action) => {
      state.eventYear = action.payload
    },
    setHasGroup: (state, action) => {
      state.hasGroup = action.payload
    },
    setGuests: (state, action) => {
      state.guests = action.payload
    },
    setGuestActive: (state, action) => {
      state.guestActive = action.payload
    }
  }
})

export const {
  setUserInfo,
  setCreateName,
  setUserList,
  setUserActive,
  setIsEditing,
  setAddPartner,
  setHasPartner,
  setUserPartnerActive,
  setIsSelectPartner,
  setIsPartnerEditing,
  setIsGroupEditing,
  setPartnerIndex,
  setPartnerSelected,
  setDateSelected,
  setToast,
  setEventYear,
  setHasGroup,
  setGuests,
  setGuestActive
} = userSlice.actions;

export default userSlice.reducer;

export const fetchAllUsers = () => async dispatch => {
  const value = await localForage.getItem('users-v2');
  return value != null
    ? dispatch(setUserList(_.sortBy(value, 'names')))
    : dispatch(setUserList([]));
};
export const setDate = (date) => async dispatch => {
  const serializableDate = JSON.stringify(moment(date))
  dispatch(setDateSelected(serializableDate))
};

export const addUser = user => async dispatch => {
  user.id = generateUserId()
  localForage.getItem('users-v2', (err, users) => {
    if (users == null) {
      users = []
    }
    users = [...users, user]
    localForage.setItem('users-v2', users).then(() => {
      dispatch(setUserList(_.sortBy(users, 'names')))
      syncUserInfo(users)
      dispatch(selectUserActive(user.id))
    })
  })
}

export const setUsers = users => async dispatch => {
  localForage.setItem('users-v2', users).then(() => {
    dispatch(setUserList(_.sortBy(users, 'names')))
  })
}

export const showToast = toast => async dispatch => {
  dispatch(setToast(toast))
}

export const generateUserId = () => Math.random().toString(36).substring(2, 9);

export const removeUser = id => async dispatch => {
  const users = await localForage.getItem('users-v2')
  Swal.fire({
    title: '¿Estas seguro?',
    text: 'La persona se borrara permanentemente',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Borrar',
    cancelButtonText: 'Cancelar'
  }).then(result => {
    if (result.isConfirmed) {
      const listUsers = users.filter(e => e.id !== id)
      localForage.setItem('users-v2', listUsers).then(val => { console.log(val) })
      syncUserInfo(listUsers)
      dispatch(setUserList(_.sortBy(listUsers, 'names')))
      dispatch(showToast({
        message: 'La persona ha sido borrada',
        type: 'success',
        show: true
      }))
    }
  })
}
export const removeGroupUser = (data, i) => async dispatch => {
  const users = await localForage.getItem('users-v2')
  Swal.fire({
    title: '¿Estas seguro?',
    text: 'La persona se borrara permanentemente',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Borrar',
    cancelButtonText: 'Cancelar'
  }).then(result => {
    if (result.isConfirmed) {
      const usertoedit = users.filter(e => e.id === data.id)
      const group = data.group
      const groupwithout = group.filter((e, index) => group[index] !== group[i])
      const userPartners = { ...data, group: Object.keys(groupwithout).map(key => groupwithout[key]) }
      dispatch(editUser(userPartners))
      Swal.fire(
        'Borrado!',
        'La persona ha sido borrada',
        'success'
      )
    }
  })
}

export const removePartnerUser = (data, i) => async dispatch => {
  const users = await localForage.getItem('users-v2')
  Swal.fire({
    title: '¿Estas seguro?',
    text: 'La persona se borrara permanentemente',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Borrar',
    cancelButtonText: 'Cancelar'
  }).then(result => {
    if (result.isConfirmed) {
      const usertoedit = users.filter(e => e.id === data.id)
      const group = data.partner
      const groupwithout = group.filter((e, index) => group[index] !== group[i])
      const userPartners = { ...data, partner: Object.keys(groupwithout).map(key => groupwithout[key]) }
      dispatch(editUser(userPartners))
      Swal.fire(
        'Borrado!',
        'La persona ha sido borrada',
        'success'
      )
    }
  })
}

export const getUser = (userId) => async dispatch => {
  const users = await localForage.getItem('users-v2');
  return users.find(e => e.id === userId);
}

export const updateNotes = (user) => async dispatch => {
  const users = await localForage.getItem('users-v2')
  const listUsers = users.filter(e => e.id !== user.id)
  const updatedUsers = [
    ...listUsers,
    user
  ]
  localForage.setItem('users-v2', updatedUsers).then(() => {
    syncUserInfo(updatedUsers)
    dispatch(selectUserActive(user.id))
  });
}

export const editUser = userUpdated => async dispatch => {
  const users = await localForage.getItem('users-v2')
  const listUsers = users.filter(e => e.id !== userUpdated.id)
  const user = users.find(e => e.id === userUpdated.id)
  const newUser = { ...user, ...userUpdated }
  console.log({ user, userUpdated, newUser })
  const updatedUsers = [
    ...listUsers,
    newUser
  ]
  localForage.setItem('users-v2', updatedUsers).then(() => {
    dispatch(setUserList(_.sortBy(updatedUsers, 'names')))
    syncUserInfo(updatedUsers)
    dispatch(setIsEditing(false))
    dispatch(selectUserActive(user.id))
    // dispatch( setAddPartner(false) )
    // dispatch( setIsPartnerEditing(false) )
    // window.location.reload(false);
    // if( user.partner ){
    //   console.log({
    //     id: user.id,
    //     len: user.partner.length
    //   })
    //   dispatch( selectUserPartnerActive( user.id, user.partner.length - 1 ) )
    //   dispatch( setIsSelectPartner(true) )
    //   dispatch( setPartnerIndex(user.partner.length - 1 ) )
    // }
  }).catch((err) => {
    console.log('ERROR =>>' + err)
  })
}



export const selectUserActive = userId => async dispatch => {
  if (userId === 0) {
    dispatch(setUserActive([]))
    return;
  }
  const users = await localForage.getItem('users-v2')
  const user = users.find(({ id }) => id === userId)
  dispatch(setUserActive(user))
  dispatch(setEventYear(null))
}
export const selectUserPartnerActive = (userId, parnetIndex) => async dispatch => {
  const users = await localForage.getItem('users-v2')
  const user = users.find(({ id }) => id === userId)
  const partnerActive = user.partner[parnetIndex]
  dispatch(setUserPartnerActive(partnerActive))
}

export const updateUser = user => async dispatch => {
  localForage.setItem('userInfo-v2', user).then(val => {
    dispatch(setUserInfo(user))
  })
}

// export const fetchUserInfo = () => async dispatch  => {
//   localForage.getItem('userInfo-v2', (err, user) => {
//     if( user != null ){
//       dispatch( setUserInfo(user) )
//     }
//   })
// }

export const updateCreateName = user => async dispatch => {
  localForage.setItem('createName-v2', user).then(val => {
    dispatch(setCreateName(user))
  })
}

export const getGuestByIndex = (index) => async dispatch => {
  let guests = await localForage.getItem('guests-v2');
  if (!guests) guests = []
  dispatch(setGuestActive({
    name: guests[index - 1]?.name ?? '',
    date: guests[index - 1]?.date ?? ''
  }))
};

export const updateGuestByIndex = (index, guest) => async dispatch => {
  let guests = await localForage.getItem('guests-v2')
  if (!guests) guests = []
  guests[index - 1] = guest
  localForage.setItem('guests-v2', guests).then(() => {
    dispatch(setGuests(guests))
    syncGuests(guests)
  })
}

export const setGuestsLogin = guests => async dispatch => {
  localForage.setItem('guests-v2', guests).then(() => {
    dispatch(setGuests(guests))
  })
}