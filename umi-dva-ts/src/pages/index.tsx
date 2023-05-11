
import { useEffect } from 'react';
import yayJpg from '../assets/yay.jpg';
import { useSelector, useDispatch } from 'umi';

export default function HomePage() {
  const dispatch = useDispatch()
  const demoData = useSelector((state: any) => {
    console.log(state.demo.data);
    return state.demo.data

  })
  useEffect(() => {
    dispatch({ type: 'demo/getDemoDataAsync', payload: { value: "传值测试" } })
    return () => {
    };
  }, [])
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <h2>demoData异步请求数据</h2>
      <ul>
        {
          demoData.map((item: any, index: number) => <li key={item.id}>{item.name}</li>)
        }
      </ul>

    </div>
  );
}
