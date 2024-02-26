import { configureStore, createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
   name: "mmm",
   initialState: {
      open: false,
      open2: false,
      count: 0,

      users: [
         {
            img: "https://kfc.com.uz/admin/files/4474.jpg",
            name: "CHEESEBURGER",
            name2: '28 000',
            productCount: 20
         },
         {
            img: "https://kfc.com.uz/admin/files/4504.jpg",
            name: "BITES M",
            name2: '21 000',
            productCount: 10

         },
         {
            img: "https://kfc.com.uz/admin/files/5315.jpg",
            name: "LUNCHBOX 5 PC.",
            name2: '40 0000',
            productCount: 10
         },
      ],
      users2: [],
      users3: [],
      obj: {
         name: "",
         name2: "",
         productCount: ""
      },
      obj2: {
         adres: "",
         call: "",
      },


   },
   reducers: {
      ok: (state, action) => {
         state.open = !state.open
      },
      name: (state, action) => {
         state.obj = { ...state.obj, name: action.payload }
      },
      name2: (state, action) => {
         state.obj = { ...state.obj, name2: action.payload }
      },
      productCount: (state, action) => {
         state.obj = { ...state.obj, productCount: action.payload }
      },
      save: (state, action) => {
         state.users.push({ ...state.obj, img: action.payload })

         state.open = !state.open

      },
      delet: (state, action) => {
         state.users.splice(action.payload, 1)
      },
      get: (state, action) => {
         state.count++
         state.users2.push({ ...action.payload, count2: 1 })
      },
      bay: (state, action) => {
         state.open2 = !state.open2
      },
      adres: (state, action) => {
         state.obj2 = { ...state.obj2, adres: action.payload }
      },
      call: (state, action) => {
         state.obj2 = { ...state.obj2, call: action.payload }
      },
      bay2: (state, action) => {
         state.users3.push( state.obj2 )
         state.count = 0
         state.users2.splice(length)
         state.open2 = !state.open2

      },
      del: (state, action) => {
         state.users3.splice(action.payload, 1)
      },
      AllDelet: (state, action) => {
         state.users3.splice(length)
      },
      plus: (state, action) => {
         if(state.users2[action.payload].productCount<=state.users2[action.payload].count2){
            alert("qolmadi")
         }else{
         state.users2[action.payload].count2++

         }
      },
      min: (state, action) => {
         if(state.users2[action.payload].productCount>state.users2[action.payload].count2){
            alert("1")
         }else{
            state.users2.splice(action.payload, 1)
         }
        

      },

   }
})

const store = configureStore({
   reducer: slice.reducer
})



export default store;
export const action = slice.actions








