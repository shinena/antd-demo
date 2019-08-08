export const add = (num) => ({type:'add', payload: num}) // action creator
export const minus= () => ({type:'minus'})
// 异步返回对是函数
export const asyncAdd= () => dispatch => {
  setTimeout(()=>{
    dispatch({type:'add'})
  }, 1000)
}

export const counterReducer = function (state = 0, action) {
  const num = action.payload || 1
  switch (action.type) {
    case 'add':
      return state + num
    case 'minus':
      return state - num
    default:
      return state
  }
}