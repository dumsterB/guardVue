import store from '../store/index.js'

export default function(to,from,next){
 if(store.state.links){
  next()
}else{
  next({name:'Login'})
}
}
