
import Layout from '../../components/Layout'
export default function GetCountry(props){
    return <Layout>
        {props.resData.map((ele, index, self) => (
            <li key={index}>
                <p style={{'color': 'red'}}>Code: {ele.RegionCode}</p>
                <p>区名：{ele.RegionName}</p>
                <p>类型：{ele.RegionType}</p>
                <p>经纬度：{ele.CenterLonLat}</p>
            </li>
        ))}
    </Layout>
}

export async function getServerSideProps(){
    const res = await fetch(`https://api.gugudata.com/location/chinaregions/demo`)
    const resData = await res.json();
    return {
        props: {
            resData: resData.Data
        }
    }
}