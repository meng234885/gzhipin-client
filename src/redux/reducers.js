import {combineReducers} from 'redux'

function xxx(previous = 0, action) {

    return previous
}

function yyy(previous = 0, action) {

    return previous
}

// 返回合并后的reducer函数
export default combineReducers({
    xxx,
    yyy
})