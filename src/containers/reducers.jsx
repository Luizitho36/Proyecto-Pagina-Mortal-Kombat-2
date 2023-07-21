const initialState = {
    carrito: [],
  };

  function rootReducer(state= initialState, action){
    switch(action.type){
        case "SUMAR_CARRITO":
           const newCarrito =  state.carrito.concat(action.payload)
            return{
                ...state,
                carrito : newCarrito
            }

        default:
            return state;
    }
  }

  export default rootReducer;