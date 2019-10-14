export const reducer= function(state,action){
   if(action.type=='name'){
     return action.payload;
   }
   return state;
}