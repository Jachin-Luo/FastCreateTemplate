import { DvaModel, EffectsMapObject, ReducersMapObject } from 'umi'
import axios from 'axios'
interface stateType {
    data: any[],
}
const demoModel: DvaModel<stateType, EffectsMapObject, ReducersMapObject<stateType>> = {
    // 状态机模块名称（如果没有设置该属性，默认当前文件名为模块名）
    namespace: 'demo',
    // 数据
    state: {
        data: [],
    },
    // 修改数据的同步方法
    reducers: {
        getDemoData(prevState, action) {
            console.log('--------------getDemoData----------------', action);
            return { ...prevState, data: action.payload }
        }
    },
    // 异步方法
    effects: {
        * getDemoDataAsync(action, effects) {
            //发送异步请求时传参测试
            console.log(action.payload);
            const demoApi = () => axios.get('http://localhost:8000/api/testData')
            const result: { data: any } = yield effects.call(demoApi)
            yield effects.put({ type: 'getDemoData', payload: result.data.list })

        }
    },

}

export default demoModel