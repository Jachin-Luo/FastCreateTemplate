import mockjs from "mockjs";
export default {
    'GET /api/testData':mockjs.mock({
        'list|10': [
            {
              'id|+1': 1,
              'name': '@cname',
              'age|18-60': 1,
              'address': '@city',
            }
          ]
    })
}