import { createSlice, Dispatch, Slice } from '@reduxjs/toolkit'

const authSlice: Slice = createSlice({
    name: 'demo',
    initialState: {
        demoData: []
    },
    reducers: {
        //同步方法
        getDemoData(state, { payload }) {
            state.demoData = payload
        }
    }
})
//异步方法
export const getDemoDataAsync = async (dispatch: Dispatch) => {
    console.log('--------异步getMenusAsync--------------------');

}
export const { getMenus } = authSlice.actions
export default authSlice.reducer