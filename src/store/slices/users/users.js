import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2';
import localForage from 'localforage'
import moment from 'moment/min/moment-with-locales'
moment.locale("es-mx")

const serializableDate = JSON.stringify(moment())

const initialState = {
  userInfo: {
    'names': '',
    'lastName': '',
    'scdLastName': '',
    'date': '',
  },
  createName: {
    'name': '',
    'date': '',
  },
  list: [],
  userActive: {},
  isEditing:false,
  isPartnerEditing:false,
  addPartner:false,
  hasPartner:false,
  userPartnerActive:{},
  isSelectPartner:false,
  partnerIndex:0,
  partnerSelected:{},
  dateSelected: serializableDate,
  toast: {
    message: '',
    type: '',
    show: false
  }
}

export const userSlice = createSlice({
  name: "users",
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
    setIsEditing:(state,action) => {
      state.isEditing = action.payload
    },
    setAddPartner:(state,action) => {
      state.addPartner = action.payload
    },
    setHasPartner:(state,action) => {
      state.hasPartner = action.payload
    },
    setUserPartnerActive: (state, action) => {
      state.userPartnerActive = action.payload
    },
    setIsSelectPartner: (state, action) => {
      state.isSelectPartner = action.payload
    },
    setIsPartnerEditing:(state,action) => {
      state.isPartnerEditing = action.payload
    },
    setPartnerIndex:(state,action)=>{
      state.partnerIndex = action.payload
    },
    setPartnerSelected:(state,action) =>{
      state.partnerSelected = action.payload
    },
    logout:(state,action) =>{
      state = initialState
    },
    setDateSelected:(state,action) => {
      state.dateSelected = action.payload
    },
    setToast: (state, action) =>{
      state.toast = action.payload
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
  setPartnerIndex,
  setPartnerSelected,
  setDateSelected,
  setToast,
} = userSlice.actions;

export default userSlice.reducer;

export const fetchAllUsers = () => async dispatch => {
  const value = await localForage.getItem('users');
  return value != null ?
    dispatch( setUserList(value) ) :
    dispatch( setUserList([]) );
};
export const setDate = (date) => async dispatch => {
  const serializableDate = JSON.stringify(moment(date))
  dispatch(setDateSelected(serializableDate))
};

export const addUser = user => async dispatch => {
  user.id = generateUserId()
  localForage.getItem('users', (err, users) => {
    if( users == null ){
      users = []
    }
    users = [...users, user]
    localForage.setItem('users', users).then(() => {
      dispatch( setUserList(users) )
      dispatch( selectUserActive( user.id ) )
    })
  })
}

export const showToast = toast => async dispatch => {
  dispatch( setToast( toast ) )
}

export const generateUserId = () => Math.random().toString(36).substring(2, 9);

export const removeUser = id => async dispatch => {
  const users = await localForage.getItem('users')
  Swal.fire({
    title: '¿Estas seguro?',
    text: "La persona se borrara permanentemente",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Borrar',
    cancelButtonText: 'Cancelar'
  }).then( result=> {
    if (result.isConfirmed) {
      const listUsers = users.filter( e => e.id !== id )
      localForage.setItem('users', listUsers ).then(val=>{console.log(val)})
      dispatch( setUserList(listUsers) )
      Swal.fire(
        'Borrado!',
        'La persona ha sido borrada',
        'success'
      )
    }
  })
}

export const editUser = user => async dispatch => {
  const users = await localForage.getItem('users')
  const listUsers = users.filter( e => e.id !== user.id )
  const updatedUsers = [
    ...listUsers,
    user
  ]
  localForage.setItem('users', updatedUsers).then( () => {
    dispatch( setUserList(updatedUsers) )
    dispatch( setIsEditing(false) )
    dispatch( selectUserActive( user.id ) )
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
  })
}



export const selectUserActive = userId => async dispatch => {
  if( userId === 0 ){
    dispatch( setUserActive( [] ) )
    return;
  }
  const users = await localForage.getItem('users')
  const user = users.find( ({ id }) => id === userId )
  dispatch( setUserActive(user) )
}
export const selectUserPartnerActive = (userId,parnetIndex) => async dispatch => {
  const users = await localForage.getItem('users')
  const user = users.find( ({ id }) => id === userId )
  const partnerActive = user.partner[parnetIndex]
  dispatch( setUserPartnerActive(partnerActive) )
}

export const updateUser = user => async dispatch => {
  localForage.setItem('userInfo', user ).then( val => {
    console.log(val)
    dispatch( setUserInfo(user) )
  })
}

// export const fetchUserInfo = () => async dispatch  => {
//   localForage.getItem('userInfo', (err, user) => {
//     if( user != null ){
//       dispatch( setUserInfo(user) )
//     }
//   })
// }

export const updateCreateName = user => async dispatch => {
  localForage.setItem('createName', user ).then( val => {
    console.log(val)
    dispatch( setCreateName(user) )
  })
}